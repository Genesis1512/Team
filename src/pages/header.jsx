// Header.js
import React from 'react';
import '../CSS/home.css';
import logo from '../images/logo.png'; // Import the logo image

function Header() {
  return (
    <header className="header">
      {/* Logo on the left */}
      <div className="logo">
        <img src={logo} alt="Your Logo" className="logo-img" />
      </div>

      {/* Navigation links on the right */}
      <nav className="nav-links">
        <a href="#products" className="nav-link">Products</a>
        <a href="#about" className="nav-link">About Us</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#media" className="nav-link">Media</a>
      </nav>
    </header>
  );
}

export default Header;
