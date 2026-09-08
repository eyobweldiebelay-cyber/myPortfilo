import { CheckCircle2 } from 'lucide-react'

function WhyHireMe() {
  const reasons = [
    'Problem solving',
    'Responsive development',
    'Clean and maintainable code',
    'Good communication',
    'Continuous learning',
  ]

  return (
    <section id="why-hire-me" className="why-hire-me">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-subtitle">WHY WORK WITH ME</p>

          <h2>
            Why <span>Hire Me?</span>
          </h2>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason) => (
            <div className="reason-item" key={reason}>
              <CheckCircle2 size={24} />
              <span>{reason}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyHireMe