import cvFile from '../resume/portfilo.pdf'
function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">

        <div className="about-image">
          <img
            src="/images/profile.jpg"
            alt="About me"
          />
        </div>

        <div className="about-content">
          <p className="section-subtitle">
            ABOUT ME
          </p>

          <h2>
            Information Technology Graduate &
            <span> Web Developer</span>
          </h2>

          <p>
            I am an Information Technology graduate and Web Developer
            passionate about building modern, responsive and practical
            web applications.
          </p>

          <p>
            I enjoy solving real-world problems through technology and
            continuously improving my skills in frontend development,
            backend development and database management.
          </p>

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