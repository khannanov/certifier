import {
  FETCH_QUESTIONS_BY_IDS_START,
  FETCH_QUESTIONS_BY_IDS_SUCCESS,
  FETCH_QUESTIONS_BY_IDS_FAILURE
} from './actionTypes';

const initialState = {}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case FETCH_QUESTIONS_BY_IDS_SUCCESS:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}