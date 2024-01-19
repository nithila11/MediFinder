import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/pages/Products';
import LoginSignUp from './components/pages/LoginSignup';
import Location from './components/pages/Location';
import Pharmacy from './components/pages/Pharmacy';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/login-sign-up' element={<LoginSignUp />} />
          <Route path='/locations' element={<Location />} />
          <Route path='/pharmacy/:pharmacyId' element={<Pharmacy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
