import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = ({ closeMenu }) => {
  return (
    <ul>
      <li>
        <Link to='/' className='text-blue-500' onClick={closeMenu}>
          Home
        </Link>
      </li>
      <li>
        <Link to='/about' className='text-blue-500' onClick={closeMenu}>
          About
        </Link>
      </li>
    </ul>
  );
};

export default NavMenu;
