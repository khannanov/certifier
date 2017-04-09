import dbRef from '../../firebase'
import {
  FETCH_QUESTIONS_BY_IDS_START,
  FETCH_QUESTIONS_BY_IDS_SUCCESS,
  FETCH_QUESTIONS_BY_IDS_FAILURE,
  ADD_QUESTION_START,
  ADD_QUESTION_SUCCESS,
  ADD_QUESTION_FAILURE
} from './actionTypes'

const fetchByIdsStart = () => ({
  type: FETCH_QUESTIONS_BY_IDS_START,
})

const fetchByIdsSuccess = questions => ({
  type: FETCH_QUESTIONS_BY_IDS_SUCCESS,
  payload: questions
})

const fetchByIdsFailure = error => ({
  type: FETCH_QUESTIONS_BY_IDS_FAILURE,
  payload: error
})

const normalizeQuestions = questions => {
  const normQuestions = {}

  Object.keys(questions).map(qid => {
    const { id = qid, name, answers} = questions[qid]

    normQuestions[id] = { id, name }
    normQuestions[id]['answers'] = Object.keys(answers)
  })

  return normQuestions;
}

export const getQuestionsByIds = (ids) => dispatch => {
  dispatch(fetchByIdsStart())

  return Promise.all(
    ids.map(id => {
      // console.log('send request ' + id);
      return dbRef.child(`questions/${id}`).once('value')
        .then(snapshot => {
          return { id, ...snapshot.val() }
        })
    })
  ).then(r => {
    const questions = normalizeQuestions(r)
    dispatch(fetchByIdsSuccess(questions))
  })
    .catch(error => {
      console.error(error);
      dispatch(fetchByIdsFailure(error))
    })
}

const addStart = () => ({
  type: ADD_QUESTION_START
})

const addSuccess = question => ({
  type: ADD_QUESTION_SUCCESS,
  payload: question
})

const addFailure = error => ({
  type: ADD_QUESTION_FAILURE,
  payload: error
})

const questionCreate = (question, certId) => {
  const newKey = dbRef.child('questions').push().key;

  const updates = {}
  updates['/questions/' + newKey] = question
  updates['/certifications/' + certId + '/questions/' + newKey] = true

  return dbRef.update(updates)
}

export const addQuestion = (question, certId) => dispatch => {
  dispatch(addStart)

  return questionCreate(question, certId).then(snap => {
    console.log('----snap.val() ', snap.val());

    dispatch(addSuccess(snap.val()))
  })
    .catch(error => dispatch(addFailure(error)))
}
