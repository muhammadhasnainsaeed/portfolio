import {
  Code2,
  Server,
  Database,
  Cloud,
  Shield,
  GitBranch,
  TestTube,
  Brain,
} from "lucide-react";

export const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications built with modern frameworks. From MVP to scale — React, Next.js, Vue, Nuxt with Node.js, Python, or Go backends.",
    icon: Code2,
    features: [
      "Responsive, Accessible UIs",
      "Type-Safe APIs (tRPC, GraphQL, REST)",
      "Real-time Features (WebSockets, SSE)",
      "SEO & Performance Optimized",
    ],
    highlight: "Production Ready",
    illustration: "/features/build.svg",
  },
  {
    title: "Backend Engineering & APIs",
    description:
      "Scalable, secure backend systems. Database design, API architecture, authentication, caching, and event-driven systems.",
    icon: Server,
    features: [
      "PostgreSQL, MongoDB, Redis",
      "Microservices & Monoliths",
      "Auth (OAuth, JWT, Magic Links)",
      "Message Queues & Event Sourcing",
    ],
    highlight: "Scalable Architecture",
    illustration: "/resource-allocation/building.svg",
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description:
      "Cloud-native deployments with infrastructure as code. AWS, GCP, Vercel — CI/CD, monitoring, and cost optimization.",
    icon: Cloud,
    features: [
      "Docker & Kubernetes",
      "Terraform / Pulumi",
      "GitHub Actions / GitLab CI",
      "Observability (Logs, Metrics, Traces)",
    ],
    highlight: "Infrastructure as Code",
    illustration: "/resource-allocation/launching.svg",
  },
  {
    title: "Database Design & Optimization",
    description:
      "Data modeling, query optimization, migrations, and scaling strategies. SQL and NoSQL expertise for high-throughput systems.",
    icon: Database,
    features: [
      "Schema Design & Migrations",
      "Query Tuning & Indexing",
      "Read Replicas & Sharding",
      "Data Integrity & Consistency",
    ],
    highlight: "Performance Tuned",
    illustration: "/resource-allocation/planning.svg",
  },
  {
    title: "AI & ML Integration",
    description:
      "Integrating LLMs, embeddings, and ML models into production applications. RAG, agents, vector search, and prompt engineering.",
    icon: Brain,
    features: [
      "OpenAI, Anthropic, Local LLMs",
      "Vector Databases (Pinecone, pgvector)",
      "RAG Pipelines & Agents",
      "Prompt Engineering & Evaluation",
    ],
    highlight: "Production AI",
    illustration: "/features/think.svg",
  },
  {
    title: "Security & Compliance",
    description:
      "Application security from day one. OWASP Top 10, secure auth, data encryption, audit logging, and compliance readiness.",
    icon: Shield,
    features: [
      "OWASP Secure Coding",
      "Penetration Testing Prep",
      "GDPR / SOC2 Readiness",
      "Secrets Management & Rotation",
    ],
    highlight: "Security First",
    illustration: "/resource-allocation/understand.svg",
  },
  {
    title: "Developer Experience & Tooling",
    description:
      "Internal tools, CLIs, SDKs, and developer platforms that accelerate team velocity. Monorepos, shared packages, and automation.",
    icon: GitBranch,
    features: [
      "Monorepo Setup (Turborepo, Nx)",
      "Shared Component Libraries",
      "Custom CLI Tools",
      "Documentation & Onboarding",
    ],
    highlight: "Team Velocity",
    illustration: "/features/improving.svg",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Comprehensive testing strategies — unit, integration, E2E, contract, and performance testing. CI-integrated quality gates.",
    icon: TestTube,
    features: [
      "Vitest, Jest, Playwright, Cypress",
      "Contract Testing (Pact)",
      "Visual Regression Testing",
      "Load Testing (k6, Artillery)",
    ],
    highlight: "Quality Gates",
    illustration: "/features/build.svg",
  },
];
