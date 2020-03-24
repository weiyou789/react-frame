import axios from 'axios'
// import store from '@/store/index'
// import { Message } from 'element-ui'
// import { B2bUrl } from './config'
import qs from 'qs'

axios.defaults.baseURL = 'https://testb2b-gateway.hosjoy.com:4832/'

axios.interceptors.request.use(async function (config) {
    // 登录token带到请求的头部中，用于校验登录状态
    const token = sessionStorage.getItem('access_token')
    token && (config.headers['Authorization'] = `Bearer ${token}`)

    return config
}, function (error) {
    return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
    // 尽调返回code 判断 by-勇哥
    // eslint-disable-next-line
    if (response.data.code && response.data.code != 200) {

        return Promise.reject(response)
    }
    return response
}, function (error) {
    // TODO: 异常统一处理
    let errorMessage = ''
    if (error.response && error.response.status === 400) {
        errorMessage = error.response.data.message
    } else {
        errorMessage = '服务器响应错误：' + error
    }
    console.log(errorMessage)
    return Promise.reject(error)
})

export default axios
