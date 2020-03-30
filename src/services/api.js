import axios from 'axios'
import { ccpUrl } from './config'

export const findInfolist = (params) => axios.get(`/order/api/boss/orders`, { params })

export const findUserInfo = (params) => axios.post(`/auth/login`, params)

export const findMemberStatic = (params) => axios.get(`/merchant/api/company/boss/member/statistics`, { params })

export const findMerchant = (params) => axios.get(`/merchant/api/company/boss/member`, { params })

export const findNesting = (params) => axios.get(ccpUrl + `/common/region/provinces/nesting`, { params })
// 获取客户
export const findCustomerPage = (params) => axios.get('http://192.168.20.248:40000' + `/merchant/api/company/b2b/member`, { params })

// 注册客户
export const addCustomer = (params) => axios.get(`/uaa/openapi/user/register`, { params })


// 工程项目列表
export const findProjecPage = (params) => axios.get(`/project/page`, { params })
// 工程审批
export const findAduitlist = (params) => axios.get(`/project/audit/${params.projectId}`)
// 创建工程项目
export const creatProject = (params) => axios.post(`/api/project`, params)
// 工程项目详情
export const projectDetail = (id) => axios.get(`/api/project/${id}`)
//上传图片
export const uploadFiles = (params) => axios.post(`/api/dingding-works/upload.do`, params)

