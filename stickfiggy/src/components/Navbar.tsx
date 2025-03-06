import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-text">
            <span className="logo-main">Jerry</span>
          </div>
        </Link>
        
        <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="navbar-item social-item">
            <a 
              href="https://x.com/JerryStickSol" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="Twitter"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                width="20" 
                height="20" 
                className="x-logo"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
