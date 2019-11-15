import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaLongArrowAltRight } from 'react-icons/fa';
import ModalBuy from './ModalBuy';
import LoadSpinner from '../components/LoadSpinner';
import smallAirPlane from '../assets/static/small-black-plane.png';
import { registerBuy } from '../actions/index';
import '../assets/styles/components/SummaryBuy.scss';

const SummaryBuy = (props) => {

  const { buyAirRoute, airRouteSelected, user, registerBuy, openModalBuy } = props;
  const { fligthScale } = buyAirRoute;
  const hasMoreThanOne = buyAirRoute.totalPassenger > 1;
  const hasUser = Object.keys(user).length > 0;

  const calcTotalPrice = () => {
    return buyAirRoute.totalPassenger * fligthScale.category.price;
  };

  const handleClickBuy = () => {
    const userAirlineFligth = {
      userId: user.id,
      origin: airRouteSelected.origin,
      destination: airRouteSelected.destination,
      category: fligthScale.category.name,
      totalPassenger: buyAirRoute.totalPassenger,
      totalPrice: calcTotalPrice(),
    };
    registerBuy(userAirlineFligth);
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
      {openModalBuy &&
        <ModalBuy {...airRouteSelected} />}

    {/* <LoadSpinner />  */}
    </section>
  );
};
const mapSatateToProps = (state) => {
  return {
    buyAirRoute: state.buyAirRoute,
    airRouteSelected: state.airRouteSelected,
    user: state.user,
    pending: state.pending,
    openModalBuy: state.openModalBuy,
  };
};

const mapDispatchToProps = {
  registerBuy,
};

export default connect(mapSatateToProps, mapDispatchToProps)(SummaryBuy);
