import profileImage from '../images/eyoba.jpg'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        <div className="hero-content">
          <p className="hero-small-text">
            Hi, I'm
          </p>

          <h1>
            Eyob Belay
          </h1>

          <h2>
            INFORMATION TECHNOLOGY GRADUATE IN <strong className='strong'>2026</strong> 
            <br />
            & WEB DEVELOPER
          </h2>

          <p className="hero-description">
            I build modern, responsive and practical web applications
            for businesses and organizations.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Work
            </a>

            <a href="#contact" className="secondary-button">
              Hire Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={profileImage}
            alt="Eyob Belay"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero