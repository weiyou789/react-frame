import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import AppRouter from './router'
import './styles/base.scss';
import 'animate.css';


export default class Root extends Component {
    componentDidMount () {
        //全局方法
    }
    render () {
        const { store } = this.props
        return (
            <Provider store={store}>
                <AppRouter />
            </Provider>
        )
    }
}
