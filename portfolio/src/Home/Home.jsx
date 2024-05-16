import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook, faGithub, } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Home.css'
import Nav from '../Navigation/Nav';


function Home() {
  const [typedName, setTypedName] = useState("");
  const name = "Vinay Rai";

  const typeAnimation = (text, index) => {
    if (index < text.length) {
      setTypedName(text.slice(0, index + 1));
      setTimeout(() => {
        typeAnimation(text, index + 1);
      }, 100); 
    } else {
      setTimeout(() => {
        eraseAnimation(text, text.length);
      }, 2000); 
    }
  };

  const eraseAnimation = (text, index) => {
    if (index >= 0) {
      setTypedName(text.slice(0, index));
      setTimeout(() => {
        eraseAnimation(text, index - 1);
      }, 100);
    } else {
      setTimeout(() => {
        typeAnimation(text, 0);
      }, 1000); 
    }
  };

  useEffect(() => {
    typeAnimation(name, 0);
  }, []);

  return (
    <>
      <Nav />
      <div className="body">
        <div className="content">
          <h1>Hello !! I'm <span style={{ color: '#006400' }}>{typedName}</span></h1>
          <h2>An Ethical Hacker and MERN Stack Developer</h2>
          <p>Expert MERN stack developer and basic ethical hacker, crafting secure web solutions with creativity and precision. Explore my portfolio today!</p>
          <button><a href="https://docs.google.com/document/d/1z4-vmhlIGmJcOmK4GwSHKxbnQjgiDIYKVqYTEaRrxXo/edit?usp=drive_link">DOWNLOAD RESUME</a></button>
        </div>
        <footer>
          <div className="footer-icons">
            <a href="https://www.linkedin.com/in/vinay-rai-ab53452a6/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://github.com/vinay961" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Home
