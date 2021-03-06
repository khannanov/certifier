import reducer from './reducer'
import {
  FETCH_CERTIFICATIONS_SUCCESS,
  FETCH_CERTIFICATION_BY_ID_SUCCESS
} from './actionTypes'
import normalizedMock from '../../../config/normalized.db.mock'

const { certifications }= normalizedMock

describe('reducer certifications', () => {
  const initialState = {};

  it('should return the initial state', () => {
    expect(
      reducer(initialState, {})
    ).toEqual(initialState)
  })

  it(`should handle ${FETCH_CERTIFICATIONS_SUCCESS}`, () => {
    expect(
      reducer(initialState, {
        type: FETCH_CERTIFICATIONS_SUCCESS,
        payload: normalizedMock.certifications
      })
    ).toEqual(normalizedMock.certifications)
  })

  it(`should handle action ${FETCH_CERTIFICATION_BY_ID_SUCCESS}`, () => {
    expect(
      reducer(initialState, {
        type: FETCH_CERTIFICATION_BY_ID_SUCCESS,
        payload: certifications.cert1
      })
    ).toEqual({ [certifications.cert1.id]: certifications.cert1})
  })
})