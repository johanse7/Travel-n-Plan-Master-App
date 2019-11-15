import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/index';
import TravelApp from './routes/TravelApp';

const intialState = {
  "user": {

  },
  "airRouteSelected": {

  },
  "buyAirRoute": {
    
  },
  "airLineFilgths":  [],
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(reducer,
  compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

ReactDOM.render(
  <Provider store={store}>
    <TravelApp isLogged={intialState.user.id} />
  </Provider>,
  document.getElementById('TravelMasterApp'),
);
