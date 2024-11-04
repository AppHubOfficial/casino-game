import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">Casinò Online</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/about" className="navbar-link">About</Link></li>
        <li><Link to="/app" className="navbar-link">App</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
