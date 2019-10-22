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
  "airRouteSelected": {

  },
  "buyAirRoute": {
    
  },
  "airRoutes": [
    {
      "id": 1,
      "startDate": "08 sep 2019",
      "startHour": "10:30",
      "endHour": "12:00",
      "price": 1500000,
      "airLineName": "Viva Colombia",
      "origin": {
        "cityName": "London",
        "countryName": "England",
        "code": "Lon",
        "airportName": "Lodon Airport"
      },
      "destination": {
        "cityName": "New tork",
        "countryName": "EEUU",
        "code": "JFK",
        "airportName": "New York Airport"
      },
      "fligthScales":[
        {
          "fligthScalesId": 1,
          "duration":"3h4m",
          "startHour":"12:00",
          "endHour":"15:00",
          "typeScale":"Directo",
          "codeScale" :"01",
          "categories":[
            {
              "categoriesId":1,
              "name": "Economico",
              "price": 600000,
            },
            {
              "categoriesId":2,
              "name": "Ejecutivo",
              "price": 800000,
            }
          ]
        }
      ],

    },
    {
      "id": 2,
      "startDate": "09 sep 2019",
      "startHour": "05:00",
      "endHour": "07:00",
      "airLineName": "Latam",
      "price": 2600000,
      "origin": {
        "cityName": "Bogota",
        "countryName": "Colombia",
        "code": "BOG",
        "airportName": "Aeropuerto Internacional El Dorado"
      },
      "destination": {
        "cityName": "Cali",
        "countryName": "Colombia",
        "code": "CAL",
        "airportName": "Aeropuerto de Cali"
      },
      "fligthScales":[
        {
          "fligthScalesId": 2,
          "duration":"3h4m",
          "startHour":"13:00",
          "endHour":"18:00",
          "typeScale":"Directo",
          "codeScale" :"01",
          "categories":[
            {
              "categoriesId":1,
              "name": "Economico",
              "price": 700,
            },
            {
              "categoriesId":2,
              "name": "Ejecutivo",
              "price": 900,
            }
          ]
        }
      ],

    }

  ]
};
const store = createStore(reducer,
  intialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <TravelApp />
  </Provider>,
  document.getElementById('TravelMasterApp')
);
