import database from '../../firebase'
import {
  FETCH_QUESTIONS_BY_CERT_ID_START,
  FETCH_QUESTIONS_BY_CERT_ID_SUCCESS,
  FETCH_QUESTIONS_BY_CERT_ID_FAILURE
} from './actionTypes'

const fetchByCertIdStart = () => ({
  type: FETCH_QUESTIONS_BY_CERT_ID_START,
})

const fetchByCertIdSuccess = questions => ({
  type: FETCH_QUESTIONS_BY_CERT_ID_SUCCESS,
  payload: questions
})

const fetchByCertIdFailure = error => ({
  type: FETCH_QUESTIONS_BY_CERT_ID_FAILURE,
  payload: error
})

export const getQuestionsByCertId = () => dispatch => {
  dispatch(fetchByCertIdStart())
  return database.ref().child('questions').once('value', snapshot => {
    console.log('----', snapshot.val());
    // const normalizedList = normalizeList(snapshot.val())
    dispatch(fetchByCertIdSuccess())
  })
    .catch((error) => {
      console.log(error)
      dispatch(fetchByCertIdFailure(error))
    })
}