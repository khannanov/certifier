import database from '../../firebase';
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

export const getCertificationsList = () => dispatch => {
  dispatch(fetchListStart);
  return database.ref().child('Certifications').once('value', snapshot => {
    dispatch(fetchListSuccess(snapshot.val()))
  })
    .catch((error) => {
      console.log(error)
      dispatch(fetchListFailure(error))
    })
}