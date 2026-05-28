const offers = [
  {
    label: '01 — START HERE',
    title: 'Architecture Decision Health Check',
    duration: '5 days or 2–4 weeks',
    audience: 'CIOs, CTOs, Heads of Architecture, PMO leaders, transformation executives, and technology partners.',
    problem: 'Use this when a technology decision is stuck, unclear, risky, or spread across too many stakeholders.',
    outputs: [
      'Customer Impact Statement',
      'decision-flow map',
      'risk and blocker view',
      'stakeholder concern summary',
      '90-day action plan',
    ],
    cta: 'Book the Health Check',
  },
  {
    label: '02 — SPRINT',
    title: 'Architecture Decision Sprint',
    duration: '4 weeks',
    audience: 'Architecture, delivery, PMO, data, security, and platform teams with a defined decision question.',
    problem: 'Use this when options need to be compared, decisions need to be recorded, and delivery needs an agreed direction.',
    outputs: [
      'decision register',
      'options and trade-off matrix',
      'Architecture Decision Records',
      'governance model',
      'executive briefing pack',
    ],
    cta: 'Discuss a Decision Sprint',
  },
  {
    label: '03 — READINESS',
    title: 'AI / Cloud / Cyber Readiness Sprint',
    duration: '1–3 weeks',
    audience: 'Leaders dealing with AI adoption, cloud modernisation, security uplift, data readiness, or platform change.',
    problem: 'Use this when the organisation needs a plain view of readiness, risk, governance gaps, and next actions.',
    outputs: [
      'readiness scorecard',
      'security and data risk view',
      'AI governance boundaries',
      'architecture guardrails',
      'prioritised roadmap',
    ],
    cta: 'Assess Readiness',
  },
  {
    label: '04 — RETAINER',
    title: 'Fractional Enterprise Architect / Design Authority',
    duration: 'Monthly',
    audience: 'Organisations that need senior architecture judgement without hiring a full-time executive architect.',
    problem: 'Use this when architecture decisions, reviews, escalations, or governance forums need ongoing senior support.',
    outputs: [
      'architecture board support',
      'design authority review',
      'ADR and decision-log governance',
      'executive advice',
      'delivery assurance',
    ],
    cta: 'Discuss Retainer Support',
  },
  {
    label: '05 — PARTNER',
    title: 'Partner Architecture Office',
    duration: 'Scoped or ongoing',
    audience: 'MSPs, cloud partners, cyber consultancies, ERP/SAP firms, SaaS vendors, and PMO/delivery consultancies.',
    problem: 'Use this when a partner needs senior architecture depth behind or alongside its own client delivery.',
    outputs: [
      'white-label architecture support',
      'client discovery and framing',
      'governance and artefact packs',
      'risk and decision review',
      'delivery escalation support',
    ],
    cta: 'Partner with ZenCloud',
  },
]

export default function EngagementOffers() {
  return (
    <section id="offers" style={{
      background: 'var(--bg-surface)',
      borderBottom: '1px solid var(--border)',
      padding: '58px 36px',
      scrollMarginTop: 84,
    }}>
      <div className="container">
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 300,
          letterSpacing: '2.5px', textTransform: 'uppercase',
          color: 'var(--text-ghost)', marginBottom: 8,
        }}>ENGAGEMENT OFFERS</p>

        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700,
          letterSpacing: '-0.5px', color: 'var(--text-primary)', marginBottom: 8,
        }}>How organisations engage ZenCloud</h2>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300,
          color: 'var(--text-muted)', maxWidth: 780, lineHeight: 1.75, marginBottom: 28,
        }}>
          Start with one clear decision problem. ZenCloud turns unclear technology situations into plain-language impact statements,
          decision maps, governed artefacts, and practical action plans. The Velocity Architecture Framework sits behind the work;
          the buyer path stays simple.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 18,
          marginBottom: 28,
        }}>
          {offers.map(offer => (
            <article key={offer.title} style={{
              background: 'var(--bg-alt)',
              border: '1px solid var(--border)',
              borderRadius: 10,
              padding: '24px 24px 22px',
              boxShadow: 'var(--shadow-sm)',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 300,
                letterSpacing: '1.2px', color: 'var(--accent-amber)', marginBottom: 10,
              }}>{offer.label}</p>

              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 700,
                letterSpacing: '-0.2px', color: 'var(--text-primary)', marginBottom: 8,
              }}>{offer.title}</h3>

              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700,
                color: 'var(--text-secondary)', marginBottom: 12,
              }}>{offer.duration}</p>

              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 300,
                color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 12,
              }}><strong style={{ color: 'var(--text-primary)' }}>For:</strong> {offer.audience}</p>

              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 300,
                color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 14,
              }}><strong style={{ color: 'var(--text-primary)' }}>Use when:</strong> {offer.problem}</p>

              <div style={{ marginBottom: 18 }}>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 400,
                  letterSpacing: '1.2px', textTransform: 'uppercase',
                  color: 'var(--text-ghost)', marginBottom: 8,
                }}>Outputs</p>
                <ul style={{
                  paddingLeft: 18,
                  margin: 0,
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  lineHeight: 1.7,
                }}>
                  {offer.outputs.map(output => <li key={output}>{output}</li>)}
                </ul>
              </div>

              <a href={`mailto:info@zencloud.com.au?subject=${encodeURIComponent(offer.title)}`} style={{
                display: 'inline-block',
                background: 'var(--footer-bg)',
                color: '#f8fafc',
                borderRadius: 8,
                padding: '11px 14px',
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                fontWeight: 700,
                textDecoration: 'none',
              }}>{offer.cta}</a>
            </article>
          ))}
        </div>

        <div style={{
          background: 'var(--bg-page)',
          border: '1px solid var(--border)',
          borderLeft: '3px solid var(--accent-amber)',
          borderRadius: 10,
          padding: '20px 22px',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
            color: 'var(--text-primary)', marginBottom: 6,
          }}>Plain-language engagement rule</p>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 300,
            color: 'var(--text-muted)', lineHeight: 1.7, margin: 0,
          }}>
            ZenCloud does not start with a framework presentation. It starts with the decision: what needs to be decided,
            who owns it, what risk exists, what evidence is missing, and what the delivery team needs next.
          </p>
        </div>
      </div>
    </section>
  )
}
