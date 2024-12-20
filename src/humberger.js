import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTwitter, faFacebookF, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import './humbager.css';
const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className="hamburger-menu-container">
      <button 
        className={`hamburger ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#services" onClick={toggleMenu}>Models</a>
        <a href="#course" onClick={toggleMenu}>Business</a>
        <a href="#services" onClick={toggleMenu}>Legal</a>
        <a href="#news" onClick={toggleMenu}>News</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
        <div className="social-icons">
          <div><FontAwesomeIcon icon={faWhatsapp} /></div>
          <div><FontAwesomeIcon icon={faTwitter} /></div>
          <div><FontAwesomeIcon icon={faFacebookF} /></div>
          <div><FontAwesomeIcon icon={faTelegramPlane} /></div>
        </div>
        <button type="button" className="button323" onClick={toggleMenu}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HamburgerMenu;

