/**
 * Single source of truth for portfolio content.
 * Derived from Jill Vadsola's resume (Jill_Vadsola_SDE_AI.pdf).
 * Edit values here to update the whole site.
 */

export const profile = {
  name: "Jill Vadsola",
  firstName: "Jill",
  role: "AI Engineer",
  roles: [
    "AI Engineer",
    "Agentic AI Developer",
    "Full-Stack Engineer",
    "LLM Application Builder",
  ],
  tagline: "Building agentic AI & LLM applications grounded in real data.",
  location: "Edmonton, AB, Canada",
  email: "vadsolajill@gmail.com",
  phone: "+1 825-522-1696",
  // TODO(Jill): replace with your real LinkedIn URL — this is a best guess.
  linkedin: "https://www.linkedin.com/in/jillvadsola/",
  resumeUrl: "/Jill_Vadsola_Resume.pdf",
  summary:
    "Software Engineer with 2 years of production experience, now specializing in agentic AI and LLM application development. I architected an agentic AI underwriting assistant in TypeScript using the Mastra framework, a RAG pipeline over a vector database, and a multi-tier OpenRouter model gateway to ground LLM responses in source rules and reduce hallucinations. Strong full-stack foundation across React, Next.js, Node.js, and REST API design, with hands-on AWS, CI/CD, and Git.",
} as const;

export const stats = [
  { value: "2+", label: "Years in production" },
  { value: "40%", label: "Faster analytics @ Amazon" },
  { value: "100K", label: "Records / request streamed" },
  { value: "6", label: "Carriers assessed in parallel" },
] as const;

export type SkillGroup = { title: string; tag: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "AI / LLM",
    tag: "ai",
    items: [
      "Agentic AI",
      "RAG Pipelines",
      "Vector Databases",
      "Semantic Retrieval",
      "LLM Orchestration",
      "Mastra",
      "OpenRouter",
      "Prompt Design",
      "Hallucination Mitigation",
    ],
  },
  {
    title: "Languages",
    tag: "lang",
    items: ["TypeScript", "JavaScript (ES6+)", "Java", "C#", "SQL", "HTML5", "CSS3", "SASS"],
  },
  {
    title: "Frontend",
    tag: "fe",
    items: ["React.js", "Next.js", "Component-Based UI", "Responsive Design", "Cross-Browser"],
  },
  {
    title: "Backend",
    tag: "be",
    items: ["Node.js", "Express.js", "Nest.js", "REST API Design", "Java Services", ".NET Core"],
  },
  {
    title: "Databases",
    tag: "db",
    items: ["PostgreSQL", "MySQL", "Elasticsearch", "Vector DBs (Embeddings)"],
  },
  {
    title: "Cloud & DevOps",
    tag: "cloud",
    items: ["AWS Lambda", "S3", "Kinesis", "EventBridge", "CodeDeploy", "DynamoDB", "Docker", "CI/CD", "Git"],
  },
  {
    title: "Testing & Practice",
    tag: "test",
    items: ["Jest (Unit & Integration)", "Code Review", "Agile / Scrum", "Jira"],
  },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Scale Dev",
    role: "AI Engineer",
    location: "Remote, Canada",
    period: "Mar 2026 — Present",
    current: true,
    points: [
      "Architected an agentic AI underwriting assistant in TypeScript with the Mastra framework, orchestrating multi-step intake, carrier-assessment, and underwriting Q&A workflows.",
      "Built a RAG pipeline over carrier guidelines and applicant data, embedding documents into a vector database for semantic retrieval to ground LLM responses and reduce hallucinations.",
      "Integrated OpenRouter as a unified model gateway, routing requests across reasoning and fast/lite model tiers to balance latency, cost, and accuracy per task.",
      "Built modular agent skills for intake extraction, parallel risk assessment across 6 carriers, and rate-class recommendation, with applicant-scoped multi-tenant access control.",
    ],
    stack: ["TypeScript", "Mastra", "RAG", "Vector DB", "OpenRouter"],
  },
  {
    company: "Amazon",
    role: "Software Development Engineer (Co-op)",
    location: "Toronto, ON",
    period: "May 2025 — Aug 2025",
    points: [
      "Shipped a React + TypeScript analytics UI (tables, filtering, pagination, exports) on an internal Amazon platform, released via code review and CI/CD (AWS CodeDeploy, S3).",
      "Cut analytics page response time by 40% by designing custom Java REST API endpoints (filtering, search, aggregations) over an Elasticsearch index.",
      "Designed a cross-region AWS data pipeline (Kinesis, EventBridge, Java Lambdas) and a Java service streaming up to 100,000 records from Elasticsearch per request.",
    ],
    stack: ["React", "TypeScript", "Java", "Elasticsearch", "AWS"],
  },
  {
    company: "RadicalRack Mobile Technologies LLP",
    role: "Software Development Engineer",
    location: "Ahmedabad, India",
    period: "Jan 2022 — Aug 2023",
    points: [
      "Owned customer-facing web pages and a Statistics dashboard end to end in React.js layout, styling, responsive and cross-browser behaviour.",
      "Built Node.js backend services and REST endpoints powering the React UI, including the dashboard data layer.",
      "Improved API response time by 30% through query tuning, indexing, and endpoint optimization on PostgreSQL and MySQL, delivering through Agile sprints with product, design, and QA.",
    ],
    stack: ["React.js", "Node.js", "PostgreSQL", "MySQL"],
  },
];

export type Education = {
  school: string;
  degree: string;
  location: string;
  period: string;
};

export const education: Education[] = [
  {
    school: "Concordia University of Edmonton",
    degree: "M.Sc, Information Technology",
    location: "Edmonton, AB, Canada",
    period: "Aug 2024 — Dec 2025",
  },
  {
    school: "Ganpat University",
    degree: "B.E, Computer Engineering",
    location: "Mehsana, India",
    period: "Jun 2018 — Jun 2022",
  },
];

export type Project = {
  id: string;
  title: string;
  blurb: string;
  description: string;
  highlights: string[];
  stack: string[];
  accent: "green" | "cyan" | "violet";
  year: string;
};

export const projects: Project[] = [
  {
    id: "underwriting-agent",
    title: "Agentic Underwriting Assistant",
    blurb: "Multi-step agentic AI that grounds underwriting decisions in carrier rules.",
    description:
      "An agentic AI system that automates insurance underwriting by orchestrating intake extraction, carrier assessment, and Q&A. A RAG pipeline grounds every LLM response in source guidelines to keep answers accurate and auditable.",
    highlights: [
      "RAG over a vector database to ground answers & cut hallucinations",
      "Multi-tier OpenRouter gateway balancing latency, cost & accuracy",
      "Parallel risk assessment across 6 carriers with rate-class recommendation",
      "Applicant-scoped multi-tenant access control",
    ],
    stack: ["TypeScript", "Mastra", "OpenRouter", "Vector DB", "RAG"],
    accent: "green",
    year: "2026",
  },
  {
    id: "amazon-analytics",
    title: "Internal Analytics Platform",
    blurb: "High-throughput analytics UI + data pipeline shipped inside Amazon.",
    description:
      "A React + TypeScript analytics surface backed by custom Java REST APIs over Elasticsearch, plus a cross-region AWS streaming pipeline capable of moving up to 100K records per request.",
    highlights: [
      "40% faster analytics pages via custom Java aggregation endpoints",
      "Cross-region pipeline: Kinesis, EventBridge & Java Lambdas",
      "Streamed up to 100,000 records from Elasticsearch per request",
      "Shipped through code review & CI/CD (CodeDeploy, S3)",
    ],
    stack: ["React", "TypeScript", "Java", "Elasticsearch", "AWS"],
    accent: "cyan",
    year: "2025",
  },
  {
    id: "radicalrack-dashboard",
    title: "Statistics Dashboard & Web App",
    blurb: "Customer-facing React dashboard with a tuned Node.js data layer.",
    description:
      "End-to-end ownership of customer-facing pages and a Statistics dashboard responsive React UI backed by Node.js REST services and a performance-tuned SQL data layer.",
    highlights: [
      "Owned UI end to end: layout, styling, responsive & cross-browser",
      "Node.js REST services powering the dashboard data layer",
      "30% faster APIs via query tuning & indexing on PostgreSQL / MySQL",
      "Delivered in Agile sprints with product, design & QA",
    ],
    stack: ["React.js", "Node.js", "PostgreSQL", "MySQL"],
    accent: "violet",
    year: "2023",
  },
];

export const navLinks = [
  { href: "#about", label: "About", index: "01" },
  { href: "#skills", label: "Skills", index: "02" },
  { href: "#experience", label: "Experience", index: "03" },
  { href: "#projects", label: "Projects", index: "04" },
  { href: "#contact", label: "Contact", index: "05" },
] as const;
