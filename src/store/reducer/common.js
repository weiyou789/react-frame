import {LOAD_STATE} from '../actions/commonType'

const initialState = {
    loadstate:false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_STATE:
            return {
                ...state,
                loadstate:action.payLoad
            }
        default:
            return state
    }
}

