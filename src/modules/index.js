import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

const enhancer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, {}, enhancer)
window.store = store;

export default store;