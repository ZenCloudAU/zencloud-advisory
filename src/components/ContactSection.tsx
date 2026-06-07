function bookConversation() {
  window.location.href = 'mailto:phil@zencloud.com.au?subject=Book%20a%20Conversation'
}

export default function ContactSection() {
  return (
    <section id="contact" style={{
      padding: '7rem 3rem', borderTop: '1px solid var(--border)',
      background: 'var(--navy-bg)', textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}>
      {/* Orange radial glow */}
      <div style={{
        position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
        width: '80%', height: '130%',
        background: 'radial-gradient(ellipse, rgba(232,99,10,0.12) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 560, margin: '0 auto' }}>
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: '.6rem',
          letterSpacing: '.22em', textTransform: 'uppercase',
          color: 'rgba(232,99,10,0.8)', marginBottom: '.85rem',
        }}>Let's talk</p>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
          fontWeight: 700, lineHeight: 1.15, color: '#ffffff', marginBottom: '1rem',
        }}>
          Curious where your<br />architecture{' '}
          <em style={{ color: 'var(--accent-amber)', fontStyle: 'italic' }}>actually stands?</em>
        </h2>
        <p style={{
          fontSize: '.92rem', fontWeight: 300, lineHeight: 1.7,
          color: 'rgba(255,255,255,0.5)', marginBottom: '2.25rem',
        }}>
          Book a 15-minute conversation. We'll tell you what we see — and whether we're the right fit. No proposal. No obligation.
        </p>
        <button onClick={bookConversation} className="zc-btn-primary" style={{ padding: '1rem 2.25rem' }}>Book a Conversation →</button>
        <p style={{
          marginTop: '.85rem', fontFamily: 'var(--font-mono)',
          fontSize: '.6rem', letterSpacing: '.08em', color: 'rgba(255,255,255,0.3)',
        }}>phil@zencloud.com.au · Brisbane, Australia</p>
      </div>
    </section>
  )
}
