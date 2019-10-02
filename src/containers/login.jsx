import React from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../assets/static/Google.png';
import twitterIcon from '../assets/static/twitter.png';
import facebookIcon from '../assets/static/Facebook.png'; 
import '../assets/styles/components/Login.scss';

const Login = () => {
  return (
    <section className="login">
      <section className="login-container">
        <h2>Iniciar sessión</h2>
        <section className="container-social-network ">
          <div className="contend-login-google">
            <img src={googleIcon} alt='Google' />
            <span> Inicia sesión con Google</span>
          </div>
          <div className="contend-login-facebook ">
            <img src={facebookIcon} alt='Facebook' />
           <span>Inicia sesión con Facebook</span>
          </div>
          <div className="contend-login-twitter">
            <img src={twitterIcon} alt='Twitter' />
           <span>Inicia sesión con Twitter</span>
          </div>
        </section>
        <section>
          <form className="login-form">
            <input type="text" 
                   name="user" 
                   placeholder="Usuario" 
                   className="input"
                   />
            <input 
                  type="text" 
                  name="password"
                  placeholder="Contraseña"
                  className="input"
                   />
            <button className="main-button" type='button'>
              Inicia sesión
          </button>
          <p className="login-register">No tienes ninguna cuenta {' '}
            <Link to="/register">
                        Regístrate
            </Link>
          </p>
          </form>
        </section>
      </section>
    </section>
  );
};
export default Login;
