
import {IAction,InitState,Dispatch} from '../types'
import {
    ADD,
    MINUS
} from './actionTypes'

export const testState:InitState<number> = {
    num: 0
}


export const add = () => async (dispatch:Dispatch<IAction<object>>,state:InitState<number>) => {
    const { num } = state
    let _num = num+1
    dispatch({
        type: ADD,
        payload:{
            num:_num
        }
    })
}

export const minus = () => async (dispatch:Dispatch<IAction<object>>,state:InitState<number>) => {
    const { num } = state
    let _num = num-1
    dispatch({
        type: MINUS,
        payload:{
            num:_num
        }
    })
}


export default function test (state:InitState<number> = testState, action:IAction<object>) {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                ...action.payload
            }
        case MINUS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}