import reducer from './reducer'
import { FETCH_CERTIFICATIONS_SUCCESS } from './actionTypes'
import storeMock from '../../../config/normalized.db.mock'

describe('reducer certifications', () => {
  const initialState = [];

  it('should return the initial state', () => {
    expect(
      reducer(initialState, {})
    ).toEqual(initialState)
  })

  it('should handle FETCH_LIST_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: FETCH_CERTIFICATIONS_SUCCESS,
        payload: storeMock.certifications
      })
    ).toEqual(storeMock.certifications)
  })
})