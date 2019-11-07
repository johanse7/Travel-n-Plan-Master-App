import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaLongArrowAltRight } from 'react-icons/fa';
import ModalBuy from "./ModalBuy";
import smallAirPlane from '../assets/static/small-black-plane.png';
import '../assets/styles/components/SummaryBuy.scss';

const SummaryBuy = (props) => {

  const [stateSumary, setStateSumary] = useState({
    openModalBuy: false,
  });

  const { buyAirRoute, airRouteSelected, user } = props;
  const { fligthScale } = buyAirRoute;
  const hasMoreThanOne = buyAirRoute.totalPassenger > 1;
  const hasUser = Object.keys(user).length > 0;

  const calcTotalPrice = () => {
    return buyAirRoute.totalPassenger * fligthScale.category.price;
  };

  const handleClickBuy = () => {
    setStateSumary({
      openModalBuy: true,
    });
  };
  return (
    <section className="container-summary">
      <h2>Tu selección</h2>
      <p className="summary-count-passangers">
        {`${buyAirRoute.totalPassenger}  ${hasMoreThanOne ? 'Pasajeros' : 'Pasajero'}`}
      </p>
      <div className="summary-date">
        <img src={smallAirPlane} alt="origen" />
        {airRouteSelected.startDate}
      </div>
      {fligthScale && (
        <>
          <div className="sumary-time-fligth">
            <span>{fligthScale.startHour}</span>
            <FaLongArrowAltRight />
            <span>{fligthScale.endHour}</span>

          </div>
          <p>
            {`Duración ${fligthScale.duration}`}
          </p>
          <div className="summary-total-price">
            <p>{fligthScale.category.name}</p>
            <p>
              {`Total: COP $  ${calcTotalPrice()}`}
            </p>
          </div>
        </>
      )}
      {hasUser ? (
        <button
          type="button"
          className="success-button"
          onClick={handleClickBuy}
        >
          Comprar
        </button>
      ) :
        (
          <div className="sumary-link-login">
            <Link to="/login">
              Inicia sesión para continuar con la compra
            </Link>
          </div>

        )}
      {stateSumary.openModalBuy &&
        <ModalBuy {...airRouteSelected} />}
    </section>
  );
};
const mapSatateToProps = (state) => {
  return {
    buyAirRoute: state.buyAirRoute,
    airRouteSelected: state.airRouteSelected,
    user: state.user,
  };
};

export default connect(mapSatateToProps, null)(SummaryBuy);
