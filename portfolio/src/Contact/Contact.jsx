// frontend/src/components/Contact.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/send-email', formData)
      .then(response => {
        alert('Email sent successfully!');
      })
      .catch(error => {
        alert('Failed to send email. Please try again later.');
        console.log(error)
      });
  };

  return (
    <div className="main">
      <div className="contact_page">
        <div className="left">
          <div className='up'>
            <h1>CONTACT ME</h1>
            <div className="image">
              <img src="https://img.freepik.com/premium-photo/illustration-cute-girl-avatar-graphic-white-background-created-with-generative-ai-technology_67092-4954.jpg" alt="Avatar Image" />
            </div>
            <p>I am available for FrontEnd Development, Backend Development, and Software Developer role. </p>
            <p>If you have any questions or suggestions, I'd love to hear from you and get to know you better.</p>
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
        <div className="right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupComment'>
              <Form.Label>Leave Comment</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                name="comment"
                style={{ height: '100px' }}
                value={formData.comment}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onChange={handleSubmit}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
