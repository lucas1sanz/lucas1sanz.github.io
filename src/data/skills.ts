// ── "Tools I wield" + the AI workflow steps ─────────────────────────────────
// TODO: tune these to reflect your real stack and process.

export type SkillGroup = {
  label: string;
  items: string[];
};

// Grouped skills for the About section grid.
// Reflects Lucas's DevOps background + cloud, alongside AI tooling.
export const skillGroups: SkillGroup[] = [
  {
    label: 'AI tooling',
    items: ['Claude', 'Cursor', 'Claude Code', 'RAG / embeddings', 'Prompt design'],
  },
  {
    label: 'Cloud & infra',
    items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Linux'],
  },
  {
    label: 'Languages',
    items: ['Python', 'TypeScript', 'Go', 'Bash', 'SQL'],
  },
  {
    label: 'DevOps & craft',
    items: ['CI/CD', 'Observability', 'Automation', 'System design', 'Performance'],
  },
];

// "How the magic works" — the process section. The substance behind the theme.
export type ProcessStep = {
  step: string; // numeral / glyph
  title: string;
  body: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: 'I',
    title: 'Conjure the idea',
    body: 'Start from the problem, not the tool. I sketch the shape of a solution and the smallest version worth shipping.',
  },
  {
    step: 'II',
    title: 'Cast with AI',
    body: 'I drive AI agents to scaffold, draft, and iterate fast — treating prompts and context as engineering artifacts, not magic words.',
  },
  {
    step: 'III',
    title: 'Temper the work',
    body: 'Every generated line gets reviewed, tested, and hardened. The AI is an accelerant; the judgment is mine.',
  },
  {
    step: 'IV',
    title: 'Ship the spell',
    body: 'Polish, measure, deploy. The proof of the craft is software in production that people actually use.',
  },
];
