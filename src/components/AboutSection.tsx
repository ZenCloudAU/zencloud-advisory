export default function AboutSection() {
  return (
    <section id="about" style={{
      background: 'var(--bg-alt)',
      borderBottom: '1px solid var(--border)',
      padding: '52px 36px',
      scrollMarginTop: 84,
    }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 36, alignItems: 'start' }}>
        <div>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 300,
            letterSpacing: '2.5px', textTransform: 'uppercase',
            color: 'var(--text-ghost)', marginBottom: 8,
          }}>ABOUT</p>

          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700,
            letterSpacing: '-0.5px', color: 'var(--text-primary)', marginBottom: 8,
          }}>Senior architecture judgement for complex change.</h2>
        </div>

        <div>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300,
            color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 18,
          }}>
            ZenCloud Advisory is led by Phil Myint, a Brisbane-based enterprise and solution architecture leader with deep experience across cloud transformation, cybersecurity uplift, data migration, managed services, and complex delivery recovery.
          </p>

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300,
            color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 18,
          }}>
            The practice helps executives and delivery teams simplify complex technology choices, make accountable decisions, and move from strategy to controlled execution.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12, marginTop: 24 }}>
            {['Enterprise architecture', 'Cloud and security', 'AI-assisted delivery'].map(item => (
              <div key={item} style={{
                background: 'var(--bg-surface)', border: '1px solid var(--border)',
                borderRadius: 8, padding: 14,
              }}>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10,
                  color: 'var(--accent-amber)', lineHeight: 1.5,
                }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
