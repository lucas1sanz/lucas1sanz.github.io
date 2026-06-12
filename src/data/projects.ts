// ── Projects ("artifacts the wizard has forged") ───────────────────────────
// Real projects for Lucas. Blurbs/tags for projects 2 & 3 are my best guess —
// refine the wording any time (search for TODO).

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  repo?: string;
  demo?: string;
  sigil: string; // decorative rune/glyph
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Bitcoin BIPs RAG',
    blurb:
      'A retrieval-augmented assistant over the Bitcoin Improvement Proposals — open-weight models with Groq-powered generation and a citation on every answer.',
    tags: ['RAG', 'Python', 'Groq', 'Open-weight'],
    // No public repo or demo yet.
    sigil: '✦',
    featured: true,
  },
  {
    title: 'Portfolio',
    // TODO: refine blurb/tags to match what this build actually is.
    blurb: 'A fast, static personal site — clean, lightweight, and shipped on GitHub Pages.',
    tags: ['Static Site', 'GitHub Pages'],
    demo: 'https://lucas1sanz.github.io/portfolio',
    sigil: '✶',
  },
  {
    title: 'Bitcoin Knowledge Base',
    // TODO: refine blurb/tags once the KB scope is settled.
    blurb: 'A searchable, structured knowledge base for Bitcoin concepts and documentation.',
    tags: ['Bitcoin', 'Knowledge Base', 'Docs'],
    demo: 'https://lucas1sanz.github.io/bitcoin',
    sigil: '❋',
  },
];
