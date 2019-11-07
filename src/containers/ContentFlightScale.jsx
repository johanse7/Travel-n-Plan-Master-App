import React, { useState } from 'react';
import { connect } from 'react-redux';
import FlightScale from '../components/FlightScale';
import { setBuyFligthScale } from '../actions/index';

const ContentFlightScale = props => {

  const classNameSelected = "flight-scale-selected";
  const { fligthScales, setBuyFligthScale } = props;

  const [classFlight, setClassFlight] = useState({
    classSelected: {},
  });

  const clickClassSelected = (fligthScalesId, categoriesId) => {
    setClassFlight({
      ...classFlight,
      classSelected: {
        [`category${fligthScalesId}${categoriesId}`]: classNameSelected
      }
    })

    setBuyFligthScale({
      fligthScalesId,
      categoriesId
    });
  };
  return (
    <>
      {fligthScales && fligthScales.length > 0 ?
        fligthScales.map(item =>
          (<FlightScale
            key={`flightScale${item.fligthScalesId}`}
            {...item}
            handleClickClassSelected={clickClassSelected}
            classSelected={classFlight.classSelected}
          />
          ))
        : <h3>No hay rutas disponibles</h3>
      }
    </>
  );
};

const mapSatateToProps = (state) => {
  return {
    fligthScales: state.airRouteSelected.fligthScales
  };
}

const mapDispatchToProps = {
  setBuyFligthScale
}

export default connect(mapSatateToProps, mapDispatchToProps)(ContentFlightScale);