import {SAVE_MAP} from '../actions/actionTypes'

const initialState = {
    mapData:[],
    messages:[],
    records:[]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_MAP:
            return {
                ...state,
                ...action.payLoad
            }
        default:
            return state
    }
}

