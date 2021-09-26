import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from '../components/login/Login';
import { NotFound } from '../container/NotFound';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route path='/' component={ DashboardRoutes } />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}
