jest.mock('./apiCalls')

import {
  getQuestionsByIds,
  addQuestion
} from './actions'
import firebaseMock from '../../../config/firebase.db.mock'
import normalizedMock from '../../../config/normalized.db.mock'
import thunk from 'redux-thunk'
import {
  FETCH_QUESTIONS_BY_IDS_START,
  FETCH_QUESTIONS_BY_IDS_SUCCESS,
  ADD_QUESTION_START,
  ADD_QUESTION_SUCCESS
} from './actionTypes'
import configureMockStore from 'redux-mock-store'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('question async actions', () => {
  it('creates FETCH_QUESTIONS_BY_IDS_SUCCESS when fetching certifications has been done', () => {
    const expectedActions = [
      { type: FETCH_QUESTIONS_BY_IDS_START },
      {
        type: FETCH_QUESTIONS_BY_IDS_SUCCESS,
        payload: normalizedMock.questions
      }
    ]
    const store = mockStore({ certifications: [] })
    const questionsIds = Object.keys(firebaseMock.questions);

    return store.dispatch(getQuestionsByIds(questionsIds))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it(`create ${ADD_QUESTION_SUCCESS} when adding question has been done`, () => {
    const expectedActions = [
      { type: ADD_QUESTION_START },
      {
        type: ADD_QUESTION_SUCCESS,
        payload: normalizedMock.questions.q4
      }
    ]

    const store = mockStore({ questions: {} })

    return store.dispatch(addQuestion(normalizedMock.questions.q4))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
