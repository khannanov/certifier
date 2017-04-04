import {
  FETCH_QUESTIONS_BY_IDS_SUCCESS,
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