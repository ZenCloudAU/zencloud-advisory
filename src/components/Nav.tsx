const internalLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Advisory', href: '#advisory' },
  { label: 'Services', href: '#services' },
  { label: 'Velocity', href: '#ecosystem' },
  { label: 'Tools', href: '#tools' },
  { label: 'Insights', href: '#insights' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

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
      <a href="#top" style={{
        fontFamily: 'var(--font-body)', fontSize: 17, fontWeight: 700,
        letterSpacing: '-0.3px',
      }}>
        <span style={{ color: 'var(--text-primary)' }}>Zen</span>
        <span style={{ color: 'var(--accent-amber)' }}>Cloud</span>
        <span style={{ color: 'var(--text-primary)' }}> Advisory</span>
      </a>

      <div style={{ display: 'inline-flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
        {internalLinks.map(({ label, href }) => (
          <a key={label} href={href}
            style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', transition: 'color 150ms' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
            {label}
          </a>
        ))}
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
