import axios from 'axios'


export const findInfolist = (params) => axios.get(`/order/api/boss/orders`, {params})

export const findUserInfo = (params) => axios.post(`/auth/login`, params)

export const findMemberStatic = (params) => axios.get(`/merchant/api/company/boss/member/statistics`, {params})

export const findMerchant = (params) => axios.get(`/merchant/api/company/boss/member`, {params})