import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="nav-title">Leave MS</span>   {/* Moved from sidebar */}
      <span className="nav-welcome">Welcome Admin</span>
      <button className="nav-logout">Logout</button>
    </div>
  );
};

export default Navbar;
