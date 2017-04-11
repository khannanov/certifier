import reducer from './reducer'
import {
  FETCH_CERTIFICATIONS_SUCCESS,
  FETCH_CERTIFICATION_BY_ID_SUCCESS
} from './actionTypes'
import normalizedMock from '../../../config/normalized.db.mock'

const { certifications }= normalizedMock

describe('reducer certifications', () => {
  const initialState = {};

  xit('should return the initial state', () => {
    expect(
      reducer(initialState, {})
    ).toEqual(initialState)
  })

  xit(`should handle ${FETCH_CERTIFICATIONS_SUCCESS}`, () => {
    expect(
      reducer(initialState, {
        type: FETCH_CERTIFICATIONS_SUCCESS,
        payload: normalizedMock.certifications
      })
    ).toEqual(normalizedMock.certifications)
  })

  xit(`should handle action ${FETCH_CERTIFICATION_BY_ID_SUCCESS}`, () => {
    expect(
      reducer(initialState, {
        type: FETCH_CERTIFICATION_BY_ID_SUCCESS,
        payload: certifications.cert1
      })
    ).toEqual({ [certifications.cert1.id]: certifications.cert1})
  })
})