function Education() {
  const degrees = [
    {
      degree: "Bachelor of Engineering, Electronics and Communication",
      institution: "Jawaharlal Nehru Institute of Technology",
      year: "2015"
    }
  ];
  return (
    <section className="education">
      <h3>Education</h3>
      <ul>
        {degrees.map((edu, idx) => (
          <li key={idx}>
            <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Education;