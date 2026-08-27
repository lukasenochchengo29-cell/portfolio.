import './Skills.css'
import { skills } from '../../data/skills'

const iconMap = {
  react: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 12c2.5-3.2 5.2-4.8 8-4.8S17.5 8.8 20 12c-2.5 3.2-5.2 4.8-8 4.8S6.5 15.2 4 12Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
    </svg>
  ),
  javascript: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2 3 6v12l9 4 9-4V6l-9-4Zm0 4.4 5.4 2.4-5.4 2.4L6.6 8.8 12 6.4Zm-6 4.2 5 2.2V18l-5-2.2v-8.2Zm12 0v8.2L13 18v-5.2l5-2.2Z" fill="currentColor" />
    </svg>
  ),
  html: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 3h16l-1.5 16.5L12 21l-6.5-1.5L4 3Zm3.2 4.3 1.1 10.2 5.3 1.4 5.2-1.4 1.1-10.2H7.2Zm3.8 2.2h5.2l-.4 2.9-2.2 1-2.2-1-.1-1.1h-1.9l.3 3.6 4.1 1.5 4.1-1.5.8-6.4H11Z" fill="currentColor" />
    </svg>
  ),
  css: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 3h16l-1.5 16.4L12 21l-6.5-1.6L4 3Zm3.2 4.3h9.6l-.3 2.8-2.7 1.2-2.7-1.2-.2-1.8h-2l.4 4.3 4.8 1.8 4.8-1.8.6-5.6H7.2Z" fill="currentColor" />
    </svg>
  ),
  java: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 16c0-2 2-3.2 6-3.2 4 0 6 1.2 6 3.2v1.5c0 1.8-2.9 3.2-6 3.2s-6-1.4-6-3.2V16Zm6-10.5c-2.8 0-4.3 1.2-4.3 2.8 0 1.1.8 1.7 2.1 2.2.7.3 1.5.5 2.2.8.9.4 1.3.9 1.3 1.6 0 .9-.9 1.5-2.5 1.5s-2.8-.7-3.1-1.4h-2c.3 2 2.5 3.2 5.1 3.2 2.7 0 4.8-1.3 4.8-3.3 0-1.4-1.1-2.2-2.9-2.8-.7-.2-1.5-.4-2.1-.7-.8-.3-1.2-.8-1.2-1.4 0-1 .7-1.5 2.2-1.5 1.1 0 1.8.4 2.1 1.1h2.1c-.3-1.6-1.8-2.7-4.2-2.7Z" fill="currentColor" />
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 2h6v3h-1v3H10V5H9V2Zm-2 5h10v3H16v3h-8V10H7V7Zm2 5h8v3h-1v3H10v-3H9v-3Z" fill="currentColor" />
    </svg>
  ),
  rust: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 4h4v2h4v3h2v4h-2v3h-4v2H9v-2H5v-3H3V9h2V6h4V4Zm1 5h2v2h-2V9Zm4 0h2v2h-2V9Zm-4 4h2v2H10v-2Z" fill="currentColor" />
    </svg>
  ),
  sql: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 4h12v2H6V8Zm0 4h12v2H6v-2Zm0 4h8v2H6v-2Z" fill="currentColor" />
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 5.5a2.5 2.5 0 1 1 5 0A2.5 2.5 0 0 1 7 5.5Zm3 4.5h2.5A2.5 2.5 0 0 1 15 12.5v1.2A3.3 3.3 0 0 1 11.7 17H11v2H9v-2H8v-2h1v-2h1V10Zm-3 7.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm9-8.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="currentColor" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.7.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.2-1.5-1.2-1.5-.9-.7.1-.7.1-.7 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.2-4.6-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3.1 1.1a10.7 10.7 0 0 1 5.6 0c2.2-1.4 3.1-1.1 3.1-1.1.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3 0 4.3-2.4 5.2-4.7 5.5.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10.2 10.2 0 0 0 22 12.2C22 6.6 17.5 2 12 2Z" fill="currentColor" />
    </svg>
  ),
  vscode: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16.2 3.3 8.4 9.1 5 7.1 3 8.4l4.2 3.6L3 15.6l2 1.3 3.4-2 7.8 5.8 4.8-2.2V5.5l-4.8-2.2Zm0 4.3v9.1l-6.1-4.5 6.1-4.6Z" fill="currentColor" />
    </svg>
  ),
  vite: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.5 3.7 18.7h16.6L12 2.5Zm0 5.2 4.7 8.2H7.3L12 7.7Zm-6 10.5h12l-6 3.4-6-3.4Z" fill="currentColor" />
    </svg>
  ),
}

function SkillIcon({ name }) {
  return <span className="skill__icon">{iconMap[name] || null}</span>
}

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Skills</p>
          <h2>Technologies I work with.</h2>
        </div>

        <div className="skills__grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-group">
              <h3>{group.category}</h3>
              <div className="skill-group__list">
                {group.items.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <SkillIcon name={skill.icon} />
                    <span>{skill.name}</span>
                  </div>
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
