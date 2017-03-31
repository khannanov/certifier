import dbRef from '../../firebase'
import {
  FETCH_QUESTIONS_BY_CERT_ID_START,
  FETCH_QUESTIONS_BY_CERT_ID_SUCCESS,
  FETCH_QUESTIONS_BY_CERT_ID_FAILURE
} from './actionTypes'

const fetchByCertIdStart = () => ({
  type: FETCH_QUESTIONS_BY_CERT_ID_START,
})

const fetchByIdsSuccess = questions => ({
  type: FETCH_QUESTIONS_BY_CERT_ID_SUCCESS,
  payload: questions
})

const fetchByCertIdFailure = error => ({
  type: FETCH_QUESTIONS_BY_CERT_ID_FAILURE,
  payload: error
})

// const normalizeQuestions = questions => {
//   return Object.keys(questions).map(id => ({
//     id: id,
//     name: questions[id].name,
//   }))
// }

export const getQuestionsByCertId = (id) => dispatch => {
  dispatch(fetchByCertIdStart())

    return dbRef.child(`questions/${id}`).once('value')
      .then(snapshot => {
        console.log('- --- snapshot.val()', snapshot.val())
        // const questions = normalizeQuestions(snapshot.val())
        const questions = snapshot.val()
        dispatch(fetchByIdsSuccess(questions))
        console.log('snap norm', questions)
      })

  // Promise.all(
  //   ids.map(id => {
  //     console.log('send request '+id);
  //     return dbRef.ref().child('questions').child(id).once('value')
  //       .then(snapshot => {
  //         console.log('got response ' + id)
  //         return snapshot
  //       })
  //   })
  // ).then(r => console.log('parallel done after '+(Date.now() - start)+'ms') )

  // return dbRef.ref().child('questions').once('value', snapshot => {
  //   console.log('----', snapshot.val());
  //   // const normalizedList = normalizeList(snapshot.val())
  //   dispatch(fetchByIdsSuccess())
  // })
  //   .catch((error) => {
  //     console.log(error)
  //     dispatch(fetchByCertIdFailure(error))
  //   })

}