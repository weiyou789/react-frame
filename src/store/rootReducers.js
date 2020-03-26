import { combineReducers } from 'redux'

import common from '../redux/commonRedux'
import home from '../redux/homeRedux'
import test from '../redux/testRedux'

const reducerMap = {
    common,
    home,
    test
}

export default combineReducers(reducerMap)
