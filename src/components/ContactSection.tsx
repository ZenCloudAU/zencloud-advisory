export default function ContactSection() {
  return (
    <section id="contact" style={{
      background: 'var(--bg-surface)',
      borderBottom: '1px solid var(--border)',
      padding: '52px 36px',
    }}>
      <div className="container" style={{
        background: 'var(--footer-bg)',
        borderRadius: 10,
        padding: '34px 36px',
        display: 'flex',
        justifyContent: 'space-between',
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
            color: '#cbd5e1', maxWidth: 620, lineHeight: 1.7,
          }}>
            Use ZenCloud for enterprise architecture advisory, cloud and security governance, AI-assisted delivery enablement, and complex program recovery.
          </p>
        </div>

        <a href="mailto:info@zencloud.com.au" style={{
          background: '#f8fafc',
          color: 'var(--footer-bg)',
          borderRadius: 8,
          padding: '14px 20px',
          fontFamily: 'var(--font-body)',
          fontSize: 13,
          fontWeight: 700,
          whiteSpace: 'nowrap',
        }}>info@zencloud.com.au</a>
      </div>
    </section>
  )
}
