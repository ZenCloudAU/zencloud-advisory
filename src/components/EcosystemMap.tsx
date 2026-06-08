const nodes = [
  {
    role: 'ADVISORY · ENTRY POINT',
    name: 'ZenCloud™',
    desc: 'Client entry. Strategy, leadership, security, oversight. Routes to StudioSix for delivery.',
    link: 'https://www.zencloud.com.au',
    linkText: 'zencloud.com.au ↗',
    anchor: true,
  },
  {
    role: 'DELIVERY STUDIO',
    name: 'StudioSix™',
    desc: 'Architecture-led AI delivery. Intake → artefacts → execution → handover.',
    link: 'https://studiosix.com.au',
    linkText: 'studiosix.com.au ↗',
    anchor: false,
  },
  {
    role: 'FRAMEWORK · OPEN SOURCE',
    name: 'Velocity™',
    desc: 'Six viewpoints, 18 artefacts. Decision-first EA. Free to use.',
    link: 'https://velocityarchitectureframework.com/',
    linkText: 'velocityarchitectureframework.com ↗',
    anchor: false,
  },
  {
    role: 'DELIVERY GOVERNANCE',
    name: 'PMO Portal',
    desc: 'Delivery mobilisation, controlled artefact lifecycle, and client transparency workspace. Part of the StudioSix delivery layer.',
    link: null,
    linkText: 'StudioSix engagement',
    anchor: false,
  },
]

export default function EcosystemMap() {
  return (
    <section id="ecosystem" style={{
      background: 'var(--bg-surface)',
      borderBottom: '1px solid var(--border)',
      padding: '52px 36px',
    }}>
      <div className="container">
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 300,
          letterSpacing: '2.5px', textTransform: 'uppercase',
          color: 'var(--accent-amber)', marginBottom: 8,
        }}>ECOSYSTEM</p>

        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700,
          letterSpacing: '-0.5px', color: 'var(--text-primary)', marginBottom: 8,
        }}>The ZenCloud ecosystem</h2>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300,
          color: 'var(--text-muted)', maxWidth: 480, marginBottom: 36,
        }}>Three connected layers. One advisory parent. Clients enter through ZenCloud and route to the right layer.</p>

        <div className="zc-ecosystem-grid">
          {nodes.map(node => (
            <div key={node.name}
              style={{
                background: 'var(--bg-page)',
                border: node.anchor ? '1.5px solid var(--border-anchor)' : '1px solid var(--border)',
                borderRadius: 8, padding: 20,
                boxShadow: 'var(--shadow-sm)',
                transition: 'box-shadow 150ms, background-color 150ms, transform 150ms',
                transform: 'translateY(0)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--bg-surface)'
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--bg-page)'
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 300,
                letterSpacing: '2px', textTransform: 'uppercase',
                color: node.anchor ? 'var(--accent-amber)' : 'var(--text-ghost)',
                marginBottom: 8,
              }}>{node.role}</p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500,
                color: 'var(--text-primary)', marginBottom: 6,
              }}>{node.name}</p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 300,
                color: 'var(--text-muted)', lineHeight: 1.65,
              }}>{node.desc}</p>
              {node.link ? (
                <a href={node.link} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10,
                  color: 'var(--accent-amber)', textDecoration: 'underline',
                  textUnderlineOffset: 2, marginTop: 10, display: 'block',
                }}>{node.linkText}</a>
              ) : (
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10,
                  color: 'var(--accent-amber)', textDecoration: 'underline',
                  textUnderlineOffset: 2, marginTop: 10, display: 'block',
                  pointerEvents: 'none', opacity: 0.5,
                }}>{node.linkText}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
