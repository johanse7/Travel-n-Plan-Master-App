const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_ROUTE_SELECTED':
            return {
                ...state,
                airRouteSelected: state.airRoutes.find(item => item.id === Number(action.payload)) || {}
            };
        case 'SET_BUY_ADD_PASSANGGER':
            return {
                ...state,
                buyAirRoute: { 
                   ...state.buyAirRoute,
                    ...action.payload
                 }
            };
            case 'SET_BUY_FLIGTH_SCALE':
                debugger
                return {
                    ...state,
                    buyAirRoute: { 
                        ...state.buyAirRoute,
                        fligthScale:{ 
                            ...state.airRouteSelected.fligthScales.filter(item=>
                                                            item.fligthScalesId === 
                                                            action.payload.fligthScalesId)
                                                            .map(item=> ({
                                                                duration :item.duration,
                                                                category: item.categories.find(item =>item.categoriesId === action.payload.categoriesId)
                                                            }))[0]
                         //category: state.buyAirRoute.fligthScale.categories.map(item>item.categoriesId === action.payload.categoriesId)
                        }

                     }
                };
        default:
            return state;
    }
};

export default reducer;
