const URL = 'https://travelmasterplan-api.now.sh';

export const asyncGetAirlineFlights = () => {
  return (dispatch) => {
    dispatch({ type: 'PENDING_AIRLINE_FLIGHT' });
    return fetch(`${URL}/api/airlineFlight`)
      .then((response) => response.json())
      .then((dataAirlineFlights) => dispatch({ type: 'GET_AIRLINE_FLIGHTS', payload: dataAirlineFlights.data }))
      .catch((error) => dispatch({ type: 'EROR_GET_AIRLINE_FLIGHTS', msg: error }));
  };
};

export const getRouteSelected = (payload) => ({
  type: 'GET_ROUTE_SELECTED',
  payload,
});

export const setBuyAddPassangger = (payload) => ({
  type: 'SET_BUY_ADD_PASSANGGER',
  payload,
});

export const setBuyFligthScale = (payload) => ({
  type: 'SET_BUY_FLIGTH_SCALE',
  payload,
});

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

