
import * as tyeps from './actionTypes'

import * as api from '@/services/api'
import { act } from 'react-dom/test-utils'

const INITIAL_STATE = {
    customerData: {},
    projectData:{}
}

/*export const add = () => {
    return {
        type: ADD
    }
}*/

export const findCustomerList = (params) => async dispatch => {
    const { data } = await api.findCustomerList(params)
    dispatch({
        type: tyeps.CUSTOMER_DATA,
        payload: data
    })

}
export const findProjectList = (params) => async dispatch => {
    const { data } = await api.findProjecpage(params)
    dispatch({
        type: tyeps.PROJECT_DATA,
        payload: data
    })

}
// export const minus = () => {
//     return {
//         type: MINUS
//     }
// }

export default function test (state = INITIAL_STATE, action) {
    switch (action.type) {
        case tyeps.CUSTOMER_DATA:
            return {
                ...state,
                customerData: action.payload
            }
        case tyeps.PROJECT_DATA:
            return {
                ...state,
                projectData:action.payload
            }
        default:
            return state
    }
}
