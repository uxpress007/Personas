const archetypeData = {
  archetypes: [
    {
      id: "technologist",
      name: "Tomas",
      role: "Technologist",
      tagline: "Technology provides me with workflows and environments that foster focus and feedback.",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Tomas",
      otherRoles: ["Practice", "Power user", "Engagement Team Member"],
      deviceUsage: { laptop: 65, mobile: 25, tablet: 10 },
      coreJourneys: ["Max direction", "Build new solutions", "Drive change", "Find mentors", "Have fun", "Deliver project content"],
      keyCollaborators: ["Engagement Team Lead", "One Data Core Team", "Project Team", "Coaching/Mentoring", "Data Science Teams", "Product Owners"],
      regionalConsiderations: {
        AMEC: ["Focused power-user in India"],
        GRN: ["Very active in the OneData Core program"],
        USC: ["Champion of OneData in Africa"]
      },
      narrative: "Tomas is an Expert (AP) design staff within the firm. He works on client challenges, fostering design-led problem-solving and mentoring new talent. He develops a deep understanding of clients' core customers, leads clients and colleagues through design-led problem solving to define and tackle business and user problems, and creates and shares assets and artifacts to ensure alignment and develop concepts, advising clients on design best practices.",
      howSpendsTime: [
        "Developing a deep understanding of his clients' core customers",
        "Leading clients and colleagues through design-led problem solving to define and tackle business and user problems",
        "Creating and sharing assets and artifacts to ensure alignment and develop concepts, advising clients on design best practices"
      ],
      timeIcons: [
        { label: "Max direction" },
        { label: "Build new solutions" },
        { label: "Drive change" },
        { label: "Find mentors" },
        { label: "Have fun" },
        { label: "Deliver project content" }
      ],
      motivations: [
        "Apply his craft to solve the world's toughest problems",
        "Have substantial impact",
        "Move freely across the tech ecosystem",
        "Be recognized by colleagues"
      ],
      challenges: [
        "Feels the Firm treats his tooling needs as secondary",
        "Aspires to protect the Firm but has trouble finding allies",
        "It takes ages to get access to sandbox environments"
      ],
      dailyToolkit: {
        produce: ["Excel", "PowerPoint", "Word", "Miro", "Tableau", "Python", "R", "VS Code", "Power BI", "Alteryx", "Salesforce", "Snowflake"],
        collaborate: ["Teams", "Outlook", "Box"],
        administrate: ["Workday", "Coupa"]
      },
      preferredChannels: {
        communication: [{ name: "Email", value: 85 }, { name: "IM", value: 80 }, { name: "Calls", value: 40 }, { name: "Video", value: 70 }, { name: "Social", value: 20 }],
        support: [{ name: "Offshore", value: 75 }, { name: "GMD", value: 70 }, { name: "IT helpdesk", value: 50 }, { name: "Firm", value: 45 }]
      },
      footerTitle: "Tomas and his friends: About our Technologists"
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
      id: "knowledge-professional",
      name: "Karol",
      role: "Knowledge Professional",
      tagline: "Technology frees me to expand my expertise and deliver insight that propels our clients toward their goals",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Karol",
      otherRoles: ["Engagement Team Member"],
      deviceUsage: { laptop: 70, mobile: 30 },
      coreJourneys: ["I need a xxxxxxx", "I want to xxxxxxx", "I want to xxxxxxx"],
      keyCollaborators: ["Engagement Team Lead", "Engagement Team Member", "Client Service Leader", "Administrative Professional"],
      regionalConsiderations: {
        APAC: ["Frequent power outages in India", "Security needs in China vary greatly from global needs", "WeChat used almost exclusively", "Strong cultural push against quality."],
        EMEA: ["Connectivity is spotty in much of Africa", "Power outages in many countries in Africa", "WhatsApp used frequently with colleagues in EU and UK/IO", "LinkedIn", "Equipment provisioning issues & delays"],
        NA: ["Those serving governments may have different security requirements"]
      },
      narrative: "Karol is an expert in the Firm's Client Capabilities Network, contributing to the knowledge base. They face challenges in collaborating with engagement teams and are skilled in hybrid working. They are focused on career growth and finding opportunities to join exciting engagements, partnering with Client Service and Engagement Team Leaders to scope expertise needs, delivering compelling expertise, and keeping current with the latest trends while contributing to the Firm's knowledge base.",
      howSpendsTime: [
        "Finding opportunities to join exciting engagements",
        "Partnering with Client Service and Engagement Team Leaders to scope expertise needs",
        "Delivering compelling expertise that urges teams and clients to action",
        "Keeping current with the very latest trends and developments in their area of expertise",
        "Regularly contributing to the Firm's knowledge base"
      ],
      timeIcons: [
        { label: "Load balancer" },
        { label: "Beacon of knowledge" },
        { label: "Network builder" },
        { label: "Information hungry" },
        { label: "Frequent traveler" },
        { label: "Dives deep" }
      ],
      motivations: [
        "Grow their network within the Firm to support career growth and opportunity identification",
        "Influence the Firm's official perspective on their area of expertise",
        "Help our clients make better bets and deliver real impact",
        "Be known as an expert inside and outside the Firm"
      ],
      challenges: [
        "Engagement teams are not always great at working in a hybrid mode, which can make it harder to help expertise land with clients",
        "Getting access to research from behind the China firewall is a persistent challenge",
        "Spending time combing through the Firm's systems looking for knowledge and fellow experts",
        "Is often treated like a journeyman rather than a respected expert"
      ],
      dailyToolkit: {
        produce: ["P3", "e", "X", "Know"],
        collaborate: ["Video", "DTN Connect", "N", "box"],
        administrate: ["Plane/Travel", "C", "Search"]
      },
      preferredChannels: {
        communication: [{ name: "Email", value: 85 }, { name: "Text", value: 70 }, { name: "Slack", value: 80 }],
        support: [{ name: "GHD", value: 75 }, { name: "CASEE", value: 60 }, { name: "ITSA", value: 65 }]
      },
      footerTitle: "Karol and their friends: About our Knowledge Professionals"
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
      otherRoles: ["Technologist"],
      deviceUsage: { laptop: 50, mobile: 25, tablet: 25 },
      coreJourneys: ["I need a xxxxxxxx", "I need a xxxxxxxx", "I want to xxxxxxxx", "I want to xxxxxxxx"],
      keyCollaborators: ["Technologist", "Firm Leader", "Client Service Leader", "Supports all archetypes"],
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
