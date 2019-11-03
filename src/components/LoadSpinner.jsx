import React from 'react';
import '../assets/styles/components/LoadSpinner.scss';

const LoadSpinner = () => (
  <section className="spinner-container">
    <div className="sk-chase">
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
    </div>
  </section>
);

export default LoadSpinner;
