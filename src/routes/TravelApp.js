import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/login';
import Register from '../containers/Register';
import BuyAirplane from '../containers/BuyAirplane';
import NotFound from '../components/NotFound';
import UserFligth  from '../containers/UserFligth';
import Layout from '../components/Layout';

const TravelApp = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/userFligth" component={UserFligth} />
        <Route exact path="/buyAirplane/:id" component={BuyAirplane} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default TravelApp;
