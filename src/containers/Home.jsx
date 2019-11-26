import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import AirplaneRoutes from '../components/AirplaneRoutes';
import { asyncGetAirlineFlights, loginRequest } from '../actions/index';
import LoadSpinner from '../components/LoadSpinner';
import '../assets/styles/TravelApp.scss';

const Home = (props) => {
  const { airRoutes, pending, asyncGetAirlineFlights, loginRequest } = props;

  useEffect(() => {
    asyncGetAirlineFlights();

    const user = queryString.parse(props.location.search);
    debugger
    if (user.id) {
      loginRequest(user);
    }
  }, []);
  return (
    <>
      {pending ? (<LoadSpinner />) : (
        airRoutes && airRoutes.map((airRoute) => <AirplaneRoutes key={`airplaneRoute${airRoute._id}`} {...airRoute} />))}
    </>
  );
};
const mapSatateToProps = ({ airLineFilgths, pending }) => {
  return {
    airRoutes: airLineFilgths,
    pending,
  };
};
const mapDispatchToProps = {
  asyncGetAirlineFlights,
  loginRequest,
};

export default connect(mapSatateToProps, mapDispatchToProps)(Home);

