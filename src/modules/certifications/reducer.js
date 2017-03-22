import { FETCH_CERTIFICATIONS_SUCCESS } from './actionTypes'
// import { Map } from 'immutable'

const initialState = []

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case FETCH_CERTIFICATIONS_SUCCESS:
      return [ ...state, ...payload ]
    default:
      return state
  }
}