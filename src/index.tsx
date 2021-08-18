import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './assets/styles/base.scss'
import './assets/styles/common.scss'
import '@/services/axios'
import rootReducer,{ stateMap } from './rootReducers'
import Context from './context.js'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'

const Root = () => {
    const [state, dispatch] = useReducer<any>(rootReducer, stateMap);
    return <ConfigProvider autoInsertSpaceInButton={false} locale={zhCN}>
                <Context.Provider value={{ state, dispatch }}>
                    <App />
                </Context.Provider>
            </ConfigProvider>
    
}
ReactDOM.render(
    <Root />,
    document.getElementById('root')
  )