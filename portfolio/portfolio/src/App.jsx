import Nav from './Nav.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import './App.css'


function App() {

  return (
    <>
      <div className="main_header">
        <h1>VINAY RAI</h1>
        <h2>PORTFOLIO</h2>
      </div>
      <Nav />
      <div className="body">
        <div className="content">
          <h1>Hello !! I'm Vinay Rai</h1>
          <h2>An Ethical Hacker and MERN Stack Developer</h2>
          <p>Expert MERN stack developer and basic ethical hacker, crafting secure web solutions with creativity and precision. Explore my portfolio today!</p>
          <button>CHECK OUT MY WORK</button>
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

export default App
