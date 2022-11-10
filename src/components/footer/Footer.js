import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div>
          <h6>ABOUT US</h6>
          <p>
            Fashion2morrow is a leading supplier of readymade <br />
            garments and denim fabric in the world. The company <br />
            produces some of the most fashionable denim fabrics <br />
            and garment products.
          </p>
        </div>
        <div className="footer_link">
          <h6>QUICK LINKS</h6>
          <ul>
            <li>Our Services</li>
            <li>Contact Us</li>
            <li>Products</li>
            <li>Home</li>
          </ul>
        </div>
        <div>
          <h6>HEAD OFFICE</h6>
          <ul>
            <li>ASTRAL PALACE</li>
            <li>Plot #27 Road #08, Sector 11, Uttara</li>
            <li>Dnaka-1230, Bangladesh</li>
            <li>E-Mail : fashion@2morrow.com</li>
            <li>+91 97510 - 96789</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
