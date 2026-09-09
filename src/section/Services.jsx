import ServiceCard from '../commponents/ServiceCard'
import Section from '../commponents/Section'
import services from '../data/services'

function Services() {
  return (
    <section id="services" className="services">
      <div className="section-container">

        <Section
          subtitle="SERVICES"
          title="What I Can"
          highlight="Do For You"
          description="I provide practical development services focused on quality, usability and reliable applications."
        />

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