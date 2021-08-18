import React, { Suspense,lazy } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect,withRouter } from 'react-router-dom'
import { Spin } from 'antd'
import { router } from './routes'
import { object } from 'prop-types'
function compose(...funcs:any[]) {
    if (funcs.length === 0) {
        return (arg:any) => arg
    }

    if (funcs.length === 1) {
        return funcs[0]
    }
    return funcs.reduce((a, b) => (...args:any[]) => a(b(...args)))
}
const renderRoutes = (routes:any) => {
    if (!Array.isArray(routes)) {
        return null
    }

    return (
        <Switch>
            {routes.map((route, index) => {
                if (route.redirect) {
                    return (
                        <Redirect
                            key={route.path || index}
                            exact={route.exact}
                            from={route.path}
                            to={route.redirect}
                        />
                    )
                }

                const keys = Object.keys(route)
                if(!keys.includes('isLazy')){
                    route.isLazy=true
                }
                return (
                    <Route
                        key={route.path || index}
                        path={route.path}
                        exact={route.exact}
                        render={(props) => {
                            const midRouter = [withRouter,lazy]
                            const renderchildren = renderRoutes(route.children)
                            let WrapCom = route.isLazy?compose(...midRouter)(route.component):route.component
                            if (route.component) {
                                return (
                                    <Suspense fallback={<Spin size="large" className="layout__loading" />}>
                                        <WrapCom route={route} {...props}>{renderchildren}</WrapCom>
                                    </Suspense>
                                )
                            }
                            return renderchildren
                        }}
                    />
                )
            })}
        </Switch>
    )
}

const AppRouter = () => {
    return <Router>{renderRoutes(router)}</Router>
}

export default AppRouter
