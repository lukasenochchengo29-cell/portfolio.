import './About.css'

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">About</p>
          <h2>Building practical solutions through continuous learning.</h2>
        </div>

        <div className="about__grid">
          <div className="about__content">
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
            <p>
              I am especially interested in software engineering, artificial
              intelligence, cybersecurity, and blockchain technology. I believe the
              best way to grow is by building, debugging, learning from mistakes, and
              improving with each iteration.
            </p>
          </div>

          <div className="about__panel">
            <div className="profile-card">
              <div className="profile-card__avatar" aria-label="Profile initials">
                LC
              </div>
              <h3>Developer profile</h3>
              <ul>
                <li>Focus on modern web development</li>
                <li>Strong interest in AI and security</li>
                <li>Driven by problem solving and practical impact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
