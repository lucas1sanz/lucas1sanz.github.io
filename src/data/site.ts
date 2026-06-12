// ── Site identity ──────────────────────────────────────────────────────────
// Real content for Lucas. Tweak freely — everything user-facing reads from here.

export const site = {
  name: 'Lucas',
  // Eyebrow/role label shown above the name and used in <title>.
  title: 'AI Engineer',
  // Hero one-liner.
  tagline:
    'I optimize workflows and solve problems with AI — helping companies make the leap into the new paradigm.',
  // About — paragraph 1.
  intro:
    "I'm Lucas — an engineer with a DevOps backbone who now builds with AI. My focus is simple: optimize workflows, cut friction, and solve the problems that actually slow teams down.",
  // About — paragraph 2.
  bio:
    'I help companies navigate their transition into the new AI-native paradigm, pairing battle-tested infrastructure instincts with modern AI tooling to ship systems that are fast, reliable, and real.',
  // Email intentionally not displayed (contact is via social links only).
  email: '',
  // Empty string => link is hidden.
  socials: {
    github: 'https://github.com/lucas1sanz',
    linkedin: 'https://www.linkedin.com/in/lucas1sanz',
    x: '',
  },
  seo: {
    description:
      'Lucas — AI engineer with a DevOps background. I optimize workflows and help companies transition into the AI-native paradigm.',
  },
} as const;

export type SocialKey = keyof typeof site.socials;
