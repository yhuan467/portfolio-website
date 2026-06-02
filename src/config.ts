export const config = {
  developer: {
    name: "Yun",
    fullName: "Yun Huang",
    title: "Software Developer",
    subtitle: "AI, Simulation, and Research",
    description:
      "I build practical software, AI-driven tools, and simulation systems with a strong product mindset.",
  },
  social: {
    github: "yhuan467",
    email: "yhuan467@asu.edu",
    location: "Tempe, Arizona",
  },
  about: {
    title: "About Me",
    description:
      "I am a Computer Science student at Arizona State University focused on intelligence and modeling simulations. My work spans production software, multilingual web experiences, agent-based modeling, and reinforcement learning. I enjoy building systems that are both technically solid and useful to real users.",
  },
  experiences: [
    {
      position: "B.S. in Computer Science",
      company: "Arizona State University",
      period: "Graduated, May 2026",
      location: "Tempe, Arizona",
      description:
        "Concentration in Intelligence and Modeling/Simulations with Dean's List honors and coursework across systems, software, and machine learning.",
      responsibilities: [
        "GPA: 3.42 / 4.00",
        "Dean's List: 2022, 2023, 2024, 2025",
        "Relevant coursework includes data structures, algorithms, machine learning, statistics, and distributed software development",
      ],
      technologies: ["C++", "Java", "Python", "SQL", "Machine Learning", "Distributed Systems"],
    },
    {
      position: "Developer",
      company: "WatchDNA - Northern Watch Services Inc.",
      period: "2025 - 2026",
      location: "Tempe, Arizona",
      description:
        "Built multilingual Shopify translation workflows and real-time localization features for storefront content and feeds.",
      responsibilities: [
        "Integrated Google Cloud Translation API to translate storefront content into 10+ languages",
        "Implemented real-time, full-page translation during navigation for a consistent multilingual browsing experience",
        "Translated RSS feed entries in real time to keep product updates synchronized and reduce manual localization work",
      ],
      technologies: ["JavaScript", "Shopify", "Google Cloud Translation API", "Localization"],
    },
    {
      position: "Research Assistant",
      company: "Biocomputing & Security Lab",
      period: "2025 - 2026",
      location: "Tempe, Arizona",
      description:
        "Modeled dissent and self-censorship dynamics in authority-population systems using agent-based simulations and policy experiments.",
      responsibilities: [
        "Modeled dissent and self-censorship dynamics using agent-based simulations over policy and behavioral parameters",
        "Implemented epsilon-ball neighborhood sampling to evaluate candidate policies under local perturbations",
        "Applied Bayesian optimization to tune model and policy parameters efficiently and reduce brute-force sweeps",
      ],
      technologies: ["Python", "Agent-Based Simulation", "Bayesian Optimization", "Policy Search"],
    },
  ],
  projects: [
    {
      id: 1,
      title: "WatchDNA Storefront Localization",
      category: "Product / Web Development",
      technologies: "JavaScript, Shopify, Google Cloud Translation API, RSS",
      image: "/images/project-watchdna.png",
      description:
        "Implemented multilingual storefront translation, navigation-aware localization, and real-time RSS content translation for product updates.",
    },
    {
      id: 2,
      title: "Authority-Population Simulation Research",
      category: "Research / Simulation",
      technologies: "Python, Agent-Based Modeling, Bayesian Optimization",
      image: "/images/project-research.png",
      description:
        "Studied dissent and self-censorship behavior through controlled simulation experiments and robust policy evaluation methods.",
    },
    {
      id: 3,
      title: "Hierarchical Reinforcement Learning for Traffic Control",
      category: "AI / Reinforcement Learning",
      technologies: "PyTorch, Reinforcement Learning, CityFlow, Q-Value Modulation",
      image: "/images/project-traffic-rl.png",
      description:
        "Implemented a two-tier HRL framework in PyTorch and optimized regional coordination via Q-value modulation on the CityFlow simulator.",
    },
    {
      id: 4,
      title: "Interactive WebGL Avatar Project",
      category: "Computer Graphics / WebGL",
      technologies: "WebGL, JavaScript, 3D Graphics, Avatar Design",
      image: "/images/project-webgl-avatar.png",
      description:
        "Built an avatar-focused computer graphics project in WebGL exploring interactive 3D rendering and character presentation.",
    },
    {
      id: 5,
      title: "JavaScript-based Privacy App (SunHacks)",
      category: "Hackathon / Privacy",
      technologies: "JavaScript, Image and Text Analysis, Frontend Integration",
      image: "/images/project-sunhacks.png",
      description:
        "Built a privacy-focused JavaScript app that detects sensitive information and applies a mosaic filter before content sharing.",
    },
  ],
  contact: {
    email: "yhuan467@asu.edu",
    github: "https://github.com/yhuan467",
    linkedin: "https://www.linkedin.com/in/katie-huang-90230b300/",
  },
  skills: {
    develop: {
      title: "SOFTWARE + AI",
      description: "Building production software and intelligent systems",
      details:
        "I work across software engineering and applied AI, from multilingual web features and API integrations to simulations, reinforcement learning, and optimization workflows.",
      tools: [
        "C++",
        "Java",
        "JavaScript",
        "Python",
        "SQL",
        "MongoDB",
        "Docker",
        "Reinforcement Learning",
        "Google Cloud APIs",
      ],
    },
    design: {
      title: "RESEARCH + FULL-STACK",
      description: "Simulation, experimentation, and end-to-end implementation",
      details:
        "I combine full-stack implementation with experiment design, distributed systems, and simulation research to build systems that are measurable and practical.",
      tools: [
        "MATLAB",
        "HTML/CSS",
        "Git",
        "WebStorm",
        "PyCharm",
        "Visual Studio Code",
      ],
    },
  },
};
