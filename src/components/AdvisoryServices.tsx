const cards = [
  {
    num: '01 — ENTERPRISE',
    title: 'Enterprise Architecture Advisory',
    body: 'Target-state direction, decision governance, capability alignment, architecture board support, and transformation framing for complex organisations.',
  },
  {
    num: '02 — SOLUTION',
    title: 'Solution Architecture & Design Authority',
    body: 'Practical solution architecture for delivery teams: options, decisions, risks, constraints, guardrails, and implementation-ready artefacts.',
  },
  {
    num: '03 — CLOUD',
    title: 'Cloud Strategy & Platform Modernisation',
    body: 'Cloud direction, platform governance, operating model design, migration framing, and modernisation roadmaps aligned to business outcomes.',
  },
  {
    num: '04 — SECURITY',
    title: 'Security, Identity & Governance',
    body: 'Security posture, identity, access, control design, risk framing, and governance embedded into architecture decisions from the start.',
  },
  {
    num: '05 — AI DELIVERY',
    title: 'AI-Assisted Delivery Enablement',
    body: 'Safe adoption of AI-assisted architecture workflows, prompts, artefact generation, review controls, and decision traceability.',
  },
  {
    num: '06 — RECOVERY',
    title: 'Program Recovery & Delivery Governance',
    body: 'Restores clarity in fragmented or at-risk delivery through decision flow, governance cadence, traceability, and executive reporting.',
  },
]

const partners = ['Microsoft', 'Amazon Web Services', 'Google Cloud']

export default function AdvisoryServices() {
  return (
    <section id="services" style={{
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
        }}>What ZenCloud provides</h2>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300,
          color: 'var(--text-muted)', maxWidth: 620, marginBottom: 18,
        }}>Senior advisory for organisations that need architecture decisions to become governed execution, not more disconnected artefacts.</p>

        <div style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10,
          background: 'var(--bg-surface)', border: '1px solid var(--border)',
          borderRadius: 8, padding: '14px 16px', marginBottom: 36,
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 300,
            letterSpacing: '1.6px', textTransform: 'uppercase', color: 'var(--text-ghost)',
          }}>Cloud partner ecosystem</span>
          {partners.map(partner => (
            <span key={partner} style={{
              fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600,
              color: 'var(--text-primary)', background: 'var(--bg-alt)',
              border: '1px solid var(--border)', borderRadius: 999,
              padding: '6px 10px',
            }}>{partner}</span>
          ))}
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 300,
            color: 'var(--text-muted)', lineHeight: 1.6,
          }}>ZenCloud is a technical partner across Microsoft, AWS, and Google Cloud platform ecosystems.</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
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
