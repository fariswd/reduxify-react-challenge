import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import logger from 'redux-logger'

const middleware = applyMiddleware(logger)

const store = createStore(rootReducer, middleware)

export default store
