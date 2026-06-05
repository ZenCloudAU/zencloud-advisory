function bookConversation() {
  window.location.href = 'mailto:phil@zencloud.com.au?subject=Book%20a%20Conversation'
}

export default function Hero() {
  return (
    <section style={{
      padding: '7rem 3rem 6rem',
      background: '#ffffff',
      borderBottom: '1px solid var(--border)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Orange top bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 4,
        background: 'var(--accent-amber)',
      }} />
      {/* Diagonal pattern — right side */}
      <div style={{
        position: 'absolute', top: 0, right: 0, bottom: 0, width: '45%',
        backgroundImage: 'repeating-linear-gradient(-45deg, rgba(232,99,10,0.03) 0px, rgba(232,99,10,0.03) 1px, transparent 1px, transparent 28px)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 820, position: 'relative', zIndex: 1 }}>
        {/* Eyebrow */}
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: '.65rem',
          letterSpacing: '.22em', textTransform: 'uppercase',
          color: 'var(--accent-amber)', marginBottom: '1.75rem',
        }}>Enterprise Architecture Advisory · Brisbane, AU</p>

        {/* H1 */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)',
          fontWeight: 900, lineHeight: 1.02, letterSpacing: '-.025em',
          color: 'var(--text-primary)', marginBottom: '1.5rem',
        }}>
          Cloud treated as<br />an IT project?
          <em style={{
            color: 'var(--accent-amber)', fontStyle: 'italic',
            fontWeight: 700, display: 'block',
          }}>That's where value stops.</em>
        </h1>

        {/* Sub */}
        <p style={{
          fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.75,
          color: 'var(--navy-dim)', maxWidth: 540, marginBottom: '2.75rem',
        }}>
          ZenCloud fixes the foundation — governance, architecture decisions,
          and cloud strategy aligned to business outcomes. Not vendor roadmaps.
          Not disconnected artefacts.
        </p>

        {/* CTA */}
        <button onClick={bookConversation} style={{
          fontFamily: 'var(--font-mono)', fontSize: '.72rem',
          letterSpacing: '.1em', textTransform: 'uppercase',
          background: 'var(--accent-amber)', color: '#fff',
          padding: '1rem 2rem', borderRadius: 4, border: 'none', cursor: 'pointer',
        }}>Book a Conversation →</button>
        <p style={{
          marginTop: '.75rem', fontFamily: 'var(--font-mono)',
          fontSize: '.6rem', letterSpacing: '.08em', color: 'var(--navy-muted)',
        }}>15 min · no obligation · we assess where your architecture stands</p>

        {/* StudioSix relationship link */}
        <p style={{
          marginTop: '2rem', fontFamily: 'var(--font-mono)', fontSize: '.62rem',
          letterSpacing: '.06em', color: 'var(--navy-muted)',
        }}>
          Delivered by our AI engine{' '}
          <a href="https://studiosix.com.au" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--accent-amber)', textDecoration: 'none', fontWeight: 600 }}>
            StudioSix ↗
          </a>
        </p>
      </div>
    </section>
  )
}
