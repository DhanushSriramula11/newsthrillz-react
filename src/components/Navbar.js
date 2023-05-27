import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav id='navbarbg' className="navbar navbar-expand-lg fixed-top">
      <Link className="navbar-brand" to="/">
        NewsThrillz
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/business">
              Business
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/entertainment">
              Entertainment
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/health">
              Health
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sports">
              Sports
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/science">
              Science
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/technology">
              Technology
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
