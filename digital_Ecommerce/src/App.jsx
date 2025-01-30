import React from 'react';
import './App.css';

import {  BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <>


      <Router>

      <Navbar />

        
        <Routes>

          <Route path="/"  element={<Home />} />
          <Route path="/About"  element={<About />} />
          <Route path="/Contact"  element={<Contact />} />
          <Route path="/SignUp"  element={<SignUp />} />
          <Route path="/Product"  element={<Product />} />
        </Routes>
       

        </Router>
       
    </>
  );
}

export default App;
