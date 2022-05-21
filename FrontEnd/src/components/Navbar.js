import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { UidContext } from './AppContext';
import Logout from './Authenticate/Logout';

const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  return (
    <nav>
      <div className='navbar'>
        <NavLink exact to='/'>
          <img src='./img/logo.png' alt='logo' id='logo' />
        </NavLink>
        <p>Chouchoubeignet</p>
        {uid && (
          <>
            <NavLink exact to='/profil' className='bienvenue'>
              <div>Bienvenue {userData.pseudo}</div>
            </NavLink>
            <Logout />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
