/* eslint-disable import/extensions */
import React, { Suspense } from 'react';
//HashRouter
import { BrowserRouter as Router, Route, Switch, Redirect,withRouter } from 'react-router-dom';

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
                            const renderChildRoutes = renderRoutes(route.children);
                            const Withrouter = withRouter(route.component)
                            if (route.component) {
                                return (
                                    <Suspense fallback={<LoadingPage />}>
                                        <Withrouter route={route}>{renderChildRoutes}</Withrouter>
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
    return <Router>{renderRoutes(routers)}</Router>;
};

export default AppRouter;
