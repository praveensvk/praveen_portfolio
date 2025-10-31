import React from 'react';

function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h1>Praveen Sistla</h1>
        <p>Senior Software Engineer – Full Stack & QA Automation</p>
      </div>
      <ul>
        <li><a href="#about">About Me</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="sidebar-footer">
        {/* You can add social media links here */}
      </div>
    </nav>
  );
}

export default Sidebar;