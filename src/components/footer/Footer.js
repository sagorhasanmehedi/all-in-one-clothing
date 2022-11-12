import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
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
            <h6 className="footer_heading_gap">QUICK LINKS</h6>
            <ul>
              <li><Link to="/ourservices">Our Services</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
              <li><a href="#products_gallery" >Products</a></li>
              <li><Link to="/">Home</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="footer_heading_gap">HEAD OFFICE</h6>
            <ul>
              <li>ASTRAL PALACE</li>
              <li>Plot #27 Road #08, Sector 11, Uttara</li>
              <li>Dnaka-1230, Bangladesh</li>
              <li>kamrul@fashion2morrow.com </li>
              <li>+8801713363078</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_bootom">
        <div className="footer_inner_container">
          <span>
           © 2022{" "}
            <a href="/" className="span_highlight">Fashion2morrow</a> . All Rights
            Reserved.
          </span>
          <span>
            Powered By <a href="https://www.linkedin.com/in/mehedi-hasan-27a272220/" className="span_highlight">Mehedi hasan</a>{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
