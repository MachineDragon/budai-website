import { useState } from 'react'

export default function ServiceAccordion({ name, description }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`accordion ${open ? 'open' : ''}`}>
      <button
        className="accordion-header"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span>{name}</span>
        <span className="accordion-chevron" aria-hidden="true">
          ▾
        </span>
      </button>
      <div className="accordion-body">
        <p>{description}</p>
      </div>
    </div>
  )
}
