import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRouteSelected } from '../actions/index';
import AirPlaneDetail from '../components/AirPlaneDetail';
import FormBuy from '../components/FormBuy';
import '../assets/styles/components/BuyAirplane.scss';

const BuyAirplane = props => {

    const { id } = props.match.params;

    useEffect(() => {
        props.getRouteSelected(id);
    }, []);

    return (
        <section className="container-Buy">
            <AirPlaneDetail {...props.airRouteSelected} />
            <FormBuy />
        </section>

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
