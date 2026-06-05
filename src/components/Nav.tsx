const LINKS = [
  { label: 'Services', id: 'services' },
  { label: 'Offers',   id: 'offers'   },
  { label: 'About',    id: 'about'    },
  { label: 'Contact',  id: 'contact'  },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const y = el.getBoundingClientRect().top + window.scrollY - 64
  window.scrollTo({ top: y, behavior: 'smooth' })
  window.history.replaceState(null, '', `#${id}`)
}

export default function Nav() {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(255,255,255,0.97)',
      borderBottom: '1px solid var(--border)',
      backdropFilter: 'blur(12px)',
      padding: '0 3rem', height: 64,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      {/* Wordmark */}
      <div>
        <div style={{
          fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700,
          color: 'var(--text-primary)', letterSpacing: '-.02em', lineHeight: 1.1,
        }}>Zen<span style={{ color: 'var(--accent-amber)' }}>Cloud</span>™ Advisory</div>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '.56rem',
          color: 'var(--navy-muted)', letterSpacing: '.08em', textTransform: 'uppercase',
        }}>Enterprise Architecture · Brisbane</div>
      </div>

      {/* Links + CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        {LINKS.map(({ label, id }) => (
          <button key={id} onClick={() => scrollTo(id)} style={{
            background: 'none', border: 'none', padding: 0,
            fontFamily: 'var(--font-body)', fontSize: '.75rem',
            color: 'var(--navy-dim)', cursor: 'pointer',
          }}>{label}</button>
        ))}
        <button onClick={() => scrollTo('contact')} style={{
          fontFamily: 'var(--font-mono)', fontSize: '.65rem',
          letterSpacing: '.08em', textTransform: 'uppercase',
          background: 'var(--accent-amber)', color: '#fff',
          padding: '.5rem 1.1rem', borderRadius: 4, border: 'none', cursor: 'pointer',
        }}>Book Health Check</button>
      </div>
    </nav>
  )
}
