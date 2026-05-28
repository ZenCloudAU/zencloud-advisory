const tools = [
  {
    name: 'EA Artefact Generator',
    role: 'Architecture artefact workspace',
    body: 'Structured enterprise architecture outputs, board-pack material, and decision-ready artefacts for architecture teams.',
    href: 'https://ea.velocityarchitecture.com.au',
  },
  {
    name: 'PMO Portal',
    role: 'Delivery governance workspace',
    body: 'Delivery mobilisation, intake, governance visibility, artefact lifecycle control, and client transparency.',
    href: null,
  },
  {
    name: 'VAF-SA',
    role: 'Solution architecture method',
    body: 'Practitioner pathway for solution architects moving from scoping to decision-ready delivery artefacts.',
    href: 'https://zencloudau.github.io/vaf-sa/',
  },
  {
    name: 'VSF Match',
    role: 'Career readiness engine',
    body: 'CV-to-role alignment, capability scoring, gap analysis, and personalised learning-path routing.',
    href: 'https://zencloudau.github.io/vsf-match/',
  },
  {
    name: 'Velocity Academy',
    role: 'Learning and certification layer',
    body: 'Courses, certification pathways, practitioner resources, books, lexicon, and structured learning assets.',
    href: 'https://velocityarchitecture.com.au/',
  },
  {
    name: 'ZenCloudAU GitHub',
    role: 'Source-of-truth build estate',
    body: 'Public repositories for the Velocity Architecture ecosystem, Academy, tools, courses, and advisory platform.',
    href: 'https://github.com/ZenCloudAU',
  },
]

export default function ToolsSection() {
  return (
    <section id="tools" style={{
      background: 'var(--bg-alt)',
      borderBottom: '1px solid var(--border)',
      padding: '52px 36px',
    }}>
      <div className="container">
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 300,
          letterSpacing: '2.5px', textTransform: 'uppercase',
          color: 'var(--text-ghost)', marginBottom: 8,
        }}>TOOLS</p>

        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700,
          letterSpacing: '-0.5px', color: 'var(--text-primary)', marginBottom: 8,
        }}>Practical architecture tools</h2>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300,
          color: 'var(--text-muted)', maxWidth: 560, marginBottom: 36,
        }}>
          ZenCloud routes clients and practitioners to the right ecosystem asset: artefacts, governance, learning, career readiness, and public source repositories.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {tools.map(tool => (
            <div key={tool.name} style={{
              background: 'var(--bg-surface)', padding: 22,
              borderRadius: 8, border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: 10,
                letterSpacing: '1.5px', textTransform: 'uppercase',
                color: 'var(--accent-amber)', marginBottom: 8,
              }}>{tool.role}</p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
                color: 'var(--text-primary)', marginBottom: 8,
              }}>{tool.name}</p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 300,
                color: 'var(--text-muted)', lineHeight: 1.7,
              }}>{tool.body}</p>
              {tool.href ? (
                <a href={tool.href} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10,
                  color: 'var(--accent-amber)', textDecoration: 'underline',
                  textUnderlineOffset: 2, marginTop: 12, display: 'block',
                }}>Open ↗</a>
              ) : (
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10,
                  color: 'var(--text-ghost)', marginTop: 12, display: 'block',
                }}>Available through engagement</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
