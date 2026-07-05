import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import ServiceAccordion from '../components/ServiceAccordion.jsx'
import GuaranteeBanner from '../components/GuaranteeBanner.jsx'
import { SERVICE_CATEGORIES, BOOK } from '../data/services.js'
import bookCover from '../assets/book-cover.png'

export default function Services() {
  const { hash } = useLocation()
  const [expanded, setExpanded] = useState(() => new Set())

  // Arriving via a home-page category card (#/services#ai etc.):
  // auto-expand that category and scroll to it
  useEffect(() => {
    const id = hash.slice(1)
    if (id && SERVICE_CATEGORIES.some((cat) => cat.id === id)) {
      setExpanded((prev) => new Set(prev).add(id))
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [hash])

  function toggle(id) {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Products &amp; Services</h1>
          <p className="section-sub">
            I'm a person of many talents — pick a category to see everything I offer,
            then click any service to learn more.
          </p>
        </div>
      </section>

      <section className="container section">
        <div className="category-grid">
          {SERVICE_CATEGORIES.map((cat) => {
            const isOpen = expanded.has(cat.id)
            return (
              <div
                key={cat.id}
                id={cat.id}
                className={`category-card ${isOpen ? 'expanded' : ''}`}
              >
                <button
                  className="category-toggle"
                  aria-expanded={isOpen}
                  onClick={() => toggle(cat.id)}
                >
                  <span className="pillar-icon" aria-hidden="true">
                    {cat.icon}
                  </span>
                  <span className="category-toggle-text">
                    <span className="category-title">{cat.title}</span>
                    <span className="category-blurb">{cat.blurb}</span>
                  </span>
                  <span className="accordion-chevron" aria-hidden="true">
                    ▾
                  </span>
                </button>

                {isOpen && (
                  <div className="category-content">
                    <div className="accordion-group">
                      {cat.items.map((item) => (
                        <ServiceAccordion
                          key={item.name}
                          name={item.name}
                          description={item.description}
                        />
                      ))}
                    </div>

                    {cat.id === 'books' && (
                      <div className="book-feature book-feature-compact">
                        <img
                          src={bookCover}
                          alt={`${BOOK.title} book cover`}
                          className="book-cover"
                        />
                        <div>
                          <h3>{BOOK.title}</h3>
                          <p className="book-sub">{BOOK.subtitle}</p>
                          <p>{BOOK.description}</p>
                          <a
                            href={BOOK.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                          >
                            Buy on Amazon
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      <section className="container section">
        <GuaranteeBanner />
        <div className="center-cta">
          <Link to="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
