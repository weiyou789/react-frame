import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducers'

// thunk 把Action封装 做异步
import thunk from 'redux-thunk'

const middlewares = [thunk]

if (process.env.NODE_ENV === 'development') {
    const { logger, createLogger } = require('redux-logger')
    middlewares.push(createLogger({
        collapsed: true,
    }))
}

let store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store