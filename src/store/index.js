import { createStore, applyMiddleware } from 'redux'

import rootReducer from './reducer'

// thunk 把Action封装 做异步
import thunk from 'redux-thunk'

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store