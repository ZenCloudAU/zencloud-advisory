const cards = [
  {
    num: '01 — STRATEGY',
    title: 'Cloud & Architecture Strategy',
    body: 'Cloud direction, platform selection, governance model, and delivery approach — aligned to business goals. Framework-level, not vendor-level. Pre-engagement framing before StudioSix mobilises.',
  },
  {
    num: '02 — LEADERSHIP',
    title: 'CTO / Principal Architecture Advisory',
    body: 'Senior-level guidance for boards, executives, and programme leads. Bridges business intent and technical execution. Independent of any delivery vendor or platform. Engagement model: retained or milestone-based.',
  },
  {
    num: '03 — SECURITY',
    title: 'Identity & Security Posture',
    body: 'Cloud security strategy, IAM governance, and risk posture framing. Architecture-layer advisory — not implementation. Aligned to APRA CPS 234, IRAP, and zero-trust patterns where applicable.',
  },
  {
    num: '04 — OVERSIGHT',
    title: 'Programme Oversight & Recovery',
    body: 'Independent oversight where architecture decisions, governance artefacts, or executive reporting have broken down. Restores delivery control without displacing existing teams. Advisory posture only.',
  },
]

export default function AdvisoryServices() {
  return (
    <section id="advisory-services" style={{
      background: 'var(--bg-alt)',
      borderBottom: '1px solid var(--border)',
      padding: '52px 36px',
    }}>
      <div className="container">
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 300,
          letterSpacing: '2.5px', textTransform: 'uppercase',
          color: 'var(--text-ghost)', marginBottom: 8,
        }}>ADVISORY SERVICES</p>

        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700,
          letterSpacing: '-0.5px', color: 'var(--text-primary)', marginBottom: 8,
        }}>What ZenCloud Advisory provides</h2>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300,
          color: 'var(--text-muted)', maxWidth: 480, marginBottom: 36,
        }}>Strategic and leadership services only. Delivery and artefact production are StudioSix's domain.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {cards.map(card => (
            <div key={card.num}
              style={{
                background: 'var(--bg-surface)', padding: '24px 26px',
                borderRadius: 8,
                borderLeft: '3px solid var(--accent-amber)',
                border: '1px solid var(--border)',
                borderLeftWidth: 3, borderLeftColor: 'var(--accent-amber)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'box-shadow 150ms, background-color 150ms',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--bg-page)'
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--bg-surface)'
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
              }}>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 300,
                letterSpacing: '1px', color: 'var(--accent-amber)', marginBottom: 10,
              }}>{card.num}</p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
                color: 'var(--text-primary)', marginBottom: 8,
              }}>{card.title}</p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 300,
                color: 'var(--text-muted)', lineHeight: 1.7,
              }}>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
