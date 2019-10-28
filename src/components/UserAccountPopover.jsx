import React from 'react';
import { FaUserAlt, FaPlane } from 'react-icons/fa';
import { GoGear } from 'react-icons/go';
import { IoMdLogOut } from 'react-icons/io';
import '../assets/styles/components/UserAccountPopover.scss';

const UserAccountPopover = React.forwardRef((props, ref) => {
  const { handleClickLogoutUser } = props;
  return (
    <section id='popoverAccount' className='popover-content' ref={ref}>
      <div className='menu-content'>
        <div className='menu-content-account'>
          <GoGear />
          <span>Mi cuenta</span>
        </div>
        <div className='menu-content-user'>
          <FaUserAlt />
          <div>
            <p>johanse7</p>
            <p>johanse7@gmail.com</p>
          </div>
        </div>
        <div className='menu-content-options'>
          <ul>
            <li>
              <FaPlane />
              <span>Tus vuelos</span>
            </li>
            <li onClick={handleClickLogoutUser}>
              <IoMdLogOut />
              <span>Cerrar sesión</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});

export default UserAccountPopover;

