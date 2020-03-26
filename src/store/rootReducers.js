import { combineReducers } from 'redux'

import common from '../redux/commonRedux'
import home from '../redux/homeRedux'
import test from '../redux/testRedux'
import wxauth from '../redux/authRedux'
const reducerMap = {
    common,
    home,
    test,
    wxauth
}

export default combineReducers(reducerMap)
