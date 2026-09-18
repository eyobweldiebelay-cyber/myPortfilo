
function Section({ subtitle, title, highlight, description }) {
  return (
    <div className="section-heading">
      <p className="section-subtitle">
        {subtitle}
      </p>

      <h2>
        {title} <span>{highlight}</span>
      </h2>

      {description && (
        <p>
          {description}
        </p>
      )}
    </div>
  )
}

export default Section