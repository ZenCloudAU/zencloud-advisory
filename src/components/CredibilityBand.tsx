const partners = [
  {
    name: 'Microsoft',
    badge: 'Microsoft Partner Network',
    logo: (
      <svg width="20" height="20" viewBox="0 0 20 20">
        <rect x="0"    y="0"    width="9.3" height="9.3" fill="#f25022"/>
        <rect x="10.7" y="0"    width="9.3" height="9.3" fill="#7fba00"/>
        <rect x="0"    y="10.7" width="9.3" height="9.3" fill="#00a4ef"/>
        <rect x="10.7" y="10.7" width="9.3" height="9.3" fill="#ffb900"/>
      </svg>
    ),
  },
  {
    name: 'Amazon Web Services',
    badge: 'AWS Partner Network',
    logo: (
      <svg width="38" height="20" viewBox="0 0 38 20">
        <text x="0" y="13" fontFamily="Arial Black,Arial,sans-serif"
          fontSize="12" fontWeight="900" fill="#FF9900">aws</text>
        <path d="M1 16.5 C6 19.5 12 20.5 19 19 C26 17.5 32 18.5 37 16.5"
          stroke="#FF9900" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Google Cloud',
    badge: 'Google Cloud Partner',
    logo: (
      <svg width="20" height="20" viewBox="0 0 20 20">
        <rect x="0"  y="0"  width="9.3" height="9.3" fill="#4285F4"/>
        <rect x="10.7" y="0"  width="9.3" height="9.3" fill="#EA4335"/>
        <rect x="0"  y="10.7" width="9.3" height="9.3" fill="#34A853"/>
        <rect x="10.7" y="10.7" width="9.3" height="9.3" fill="#FBBC05"/>
      </svg>
    ),
  },
]

const divider = (
  <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.12)', flexShrink: 0 }} />
)

export default function CredibilityBand() {
  return (
    <div style={{
      background: 'var(--navy-bg)',
      padding: '1.75rem 3rem',
    }}>
      <p style={{
        fontFamily: 'var(--font-mono)', fontSize: '.58rem',
        letterSpacing: '.22em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.3)', marginBottom: '.85rem',
      }}>Partner ecosystem</p>

      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap',
      }}>
        {/* Partner logos */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.25rem', flexWrap: 'wrap' }}>
          {partners.map((p, i) => (
            <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: '2.25rem' }}>
              {i > 0 && divider}
              <div style={{ display: 'flex', alignItems: 'center', gap: '.65rem' }}>
                {p.logo}
                <div>
                  <div style={{
                    fontFamily: 'var(--font-body)', fontSize: '.8rem',
                    fontWeight: 600, color: 'rgba(255,255,255,0.72)',
                  }}>{p.name}</div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '.55rem',
                    letterSpacing: '.1em', textTransform: 'uppercase',
                    color: 'rgba(232,99,10,0.9)',
                    border: '1px solid rgba(232,99,10,0.3)',
                    padding: '.12rem .45rem', borderRadius: 2,
                    background: 'rgba(232,99,10,0.08)', display: 'inline-block',
                    marginTop: '.15rem',
                  }}>{p.badge}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: positioning */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '.63rem',
            color: 'rgba(255,255,255,0.38)', letterSpacing: '.05em', lineHeight: 1.65,
          }}>
            <strong style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>Brisbane-based</strong><br />
            National &amp; Asia-Pacific engagements
          </div>
          {divider}
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '.63rem',
            color: 'rgba(255,255,255,0.38)', letterSpacing: '.05em', lineHeight: 1.65,
          }}>
            Principal Architect<br />
            <strong style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>Enterprise delivery background</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
