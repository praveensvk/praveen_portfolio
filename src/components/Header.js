import React from "react";
// import "./App.css";
import profilePic from "../profile.jpg"; 

function Header() {
  return (
    <header className="header">
      <img src={profilePic} alt="Profile" className="profile-img"/>
      <h1>Praveen Sistla</h1>
      <h2>Senior Software Engineer</h2>
      <p className="tagline">Full Stack & QA Automation | 7+ Years | Bengaluru, India</p>
    </header>
  );
}
export default Header;