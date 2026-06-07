export default function ClientJourneyBand() {
  return (
    <div style={{
      background: 'var(--bg-alt)',
      borderTop: '1px solid var(--border-strong)',
      borderBottom: '1px solid var(--border-strong)',
      padding: '14px 36px',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 400,
          letterSpacing: '2px', textTransform: 'uppercase',
          color: 'var(--accent-amber-dark)',
        }}>
          CLIENT JOURNEY
        </span>
        <span style={{ color: 'var(--accent-amber)', fontSize: 16 }}>→</span>
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 300, lineHeight: 1.5,
          color: 'var(--text-secondary)',
        }}>
          Start with ZenCloud. Frame the decision. Use StudioSix and Velocity when the work needs governed delivery.
        </span>
      </div>
    </div>
  )
}
