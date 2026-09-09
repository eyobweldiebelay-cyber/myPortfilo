function SkillCard({ category, skills }) {
  return (
    <div className="skill-group">
      <h3>{category}</h3>

      <div className="skill-list">
        {skills.map((skill) => (
          <div className="skill-item" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillCard