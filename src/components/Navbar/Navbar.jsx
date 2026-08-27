import './Navbar.css'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav__inner">
        <a href="#hero" className="brand" aria-label="Lukas Enock Chengo home">
          <span className="brand__mark">LC</span>
          <span className="brand__text">Lukas Enock Chengo</span>
        </a>

        <div className="nav__links" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav__link">
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav__cta">
          Contact Me
        </a>
      </div>
    </nav>
  )
}

export default Navbar
