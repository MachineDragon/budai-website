import { Link } from 'react-router-dom'
import { CONTACT, GUARANTEE } from '../data/services.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="brand footer-brand">
            Bud<span className="brand-accent">AI</span>
          </div>
          <p className="footer-guarantee">{GUARANTEE}</p>
        </div>
        <div className="footer-links">
          <Link to="/services">Products &amp; Services</Link>
          <Link to="/contact">Contact</Link>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneDisplay}</a>
        </div>
      </div>
      <div className="container footer-copy">
        © {new Date().getFullYear()} BudAI. All rights reserved.
      </div>
    </footer>
  )
}
