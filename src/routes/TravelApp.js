import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import BuyAirplane from '../containers/BuyAirplane';
import Layout from '../components/Layout';

const TravelApp = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/buyAirplane/:id" component={BuyAirplane} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default TravelApp;
