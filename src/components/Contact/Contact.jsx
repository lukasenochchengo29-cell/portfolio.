import './Contact.css'

const contactLinks = [
  { label: 'Email', href: 'mailto:lukas.enoch.chengo29@gmail.com', value: 'lukas.enoch.chengo29@gmail.com', icon: 'mail' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lukas-enock-8ab6b2335/', value: 'linkedin.com/in/lukas-enock-8ab6b2335', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/lukasenochchengo29-cell', value: 'github.com/lukasenochchengo29-cell', icon: 'github' },
  { label: 'Phone', href: 'tel:+254112461606', value: '+254 112 461 606', icon: 'phone' },
]

function ContactIcon({ name }) {
  if (name === 'mail') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3V5Zm1.5 2 7.5 5 7.5-5M4 17l5-4m11 4-5-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  if (name === 'phone') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h3l1.4 4-2 1.6a14 14 0 0 0 6 6l1.6-2 4 1.4v3c0 1.1-.9 2-2 2C11.3 19 5 12.7 5 5c0-1.1.9-2 2-2Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
  if (name === 'linkedin') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8.5V19M5 5.5v.1M10 19v-5.5a3.5 3.5 0 0 1 7 0V19M10 11v8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 19c-4 .8-4-2-5-2m10 4v-3.5c0-1 .1-1.4-.5-2 2.5-.3 5-1.2 5-5.5a4.3 4.3 0 0 0-1.2-3.1c.1-.3.5-1.5-.1-3.1 0 0-1-.3-3.2 1.1a11 11 0 0 0-5.8 0C5 2.5 4 2.8 4 2.8c-.6 1.6-.2 2.8-.1 3.1A4.3 4.3 0 0 0 2.7 9c0 4.3 2.5 5.2 5 5.5-.5.5-.5 1.1-.5 2V21" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Contact</p>
          <h2>Have a system to ship or a community to grow?</h2>
        </div>

        <div className="contact__grid">
          <div className="contact__details">
            <p>
              I am open to opportunities to collaborate, learn, and contribute to
              projects that challenge me and help me grow as a developer.
            </p>

            <ul className="contact__list">
              {contactLinks.map((item) => (
                <li key={item.label}>
                  <span className="contact-link__icon" aria-hidden="true"><ContactIcon name={item.icon} /></span>
                  <span className="contact-link__label"><small>{item.label}</small><a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer noopener' : undefined}>{item.value}</a></span>
                </li>
              ))}
            </ul>
          </div>

          <form className="contact__form" onSubmit={(event) => event.preventDefault()}>
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="your@email.com" />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Tell me about your project or opportunity" />
            </label>
            <button type="submit" className="button button--primary">
              Send Message
            </button>
            <p className="form-note">This contact form UI is ready to be connected to a backend or email service.</p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
