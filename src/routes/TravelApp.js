import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../helpers/history';
import Home from '../containers/Home';
import Login from '../containers/login';
import Register from '../containers/Register';
import BuyAirplane from '../containers/BuyAirplane';
import NotFound from '../components/NotFound';
import UserFligth from '../containers/UserFligth';
import PrivateRoute from '../components/PrivateRoute';
import Layout from '../components/Layout';

const TravelApp = () => (
  <Router history={history}>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/userFligth" component={UserFligth} />
        <Route exact path="/buyAirplane/:id" component={BuyAirplane} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

export default TravelApp;
