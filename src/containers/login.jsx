import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import LoadSpinner from '../components/LoadSpinner';
import AlertMessage from '../components/AlertMessage';
import { loginUser } from '../actions/index';
import '../assets/styles/components/Login.scss';

const Login = (props) => {
  const { loginUser, pending, errorLogin } = props;
  const [form, setValues] = useState({
    user: '',
    password: '',
  });

  const handleChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickLogin = (e) => {
    e.preventDefault();
    loginUser(form, '/');
  };

  const handleClickRedirectLogin = (url) => {
    window.location.href = url;
  };

  return (
    <section className='login'>
      <section className='login-container'>
        <h2>Iniciar sessión</h2>
        <section className='container-social-network '>
          <div
            className='content-login-google'
            onClick={() => handleClickRedirectLogin('http://localhost:8000/auth/google-oauth')}
          >
            <FaGoogle />
            <span> Inicia sesión con Google</span>
          </div>
          <div
            className='content-login-facebook'
            onClick={() => handleClickRedirectLogin('http://localhost:8000/auth/facebook')}
          >
            <FaFacebookF />
            <span>Inicia sesión con Facebook</span>
          </div>
        </section>
        <section>
          <form className='login-form' onSubmit={handleClickLogin}>
            <input
              type='mail'
              name='email'
              placeholder='Email'
              className='input'
              onChange={handleChange}
              required
            />
            <input
              type='password'
              name='password'
              placeholder='Contraseña'
              className='input'
              onChange={handleChange}
              required
            />
            <button
              className='main-button'
              type='submit'
              required
            >
              Inicia sesión
            </button>
            <p className='login-register'>
              No tienes ninguna cuenta
              {' '}
              <Link to='/register'>
                Regístrate
              </Link>
            </p>
            {errorLogin &&
              <AlertMessage message="Credenciales invalidas" classTypeAlert="warning" />}
          </form>
        </section>
      </section>
      {pending &&
        <LoadSpinner />}

    </section>
  );
};

const mapStateToProps = ({ pending, errorLogin }) => (
  {
    pending,
    errorLogin,
  });

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
