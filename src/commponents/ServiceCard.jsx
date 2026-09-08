import { Code2 } from 'lucide-react'

function ServiceCard({ title, description }) {
  return (
    <div className="service-card">

      <div className="service-icon">
        <Code2 size={30} />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

    </div>
  )
}

export default ServiceCard