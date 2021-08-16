import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './router'
import './styles/base.scss'
import 'animate.css'
import '@/services/axios.js'
import rootReducer,{ stateMap } from './rootReducers'
import Context from './context.js'

const Root = () => {
    const [state, dispatch] = useReducer<any>(rootReducer, stateMap);
    return <Context.Provider value={{ state, dispatch }}>
        <AppRouter />
    </Context.Provider>
}
ReactDOM.render(
    <Root />,
    document.getElementById('root')
  )