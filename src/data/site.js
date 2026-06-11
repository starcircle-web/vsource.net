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
  title: 'More sourcing than your team can cover',
  points: [
    'Hiring demand spikes and stalls. A permanent sourcing hire is a fixed cost against a variable need.',
    'Good sourcers are expensive, slow to hire, and hard to keep busy when the pipeline goes quiet.',
    'Your recruiters lose their days to sourcing, research and CV formatting, the work that keeps them off the phone.',
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
  title: 'Like having your own sourcing team',
  points: [
    { title: 'You stay in control', body: 'You direct the team day to day and set the priorities. It is your sourcing operation, run by us.' },
    { title: 'An extension of your team', body: 'The team learns how you work and operates as part of your own, in your tools and to your standards.' },
    { title: 'Experienced sourcers', body: 'People who know how to source and make the right judgment calls on every search.' },
    { title: 'Up and running fast', body: 'A team in place and productive in days, with no long ramp or hiring cycle to wait through.' },
    { title: 'Lower cost than hiring in', body: 'Senior sourcing skill at a fraction of the cost of a permanent in-house hire.' },
    { title: 'Scales with demand', body: 'Add capacity for a hiring surge and dial it back when it is quiet, with no permanent headcount risk.' },
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
  accessKey: 'f22786e7-1f38-41e9-8133-c2daa1c34361', // Web3Forms, delivers to info@vsource.net
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
  inhouseMonthly: 6500, // est. fully-loaded cost of an in-house sourcer / month (editable benchmark)
  note: 'Indicative pricing. Saving is an estimate against a typical fully-loaded in-house sourcing hire. Final team shape and rate confirmed on a short call. Teams larger than 15, let us talk.',
};

export const nav = [
  { label: 'The challenge', href: '#problem' },
  { label: 'What we do', href: '#services' },
  { label: 'Why vsource', href: '#different' },
  { label: 'Build your team', href: '#contact' },
];

export const footer = {
  legal: 'vsource',
  tagline: 'Part of the Starcircle group',
  address: 'Cork, Ireland',
};
