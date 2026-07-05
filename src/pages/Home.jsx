import { Link } from 'react-router-dom'
import GuaranteeBanner from '../components/GuaranteeBanner.jsx'
import { SERVICE_CATEGORIES, BOOK } from '../data/services.js'
import bookCover from '../assets/book-cover.png'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <p className="hero-eyebrow">Fitness · Coding &amp; Math · AI</p>
          <h1>
            Train your body. <br />
            Sharpen your mind. <br />
            <span className="gradient-text">Master AI.</span>
          </h1>
          <p className="hero-sub">
            I'm Michael Hajjar — a person of many talents: personal trainer, Python &amp; math
            educator, AI consultant, and more. Whether you want to get in shape, learn
            to code, or bring AI into your business, I'll get you there.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn btn-primary">
              Explore Services
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="container section">
        <GuaranteeBanner />
      </section>

      <section className="container section">
        <h2 className="section-title">What I Offer</h2>
        <p className="section-sub">
          One person, a whole toolkit — pick what you need.
        </p>
        <div className="pillar-grid">
          {SERVICE_CATEGORIES.map((cat) => (
            <Link key={cat.id} to={`/services#${cat.id}`} className="pillar-card">
              <div className="pillar-icon" aria-hidden="true">
                {cat.icon}
              </div>
              <h3>{cat.title}</h3>
              <p>{cat.blurb}</p>
              <span className="pillar-more">See services →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="book-feature">
          <img src={bookCover} alt={`${BOOK.title} book cover`} className="book-cover" />
          <div>
            <p className="hero-eyebrow">My Book</p>
            <h2>{BOOK.title}</h2>
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
      </section>
    </>
  )
}
