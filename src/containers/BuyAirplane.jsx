import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRouteSelected } from '../actions/index';
import AirPlaneDetail from '../components/AirPlaneDetail';

const BuyAirplane = props => {

    const { id } = props.match.params;

    useEffect(() => {
        props.getRouteSelected(id);
    }, []);

    return (
        <AirPlaneDetail {...props.airRouteSelected} />
    );
};

const mapSatateToProps = (state) => {
    return {
        airRouteSelected: state.airRouteSelected,
    };
};
const mapDispatchToProps = {
    getRouteSelected
}

export default connect(mapSatateToProps, mapDispatchToProps)(BuyAirplane);
