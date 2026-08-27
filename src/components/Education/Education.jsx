import './Education.css'
import { education } from '../../data/education'

function Education() {
  return (
    <section id="education" className="education section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Learning</p>
          <h2>Focused growth and practical development.</h2>
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
