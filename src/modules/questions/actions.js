import database from '../../firebase'
import {
  FETCH_QUESTIONS_BY_IDS_START,
  FETCH_QUESTIONS_BY_IDS_SUCCESS,
  FETCH_QUESTIONS_BY_IDS_FAILURE
} from './actionTypes'

const fetchByCertIdStart = () => ({
  type: FETCH_QUESTIONS_BY_IDS_START,
})

const fetchByIdsSuccess = questions => ({
  type: FETCH_QUESTIONS_BY_IDS_SUCCESS,
  payload: questions
})

const fetchByCertIdFailure = error => ({
  type: FETCH_QUESTIONS_BY_IDS_FAILURE,
  payload: error
})

export const getQuestionsByIds = (ids) => dispatch => {
  dispatch(fetchByCertIdStart())

  Promise.all(
    ids.map(id => {
      console.log('send request '+id);
      return database.ref().child('questions').child(id).once('value')
        .then(snapshot => {
          console.log('got response ' + id)
          return snapshot
        })
    })
  ).then(r => console.log('parallel done after '+(Date.now() - start)+'ms') )

  // return database.ref().child('questions').once('value', snapshot => {
  //   console.log('----', snapshot.val());
  //   // const normalizedList = normalizeList(snapshot.val())
  //   dispatch(fetchByIdsSuccess())
  // })
  //   .catch((error) => {
  //     console.log(error)
  //     dispatch(fetchByCertIdFailure(error))
  //   })
}