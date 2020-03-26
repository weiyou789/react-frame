import axios from 'axios'
import {ccpUrl} from './config'

export const findInfolist = (params) => axios.get(`/order/api/boss/orders`, {params})

export const findUserInfo = (params) => axios.post(`/auth/login`, params)

export const findMemberStatic = (params) => axios.get(`/merchant/api/company/boss/member/statistics`, {params})

export const findMerchant = (params) => axios.get(`/merchant/api/company/boss/member`, {params})

export const findNesting = (params) => axios.get(ccpUrl+`/common/region/provinces/nesting`, {params})
