const SIGNALS = [
  'Governance gaps that no one in the business owns',
  'Architecture decisions made by vendors, not the business',
  'Cloud costs that scale faster than the value they deliver',
]

export default function Hero() {
  return (
    <section style={{
      padding: '5rem 3rem 4.5rem',
      background: '#ffffff',
      borderBottom: '1px solid var(--border)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Orange rule */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 4,
        background: 'var(--accent-amber)',
      }} />

      <div className="zc-hero-grid" style={{ position: 'relative', zIndex: 1 }}>

        {/* Left — copy */}
        <div>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '.62rem',
            letterSpacing: '.22em', textTransform: 'uppercase',
            color: 'var(--accent-amber)', marginBottom: '1.75rem',
          }}>Enterprise Architecture & Cloud Advisory · Brisbane, AU</p>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)',
            fontWeight: 900, lineHeight: 1.02, letterSpacing: '-.025em',
            color: 'var(--text-primary)', marginBottom: '1.5rem',
          }}>
            A common mistake
            <br />enterprises make
            <br />with cloud?
            <em style={{
              color: 'var(--accent-amber)', fontStyle: 'italic',
              fontWeight: 400, display: 'block', marginTop: '.2em',
            }}>Treated as an IT project.</em>
          </h1>

          <p style={{
            fontSize: '1rem', fontWeight: 300, lineHeight: 1.8,
            color: 'var(--text-secondary)', maxWidth: 520, marginBottom: '2.75rem',
          }}>
            At ZenCloud Advisory, we fix the foundation — governance, architecture
            strategy, and cloud direction aligned to business outcomes. Powered by
            Velocity™, our decision-first EA framework. Not vendor roadmaps.
            Not disconnected artefacts.
          </p>

          <button
            onClick={() => { window.location.href = 'mailto:info@zencloud.com.au' }}
            className="zc-btn-primary"
          >
            Let's have a conversation →
          </button>

          <p style={{
            marginTop: '.875rem', fontFamily: 'var(--font-mono)',
            fontSize: '.58rem', letterSpacing: '.08em', color: 'var(--text-ghost)',
          }}>info@zencloud.com.au</p>
        </div>

        {/* Right — diagnostic panel */}
        <aside style={{
          background: 'var(--footer-bg)',
          borderRadius: 4,
          padding: '2rem',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 3,
            background: 'var(--accent-amber)',
          }} />

          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '.56rem',
            letterSpacing: '.18em', textTransform: 'uppercase',
            color: 'var(--accent-amber)', marginBottom: '.875rem',
          }}>The result — recognised patterns</p>

          <p style={{
            fontFamily: 'var(--font-display)', fontSize: '1rem',
            fontWeight: 700, color: '#f1f5f9',
            lineHeight: 1.35, marginBottom: '1.5rem',
          }}>When cloud is treated as an IT project, these appear.</p>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.875rem' }}>
            {SIGNALS.map((signal, i) => (
              <li key={i} style={{ display: 'flex', gap: '.75rem', alignItems: 'flex-start' }}>
                <span style={{
                  color: 'var(--accent-amber)', fontFamily: 'var(--font-mono)',
                  fontSize: '.65rem', lineHeight: 1.9, flexShrink: 0,
                }}>→</span>
                <span style={{ fontSize: '.82rem', lineHeight: 1.65, color: 'rgba(241,245,249,0.72)' }}>
                  {signal}
                </span>
              </li>
            ))}
          </ul>

          <div style={{
            marginTop: '1.5rem', paddingTop: '1.25rem',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '.54rem',
              letterSpacing: '.1em', textTransform: 'uppercase',
              color: 'rgba(241,245,249,0.3)',
            }}>These are the conditions ZenCloud Advisory was built to fix.</p>
          </div>
        </aside>

      </div>
    </section>
  )
}
