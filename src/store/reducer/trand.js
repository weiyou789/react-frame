import {SAVE_TRAND} from '../actions/actionTypes'

const initialState = {
    mapData:[],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_TRAND:
            return {
                ...state,
                ...action.payLoad
            }
        default:
            return state
    }
}

