import { combineReducers } from 'redux'
import certifications from './certifications'

export default combineReducers({
  certifications: certifications.reducer,
});