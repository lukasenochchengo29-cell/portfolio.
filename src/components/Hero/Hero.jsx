import './Hero.css'
import cv from '../../assets/images/Lukas Enock CV.pdf'

const highlights = [
  { label: 'Based in', value: 'Nairobi, Kenya' },
  { label: 'Specialty', value: 'Rust + Soroban' },
  { label: 'Community', value: 'GDG JKUAT' },
]

function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">Full-stack engineer / Web3 builder</p>
          <h1>Full-Stack & Web3 Software Engineer <span>|</span> GDG Blockchain Track Lead</h1>
          <p className="hero__tagline">
            Third year Business Computing student at JKUAT and Web3 Developer specializing in
            high-performance backends and decentralized applications using Rust,
            Soroban on Stellar, and Java. Passionate about building robust systems
            and growing developer communities.
          </p>

          <div className="hero__actions">
            <a href={cv} download="Lukas-Enock-Chengo-CV.pdf" className="button button--primary">
              Download Resume
            </a>
            <a href="https://github.com/lukasenochchengo29-cell" target="_blank" rel="noreferrer noopener" className="button button--secondary">
              GitHub
            </a>
            <a href="#contact" className="button button--ghost">
              Get in Touch
            </a>
          </div>

          <div className="hero__highlights" aria-label="Developer highlights">
            {highlights.map((item) => (
              <div key={item.label} className="highlight-box">
                <span className="highlight-box__label">{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual" aria-label="Developer focus areas">
          <div className="hero-orbit hero-orbit--one" />
          <div className="hero-orbit hero-orbit--two" />
          <div className="code-panel">
            <div className="code-panel__top"><span>systems.rs</span><span>01 — 04</span></div>
            <pre><code><span className="code-muted">fn</span> <span className="code-accent">build</span>() {'{'}{`\n`}  <span className="code-keyword">let</span> network = <span className="code-string">"stellar"</span>;{`\n`}  deploy(network);{`\n`}{'}'}</code></pre>
            <div className="code-panel__status"><span className="status-dot" /> systems online <span>rust / soroban / react</span></div>
          </div>

          <div className="floating-card floating-card--top">
            <span className="floating-card__label">Currently building</span>
            <strong>Building on Stellar</strong>
          </div>

          <div className="floating-card floating-card--bottom">
            <span className="floating-card__label">Core stack</span>
            <strong>Rust · Java · React</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
