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
      "Computer Science graduate from Arizona State University (May 2026) specializing in machine learning and distributed systems, with hands-on experience in full-stack development, reinforcement learning research, and simulation modeling. Seeking a software engineering or ML engineering role where I can contribute strong systems thinking and practical AI/ML implementation skills.",
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
      category: "Professional Work / Full-Stack Development",
      technologies: "JavaScript, Liquid, Shopify, Vercel, Google Cloud Translation API, Caching",
      image: "/images/project-watchdna.png",
      description:
        "Designed and shipped a real-time multilingual translation system for a live Shopify storefront using JavaScript, Liquid, and a Vercel-hosted backend. Added automatic language detection, response caching, and admin-side override tools to reduce manual localization work, improve maintainability, and support more reliable production deployment.",
    },
    {
      id: 2,
      title: "Authority-Population Simulation Research",
      category: "Research / Simulation Modeling",
      technologies: "Python, Agent-Based Modeling, Experiment Pipelines, Data Visualization",
      image: "/images/project-research.png",
      description:
        "Built large-scale simulation pipelines to model censorship and dissent dynamics across 10,000+ agents, combining authority policy adaptation with individual-level dissent learning. Designed experiments and visual analyses to compare update rules, punishment settings, and parameter search strategies, supporting ongoing research and publication work.",
    },
    {
      id: 3,
      title: "Hierarchical Reinforcement Learning for Traffic Control",
      category: "Machine Learning / Reinforcement Learning",
      technologies: "PyTorch, Hierarchical RL, CityFlow, Q-Value Modulation",
      image: "/images/project-traffic-rl.png",
      description:
        "Designed a two-tier hierarchical reinforcement learning framework in PyTorch that reduced average traffic delay by 42.6% on the CityFlow simulator. Improved regional coordination across six intersections through Q-Value Modulation and multi-level control policies.",
    },
    {
      id: 4,
      title: "Reinforcement Learning Agents for Sequential Decision-Making",
      category: "Machine Learning / Reinforcement Learning",
      technologies: "Python, Value Iteration, Q-Learning, Approximate Q-Learning, Pacman AI",
      image: "/images/pecman.png",
      description:
        "Implemented five reinforcement learning algorithms across Gridworld, Crawler, and Pacman environments. Trained a Pacman agent over 2,000 episodes to achieve a 100% win rate across 100 evaluation games with an average score above 500.",
    },
    {
      id: 5,
      title: "Multi-Agent Pacman AI",
      category: "Machine Learning / Search & Adversarial AI",
      technologies: "Python, Minimax, Alpha-Beta Pruning, Expectimax, Multi-Agent Search",
      image: "/images/pecman.png",
      description:
        "Engineered four Pacman agents using Minimax, Alpha-Beta pruning, and Expectimax for adversarial and stochastic decision-making. Reduced Alpha-Beta depth-4 runtime from 73.76 seconds to 27.05 seconds while preserving equivalent gameplay outcomes.",
    },
    {
      id: 6,
      title: "Graph Search and Heuristic Pathfinding Engine",
      category: "Algorithms / AI Search",
      technologies: "Python, DFS, BFS, UCS, A*, Heuristic Design",
      image: "/images/pecman.png",
      description:
        "Built DFS, BFS, UCS, and A* pathfinding agents for grid-based multi-goal navigation problems. Designed an admissible heuristic that cut search-node expansions by more than 60% on benchmark mazes without sacrificing optimality.",
    },
    {
      id: 7,
      title: "WebGL Cat Avatar Modeling",
      category: "Computer Graphics / WebGL",
      technologies: "WebGL, JavaScript, Hierarchical Modeling, Procedural Textures, Phong Lighting",
      image: "/images/project-webgl-avatar.png",
      description:
        "Built an interactive WebGL 3D avatar system using hierarchical modeling, articulated joint animation, and procedural texture mapping. Implemented a cube-based character with parent-child traversal so the head, ears, arms, feet, cap, and tassel could animate along coordinated motion paths under custom Phong lighting and texture controls.",
    },
    {
      id: 8,
      title: "Interactive WebGL Surface Renderer",
      category: "Computer Graphics / WebGL",
      technologies: "WebGL, JavaScript, Shader Programming, Parametric Surfaces, Camera Controls",
      image: "/images/project-webgl-avatar.png",
      description:
        "Implemented an interactive WebGL surface renderer for parametric 3D geometry with fragment-shader Phong lighting, indexed mesh generation, and exact normal computation. Added real-time camera, lighting, and field-of-view controls, then extended the renderer with a diamond toroid and procedural color blending for more advanced shader-driven visual effects.",
    },
    {
      id: 9,
      title: "JavaScript-based Privacy App (SunHacks)",
      category: "Hackathon / Privacy",
      technologies: "JavaScript, Backend API Integration, Image Filtering, Rapid Prototyping",
      image: "/images/project-sunhacks.png",
      description:
        "Built a JavaScript privacy app in 24 hours that detects sensitive information in images and text, then applies mosaic filters before content sharing. Integrated backend privacy detection APIs into a working prototype that was demoed live to more than 100 hackathon attendees.",
    },
    {
      id: 10,
      title: "SOAP & REST Web Services",
      category: "Distributed Systems / Backend Development",
      technologies: "Java, SOAP, REST, WebStar, External APIs, Data Aggregation",
      image: "/images/soap.png",
      description:
        "Developed and deployed SOAP and REST services on the WebStar server to compute region livability scores from ZIP codes using three external APIs. Built the data integration layer to aggregate, normalize, and return weather and natural hazard information as structured client-ready responses for distributed applications.",
    },
    {
      id: 11,
      title: "Interactive E-Commerce Profitability Analytics Dashboard",
      category: "Data Visualization / Analytics",
      technologies: "JavaScript, Data Visualization, Dashboard Design, Interactive Filtering",
      image: "/images/dashboard.png",
      description:
        "Built an interactive analytics dashboard that surfaced revenue patterns, high-margin segments, and outliers across five or more product categories. Designed filters and hover-based exploration that made cross-segment comparison significantly faster.",
    },
    {
      id: 12,
      title: "E-Commerce UX Redesign — Escape from Tarkov",
      category: "UX Design / Product Thinking",
      technologies: "Figma, UX Research, Interaction Design, Checkout Flow Redesign",
      image: "/images/tokov.png",
      description:
        "Redesigned checkout and support navigation in Figma for an e-commerce experience inspired by Escape from Tarkov. Reduced multi-item checkout time by 45% and improved satisfaction through a clearer navigation hierarchy and more unified purchase flow.",
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
  skillsOverview: {
    programming: [
      "C++",
      "Java",
      "JavaScript",
      "C",
      "Python",
      "MATLAB",
      "HTML/CSS",
      "SQL",
      "JavaFX",
      "Git",
      "UML",
    ],
    tools: [
      "WebStorm",
      "PyCharm",
      "Docker",
      "MongoDB",
      "Eclipse",
      "Git",
      "IntelliJ",
      "CLion",
      "Visual Studio Code",
    ],
    languages: [
      "Mandarin",
      "Taiwanese",
      "English",
      "German (B2 in progress)",
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Objects & Design",
      "Computer Organization & Programming",
      "Machine Learning",
      "Object-Oriented Programming",
      "Statistics & Applications",
      "Distributed Software Development",
    ],
  },
  licenses: [
    {
      title: "Certificate of Completion: Introduction to subagents",
      issuer: "Anthropic",
      issued: "Jun 2026",
      credentialId: "o8ymknh9wdpm",
      cover: "/images/license-anthropic.svg",
      summary:
        "Completed Anthropic's introduction to subagents, covering how multi-agent workflows can be structured for more capable AI systems.",
    },
    {
      title: "Claude Code in Action",
      issuer: "Anthropic",
      issued: "Jun 2026",
      credentialId: "uu9cd3eui5y2",
      cover: "/images/license-anthropic.svg",
      summary:
        "Hands-on training focused on practical Claude Code workflows, including prompt-driven development and agent-assisted coding patterns.",
    },
    {
      title: "Certificate of completion: Introduction to agent skills",
      issuer: "Anthropic",
      issued: "Jun 2026",
      credentialId: "hy5rrurjd3zi",
      cover: "/images/license-anthropic.svg",
      summary:
        "Completed foundational coursework on reusable agent skills and how specialized workflows can extend AI capabilities in real projects.",
    },
    {
      title: "Certificate of completion: Claude code 101",
      issuer: "Anthropic",
      issued: "Jun 2026",
      credentialId: "uhpedo7ur4bw",
      cover: "/images/license-anthropic.svg",
      summary:
        "Covered core Claude Code concepts, setup, and baseline productivity workflows for building and iterating with AI coding support.",
    },
    {
      title: "Certificate of completion: Introduction to Claude Cowork",
      issuer: "Anthropic",
      issued: "Jun 2026",
      credentialId: "uiqnhki9uemc",
      cover: "/images/license-anthropic.svg",
      summary:
        "Explored collaborative AI workflows in Claude Cowork, with an emphasis on coordination, shared context, and practical team usage.",
    },
    {
      title: "Certificate of completion: Claude 101",
      issuer: "Anthropic",
      issued: "Jun 2026",
      credentialId: "suvu3s4q3p5t",
      cover: "/images/license-anthropic.svg",
      summary:
        "Completed an introductory course on Claude fundamentals, prompt design, and productive AI usage for technical and research tasks.",
    },
    {
      title: "Certificate of Completion: AI Fluency Framework & Foundations",
      issuer: "Anthropic",
      issued: "Jun 2026",
      credentialId: "3vswjc7hns5s",
      cover: "/images/license-anthropic.svg",
      summary:
        "Built a stronger foundation in AI fluency, including model behavior, evaluation mindset, and practical communication with AI systems.",
    },
    {
      title: "IRB – Social and Behavioral Research (Group 2)",
      issuer: "CITI Program",
      issued: "Sep 2025",
      expires: "Sep 2029",
      credentialId: "71736382",
      cover: "/images/license-citi.svg",
      summary:
        "Completed IRB training for social and behavioral research, covering ethics, participant protection, and compliant research practices.",
    },
  ],
};
