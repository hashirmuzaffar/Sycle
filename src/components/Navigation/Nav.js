import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <nav>
      <div className="logo">Sycle</div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/Login">About Us</Link></li>
        <li><Link to="/customer/addnewproduct">Contact Us</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <div className='nav-links-2'>
        <li><Link to="/Signup">Sign Up</Link></li>
        </div>
      </ul>
    </nav>
  );
}

export default NavigationBar;
