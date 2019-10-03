import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className='header'>
    <Link to="/">
      <h1>Travel plan master</h1>
    </Link>
  </header>
);

export default Header;
