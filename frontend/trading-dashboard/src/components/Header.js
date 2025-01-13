import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';  // Optionally style the header

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/portfolio">Portfolio</Link>
      </nav>
    </header>
  );
};

export default Header;
