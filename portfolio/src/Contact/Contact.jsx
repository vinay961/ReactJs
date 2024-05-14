import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook, faGithub, } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';
import Nav from '../Navigation/Nav.jsx'

function Contact() {
  return (
    <div className="main">
      <div className="main_header">
        <h2>PORTFOLIO</h2>
      </div>
      <Nav />
      <div className="contact_page">
        <div className="left">
          <h1>CONTACT ME</h1>
          <p>I am available for FrontEnd Development, Backend Development, and Software Developer role. </p>
          <p>If you have any questions or suggestions, I'd love to hear from you and get to know you better.</p>
        </div>
        <div className="right">
          <form className="contact-form" action="">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="name" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className='mb-3' controlId='comment'>
              <Form.Label>Leave Comment</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
      <footer>
          <div className="footer-icon">
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
  );
}

export default Contact;
