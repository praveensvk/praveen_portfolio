function Projects() {
  const projects = [
    {
      name: "Atrios Platform",
      desc: "Automated API and UI test frameworks integrated with CI/CD pipelines.",
      tech: "Pytest, Playwright, Jenkins, GitHub Actions",
      link: "#"
    },
    {
      name: "SIFW Builder App",
      desc: "AI workflow management tool supporting edge AI workflows for data preparation and deployment.",
      tech: "Python, FastAPI, Angular",
      link: "#"
    },
    {
      name: "sVision AI Ecosystem",
      desc: "AI-driven image & video inference platform, modular React frontend, RESTful Node.js APIs.",
      tech: "React.js, Node.js, Azure AD, Nginx, Docker",
      link: "#"
    },
    {
      name: "Audio Farm Project",
      desc: "Single-page AI audio dataset manager app, JWT-based authentication.",
      tech: "React, Node.js, MySQL, D3.js",
      link: "#"
    },
    // Add more projects as needed
  ];
  return (
    <section className="projects">
      <h3>Projects</h3>
      <div className="project-list">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <h4>{proj.name}</h4>
            <p>{proj.desc}</p>
            <p><strong>Tech:</strong> {proj.tech}</p>
            {proj.link && <a href={proj.link} target="_blank" rel="noopener noreferrer">Live Demo / Repo</a>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
