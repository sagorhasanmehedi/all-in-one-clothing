import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div>
          <h6>ABOUT US</h6>
          <p>
            Ha-Meem Group is a leading supplier of readymade <br />
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
            <li>Ha-Meem Group</li>
            <li>387 (South), Tejgaon Industrial Area</li>
            <li>Dhaka-1208, Bangladesh</li>
            <li>+880-2-8170592, +880-2-8170593</li>
            <li> +880-2-8170583</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
