import { FETCH_CERTIFICATIONS_SUCCESS } from './actionTypes'

const initialState = []

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case FETCH_CERTIFICATIONS_SUCCESS:
      console.log('----', payload);
      return [
        ...state,
        ...payload
      ]
    default:
      return state
  }
}