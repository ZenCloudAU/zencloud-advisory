const cells = [
  { tag: 'VP1', body: 'Direction & governance', blue: false },
  { tag: 'VP2', body: 'Solution strategy', blue: false },
  { tag: 'VP3', body: 'Solution design', blue: false },
  { tag: 'VP4', body: 'Delivery velocity', blue: false },
  { tag: 'VP5', body: 'Operating rhythm', blue: false },
  { tag: 'V2',  body: 'Agentic Architect live · Azure · TypeScript', blue: true },
]

export default function VafStrip() {
  return (
    <section style={{
      background: 'var(--bg-surface)',
      borderBottom: '1px solid var(--border)',
      padding: '52px 36px',
    }}>
      <div className="container">
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 300,
          letterSpacing: '2.5px', textTransform: 'uppercase',
          color: 'var(--accent-amber)', marginBottom: 8,
        }}>VAF™ · OPEN SOURCE</p>

        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700,
          letterSpacing: '-0.5px', color: 'var(--text-primary)', marginBottom: 8,
        }}>The method that runs the ecosystem</h2>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300,
          color: 'var(--text-muted)', maxWidth: 480, marginBottom: 32,
        }}>Free to use. Aligned to ISO/IEC/IEEE 42010:2022. Powers ZenCloud Advisory and StudioSix delivery.</p>

        <div style={{ display: 'flex', gap: 12 }}>
          {cells.map(cell => (
            <div key={cell.tag} style={{
              background: 'var(--bg-page)', flex: 1, padding: '16px 18px',
              borderRadius: 8, border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{
                  width: 5, height: 5, borderRadius: '50%',
                  background: cell.blue ? 'var(--accent-blue)' : 'var(--accent-amber)',
                  display: 'inline-block', flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.5px',
                  color: cell.blue ? 'var(--accent-blue)' : 'var(--accent-amber)',
                }}>{cell.tag}</span>
              </div>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 300,
                color: 'var(--text-muted)', marginTop: 6,
              }}>{cell.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
