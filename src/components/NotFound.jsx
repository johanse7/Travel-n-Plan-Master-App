import React from 'react';
import sadFace from '../assets/static/sadFace.png';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <section className="container-not-found">
    <div>
      <img src={sadFace} alt="not found" />
    </div>
    <div className="container-not-found-message">
      <h1>OOPS!!</h1>
      <p>Lo sentimos esta pagina no existe</p>
    </div>
  </section>
);

export default NotFound;

