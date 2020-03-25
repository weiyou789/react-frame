
import {
    ADD,
    MINUS
} from './actionTypes'

const INITIAL_STATE = {
    num: 0
}

/*export const add = () => {
    return {
        type: ADD
    }
}*/

export const add = () => async dispatch => {
    console.log(1111222)
    dispatch({
        type: ADD
    })

}

export const minus = () => {
    return {
        type: MINUS
    }
}

// 异步的action
export function asyncAdd () {
    return dispatch => {
        setTimeout(() => {
            dispatch(add())
        }, 2000)
    }
}

export default function test (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                num: state.num + 1
            }
        case MINUS:
            return {
                ...state,
                num: state.num - 1
            }
        default:
            return state
    }
}