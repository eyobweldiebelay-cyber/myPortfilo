import ProjectCard from '../commponents/ProjectCard'
import projects from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-subtitle">
            FEATURED PROJECTS
          </p>

          <h2>
            My Recent <span>Work</span>
          </h2>

          <p>
            Some of the projects I have worked on using modern
            web technologies.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects