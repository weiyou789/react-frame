/* eslint-disable import/extensions */
import React, { Suspense,lazy } from 'react';
//HashRouter
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux'

import LoadingPage from '../layout/loadPage'
import routers from './routers';

const renderRoutes = routes => {
    if (!Array.isArray(routes)) {
        return null;
    }

    return (
        <Switch>
            {routes.map((route, index) => {
                if (route.redirect) {
                    return (
                        <Redirect
                            key={route.path || index}
                            exact={route.exact}
                            strict={route.strict}
                            from={route.path}
                            to={route.redirect}
                        />
                    );
                }
                return (
                    <Route
                        key={route.path || index}
                        path={route.path}
                        exact={route.exact}
                        strict={route.strict}
                        render={() => {
                            const midRouter = [withRouter,lazy]
                            const renderChildRoutes = renderRoutes(route.children);
                            const Wraprouter = compose(...midRouter)(route.component)
                            if (route.component) {
                                document.title = route.meta.title || "";
                                return (
                                    <Suspense fallback={<LoadingPage />}>
                                        <Wraprouter route={route}>{renderChildRoutes}</Wraprouter>
                                    </Suspense>
                                );
                            }
                            return renderChildRoutes;
                        }}
                    />
                );
            })}
        </Switch>
    );
};

const AppRouter = () => {
    return <BrowserRouter>{renderRoutes(routers)}</BrowserRouter>;
};

export default AppRouter;
