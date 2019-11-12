import React from 'react';
import { withRouter } from 'react-router-dom';
import ModalContainer from './ModalContainer';
import '../assets/styles/components/ModalBuy.scss';

const ModalBuy = (props) => {
  const { origin, destination, history } = props;
  const handleClickRedirect = () => {
    history.push('/userFligth');
  };
  return (
    <ModalContainer>
      <section className="modal-buy-container">
        <h3>Gracias por tu compra</h3>
        <div className="modal-message">
          <p>
            Has adquirido un vuelo desde la ciudad de <b>{origin.cityName} ({origin.countryName})</b>, con destino
             a la ciudad de <b>{destination.cityName} ({destination.countryName})</b>
          </p>
        </div>
        <div className="modal-footer">
          <button className="main-button" onClick={ handleClickRedirect }>
            Mis Vuelos
          </button>
        </div>
      </section>
    </ModalContainer>
  );
};

export default withRouter(ModalBuy);
