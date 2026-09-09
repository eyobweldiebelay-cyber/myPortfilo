import { ExternalLink, GitBranch, Download } from 'lucide-react'

function ProjectCard({
  title,
  description,
  technologies,
  image,
  liveDemo,
  github,
  type,
}) {
  return (
    <div className="project-card">

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

          {type === 'android' ? (
            <a
              href={liveDemo}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={18} />
              Download APK
            </a>
          ) : (
            <a
              href={liveDemo}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}

          <a
            href={github}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitBranch size={18} />
            GitHub
          </a>

        </div>

      </div>

    </div>
  )
}

export default ProjectCard