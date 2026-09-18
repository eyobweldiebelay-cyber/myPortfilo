import profileImage from '../images/eyob.jpg'
import cvFile from '../resume/portfilo.pdf'

function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">

        <div className="about-image">
          <img src={profileImage} alt="Eyob Belay" />
        </div>

        <div className="about-content">
          <p className="section-subtitle">ABOUT ME</p>

          <h2>
            IT Graduate &
            <span> Software Developer</span>
          </h2>

          <p>
            I am an Information Technology graduate from Ethiopia College,
            graduating in 2026, with a strong interest in building practical
            software solutions for real-world problems.
          </p>

          <p>
            I work across both <strong>Android development</strong> and
            <strong> full-stack web development</strong>. For Android
            applications, I use Java, Kotlin and Jetpack Compose to create
            modern and user-friendly mobile applications.
          </p>

          <p>
            For web applications, I use React, Node.js and MySQL to develop
            responsive frontend interfaces, backend services and
            database-driven applications.
          </p>

          <div className="about-highlights">
            <div className="about-highlight">
              <strong>2026</strong>
              <span>IT Graduate</span>
            </div>

            <div className="about-highlight">
              <strong>Android</strong>
              <span>Java • Kotlin •Jetpack Compose</span>
            </div>

            <div className="about-highlight">
              <strong>Full Stack</strong>
              <span>React • Node.js • MySQL</span>
            </div>
          </div>

          <a
            href={cvFile}
            className="primary-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>

      </div>
    </section>
  )
}

export default About