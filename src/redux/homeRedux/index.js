import {
    CUSTOMER_DATA
} from './actionTypes'

import * as api from '@/services/api'

const INITIAL_STATE = {
    customerData: {}
}

/*export const add = () => {
    return {
        type: ADD
    }
}*/

export const findCustomerList = (params) => async dispatch => {
    const { data } = await api.findCustomerList(params)
    dispatch({
        type: CUSTOMER_DATA,
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
        case CUSTOMER_DATA:
            return {
                ...state,
                customerData: action.payload
            }
        // case MINUS:
        //     return {
        //         ...state,
        //         num: state.num - 1
        //     }
        default:
            return state
    }
}
