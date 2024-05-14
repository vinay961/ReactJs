import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log("reached");
    };

    return (
        <>
        <div className="main_header">
            <h2>PORTFOLIO</h2>
        </div>
        <div className="header">
            <button className="menu-toggle" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <ul className={isMenuOpen ? "show" : "hide"}>
                <li><a href="">HOME</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">SERVICES</a></li>
                <li><a href="">PROJECTS</a></li>
                <li><a href="">CONTACT</a></li>
            </ul>
        </div>
        </>
        
    );
}

export default Nav;
