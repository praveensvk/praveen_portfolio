import React from 'react';

function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>

      <h3>Work Experience</h3>
      
      <div className="job">
        <h4>Senior Software Engineer – Full Stack & QA Automation</h4>
        <p><strong>Ignitarium Technology Solutions Pvt. Ltd.</strong> | Jan 2018 – Present</p>
      </div>
      
      <div className="job">
        <h4>End-to-End Test Automation Engineer</h4>
        <p><strong>Sony India Software Centre – Atrios Platform</strong> | Jun 2024 – Present</p>
        <ul>
          <li>Designed and implemented automated API and UI test frameworks using Pytest and Playwright.</li>
          <li>Integrated automated tests into CI/CD pipelines (GitHub Actions, Jenkins).</li>
          <li>Collaborated with developers to identify and resolve performance bottlenecks, ensuring production stability.</li>
        </ul>
      </div>

      <div className="job">
        <h4>Senior Full-Stack Developer</h4>
        <p><strong>Sony India Software Centre – SIFW Builder App</strong> | Jan 2022 – Jun 2024</p>
        <ul>
          <li>Designed and developed an AI workflow management tool supporting edge AI workflows for data preparation and deployment.</li>
          <li>Built scalable backend services with Python (FastAPI) and dynamic frontend components with Angular.</li>
          <li>Partnered with AI and DevOps teams to optimize automation, scalability, and user experience.</li>
        </ul>
      </div>
      
      <div className="job">
        <h4>Full-Stack Developer</h4>
        <p><strong>Sony India Software Centre – sVision AI Ecosystem</strong> | Jun 2020 – Jun 2022</p>
        <ul>
          <li>Developed microservices for an AI-driven platform enabling model fine-tuning and inference on images and videos.</li>
          <li>Built modular front-end components using React.js and RESTful APIs with Node.js (Express).</li>
          <li>Deployed containerized services with Docker, integrated Azure AD, and managed security with Nginx.</li>
        </ul>
      </div>
      
      {/* ... Add other jobs here ... */}

      <h3>Education</h3>
      <div className="education">
        <h4>Bachelor of Engineering (Electronics and Communication)</h4>
        <p>Jawaharlal Nehru Institute of Technology — 2015</p>
      </div>

      <h3>Technical Skills</h3>
      <div className="skills">
        <p><strong>Languages:</strong> Java, Python, JavaScript</p>
        <p><strong>Frameworks:</strong> React, Angular, Node.js, FastAPI</p>
        <p><strong>Testing & Automation:</strong> Pytest, Playwright, JMeter</p>
        <p><strong>CI/CD:</strong> Jenkins, GitHub Actions</p>
        <p><strong>Cloud & DevOps:</strong> AWS, Docker, Azure AD, Nginx</p>
        <p><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB</p>
        <p><strong>Tools:</strong> Git, Postman, Swagger, JIRA</p>
      </div>
    </section>
  );
}

export default Resume;