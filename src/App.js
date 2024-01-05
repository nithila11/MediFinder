import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/pages/Products';
import LoginSignUp from './components/pages/LoginSignup';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' component={Products} />
          <Route path='/login-sign-up' component={LoginSignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
