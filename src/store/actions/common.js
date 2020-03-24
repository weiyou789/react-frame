//这里的方法名称要全局唯一
//获取 mock 数据

import { LOAD_STATE } from './commonType'

export function changeState (params) {
    return  (dispatch, getState) => {

        // 可以配置请求 axios
        //这里的type一定要全局唯一,因为状态变一次每个Reducer都会根据类型比对一遍
        dispatch({ type: LOAD_STATE, payLoad: params });
    }
}

// export function findCustomer (data) {
//     return { type: SAVE_CUSTOMER, payLoad: data }
// }