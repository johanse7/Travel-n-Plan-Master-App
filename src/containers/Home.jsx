import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AirplaneRoutes from '../components/AirplaneRoutes';
import { asyncGetAirlineFlights } from '../actions/index';
import LoadSpinner from '../components/LoadSpinner';
import '../assets/styles/TravelApp.scss';

const Home = ({ airRoutes, pending, error, asyncGetAirlineFlights }) => {
  useEffect(() => {
    asyncGetAirlineFlights();
  }, []);
  return (
    <>
      {pending ? (<LoadSpinner />) : (
        airRoutes && airRoutes.map((airRoute) => <AirplaneRoutes key={`airplaneRoute${airRoute._id}`} {...airRoute} />))}
    </>
  );
};
const mapSatateToProps = ({ airLineFilgth }) => {
  return {
    airRoutes: airLineFilgth.airRoutes,
    pending: airLineFilgth.pending,
    error: airLineFilgth.error,
  };
};
const mapDispatchToProps = {
  asyncGetAirlineFlights,
};

export default connect(mapSatateToProps, mapDispatchToProps)(Home);

