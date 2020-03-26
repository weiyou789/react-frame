import { LOAD_STATE, NEST_DATA } from "./actionTypes";
import * as Api from '../../services/api'

const initialState = {
    loadstate: false,
    nestData: {}
}


export const changeState = (params) => (dispatch, getState) => {
    dispatch({ type: LOAD_STATE, payLoad: params });
}

export const getNestdata = (params) =>async (dispatch, getState) => {
    const {data} = await Api.findNesting()
    dispatch({ type: NEST_DATA, payLoad: data });
}

export default function common (state = initialState, action) {
    switch (action.type) {
        case LOAD_STATE:
            return {
                ...state,
                loadstate: action.payLoad
            }
        case NEST_DATA:
            return {
                ...state,
                nestData: action.payLoad
            }
        default:
            return state
    }
}