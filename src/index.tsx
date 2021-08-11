import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './router'
import './styles/base.scss'
import 'animate.css'
// import { RootHoc } from './Hoc'
import store from "./store";
import '@/services/axios.js'

// @RootHoc()
class Root extends Component {
    render () {
        return <Provider store={store}>
            <AppRouter />
        </Provider>
    }
}

ReactDOM.render(<Root />, document.getElementById('root'))
