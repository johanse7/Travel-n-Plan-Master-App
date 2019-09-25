import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import TravelApp from './routes/TravelApp';

ReactDOM.render(
//   <Provider>
    <TravelApp />,
//   </Provider>,
  document.getElementById('TravelMasterApp')
);
