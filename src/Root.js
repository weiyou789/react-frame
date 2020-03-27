import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import AppRouter from './router'
import './styles/base.scss';
import 'animate.css';
import { fixInputOniOS } from '@/utils/fixInputOnIOS.js';


export default class Root extends Component {
    componentDidMount () {
        fixInputOniOS()
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
