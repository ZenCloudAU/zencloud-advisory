export default function Nav() {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      height: 56,
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(18px)',
      WebkitBackdropFilter: 'blur(18px)',
      borderBottom: '1px solid var(--border)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '0 36px',
    }}>
      <span style={{
        fontFamily: 'var(--font-body)', fontSize: 17, fontWeight: 700,
        letterSpacing: '-0.3px',
      }}>
        <span style={{ color: 'var(--text-primary)' }}>Zen</span>
        <span style={{ color: 'var(--accent-amber)' }}>Cloud</span>
        <span style={{ color: 'var(--text-primary)' }}> Advisory</span>
      </span>

      <div style={{ display: 'inline-flex', gap: 28, alignItems: 'center' }}>
        {[
          { label: 'Advisory', href: '#advisory' },
          { label: 'Ecosystem', href: '#ecosystem' },
        ].map(({ label, href }) => (
          <a key={label} href={href}
            style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', transition: 'color 150ms' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
            {label}
          </a>
        ))}
        {[
          { label: 'VAF™ ↗', href: 'https://zencloudau.github.io/velocity-architecture' },
          { label: 'StudioSix ↗', href: 'https://studiosix.com.au' },
        ].map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', transition: 'color 150ms' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
            {label}
          </a>
        ))}
        <a href="#contact"
          style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', transition: 'color 150ms' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
          Contact
        </a>
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
