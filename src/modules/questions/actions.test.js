import { getQuestionsByIds } from './actions'
import firebaseMock from '../../../config/firebase.db.mock'
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

  fit('creates FETCH_QUESTIONS_BY_CERT_ID_SUCCESS when fetching certifications has been done', () => {
    const expectedActions = [
      { type: FETCH_QUESTIONS_BY_IDS_START },
      {
        type: FETCH_QUESTIONS_BY_IDS_SUCCESS,
        payload: firebaseMock.questions
      }
    ]
    const store = mockStore({ certifications: [] })

    return store.dispatch(getQuestionsByIds(['q1', 'q2', 'q3', 'q4']))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
