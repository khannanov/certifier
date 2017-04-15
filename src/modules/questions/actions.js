import {
  getById,
  getNewId,
  create
} from './apiCallsQuestions'
import {
  FETCH_QUESTIONS_BY_IDS_START,
  FETCH_QUESTIONS_BY_IDS_SUCCESS,
  FETCH_QUESTIONS_BY_IDS_FAILURE,
  ADD_QUESTION_START,
  ADD_QUESTION_SUCCESS,
  ADD_QUESTION_FAILURE,
  UPDATE_QUESTION_START,
  UPDATE_QUESTION_SUCCESS,
  UPDATE_QUESTION_FAILURE,
  FETCH_QUESTION_BY_ID_START,
  FETCH_QUESTION_BY_ID_SUCCESS,
  FETCH_QUESTION_BY_ID_FAILURE
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

    return normQuestions
  })

  return normQuestions;
}

export const getQuestionsByIds = (ids) => dispatch => {
  dispatch(fetchByIdsStart())

  return Promise.all(
    ids.map(id => getById(id).then(snapshot => ({ id, ...snapshot.val() })))
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

export const addQuestion = (question, certId) => dispatch => {
  dispatch(addStart())
  const id = getNewId()

  return create(question, id, certId).then(() => {
    dispatch(addSuccess({ id, ...question }))
  })
    .catch(error => dispatch(addFailure(error)))
}

const updateStart = () => ({
  type: UPDATE_QUESTION_START
})

const updateSuccess = question => ({
  type: UPDATE_QUESTION_SUCCESS,
  payload: question
})

const updateFailure = error => ({
  type: UPDATE_QUESTION_FAILURE,
  payload: error
})

export const updateQuestion = (question, certId) => dispatch => {
  dispatch(updateStart())
  const id = getNewId()

  return create(question, id, certId).then(() => {
    dispatch(updateSuccess({ id, ...question }))
  })
    .catch(error => dispatch(updateFailure(error)))
}

const fetchByIdStart = () => ({
  type: FETCH_QUESTION_BY_ID_START,
})

const fetchByIdSuccess = question => ({
  type: FETCH_QUESTION_BY_ID_SUCCESS,
  payload: question
})

const fetchByIdFailure = error => ({
  type: FETCH_QUESTION_BY_ID_FAILURE,
  payload: error
})

export const getQuestionById = (id) => dispatch => {
  dispatch(fetchByIdStart())

  return getById(id).then(snapshot => {
    const questions = normalizeQuestions({[id] : { ...snapshot.val() }})
    dispatch(fetchByIdSuccess(questions[id]))
  })
    .catch(error => {
      console.error(error);
      dispatch(fetchByIdFailure(error))
    })
}