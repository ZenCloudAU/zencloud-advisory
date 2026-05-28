const nodes = [
  {
    role: 'ADVISORY · ENTRY POINT',
    name: 'ZenCloud Advisory',
    desc: 'Client entry. Strategy, leadership, security, oversight. Routes to StudioSix for delivery.',
    link: null,
    linkText: 'zencloud.com.au',
    anchor: true,
  },
  {
    role: 'DELIVERY STUDIO',
    name: 'StudioSix',
    desc: 'Architecture-led AI delivery. Intake → artefacts → execution → handover.',
    link: 'https://studiosix.com.au',
    linkText: 'studiosix.com.au ↗',
    anchor: false,
  },
  {
    role: 'FRAMEWORK · OPEN SOURCE',
    name: 'Velocity Architecture Framework™',
    desc: 'Six viewpoints, 18 artefacts. Decision-first EA. Free to use.',
    link: 'https://velocityarchitectureframework.com',
    linkText: 'velocityarchitectureframework.com ↗',
    anchor: false,
  },
  {
    role: 'AI TOOLING',
    name: 'VAF Agentic Architect',
    desc: 'AI agent generating board-ready architecture packs across all six viewpoints. Brief in, governed artefacts out.',
    link: 'https://velocityarchitectureframework.com/app/portal.html',
    linkText: 'velocityarchitectureframework.com ↗',
    anchor: false,
  },
  {
    role: 'PRACTITIONER METHOD',
    name: 'VAF·SA',
    desc: 'Solution architecture practitioner framework. Six modules, two pillars, decision-first scoping through delivery.',
    link: 'https://zencloudau.github.io/vaf-sa',
    linkText: 'zencloudau.github.io/vaf-sa ↗',
    anchor: false,
  },
  {
    role: 'EA TOOLING · TOGAF 10',
    name: 'EA Artefact Generator',
    desc: 'TOGAF 10 ADM aligned. 29 artefact types. Production-quality EA outputs across every ADM phase.',
    link: 'https://ea.velocityarchitecture.com.au',
    linkText: 'ea.velocityarchitecture.com.au ↗',
    anchor: false,
  },
  {
    role: 'LEARNING · CERTIFICATION',
    name: 'Velocity Architecture Academy',
    desc: 'Courses, certification pathways, books, lexicon, and practitioner resources for architecture leaders and delivery teams.',
    link: 'https://velocityarchitecture.com.au',
    linkText: 'velocityarchitecture.com.au ↗',
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
        }}>The Velocity Architecture ecosystem</h2>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300,
          color: 'var(--text-muted)', maxWidth: 480, marginBottom: 36,
        }}>Eight connected nodes. One advisory parent. Clients enter through ZenCloud and route to the right layer.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
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
