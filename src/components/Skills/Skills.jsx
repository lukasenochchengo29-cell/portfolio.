import '@/components/Skills/Skills.css'
import { skills } from '@/data/skills'

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Toolbox <span>— 03</span></p>
          <h2>Tools for turning ideas into working systems.</h2>
        </div>

        <div className="skills__grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-group">
              <h3>{group.category}<span aria-hidden="true">↘</span></h3>
              <div className="skill-group__list">
                {group.items.map((skill) => (
                  <span key={skill.name} className="skill-item">{skill.name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
