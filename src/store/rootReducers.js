import { combineReducers } from 'redux'

import common from '../redux/commonRedux'
import test from '../redux/testRedux'
import wxauth from '../redux/authRedux'
const reducerMap = {
    common,
    test,
    wxauth
}

export default combineReducers(reducerMap)