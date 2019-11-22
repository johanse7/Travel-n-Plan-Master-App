import React, { useState } from 'react';
import { connect } from 'react-redux';
import LoadSpinner from '../components/LoadSpinner';
import { registerUser } from '../actions/index';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const { registerUser, pending } = props;

  const [form, setForm] = useState({});
  const handleChange = (ev) => {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    registerUser(form, '/login');
  };

  return (
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleClick}>
          <input
            className="input"
            placeholder="Nombre"
            name='name'
            onChange={handleChange}
            required
          />
          <input
            className="input"
            placeholder="Mail"
            name='email'
            onChange={handleChange}
            type="mail"
            required
          />
          <input
            className="input"
            placeholder="Password"
            name='password'
            onChange={handleChange}
            type="password"
            required
          />
          <button
            className="main-button"
            type='submit'

          >
            Registrarme
          </button>
        </form>
      </section>
      {pending && <LoadSpinner />}
    </section>
  );
};

const mapStateToProps = ({ pending }) => (
  {
    pending,
  });

const mapDispatchToProps = {
  registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
