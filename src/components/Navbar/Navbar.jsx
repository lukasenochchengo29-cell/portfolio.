import { useEffect, useState } from 'react'
import '@/components/Navbar/Navbar.css'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="container nav__inner">
        <a href="#hero" className="brand" aria-label="Lukas Enock Chengo home" onClick={closeMenu}>
          <span className="brand__mark">LC</span>
          <span className="brand__text">Lukas Enock Chengo</span>
        </a>

        <div id="primary-navigation" className={`nav__links${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav__link" onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav__cta" onClick={closeMenu}>
          Contact Me
        </a>
        <button
          className={`nav__toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <button className={`nav__backdrop${menuOpen ? ' is-open' : ''}`} type="button" aria-label="Close navigation menu" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1} />
    </nav>
  )
}

export default Navbar
