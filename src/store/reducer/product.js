import { SVAE_PRODUCT } from '../actions/actionTypes'

const initialState = {
    product: [],
    cooperator: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SVAE_PRODUCT:
            return {
                ...state,
                ...action.payLoad
            }
        default:
            return state
    }
}

