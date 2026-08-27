import './Footer.css'

const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/lukasenochchengo29-cell' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lukas-enock-8ab6b2335/' },
  { label: 'Email', href: 'mailto:lukas.enoch.chengo29@gmail.com' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© 2026 Lukas Enock Chengo</p>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer noopener' : undefined}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
