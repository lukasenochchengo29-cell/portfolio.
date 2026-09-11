import './Certifications.css'
import { certifications } from '../../data/certifications'

function Certifications() {
  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Certifications & Growth</p>
          <h2>Proof of practice, curiosity, and community.</h2>
        </div>

        <div className="cert-grid">
          {certifications.map((item) => (
            <article key={item.id} className="cert-card">
              <div className="cert-card__preview">
                <img src={item.preview} alt={`${item.name} preview`} />
              </div>
              <span className="cert-card__date">{item.date}</span>
              <h3>{item.name}</h3>
              <p>{item.issuer}</p>
              <a href={item.asset} target="_blank" rel="noreferrer noopener">View credential <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3m0 0H6m7 0v7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
