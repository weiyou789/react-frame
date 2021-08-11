import { LOAD_STATE, NEST_DATA } from "./actionTypes";
import { Dispatch } from 'redux'
import * as Api from '../../services/api'
import {IAction,InitState} from '../types'

const initialState:InitState<any> = {
    loadstate: false,
    nestData: {}
}


export const changeState = (params:object) => (dispatch:Dispatch<IAction<object>>, getState:any) => {
    dispatch({ type: LOAD_STATE, payload:{} });
}

export const getNestdata = (params:object) =>async (dispatch:Dispatch<IAction<object>>, getState:any) => {
    const {data} = await Api.findNesting()
    dispatch({ type: NEST_DATA, payload: data });
}

export default function common (state = initialState, action:IAction<object>) {
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