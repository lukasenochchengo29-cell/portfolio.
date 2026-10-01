import '@/components/About/About.css'

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about__grid">
          <div className="about__content">
            <p className="eyebrow">A little about me <span>— 01</span></p>
            <h2>Curiosity is the beginning of every good build.</h2>
            <p>
              I am Lukas Enoch Chengo, a software developer passionate about creating
              useful technology and continually improving my skills across software
              engineering and emerging technologies.
            </p>
            <p>
              My work spans JavaScript, React, HTML, CSS, Java, Python, SQL, and
              Rust. I enjoy learning by building real projects, experimenting with new
              ideas, and turning concepts into functional applications.
            </p>
            <p>I’m especially drawn to software engineering, cybersecurity, and blockchain. I learn by making, listening, and refining the details until a solution feels clear and useful.</p>
            <div className="about__signature"><span>Based in Nairobi</span><span>Building with intention</span></div>
          </div>

          <figure className="about__portrait">
            <div className="about__portrait-frame" role="img" aria-label="Portrait placeholder for Lukas Enoch Chengo">
              <span>Portrait goes here</span>
              <strong>LC</strong>
            </div>
            <figcaption><span>Lukas Enoch Chengo</span><span>Engineer & lifelong learner</span></figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default About
