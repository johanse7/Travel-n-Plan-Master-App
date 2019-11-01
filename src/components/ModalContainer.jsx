import React from 'react';
import '../assets/styles/components/ModalContainer.scss';

const ModalContainer = ({ children }) => {
  return (
    <section className="modal">
      <div className="modal-content">
        {children}
      </div>
    </section>
  );
};

export default ModalContainer;
