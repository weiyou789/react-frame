import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter,withRouter } from 'react-router-dom'
import AppRouter from './router'
// import store from "./store";
import './styles/base.scss';
import 'animate.css';


export default class Root extends Component {
  componentDidMount () {
      // console.log(11111)
  }
  render() {
    const { store } = this.props
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </Provider>
    )
  }
}
