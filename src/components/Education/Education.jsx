import '@/components/Education/Education.css'
import { education } from '@/data/education'

function Education() {
  return (
    <section id="education" className="education section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Education <span>— 05</span></p>
          <h2>Foundations for a lifelong practice.</h2>
        </div>

        <div className="info-grid">
          {education.map((item) => (
            <article key={item.id} className="info-card">
              <span className="info-card__period">{item.period}</span>
              <h3>{item.degree}</h3>
              <p className="info-card__school">{item.school}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
