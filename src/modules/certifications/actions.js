import dbRef from '../../firebase'
import {
  FETCH_CERTIFICATIONS_START,
  FETCH_CERTIFICATIONS_SUCCESS,
  FETCH_CERTIFICATIONS_FAILURE,
  ADD_CERTIFICATIONS_START,
  ADD_CERTIFICATIONS_SUCCESS,
  ADD_CERTIFICATIONS_FAILURE,
  EDIT_CERTIFICATIONS_START,
  EDIT_CERTIFICATIONS_SUCCESS,
  EDIT_CERTIFICATIONS_FAILURE,
  FETCH_CERTIFICATION_BY_ID_START,
  FETCH_CERTIFICATION_BY_ID_SUCCESS,
  FETCH_CERTIFICATION_BY_ID_FAILURE,
} from './actionTypes'

const fetchListStart = () => ({
  type: FETCH_CERTIFICATIONS_START,
})

const fetchListSuccess = certifications => ({
  type: FETCH_CERTIFICATIONS_SUCCESS,
  payload: certifications
})

const fetchListFailure = error => ({
  type: FETCH_CERTIFICATIONS_FAILURE,
  payload: error
})

const normalizeCertifications = certifications => {
  const normCertifications = {}

  Object.keys(certifications).map(key => {
    const { id = key, name, description, questions } = certifications[key]
    normCertifications[id] = { id, name, description }
    normCertifications[id]['questions'] = Object.keys(questions)
  })

  return normCertifications;
}

export const getCertificationsList = () => dispatch => {
  dispatch(fetchListStart())
  return dbRef.child('certifications').once('value', snapshot => {
    const normalizedList = normalizeCertifications(snapshot.val())
    dispatch(fetchListSuccess(normalizedList))
  })
    .catch((error) => {
      console.log(error)
      dispatch(fetchListFailure(error))
    })
}


// add

const addStart = () => ({
  type: ADD_CERTIFICATIONS_START
})

const addSuccess = certification => ({
  type: ADD_CERTIFICATIONS_SUCCESS,
  payload: certification
})

const addFailure = error => ({
  type: ADD_CERTIFICATIONS_FAILURE,
  payload: error
})

const certificationCreate = certification => {
  const newKey = dbRef.child('certifications').push().key;

  const updates = {}
  updates['/certifications/' + newKey] = certification

  return dbRef.update(updates)
}

export const addCertification = certification => dispatch => {
  dispatch(addStart())
  return certificationCreate(certification).then(response => {
    console.log('---- add ', response);

    dispatch(addSuccess(response.val()))
  })
    .catch(error => dispatch(addFailure(error)))
}

// edit

const certificationUpdate = certification => {
  return database.ref('/certifications/' + certification.id).set({
    ...certification
  })
}

const editStart = () => ({
  type: EDIT_CERTIFICATIONS_START
})

const editSuccess = certification => ({
  type: EDIT_CERTIFICATIONS_SUCCESS,
  payload: certification
})

const editFailure = error => ({
  type: EDIT_CERTIFICATIONS_FAILURE,
  payload: error
})

export const editCertification = certification => dispatch => {
  dispatch(editStart())
  return certificationUpdate(certification).then(() => {
    // no response @see https://firebase.google.com/docs/reference/js/firebase.database.Reference#set
    dispatch(editSuccess(certification))
  })
    .catch(error => {
      console.error(error);
      dispatch(editFailure(error))
    })
}

// fetch

const fetchByIdStart = () => ({
  type: FETCH_CERTIFICATION_BY_ID_START
})

const fetchByIdSuccess = certification => ({
  type: FETCH_CERTIFICATION_BY_ID_SUCCESS,
  payload: certification
})

const fetchByIdFailure = error => ({
  type: FETCH_CERTIFICATION_BY_ID_FAILURE,
  payload: error
})

export const fetchCertificationById = id => dispatch => {
  dispatch(fetchByIdStart())
  return database.ref(`/certifications/${id}`).once('value').then(snapshot => {
    const certification = { id, ...snapshot.val()}
    dispatch(fetchByIdSuccess(certification))
  })
    .catch(error => dispatch(fetchByIdFailure(error)))
}