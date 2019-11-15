import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/index';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const { registerUser } = props;

  const [form, setForm] = useState({});
  const handleChange = (ev) => {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleClick = (ev) => {
    registerUser(form, '/login');
  };

  return (
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form">
          <input
            className="input"
            placeholder="Nombre"
            name='name'
            onChange={handleChange}
          />
          <input
            className="input"
            placeholder="Mail"
            name='email'
            onChange={handleChange}
            type="mail"
          />
          <input
            className="input"
            placeholder="Password"
            name='password'
            onChange={handleChange}
            type="password"
          />
          <button
            className="main-button"
            type='button'
            onClick={handleClick}
          >
            Registrarme
          </button>
        </form>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(null, mapDispatchToProps)(Register);
