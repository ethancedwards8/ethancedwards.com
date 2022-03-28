import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
          <nav>
            <NavLink className="brand-logo navlink" to="/">Ethan Carter Edwards</NavLink>
            <ul>
              <li><NavLink className="navlink" to="/">Home</NavLink></li>
              <li><NavLink className="navlink" to="/about">About/Contact</NavLink></li>
            </ul>
          </nav>
        </div>
    );
}
export default Navbar;
