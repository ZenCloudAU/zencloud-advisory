function bookConversation(subject = 'Book a Conversation') {
  window.location.href = `mailto:phil@zencloud.com.au?subject=${encodeURIComponent(subject)}`
}

const secondary = [
  {
    num: '02 — SPRINT',
    title: 'Architecture Decision Sprint',
    duration: '4 weeks · Fixed scope',
    body: 'Structured comparison, options analysis, and decision-recording for a specific technology choice your organisation is facing right now.',
  },
  {
    num: '03 — READINESS',
    title: 'AI / Cloud / Cyber Readiness Sprint',
    duration: '1–3 weeks',
    body: 'Readiness evaluation across cloud modernisation, AI adoption, or cybersecurity governance. Clear posture assessment and priority recommendations.',
  },
  {
    num: '04 — RETAINER',
    title: 'Fractional Enterprise Architect',
    duration: 'Monthly · ongoing',
    body: 'Senior architecture support on retainer. Decision governance, board-level reporting, and a principal architect without the full-time cost.',
  },
  {
    num: '05 — PARTNER',
    title: 'Partner Architecture Office',
    duration: 'Scoped or ongoing',
    body: 'White-label or co-branded architecture support for technology partners and resellers alongside your existing delivery team.',
  },
]

export default function EngagementOffers() {
  return (
    <section id="offers" style={{
      background: '#ffffff', borderTop: '1px solid var(--border)',
    }}>
      <div className="container" style={{ padding: '5.5rem 3rem' }}>
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: '.6rem',
          letterSpacing: '.22em', textTransform: 'uppercase',
          color: 'var(--accent-amber)', marginBottom: '.85rem',
        }}>How we engage</p>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)',
          fontWeight: 700, lineHeight: 1.2, color: 'var(--text-primary)', marginBottom: '.75rem',
        }}>Every engagement starts<br />with a conversation.</h2>
        <p style={{
          fontSize: '.92rem', fontWeight: 300, lineHeight: 1.7,
          color: 'var(--navy-dim)', maxWidth: 520, marginBottom: '2.5rem',
        }}>Five engagement models. Most organisations start with the Health Check — it's short, scoped, and gives immediate clarity on where the gaps are.</p>

        {/* Entry note */}
        <div style={{
          display: 'flex', alignItems: 'flex-start', gap: '.75rem',
          background: 'var(--orange-dim)', border: '1px solid var(--orange-border)',
          borderRadius: 5, padding: '.9rem 1.1rem', marginBottom: '2rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '.85rem',
            color: 'var(--accent-amber)', fontWeight: 700, flexShrink: 0, marginTop: '.05rem',
          }}>→</span>
          <p style={{ fontSize: '.8rem', color: 'var(--navy-dim)', lineHeight: 1.55 }}>
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Not sure where to start?</strong>{' '}
            The Architecture Decision Health Check is the recommended entry point. Short, scoped, and gives your organisation immediate clarity on where the gaps are.
          </p>
        </div>

        {/* Health Check — FEATURED full-width */}
        <div style={{
          border: '1px solid var(--accent-amber)',
          boxShadow: '0 0 0 1px var(--orange-border)',
          borderRadius: 6, padding: '2rem 1.75rem',
          marginBottom: '1.25rem', position: 'relative',
          background: '#ffffff',
        }}>
          {/* Recommended badge */}
          <div style={{
            position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)',
            background: 'var(--accent-amber)', color: '#fff',
            fontFamily: 'var(--font-mono)', fontSize: '.58rem',
            letterSpacing: '.12em', textTransform: 'uppercase',
            padding: '.2rem .75rem', borderRadius: '0 0 4px 4px', whiteSpace: 'nowrap',
          }}>Recommended starting point</div>

          <div className="zc-offer-featured-grid">
            <div>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: '.58rem',
                letterSpacing: '.15em', color: 'var(--accent-amber)', marginBottom: '.65rem',
              }}>01 — DIAGNOSTIC</p>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: '1.05rem',
                fontWeight: 700, color: 'var(--text-primary)', marginBottom: '.4rem', lineHeight: 1.25,
              }}>Architecture Decision Health Check</h3>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: '.6rem',
                letterSpacing: '.1em', color: 'var(--navy-muted)', marginBottom: '1rem',
              }}>5 days → 4 weeks · Fixed scope</p>
              <p style={{
                fontSize: '.82rem', fontWeight: 300, lineHeight: 1.65, color: 'var(--navy-dim)',
              }}>Rapid assessment of how technology decisions are being made, governed, and traced. Identifies the gap between where your architecture is and where it needs to be. Delivered as a clear written report with prioritised recommendations — not a slide deck.</p>
            </div>
            <div>
              <div style={{
                background: 'var(--orange-dim)', border: '1px solid var(--orange-border)',
                borderRadius: 5, padding: '1.1rem', marginBottom: '.75rem',
              }}>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: '.58rem',
                  letterSpacing: '.12em', color: 'var(--accent-amber)', marginBottom: '.5rem',
                }}>WHAT YOU GET</p>
                <div style={{ fontSize: '.76rem', color: 'var(--navy-dim)', lineHeight: 1.65 }}>
                  Decision flow audit<br />
                  Governance gap analysis<br />
                  Architecture posture review<br />
                  Prioritised recommendations
                </div>
              </div>
              <button
                onClick={() => bookConversation('Architecture Decision Health Check')}
                className="zc-btn-primary"
                style={{ display: 'block', width: '100%', padding: '.75rem 1.25rem' }}>Start here →</button>
            </div>
          </div>
        </div>

        {/* Secondary 2×2 grid */}
        <div className="zc-offers-secondary">
          {secondary.map(o => (
            <div key={o.num} style={{
              background: 'var(--bg-alt)', border: '1px solid var(--border)',
              borderRadius: 6, padding: '1.5rem',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: '.58rem',
                letterSpacing: '.15em', color: 'var(--accent-amber)', marginBottom: '.65rem',
              }}>{o.num}</p>
              <p style={{
                fontSize: '.88rem', fontWeight: 600,
                color: 'var(--text-primary)', marginBottom: '.35rem', lineHeight: 1.3,
              }}>{o.title}</p>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: '.6rem',
                letterSpacing: '.1em', color: 'var(--navy-muted)', marginBottom: '1rem',
              }}>{o.duration}</p>
              <p style={{
                fontSize: '.76rem', fontWeight: 300, lineHeight: 1.6,
                color: 'var(--navy-dim)', marginBottom: '1rem',
              }}>{o.body}</p>
              <button
                onClick={() => bookConversation(o.title)}
                className="zc-btn-secondary"
                style={{ display: 'block', width: '100%' }}>Start with a conversation →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
