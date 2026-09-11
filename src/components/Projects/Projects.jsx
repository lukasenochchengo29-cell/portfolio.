import './Projects.css'
import { projects } from '../../data/projects'

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Projects</p>
          <h2>Products, platforms, and experiments with a purpose.</h2>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card__top">
                <span className="project-card__number">0{project.id}</span>
                <span className="project-card__tag">{project.technologies[0]}</span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-card__stack" aria-label={`Technologies used in ${project.title}`}>
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-card__links">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer noopener">
                    <span>GitHub</span><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3m0 0H6m7 0v7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                ) : null}
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noreferrer noopener">
                    <span>Live Demo</span><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3m0 0H6m7 0v7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
