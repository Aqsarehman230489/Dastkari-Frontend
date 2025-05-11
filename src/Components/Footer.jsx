import React from "react";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h1 className="footer-logo-text">Dastkari</h1>
          <p className="footer-tagline">Celebrating Pakistani Art and Craft</p>
        </div>
        <div className="footer-links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links-list">
            <li><a href="/about-us"><span className="material-icons">info</span> About Us</a></li>
            <li><a href="/shop"><span className="material-icons">shopping_cart</span> Shop</a></li>
            <li><a href="/contact-us"><span className="material-icons">mail</span> Contact Us</a></li>
            <li><a href="/terms-and-conditions"><span className="material-icons">gavel</span> Terms & Conditions</a></li>
          </ul>
        </div>
       
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dastkari. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
