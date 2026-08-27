import './Projects.css'
import { projects } from '../../data/projects'

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Projects</p>
          <h2>Selected work and learning projects.</h2>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card__top">
                <span className="project-card__tag">Featured</span>
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
                    GitHub
                  </a>
                ) : null}
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noreferrer noopener">
                    Live Demo
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
