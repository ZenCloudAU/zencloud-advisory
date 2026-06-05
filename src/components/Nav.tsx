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
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
        {/* Orange Z square mark */}
        <div style={{
          width: 34, height: 34, background: 'var(--accent-amber)',
          borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 4h14L3 16h14" stroke="white" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div style={{
            fontFamily: 'var(--font-body)', fontSize: '.9rem', fontWeight: 700,
            color: 'var(--text-primary)', letterSpacing: '-.02em', lineHeight: 1.1,
          }}>ZenCloud™ Advisory</div>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '.58rem',
            color: 'var(--navy-muted)', letterSpacing: '.04em',
          }}>Enterprise Architecture · Brisbane</div>
        </div>
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
