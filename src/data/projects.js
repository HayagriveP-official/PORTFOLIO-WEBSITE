export const projects = [
  {
    id: 1,
    title: "AI Interview Coach",
    description: "Upload your resume + paste a job description. Get personalized AI-generated interview questions, voice-based answer evaluation, scoring, and session history dashboard.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Groq API", "Llama 3", "JWT", "pdf-parse"],
    techDomains: ["GenAI", "LLM", "Full Stack", "MERN Stack"],
    projectTypes: ["SaaS", "Interview Tool", "Dashboard"],
    liveUrl: "#",
    githubUrl: "https://github.com/HayagriveP-official/AI-INTERVIEW-COACH",
    status: "live",
    hideLiveUrl: true
  },
  {
    id: 2,
    title: "DocuMind — RAG Document Intelligence",
    description: "Multi-tenant SaaS platform. Upload documents, ask natural language questions, get AI answers. Built on a full RAG pipeline with vector search, real-time collaboration, and role-based access control.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "ChromaDB", "Groq API", "LangChain", "Socket.io", "Redis", "JWT"],
    techDomains: ["RAG", "GenAI", "LLM", "Real-Time", "Full Stack"],
    projectTypes: ["SaaS", "Document AI", "Dashboard"],
    liveUrl: "https://ai-powered-saa-s-dashboard.vercel.app/",
    githubUrl: "https://github.com/HayagriveP-official/AI-Powered-SaaS-Dashboard",
    status: "live"
  },
  {
    id: 3,
    title: "DevPulse — GitHub Analytics Platform",
    description: "Connect your GitHub via OAuth. AI analyzes your repos for code quality, commit patterns, and technical debt. Generates a developer health score and weekly AI digest. Shareable public profile card.",
    techStack: ["React", "D3.js", "Node.js", "Express", "PostgreSQL", "Groq API", "GitHub OAuth", "Redis"],
    techDomains: ["GenAI", "LLM", "Analytics", "Full Stack"],
    projectTypes: ["Dev Tools", "Analytics", "Dashboard", "SaaS"],
    liveUrl: "https://devpulse-bay.vercel.app",
    githubUrl: "https://github.com/HayagriveP-official/DEVPULSE",
    status: "live"
  },
  {
    id: 4,
    title: "TaskPilot — Task & Team Management",
    description: "Multi-user task management platform with JWT-secured auth, priority and due-date workflows, and a Team Workspace feature with member cards, task assignment, and Recharts-powered analytics dashboards. Built as the capstone deliverable of my Altruisty Innovation internship.",
    techStack: ["React 19", "Tailwind CSS v4", "Recharts", "Node.js", "Express 5", "MongoDB", "JWT", "bcrypt"],
    techDomains: ["Full Stack", "MERN Stack", "Analytics"],
    projectTypes: ["SaaS", "Productivity", "Dashboard"],
    liveUrl: "https://taskpilot-wine-phi.vercel.app/",
    githubUrl: "https://github.com/HayagriveP-official/TaskPilot",
    status: "live"
  },
  {
    id: 5,
    title: "SustainDine Delivery Wagon",
    description: "Patented autonomous amphibious vehicle for rural last-mile delivery. Solar and dynamo-powered with real-time GPS tracking, obstacle detection via OpenCV, and automated navigation.",
    techStack: ["Python", "Arduino", "OpenCV", "IoT", "GPS", "OpenStreetMap API"],
    techDomains: ["Full Stack"],
    projectTypes: ["Autonomous Vehicle", "IoT"],
    liveUrl: "#",
    githubUrl: "#",
    status: "live",
    badge: "Patented",
    hideLiveUrl: true,
    hideGithubUrl: true
  }
];

export const upcomingProjects = [
  {
    title: "FinSight — Personal Finance AI",
    description: "AI-powered personal finance dashboard with spending analysis, anomaly detection, and natural language budget queries.",
    techDomains: ["GenAI", "Analytics", "Full Stack"],
    projectTypes: ["Dashboard", "SaaS", "Analytics"]
  },
  {
    title: "CodeReview AI",
    description: "Paste your code or connect GitHub repo. AI performs automated security, performance, and style review with actionable fix suggestions.",
    techDomains: ["GenAI", "LLM", "Dev Tools"],
    projectTypes: ["Dev Tools", "SaaS"]
  }
];
