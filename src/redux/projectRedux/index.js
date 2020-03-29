
import * as tyeps from './actionTypes'

import * as api from '@/services/api'

const INITIAL_STATE = {
    approveData:[]
}

/*export const add = () => {
    return {
        type: ADD
    }
}*/

export const findAduitlist = (params) => async dispatch => {
    const { data } = await api.findAduitlist(params)
    dispatch({
        type: tyeps.APPROVE_DATA,
        payload: data
    })

}


export default function test (state = INITIAL_STATE, action) {
    switch (action.type) {
        case tyeps.APPROVE_DATA:
            return {
                ...state,
                approveData: action.payload
            }
        default:
            return state
    }
}
