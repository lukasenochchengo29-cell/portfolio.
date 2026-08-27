import './Experience.css'
import { experience } from '../../data/experience'

function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Experience</p>
          <h2>My development journey.</h2>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article key={item.id} className="timeline__item">
              <div className="timeline__marker" aria-hidden="true" />
              <div className="timeline__content">
                <div className="timeline__header">
                  <h3>{item.role}</h3>
                  <span>{item.period}</span>
                </div>
                <p className="timeline__organization">{item.organization}</p>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
