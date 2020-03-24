//这里的方法名称要全局唯一
//获取 mock 数据
import  {getMapData}  from '../../mock/map'

import { findMerchant } from '@/api/https'

import { SAVE_MAP } from './actionTypes'

export function findMap (params) {
    return async (dispatch, getState) => {
        // 可以配置请求 axios
    
        let data = getMapData()
        //这里的type一定要全局唯一,因为状态变一次每个Reducer都会根据类型比对一遍
        dispatch({ type: SAVE_MAP, payLoad: data });
    }
}

export function findMerchants (params) {
    return async (dispatch, getState) => {
        // 可以配置请求 axios
        let {data} = await findMerchant(params);
        // let data = getMapData()
        //这里的type一定要全局唯一,因为状态变一次每个Reducer都会根据类型比对一遍
        dispatch({ type: SAVE_MAP, payLoad: data });
    }
}