import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import icon from "../Images/favicon.ico";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img className="navbar-img" src={icon} alt="Logo" />
          Recipes
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
