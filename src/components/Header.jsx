import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src='/images/logo.png' alt='Logo' />
      </div>
      <nav className='header__nav'>
        <div>
          <Link to='/'>
            <img src='/images/ico_back.png' alt='Back button' />
          </Link>
          <Link to='/'>
            <img src='/images/ico_home.png' alt='Home button' />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
