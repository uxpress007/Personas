const archetypeData = {
  archetypes: [
    {
      id: "data-scientist",
      name: "Data Scientist",
      role: "Insights & modeling",
      tagline: "Turn data into actionable insight that drives client impact.",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=DataScientist",
      otherRoles: ["Analytics", "ML / stats modeling"],
      deviceUsage: { laptop: 65, mobile: 15, tablet: 20 },
      coreJourneys: ["Frame analytical questions", "Build models", "Tell the story", "Embed with teams"],
      keyCollaborators: ["Data Engineer", "Engagement teams", "Knowledge Professional", "Principal Architect"],
      regionalConsiderations: {
        APAC: ["Client data residency and access patterns vary widely"],
        EMEA: ["Model governance and GDPR-aligned analytics"],
        LATAM: ["Bandwidth for large datasets can affect iteration speed"],
        NORAM: ["Strong demand for real-time dashboards and self-serve analytics"]
      },
      narrative: "Mission: turn data into actionable insight that drives client impact. Typical firm tenure is roughly 2–5 years (junior through experienced practitioners). They frame ambiguous business problems into analytical questions, build statistical and ML models (forecasting, segmentation, optimization), translate results into clear decision-ready narratives, and partner with consultants and clients to embed insights.",
      howSpendsTime: [
        "Frame ambiguous business problems into analytical questions",
        "Build statistical / ML models (forecasting, segmentation, optimization)",
        "Translate results into clear, decision-ready narratives",
        "Partner with consultants and clients to embed insights"
      ],
      timeIcons: [
        { label: "Problem framing" },
        { label: "Modeling" },
        { label: "Storytelling" },
        { label: "Client partnership" }
      ],
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
        communication: [{ name: "Email", value: 75 }, { name: "IM", value: 80 }, { name: "Working sessions", value: 85 }, { name: "Video", value: 70 }],
        support: [{ name: "Data platform teams", value: 70 }, { name: "IT / access", value: 55 }, { name: "Knowledge / research", value: 65 }]
      },
      footerTitle: "Data Scientists: analytics that lands with clients"
    },
    {
      id: "data-engineer",
      name: "Data Engineer",
      role: "Data platforms & pipelines",
      tagline: "Build scalable, reliable data foundations that power analytics and AI.",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=DataEngineer",
      otherRoles: ["ETL/ELT", "Data quality & governance"],
      deviceUsage: { laptop: 70, mobile: 5, tablet: 25 },
      coreJourneys: ["Design pipelines", "Integrate sources", "Ensure quality", "Optimize cost & performance"],
      keyCollaborators: ["Data scientists", "Platform teams", "Security & risk", "Cloud architects"],
      regionalConsiderations: {
        APAC: ["Multi-region replication and latency-sensitive jobs"],
        EMEA: ["Sovereign cloud and residency requirements"],
        LATAM: ["Hybrid on-prem and cloud footprints"],
        NORAM: ["Lakehouse and modern warehouse adoption"]
      },
      narrative: "Mission: build scalable, reliable data foundations that power analytics and AI. Typical firm tenure is roughly 2–5 years (often longer for specialized senior engineers). They design and build data pipelines (ETL/ELT), integrate structured and unstructured sources, ensure data quality, governance, and accessibility, and optimize infrastructure for performance and cost.",
      howSpendsTime: [
        "Design and build data pipelines (ETL/ELT)",
        "Integrate multiple data sources (structured / unstructured)",
        "Ensure data quality, governance, and accessibility",
        "Optimize infrastructure for performance and cost"
      ],
      timeIcons: [
        { label: "Pipelines" },
        { label: "Integration" },
        { label: "Quality" },
        { label: "Scale" }
      ],
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
        communication: [{ name: "IM", value: 85 }, { name: "Email", value: 65 }, { name: "Incident bridge", value: 70 }, { name: "Video", value: 60 }],
        support: [{ name: "Cloud support", value: 75 }, { name: "Platform SRE", value: 70 }, { name: "Vendor support", value: 50 }]
      },
      footerTitle: "Data Engineers: trusted pipelines and platforms"
    },
    {
      id: "principal-architect",
      name: "Principal Architect",
      role: "Enterprise & solution architecture",
      tagline: "Design end-to-end technology architecture enabling scalable digital and AI transformation.",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=PrincipalArchitect",
      otherRoles: ["Multi-cloud", "Security trade-offs"],
      deviceUsage: { laptop: 55, mobile: 5, tablet: 40 },
      coreJourneys: ["Define architecture", "Select platforms", "Guide engineering", "Engage executives"],
      keyCollaborators: ["Engineering leads", "CIO/CTO stakeholders", "Security", "Data platform leads"],
      regionalConsiderations: {
        APAC: ["Regulated industries and cross-border data flows"],
        EMEA: ["Zero-trust and hybrid integration complexity"],
        LATAM: ["Vendor footprint and managed services mix"],
        NORAM: ["Large-scale modernization and platform consolidation"]
      },
      narrative: "Mission: design end-to-end technology architecture enabling scalable digital and AI transformation. Typical firm tenure is roughly 8–15+ years, often including prior industry experience. They define architecture across applications, data, and infrastructure; select platforms and integration patterns; balance cost, performance, security, and maintainability; and guide engineering teams while engaging senior client stakeholders.",
      howSpendsTime: [
        "Define architecture across applications, data, and infrastructure",
        "Select platforms, define integration patterns, and ensure scalability",
        "Balance trade-offs (cost, performance, security, maintainability)",
        "Guide engineering teams and engage senior client stakeholders"
      ],
      timeIcons: [
        { label: "Reference models" },
        { label: "Trade-offs" },
        { label: "Scale" },
        { label: "Stakeholder alignment" }
      ],
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
        communication: [{ name: "Executive workshops", value: 80 }, { name: "Email", value: 70 }, { name: "Video", value: 75 }, { name: "Architecture forums", value: 85 }],
        support: [{ name: "Cloud partner teams", value: 75 }, { name: "Security architecture", value: 80 }, { name: "EA guild", value: 65 }]
      },
      footerTitle: "Principal Architects: durable technical strategy"
    },
    {
      id: "knowledge-professional",
      name: "Knowledge Professional",
      role: "Research & domain synthesis (KP)",
      tagline: "Bring the best of the Firm's knowledge to every client problem.",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=KnowledgePro",
      otherRoles: ["Expert research", "IP & thought leadership"],
      deviceUsage: { laptop: 75, mobile: 5, tablet: 20 },
      coreJourneys: ["Curate knowledge", "Synthesize benchmarks", "Support teams", "Deepen domain expertise"],
      keyCollaborators: ["Engagement teams", "Client service leaders", "Subject-matter experts", "Research platforms"],
      regionalConsiderations: {
        APAC: ["Access to global research tools varies by market"],
        EMEA: ["Multilingual sources and regulatory context"],
        LATAM: ["Industry datasets and local benchmarks"],
        NA: ["High volume of peer-firm and capital-markets intelligence requests"]
      },
      narrative: "Mission: bring the best of the Firm's knowledge to every client problem. Typical firm tenure is roughly 2–5 years (longer for deep domain experts). Knowledge Professionals curate and synthesize firm knowledge and benchmarks, support teams with targeted research and insights, develop thought leadership and IP, and provide domain expertise in industry and function.",
      howSpendsTime: [
        "Curate and synthesize firm knowledge and benchmarks",
        "Support teams with targeted research and insights",
        "Develop thought leadership and IP",
        "Provide domain expertise in industry and function"
      ],
      timeIcons: [
        { label: "Synthesis" },
        { label: "Benchmarks" },
        { label: "Story-ready insights" },
        { label: "Domain depth" }
      ],
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
        communication: [{ name: "Email", value: 80 }, { name: "IM", value: 75 }, { name: "Office hours / clinics", value: 70 }, { name: "Video", value: 65 }],
        support: [{ name: "Library / research desk", value: 70 }, { name: "Data product teams", value: 55 }, { name: "Legal / compliance for sources", value: 50 }]
      },
      footerTitle: "Knowledge Professionals: insight at the speed of the Firm"
    },
    {
      id: "engagement-team-member",
      name: "Eloise",
      role: "Engagement Team Member",
      tagline: "Technology gives me the power of McKinsey, wherever I work.",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Eloise",
      otherRoles: [],
      deviceUsage: { laptop: 70, mobile: 30 },
      coreJourneys: ["I want to innovate.", "I want to collaborate.", "I want to learn.", "I want to earn.", "I want to serve.", "I want to be recognized.", "I want to build my network."],
      keyCollaborators: ["Engagement Team Lead", "Client Service Leader", "Firm Professional"],
      regionalConsiderations: {
        AMRS: ["Frequent travel, engage in info... security, needs in China very strong, IT for global heads."],
        EMEA: ["Strong focus on IT and security, wifi strong in UKIE."],
        APJ: ["Strong culture gives high priority to this (Asia & Pacific region)."],
        INDIA: ["Connectivity is key for much of India."],
        LATAM: ["Personalization is more important in Arica."],
        NA: ["There are very diverse needs here. They are focused on US and UKID."]
      },
      narrative: "Eloise is dedicated to understanding client problems through data generation, analysis, and content creation. She focuses on building relationships and learning. She faces ambitious deadlines and sometimes insufficient tools, but remains committed to generating data through interviews and surveys, gathering and analyzing client data sets, and creating content to communicate insights and recommendations. She pursues her own professional development via apprenticeship.",
      howSpendsTime: [
        "Generating data through interviews and surveys",
        "Gathering, wrangling, and analyzing client data sets",
        "Creating, editing, and polishing content to communicate insights and recommendations",
        "Pursuing her own professional development via apprenticeship"
      ],
      timeIcons: [
        { label: "Team Leader" },
        { label: "Frequent client" },
        { label: "Internal initiatives" },
        { label: "Maintain budget" },
        { label: "Up for a challenge" },
        { label: "Engagement Team Leader" }
      ],
      motivations: [
        "Learning as much as possible during her tenure at the Firm",
        "Impressing her leaders and her clients with her work",
        "Building more and deeper relationships with colleagues and clients"
      ],
      challenges: [
        "Precious time sapped by dealing with admin like travel and calendars",
        "Less time onsite with clients than she would like",
        "Shifting priorities, ambitious deadlines, and a deep backlog of work"
      ],
      dailyToolkit: {
        produce: ["Excel", "PowerPoint", "Word"],
        collaborate: ["Teams", "SharePoint", "Outlook", "Zoom", "Box"],
        administrate: ["Travel/Expense", "C."]
      },
      preferredChannels: {
        communication: [{ name: "IM", value: 90 }, { name: "Email", value: 85 }, { name: "Phone", value: 50 }, { name: "Video", value: 75 }, { name: "Social", value: 30 }],
        support: [{ name: "IT", value: 70 }, { name: "HR", value: 40 }, { name: "CM", value: 35 }, { name: "CALL", value: 60 }]
      },
      footerTitle: "Eloise and her friends: About our Engagement Team Members"
    },
    {
      id: "client-service-leader",
      name: "Chloe",
      role: "Client Service Leader",
      tagline: "Technology helps me stay focused on clients and apprenticeship",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Chloe",
      otherRoles: ["Other Leader"],
      deviceUsage: { laptop: 75, tablet: 20, mobile: 5 },
      coreJourneys: ["Lead client engagement", "Build relationships", "Manage pipeline", "Lead and develop"],
      keyCollaborators: ["Engagement Team Lead", "Client", "Engagement Team Member", "Firm Leader", "Administrative Professional"],
      regionalConsiderations: {
        AMEC: ["Frequent travel outages in India", "Heavy reliance on China for data security needs", "Well-established relationship with clients in China"],
        EMEA: ["Strong cultural and social aspects of firm collaborations", "Connectivity is a pain in parts of Africa", "Fewer support in some countries in Africa", "WhatsApp used frequently with colleagues in EU and UKG"],
        LATAM: ["Expatriate provisioning issues & dread"],
        NORAM: ["These service documents may have inconsistent data sources"]
      },
      narrative: "Chloe creates positive, enduring change and values client relationships and managing risk. She needs simpler access to information and delegation of tasks. She thrives on delivering distinctive impact and bringing the best of the Firm to every discussion, including an increasing number of remotely delivered LOPs. She is interested in introducing new topics to clients.",
      howSpendsTime: [
        "Leading CSTs for several clients",
        "Coaching client executives as well as the Firm's most senior consultants",
        "Working to grow the Firm's presence with her current clients as well as to grow our client base",
        "Ensuring the work we do makes meaningful impact while protecting the Firm and our clients from risk",
        "Building her external presence through social media and networking"
      ],
      timeIcons: [
        { label: "Read new/old reports" },
        { label: "Plan activities" },
        { label: "Time-sheet entry" },
        { label: "Goal oriented" },
        { label: "Email delegation" },
        { label: "Escalate to action" }
      ],
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
        produce: ["Spreadsheet", "Presentation", "Document", "Cloud"],
        collaborate: ["Video", "Phone"],
        administrate: ["Email"]
      },
      preferredChannels: {
        communication: [{ name: "Email", value: 90 }, { name: "Text", value: 60 }],
        support: [{ name: "CRM", value: 75 }, { name: "Chat", value: 40 }, { name: "FAQs", value: 80 }]
      },
      footerTitle: "Chloe and her friends: About our Client Service Leaders"
    },
    {
      id: "client-leader",
      name: "Cassandra",
      role: "Client Leader",
      tagline: "Technology makes connecting with the Firm easier and more rewarding.",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Cassandra",
      otherRoles: ["N/A"],
      deviceUsage: { laptop: 60, tablet: 25, mobile: 15 },
      coreJourneys: ["I need a XXXXXXX", "I want to XXXXXXX", "I want to XXXXXXX"],
      keyCollaborators: ["Client Service Leader", "Engagement Team Lead", "Administrative Professional"],
      regionalConsiderations: {
        APAC: ["Frequent power outages in India", "Security needs in China vary greatly from global needs", "WeChat used almost exclusively with clients in China", "Strong cultural push against quality of life considerations."],
        EMEA: ["Connectivity a spotty in much of Africa", "Power outages in many countries in Africa", "WhatsApp used frequently with colleagues in EU and UK/ID."],
        LatAm: ["Equipment provisioning issues & delays", "Those serving governments may have different security requirements"]
      },
      narrative: "Cassandra is an experienced client valuing analysis, unbiased insight, deep knowledge, and personal counsel from her advisor Chloe. She uses the Firm's Insights app and newsletters. She is frustrated with collaboration difficulties due to confidentiality protections, which limit access to past engagements for new leaders.",
      howSpendsTime: [
        "Defining vision and strategy for the future of her organization",
        "Engaging with Chloe to design the scope, scale, and expectations for the engagement",
        "Leading her team and ensuring her organization continues to produce even during times of uncertainty and change",
        "Working closely with Chloe and her own team to ensure the Firm's recommendations will translate to implementation and impact"
      ],
      timeIcons: [
        { label: "Aims for impact" },
        { label: "Decision maker" },
        { label: "Trend watcher" },
        { label: "Focused on financials" },
        { label: "Lifelong learner" },
        { label: "Embraces change" }
      ],
      motivations: [
        "Deliver meaningful change in line with her CEO's expectations",
        "Grow as a leader, learning all she can along the way",
        "Support her organization through change when it does come",
        "Develop the leaders on her team so that her own focus can expand"
      ],
      challenges: [
        "Agreeing on engagement pricing can be a tricky experience",
        "Collaboration with McKinsey is often hampered by differences in tech and by security restrictions (e.g., SMS not allowed for McKinsey folks)",
        "Handoff from McKinsey for implementation can often feel rushed, incomplete, or sterile"
      ],
      dailyToolkit: {
        produce: ["Pp", "X", "W", "Folder"],
        collaborate: ["Chat", "Meeting"],
        administrate: []
      },
      preferredChannels: {
        communication: [{ name: "Email", value: 90 }, { name: "Text", value: 70 }, { name: "Slack", value: 50 }],
        support: [{ name: "GHD", value: 0 }, { name: "CASEE", value: 0 }, { name: "ITSA", value: 0 }]
      },
      footerTitle: "Cassandra and her friends: About our Clients"
    },
    {
      id: "firm-professional",
      name: "Federika",
      role: "Firm Professional",
      tagline: "Technology empowers me to deliver impact in service of the Firm's aspirations.",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Federika",
      otherRoles: ["People Leader"],
      deviceUsage: { laptop: 80, mobile: 20 },
      coreJourneys: ["Create a winning proposal", "Curate knowledge", "Mentor a colleague", "Contribute knowledge to the Firm"],
      keyCollaborators: ["Client Service Leader", "Firm Professional", "Administrative Professional", "People Leader", "Engagement Team Lead", "Knowledge Professional"],
      regionalConsiderations: {
        APAC: ["Frequent power outages in India", "Security needs in China varying greatly from global needs", "WeChat used almost exclusively with clients in China", "Strong cultural push against quality of life considerations."],
        EMEA: ["Spotty connectivity in much of Africa", "Power outages in many countries in Africa", "WhatsApp used frequently with colleagues in EU and UKIO."],
        LatAm: ["Equipment provisioning issues & delays."],
        NA: ["Some serving governments may have different security requirements"]
      },
      narrative: "Federika is a Practice Manager responsible for operations, client service support, people operations, knowledge, and external reputation building. She juggles initiatives, relies on firm tech, and focuses on reducing redundant efforts, delivering client service, growing practice influence, and developing team members. She is a former consultant and is occasionally frustrated with finding support and information for new projects.",
      howSpendsTime: [
        "Defining the strategy to support the growth of her practice in both size and influence",
        "Working closely with her practice leadership to build the practice's external reputation",
        "Managing the operations of the practice, including process, knowledge building, and people operations",
        "Leading several initiatives to transform or evolve the practice's ways of working"
      ],
      timeIcons: [
        { label: "Expert multi-tasker" },
        { label: "Natural entrepreneur" },
        { label: "Knowledge maven" },
        { label: "Collaborative" },
        { label: "Obsessed with client impact" },
        { label: "Focused on growth" }
      ],
      motivations: [
        "Be seen as indispensable to her practice and the Firm",
        "Shape her practice to meet current challenges as well as ready it for the future",
        "Grow the reputation of her practice within and outside of the Firm",
        "Continue to grow within the Firm and make her own McKinsey, finding opportunities for impact and influence"
      ],
      challenges: [
        "Tech at the Firm feels like it changes quickly, but not always in ways that help her",
        "She is expected to invest time in manual, repetitive work - despite also having senior level delivery expectations",
        "Tools are often chosen for cost or stakeholder reasons and don't do what she needs"
      ],
      dailyToolkit: {
        produce: ["Know", "C", "P3", "W", "X"],
        collaborate: ["Video", "People", "N", "box"],
        administrate: ["People Control"]
      },
      preferredChannels: {
        communication: [{ name: "Email", value: 90 }, { name: "Text", value: 55 }, { name: "Slack", value: 85 }],
        support: [{ name: "GHD", value: 80 }, { name: "CASEE", value: 60 }, { name: "ITSA", value: 65 }]
      },
      footerTitle: "Federika and her friends: About our Firm Professionals"
    },
    {
      id: "administrative-professional",
      name: "Aaron",
      role: "Administrative Professional",
      tagline: "Technology frees me to focus on the most critical needs of the colleagues I support",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Aaron",
      otherRoles: ["People Leader"],
      deviceUsage: { laptop: 70, mobile: 30 },
      coreJourneys: ["I need a xxxxxxxx", "I need a xxxxxxxx", "I want to xxxxxxxx", "I want to xxxxxxxx"],
      keyCollaborators: ["Engagement Team Lead", "Engagement Team Member", "Administrative Professional", "Services Team Member", "People Leader", "Client Service Leader"],
      regionalConsiderations: {
        APAC: ["Frequent power outages in India", "Security needs in China vary greatly from global needs", "WeChat used almost exclusively with clients in China", "Strong cultural push against quality of life considerations"],
        EMEA: ["Connectivity is spotty in much of Africa", "Power outages in many countries in Africa", "WhatsApp used frequently with colleagues in EU and UK/IO"],
        LatAm: ["Equipment provisioning issues & delays"],
        NA: ["Those serving governments may have different security requirements"]
      },
      narrative: "Aaron provides moment-to-moment transparency on the status of work for colleagues he supports. He ensures successful travel experiences, organizes meetings including coordinating timing and booking locations, files expenses and logs timesheets and PTO quickly and accurately, and maintains a database of contacts. He desires better tools to support his team lead responsibilities.",
      howSpendsTime: [
        "Providing moment to moment transparency on the status of work for colleagues he supports",
        "Ensuring his supported colleagues have successful travel experiences",
        "Organizing meetings for his supported colleagues, including coordinating timing, booking locations, and ensuring local tech supports the gathering",
        "Filing expenses and logging timesheets and PTO quickly and accurately",
        "Maintaining a database of contacts for the colleagues he supports"
      ],
      timeIcons: [
        { label: "Time starved" },
        { label: "Top-notch multitasker" },
        { label: "Detail oriented" },
        { label: "Workaround expert" },
        { label: "Checklist lover" },
        { label: "Honorary tech support" }
      ],
      motivations: [
        "Form collaborative relationships with and receive recognition from the colleagues he supports",
        "Exert influence on the tech and tools selected for use at the Firm",
        "Evolve the best practices he employs to support his colleagues",
        "Steward the Firm's resources responsibly when booking travel and meals"
      ],
      challenges: [
        "The tools he uses and the norms he follows depend heavily on the specific people he supports",
        "He has developed his own strong preferences and workarounds over many years",
        "Context switching is constant, adding time and cognitive burden",
        "Often lacks access to the tools and tech he needs to complete delegated tasks"
      ],
      dailyToolkit: {
        produce: ["box", "N", "Folder", "C.", "V"],
        collaborate: ["Video", "People"],
        administrate: ["RAST"]
      },
      preferredChannels: {
        communication: [{ name: "Email", value: 90 }, { name: "Text", value: 65 }, { name: "Slack", value: 85 }],
        support: [{ name: "ED", value: 80 }, { name: "GHD", value: 55 }, { name: "CABEE", value: 60 }, { name: "ITSA", value: 60 }]
      },
      footerTitle: "Aaron and his friends: About our Administrative Professionals"
    },
    {
      id: "people-leader",
      name: "Peter",
      role: "People Leader",
      tagline: "Technology enables me to develop and staff exceptional and diverse talent",
      avatar: "peter-people-leader.png",
      otherRoles: ["Client Service Leader"],
      deviceUsage: { laptop: 30, mobile: 70 },
      coreJourneys: ["Ramp up an engagement", "Evaluate a colleague", "Sponsor a colleague", "Mentor a colleague"],
      keyCollaborators: ["Client Service Leader", "Firm Professional", "Administrative Professional", "Engagement Team Lead", "Engagement Team Member"],
      regionalConsiderations: {
        APAC: ["Frequent power outages in India", "Security needs in China very greatly from global needs", "WeChat used almost exclusively with clients in China", "Strong cultural push against quality of life considerations"],
        EMEA: ["Connectivity is spotty in much of Africa", "Power outages in many countries in Africa", "WhatsApp used frequently with colleagues in EU and UK/IO"],
        LatAm: ["Equipment provisioning issues & delays"],
        NA: ["Those serving governments may have different security requirements"]
      },
      narrative: "As a Partner of the Firm, Peter spends most of his time cultivating client relationships and delivering meaningful impact for clients through engagements and solution delivery. His deep commitment to creating an unrivaled environment for exceptional people informs his approach to client work. He believes client engagements are as much an opportunity for sponsorship and professional development as they are for client impact, and works hard to make sure the colleagues he coaches, mentors, and sponsors receive the feedback and opportunities they need to grow. He actively embraces and celebrates the diversity of his DGLees' contributions and backgrounds and strives to provide nonhierarchical and inclusive coaching.",
      howSpendsTime: [
        "Ensuring his engagements are staffed with the right combination of skillsets, backgrounds, and perspectives",
        "Ensuring his DGLees, mentees, and sponsorees receive the feedback and opportunities they need to grow",
        "Gathering feedback on and evaluating his DGLees",
        "Connecting colleagues in his care with Firm resources as needed (Mind Matters, HR, Immigration)"
      ],
      timeIcons: [
        { label: "Focused on impact" },
        { label: "Embrace diversity" },
        { label: "Caring coach" },
        { label: "Committed ally" },
        { label: "Catalyst leader" },
        { label: "Champion for Firm values" }
      ],
      motivations: [
        "Build a great Firm that attracts, develops, excites, and retains exceptional people",
        "Ensure his DGLees receive unbiased and meaningful mid- and year-end evaluations",
        "Increase the Firm's impact by developing and staffing exceptional talent"
      ],
      challenges: [
        "Information about staffing opportunities outside of his own network is hard to come by",
        "He has at least one other full time job, which means he can't always spend as much time on apprenticeship as he would like",
        "Diverse engagement staffing isn't as emphasized as he would like"
      ],
      dailyToolkit: {
        produce: ["Word", "PowerPoint", "Excel", "Unicorn"],
        collaborate: ["Video", "People"],
        administrate: ["E", "People Control"]
      },
      preferredChannels: {
        communication: [{ name: "Email", value: 85 }, { name: "Text", value: 80 }, { name: "Slack", value: 75 }],
        support: [{ name: "GHD", value: 55 }, { name: "CASEE", value: 75 }, { name: "ITSA", value: 70 }]
      },
      footerTitle: "Peter and his friends: About our People Leaders"
    },
    {
      id: "engagement-team-lead",
      name: "Emerson",
      role: "Engagement Team Lead",
      tagline: "Technology drives me to lead healthy teams that deliver deep and meaningful client impact!",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Emerson",
      otherRoles: [],
      deviceUsage: { laptop: 60, mobile: 40 },
      coreJourneys: ["Remote", "Video Calls", "Team Huddles", "Review"],
      keyCollaborators: ["Client Service Leader", "Engagement Team Member", "Firm Professional"],
      regionalConsiderations: {
        APAC: ["Frequent power outages in India", "Security needs in China vary greatly"],
        EMEA: ["Connectivity spotty in much of Africa", "WhatsApp used frequently in EU and UK/IO"],
        LatAm: ["Equipment provisioning issues & delays"],
        NA: ["Those serving governments may have different security requirements"]
      },
      narrative: "It's often said that leading an engagement is the hardest job at the Firm. Emerson leads healthy teams that deliver deep and meaningful client impact. He balances client delivery with team development, stakeholder management, and operational excellence.",
      howSpendsTime: [
        "Leading engagement teams to deliver on client commitments",
        "Managing team dynamics and ensuring psychological safety",
        "Coordinating with Client Service Leaders and clients on scope and expectations",
        "Reviewing and quality-assuring team output"
      ],
      timeIcons: [
        { label: "Remote" },
        { label: "Video Calls" },
        { label: "Team Huddles" },
        { label: "Review" }
      ],
      motivations: [
        "Deliver distinctive impact for clients",
        "Develop and grow team members",
        "Be recognized as an effective leader",
        "Balance delivery with team health"
      ],
      challenges: [
        "Juggling multiple stakeholders and priorities",
        "Keeping the team motivated through long engagements",
        "Access to the right tools and information at the right time"
      ],
      dailyToolkit: {
        produce: ["a", "x", "Share", "Teams", "Slack", "C"],
        collaborate: ["Teams", "Zoom", "Box"],
        administrate: ["Workday", "Concur"]
      },
      preferredChannels: {
        communication: [{ name: "Email", value: 85 }, { name: "IM", value: 90 }, { name: "Slack", value: 80 }, { name: "Calls", value: 60 }],
        support: [{ name: "GHD", value: 50 }, { name: "CASEE", value: 65 }, { name: "ITSA", value: 70 }]
      },
      footerTitle: "Emerson and his friends: About our Engagement Team Leads"
    },
    {
      id: "services-team-member",
      name: "Simon",
      role: "Services Team Member",
      tagline: "Technology empowers me to help my customers achieve their goals",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Simon",
      otherRoles: ["Data Scientist"],
      deviceUsage: { laptop: 50, mobile: 25, tablet: 25 },
      coreJourneys: ["I need a xxxxxxxx", "I need a xxxxxxxx", "I want to xxxxxxxx", "I want to xxxxxxxx"],
      keyCollaborators: ["Data Scientist", "Firm Leader", "Client Service Leader", "Supports all archetypes"],
      regionalConsiderations: {
        APAC: ["Frequent power outages in India", "Security needs in China vary greatly from global needs", "WeChat used almost exclusively with clients in China", "Strong cultural push against quality of HR considerations."],
        EMEA: ["Connectivity is spotty in much of Africa", "Power outages in many countries in Africa", "WhatsApp used frequently with colleagues in EU and UK/IO."],
        LatAm: ["Equipment provisioning issues & delays", "Those serving governments may have different security requirements"]
      },
      narrative: "Simon enjoys helping people and the training that the Firm has given him has helped him do what comes naturally. Working with his internal customers to solve their problems quickly gives Simon energy. Lately, the work never stops for Simon. He's been working with his team to try to manage and plan the workload, but it can get overwhelming at times. However, the Firm has never been busier and the requests coming in from his customers can seem endless. It's clear Simon's customers are under pressure as well, and their gruff manner can sometimes upset Simon or throw him off his game – particularly when he doesn't have the latest information at his fingertips.",
      howSpendsTime: [
        "Managing the backlog of requests from his customers",
        "Responding to requests efficiently and with a high level of service excellence",
        "Staying current on the Firm's toolkit",
        "Planning work for the weeks ahead based on data & trends",
        "Maintaining a deep understanding of his core customers"
      ],
      timeIcons: [
        { label: "Likes structure" },
        { label: "Tech enthusiast" },
        { label: "Ticket closer" },
        { label: "Knowledge seeker" },
        { label: "Service-oriented" },
        { label: "Thrives on feedback" }
      ],
      motivations: [
        "Grow and learn as much as he can through continuous learning apprenticeship",
        "Stay current & certified on the latest technology relevant to his role",
        "Time to focus on each case of piece of work as it arises",
        "Be recognized by his peers and leadership for his impact and service"
      ],
      challenges: [
        "Feels under appreciated by the Firm and the colleagues he serves",
        "Finding the latest policies and KOs is a daily challenge",
        "Consistent, clear messaging about current and soon-to-come tech tools is not easily available",
        "Is often overwhelmed by all the demands on his time"
      ],
      dailyToolkit: {
        produce: ["PowerPoint", "Acrobat", "Word", "Outlook", "GHD"],
        collaborate: ["Teams", "Notion", "Zoom", "Box"],
        administrate: ["Salesforce", "Concur"]
      },
      preferredChannels: {
        communication: [{ name: "Email", value: 95 }, { name: "Text", value: 65 }, { name: "Slack", value: 100 }],
        support: [{ name: "GHD", value: 75 }, { name: "CASEE", value: 95 }, { name: "ITSA", value: 25 }]
      },
      footerTitle: "Simon and his friends: About our Service Team Members"
    },
    {
      id: "firm-leader",
      name: "Fiona",
      role: "Firm Leader",
      tagline: "Technology empowers me to realize my vision for the future of the Firm",
      avatar: "fiona-firm-leader.png",
      otherRoles: ["People Leader", "Client Service Leader"],
      deviceUsage: { laptop: 50, mobile: 30, desktop: 20 },
      coreJourneys: ["I need xxxxxxxx", "I want to xxxxxxxx", "I need xxxxxxxx", "I want to xxxxxxxx"],
      keyCollaborators: ["Client Service Leader", "Firm Professional", "Administrative Professional", "People Leader", "Engagement Team Lead"],
      regionalConsiderations: {
        APAC: ["Frequent power outages in India", "Security needs in China vary greatly from global needs", "WeChat used almost exclusively with clients in China", "Strong cultural push against quality of life considerations."],
        EMEA: ["Connectivity is spotty in much of Africa", "Power outages in many countries in Africa", "WhatsApp used frequently with colleagues in EU and UK/IO."],
        LatAm: ["Equipment provisioning issues & delays"],
        AM: ["Those serving governments may have different security requirements"]
      },
      narrative: "As the leader of one of our largest offices, Fiona divides her focus between defining the future of the office, coaching her team on crafting strategy and tactics to realize that vision, and serving her clients. Given the demands on her time, rapid access to accurate data about her office is absolutely critical — she needs to be able to make day-to-day decisions on her feet as well as to step back and look at the big picture when working to plan for the future. Since the beginning of the COVID-19 pandemic, much of her focus has been on attracting and retaining the key talent (especially EMs and APs) her offices needs to staff their increased engagement load, as well as on providing the transparency her current office members need to feel secure, productive, and connected.",
      howSpendsTime: [
        "Defining vision and strategy for the future of her office location",
        "Collaborating closely with fellow Firm leaders to navigate a complex external landscape",
        "Serving as a responsible steward of the Firm's resources regardless of the economic climate",
        "Working closely with her office leadership team to define and implement tactics that drive toward their shared vision"
      ],
      timeIcons: [
        { label: "Loves data" },
        { label: "Aims for transparency" },
        { label: "Trend watcher" },
        { label: "Competitive" },
        { label: "Biased to action" },
        { label: "Champion for Firm values" }
      ],
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
        produce: ["Document", "C", "PowerPoint", "Word", "Excel"],
        collaborate: ["Video", "People", "Calendar", "Excel"],
        administrate: ["E", "People Control"]
      },
      preferredChannels: {
        communication: [{ name: "Email", value: 90 }, { name: "Text", value: 70 }, { name: "Slack", value: 60 }],
        support: [{ name: "GHD", value: 55 }, { name: "CASEE", value: 75 }, { name: "ITSA", value: 80 }]
      },
      footerTitle: "Fiona and her friends: About our Firm Leaders"
    }
  ]
};
