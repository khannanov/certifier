jest.mock('./apiCalls')

import * as actions from './actions'
import normalizedMock from '../../../config/normalized.db.mock'
import thunk from 'redux-thunk'

import {
  FETCH_CERTIFICATIONS_START,
  FETCH_CERTIFICATIONS_SUCCESS,
  FETCH_CERTIFICATIONS_FAILURE,
  FETCH_CERTIFICATION_BY_ID_START,
  FETCH_CERTIFICATION_BY_ID_SUCCESS
} from './actionTypes'

import configureMockStore from 'redux-mock-store'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const certifications = normalizedMock.certifications;

fdescribe('certificate async actions', () => {
  fit('creates FETCH_CERTIFICATIONS_SUCCESS when fetching certifications has been done', () => {
    const expectedActions = [
      { type: FETCH_CERTIFICATIONS_START },
      {
        type: FETCH_CERTIFICATIONS_SUCCESS,
        payload: certifications
      }
    ]
    const store = mockStore({ certifications: [] })

    return store.dispatch(actions.getCertificationsList())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  fit('creates FETCH_CERTIFICATION_BY_ID_SUCCESS when fetching certification has been done', () => {
    const expectedActions = [
      { type: FETCH_CERTIFICATION_BY_ID_START},
      {
        type: FETCH_CERTIFICATION_BY_ID_SUCCESS,
        payload: certifications.cert1
      }
    ]
    const store = mockStore({ certifications: {} })

    return store.dispatch(actions.fetchCertificationById(certifications.cert1.id))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
