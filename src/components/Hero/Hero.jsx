import './Hero.css'

const highlights = [
  { label: 'Focus', value: 'Web development' },
  { label: 'Learning', value: 'React & full-stack' },
  { label: 'Interests', value: 'AI, security, blockchain' },
]

function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">Software Developer</p>
          <h1>Lukas Enock Chengo</h1>
          <p className="hero__tagline">
            I build practical software solutions with a focus on clean interfaces,
            thoughtful engineering, and continuous learning.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="button button--primary">
              View Projects
            </a>
            <a href="#contact" className="button button--secondary">
              Contact Me
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

        <div className="hero__visual" aria-label="Developer workspace illustration">
          <div className="visual-window">
            <div className="visual-window__bar">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
            </div>

            <svg viewBox="0 0 420 300" role="img" aria-label="Code editor with dashboard concept">
              <rect x="24" y="26" width="160" height="20" rx="8" fill="#dfe7f4" />
              <rect x="24" y="70" width="120" height="12" rx="6" fill="#9db7d5" />
              <rect x="24" y="94" width="170" height="12" rx="6" fill="#c2d1ea" />
              <rect x="24" y="118" width="132" height="12" rx="6" fill="#c2d1ea" />
              <rect x="24" y="156" width="180" height="108" rx="14" fill="#edf2ff" stroke="#cfe0ff" />
              <path d="M52 219L92 182L120 200L170 160" fill="none" stroke="#2563eb" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="171" cy="160" r="8" fill="#06b6d4" />

              <rect x="228" y="66" width="150" height="110" rx="18" fill="#ffffff" stroke="#dfe7f4" />
              <rect x="246" y="88" width="52" height="10" rx="5" fill="#cfe0ff" />
              <rect x="246" y="108" width="98" height="10" rx="5" fill="#dfe7f4" />
              <rect x="246" y="128" width="83" height="10" rx="5" fill="#dfe7f4" />
              <rect x="246" y="144" width="70" height="10" rx="5" fill="#dfe7f4" />
              <rect x="235" y="188" width="160" height="80" rx="18" fill="#0f172a" />
              <rect x="256" y="205" width="52" height="8" rx="4" fill="#7dd3fc" />
              <rect x="256" y="222" width="100" height="8" rx="4" fill="#93c5fd" />
              <rect x="256" y="239" width="90" height="8" rx="4" fill="#93c5fd" />
            </svg>
          </div>

          <div className="floating-card floating-card--top">
            <span className="floating-card__label">Currently building</span>
            <strong>React + full-stack learning</strong>
          </div>

          <div className="floating-card floating-card--bottom">
            <span className="floating-card__label">Core stack</span>
            <strong>JavaScript · React · Python · Rust</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
