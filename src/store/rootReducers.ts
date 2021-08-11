import { combineReducers } from 'redux'

import common from '../redux/commonRedux'
import test from '../redux/testRedux'

const reducerMap = {
    common,
    test
}

export default combineReducers(reducerMap)
