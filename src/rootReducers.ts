import { combineReducers } from 'redux'

import common,{ commonState } from './redux/commonRedux'
import test,{ testState } from './redux/testRedux'

const reducerMap = {
    common,
    test
}

export const stateMap = {
    common:commonState,
    test:testState
}

export default combineReducers(reducerMap)
