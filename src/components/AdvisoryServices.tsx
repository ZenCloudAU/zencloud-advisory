import React from 'react'

const services = [
  {
    num: '01 — ENTERPRISE',
    title: 'Enterprise Architecture Advisory',
    body: 'Target-state direction, decision governance, capability alignment, architecture board support, and transformation framing for complex organisations.',
  },
  {
    num: '02 — SOLUTION',
    title: 'Solution Architecture & Design Authority',
    body: 'Practical solution architecture for delivery teams: options, decisions, risks, constraints, guardrails, and implementation-ready artefacts.',
  },
  {
    num: '03 — CLOUD',
    title: 'Cloud Strategy & Platform Modernisation',
    body: 'Cloud direction, platform governance, operating model design, migration framing, and modernisation roadmaps aligned to business outcomes.',
  },
  {
    num: '04 — SECURITY',
    title: 'Security, Identity & Governance',
    body: 'Security posture, identity, access, control design, risk framing, and governance embedded into architecture decisions from the start.',
  },
  {
    num: '05 — AI DELIVERY',
    title: 'AI-Assisted Delivery Enablement',
    body: 'Safe adoption of AI-assisted architecture workflows, prompts, artefact generation, review controls, and decision traceability.',
  },
  {
    num: '06 — RECOVERY',
    title: 'Program Recovery & Delivery Governance',
    body: 'Restores clarity in fragmented or at-risk delivery through decision flow, governance cadence, traceability, and executive reporting.',
  },
]

function Card({ num, title, body }: typeof services[0]) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#ffffff', padding: '2rem 1.75rem',
        position: 'relative',
        boxShadow: hovered ? 'var(--shadow-hover)' : 'none',
        zIndex: hovered ? 1 : 'auto',
        transition: 'box-shadow 200ms',
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: hovered ? 'var(--accent-amber)' : 'transparent',
        transition: 'background 200ms',
      }} />
      <p style={{
        fontFamily: 'var(--font-mono)', fontSize: '.58rem',
        letterSpacing: '.12em', color: 'var(--accent-amber)', marginBottom: '.85rem',
      }}>{num}</p>
      <p style={{
        fontFamily: 'var(--font-body)', fontSize: '.88rem',
        fontWeight: 600, color: 'var(--text-primary)', marginBottom: '.6rem', lineHeight: 1.3,
      }}>{title}</p>
      <p style={{
        fontSize: '.78rem', fontWeight: 300, lineHeight: 1.65, color: 'var(--navy-dim)',
      }}>{body}</p>
    </div>
  )
}

export default function AdvisoryServices() {
  return (
    <section id="services" style={{
      background: 'var(--bg-alt)', borderTop: '1px solid var(--border)',
    }}>
      <div className="container" style={{ padding: '5.5rem 3rem' }}>
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: '.6rem',
          letterSpacing: '.22em', textTransform: 'uppercase',
          color: 'var(--accent-amber)', marginBottom: '.85rem',
        }}>What we provide</p>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)',
          fontWeight: 700, lineHeight: 1.2, color: 'var(--text-primary)', marginBottom: '.75rem',
        }}>Six advisory disciplines. One firm.</h2>
        <p style={{
          fontSize: '.92rem', fontWeight: 300, lineHeight: 1.7,
          color: 'var(--navy-dim)', maxWidth: 520, marginBottom: '2.5rem',
        }}>Senior advisory for organisations that need architecture decisions to become governed execution — not more disconnected artefacts.</p>

        {/* 3×2 border-grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1, background: 'var(--border)',
          border: '1px solid var(--border)', borderRadius: 6, overflow: 'hidden',
        }}>
          {services.map(s => <Card key={s.num} {...s} />)}
        </div>
      </div>
    </section>
  )
}
