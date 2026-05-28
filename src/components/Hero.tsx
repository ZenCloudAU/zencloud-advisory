export default function Hero() {
  return (
    <section id="top" style={{
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
          ZENCLOUD ADVISORY · BRISBANE, QLD · ENTERPRISE ARCHITECTURE
        </p>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(44px, 6vw, 76px)',
          fontWeight: 900,
          letterSpacing: '-2px', lineHeight: 1.06,
          color: 'var(--text-primary)', marginBottom: 22,
        }}>
          Enterprise architecture<br />
          <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--text-secondary)' }}>
            at the speed of the decision.
          </em>
        </h1>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 300,
          lineHeight: 1.8, color: 'var(--text-secondary)',
          maxWidth: 640, marginBottom: 36,
        }}>
          ZenCloud is an enterprise architecture and AI delivery advisory practice helping organisations turn cloud, security, governance, and transformation decisions into traceable, executable outcomes.
        </p>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
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
            View the ecosystem →
          </button>
        </div>
      </div>
    </section>
  )
}
