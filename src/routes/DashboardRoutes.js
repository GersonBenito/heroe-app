import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Dc } from '../components/dc/Dc';
import { Heroes } from '../components/herores/Heroes';
import { Marvel } from '../components/marvel/Marvel';
import { Search } from '../components/search/Search';
import { Layout } from '../layout/Layout';

export const DashboardRoutes = () => {
    return (
        <>
            <Layout>
                <Switch>
                    <Route exact path='/marvel' component={ Marvel } />
                    <Route exact path='/hero/:heroId' component={ Heroes } />
                    <Route exact path='/dc' component={ Dc } />
                    <Route exact path='/buscar' component={ Search } />
                    <Redirect to='/marvel' />
                </Switch>
            </Layout>
        </>
    )
}
