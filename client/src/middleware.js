import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { createLogger } from 'redux-logger'

export default applyMiddleware(promise, thunk, createLogger())
