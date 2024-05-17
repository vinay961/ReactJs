// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About/About.jsx';
import Home from './Home/Home.jsx';
import Contact from './Contact/Contact.jsx';
import Services from './Services/Services.jsx';
import Navigation from './Navigation/Nav.jsx';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path='/services' element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
