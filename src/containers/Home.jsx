import React from 'react';
import { connect } from 'react-redux';
import AirplaneRoutes from '../components/AirplaneRoutes';
import '../assets/styles/TravelApp.scss';

const Home = ({ airRoutes }) => (
  <>
    {airRoutes.map(airRoute => <AirplaneRoutes key={airRoute.id} {...airRoute} />)}
  </>
);
const mapSatateToProps = (state) => {
  return {
    airRoutes: state.airRoutes,
  };
};
export default connect(mapSatateToProps, null)(Home);

