import React from "react";
import { Link } from "react-router-dom";
import LogoSimbol from "../assets/images/logo-simbol.svg";
import LogoText from "../assets/images//logo-text.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <Link
        to="/"
        className="logo"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <img src={LogoSimbol} alt="Logo" style={{ width: "150px" }} />
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/">
            <b>Home</b>
          </Link>
        </li>
        <li>
          <Link to="/predict">
            <b>Predict</b>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
