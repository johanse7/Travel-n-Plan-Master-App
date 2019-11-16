import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/index';
import TravelApp from './routes/TravelApp';

const composeEnhancers = (typeof window !== 'undefined' && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_) || compose;

const store = createStore(reducer,
  compose(applyMiddleware(thunk), composeEnhancers()));

ReactDOM.render(
  <Provider store={store}>
    <TravelApp />
  </Provider>,
  document.getElementById('TravelMasterApp'),
);
