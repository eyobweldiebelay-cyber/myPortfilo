
import { Mail, GitBranch } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-subtitle">
            CONTACT
          </p>

          <h2>
            Let's <span>Work Together</span>
          </h2>

          <p>
            Have a project or opportunity? Feel free to get in touch with me.
          </p>
        </div>

        <div className="contact-links">

          <a href="mailto:eyobweldiebelay@gmail.com">
            <Mail size={22} />
            <span>Email</span>
          </a>

          <a
  href="https://github.com/eyobweldiebelay-cyber"
  target="_blank"
  rel="noopener noreferrer"
>
  <GitBranch size={22} />
  <span>GitHub</span>
</a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LinkedIn</span>
          </a>

        </div>

        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=eyobweldiebelay@gmail.com"
  className="primary-button"
  target="_blank"
  rel="noopener noreferrer"
>
  Hire Me
</a>

      </div>
    </section>
  )
}

export default Contact

