import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">FASHION 2MORROW</div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/ourservices">Our Services</Link>
          <Link class="dropdown">
          <Link to="">Products</Link>
            <div class="dropdown-content">
              <a href="#">Men wear</a>
              <a href="#">Boys wear</a>
              <a href="#">Infants wear</a>
              <a href="#">Women wear</a>
              <a href="#">Girls wear</a>
            </div>
          </Link>

          <Link to="/contactus">Contact Us</Link>
        </div>
      </div>
      <div className="nav_bottom_border"></div>
    </>
  );
};

export default Header;
