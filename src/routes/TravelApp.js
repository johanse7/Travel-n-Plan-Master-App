import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';

const TravelApp = () => (
    <BrowserRouter >
        <Route exact path ='/' component={Home} />
    </BrowserRouter>
);

export default TravelApp;