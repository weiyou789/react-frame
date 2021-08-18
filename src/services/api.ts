import axios from 'axios'
import { ccpUrl } from './config'

import { ReqUserLogin } from '@/interface/ccs'

export const userLoginByPassword: (params: ReqUserLogin) => Promise<any> = (params) => {
    return axios.post('ccs/login/password', params)
}

export const getBuildTrees: (params: any) => Promise<any> = (params) => {
    return axios.get('/boss/building/tree', { params })
}

export const findNesting = (params?:any) => axios.get(ccpUrl + `/common/region/provinces/nesting`, { params })

