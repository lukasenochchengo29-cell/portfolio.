import './Contact.css'

const contactLinks = [
  { label: 'Email', href: 'mailto:lukas.enoch.chengo29@gmail.com', value: 'lukas.enoch.chengo29@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/lukasenochchengo29-cell', value: 'github.com/lukasenochchengo29-cell' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lukas-enock-8ab6b2335/', value: 'linkedin.com/in/lukas-enock-8ab6b2335' },
]

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Contact</p>
          <h2>Let’s build something meaningful.</h2>
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
                  <span>{item.label}</span>
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer noopener' : undefined}>
                    {item.value}
                  </a>
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
