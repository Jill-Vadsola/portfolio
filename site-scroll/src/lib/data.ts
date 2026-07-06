/** Single source of content for the site. Copy is verbatim from the brief. */

export const profile = {
  name: "Jill Vadsola",
  role: "AI Engineer",
  /** Hero intro line — the transition that frames the story. */
  roleArc: "Software Engineer → AI Engineer",
  /** Hero outro line, revealed as the laptop finishes opening. */
  tagline: "Building agentic AI, end to end",
  summary:
    "Software engineer with 2 years of production experience, now specializing in agentic AI and LLM application development. Full-stack foundation across React, Next.js, and Node, with hands-on AWS and CI/CD. Based in Edmonton, AB, open to roles across Canada.",
  email: "vadsolajill@gmail.com",
  phone: "+1 825-522-1696",
  phoneHref: "tel:+18255221696",
  location: "Edmonton, AB, Canada",
  linkedin: "https://www.linkedin.com/in/jillvadsola/",
  github: "https://github.com/jillvadsola",
};

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "Scale Dev",
    role: "AI Engineer",
    period: "Mar 2026 — Present",
    location: "Remote",
    points: [
      "Architected an agentic AI underwriting assistant in TypeScript on the Mastra framework, orchestrating intake, carrier-assessment, and underwriting Q&A.",
      "Built a RAG pipeline over carrier guidelines into a vector database to ground responses and cut hallucinations.",
      "Integrated OpenRouter as a multi-tier model gateway balancing latency, cost, and accuracy.",
      "Built modular agent skills for parallel risk assessment across 6 carriers with applicant-scoped multi-tenant access control.",
    ],
  },
  {
    company: "Amazon",
    role: "SDE Co-op",
    period: "May — Aug 2025",
    location: "Toronto",
    points: [
      "Shipped a React + TypeScript analytics UI on an internal platform via CI/CD (CodeDeploy, S3).",
      "Cut page response time 40% with custom Java REST endpoints over Elasticsearch.",
      "Designed a cross-region AWS pipeline (Kinesis, EventBridge, Java Lambdas) streaming up to 100k records per request.",
    ],
  },
  {
    company: "RadicalRack Mobile Technologies",
    role: "SDE",
    period: "Jan 2022 — Aug 2023",
    location: "Ahmedabad",
    points: [
      "Owned customer-facing pages and a statistics dashboard in React.",
      "Built Node.js REST services; improved API response time 30% via query tuning and indexing on PostgreSQL / MySQL.",
      "Delivered features on a two-week Agile sprint cadence.",
    ],
  },
];

export const featuredProject = {
  eyebrow: "Featured project",
  title: "Agentic AI Underwriting Assistant",
  blurb: "An end-to-end production LLM application — the full pipeline, shipped.",
  stack: ["TypeScript", "Mastra", "RAG", "Vector DB", "OpenRouter", "Multi-tenant"],
};

export type SkillGroup = { label: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    label: "AI / LLM",
    items: [
      "Agentic AI",
      "RAG",
      "Vector Databases",
      "Semantic Retrieval",
      "LLM Orchestration",
      "Mastra",
      "OpenRouter",
      "Prompt Design",
    ],
  },
  { label: "Languages", items: ["TypeScript", "JavaScript", "Java", "C#", "SQL"] },
  { label: "Frontend", items: ["React", "Next.js"] },
  { label: "Backend", items: ["Node.js", "Express", "Nest.js", ".NET Core", "REST"] },
  { label: "Data", items: ["PostgreSQL", "MySQL", "Elasticsearch", "Vector DBs"] },
  {
    label: "Cloud / DevOps",
    items: [
      "AWS Lambda",
      "S3",
      "Kinesis",
      "EventBridge",
      "CodeDeploy",
      "DynamoDB",
      "Docker",
      "CI/CD",
      "Git",
    ],
  },
  { label: "Testing", items: ["Jest"] },
];

export type Education = { school: string; degree: string; period: string };

export const education: Education[] = [
  {
    school: "Concordia University of Edmonton",
    degree: "MSc, Information Technology",
    period: "2024 — 2025",
  },
  {
    school: "Ganpat University",
    degree: "BE, Computer Engineering",
    period: "2018 — 2022",
  },
];
