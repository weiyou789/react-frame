import { LOAD_STATE, NEST_DATA } from "./actionTypes";
import * as Api from '../../services/api'
import {IAction,InitState,Dispatch} from '../types'

export const commonState:InitState<any> = {
    loadstate: false,
    nestData: {}
}


export const changeState = (params:object) => (dispatch:Dispatch<IAction<object>>, state:any) => {
    dispatch({ type: LOAD_STATE, payload:{} });
}

export const getNestdata = (params:object) =>async (dispatch:Dispatch<IAction<object>>, state:any) => {
    const {data} = await Api.findNesting()
    dispatch({ type: NEST_DATA, payload: data });
}

export default function common (state = commonState, action:IAction<object>) {
    switch (action.type) {
        case LOAD_STATE:
            return {
                ...state,
                loadstate: action.payload
            }
        case NEST_DATA:
            return {
                ...state,
                nestData: action.payload
            }
        default:
            return state
    }
}