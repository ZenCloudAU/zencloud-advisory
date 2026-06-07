function engageAI() {
  window.location.href = 'mailto:phil@zencloud.com.au?subject=AI%20Advisory%20Enquiry'
}

export default function AiDeliverySection() {
  return (
    <section id="ai-delivery" style={{
      background: 'var(--navy-bg)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: 'var(--accent-amber)',
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, bottom: 0, right: 0,
        backgroundImage: 'repeating-linear-gradient(-45deg, rgba(0,180,216,0.025) 0px, rgba(0,180,216,0.025) 1px, transparent 1px, transparent 28px)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ padding: '5.5rem 3rem', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 720 }}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '.62rem',
            letterSpacing: '.22em', textTransform: 'uppercase',
            color: 'var(--accent-amber)', marginBottom: '1.25rem',
          }}>Architecture-Led AI Delivery</p>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
            fontWeight: 700, lineHeight: 1.1, letterSpacing: '-.02em',
            color: '#f1f5f9', marginBottom: '1.5rem',
          }}>
            As organisations move beyond cloud into AI,<br />
            the same architectural discipline applies.
          </h2>

          <p style={{
            fontSize: '1rem', fontWeight: 300, lineHeight: 1.75,
            color: 'rgba(241,245,249,0.72)', maxWidth: 600, marginBottom: '1.25rem',
          }}>
            ZenCloud Advisory supports enterprise AI architecture, governance and delivery
            — powered by the Velocity Architecture Framework.
          </p>

          <p style={{
            fontSize: '1rem', fontWeight: 300, lineHeight: 1.75,
            color: 'rgba(241,245,249,0.72)', maxWidth: 600, marginBottom: '2.5rem',
          }}>
            The same rigour we bring to cloud transformation, applied to AI programs
            that need to hold up in production, in regulated environments, and under
            board-level scrutiny.
          </p>

          <button onClick={engageAI} className="zc-btn-primary">
            Engage ZenCloud for AI Advisory →
          </button>
        </div>
      </div>
    </section>
  )
}
