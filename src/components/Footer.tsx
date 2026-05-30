const links = [
  { label: 'Profile', href: '/profile/' },
  { label: 'Velocity Framework', href: 'https://velocityarchitectureframework.com/' },
  { label: 'VAF Agentic Architect', href: 'https://velocityarchitectureframework.com/app/portal.html' },
  { label: 'Velocity Academy', href: 'https://velocityarchitecture.com.au/' },
  { label: 'StudioSix', href: 'https://studiosix.com.au/' },
  { label: 'EA Artefact Generator', href: 'https://ea.velocityarchitecture.com.au/' },
  { label: 'VAF-SA', href: 'https://zencloudau.github.io/vaf-sa/' },
  { label: 'VSF Match', href: 'https://zencloudau.github.io/vsf-match/' },
  { label: 'Medium', href: 'https://medium.com/@ZencloudAU' },
  { label: 'GitHub', href: 'https://github.com/ZenCloudAU' },
]

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--footer-bg)',
      padding: '32px 36px',
    }}>
      <div className="container" style={{ display: 'grid', gap: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 700 }}>
            <span style={{ color: '#f8fafc' }}>Zen</span>
            <span style={{ color: 'var(--accent-gold)' }}>Cloud</span>
            <span style={{ color: '#f8fafc' }}> Advisory</span>
          </span>

          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 300,
            letterSpacing: '1.5px', textTransform: 'uppercase',
            color: '#cbd5e1',
          }}>
            Brisbane · Enterprise Architecture · AI Delivery Advisory
          </span>

          <a href="mailto:info@zencloud.com.au" style={{
            fontFamily: 'var(--font-body)', fontSize: 13,
            color: '#f8fafc', textDecoration: 'underline', textUnderlineOffset: 3,
          }}>
            info@zencloud.com.au
          </a>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 18px' }}>
          {links.map(link => (
            <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined} style={{
              fontFamily: 'var(--font-body)', fontSize: 12,
              color: '#cbd5e1',
            }}>{link.label}</a>
          ))}
        </div>

        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 300,
          color: '#94a3b8', lineHeight: 1.6,
        }}>
          ZenCloud advises. StudioSix produces. Velocity decides.
        </p>
      </div>
    </footer>
  )
}
