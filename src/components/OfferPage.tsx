import type { EngagementOffer } from '../data/offers'
import { engagementOffers } from '../data/offers'

interface OfferPageProps {
  offer: EngagementOffer
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 4, padding: 22 }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 400, letterSpacing: '1.2px', textTransform: 'uppercase', color: 'var(--accent-amber)', marginBottom: 10 }}>{title}</p>
      <ul style={{ paddingLeft: 18, margin: 0, color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.8 }}>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}

export default function OfferPage({ offer }: OfferPageProps) {
  const related = engagementOffers.filter(item => item.slug !== offer.slug)

  return (
    <main>
      <section style={{ background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)', padding: '68px 36px 52px' }}>
        <div className="container">
          <a href="/" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent-amber)', textDecoration: 'underline', textUnderlineOffset: 2, display: 'inline-block', marginBottom: 20 }}>Back to ZenCloud Advisory</a>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 300, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--accent-amber)', marginBottom: 16 }}>{offer.label}</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(38px, 5vw, 62px)', fontWeight: 900, letterSpacing: '-1.5px', lineHeight: 1.08, color: 'var(--text-primary)', marginBottom: 18 }}>{offer.title}</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 300, lineHeight: 1.8, color: 'var(--text-secondary)', maxWidth: 760, marginBottom: 26 }}>{offer.summary}</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="mailto:info@zencloud.com.au" style={{ display: 'inline-block', background: 'var(--footer-bg)', color: 'var(--bg-page)', borderRadius: 3, padding: '12px 18px', fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>{offer.cta}</a>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 300, color: 'var(--text-muted)' }}>{offer.duration}</span>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-page)', borderBottom: '1px solid var(--border)', padding: '52px 36px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          <ListBlock title="Trigger situations" items={offer.whenToUse} />
          <ListBlock title="Outputs" items={offer.outputs} />
          <ListBlock title="How the work runs" items={offer.process} />
          <ListBlock title="Typical follow-on" items={offer.followOn} />
        </div>
      </section>

      <section style={{ background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)', padding: '52px 36px' }}>
        <div className="container">
          <div style={{ background: 'var(--bg-page)', border: '1px solid var(--border)', borderLeft: '3px solid var(--accent-amber)', borderRadius: 4, padding: 22, marginBottom: 28 }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 8 }}>How this fits the ecosystem</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 300, color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{offer.velocityMapping}</p>
          </div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 300, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--text-ghost)', marginBottom: 8 }}>OTHER ENGAGEMENT PATHS</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, letterSpacing: '-0.5px', color: 'var(--text-primary)', marginBottom: 24 }}>Related offers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
            {related.map(item => (
              <a key={item.slug} href={`/${item.slug}`} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 4, padding: 16, display: 'block', textDecoration: 'none' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent-amber)', marginBottom: 8 }}>{item.label}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.5 }}>{item.title}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
