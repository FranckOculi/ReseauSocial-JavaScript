import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Navbar from '../Navbar';

const index = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profil' exact element={<Profil />} />
          <Route
            path='*'
            element={
              <div style={{ marginTop: '308px' }}>
                <p>There's nothing here !</p>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default index;
