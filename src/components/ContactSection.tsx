export default function ContactSection() {
  return (
    <section id="contact" style={{
      background: 'var(--bg-surface)',
      borderBottom: '1px solid var(--border)',
      padding: '52px 36px',
      scrollMarginTop: 84,
    }}>
      <div className="container" style={{
        background: 'var(--footer-bg)',
        borderRadius: 10,
        padding: '34px 36px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        alignItems: 'center',
        gap: 24,
      }}>
        <div>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 300,
            letterSpacing: '2.5px', textTransform: 'uppercase',
            color: 'var(--accent-gold)', marginBottom: 8,
          }}>CONTACT</p>

          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700,
            letterSpacing: '-0.5px', color: '#f8fafc', marginBottom: 8,
          }}>Start with the architecture decision.</h2>

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300,
            color: '#cbd5e1', maxWidth: 650, lineHeight: 1.7,
          }}>
            Use ZenCloud when a cloud, AI, cyber, platform, vendor, or delivery decision needs plain-language framing,
            executive visibility, and a practical action plan. The first step is an Architecture Decision Health Check.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
          <a href="mailto:info@zencloud.com.au?subject=Architecture%20Decision%20Health%20Check" style={{
            background: '#f8fafc',
            color: 'var(--footer-bg)',
            borderRadius: 8,
            padding: '14px 20px',
            fontFamily: 'var(--font-body)',
            fontSize: 13,
            fontWeight: 700,
            whiteSpace: 'nowrap',
            display: 'inline-block',
            textDecoration: 'none',
          }}>Book Health Check</a>
          <a href="mailto:info@zencloud.com.au" style={{
            color: '#cbd5e1',
            fontFamily: 'var(--font-body)',
            fontSize: 12,
            fontWeight: 300,
            textDecoration: 'none',
          }}>info@zencloud.com.au</a>
        </div>
      </div>
    </section>
  )
}
