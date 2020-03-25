import axios from 'axios'
import { interfaceUrl } from './config'
import store from '@/store/index'
import { changeState } from '@/redux/commonRedux'
axios.defaults.baseURL = interfaceUrl
const requestArr = []
import { Toast } from 'antd-mobile';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
/**
 * 声明一个数组用于存储每个请求的取消函数和标识(请求如果还在pending，同个请求就被取消)
 * @param  {[type]} Config    [axios 配置对象]
 */
const cancelRequst = (config) => {

    for (let key = 0; key < requestArr.length; key++) {
        if (requestArr[key].url === `${config.url}&${config.method}&${JSON.stringify(config.data)}`) {
            // 如果当前请求在数组中存在时
            requestArr[key].cancel(`:::取消${config.url}重复${config.method}请求，参数${JSON.stringify(config.data)}`) // 执行取消操作 在pending的才会cancel
            requestArr.splice(Number(key), 1) // 移除这条记录
            hideLoading()
        }
    }
}

const newCancelToken = axios.CancelToken
axios.interceptors.request.use(
    (config) => {
        if (config.method === 'post') {
            cancelRequst(config)
            config.cancelToken = new newCancelToken(cancelMethod => {
                requestArr.push({ url: `${config.url}&${config.method}&${JSON.stringify(config.data)}`, cancel: cancelMethod })
            })
        }
        showLoading()
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    response => {
        if (response.data.code && response.data.code !== 200) {
            hideLoading()
            return Promise.reject(response)
        }
        hideLoading()
        return response
    },
    error => {
        // 如果请求被取消则进入该方法判断
        if (axios.isCancel(error)) {
            console.log('🤡 Request canceled', error.message)
            hideLoading()
        } else {
            // handle error
            console.log('error', error)
            if (error.request.status === 0) {
                hideLoading()
                return
            }
            // TODO: 异常统一处理
            store.dispatch(changeState(false))
            // Toast('服务器响应错误,请联系管理')
            return Promise.reject(error)
        }
    }
)

let loadingCount = 0
let resizeTimer = null

export function showLoading () {
    if (loadingCount === 0) {
        Toast.loading('Loading...');
    }
    loadingCount++
}

export function hideLoading () {
    if (loadingCount <= 0) return
    loadingCount--
    // fix多个请求下有某个请求提前结束，导致 loading 提前关闭的问题。
    if (loadingCount === 0) {
        if (resizeTimer) clearTimeout(resizeTimer)
        resizeTimer = setTimeout(() => {
            Toast.hide();
        }, 300)
    }
}
