
import * as tyeps from './actionTypes'

import * as api from '@/services/api'

const INITIAL_STATE = {
    approveData: [],
    detail: ''
}
export const findAduitlist = (params) => async dispatch => {
    const { data } = await api.findAduitlist(params)
    dispatch({
        type: tyeps.APPROVE_DATA,
        payload: data
    })

}

export const getDetail = (id) => async dispatch => {
    console.log('id: ', id);
    const { data } = await api.projectDetail(id)
    dispatch({
        type: tyeps.DETAIL,
        payload: data
    })

}


export default function project (state = INITIAL_STATE, action) {
    switch (action.type) {
        case tyeps.APPROVE_DATA:
            return {
                ...state,
                approveData: action.payload
            }
        case tyeps.DETAIL:
            return {
                ...state,
                detail: action.payload
            }
        default:
            return state
    }
}
