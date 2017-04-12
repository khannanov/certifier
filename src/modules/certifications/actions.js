import {
  getAll,
  getById,
  create,
  update,
  getNewKey
} from './apiCalls'

import {
  FETCH_CERTIFICATIONS_START,
  FETCH_CERTIFICATIONS_SUCCESS,
  FETCH_CERTIFICATIONS_FAILURE,
  ADD_CERTIFICATIONS_START,
  ADD_CERTIFICATIONS_SUCCESS,
  ADD_CERTIFICATIONS_FAILURE,
  UPDATE_CERTIFICATIONS_START,
  UPDATE_CERTIFICATIONS_SUCCESS,
  UPDATE_CERTIFICATIONS_FAILURE,
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

  return getAll().then(snapshot => {
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

export const addCertification = certification => dispatch => {
  dispatch(addStart())
  const newKey = getNewKey()

  return create(certification, newKey).then(() => {
    // no response @see https://firebase.google.com/docs/reference/js/firebase.database.Reference#set
    dispatch(addSuccess({ ...certification, id: newKey }))
  })
    .catch(error => dispatch(addFailure(error)))
}

// edit

const updateStart = () => ({
  type: UPDATE_CERTIFICATIONS_START
})

const updateSuccess = certification => ({
  type: UPDATE_CERTIFICATIONS_SUCCESS,
  payload: certification
})

const updateFailure = error => ({
  type: UPDATE_CERTIFICATIONS_FAILURE,
  payload: error
})

export const updateCertification = certification => dispatch => {
  dispatch(updateStart())
  return update(certification).then(() => {
    dispatch(updateSuccess(certification))
  })
    .catch(error => {
      console.error(error);
      dispatch(updateFailure(error))
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
  return getById(id).then(snapshot => {
    const normalized = {
      id,
      ...snapshot.val(),
      questions: Object.keys(snapshot.val().questions)
    }
    dispatch(fetchByIdSuccess(normalized))
  })
    .catch(error => dispatch(fetchByIdFailure(error)))
}