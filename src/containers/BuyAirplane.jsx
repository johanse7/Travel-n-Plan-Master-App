import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRouteById } from '../actions/index';
import AirPlaneDetail from '../components/AirPlaneDetail';
import FormBuy from './FormBuy';

import SummaryBuy from '../components/SummaryBuy';
import '../assets/styles/components/BuyAirplane.scss';

const BuyAirplane = (props) => {

  const { getRouteById, airRouteSelected } = props;
  const { id } = props.match.params;

  useEffect(() => {
    getRouteById(id);
  }, []);

  return (
    <>
      <section className="container-Buy">
        <div className="buy-detail">
          <AirPlaneDetail {...airRouteSelected} />
          <div className="section-FormBuy">
            <FormBuy />
          </div>
        </div>
        <SummaryBuy />

      </section>

    </>
  );
};

const mapSatateToProps = (state) => {
  return {
    airRouteSelected: state.airRouteSelected,
  };
};
const mapDispatchToProps = {
  getRouteById,
};

export default connect(mapSatateToProps, mapDispatchToProps)(BuyAirplane);
