export interface EngagementOffer {
  slug: string
  label: string
  title: string
  shortTitle: string
  duration: string
  audience: string
  problem: string
  summary: string
  whenToUse: string[]
  outputs: string[]
  process: string[]
  followOn: string[]
  velocityMapping: string
  cta: string
}

export const engagementOffers: EngagementOffer[] = [
  {
    slug: 'architecture-decision-health-check',
    label: '01 — START HERE',
    title: 'Architecture Decision Health Check',
    shortTitle: 'Health Check',
    duration: '5 days or 2–4 weeks',
    audience: 'CIOs, CTOs, Heads of Architecture, PMO leaders, transformation executives, and technology partners.',
    problem: 'Use this when a technology decision is stuck, unclear, risky, or spread across too many stakeholders.',
    summary: 'A short diagnostic that identifies where architecture decisions are blocked, what risk is unresolved, and what practical action is needed next.',
    whenToUse: [
      'a major technology decision is unclear or politically stuck',
      'cloud, AI, cyber, platform, vendor, or delivery options are being debated',
      'delivery teams are waiting for direction',
      'the decision trail is incomplete or difficult to explain',
      'executives need a clear view before funding, approval, or escalation',
    ],
    outputs: [
      'Customer Impact Statement',
      'decision-flow map',
      'risk and blocker view',
      'stakeholder concern summary',
      'top decision questions requiring action',
      '90-day action plan',
    ],
    process: [
      'sponsor conversation and context capture',
      'review of available artefacts, risks, decisions, and delivery context',
      'targeted stakeholder interviews where required',
      'decision-flow diagnosis',
      'plain-language findings and recommended next step',
    ],
    followOn: [
      'Architecture Decision Sprint',
      'AI / Cloud / Cyber Readiness Sprint',
      'Fractional Enterprise Architect / Design Authority',
    ],
    velocityMapping: 'Internally mapped to Velocity Executive Architecture FastStart.',
    cta: 'Book the Health Check',
  },
  {
    slug: 'architecture-decision-sprint',
    label: '02 — SPRINT',
    title: 'Architecture Decision Sprint',
    shortTitle: 'Decision Sprint',
    duration: '4 weeks',
    audience: 'Architecture, delivery, PMO, data, security, and platform teams with a defined decision question.',
    problem: 'Use this when options need to be compared, decisions need to be recorded, and delivery needs an agreed direction.',
    summary: 'A structured sprint that turns a defined decision question into options, trade-offs, architecture decision records, and an executive-ready recommendation.',
    whenToUse: [
      'there are multiple viable options and no agreed decision path',
      'architecture review is producing artefacts but not clear decisions',
      'trade-offs need to be visible to executives',
      'risk, cost, time, security, and delivery impact need to be compared',
      'the team needs a defensible decision record before execution',
    ],
    outputs: [
      'decision register',
      'options and trade-off matrix',
      'Architecture Decision Records',
      'governance model',
      'risk and assumptions register',
      'executive briefing pack',
    ],
    process: [
      'define the decision question and acceptance criteria',
      'map stakeholders, constraints, options, and evidence gaps',
      'evaluate options through business, data, security, AI, and governance lenses',
      'record the decision rationale and consequences',
      'handover the decision pack for governance and execution',
    ],
    followOn: [
      'Fractional Design Authority',
      'PMO / Governance Alignment',
      'Architecture Board Support',
    ],
    velocityMapping: 'Internally mapped to Velocity Architecture Decision Sprint.',
    cta: 'Discuss a Decision Sprint',
  },
  {
    slug: 'ai-cloud-cyber-readiness',
    label: '03 — READINESS',
    title: 'AI / Cloud / Cyber Readiness Sprint',
    shortTitle: 'Readiness Sprint',
    duration: '1–3 weeks',
    audience: 'Leaders dealing with AI adoption, cloud modernisation, security uplift, data readiness, or platform change.',
    problem: 'Use this when the organisation needs a plain view of readiness, risk, governance gaps, and next actions.',
    summary: 'A focused readiness sprint for organisations that need to understand whether their governance, data, security, cloud, and delivery foundations can support the next decision.',
    whenToUse: [
      'AI adoption is being discussed without clear controls',
      'cloud or platform modernisation is creating governance questions',
      'security and identity risks need to be considered earlier',
      'data readiness is assumed but not validated',
      'leaders need a practical readiness view before investment',
    ],
    outputs: [
      'readiness scorecard',
      'security and data risk view',
      'AI governance boundaries',
      'architecture guardrails',
      'decision and dependency summary',
      'prioritised roadmap',
    ],
    process: [
      'confirm readiness scope and target decision',
      'review current governance, data, security, and cloud context',
      'identify exposure across architecture and delivery',
      'define practical guardrails and next decisions',
      'produce a plain-language readiness and action pack',
    ],
    followOn: [
      'Architecture Decision Sprint',
      'AI Governance Workshop',
      'Fractional Architecture Support',
    ],
    velocityMapping: 'Internally mapped to Velocity AI Enablement and Data/Security/Business Readiness Assessment.',
    cta: 'Assess Readiness',
  },
  {
    slug: 'fractional-enterprise-architect',
    label: '04 — RETAINER',
    title: 'Fractional Enterprise Architect / Design Authority',
    shortTitle: 'Fractional EA',
    duration: 'Monthly',
    audience: 'Organisations that need senior architecture judgement without hiring a full-time executive architect.',
    problem: 'Use this when architecture decisions, reviews, escalations, or governance forums need ongoing senior support.',
    summary: 'Ongoing senior architecture support for decision review, design authority, executive advice, governance cadence, and delivery assurance.',
    whenToUse: [
      'the organisation needs senior architecture input but not a full-time hire',
      'programs require independent design authority',
      'architecture boards need stronger decision traceability',
      'delivery teams need practical architecture escalation support',
      'executives need a trusted architecture advisor across initiatives',
    ],
    outputs: [
      'architecture board support',
      'design authority review',
      'ADR and decision-log governance',
      'executive advice',
      'delivery assurance',
      'monthly priority and risk summary',
    ],
    process: [
      'agree monthly cadence and scope boundaries',
      'establish decision and escalation channels',
      'review active initiatives, risks, and architecture questions',
      'support governance forums and critical reviews',
      'provide ongoing executive and delivery-facing advice',
    ],
    followOn: [
      'Architecture Governance Uplift',
      'Decision Sprint Portfolio',
      'Partner Architecture Office',
    ],
    velocityMapping: 'Internally mapped to Velocity Advisory Retainer.',
    cta: 'Discuss Retainer Support',
  },
  {
    slug: 'partner-architecture-office',
    label: '05 — PARTNER',
    title: 'Partner Architecture Office',
    shortTitle: 'Partner Office',
    duration: 'Scoped or ongoing',
    audience: 'MSPs, cloud partners, cyber consultancies, ERP/SAP firms, SaaS vendors, and PMO/delivery consultancies.',
    problem: 'Use this when a partner needs senior architecture depth behind or alongside its own client delivery.',
    summary: 'A partner-facing architecture capability for firms that need senior advisory, discovery, governance, decision support, and delivery assurance without building the function internally.',
    whenToUse: [
      'a partner has client demand but lacks senior architecture capacity',
      'architecture discovery is needed before delivery commitment',
      'client delivery needs governance and decision traceability',
      'a white-label or co-branded advisory model is useful',
      'delivery risk needs independent architecture escalation support',
    ],
    outputs: [
      'white-label architecture support',
      'client discovery and framing',
      'governance and artefact packs',
      'risk and decision review',
      'delivery escalation support',
      'partner-ready advisory collateral',
    ],
    process: [
      'confirm partner model and commercial boundaries',
      'define client-facing role and operating cadence',
      'support discovery, diagnosis, and decision framing',
      'produce agreed client or partner artefacts',
      'review follow-on opportunity and delivery governance',
    ],
    followOn: [
      'White-label delivery model',
      'Subcontracted architecture delivery',
      'Partner channel program',
    ],
    velocityMapping: 'Internally mapped to Partner Engagement, Channel Partner, White Label, and Subcontracted Delivery models.',
    cta: 'Partner with ZenCloud',
  },
]

export function getOfferBySlug(slug: string) {
  return engagementOffers.find(offer => offer.slug === slug)
}
