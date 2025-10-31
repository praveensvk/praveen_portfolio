import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skill';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <footer className="footer">
        Portfolio. Copyright &copy; {new Date().getFullYear()} Praveen Sistla
      </footer>
    </div>
  );
}

export default App;