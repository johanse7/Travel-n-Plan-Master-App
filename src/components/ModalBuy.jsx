import React from 'react';
import ModalContainer from './ModalContainer';
import '../assets/styles/components/ModalBuy.scss';

const ModalBuy = (props) => {
  const { origin, destination } = props;
  return (
    <ModalContainer>
      <span className="close">&times;</span>
      <section className="modal-buy-container">
        <h3>Gracias por tu compra</h3>
        <div className="modal-message">
          <p>
            Has adquirido un vuelo desde la ciudad de <b>{origin.cityName} ({origin.countryName})</b>, con destino
             a la ciudad de <b>{destination.cityName} ({destination.countryName})</b>
          </p>
        </div>
        <div className="modal-footer">
          <button className="main-button">
            Tus vueloss
          </button>
        </div>
      </section>
    </ModalContainer>
  );
};

export default ModalBuy;
