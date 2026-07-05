import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="brand" onClick={close}>
          Bud<span className="brand-accent">AI</span>
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <NavLink to="/services" onClick={close}>
            Products &amp; Services
          </NavLink>
          <NavLink to="/contact" className="nav-cta" onClick={close}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
