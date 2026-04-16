const archetypeData = {
  list: [
    {
      id: "data-scientist",
      name: "Data Scientist",
      role: "Insights & modeling",
      tagline: "Turn data into actionable insight that drives client impact.",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=DataScientist",
      otherRoles: ["Analytics", "ML / stats modeling"],
      deviceUsage: { laptop: 65, desktop: 25, mobile: 10 },
      coreJourneys: ["Frame analytical questions", "Build models", "Tell the story", "Embed with teams"],
      keyCollaborators: ["Data Engineer", "Engagement teams", "Knowledge Professional", "Principal Architect"],
      description: "Mission: turn data into actionable insight that drives client impact. Typical firm tenure is roughly 2–5 years (junior through experienced practitioners). They frame ambiguous business problems into analytical questions, build statistical and ML models (forecasting, segmentation, optimization), translate results into clear decision-ready narratives, and partner with consultants and clients to embed insights.",
      howSpendsTime: [
        "Frame ambiguous business problems into analytical questions",
        "Build statistical / ML models (forecasting, segmentation, optimization)",
        "Translate results into clear, decision-ready narratives",
        "Partner with consultants and clients to embed insights"
      ],
      traitIcons: ["Problem framing", "Modeling", "Storytelling", "Client partnership"],
      motivations: [
        "Identify non-obvious drivers of performance",
        "Improve decision quality with evidence-based insights",
        "Enable predictive and prescriptive analytics"
      ],
      challenges: [
        "Top performer: drives decision impact, not just model accuracy—bridging analytics and business storytelling seamlessly."
      ],
      dailyToolkit: {
        produce: ["Python", "R", "SQL", "scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "Pandas", "NumPy", "Tableau", "Power BI", "matplotlib", "seaborn", "Databricks", "SageMaker", "Vertex AI"],
        collaborate: ["Teams", "Outlook", "Miro", "Confluence"],
        administrate: ["Experimentation / A-B platforms", "Cloud consoles"]
      },
      preferredChannels: {
        communication: [
          { name: "Email", level: 75 },
          { name: "Chat", level: 80 },
          { name: "Working sessions", level: 85 },
          { name: "Video", level: 70 }
        ],
        support: [
          { name: "Data platform teams", level: 70 },
          { name: "IT / access", level: 55 },
          { name: "Knowledge / research", level: 65 }
        ]
      },
      regionalConsiderations: {
        APAC: ["Client data residency and access patterns vary widely"],
        EMEA: ["Model governance and GDPR-aligned analytics"],
        LatAm: ["Bandwidth for large datasets can affect iteration speed"],
        NA: ["Strong demand for real-time dashboards and self-serve analytics"]
      }
    },
    {
      id: "data-engineer",
      name: "Data Engineer",
      role: "Data platforms & pipelines",
      tagline: "Build scalable, reliable data foundations that power analytics and AI.",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=DataEngineer",
      otherRoles: ["ETL/ELT", "Data quality & governance"],
      deviceUsage: { laptop: 70, desktop: 25, mobile: 5 },
      coreJourneys: ["Design pipelines", "Integrate sources", "Ensure quality", "Optimize cost & performance"],
      keyCollaborators: ["Data scientists", "Platform teams", "Security & risk", "Cloud architects"],
      description: "Mission: build scalable, reliable data foundations that power analytics and AI. Typical firm tenure is roughly 2–5 years (often longer for specialized senior engineers). They design and build data pipelines (ETL/ELT), integrate structured and unstructured sources, ensure data quality, governance, and accessibility, and optimize infrastructure for performance and cost.",
      howSpendsTime: [
        "Design and build data pipelines (ETL/ELT)",
        "Integrate multiple data sources (structured / unstructured)",
        "Ensure data quality, governance, and accessibility",
        "Optimize infrastructure for performance and cost"
      ],
      traitIcons: ["Pipelines", "Integration", "Quality", "Scale"],
      motivations: [
        "Provide clean, reliable, and timely data",
        "Enable scalable analytics and AI deployment",
        "Reduce friction across teams"
      ],
      challenges: [
        "Top performer: builds reusable, production-grade data platforms that support multiple use cases across clients."
      ],
      dailyToolkit: {
        produce: ["Python", "SQL", "Scala", "Java", "Spark", "Hadoop", "Airflow", "Prefect", "Dagster", "Snowflake", "BigQuery", "Redshift", "Kafka", "Kinesis", "dbt", "AWS", "Azure", "GCP"],
        collaborate: ["Git", "Teams", "Jira", "Data catalog"],
        administrate: ["IAM", "Cost dashboards", "Runbooks"]
      },
      preferredChannels: {
        communication: [
          { name: "Chat", level: 85 },
          { name: "Email", level: 65 },
          { name: "Incident bridge", level: 70 },
          { name: "Video", level: 60 }
        ],
        support: [
          { name: "Cloud support", level: 75 },
          { name: "Platform SRE", level: 70 },
          { name: "Vendor support", level: 50 }
        ]
      },
      regionalConsiderations: {
        APAC: ["Multi-region replication and latency-sensitive jobs"],
        EMEA: ["Sovereign cloud and residency requirements"],
        LatAm: ["Hybrid on-prem and cloud footprints"],
        NA: ["Lakehouse and modern warehouse adoption"]
      }
    },
    {
      id: "principal-architect",
      name: "Principal Architect",
      role: "Enterprise & solution architecture",
      tagline: "Design end-to-end technology architecture enabling scalable digital and AI transformation.",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=PrincipalArchitect",
      otherRoles: ["Multi-cloud", "Security trade-offs"],
      deviceUsage: { laptop: 55, desktop: 40, mobile: 5 },
      coreJourneys: ["Define architecture", "Select platforms", "Guide engineering", "Engage executives"],
      keyCollaborators: ["Engineering leads", "CIO/CTO stakeholders", "Security", "Data platform leads"],
      description: "Mission: design end-to-end technology architecture enabling scalable digital and AI transformation. Typical firm tenure is roughly 8–15+ years, often including prior industry experience. They define architecture across applications, data, and infrastructure; select platforms and integration patterns; balance cost, performance, security, and maintainability; and guide engineering teams while engaging senior client stakeholders.",
      howSpendsTime: [
        "Define architecture across applications, data, and infrastructure",
        "Select platforms, define integration patterns, and ensure scalability",
        "Balance trade-offs (cost, performance, security, maintainability)",
        "Guide engineering teams and engage senior client stakeholders"
      ],
      traitIcons: ["Reference models", "Trade-offs", "Scale", "Stakeholder alignment"],
      motivations: [
        "Ensure long-term scalability and flexibility",
        "Prevent costly rework through sound architecture decisions",
        "Align technology with business strategy"
      ],
      challenges: [
        "Top performer: acts as a C-level trusted advisor, shaping architecture that is future-proof, scalable, and aligned to transformation goals."
      ],
      dailyToolkit: {
        produce: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "REST", "GraphQL", "MuleSoft", "Apigee", "Jenkins", "GitHub Actions", "GitLab CI", "Databricks", "Delta Lake", "Snowflake", "IAM patterns"],
        collaborate: ["Miro", "Confluence", "Teams", "Architecture review boards"],
        administrate: ["Roadmaps", "RFCs", "Risk registers"]
      },
      preferredChannels: {
        communication: [
          { name: "Executive workshops", level: 80 },
          { name: "Email", level: 70 },
          { name: "Video", level: 75 },
          { name: "Architecture forums", level: 85 }
        ],
        support: [
          { name: "Cloud partner teams", level: 75 },
          { name: "Security architecture", level: 80 },
          { name: "Enterprise architecture guild", level: 65 }
        ]
      },
      regionalConsiderations: {
        APAC: ["Regulated industries and cross-border data flows"],
        EMEA: ["Zero-trust and hybrid integration complexity"],
        LatAm: ["Vendor footprint and managed services mix"],
        NA: ["Large-scale modernization and platform consolidation"]
      }
    },
    {
      id: "knowledge-professional",
      name: "Knowledge Professional",
      role: "Research & domain synthesis (KP)",
      tagline: "Bring the best of the Firm's knowledge to every client problem.",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=KnowledgePro",
      otherRoles: ["Expert research", "IP & thought leadership"],
      deviceUsage: { laptop: 75, tablet: 20, mobile: 5 },
      coreJourneys: ["Curate knowledge", "Synthesize benchmarks", "Support teams", "Deepen domain expertise"],
      keyCollaborators: ["Engagement teams", "Client service leaders", "Subject-matter experts", "Research platforms"],
      regionalConsiderations: {
        APAC: ["Access to global research tools varies by market"],
        EMEA: ["Multilingual sources and regulatory context"],
        LatAm: ["Industry datasets and local benchmarks"],
        NA: ["High volume of peer-firm and capital-markets intelligence requests"]
      },
      description: "Mission: bring the best of the Firm's knowledge to every client problem. Typical firm tenure is roughly 2–5 years (longer for deep domain experts). Knowledge Professionals curate and synthesize firm knowledge and benchmarks, support teams with targeted research and insights, develop thought leadership and IP, and provide domain expertise in industry and function.",
      howSpendsTime: [
        "Curate and synthesize firm knowledge and benchmarks",
        "Support teams with targeted research and insights",
        "Develop thought leadership and IP",
        "Provide domain expertise in industry and function"
      ],
      traitIcons: ["Synthesis", "Benchmarks", "Story-ready insights", "Domain depth"],
      motivations: [
        "Accelerate problem solving with proven insights",
        "Improve recommendation quality and depth",
        "Provide specialized expertise"
      ],
      challenges: [
        "Top performer: a thought partner, not just a researcher—shaping hypotheses, not only answering questions."
      ],
      dailyToolkit: {
        produce: ["AlphaSense", "Factiva", "PitchBook", "Capital IQ", "Excel (advanced)", "Python (light)", "Alteryx", "PowerPoint", "Tableau", "Internal knowledge systems", "Miro", "Teams", "SharePoint"],
        collaborate: ["Teams", "Outlook", "Expert networks"],
        administrate: ["Research subscriptions", "Knowledge taxonomies"]
      },
      preferredChannels: {
        communication: [
          { name: "Email", level: 80 },
          { name: "Chat", level: 75 },
          { name: "Office hours / clinics", level: 70 },
          { name: "Video", level: 65 }
        ],
        support: [
          { name: "Library / research desk", level: 70 },
          { name: "Data product teams", level: 55 },
          { name: "Legal / compliance for sources", level: 50 }
        ]
      }
    },
    {
      id: "eloise",
      name: "Eloise",
      role: "Engagement Team Member",
      tagline: "Technology gives me the power of McKinsey, wherever I work.",
      avatar: "archetype-eloise.png",
      otherRoles: [],
      compactRole: "None",
      deviceUsage: { laptop: 60, tablet: 25, mobile: 15 },
      coreJourneys: ["Growth Enablement", "M&A Service", "Change Management", "Engagement Team Member"],
      keyCollaborators: ["Engagement Team Lead", "Client Service Leader", "Administrative Professional"],
      regionalConsiderations: {
        APAC: ["Frequent power outages in India", "Security needs in China vary greatly", "WeChat used almost exclusively"],
        EMEA: ["Connectivity is spotty in much of Africa", "WhatsApp used frequently with colleagues in EU and UK/IO"],
        LatAm: ["Equipment provisioning issues & delays"],
        NA: ["Those serving governments may have different security requirements"]
      },
      description: "Eloise is focused on developing a deep understanding of her clients' problems through data generation, gathering and analysis. She struggles to balance priorities with ambitious deadlines and values learning as much as possible during her tenure at the Firm.",
      howSpendsTime: [
        "Generating data through interviews and surveys",
        "Gathering, wrangling, and analyzing client data sets",
        "Creating, editing, and polishing content to communicate insights and recommendations",
        "Pursuing her own professional development via apprenticeship"
      ],
      traitIcons: ["Data collection", "Analysis", "Content creation", "Professional growth", "Collaboration", "Impact"],
      motivations: [
        "Learning as much as possible during her tenure at the Firm",
        "Impressing her leaders and her clients with her work",
        "Building more and deeper relationships with colleagues and clients"
      ],
      challenges: [
        "Precious time sapped by dealing with admin/HR/travel and calendars",
        "Less time onsite with clients than she would like",
        "Shifting priorities, ambitious deadlines, and a deep backlog of work"
      ],
      dailyToolkit: {
        produce: ["Word", "Excel", "PowerPoint", "OneNote"],
        collaborate: ["Teams", "SharePoint", "Outlook", "Box"],
        administrate: ["Concur", "C"]
      },
      preferredChannels: {
        communication: [
          { name: "Slack", level: 80 },
          { name: "Email", level: 85 },
          { name: "Phone", level: 45 },
          { name: "Face-to-Face", level: 60 }
        ],
        support: [
          { name: "Help Desk", level: 65 },
          { name: "Manager", level: 75 },
          { name: "Colleague", level: 70 }
        ]
      }
    },
    {
      id: "chloe",
      name: "Chloe",
      role: "Client Service Leader",
      tagline: "Technology helps me stay focused on clients and apprenticeship.",
      avatar: "archetype-chloe.png",
      otherRoles: ["Client Leader"],
      deviceUsage: { desktop: 55, laptop: 35, mobile: 10 },
      keyCollaborators: ["Engagement Team Lead", "Client", "Engagement Team Member", "Firm Leader", "Administrative Professional"],
      regionalConsiderations: {
        APAC: ["Frequent power outages in India", "Security needs in China vary greatly", "Work that uses AI/ML mostly with skills in China"],
        EMEA: ["Connectivity is spotty in parts of Africa"],
        LatAm: ["Exploratory partnering focus", "Need to develop a value prop"],
        NA: ["Those serving governments may have different security requirements"]
      },
      description: "Chloe aims to dedicate as much of her time as possible to creating positive, enduring change in the world through her core relationships: clients and apprentices. She's still on the go quite often, but misses the reliably deep quiet time she had when traveling constantly pre-COVID. Now more than ever she longs for simpler access to the information she needs most, easy delegation of important actions like staffing and WIP review, and a clearer approach to painlessly and confidently managing risk. She's always on the lookout for opportunities to introduce new topics to clients she's already serving as well as for topics that might open an introduction to a new client. Chloe thrives on delivering distinctive impact to her clients and wants to keep bringing the best of the Firm to every discussion - including an increasing number of remotely delivered LOPs.",
      howSpendsTime: [
        "Leading CBTs for several clients",
        "Coaching client executives as well as the Firm's most senior consultants",
        "Working to grow the Firm's presence with her current clients as well as to grow our client base",
        "Ensuring the work we do makes meaningful impact while protecting the Firm and our clients from risk",
        "Building her external presence through social media and networking"
      ],
      traitIcons: ["Road warrior", "Client oriented", "Time focused", "Goal oriented", "Expert delegate", "Bias to action"],
      motivations: [
        "Reflect the Firm's values and mission in everything she does",
        "Use her knowledge capital and experience to drive impact across her practice",
        "Be recognized inside and outside the Firm as an influential leader",
        "Build more and deeper client relationships with distinctive impact",
        "Confidently and painlessly manage risk"
      ],
      challenges: [
        "Standards for risk management are changeable, context-dependent, and substantial",
        "Without hallway conversations to rely on, knowing what will be interesting to a new or existing client is tough",
        "The tools, reports, and information she needs all live in different systems",
        "She delegates tasks like staffing and WIPs to her APs and EA, but the tools she uses don't account for that reality"
      ],
      dailyToolkit: {
        produce: ["Excel", "Word", "PowerPoint", "Cloud", "Cloud"],
        collaborate: ["Video", "Phone"],
        administrate: ["E"]
      },
      preferredChannels: {
        communication: [
          { name: "Email", level: 80 },
          { name: "Text", level: 60 },
          { name: "Call", level: 90 }
        ],
        support: [
          { name: "Chat", level: 70 },
          { name: "CRM", level: 20 },
          { name: "KB", level: 10 },
          { name: "FAQ", level: 30 }
        ]
      }
    },
    {
      id: "cassandra",
      name: "Cassandra",
      role: "Client Leader",
      tagline: "Technology makes connecting with the Firm easier and more rewarding.",
      avatar: "archetype-cassandra.png",
      otherRoles: ["N/A"],
      deviceUsage: { laptop: 50, tablet: 30, mobile: 20 },
      coreJourneys: ["I need a xxxxxxx"],
      keyCollaborators: ["Client Service Leader", "Engagement Team Lead", "Administrative Professional"],
      regionalConsiderations: {
        APAC: ["Frequent power outages in India", "Security needs in China", "WeChat usage exclusively with clients in China", "Cultural push against quality"],
        EMEA: ["Connectivity issues in Africa", "Power outages in many countries in Africa", "WhatsApp used frequently with colleagues in EU and UK/ID"],
        LatAm: ["Equipment provisioning issues & delays"],
        NA: ["Those serving governments may have different security requirements"]
      },
      description: "Cassandra is a Client Leader who relies on the Firm for keen analysis, an unbiased eye, and access to the knowledge base and insights. She values 1-1 counsel and is frustrated by confidentiality protections that hinder seamless collaboration and access to past engagement topics.",
      howSpendsTime: [
        "Defining vision and strategy for her organization's future",
        "Engaging with Chloe to design engagement scope",
        "Leading her team and ensuring organizational output during change",
        "Working with Chloe and her team for implementation of recommendations"
      ],
      traitIcons: ["Aims for impact", "Decision maker", "Trend watcher", "Focused on financials"],
      motivations: [
        "Deliver meaningful change in line with her CEO's expectations",
        "Grow as a leader, learning along the way",
        "Support her organization through change",
        "Develop leaders on her team"
      ],
      challenges: [
        "Agreeing on engagement pricing",
        "Collaboration hampered by tech differences and security restrictions (e.g., SMS not allowed for McKinsey folks)",
        "Rushed, incomplete, or sterile handoff from McKinsey for implementation"
      ],
      dailyToolkit: {
        produce: ["PowerPoint", "Excel", "Word", "Outlook"],
        collaborate: ["Teams", "Zoom"],
        administrate: []
      },
      preferredChannels: {
        communication: [
          { name: "Email", level: 95 },
          { name: "Text", level: 50 },
          { name: "Slack", level: 15 }
        ],
        support: [
          { name: "GHD", level: 30 },
          { name: "CASEE", level: 25 },
          { name: "ITSA", level: 20 }
        ]
      }
    },
    {
      id: "federika",
      name: "Federika",
      role: "Firm Professional",
      tagline: "Technology empowers me to deliver impact in service of the Firm's aspirations.",
      avatar: "archetype-federika.png",
      otherRoles: ["People Leader"],
      deviceUsage: { laptop: 60, desktop: 30, mobile: 10 },
      coreExperiences: ["Create a winning proposal", "Curate knowledge", "Mentor a colleague", "Contribute knowledge to the Firm"],
      keyCollaborators: ["Client Service Leader", "Firm Professional", "Administrative Professional", "People Leader", "Engagement Team Lead", "Knowledge Professional"],
      regionalConsiderations: {
        APAC: ["Frequent power outages in India", "Security needs in China", "WeChat used almost exclusively with clients in China"],
        EMEA: ["Connectivity is spotty in much of Africa"],
        LatAm: [],
        NA: []
      },
      description: "Federika is a Practice Manager who delivers impact in service of the Firm's aspirations. She is an expert multi-tasker, natural entrepreneur, and knowledge maven. She is collaborative, obsessed with client impact, and focused on growth. Tech at the Firm feels like it changes quickly, and she wishes for more consistent tools and clearer guidance.",
      howSpendsTime: [
        "Creating winning proposals and curating knowledge",
        "Mentoring colleagues and contributing to the Firm's knowledge base",
        "Managing practice operations and supporting client engagements",
        "Building collaborative relationships across the Firm"
      ],
      traitIcons: ["Expert multi-tasker", "Natural entrepreneur", "Knowledge maven", "Collaborative", "Obsessed with client impact", "Focused on growth"],
      motivations: [
        "Be seen as indispensable to her practice",
        "Deliver impact that advances the Firm's aspirations",
        "Build and share knowledge across the organization",
        "Support talent development and mentorship"
      ],
      challenges: [
        "Tech at the Firm feels like it changes quickly",
        "Tools and information are scattered across systems",
        "Balancing practice management with client and people development"
      ],
      dailyToolkit: {
        produce: ["Know", "P3", "W", "X"],
        collaborate: ["Video", "Teams", "N", "Box"],
        administrate: ["People Central"]
      },
      preferredChannels: {
        communication: [
          { name: "Email", level: 85 },
          { name: "Text", level: 60 },
          { name: "Slack", level: 55 }
        ],
        support: [
          { name: "GHD", level: 50 },
          { name: "CASEE", level: 45 },
          { name: "ITSA", level: 40 }
        ]
      }
    },
    {
      id: "aaron",
      name: "Aaron",
      role: "Administrative Professional",
      tagline: "Technology frees me to focus on the most critical needs of the colleagues I support.",
      avatar: "archetype-aaron.png",
      otherRoles: ["People Leader"],
      deviceUsage: { laptop: 75, mobile: 25, tablet: 0 },
      coreJourneys: ["I need a xxxxxxx", "I need a xxxxxxx", "I want to xxxxxxx", "I want to xxxxxxx"],
      keyCollaborators: ["Engagement Team Lead", "Engagement Team Member", "Administrative Professional", "Services Team Member", "People Leader", "Client Service Leader"],
      regionalConsiderations: {
        APAC: ["Frequent power outages in India", "Security needs in China very greatly from global needs", "WeChat used almost exclusively with clients in China", "Strong cultural push against quality of life considerations"],
        EMEA: ["Connectivity is spotty in much of Africa", "Power outages in many countries in Africa", "WhatsApp used frequently with colleagues in EU and UKIO"],
        LatAm: ["Equipment provisioning issues & delays"],
        NA: ["Those serving governments may have different security requirements"]
      },
      description: "Aaron supports consulting colleagues, manages delegated tasks, and handles routine tasks for engagements (like scheduling steerco sessions and ensuring collaboration space). He leads an EA team and is responsible for staffing and development. He wishes for tools that consider EA needs.",
      howSpendsTime: [
        "Providing moment to moment transparency on the status of work",
        "Ensuring his supported colleagues have successful travel experiences",
        "Organizing meetings (timing, booking, tech support)",
        "Filing expenses and logging timesheets and PTO",
        "Maintaining a database of contacts"
      ],
      traitIcons: ["Time starved", "Top-notch multitasker", "Detail oriented", "Workaround expert", "Checklist lover", "Honorary tech support"],
      motivations: [
        "Form collaborative relationships and receive recognition",
        "Exert influence on tech and tools",
        "Evolve best practices",
        "Steward Firm's resources responsibly"
      ],
      challenges: [
        "Tools and norms depend heavily on specific people",
        "Has developed strong preferences and workarounds",
        "Context switching is constant",
        "Often lacks access to tools/tech"
      ],
      dailyToolkit: {
        produce: ["Box", "N", "Document", "C"],
        collaborate: ["Video", "Person"],
        administrate: ["KAST"]
      },
      preferredChannels: {
        communication: [
          { name: "Email", level: 70 },
          { name: "Text", level: 55 },
          { name: "Slack", level: 85 }
        ],
        support: [
          { name: "E&D", level: 75 },
          { name: "GHD", level: 50 },
          { name: "CABEE", level: 45 },
          { name: "ITSA", level: 80 }
        ]
      }
    },
    {
      id: "peter",
      name: "Peter",
      role: "People Leader",
      tagline: "Technology enables me to develop and staff exceptional and diverse talent.",
      avatar: "archetype-peter.png",
      otherRoles: ["Client Service Leader"],
      deviceUsage: { desktop: 65, mobile: 35, tablet: 0 },
      coreExperiences: ["Ramp up an engagement", "Evaluate a colleague", "Sponsor a colleague", "Mentor a colleague"],
      keyCollaborators: ["Client Service Leader", "Firm Professional", "Administrative Professional", "Engagement Team Lead", "Engagement Team Member"],
      regionalConsiderations: {
        APAC: ["Frequent power outages in India", "Security needs in China", "Connectivity and tooling vary"],
        EMEA: ["Connectivity is spotty in much of Africa"],
        LatAm: [],
        NA: []
      },
      description: "As a Partner of the Firm, Peter spends most of his time cultivating client relationships and delivering meaningful impact for clients through engagements. His deep commitment to creating an unrivaled environment for exceptional people informs his approach. He believes client engagements are as much an opportunity for sponsorship and professional development as they are for client impact, and works hard to make sure the colleagues he coaches, mentors, and sponsors receive the feedback and opportunities they need to grow. He actively embraces and celebrates the diversity of his DGLees' contributions and backgrounds.",
      howSpendsTime: [
        "Ensuring his engagements are staffed with the right combination of skillsets, backgrounds, and perspectives",
        "Ensuring his DGLees, mentees, and sponsorees receive the feedback and opportunities they need to grow",
        "Gathering feedback on and evaluating his DGLees",
        "Connecting colleagues in his care with Firm resources as needed (Mind Matters, HR, Immigration)"
      ],
      traitIcons: ["Focused on impact", "Embrace diversity", "Caring coach", "Committed ally", "Catalyst leader", "Champion for Firm values"],
      motivations: [
        "Build a great Firm that attracts, develops, excites, and retains exceptional people",
        "Ensure DGLees receive unbiased and meaningful mid- and year-end evaluations",
        "Increase the Firm's impact by developing and staffing exceptional talent"
      ],
      challenges: [
        "Information about staffing opportunities outside of his own network is hard to come by",
        "He has at least one other full-time job, which means he can't always spend as much time on apprenticeship as he would like",
        "Diverse engagement staffing isn't as emphasized as he would like"
      ],
      dailyToolkit: {
        produce: ["OneDrive", "PowerPoint", "Word", "Unicorn"],
        collaborate: ["Video", "Meeting"],
        administrate: ["E", "People Central"]
      },
      preferredChannels: {
        communication: [
          { name: "Email", level: 90 },
          { name: "Text", level: 65 },
          { name: "Slack", level: 70 }
        ],
        support: [
          { name: "GHD", level: 60 },
          { name: "CASEE", level: 45 },
          { name: "ITSA", level: 85 }
        ]
      }
    },
    {
      id: "emerson",
      name: "Emerson",
      role: "Engagement Team Lead",
      tagline: "Technology drives me to lead healthy teams that deliver deep and meaningful client impact.",
      avatar: "archetype-emerson.png",
      otherRoles: [],
      deviceUsage: { laptop: 55, desktop: 30, mobile: 15 },
      keyCollaborators: ["Client Service Leader", "Engagement Team Member", "Client", "Administrative Professional"],
      regionalConsiderations: {
        APAC: ["Frequent power outages in India", "Security needs in China", "WeChat used almost exclusively"],
        EMEA: ["Connectivity is spotty in much of Africa", "WhatsApp used frequently"],
        LatAm: ["Equipment provisioning issues & delays"],
        NA: ["Those serving governments may have different security requirements"]
      },
      description: "Emerson has extensive experience and a passion for client impact. He uses surveys and focus on team health to lead productive problem-solving sessions. He collaborates closely with clients and colleagues and is known for his problem-solving approach at the firm.",
      howSpendsTime: [
        "Ensuring engagement team health over the course of each study",
        "Defining the right tech ecosystem for each engagement",
        "Leading rich, productive problem-solving sessions that lead to actionable recommendations",
        "Reviewing, editing, and polishing content to reflect the work we do for our clients"
      ],
      traitIcons: ["Balance (20%)", "CVO (15%)", "Knowledge (25%)", "Teamwork (40%)"],
      motivations: [
        "Have substantial impact on his clients, productively, and be recognized for his contributions",
        "Apprentice himself to senior leaders he respects and admires",
        "Grow a deep and wide network inside and outside of the Firm",
        "Use technology to increase our client impact rather than distract from our work"
      ],
      challenges: [
        "The Firm's toolkit often differs from that of his clients, leading to administrative headaches",
        "Often feels like the study's traffic cop, directing communicators between the team, the ED, and the client",
        "Finding collaboration space at the McKinsey office gets harder every day",
        "Demands on his time keep increasing as his peers leave the Firm for new opportunities"
      ],
      dailyToolkit: {
        produce: ["Word", "Excel", "PowerPoint", "Teams", "SharePoint", "Outlook"],
        collaborate: ["CRM", "How", "Phone"],
        administrate: []
      },
      preferredChannels: {
        communication: [
          { name: "Email", level: 85 },
          { name: "Chat", level: 75 },
          { name: "Video Call", level: 80 },
          { name: "In-person", level: 70 }
        ],
        support: [
          { name: "Wiki/FAQ", level: 60 },
          { name: "Internal Help Desk", level: 70 },
          { name: "External Vendor", level: 30 },
          { name: "Peer/Colleague", level: 75 }
        ]
      }
    },
    {
      id: "simon",
      name: "Simon",
      role: "Services Team Member",
      tagline: "Technology empowers me to help my customers achieve their goals.",
      avatar: "archetype-simon.png",
      otherRoles: ["Data Scientist"],
      deviceUsage: { laptop: 70, mobile: 30, tablet: 0 },
      coreJourneys: ["I need a xxxxxxx", "I need a xxxxxxx", "I want to xxxxxxxx", "I want to xxxxxxxx"],
      keyCollaborators: ["Data Scientist", "Firm Leader", "Client Service Leader", "Supports all archetypes"],
      regionalConsiderations: {
        APAC: ["Frequent power outages in India", "Security needs in China vary greatly from global needs", "WeChat used almost exclusively with clients in China", "Strong cultural push against quality of HR considerations"],
        EMEA: ["Connectivity is spotty in much of Africa", "Power outages in many countries in Africa", "WhatsApp used frequently with colleagues in EU and UK/IO"],
        LatAm: ["Equipment provisioning issues & delays"],
        NA: ["Those serving governments may have different security requirements"]
      },
      description: "Simon gets job satisfaction from helping people. He faces challenges with workload and customer pressure, and frustration when lacking information. He is service-oriented and thrives on feedback.",
      howSpendsTime: [
        "Managing the backlog of requests from his customers",
        "Responding to requests efficiently and with a high level of service excellence",
        "Staying current on the Firm's toolkit",
        "Planning work for the weeks ahead based on data & trends",
        "Maintaining a deep understanding of his core customers"
      ],
      traitIcons: ["Likes structure", "Tech enthusiast", "Ticket closer", "Knowledge seeker", "Service-oriented", "Thrives on feedback"],
      motivations: [
        "Grow and learn as much as he can through continuous learning apprenticeship",
        "Stay current & certified on the latest technology relevant to his role",
        "Time to focus on each case or piece of work as it arises",
        "Be recognized by his peers and leadership for his impact and service"
      ],
      challenges: [
        "Feels under appreciated by the Firm and the colleagues he serves",
        "Finding the latest policies and KOs is a daily challenge",
        "Consistent, clear messaging about current and soon-to-come tech tools is not easily available",
        "Is often overwhelmed by all the demands on his time"
      ],
      dailyToolkit: {
        produce: ["PowerPoint", "Adobe Acrobat", "Word", "Outlook", "Google Maps", "GHD"],
        collaborate: ["Teams/SharePoint", "OneNote", "Zoom", "Box"],
        administrate: ["Salesforce/CRM", "Concur", "Oracle"]
      },
      preferredChannels: {
        communication: [
          { name: "Email", level: 85 },
          { name: "Text", level: 55 },
          { name: "Slack", level: 90 }
        ],
        support: [
          { name: "GHD", level: 75 },
          { name: "CASEE", level: 85 },
          { name: "ITSA", level: 20 }
        ]
      }
    },
    {
      id: "fiona",
      name: "Fiona",
      role: "Firm Leader",
      tagline: "Technology empowers me to realize my vision for the future of the Firm.",
      avatar: "archetype-fiona.png",
      otherRoles: ["People Leader", "Client Service Leader"],
      deviceUsage: { tablet: 60, laptop: 25, mobile: 15 },
      coreJourneys: ["I need xxxxxxxx", "I need xxxxxxxxx", "I want to xxxxxxxx", "I want to xxxxxxxx"],
      keyCollaborators: ["Client Service Leader", "Firm Professional", "Administrative Professional", "Data Scientist", "People Leader"],
      regionalConsiderations: {
        APAC: ["Frequent power outages in India", "Security needs in China vary greatly from global needs", "WeChat used almost exclusively with clients in China", "Strong cultural push against quality"],
        EMEA: ["Connectivity is spotty in much of Africa", "Power outages in many countries in Europe", "WhatsApp used frequently with colleagues in EU and UK/IO"],
        LatAm: ["Equipment provisioning issues & delays"],
        NA: ["Those serving governments may have different security requirements"]
      },
      description: "As the leader of one of our largest offices, Fiona divides her focus between defining the future of the office, coaching her team on crafting strategy and tactics to realize that vision, and serving her clients. Given the demands on her time, rapid access to accurate data about her office is absolutely critical—she needs to be able to make day-to-day decisions on her feet as well as to step back and look at the big picture when working to plan for the future. Since the beginning of the COVID-19 pandemic, much of her focus has been on attracting and retaining the key talent (especially EMs and APs) her offices needs to staff their increased engagement load, as well as on providing the transparency her current office members need to feel secure, productive, and connected.",
      howSpendsTime: [
        "Defining vision and strategy for the future of her office location",
        "Collaborating closely with fellow Firm leaders to navigate a complex external landscape",
        "Serving as a responsible steward of the Firm's resources regardless of the economic climate",
        "Working closely with her office leadership team to define and implement tactics that drive toward their shared vision"
      ],
      traitIcons: ["Loves data", "Aims for transparency", "Trend watcher", "Competitive", "Biased to action", "Champion for Firm values"],
      motivations: [
        "Uphold Firm values and preserve our culture, even as we scale in size",
        "Ensure her office can attract and retain the very best talent",
        "Make better, more data-informed decisions without losing time",
        "Communicate transparently with her office about what's happening at every level of the Firm"
      ],
      challenges: [
        "Information about her office is stored in too many places and delivered via too many reports and systems",
        "Cadence of her work is often governed by Firm committee meetings",
        "Attrition is high for our most critical roles, making engagements difficult to staff"
      ],
      dailyToolkit: {
        produce: ["Know", "P", "W", "Cloud"],
        collaborate: ["Video", "Person", "Grid", "X"],
        administrate: ["E", "People Control"]
      },
      preferredChannels: {
        communication: [
          { name: "Email", level: 90 },
          { name: "Text", level: 85 },
          { name: "Slack", level: 55 }
        ],
        support: [
          { name: "GHD", level: 60 },
          { name: "CASEE", level: 35 },
          { name: "ITSA", level: 15 }
        ]
      }
    }
  ]
};

// Expose for library.html
if (typeof window !== 'undefined') window.archetypeData = archetypeData;
