import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import { message } from 'antd'
// import jwtDecode from 'jwt-decode'

import { interfaceUrl } from './config'

interface ResponseData<T> {
    code: number
    data: T
    msg: string
}

// const NO_LOADING_REQ: [] = [

// ]

// 配置全局axios请求前缀
axios.defaults.baseURL = interfaceUrl
axios.defaults.timeout = 500000
axios.defaults.headers['AccessKeyId'] = '5ksbfewexbfc'
axios.defaults.headers['projectId'] = '1'
// 配置request过滤器
axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // 以下两个字段是用于埋点的
        // config.headers['Request-Source'] = '3'
        // config.headers['Backend-Request'] = 'true'
        // 下面这个字段是一些特殊埋点时使用
        // config.headers['Header-Buz-Params'] = JSON.stringify({})

        const token = sessionStorage.getItem('token')
        const refreshToken = sessionStorage.getItem('refreshToken')
        // if (!(config.url == interfaceUrl + 'auth/login' || config.url == interfaceUrl + 'oauth/refresh-token' || (config.url.includes('hbp') && config.url.includes('ets')))) {
        if (token) {
            config.headers.Authorization = 'Bearer ' + token
        }
        if (refreshToken) {
            config.headers['Refresh-Token'] = refreshToken
        }
        // }
        if (config.method === 'get') {
            config.url += '?t=' + new Date().getTime()
        }
        // const showLoading = NO_LOADING_REQ.filter(item => item.method == config.method && config.url.indexOf(item.url) > -1)
        // if (showLoading.length <= 0) {
        //     store.commit('LOAD_STATE', true)
        // }
        return config
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

// 配置response过滤器
axios.interceptors.response.use(
    (response: AxiosResponse<ResponseData<any>>) => {
        // console.log('🚀 --- response', response)
        // if (response.headers['Access-Token']) {
        //     const tokenInfo = jwtDecode(response.headers['access-token'])
        //     sessionStorage.setItem('authorities', tokenInfo.authorities ? JSON.stringify(tokenInfo.authorities) : '')
        //     sessionStorage.setItem('token', response.headers['access-token'])
        // }
        // if (response.headers['refresh-token']) {
        //     sessionStorage.setItem('refreshToken', response.headers['refresh-token'])
        // }
        // store.commit('LOAD_STATE', false)
        return response
    },
    (error: AxiosError) => {
        console.log(error.response?.data)
        // store.commit('LOAD_STATE', false)
        // 针对responseType = blob类型的返回，单独在download.js中处理
        // if (error.response.config.responseType != 'blob') {
        const data = error.response?.data
        let msg = '服务器响应错误：' + error
        if (error.response?.status === 400 && data.detail) {
            msg = data.message
        } else if (error.response?.status === 503) {
            msg = '服务不可用，请稍后再试！'
        } else if (error.response?.status === 504) {
            msg = '连接超时，请稍后再试！'
        }
        // TODO: 异常统一处理
        message.error(msg)
        return Promise.reject(error)
    }
)
