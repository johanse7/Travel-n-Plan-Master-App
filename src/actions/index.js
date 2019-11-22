import history from '../helpers/history';
//https://travelmasterplan-api.now.sh/
const URL_API = 'http://localhost:3000';
const URL_BACKEND = 'http://localhost:8000';

export const setError = (error) => ({
  type: 'SET_ERROR_RESPONSE',
  error,
});

export const setErrorLogin = (error) => ({
  type: 'SET_ERROR_LOGIN',
  error,
});

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

export const logoutRequest = (payload) => {
  localStorage.removeItem('user');
  return {
    type: 'LOGOUT_REQUEST',
    payload,
  };
};

export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const registerBuyRequest = (payload) => ({
  type: 'REGISTER_BUY_REQUEST',
  payload,
});
export const setPendingFetch = () => ({
  type: 'PENDING_AIRLINE_FLIGHT',
});

export const showModalSuccessBuy = (payload) => ({
  type: 'SHOW-MODAL-SUCCES-BUY',
  payload,
});

export const getAirlineFligthUsers = (payload) => ({
  type: 'GET-AIRLINE-FLIGTHS-USER',
  payload,
});

export const asyncGetAirlineFlights = () => {
  return (dispatch) => {
    dispatch(setPendingFetch());
    return fetch(`${URL_API}/api/airlineFlight`)
      .then((response) => response.json())
      .then((dataAirlineFlights) => dispatch({ type: 'GET_AIRLINE_FLIGHTS', payload: dataAirlineFlights.data }))
      .catch((error) => dispatch({ type: 'EROR_GET_AIRLINE_FLIGHTS', msg: error }));
  };
};

export const registerUser = (payload, redirectUrl) => {
  return (dispatch) => {
    dispatch(setPendingFetch());
    fetch(`${URL_BACKEND}/auth/sign-up`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(payload),
    }).then((response) => response.json())
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch((error) => dispatch(setError(error)));
  };
};

export const loginUser = ({ email, password }, redirectUrl) => {
  return (dispatch) => {
    dispatch(setPendingFetch());
    fetch(`${URL_BACKEND}/auth/sign-in`, {
      method: 'POST',
      credentials: 'include',
      headers: new Headers({
        'Authorization': `Basic ${btoa(`${email}:${password}`)}`,
      }),
    }).then((response) => response.json())
      .then(({ user }) => {
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(loginRequest(user));
      })
      .then(() => {
        history.push(redirectUrl);
      })
      .catch((error) => dispatch(setErrorLogin(error)));
  };
};

export const registerBuy = (payload) => {
  return (dispatch) => {
    dispatch(setPendingFetch());
    fetch(`${URL_BACKEND}/user-arirlineFligth`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(payload),
    }).then((response) => response.json())
      .then((data) => {
        dispatch(registerBuyRequest(data));
        dispatch(showModalSuccessBuy(true));
      })
      .catch((error) => dispatch(setError(error)));
  };
};

export const getRouteById = (payload) => {
  return (dispatch) => {
    dispatch(setPendingFetch());
    fetch(`${URL_API}/api/airlineFlight/${payload}`)
      .then((response) => response.json())
      .then(({ data }) => {
        dispatch(getRouteSelected(data));
      })
      .catch((error) => dispatch(setError(error)));
  };
};

export const getAirlineFligthsByUser = (payload) => {
  return (dispatch) => {
    debugger
    dispatch(setPendingFetch());
    fetch(`${URL_BACKEND}/user-arirlineFligth/?userId=${payload}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      method: 'GET',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then(({ data }) => dispatch(getAirlineFligthUsers(data)))
      .catch((error) => dispatch(setError(error)));
  };
};

