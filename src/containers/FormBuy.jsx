import React from 'react';
import ContentFlightScale from './ContentFlightScale';
import Passangger from '../components/Passangger';
import '../assets/styles/components/FormBuy.scss';

const FormBuy = (props) => {
  return (
    <div className="container-formBuy">
      <Passangger />
      <ContentFlightScale />
    </div>
  );
};

export default FormBuy;