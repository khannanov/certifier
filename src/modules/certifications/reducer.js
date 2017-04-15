import {
  FETCH_CERTIFICATIONS_SUCCESS,
  FETCH_CERTIFICATION_BY_ID_SUCCESS
} from './actionTypes'

const initialState = {}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case FETCH_CERTIFICATIONS_SUCCESS:
      const certifications = {}
       Object.keys(state).map(id => certifications[id] = { ...state[id] })

      return {
        ...certifications,
        ...payload
      }
    case FETCH_CERTIFICATION_BY_ID_SUCCESS:
      return {
        ...state,
        [payload.id]: { ...payload }
      }
    default:
      return state
  }
}