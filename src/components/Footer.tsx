export default function Footer() {
  return (
    <footer id="contact" style={{
      background: 'var(--footer-bg)',
      padding: '28px 36px',
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 700 }}>
          <span style={{ color: '#f8fafc' }}>Zen</span>
          <span style={{ color: 'var(--accent-gold)' }}>Cloud</span>
          <span style={{ color: '#f8fafc' }}> Advisory</span>
        </span>

        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 300,
          letterSpacing: '1.5px', textTransform: 'uppercase',
          color: 'var(--text-footer)',
        }}>
          SPRING HILL · BRISBANE · QLD
        </span>

        <a href="mailto:info@zencloud.com.au" style={{
          fontFamily: 'var(--font-body)', fontSize: 13,
          color: '#475569',
        }}>
          info@zencloud.com.au
        </a>
      </div>
    </footer>
  )
}
