import React from 'react';
import { Provider } from 'react-redux'

import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router'
import store from './store'

import './styles/base.scss';
import 'animate.css';
// import 'antd-mobile/dist/antd-mobile.css';



// 所有入口页面
const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </Provider>
)

export default App;
