export const profile = {
  name: 'Anurag Chaurasia',
  initials: 'AC',
  roles: [
    'Software Engineer',
    'Agentic AI & LLM Systems',
    'Backend Developer',
  ],
  location: 'India',
  availability: 'Open to new opportunities',
  bio: `Software engineer focused on agentic AI, LLM applications, and scalable backend systems.
  I build production-grade RAG pipelines, autonomous agents, and geospatial data systems — with
  a habit of caring as much about security, testing, and observability as the AI itself. Currently
  building data and AI pipelines at Seeds Technical Services; B.Tech in Computer Science from IIEST Shibpur.`,
  email: 'asc15.lko@gmail.com',
  github: 'https://github.com/a-nnurag',
  githubUser: 'a-nnurag',
  linkedin: 'https://www.linkedin.com/in/anurag-chaurasia-5b9409263/',
  leetcodeRating: '1700+',
  resumeUrl: '/AnuragChaurasia_Resume.pdf',
}

export const education = {
  school: 'Indian Institute of Engineering Science and Technology, Shibpur',
  degree: 'B.Tech, Computer Science and Technology',
  duration: 'Nov 2022 — 2026',
  gpa: 'Overall GPA: 8.7 / 10',
}

export const experience = [
  {
    role: 'Associate — Data & AI',
    company: 'Seeds Technical Services (STS)',
    duration: 'Jul 2026 — Present',
    points: [
      'Design and build data-ingestion and model-training pipelines that power AI-driven products across multiple internal initiatives.',
      'Develop AI/ML-based solutions for hyperlocal natural disaster prediction and impact assessment, turning research-stage models into usable services.',
      'Work across the stack — from raw data pipelines to production-facing tools — partnering with data, AI, and software teams to ship end-to-end solutions.',
    ],
  },
  {
    role: 'Software Development Engineer Intern',
    company: 'OpenLM',
    duration: 'Jan 2026 — May 2026',
    points: [
      'Built Playwright scraping workflows for JS-rendered sites, reducing plugin processing time by 67%.',
      'Implemented event-driven communication with Apache Kafka for scalable asynchronous processing.',
      'Designed backend services using Clean Architecture and CQRS principles to improve maintainability and extensibility.',
      'Drove end-to-end test automation (unit, integration, service — AAA pattern), raising Azure pipeline code coverage by 10%.',
      'Migrated Angular test suites from Karma to Jest, cutting execution time.',
    ],
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['C/C++', 'Python', 'C#', 'JavaScript'],
  },
  {
    category: 'Frameworks',
    items: ['.NET', 'Node.js', 'Express', 'FastAPI'],
  },
  {
    category: 'AI & LLM',
    items: ['LangChain', 'LangGraph', 'LangSmith', 'Google ADK', 'Ollama', 'RAG', 'Prompt Engineering', 'Vector Search', 'Embeddings', 'OpenAI'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'MySQL', 'ChromaDB'],
  },
  {
    category: 'DevOps & Cloud',
    items: ['Docker', 'Azure', 'Git', 'GitHub Actions', 'CI/CD', 'Apache Kafka'],
  },
  {
    category: 'Testing & Tools',
    items: ['Playwright', 'Jest', 'xUnit', 'pytest', 'TanStack Query', 'Claude Code'],
  },
]

export const projects = [
  {
    id: 'production-rag',
    title: 'Production-Grade Agentic RAG System',
    tagline: 'A security-first RAG & agent system built like production software, not a demo.',
    problem: 'Most RAG projects are proof-of-concepts that ignore the things that break in production: prompt injection, PII leakage, no observability, and near-zero test coverage.',
    approach: [
      'Built a production-grade RAG and agent-based system for context-aware Q&A and multi-step reasoning workflows.',
      'Orchestrated LLM agents with LangGraph for structured tool execution and improved reasoning across complex queries.',
      'Designed a security layer with prompt-injection detection, input sanitization, and PII protection (emails, phone numbers, API keys).',
      'Integrated LangSmith observability for tracing, debugging, and monitoring LLM chains in production.',
    ],
    impact: '37+ unit, service, and integration tests written test-first (TDD, AAA pattern) covering API, retrieval, and security modules.',
    stack: ['FastAPI', 'LangChain', 'LangGraph', 'LangSmith', 'Docker', 'pytest'],
    github: 'https://github.com/a-nnurag/production_rag',
  },
  {
    id: 'aoi-explorer',
    title: 'AOI Explorer — Geospatial Analysis Tool',
    tagline: 'Draw an area on a map, get live satellite-derived indicators back.',
    problem: 'Exploring geospatial indicators like NDVI over a custom area usually means wrestling with GIS tooling or hand-written Earth Engine scripts.',
    approach: [
      'Built a modular-monolith FastAPI backend paired with a React + MapLibre frontend.',
      'Users draw an AOI (area of interest) on a map, pick an indicator and date range, and see a live cell-count and ground-resolution estimate while drawing.',
      'An async job pipeline pulls a time-sliderable NDVI mosaic from real Sentinel-2 imagery via Google Earth Engine.',
    ],
    impact: '65 passing tests; actively developed with 3 more indicators registry-ready.',
    stack: ['FastAPI', 'Python', 'React', 'TypeScript', 'MapLibre', 'Google Earth Engine'],
    github: 'https://github.com/a-nnurag/analysisRAG',
  },
  {
    id: 'reddit-agent',
    title: 'Autonomous Content Research Agent',
    tagline: 'Turns a keyword into a Reddit sentiment & trend report in minutes.',
    problem: 'Manually researching audience sentiment and trending topics on Reddit across subreddits takes hours of scrolling.',
    approach: [
      'Built with Google ADK, the Gemini API, and PRAW to parse top posts/comments by topic or subreddit.',
      'Ran LLM-assisted sentiment analysis and engagement-metric scoring on the retrieved content.',
      'Surfaced high-performing content ideas ranked by keyword relevance, output as JSON or Markdown.',
    ],
    impact: 'Cut research time from ~4 hours to under 2 minutes, with 85% analysis accuracy.',
    stack: ['Python', 'Google ADK', 'Gemini API', 'PRAW'],
    github: 'https://github.com/a-nnurag/RedditAgent',
  },
  {
    id: 'orchestrate',
    title: 'Orchestrate — WhatsApp Notification Router',
    tagline: 'Built in a 24-hour hackathon: decides who gets interrupted, and who doesn’t.',
    problem: 'A blanket "notify everyone" model is wrong for messaging — the same message should interrupt one recipient and stay silent for another, depending on context and history.',
    approach: [
      'Built a LangGraph pipeline combining a deterministic risk layer with a multi-vendor LLM layer.',
      'Deterministic checks: sender/business history, impersonation detection, prompt-injection detection (against real injection-wrapped scam payloads), bulk-sender spam patterns, and quiet-hours enforcement.',
      'LLM layer: local Ollama (qwen2.5vl) as the primary classifier and image describer, with a Groq (Llama 3.3 70B → 8B) fallback chain and Groq Whisper for voice transcription.',
    ],
    impact: 'Per-user, per-message routing into notify / digest / mute — built for the HackerRank Orchestrate hackathon.',
    stack: ['Python', 'LangGraph', 'Ollama', 'Groq'],
    github: 'https://github.com/a-nnurag/orchestrate-august-26',
  },
  {
    id: 'lead-generator',
    title: 'Lead Generator',
    tagline: 'Concurrent scraper that aggregates startup/product leads across platforms.',
    problem: 'Finding new startup and product leads means manually checking multiple discovery platforms one at a time.',
    approach: [
      'Built a multi-threaded scraper aggregating leads from DevHunt, ProductHunt, TinyStartups, and Uneed.',
      'Combined Selenium (for dynamic content) with crawl4ai (for fast structured crawling).',
      'Used semaphore-controlled concurrency to keep multiple scrapers running in parallel without overloading targets.',
    ],
    impact: 'Extensible source design (Peerlist integration in progress) with planned Tor proxy rotation to avoid rate limits.',
    stack: ['Python', 'Selenium', 'crawl4ai', 'Threading'],
    github: 'https://github.com/a-nnurag/leadgenerater',
  },
]

export const achievements = [
  {
    title: 'GeeksforGeeks Hackathon 2026',
    detail: 'Ranked 5th nationally.',
  },
  {
    title: 'Hult Prize Pitch Competition 2023',
    detail: 'Led team to 1st place.',
  },
  {
    title: 'Robocoon Hovercraft Competition, IIEST Shibpur',
    detail: 'Secured 2nd place.',
  },
  {
    title: 'Kshitij AeroModelling Competition, IIT Kharagpur',
    detail: 'Represented the institute.',
  },
  {
    title: 'JEE Mains / JEE Advanced',
    detail: 'Top 1.5% in JEE Mains, top 5% in JEE Advanced among 925K+ combined candidates.',
  },
  {
    title: 'NTSE, KVPY-SX & NDA',
    detail: 'Qualified NTSE Stage I & II and KVPY-SX among 1M+ applicants nationwide; NDA rank under 2000.',
  },
]

export const stats = [
  { label: 'LeetCode rating', value: '1700+' },
  { label: 'GPA', value: '8.7/10' },
  { label: 'Public repos', value: '60+' },
  { label: 'Featured projects', value: String(projects.length) },
]
