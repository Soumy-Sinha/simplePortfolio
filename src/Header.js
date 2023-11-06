import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
};

const navStyle = {
  listStyle: 'none',
  padding: '0',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  margin: '0 10px',
};

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Soumy Sinha</h1>
      <nav>
        <ul style={navStyle}>
        <li><Link to="/home" style={linkStyle}>Home</Link></li>
          <li><Link to="/" style={linkStyle}>About</Link></li>
          <li><Link to="/projects" style={linkStyle}>Projects</Link></li>
          <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
