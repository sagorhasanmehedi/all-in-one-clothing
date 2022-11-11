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
          <Link class="dropdown_title" to="">Products</Link>
            <div class="dropdown-content">
              <Link to="/menCollection">Men Collection</Link>
              <Link to="/boysCollection">Boys Collection</Link>
              <Link to="/infantsCollection">Infants Collection</Link>
              <Link to="/womenCollection">Women Collection</Link>
              <Link to="/girlsCollection">Girls Collection</Link>
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
