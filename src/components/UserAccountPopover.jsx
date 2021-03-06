import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaPlane } from 'react-icons/fa';
import { GoGear, GoHome } from 'react-icons/go';
import { IoMdLogOut } from 'react-icons/io';
import '../assets/styles/components/UserAccountPopover.scss';

const UserAccountPopover = React.forwardRef((props, ref) => {
  const { handleClickLogoutUser, name, email, handleClickRedirect } = props;

  return (
    <section className='menu'>
      <div id='popoverAccount' className='popover-content' ref={ref}>
        <div className='menu-content'>
          <div className='menu-content-account'>
            <GoGear />
            <span>Mi cuenta</span>
          </div>
          <div className='menu-content-user'>
            <FaUserAlt />
            <div>
              <p>{name}</p>
              <p>{email}</p>
            </div>
          </div>
          <div className='menu-content-options'>
            <ul>
              <li onClick={() => handleClickRedirect('/')}>
                <GoHome />
                <span>Incio</span>
              </li>
              <li onClick={() => handleClickRedirect('/userFligth')}>

                <FaPlane />
                <span>Vuelos Comprados</span>

              </li>
              <li onClick={handleClickLogoutUser}>
                <IoMdLogOut />
                <span>Cerrar sesión</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  );
});

export default UserAccountPopover;

