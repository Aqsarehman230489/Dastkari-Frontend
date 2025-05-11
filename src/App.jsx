import React, { useState, useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Events from "./Components/Events";
import FeaturedItems from "./Components/FeaturedItems";
import Profile from "./Components/Profile";
import Login from "./Components/Login"; 
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(false); 
  const heroSectionRef = useRef(null);
  const aboutRef = useRef(null);
  const eventsRef = useRef(null);
  const featureditemsRef = useRef(null);
  const profileRef = useRef(null);
  
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <>
        {!showLogin && (
          <>
            <Header
              scrollToSection={(section) => {
                if (section === "home") scrollToSection(heroSectionRef);
                if (section === "featureditems") scrollToSection(featureditemsRef);
                if (section === "about") scrollToSection(aboutRef);
                if (section === "events") scrollToSection(eventsRef);
                if (section === "profile") scrollToSection(profileRef);
              }}
              onSignInClick={() => setShowLogin(true)} 
            />
            <main>
              <div ref={heroSectionRef}>
                <HeroSection />
              </div>
              <div ref={featureditemsRef}>
                <FeaturedItems />
              </div>
              <div ref={aboutRef}>
                <About />
              </div>
              <div ref={eventsRef}>
                <Events />
              </div>
              <div ref={profileRef}>
                <Profile />
              </div>
            </main>
            <Footer />
          </>
        )}
        {showLogin && <Login onBackClick={() => setShowLogin(false)} />} 
        
        <button
  className="back-to-top"
  onClick={() => scrollToTop(heroSectionRef)}  
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "12px 18px",
    fontSize: "18px",
    backgroundColor: "#ff7f50",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    display: showLogin ? "none" : "block",
    zIndex: 1000,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
    transition: "transform 0.3s ease, background-color 0.3s ease", 
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "#ff5722"; 
    e.target.style.transform = "scale(1.1)"; 
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "#ff7f50"; 
    e.target.style.transform = "scale(1)"; 
  }}
>
  ↑
</button>


      </>
    </Router>
  );
}

export default App;
