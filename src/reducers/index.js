const reducer = (state, action) => {
  switch (action.type) {
    case 'PENDING_AIRLINE_FLIGHT':
      return {
        ...state,
        airLineFilgth: {
          ...state.airLineFilgth,
          pending: true,
        },
      };
    case 'GET_AIRLINE_FLIGHTS':
      return {
        ...state,
        airLineFilgth: {
          ...state.airLineFilgth,
          pending: false,
          airRoutes: action.payload,
        },
      };
    case 'EROR_GET_AIRLINE_FLIGHTS':
      return {
        ...state,
        airLineFilgth: {
          ...state.airLineFilgth,
          pending: false,
          error: action.msg,
        },
      };
    case 'GET_ROUTE_SELECTED':
      debugger
      return {
        ...state,
        airRouteSelected: state.airLineFilgth.airRoutes.find((item) => item._id === action.payload) || {},
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
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
