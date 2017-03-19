import * as actions from './actions'
import firebaseMock from '../../../config/firebase.db.mock'
import thunk from 'redux-thunk'
import FirebaseServer from 'firebase-server'

import {
  FETCH_CERTIFICATIONS_START,
  FETCH_CERTIFICATIONS_SUCCESS,
  FETCH_CERTIFICATIONS_FAILURE
} from './actionTypes'

import configureMockStore from 'redux-mock-store'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('certificate async actions', () => {
  afterEach(() => {
    // FirebaseServer.close( console.log('close server'));
  })

  it('creates FETCH_CERTIFICATIONS_SUCCESS when fetching certifications has been done', () => {
    const expectedActions = [
      { type: FETCH_CERTIFICATIONS_START },
      {
        type: FETCH_CERTIFICATIONS_SUCCESS,
        payload: firebaseMock.certifications
      }
    ]
    const store = mockStore({ certifications: [] })

    return store.dispatch(actions.getCertificationsList())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})