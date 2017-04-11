import reducer from './reducer'
import {
  FETCH_QUESTIONS_BY_IDS_SUCCESS,
  ADD_QUESTION_SUCCESS
} from './actionTypes'
import normalizedMock from '../../../config/normalized.db.mock'

describe('reducer certifications', () => {
  const initialState = {};

  fit('should return the initial state', () => {
    expect(
      reducer(initialState, {})
    ).toEqual(initialState)
  })

  fit(`should handle ${FETCH_QUESTIONS_BY_IDS_SUCCESS}`, () => {
    expect(
      reducer(initialState, {
        type: FETCH_QUESTIONS_BY_IDS_SUCCESS,
        payload: normalizedMock.questions
      })
    ).toEqual(normalizedMock.questions)
  })

  fit(`should handle ${ADD_QUESTION_SUCCESS}`, () => {
    expect(
      reducer(initialState, {
        type: ADD_QUESTION_SUCCESS,
        payload: normalizedMock.questions.q4
      })
    ).toEqual(normalizedMock.questions.q4)
  })
})