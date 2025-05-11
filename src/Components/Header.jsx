import React, { useState } from "react";
import "../assets/css/Header.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

function Header({ scrollToSection, onSignInClick }) {
  // State to control the collapse (open/close) of the navbar
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Function to handle menu collapse
  const handleLinkClick = () => {
    setIsCollapsed(true); // Close the menu when a link is clicked
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo" onClick={() => scrollToSection("home")}>
          Dastkari
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button className="search-btn1">
            <span className="material-icons">search</span>
          </button>
        </div>
        <div className="user-actions">
          <button className="user-link" onClick={onSignInClick}> 
            Sign in
          </button>
          <span className="material-icons icon">favorite_border</span>
          <span className="material-icons icon">redeem</span>
          <span className="material-icons icon">shopping_cart</span>
        </div>
      </header>

      <nav className="navbar navbar-expand-lg navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse" // Corrected attribute for Bootstrap 5
          data-bs-target="#navbarNav" // Corrected attribute for Bootstrap 5
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
          onClick={() => setIsCollapsed(!isCollapsed)} // Toggle collapse on button click
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`} // Dynamically apply 'show' class
          id="navbarNav"
        >
          <ul className="navbar-nav nav-links">
            <li className="nav-item">
              <button className="nav-link" onClick={() => { scrollToSection("home"); handleLinkClick(); }}>
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => { scrollToSection("about"); handleLinkClick(); }}>
                About
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => { scrollToSection("events"); handleLinkClick(); }}>
                Events
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => { scrollToSection("featureditems"); handleLinkClick(); }}>
                Products
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => { scrollToSection("profile"); handleLinkClick(); }}>
                Paintings
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
