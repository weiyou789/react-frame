import {LOAD_STATE} from "./actionTypes";

const initialState = {
    loadstate:false
}


export const changeState = (params) => (dispatch, getState) => {
    dispatch({ type: LOAD_STATE, payLoad: params });
}

export default function common (state = initialState, action) {
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