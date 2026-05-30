const channels = [
  {
    name: 'Velocity Publication Library',
    label: 'Research, patterns, guides and artefacts',
    body: 'Rendered public library for research papers, cloud and architecture patterns, diagnostics, guides, specifications, templates, viewpoints, and selected artefacts.',
    href: 'https://zencloudau.github.io/velocity-architecture/publications/',
  },
  {
    name: 'Velocity Research Library',
    label: 'Rendered research papers',
    body: 'Reader-facing HTML research library for working papers, governance analysis, framework comparisons, and source-backed Markdown rendering.',
    href: 'https://velocityarchitectureframework.com/research/',
  },
  {
    name: 'IT Governance Working Paper',
    label: 'Featured paper',
    body: 'A rendered HTML reader page for the comparative analysis of COBIT, ITIL, TOGAF, ISO 38500, NIST CSF, PMBOK, SAFe, and ArchiMate.',
    href: 'https://velocityarchitectureframework.com/research/it-governance-frameworks-australian-public-sector-2025-2026/',
  },
  {
    name: 'Medium',
    label: 'Essays and book material',
    body: 'Long-form architecture essays, decision-system writing, and public book development material.',
    href: 'https://medium.com/@ZencloudAU',
  },
  {
    name: 'Velocity Academy',
    label: 'Structured learning',
    body: 'Courses, practitioner pathways, certification pilots, concepts, resources, and knowledge portal.',
    href: 'https://velocityarchitecture.com.au/',
  },
  {
    name: 'Velocity Framework',
    label: 'Method authority',
    body: 'Decision-first architecture method, viewpoints, artefacts, operating model, and framework documentation.',
    href: 'https://zencloudau.github.io/velocity-architecture/',
  },
]

export default function InsightsSection() {
  return (
    <section id="insights" style={{
      background: 'var(--bg-surface)',
      borderBottom: '1px solid var(--border)',
      padding: '52px 36px',
    }}>
      <div className="container">
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 300,
          letterSpacing: '2.5px', textTransform: 'uppercase',
          color: 'var(--accent-amber)', marginBottom: 8,
        }}>INSIGHTS</p>

        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700,
          letterSpacing: '-0.5px', color: 'var(--text-primary)', marginBottom: 8,
        }}>Publishing lives across the ecosystem</h2>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300,
          color: 'var(--text-muted)', maxWidth: 660, marginBottom: 36,
        }}>
          ZenCloud curates selected advisory perspectives. Research papers, patterns, guides, diagnostics, and selected artefacts open in rendered HTML reader pages, while essays, book material, learning assets, and framework content live in the right ecosystem channel.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {channels.map(channel => (
            <a key={channel.name} href={channel.href} target="_blank" rel="noopener noreferrer" style={{
              background: 'var(--bg-page)', padding: 22,
              borderRadius: 8, border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)', display: 'block',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: 10,
                letterSpacing: '1.5px', textTransform: 'uppercase',
                color: 'var(--accent-amber)', marginBottom: 8,
              }}>{channel.label}</p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
                color: 'var(--text-primary)', marginBottom: 8,
              }}>{channel.name}</p>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 300,
                color: 'var(--text-muted)', lineHeight: 1.7,
              }}>{channel.body}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
