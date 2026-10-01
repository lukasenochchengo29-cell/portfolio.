import '@/components/Hero/Hero.css'
import cv from '@/assets/images/Lukas Enock CV.pdf'

function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__kicker"><span className="availability-dot" /> Available for opportunities <span className="hero__kicker-divider">/</span> Nairobi, Kenya</p>
          <p className="eyebrow">Software engineer · Web3 builder</p>
          <h1>Thoughtful software.<br /><span>Built to matter.</span></h1>
          <p className="hero__tagline">
            I’m Lukas, a full-stack engineer and Business Computing student at JKUAT. I build resilient digital products and decentralized systems with care for the people using them.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="button button--primary">
              Let’s talk <span aria-hidden="true">↗</span>
            </a>
            <a href={cv} download="Lukas-Enock-Chengo-CV.pdf" className="hero__resume-link">
              View résumé <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-label="Specialties">
          <span className="hero__visual-index">01 / 04</span>
          <div className="hero__visual-copy">
            <span className="hero__visual-label">Currently exploring</span>
            <p>Systems thinking<br />meets human experience.</p>
          </div>
          <div className="hero__visual-rule" />
          <div className="hero__visual-footer">
            <span>Rust / Soroban</span><span>React / Java</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
