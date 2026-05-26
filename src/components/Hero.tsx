export default function Hero() {
  return (
    <section style={{
      background: 'var(--bg-surface)',
      borderBottom: '1px solid var(--border)',
      padding: '68px 36px 60px',
    }}>
      <div className="container">
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 800,
          letterSpacing: '2.5px', textTransform: 'uppercase',
          color: 'var(--accent-amber)', marginBottom: 18,
        }}>
          ZENCLOUD ADVISORY · BRISBANE, QLD · PRINCIPAL ARCHITECT
        </p>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(44px, 6vw, 76px)',
          fontWeight: 900,
          letterSpacing: '-2px', lineHeight: 1.06,
          color: 'var(--text-primary)', marginBottom: 22,
        }}>
          Architecture advisory.<br />
          <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--text-secondary)' }}>
            The decision layer.
          </em>
        </h1>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 300,
          lineHeight: 1.8, color: 'var(--text-secondary)',
          maxWidth: 560, marginBottom: 36,
        }}>
          ZenCloud Advisory is the client entry point and parent practice for the Velocity Architecture ecosystem. We provide enterprise architecture strategy, cloud governance, security posture, and senior advisory leadership — then route clients into StudioSix for architecture-led delivery and governed execution.
        </p>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <button
            onClick={() => { window.location.href = 'mailto:info@zencloud.com.au' }}
            style={{
              background: 'var(--footer-bg)', color: '#f8fafc',
              fontSize: 13, fontWeight: 500,
              padding: '0 22px', minHeight: 44,
              borderRadius: 8, border: 'none',
            }}>
            Engage — info@zencloud.com.au
          </button>
          <button
            onClick={() => document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 12,
              color: 'var(--accent-amber)', background: 'none',
              border: 'none', textDecoration: 'underline', textUnderlineOffset: 3,
              minHeight: 44,
            }}>
            Explore the ecosystem →
          </button>
        </div>
      </div>
    </section>
  )
}
