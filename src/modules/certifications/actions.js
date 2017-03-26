import database from '../../firebase'
import {
  FETCH_CERTIFICATIONS_START,
  FETCH_CERTIFICATIONS_SUCCESS,
  FETCH_CERTIFICATIONS_FAILURE
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

const prepareList = certifications => {
  return Object.keys(certifications).map(key => {
    return {
      id: key,
      ...certifications[key]
    }
  })
}

export const getCertificationsList = () => dispatch => {
  dispatch(fetchListStart());
  return database.ref().child('certifications').once('value', snapshot => {
    console.log('----', snapshot.val());
    const normalizedList = prepareList(snapshot.val())
    dispatch(fetchListSuccess(normalizedList))
  })
    .catch((error) => {
      console.log(error)
      dispatch(fetchListFailure(error))
    })
}
