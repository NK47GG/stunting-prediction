import React from "react";
// import "../assets/css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-icon">S</div>
        <div className="logo-text">STUNTIFY</div>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#predict">Predict</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
