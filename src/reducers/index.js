const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_ROUTE_SELECTED':
            return {
                ...state,
                airRouteSelected: state.airRoutes.find(item => item.id === Number(action.payload)) || {}
            };
        case 'SET_BUY_ROUTE':
            return {
                ...state,
                buyAirRoute: { ...action.payload }
            };
        default:
            return state;
    }
};

export default reducer;
