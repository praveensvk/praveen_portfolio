function Skills() {
  const skills = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React.js & Angular", level: 85 },
    { name: "Node.js/FastAPI", level: 80 },
    { name: "Automation (Pytest/Playwright)", level: 80 },
    { name: "CI/CD (Jenkins, GitHub Actions)", level: 75 },
    { name: "Cloud/DevOps (AWS/Docker)", level: 70 }
  ];
  return (
    <section className="skills">
      <h3>Skills</h3>
      {skills.map((skill, idx) => (
        <div className="skill-bar" key={idx}>
          <span>{skill.name}</span>
          <div className="bar-bg">
            <div className="bar-fill" style={{ width: skill.level + "%" }}>{skill.level}%</div>
          </div>
        </div>
      ))}
    </section>
  );
}
export default Skills;