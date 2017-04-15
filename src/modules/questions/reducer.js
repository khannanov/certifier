import {
  FETCH_QUESTIONS_BY_IDS_SUCCESS,
  ADD_QUESTION_SUCCESS,
  FETCH_QUESTION_BY_ID_SUCCESS,
  UPDATE_QUESTION_SUCCESS
} from './actionTypes';

const initialState = {}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case FETCH_QUESTION_BY_ID_SUCCESS:
      return {
        ...state,
        [payload.id]: { ...payload }
      }
    case FETCH_QUESTIONS_BY_IDS_SUCCESS:
      return {
        ...state,
        ...payload
      }
    case UPDATE_QUESTION_SUCCESS:
    case ADD_QUESTION_SUCCESS:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}