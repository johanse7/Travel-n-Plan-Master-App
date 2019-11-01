import React from 'react';
import ModalContainer from './ModalContainer';
import '../assets/styles/components/ModalBuy.scss';

const ModalBuy = (props) => {
  return (
    <ModalContainer>
      <span className="close">&times;</span>
      <section className="modal-buy-container">
        <h3>Gracias por tu compra</h3>
        <div className="modal-message">
          <p>
            Has adquirido un vuelo desde la ciudad de
             <b> Bogota (Colombia) </b>, con destino
             a  la ciudad de <b>Medellin (Colombia)</b>
          </p>
        </div>
        <div className="modal-footer">
          <button className="main-button">
            Tus vuelos
          </button>
        </div>
      </section>
    </ModalContainer>
  );
};

export default ModalBuy;
