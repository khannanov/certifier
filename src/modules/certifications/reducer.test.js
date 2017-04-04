import reducer from './reducer'
import {
  FETCH_CERTIFICATIONS_SUCCESS,
  FETCH_CERTIFICATION_BY_ID_SUCCESS
} from './actionTypes'
import normalizedMock from '../../../config/normalized.db.mock'

describe('reducer certifications', () => {
  const initialState = {};

  fit('should return the initial state', () => {
    expect(
      reducer(initialState, {})
    ).toEqual(initialState)
  })

  fit(`should handle ${FETCH_CERTIFICATIONS_SUCCESS}`, () => {
    expect(
      reducer(initialState, {
        type: FETCH_CERTIFICATIONS_SUCCESS,
        payload: normalizedMock.certifications
      })
    ).toEqual(normalizedMock.certifications)
  })

  fit(`should handle action ${FETCH_CERTIFICATION_BY_ID_SUCCESS}`, () => {
    expect(
      reducer(initialState, {
        type: FETCH_CERTIFICATION_BY_ID_SUCCESS,
        payload: normalizedMock.certifications.cert1
      })
    ).toEqual(normalizedMock.certifications.cert1)
  })
})