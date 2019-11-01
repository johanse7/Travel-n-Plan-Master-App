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


// asynchronous action creator
export const fetchData = () => {

  return (dispatch) => {
      return fetch('https://jsonmock.hackerrank.com/api/movies/search/?Title=waterworld')
          .then(response => response.json())
          .then(json => dispatch(
              { type: "FetchData", data: json }))
          .catch(err => dispatch(
              { type: "ERROR",msg: "Unable to fetch data" }))
  }

}