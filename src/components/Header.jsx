import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { FaUserAlt, FaAngleDown } from 'react-icons/fa';
import UserAccountPopover from './UserAccountPopover';
import { logoutRequest } from '../actions/index';
import '../assets/styles/components/Header.scss';

const Header = (props) => {
  const { logoutRequest } = props;
  const wrapperPopoverRef = useRef(null);
  const [headerState, headerSetState] = useState({
    showPopoverAccount: false,
  });

  const handleClickShowPopover = (e) => {
    // && !e.target.closest('li')
    debugger
    if (wrapperPopoverRef.current && (wrapperPopoverRef.current.contains(e.target))) {
      return;
    }
    headerSetState({
      showPopoverAccount: !headerState.showPopoverAccount,
    });
  };

  const handleClickLogoutUser = () => {
    logoutRequest({});
    props.history.push('/login');
  };
  const handleClickRedirect = (url) => {
    props.history.push(url);
    headerSetState({
      showPopoverAccount: false,
    });
  };
  useEffect(() => {
    if (headerState.showPopoverAccount) {
      const popover = document.getElementById('popoverAccount');
      popover.classList.add('animate-popover');
      document.addEventListener('mousedown', handleClickShowPopover);
    }
    // Bind the event listener
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickShowPopover);
    };
  }, [headerState.showPopoverAccount]);

  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  return (
    <header className='header'>
      <Link to='/'>
        <h1>Travel plan master</h1>
      </Link>
      {hasUser ? (
        <div className='info-user-wrapper'>
          <div className='info-user-login' onClick={handleClickShowPopover}>
            <FaUserAlt />
            <span>
              {user.name}
            </span>
            <div className='info-user-menu'>
              <FaAngleDown />
            </div>
          </div>
          {headerState.showPopoverAccount && (
            <UserAccountPopover
              ref={wrapperPopoverRef}
              {...user}
              handleClickLogoutUser={handleClickLogoutUser}
              handleClickRedirect={handleClickRedirect}
            />
          )}
        </div>
      ) : (
          <div className='header-login'>
            <Link to='/login'>
              Iniciar sesión
          </Link>
          </div>
        )}

    </header>
  );
};

const mapStateToProps = ({ user }) => {
  return {
    user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
