import React, { useEffect, useReducer } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { authReducer } from '../auth/authReducer';
import { Login } from '../components/login/Login';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const init = () =>{
    
        return JSON.parse(localStorage.getItem('user')) || { logged: false };
    
    }
    
    const [ user, dispatch ] = useReducer( authReducer, {}, init );

    useEffect(()=>{

        localStorage.setItem('user', JSON.stringify(user));

    },[ user ]);


    return (
        <AuthContext.Provider value={{ user, dispatch }} >
            <BrowserRouter>
                <Switch>
                    <PublicRoute exact path='/login' isAuthenticated={ user.logged }  component={Login} />
                    <PrivateRoute path='/' isAuthenticated={ user.logged } component={ DashboardRoutes } />
                </Switch>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}
