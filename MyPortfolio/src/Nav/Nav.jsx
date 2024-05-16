import React from 'react';
import { Navbar, Nav, Container, NavItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function NavigationBar(){

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="left" style={{ width: '15%', height: '100vh' }}>
      <Navbar.Brand href="#home">Vinay</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
        <Nav className="flex-column">
          <NavItem>
            <Nav.Link href="#home">Home</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="#aboutme">About Me</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="#resume">Resume</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="#contactme">Contact Me</Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <NavItem>
            <Nav.Link href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebook} />
            </Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="https://www.youtube.com/">
              <FontAwesomeIcon icon={faYoutube} />
            </Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="https://www.linkedin.com/">
              <FontAwesomeIcon icon={faLinkedin} />
            </Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="https://github.com/">
              <FontAwesomeIcon icon={faGithub} />
            </Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;