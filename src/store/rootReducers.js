import { combineReducers } from 'redux'

import common from '../redux/commonRedux'
import home from '../redux/homeRedux'
import test from '../redux/testRedux'
import wxauth from '../redux/authRedux'
import project from '../redux/projectRedux'

const reducerMap = {
    common,
    home,
    test,
    wxauth,
    project
}

export default combineReducers(reducerMap)
