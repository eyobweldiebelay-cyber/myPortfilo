import { Download } from 'lucide-react'
import cvFile from '../resume/portfilo.pdf'

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="section-container">
        <div className="resume-content">
          <p className="section-subtitle">RESUME</p>

          <h2>
            Want to know more <span>about me?</span>
          </h2>

          <p>
            Download my CV to learn more about my education, skills,
            projects and professional background.
          </p>

          <a
            href={cvFile}
            className="primary-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume