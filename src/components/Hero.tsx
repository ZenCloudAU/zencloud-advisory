function bookConversation() {
  window.location.href = 'mailto:phil@zencloud.com.au?subject=Book%20a%20Conversation'
}

const SIGNALS = [
  'Decisions are made before architecture is engaged',
  'Governance artefacts exist but no one cites them',
  'Cloud spend is rising without a traceable decision trail',
]

export default function Hero() {
  return (
    <section style={{
      padding: '5rem 3rem 4.5rem',
      background: 'var(--color-primary)',
      borderBottom: '1px solid var(--border)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Orange top bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 4,
        background: 'var(--accent-amber)',
      }} />
      {/* Diagonal texture */}
      <div style={{
        position: 'absolute', top: 0, left: 0, bottom: 0, width: '60%',
        backgroundImage: 'repeating-linear-gradient(-45deg, rgba(0,180,216,0.025) 0px, rgba(0,180,216,0.025) 1px, transparent 1px, transparent 28px)',
        pointerEvents: 'none',
      }} />

      <div className="zc-hero-grid" style={{ position: 'relative', zIndex: 1 }}>

        {/* Left — copy */}
        <div>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '.62rem',
            letterSpacing: '.22em', textTransform: 'uppercase',
            color: 'var(--accent-amber)', marginBottom: '1.75rem',
          }}>Enterprise Architecture Advisory · Brisbane, AU</p>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)',
            fontWeight: 900, lineHeight: 1.02, letterSpacing: '-.025em',
            color: 'var(--color-text-light)', marginBottom: '1.5rem',
          }}>
            Cloud treated as<br />an IT project?
            <em style={{
              color: 'var(--accent-amber)', fontStyle: 'italic',
              fontWeight: 700, display: 'block',
            }}>That's where value stops.</em>
          </h1>

          <p style={{
            fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.75,
            color: 'rgba(248,250,252,0.72)', maxWidth: 520, marginBottom: '2.75rem',
          }}>
            ZenCloud fixes the foundation — governance, architecture decisions,
            and cloud strategy aligned to business outcomes. Not vendor roadmaps.
            Not disconnected artefacts.
          </p>

          <button onClick={bookConversation} className="zc-btn-primary">Book a Conversation →</button>

          <p style={{
            marginTop: '.75rem', fontFamily: 'var(--font-mono)',
            fontSize: '.58rem', letterSpacing: '.08em', color: 'var(--navy-muted)',
          }}>15 min · no obligation · we assess where your architecture stands</p>

          <p style={{
            marginTop: '2rem', fontFamily: 'var(--font-mono)', fontSize: '.6rem',
            letterSpacing: '.06em', color: 'var(--navy-muted)',
          }}>
            Delivered by our AI engine{' '}
            <a href="https://studiosix.com.au" target="_blank" rel="noopener noreferrer"
              className="zc-link-accent">StudioSix ↗</a>
          </p>
        </div>

        {/* Right — dark diagnostic panel */}
        <aside style={{
          background: 'var(--color-panel)',
          borderRadius: 8,
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
            color: 'rgba(0,180,216,0.9)', marginBottom: '.875rem',
          }}>Architecture health signals</p>

          <p style={{
            fontFamily: 'var(--font-display)', fontSize: '1.05rem',
            fontWeight: 700, color: '#f1f5f9',
            lineHeight: 1.3, marginBottom: '1.5rem',
          }}>Three signs your cloud strategy has no architecture behind it.</p>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.875rem' }}>
            {SIGNALS.map((signal, i) => (
              <li key={i} style={{ display: 'flex', gap: '.75rem', alignItems: 'flex-start' }}>
                <span style={{
                  color: 'var(--accent-amber)', fontFamily: 'var(--font-mono)',
                  fontSize: '.65rem', lineHeight: 1.9, flexShrink: 0,
                }}>→</span>
                <span style={{ fontSize: '.82rem', lineHeight: 1.65, color: 'rgba(241,245,249,0.68)' }}>
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
            }}>15 min conversation · find out where you stand</p>
          </div>
        </aside>

      </div>
    </section>
  )
}
