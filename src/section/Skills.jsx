function Skills() {
  const frontendSkills = [
    'React',
    'JavaScript',
    'HTML',
    'CSS',
  ]

  const backendSkills = [
    'Node.js',
    'Express',
    'REST API',
  ]

  const databaseSkills = [
    'MySQL',
    'SQL',
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-subtitle">SKILLS</p>

          <h2>
            My Technical <span>Skills</span>
          </h2>

          <p>
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        <div className="skills-grid">

          <div className="skill-group">
            <h3>Frontend</h3>

            <div className="skill-list">
              {frontendSkills.map((skill) => (
                <div className="skill-item" key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <h3>Backend</h3>

            <div className="skill-list">
              {backendSkills.map((skill) => (
                <div className="skill-item" key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <h3>Database</h3>

            <div className="skill-list">
              {databaseSkills.map((skill) => (
                <div className="skill-item" key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills