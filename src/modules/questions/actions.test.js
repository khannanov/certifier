import { getQuestionsByIds } from './actions'
import firebaseMock from '../../../config/firebase.db.mock'
import normalizedMock from '../../../config/normalized.db.mock'
import thunk from 'redux-thunk'
import {
  FETCH_QUESTIONS_BY_CERT_ID_START,
  FETCH_QUESTIONS_BY_CERT_ID_SUCCESS
} from './actionTypes'
import configureMockStore from 'redux-mock-store'
import { fbs as FirebaseServer } from '../../firebase'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('question async actions', () => {
  afterEach(() => {
    FirebaseServer.close( console.log('close server'));
  })

  fit('creates FETCH_QUESTIONS_BY_CERT_ID_SUCCESS when fetching certifications has been done', () => {
    const expectedActions = [
      { type: FETCH_QUESTIONS_BY_CERT_ID_START },
      {
        type: FETCH_QUESTIONS_BY_CERT_ID_SUCCESS,
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
