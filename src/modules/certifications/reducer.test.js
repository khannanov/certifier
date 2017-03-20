import reducer from './reducer'
import { FETCH_CERTIFICATIONS_SUCCESS } from './actionTypes'
import firebaseMock from '../../../config/firebase.db.mock'
import storeMock from '../../../config/normalized.db.mock'

describe('reducer certifications', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([])
  })

  it('should handle FETCH_LIST_SUCCESS', () => {
    expect(
      reducer([], {
        type: FETCH_CERTIFICATIONS_SUCCESS,
        payload: firebaseMock.certifications
      })
    ).toEqual(storeMock.certifications)
  })
})