import { useState } from 'react'

const LINKS = [
  { label: 'Advisory',    id: 'services' },
  { label: 'Engagements', id: 'offers'   },
  { label: 'About',       id: 'about'    },
  { label: 'Contact',     id: 'contact'  },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const y = el.getBoundingClientRect().top + window.scrollY - 64
  window.scrollTo({ top: y, behavior: 'smooth' })
  window.history.replaceState(null, '', `#${id}`)
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="zc-nav" style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: '#ffffff',
      borderBottom: '1px solid var(--border)',
      height: 64,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      {/* Wordmark */}
      <div>
        <div style={{
          fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 400,
          color: 'var(--text-primary)', letterSpacing: '-.02em', lineHeight: 1.1,
        }}>Zen<span style={{ color: 'var(--accent-amber)', fontStyle: 'italic' }}>Cloud</span> Advisory</div>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '.56rem',
          color: 'var(--text-ghost)', letterSpacing: '.08em', textTransform: 'uppercase',
        }}>Principal Architecture · Brisbane</div>
      </div>

      {/* Hamburger — mobile only */}
      <button
        className="zc-nav-toggle"
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Links + CTA */}
      <div
        className={`zc-nav-links${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
      >
        {LINKS.map(({ label, id }) => (
          <button key={id} onClick={() => scrollTo(id)} className="zc-nav-link-btn">
            {label}
          </button>
        ))}
        <button
          onClick={() => { window.location.href = 'mailto:info@zencloud.com.au' }}
          className="zc-nav-cta"
        >
          Engage
        </button>
      </div>
    </nav>
  )
}
