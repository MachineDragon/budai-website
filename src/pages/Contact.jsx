import { useState } from 'react'
import GuaranteeBanner from '../components/GuaranteeBanner.jsx'
import { CONTACT, SERVICE_CATEGORIES } from '../data/services.js'
import mikePhoto from '../assets/mike.png'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnjkwvbg'

const OTHER_CATEGORY = 'Something else'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [category, setCategory] = useState('')
  const [service, setService] = useState('')

  const selectedCategory = SERVICE_CATEGORIES.find((cat) => cat.title === category)

  function handleCategoryChange(e) {
    setCategory(e.target.value)
    setService('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
        setCategory('')
        setService('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Get in Touch</h1>
          <p className="section-sub">
            Have a question or ready to start? Reach out any way you like — I answer
            everything personally.
          </p>
        </div>
      </section>

      <section className="container section contact-layout">
        <div className="contact-card">
          <img src={mikePhoto} alt="Michael Hajjar, founder of BudAI" className="contact-photo" />
          <h2>Michael Hajjar</h2>
          <p className="contact-tagline">
            Trainer · Educator · AI Consultant
          </p>
          <div className="contact-actions">
            <a href={`mailto:${CONTACT.email}`} className="btn btn-primary">
              ✉️ Send me an email
            </a>
            <a href={`tel:${CONTACT.phoneTel}`} className="btn btn-ghost">
              📞 {CONTACT.phoneDisplay}
            </a>
          </div>
          <p className="contact-email-note">{CONTACT.email}</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send an Inquiry</h2>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
          <label>
            What are you interested in?
            <select name="category" required value={category} onChange={handleCategoryChange}>
              <option value="" disabled>
                Select a category…
              </option>
              {SERVICE_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.title}>
                  {cat.icon} {cat.title}
                </option>
              ))}
              <option value={OTHER_CATEGORY}>💬 {OTHER_CATEGORY}</option>
            </select>
          </label>
          {selectedCategory && (
            <label>
              Which service?
              <select
                name="service"
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="" disabled>
                  Select a service…
                </option>
                {selectedCategory.items.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
                <option value="Not sure yet">Not sure yet — let's talk</option>
              </select>
            </label>
          )}
          <label>
            Message
            <textarea
              name="message"
              rows="5"
              placeholder="Tell me a little about what you're looking for…"
              required
            />
          </label>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending…' : 'Send Inquiry'}
          </button>
          {status === 'sent' && (
            <p className="form-status form-success">
              Thanks! Your message is on its way — I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="form-status form-error">
              Something went wrong sending the form. Please email me directly at{' '}
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
            </p>
          )}
        </form>
      </section>

      <section className="container section">
        <GuaranteeBanner />
      </section>
    </>
  )
}
