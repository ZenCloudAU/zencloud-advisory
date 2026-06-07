const insights = [
  {
    tag: 'Cloud Governance',
    title: 'The #1 mistake enterprises make with cloud — and how to fix the foundation',
  },
  {
    tag: 'Architecture Decisions',
    title: 'Why vendor roadmaps are not an architecture strategy',
  },
  {
    tag: 'Decision Velocity',
    title: 'When governance gaps own your cloud spend — not you',
  },
]

const pills = [
  'Microsoft Partner Network',
  'AWS Partner Network',
  'Google Cloud Partner',
  'Brisbane · Asia-Pacific',
]

export default function AboutSection() {
  return (
    <section id="about" style={{
      borderTop: '1px solid var(--border)', background: 'var(--bg-alt)',
    }}>
      <div className="container zc-about-inner" style={{ padding: '5.5rem 3rem' }}>
        {/* Bio */}
        <div>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '.6rem',
            letterSpacing: '.22em', textTransform: 'uppercase',
            color: 'var(--accent-amber)', marginBottom: '.85rem',
          }}>About</p>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: '1.6rem',
            fontWeight: 700, color: 'var(--text-primary)', marginBottom: '.3rem',
          }}>Phil Myint</h2>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '.62rem',
            letterSpacing: '.15em', textTransform: 'uppercase',
            color: 'var(--accent-amber)', marginBottom: '1.25rem',
          }}>Principal Architect · ZenCloud Global Consultants</p>
          <p style={{
            fontSize: '.88rem', fontWeight: 300, lineHeight: 1.75,
            color: 'var(--navy-dim)', marginBottom: '1rem',
          }}>
            ZenCloud Advisory is a Brisbane-based enterprise architecture and cloud advisory practice.
            We work with leaders navigating complex technology decisions across cloud, security, AI, and transformation.
          </p>
          <p style={{
            fontSize: '.88rem', fontWeight: 300, lineHeight: 1.75,
            color: 'var(--navy-dim)', marginBottom: '1.25rem',
          }}>
            Every engagement starts with the decision — not a framework presentation. We fix the foundation so your investment actually delivers.
          </p>
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
            {pills.map(p => (
              <span key={p} style={{
                fontFamily: 'var(--font-mono)', fontSize: '.58rem',
                letterSpacing: '.08em', color: 'var(--navy-dim)',
                border: '1px solid var(--border)',
                borderRadius: 3, padding: '.22rem .65rem', background: '#ffffff',
              }}>{p}</span>
            ))}
          </div>
        </div>

        {/* Insights */}
        <div>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '.6rem',
            letterSpacing: '.22em', textTransform: 'uppercase',
            color: 'var(--accent-amber)', marginBottom: '.85rem',
          }}>Insights</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {insights.map(i => (
              <div key={i.tag} style={{
                padding: '1.1rem 1.25rem', background: '#ffffff',
                border: '1px solid var(--border)', borderRadius: 5, cursor: 'pointer',
              }}>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: '.58rem',
                  letterSpacing: '.12em', textTransform: 'uppercase',
                  color: 'var(--accent-amber)', marginBottom: '.4rem',
                }}>{i.tag}</p>
                <p style={{
                  fontSize: '.83rem', fontWeight: 500,
                  color: 'var(--text-primary)', lineHeight: 1.4,
                }}>{i.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
