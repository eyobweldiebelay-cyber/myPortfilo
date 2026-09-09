import SkillCard from '../commponents/SkillCard'
import Section from '../commponents/Section'
import skills from '../data/skills'


function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-container">

        <Section
          subtitle="SKILLS"
          title="My Technical"
          highlight="Skills"
          description="Technologies and tools I use to build web and mobile applications."
        />

        <div className="skills-grid">
          {skills.map((skillGroup) => (
            <SkillCard
              key={skillGroup.category}
              category={skillGroup.category}
              skills={skillGroup.skills}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills