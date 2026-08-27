import './Certifications.css'
import { certifications } from '../../data/certifications'

function Certifications() {
  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Certifications & Growth</p>
          <h2>Ongoing learning and skill development.</h2>
        </div>

        <div className="cert-grid">
          {certifications.map((item) => (
            <article key={item.id} className="cert-card">
              <span className="cert-card__date">{item.date}</span>
              <h3>{item.name}</h3>
              <p>{item.issuer}</p>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer noopener">
                  View credential
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
