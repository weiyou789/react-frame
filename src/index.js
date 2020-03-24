import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
// import 'antd-mobile/dist/antd-mobile.css'
import './index.css'

import { findUserInfo } from '@/api/https'

async function getRS (){
    try{
        let {data} = await findUserInfo({ password: "123456", username: "10000000000" });
        sessionStorage.setItem('access_token',data.access_token)
    } catch(err){
        console.error(err);
    }
}
getRS()

ReactDOM.render(
   
     
            <App />
       
  
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
