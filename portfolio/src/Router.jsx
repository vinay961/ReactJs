// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About/About.jsx';
import Home from './Home/Home.jsx';
import Contact from './Contact/Contact.jsx';

const Rout = () => {
  return (

    <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>
  );
}

export default Rout;
