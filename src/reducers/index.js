const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_ROUTE_SELECTED':
      return {
        ...state,
        airRouteSelected: state.airRoutes.find((item) => item.id === Number(action.payload)) || {},
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
