jest.mock('./apiCallsCertifications')

import * as actions from './actions'
import normalizedMock from '../../../config/normalized.db.mock'
import thunk from 'redux-thunk'

import {
  FETCH_CERTIFICATIONS_START,
  FETCH_CERTIFICATIONS_SUCCESS,
  FETCH_CERTIFICATIONS_FAILURE,
  FETCH_CERTIFICATION_BY_ID_START,
  FETCH_CERTIFICATION_BY_ID_SUCCESS,
  ADD_CERTIFICATIONS_START,
  ADD_CERTIFICATIONS_SUCCESS,
  UPDATE_CERTIFICATIONS_START,
  UPDATE_CERTIFICATIONS_SUCCESS,
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
    const store = mockStore({ certifications: {} })

    return store.dispatch(actions.getCertificationsList())
      .then(() => expect(store.getActions()).toEqual(expectedActions))
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
      .then(() => expect(store.getActions()).toEqual(expectedActions))
  })

  fit('creates ADD_CERTIFICATIONS_SUCCESS when fetching certification has been done', () => {
    const newId = 'mockId'

    const newCertification = {
      name: 'test cert name',
      description: 'test description name'
    }

    const expectedActions = [
      { type: ADD_CERTIFICATIONS_START },
      {
        type: ADD_CERTIFICATIONS_SUCCESS,
        payload: { ...newCertification, id: newId }
      }
    ]
    const store = mockStore({ certifications: {} })

    return store.dispatch(actions.addCertification(newCertification))
      .then(() => expect(store.getActions()).toEqual(expectedActions))
  })

  fit('creates UPDATE_CERTIFICATIONS_SUCCESS when fetching certification has been done', () => {

    const expectedActions = [
      { type: UPDATE_CERTIFICATIONS_START },
      {
        type: UPDATE_CERTIFICATIONS_SUCCESS,
        payload: { ...certifications.cert1 }
      }
    ]
    const store = mockStore({ certifications: {} })

    return store.dispatch(actions.updateCertification(certifications.cert1))
      .then(() => expect(store.getActions()).toEqual(expectedActions))
  })
})
