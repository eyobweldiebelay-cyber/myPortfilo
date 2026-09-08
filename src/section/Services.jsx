import ServiceCard from '../commponents/ServiceCard'

function Services() {
  const services = [
    {
      title: 'Web Development',
      description:
        'Building modern and practical websites and web applications for businesses and organizations.',
    },
    {
      title: 'Frontend Development',
      description:
        'Creating responsive and user-friendly interfaces using modern frontend technologies.',
    },
    {
      title: 'Backend Development',
      description:
        'Developing reliable server-side applications, APIs and backend functionality.',
    },
    {
      title: 'Database Development',
      description:
        'Designing and managing structured databases for web applications and business systems.',
    },
    {
      title: 'Responsive Websites',
      description:
        'Building websites that work smoothly across desktops, tablets and mobile devices.',
    },
    {
      title: 'Maintenance & Support',
      description:
        'Improving, updating and maintaining existing websites and web applications.',
    },
  ]

  return (
    <section id="services" className="services">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-subtitle">SERVICES</p>

          <h2>
            What I Can <span>Do For You</span>
          </h2>

          <p>
            I provide practical web development services focused on
            quality, usability and responsive design.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services