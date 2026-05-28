const internalLinks = [
  { label: 'Home', id: 'top' },
  { label: 'Advisory', id: 'advisory' },
  { label: 'Services', id: 'services' },
  { label: 'Velocity', id: 'ecosystem' },
  { label: 'Tools', id: 'tools' },
  { label: 'Insights', id: 'insights' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
]

function scrollToSection(id: string) {
  const el = document.getElementById(id)

  if (!el) {
    window.location.hash = id
    return
  }

  const navOffset = 92
  const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - navOffset)

  window.scrollTo({ top, behavior: 'auto' })
  window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#${id}`)
}

export default function Nav() {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      minHeight: 56,
      background: 'rgba(255,255,255,0.88)',
      backdropFilter: 'blur(18px)',
      WebkitBackdropFilter: 'blur(18px)',
      borderBottom: '1px solid var(--border)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      gap: 20,
      padding: '10px 36px',
      flexWrap: 'wrap',
    }}>
      <button type="button" onClick={() => scrollToSection('top')} style={{
        fontFamily: 'var(--font-body)', fontSize: 17, fontWeight: 700,
        letterSpacing: '-0.3px', background: 'transparent', border: 0, cursor: 'pointer', padding: 0,
      }}>
        <span style={{ color: 'var(--text-primary)' }}>Zen</span>
        <span style={{ color: 'var(--accent-amber)' }}>Cloud</span>
        <span style={{ color: 'var(--text-primary)' }}> Advisory</span>
      </button>

      <div style={{ display: 'inline-flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
        {internalLinks.map(({ label, id }) => (
          <button key={label} type="button"
            onClick={() => scrollToSection(id)}
            style={{
              fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)',
              transition: 'color 150ms', background: 'transparent', border: 0, cursor: 'pointer', padding: 0,
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
            {label}
          </button>
        ))}
        <a href="/profile/" style={{
          fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)',
          textDecoration: 'none',
        }}>Profile</a>
      </div>

      <button
        onClick={() => { window.location.href = 'mailto:info@zencloud.com.au' }}
        style={{
          background: 'var(--footer-bg)', color: '#f8fafc',
          fontSize: 13, fontWeight: 500,
          padding: '0 18px', minHeight: 44,
          borderRadius: 8, border: 'none',
        }}>
        Engage
      </button>
    </nav>
  )
}
