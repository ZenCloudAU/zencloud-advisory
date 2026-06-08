const externalLinks = [
  { label: 'StudioSix™', href: 'https://studiosix.com.au' },
  { label: 'Velocity™', href: 'https://velocityarchitectureframework.com' },
]

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: '2rem 3rem',
      background: 'var(--navy-bg)',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
    }}>
      {/* Logo */}
      <div style={{
        fontFamily: 'var(--font-body)', fontSize: '.82rem',
        fontWeight: 700, color: 'rgba(255,255,255,0.45)',
      }}>
        Zen<span style={{ color: 'var(--accent-amber)' }}>Cloud</span>™ Advisory
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        {externalLinks.map(l => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
            className="zc-footer-link">{l.label}</a>
        ))}
      </div>

      {/* Copyright */}
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '.6rem',
        color: 'rgba(255,255,255,0.22)',
      }}>© 2026 ZenCloud Global Consultants</div>
    </footer>
  )
}
