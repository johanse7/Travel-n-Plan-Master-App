const userStorage = localStorage.getItem('user');
const user = userStorage ? JSON.parse(userStorage) : {};
const initialState = {
  user,
  airRouteSelected: {},
  buyAirRoute: {},
  airLineFilgths: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PENDING_AIRLINE_FLIGHT':
      return {
        ...state,
        pending: true,
      };
    case 'GET_AIRLINE_FLIGHTS':
      return {
        ...state,
        airLineFilgths: action.payload,
        pending: false,
      };
    case 'EROR_GET_AIRLINE_FLIGHTS':
      return {
        ...state,
        error: action.msg,
        pending: false,
      };
    case 'GET_ROUTE_SELECTED':
      return {
        ...state,
        pending: false,
        airRouteSelected: action.payload,
      };
    case 'SET_BUY_ADD_PASSANGGER':
      return {
        ...state,
        buyAirRoute: {
          ...state.buyAirRoute,
          ...action.payload,
        },
      };
    case 'SET_BUY_FLIGTH_SCALE':
      return {
        ...state,
        buyAirRoute: {
          ...state.buyAirRoute,
          fligthScale: {
            ...state.airRouteSelected.fligthScales.filter((item) => item.fligthScalesId === action.payload.fligthScalesId).map((item) => ({
              ...item,
              category: item.categories.find((item) => item.categoriesId === action.payload.categoriesId),
            }))[0],
          },
        },
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
        pending: false,
        errorLogin: null,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
        pending: false,
      };
    case 'REGISTER_BUY_REQUEST':
      return {
        ...state,
        pending: false,
        userRegisterBuy: action.payload,
        buyAirRoute: {},
      };
    case 'SET_ERROR_RESPONSE':
      return {
        ...state,
        error: action.error,
        pending: false,
      };
    case 'SET_ERROR_LOGIN':
      return {
        ...state,
        errorLogin: action.error,
        pending: false,
      };
    case 'SHOW-MODAL-SUCCES-BUY':
      return {
        ...state,
        openModalBuy: action.payload,
      };
    case 'GET-AIRLINE-FLIGTHS-USER':
      debugger
      return {
        ...state,
        pending: false,
        airLineFilgthsUser: action.payload || [],
      };
    default:
      return state;
  }
};

export default reducer;
