// ─────────────────────────────────────────────────────────────────────────
//  VSOURCE site content
//  Edit this one file to change the site. Then commit + push; GitHub Actions
//  rebuilds and deploys to vsource.net automatically.
//
//  Positioning: vsource = dedicated offshore SOURCING TEAMS.
//  Not hourly individuals (that is Squaremoon). Not tech-first (Starcircle).
//  Not software (TalentDash). A managed team that extends your recruiting.
//  Brand source of truth: 14 platform/vsource/brand/vsource-brand-modern.md
// ─────────────────────────────────────────────────────────────────────────

export const meta = {
  title: 'vsource · Dedicated offshore sourcing teams',
  description:
    'vsource gives your recruiting function a dedicated offshore team for sourcing, desktop research, data annotation and resume formatting, run as an extension of your business. Not freelancers. Not software. A team that learns how you hire.',
  domain: 'vsource.net',
};

export const brand = { name: 'vsource' };

export const hero = {
  kicker: 'Dedicated offshore sourcing teams',
  headline: ['Your sourcing team,', 'offshore,', 'built around you.'],
  lede: 'vsource embeds a dedicated offshore team inside your recruiting function. Sourcing, research and pipeline support, run as one of your own. Not hourly freelancers. Not another tool. A team that learns how you hire.',
  ctaPrimary: { label: 'Build your team', href: '#contact' },
  ctaSecondary: { label: 'How it works', href: '#services' },
};

export const problem = {
  title: 'The gap a dedicated team fills',
  points: [
    'In-house sourcers are expensive and slow to hire, and hard to keep busy when demand dips.',
    'Freelancers and hourly platforms give you hands for a task, but no continuity. Every role starts from scratch.',
    'Traditional offshore shops push volume, not judgment, and never learn how you hire.',
    'So your best recruiters are stuck searching, when they should be closing.',
  ],
};

// What the dedicated team runs for you. Desk-based, no phone work.
export const services = [
  { n: '01', title: 'Talent sourcing', body: 'Deep, role-specific candidate pools and long lists, built every day and mapped to how you hire.' },
  { n: '02', title: 'Desktop research', body: 'Market, company and talent research, including org and competitor mapping, done at the desk.' },
  { n: '03', title: 'Data annotation', body: 'The human in the loop for AI: labelling, verification and quality, at scale.' },
  { n: '04', title: 'Resume formatting', body: 'CVs reformatted and standardised to your template, with fast, consistent turnaround.' },
];

export const different = {
  title: 'A team, not a transaction',
  points: [
    { title: 'Dedicated, not pooled', body: 'The same team every day, learning your roles, your tone and your bar. Continuity, not a queue.' },
    { title: 'A team, not a freelancer', body: 'Managed, trained and coached as one unit. You get output and accountability, not a person to manage.' },
    { title: 'People-led, not a platform', body: 'Real sourcers making judgment calls. Technology serves the team, it does not replace it.' },
    { title: 'Offshore economics', body: 'Senior-quality sourcing at a cost structure that in-house hiring cannot match.' },
    { title: 'Scales with demand', body: 'Add capacity for a hiring surge, dial it back when it is quiet. No permanent headcount risk.' },
  ],
};

// ── Forms ──────────────────────────────────────────────────────────────
// Backend: Web3Forms (https://web3forms.com) — free, unlimited, no account.
// Destination inbox: info@vsource.net. TO ACTIVATE: generate the access key at
// web3forms.com using info@vsource.net and paste it below. Both forms share the
// one key; the subject line tells them apart. On success the visitor is
// redirected to /thanks. Until a real key is set, the forms will not deliver.
export const forms = {
  endpoint: 'https://api.web3forms.com/submit',
  accessKey: 'REPLACE_WITH_WEB3FORMS_KEY_FOR_info@vsource.net',
  redirect: 'https://vsource.net/thanks',
};

export const contact = {
  title: 'Build your team',
  lede: 'Tell us what you are hiring for and the shape of the gap. We will scope a dedicated offshore team around it.',
  subject: 'New vsource enquiry (Build your team)',
  fields: { nameLabel: 'Your name', emailLabel: 'Work email', noteLabel: 'What are you hiring for?' },
  submit: 'Start a conversation',
  email: 'info@vsource.net',
};

// ── Team calculator ────────────────────────────────────────────────────
// rate per resource = max(floor, base - (team - minTeam) * step).
// 12-month term takes longDiscount off the monthly. All indicative.
export const pricing = {
  currency: '$',
  minTeam: 2,
  maxTeam: 15,
  defaultTeam: 4,
  base: 2500,       // $/resource/month at the minimum team size
  step: 50,         // reduction in per-resource rate per extra resource
  floor: 1900,      // per-resource floor
  shortMonths: 3,
  longMonths: 12,
  longDiscount: 0.10,
  note: 'Indicative pricing. Final team shape and rate are confirmed on a short call. Teams larger than 15, let us talk.',
};

export const nav = [
  { label: 'The gap', href: '#problem' },
  { label: 'What we run', href: '#services' },
  { label: 'Why vsource', href: '#different' },
  { label: 'Build your team', href: '#contact' },
];

export const footer = {
  legal: 'vsource',
  tagline: 'Part of the Starcircle group',
  address: 'Cork, Ireland',
};
