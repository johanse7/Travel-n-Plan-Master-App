import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';
import TravelApp from './routes/TravelApp';

const intialState = {
  "user": {
    "name": ""
  },
  "airRoutes": [
    {
      "id":1,
      "startDate": "08 sep 2019",
      "startHour": "10:30",
      "endHour": "12:00",
      "airLineName":"Viva Colombia",
      "origin": {
        "cityName": "London",
        "countryName": "England",
        "code": "Lon"
      },
      "destination": {
       "cityName": "New tork",
        "countryName": "EEUU",
        "code": "JFK"
      }

    },
     {
      "id":2,
      "startDate": "09 sep 2019",
      "startHour": "05:00",
      "endHour": "07:00", 
      "airLineName":"Latam",
      "origin": {
        "cityName": "Bogota",
        "countryName": "Colombia",
        "code": "BOG"
      },
      "destination": {
        "cityName": "Cali",
        "countryName": "Colombia",
        "code": "CAL"
      }

    }

  ]
};
const store = createStore(reducer, intialState);

ReactDOM.render(
  <Provider store={store}>
    <TravelApp />
  </Provider>,
  document.getElementById('TravelMasterApp')
);
