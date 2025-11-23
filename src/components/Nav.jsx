import React from "react";
// import "../assets/css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-icon">S</div>
        <div className="logo-text">STUNTIFY</div>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/predict">Predict</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
