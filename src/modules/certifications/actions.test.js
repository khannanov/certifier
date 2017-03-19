import * as actions from './actions'
import thunk from 'redux-thunk'
import firebase from 'firebase'
import {
  FETCH_CERTIFICATIONS_START,
  FETCH_CERTIFICATIONS_SUCCESS,
  FETCH_CERTIFICATIONS_FAILURE
} from './actionTypes'

import configureMockStore from 'redux-mock-store'

console.log('----', process.env.NODE_ENV);

firebase.database().ref().once('value', function(snap) {
  console.log('Got value: ', snap.val());
});

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('certificate async actions', () => {

  it('creates FETCH_CERTIFICATIONS_SUCCESS when fetching certifications has been done', () => {
    const expectedActions = [
      { type: FETCH_CERTIFICATIONS_START },
      { type: FETCH_CERTIFICATIONS_SUCCESS, body: { certifications: ['do something']  } }
    ]
    const store = mockStore({ certifications: [] })

    return store.dispatch(actions.getCertificationsList())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})