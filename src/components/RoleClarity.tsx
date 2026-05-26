const cells = [
  {
    tag: 'ENTRY POINT',
    name: 'ZenCloud Advisory',
    body: 'Strategic framing, cloud governance, security posture, architecture leadership, and programme oversight. The advisory practice that all clients engage first.',
    linkText: 'You are here',
    href: null,
  },
  {
    tag: 'DELIVERY STUDIO',
    name: 'StudioSix',
    body: 'Architecture-led delivery — intake through handover. Governed artefacts, traceable decisions, client transparency, and controlled execution. Routed from ZenCloud Advisory.',
    linkText: 'studiosix.com.au ↗',
    href: 'https://studiosix.com.au',
  },
  {
    tag: 'METHOD',
    name: 'Velocity Architecture Framework™',
    body: 'The shared open-source EA method. Six viewpoints, 18 artefacts, AI-powered agent. Free to use. The decision-first operating model for both practices.',
    linkText: 'velocityarchitectureframework.com ↗',
    href: 'https://velocityarchitectureframework.com',
  },
]

export default function RoleClarity() {
  return (
    <section id="advisory" style={{
      background: 'var(--bg-surface)',
      borderBottom: '1px solid var(--border)',
      padding: '52px 36px',
    }}>
      <div className="container">
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 300,
          letterSpacing: '2.5px', textTransform: 'uppercase',
          color: 'var(--text-ghost)', marginBottom: 8,
        }}>ROLE CLARITY</p>

        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700,
          letterSpacing: '-0.5px', color: 'var(--text-primary)', marginBottom: 8,
        }}>One ecosystem. Three roles.</h2>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300,
          color: 'var(--text-muted)', maxWidth: 480, marginBottom: 36,
        }}>ZenCloud advises. StudioSix produces. Velocity decides. Every client engagement starts here.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {cells.map(cell => (
            <div key={cell.tag}
              style={{
                background: 'var(--bg-surface)', padding: 26,
                borderRadius: 8, border: '1px solid var(--border)',
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
                letterSpacing: '2px', textTransform: 'uppercase',
                color: 'var(--text-ghost)', marginBottom: 10,
              }}>{cell.tag}</p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
                color: 'var(--text-primary)', marginBottom: 10,
              }}>{cell.name}</p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 300,
                color: 'var(--text-muted)', lineHeight: 1.7,
              }}>{cell.body}</p>
              {cell.href ? (
                <a href={cell.href} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10,
                  color: 'var(--accent-amber)', textDecoration: 'underline',
                  textUnderlineOffset: 2, marginTop: 14, display: 'block',
                }}>{cell.linkText}</a>
              ) : (
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10,
                  color: 'var(--accent-amber)', marginTop: 14, display: 'block',
                }}>{cell.linkText}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
