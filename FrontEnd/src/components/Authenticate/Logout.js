import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Logout = () => {
  const removeCookie = (key) => {
    if (window !== 'undefined') {
      Cookies.remove(key, { path: '/' });
    }
  };

  const logout = async () => {
    await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true,
    })
      .then(() => removeCookie('jwt'))
      .catch((err) => console.log(err));
    window.location = '/';
  };

  return (
    <div onClick={logout} id='logout'>
      <img src='./img/icons/logout.svg' alt='logout' />
    </div>
  );
};

export default Logout;
