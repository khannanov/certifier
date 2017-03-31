import { getQuestionsByCertId } from './actions'
import firebaseMock from '../../../config/firebase.db.mock'
import thunk from 'redux-thunk'
import {
  FETCH_QUESTIONS_BY_CERT_ID_START,
  FETCH_QUESTIONS_BY_CERT_ID_SUCCESS
} from './actionTypes'
import configureMockStore from 'redux-mock-store'
import { startFirebaseTestServer } from '../../firebase.setup'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

let dbRef

describe('question async actions', () => {
  beforeAll(async () => {
    ({ dbRef } = await startFirebaseTestServer());
  });

  fit('creates FETCH_QUESTIONS_BY_CERT_ID_SUCCESS when fetching certifications has been done', () => {
    const expectedActions = [
      { type: FETCH_QUESTIONS_BY_CERT_ID_START },
      {
        type: FETCH_QUESTIONS_BY_CERT_ID_SUCCESS,
        payload: firebaseMock.questions.cert1
      }
    ]
    const store = mockStore({ certifications: [] })

    return store.dispatch(getQuestionsByCertId('cert1'))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
