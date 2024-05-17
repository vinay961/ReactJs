import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Navigation() {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expanded={expanded} expand="lg" bg="light" variant="light" className="header">
            <Container>
                <Navbar.Brand href="">PORTFOLIO</Navbar.Brand>
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    onClick={() => setExpanded(expanded ? false : "expanded")}
                >
                    <FontAwesomeIcon icon={faBars} />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={NavLink} to="/" className="nav-link" onClick={() => setExpanded(false)}>HOME</Nav.Link>
                        <Nav.Link as={NavLink} to="/about" className="nav-link" onClick={() => setExpanded(false)}>ABOUT</Nav.Link>
                        <Nav.Link as={NavLink} to="/services" className="nav-link" onClick={() => setExpanded(false)}>SERVICES</Nav.Link>
                        <Nav.Link as={NavLink} to="/projects" className="nav-link" onClick={() => setExpanded(false)}>PROJECTS</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" className="nav-link" onClick={() => setExpanded(false)}>CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
