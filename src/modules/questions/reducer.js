import {
  FETCH_QUESTIONS_BY_CERT_ID_START,
  FETCH_QUESTIONS_BY_CERT_ID_SUCCESS,
  FETCH_QUESTIONS_BY_CERT_ID_FAILURE
} from './actionTypes';

const initialState = []

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case FETCH_QUESTIONS_BY_CERT_ID_SUCCESS:
      return [
        ...state,
        ...payload
      ]
    default:
      return state
  }
}