
import {
    WX_AUTH
} from './actionTypes'

const initialState = {
    num: 0
}

/*export const add = () => {
    return {
        type: ADD
    }
}*/

export const wxAuthinfo = () => async dispatch => {
    console.log(1111222)
    dispatch({
        type: WX_AUTH
    })

}


export default function test (state = initialState, action) {
    switch (action.type) {
        case WX_AUTH:
            return {
                ...state,
                num: state.num + 1
            }
        default:
            return state
    }
}