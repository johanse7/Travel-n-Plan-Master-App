import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoadSpinner from '../components/LoadSpinner';
import AlertMessage from '../components/AlertMessage';
import googleIcon from '../assets/static/Google.png';
import twitterIcon from '../assets/static/twitter.png';
import facebookIcon from '../assets/static/Facebook.png';
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

  return (
    <section className='login'>
      <section className='login-container'>
        <h2>Iniciar sessión</h2>
        <section className='container-social-network '>
          <div className='contend-login-google'>
            <img src={googleIcon} alt='Google' />
            <span> Inicia sesión con Google</span>
          </div>
          <div className='contend-login-facebook '>
            <img src={facebookIcon} alt='Facebook' />
            <span>Inicia sesión con Facebook</span>
          </div>
          <div className='contend-login-twitter'>
            <img src={twitterIcon} alt='Twitter' />
            <span>Inicia sesión con Twitter</span>
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
