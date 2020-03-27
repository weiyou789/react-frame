import React from 'react';
import ReactDOM from 'react-dom'
// import App from './App'
import Root from './Root'
import * as serviceWorker from './serviceWorker'
// import 'antd-mobile/dist/antd-mobile.css'
import '@/services/axios.js'
import store from "./store";

function renderApp(app) {
    const mountNode = document.getElementById('root')
    ReactDOM.render(app, mountNode)
}

renderApp(<Root store={store} />)

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
