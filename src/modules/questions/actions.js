import dbRef from '../../firebase'
import {
  FETCH_QUESTIONS_BY_CERT_ID_START,
  FETCH_QUESTIONS_BY_CERT_ID_SUCCESS,
  FETCH_QUESTIONS_BY_CERT_ID_FAILURE
} from './actionTypes'

const fetchByIdsStart = () => ({
  type: FETCH_QUESTIONS_BY_CERT_ID_START,
})

const fetchByIdsSuccess = questions => ({
  type: FETCH_QUESTIONS_BY_CERT_ID_SUCCESS,
  payload: questions
})

const fetchByIdsFailure = error => ({
  type: FETCH_QUESTIONS_BY_CERT_ID_FAILURE,
  payload: error
})

const normalizeQuestions = questions => {
  const normQuestions = {}

  questions.map(({id, name, answers}) => {
    normQuestions[id] = { id, name }
    normQuestions[id]['answers'] = Object.keys(answers)
  })

  return normQuestions;
}

export const getQuestionsByIds = (ids) => dispatch => {
  dispatch(fetchByIdsStart())

  return Promise.all(
    ids.map(id => {
      console.log('send request ' + id);
      return dbRef.child(`questions/${id}`).once('value')
        .then(snapshot => {
          return { id, ...snapshot.val() }
        })
    })
  ).then(r => {
    const questions = normalizeQuestions(r)
    console.log(questions)

    dispatch(fetchByIdsSuccess(questions))
  })
    .catch(error => {
      console.error(error);
      dispatch(fetchByIdsFailure(error))
    })
}