import { getQuestionsByIds } from './actions'
import firebaseMock from '../../../config/firebase.db.mock'
import normalizedMock from '../../../config/normalized.db.mock'
import thunk from 'redux-thunk'
import {
  FETCH_QUESTIONS_BY_IDS_START,
  FETCH_QUESTIONS_BY_IDS_SUCCESS
} from './actionTypes'
import configureMockStore from 'redux-mock-store'
import { fbs as FirebaseServer } from '../../firebase'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('question async actions', () => {
  afterEach(() => {
    FirebaseServer.close( console.log('close server'));
  })

  xit('creates FETCH_QUESTIONS_BY_IDS_SUCCESS when fetching certifications has been done', () => {
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
})
