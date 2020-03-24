import {SAVE_CUSTOMER} from '../actions/actionTypes'

const initialState = {
    unAuthenticationNum: 0, authenticationNum: 0, enabledNum: 0, forbiddenNum: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_CUSTOMER:
            return {
                ...state,
                ...action.payLoad
            }
        default:
            return state
    }
}

