// ── "Tools I wield" + the AI workflow steps ─────────────────────────────────
// TODO: tune these to reflect your real stack and process.

export type SkillGroup = {
  label: string;
  items: string[];
};

// Grouped skills for the About section grid.
// Comprehensive across Lucas's DevOps roots + cloud, MLOps, DevSecOps, and the
// AI stack. TODO: prune anything that isn't actually in your toolkit — better to
// be honest than exhaustive.
export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Python', 'TypeScript', 'Go', 'Bash', 'SQL', 'JavaScript', 'YAML'],
  },
  {
    label: 'LLMs',
    items: ['Claude', 'GPT-4o', 'Llama', 'Mistral', 'Groq', 'Ollama', 'Hugging Face'],
  },
  {
    label: 'AI frameworks',
    items: ['LangChain', 'LangGraph', 'LlamaIndex', 'DSPy', 'RAG', 'Prompt engineering'],
  },
  {
    label: 'Embeddings & Vector DBs',
    items: ['pgvector', 'Pinecone', 'Qdrant', 'Weaviate', 'Chroma', 'FAISS', 'Sentence-Transformers'],
  },
  {
    label: 'Cloud & containers',
    items: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Helm', 'Terraform', 'Ansible'],
  },
  {
    label: 'CI/CD & GitOps',
    items: ['GitHub Actions', 'GitLab CI', 'ArgoCD', 'Flux', 'Jenkins', 'Git'],
  },
  {
    label: 'MLOps',
    items: ['MLflow', 'Weights & Biases', 'Kubeflow', 'BentoML', 'DVC', 'Ray'],
  },
  {
    label: 'DevSecOps',
    items: ['Trivy', 'Snyk', 'Vault', 'SOPS', 'OPA', 'Falco'],
  },
  {
    label: 'Observability',
    items: ['Prometheus', 'Grafana', 'OpenTelemetry', 'Loki', 'Datadog', 'Linux'],
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
