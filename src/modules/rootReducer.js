import { combineReducers } from 'redux'
import certifications from './certifications'
import questions from './questions'

export default combineReducers({
  certifications: certifications.reducer,
  questions: questions.reducer
});