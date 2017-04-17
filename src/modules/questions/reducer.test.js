import reducer from './reducer'
import {
  FETCH_QUESTIONS_BY_IDS_SUCCESS,
  ADD_QUESTION_SUCCESS,
  FETCH_QUESTION_BY_ID_SUCCESS,
  UPDATE_QUESTION_SUCCESS
} from './actionTypes'
import normalizedMock from '../../../config/normalized.db.mock'

describe('reducer certifications', () => {
  const initialState = {};

  it('should return the initial state', () => {
    expect(
      reducer(initialState, {})
    ).toEqual(initialState)
  })

  it(`should handle ${FETCH_QUESTIONS_BY_IDS_SUCCESS}`, () => {
    expect(
      reducer(initialState, {
        type: FETCH_QUESTIONS_BY_IDS_SUCCESS,
        payload: normalizedMock.questions
      })
    ).toEqual(normalizedMock.questions)
  })

  it(`should handle ${ADD_QUESTION_SUCCESS}`, () => {
    expect(
      reducer(initialState, {
        type: ADD_QUESTION_SUCCESS,
        payload: normalizedMock.questions.q4
      })
    ).toEqual(normalizedMock.questions.q4)
  })

  it(`should handle ${FETCH_QUESTION_BY_ID_SUCCESS}`, () => {
    expect(
      reducer(initialState, {
        type: FETCH_QUESTION_BY_ID_SUCCESS,
        payload: normalizedMock.questions.q4
      })
    ).toEqual({['q4']: normalizedMock.questions.q4})
  })

  it(`should handle ${UPDATE_QUESTION_SUCCESS}`, () => {
    expect(
      reducer(initialState, {
        type: UPDATE_QUESTION_SUCCESS,
        payload: normalizedMock.questions.q4
      })
    ).toEqual({['q4']: normalizedMock.questions.q4})
  })
})