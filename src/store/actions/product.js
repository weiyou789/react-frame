//这里的方法名称要全局唯一
//获取 mock 数据
import  {cooperator}  from '../../mock/cooperator'

import { SVAE_PRODUCT } from './actionTypes'

export function findproduct (params) {
    return async (dispatch, getState) => {
        // 可以配置请求 axios
        // let response = await fetch(url);
        let response = cooperator()
        //这里的type一定要全局唯一,因为状态变一次每个Reducer都会根据类型比对一遍
        // disptch
        dispatch({ type: SVAE_PRODUCT, payLoad: response });
    }
}