import React from 'react';
import { Provider } from 'react-redux'

import { renderRoutes } from 'react-router-config'
import { Switch, BrowserRouter } from 'react-router-dom'
import routes from './router'
import store from './store'
import '@/api/axios.js'

import './index.css';


// import 'antd-mobile/dist/antd-mobile.css';

import './App.scss';

import 'animate.css';


// 所有入口页面
const App = () => (

    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                {renderRoutes(routes)}
            </Switch>
        </BrowserRouter>
    </Provider>

)

export default App;
