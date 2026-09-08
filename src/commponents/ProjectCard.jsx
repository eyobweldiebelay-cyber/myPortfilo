import { ExternalLink, GitBranch } from 'lucide-react'

function ProjectCard({
  title,
  description,
  technologies,
  image,
  liveDemo,
  github,
}) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      <div className="project-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="project-technologies">
          {technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a href={liveDemo}>
            <ExternalLink size={18} />
            Live Demo
          </a>

         <a href={github}>
  <GitBranch size={18} />
  GitHub
</a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard