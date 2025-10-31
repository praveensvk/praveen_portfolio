function Experience() {
  const jobs = [
    {
      title: "Senior Software Engineer – Full Stack QA Automation",
      company: "Ignitarium Technology Solutions Pvt. Ltd.",
      duration: "Jan 2018 – Present",
      responsibilities: [
        "Lead full-stack engineering efforts in complex web projects.",
        "Designed & implemented scalable REST APIs and microservices.",
        "Mentored teams in engineering best practices."
      ]
    },
    {
      title: "End-to-End Test Automation Engineer",
      company: "Sony India Software Centre – Atrios Platform",
      duration: "Jun 2024 – Present",
      responsibilities: [
        "Designed automated API/UI test frameworks with Pytest, Playwright.",
        "Integrated automation with CI/CD pipelines (GitHub Actions, Jenkins).",
        "Resolved performance bottlenecks for stable releases."
      ]
    },
    {
      title: "Senior Full-Stack Developer",
      company: "Sony India Software Centre – SIFW Builder App",
      duration: "Jan 2022 – Jun 2024",
      responsibilities: [
        "Developed AI workflow management with FastAPI/Angular.",
        "Optimized backend services for scalable deployment.",
        "Collaborated with AI/DevOps teams for automation."
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Sony India Software Centre – sVision AI Ecosystem",
      duration: "Jun 2020 – Jun 2022",
      responsibilities: [
        "Built modular React.js components and REST APIs.",
        "Deployed microservices with Docker, managed security (Nginx/Azure AD)."
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Audio Farm Project",
      duration: "Sep 2018 – Jan 2020",
      responsibilities: [
        "Created web app for AI audio dataset management (React, Node.js, MySQL).",
        "Implemented JWT authentication/data visualization (D3.js)."
      ]
    },
    {
      title: "Java Developer",
      company: "Adaptive Traffic Control System",
      duration: "Jan 2018 – Sep 2018",
      responsibilities: [
        "Developed SaaS-based adaptive traffic control using Java.",
        "Integrated real-time geospatial and sensor data."
      ]
    }
  ];
  return (
    <section className="experience">
      <h3>Experience</h3>
      {jobs.map((job, idx) => (
        <div className="job" key={idx}>
          <h4>{job.title}</h4>
          <p>{job.company} | {job.duration}</p>
          <ul>
            {job.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
export default Experience;