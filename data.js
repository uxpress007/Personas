const personaData = {
  categories: [
    {
      id: "csp",
      name: "CSP",
      fullName: "Client Service Professionals",
      color: "#4338ca",
      colorLight: "#e0e7ff",
      description: "Professionals who directly serve clients across various seniority levels, from senior leadership to analyst roles.",
      groups: [
        {
          id: "csp-senior-partners",
          name: "Senior Partners",
          personas: [
            {
              id: "csp-sp-1",
              name: "Strategic Sarah",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
              role: "Senior Partner",
              tenure: "15+ years",
              description: "A seasoned senior partner who leads major client engagements and drives firm strategy. Focuses on building long-term client relationships and mentoring the next generation of partners.",
              coreNeeds: ["Strategic client growth", "Firm governance", "Talent development"],
              motivations: ["Legacy building", "Client impact", "Revenue growth"],
              frustrations: ["Bureaucratic processes", "Slow decision-making", "Resource constraints"]
            },
            {
              id: "csp-sp-2",
              name: "Visionary Victor",
              avatar: "https://randomuser.me/api/portraits/men/32.jpg",
              role: "Senior Partner",
              tenure: "20+ years",
              description: "A visionary leader who champions innovation and digital transformation for clients. Known for thought leadership and industry expertise.",
              coreNeeds: ["Innovation platforms", "Industry insights", "Cross-practice collaboration"],
              motivations: ["Industry influence", "Transformative impact", "Knowledge sharing"],
              frustrations: ["Technology adoption gaps", "Siloed practices", "Market disruption"]
            },
            {
              id: "csp-sp-3",
              name: "John",
              avatar: "john-senior-partner.png",
              role: "Senior Partner",
              tenure: "20+ years",
              office: "London",
              quote: "I don't want the technology to be in the way of my relationship with the client.",
              description: "A relationship-driven Senior Partner with 20+ years of tenure based in London. Values deep client trust and high-impact delivery above all. Prefers structured, in-person engagements and relies on EA support for technology and administrative tasks.",
              techProfile: {
                techLiteracy: 30,
                workingStyle: "Structured",
                adaptabilityToChange: 30,
                meetingPreference: "In Person"
              },
              location: {
                clientSite: 40,
                localOffice: 20,
                remoteHomeOffice: 40
              },
              devices: ["Laptop", "Mobile", "Tablet"],
              inclusiveDesignLenses: ["Time limited", "Attention limited", "Mobile only", "Tenure"],
              coreNeeds: [
                "Delivering the highest impact for my clients",
                "Creating a trustworthy client relationship",
                "Minimizing the chaos in my life",
                "Creating a balance between work and personal life – managing time",
                "No waste of time on low-priority activities, reduce administration tasks",
                "EA has pre-approved access to all required tools and technology"
              ],
              goals: [
                "Securing new clients",
                "Offering an easy experience for the client interacting with us",
                "Leading a happy and healthy team",
                "Maintain existing client relationships",
                "Leverage experience, knowledge, and skills to attract the most interesting clients",
                "Secure the position of McKinsey as an industry leader",
                "Protecting the Firm and Clients",
                "Secure long lasting client relationships – R&R are really important"
              ],
              motivations: [
                "Drive the best client impact",
                "Retention of our people",
                "Growing the Firm and its people",
                "Constantly learning and trying to respond to the changing world",
                "To be innovative / groundbreaking",
                "Pride in being part of leadership at McKinsey – it is prestigious",
                "The success of the Firm benefits me",
                "Preparing well for my retirement"
              ],
              frustrations: [
                "Prefers the 'way it used to be' and resorts to 4 days on client by default",
                "Difficulty utilizing technology – resorts to white glove support",
                "No time to learn or read",
                "Not technology compatible with clients",
                "VC in offices differs from the one in the meeting rooms",
                "Technology restrictions slow down work",
                "Client uses technology not approved by McKinsey Cyber Security",
                "Too many videoconferences – loses the personal aspects of in-person meetings"
              ]
            }
          ]
        },
        {
          id: "csp-partners",
          name: "Partners",
          personas: [
            {
              id: "csp-p-1",
              name: "Pragmatic Pete",
              avatar: "https://randomuser.me/api/portraits/men/75.jpg",
              role: "Partner",
              tenure: "10-15 years",
              description: "A results-oriented partner who balances client delivery excellence with business development. Strong operational focus with a keen eye for quality.",
              coreNeeds: ["Client satisfaction", "Team utilization", "Deal pipeline"],
              motivations: ["Delivery excellence", "Team growth", "Revenue targets"],
              frustrations: ["Staffing challenges", "Scope creep", "Competing priorities"]
            },
            {
              id: "csp-p-2",
              name: "Collaborative Clara",
              avatar: "https://randomuser.me/api/portraits/women/65.jpg",
              role: "Partner",
              tenure: "12 years",
              description: "A collaborative partner who excels at cross-functional engagements and multi-practice solutions. Known for her ability to bring diverse teams together.",
              coreNeeds: ["Cross-practice resources", "Client relationship management", "Knowledge sharing"],
              motivations: ["Integrated solutions", "Client success", "Team synergy"],
              frustrations: ["Practice silos", "Inconsistent tools", "Communication gaps"]
            },
            {
              id: "csp-p-3",
              name: "Collaborating Colleen",
              avatar: "collaborating-colleen.png",
              role: "Partner",
              tenure: "12+ years",
              office: "London",
              quote: "I want to develop client opportunities.",
              description: "An opportunity-driven Partner based in London with 12+ years of tenure. Focused on developing client opportunities and building trustworthy relationships. Values up-to-date information, streamlined workflows, and intuitive tools that require little training.",
              techProfile: {
                techLiteracy: 65,
                workingStyle: "Spontaneous",
                adaptabilityToChange: 60,
                meetingPreference: "Hybrid"
              },
              devices: ["Mobile", "Laptop"],
              inclusiveDesignLenses: ["Cultural Difference", "Time Limited"],
              coreNeeds: [
                "Up to date client information",
                "More time to pursue opportunities vs. find them, share them",
                "Understand the vision for Opportunity Tool",
                "An intuitive process that requires little training",
                "A standardized process",
                "Be able to work and seamlessly collaborate with teams through devices from anywhere, especially while traveling",
                "Want to leverage technology to work more effectively by reducing the number of tools, organizing communication and simplifying workflows"
              ],
              goals: [
                "Avoid duplication of client efforts – alignment on who is interacting with a company/CEO",
                "More time to invest in developing opportunities vs. finding them",
                "Better, current information to help connect with the right people, build the right relationship, and have visibility on this relationship within the pipeline"
              ],
              motivations: [
                "Happy to provide updated information to direct counterpart or office/cell leader within a smaller cell",
                "Excited to share what's going on in a smaller setting",
                "Better collaboration with practice teams which in turn supports the growth and success of my own team",
                "Growing the partner community – being sponsors, creating opportunity for others",
                "Want to be appreciated for the work done – more motivated when there is a sign of recognition",
                "Like to see what other Partners are working on"
              ],
              frustrations: [
                "Lack of trust in providing information when it is unclear what/where the information will be used at a higher level",
                "No transparency around client interaction/opportunity – no idea what is happening with Partners outside of her immediate region",
                "Don't want outsiders knowing what I'm working on",
                "Learning another tool will be time consuming",
                "Continuously being inundated with information, calls, messages – difficult to keep track of things and find time to address everything",
                "Spends a lot of time responding to many requests for expertise",
                "Bothered by different methodologies being time consuming but also conflicts with not wanting a standardized process"
              ]
            },
            {
              id: "csp-p-4",
              name: "Inundated Ivan",
              avatar: "inundated-ivan.png",
              role: "Partner",
              tenure: "10+ years",
              office: "Silicon Valley",
              quote: "I am on so many groups and it was generated through whatever systems. There are just some emails that I don't need.",
              description: "A Partner based in Silicon Valley with 10+ years of tenure who is overwhelmed by email volume and communication sprawl. Works primarily with Know, Email, and Slack. Seeks more targeted, relevant communications and an easy way to manage distribution lists.",
              techProfile: {
                techLiteracy: 70,
                workingStyle: "Spontaneous",
                adaptabilityToChange: 50,
                meetingPreference: "Hybrid"
              },
              devices: ["Laptop", "Mobile", "Tablet"],
              inclusiveDesignLenses: [],
              keyActivities: [
                "Read communications",
                "Respond to communications",
                "Oversee engagements for my clients",
                "Advise clients and my team on what is most relevant/useful and determine scope of work",
                "Help teams with PSing and deliver impact via communication channels/Zoom"
              ],
              coreNeeds: [
                "Organization to focus on the most relevant communications",
                "Find the information I need",
                "Quickly answer important communications",
                "Know what is happening in areas that I care about",
                "Easy way to remove myself from the distribution lists"
              ],
              goals: [
                "Have more targeted communications that are relevant to my expertise",
                "Have an easy way to share my expertise",
                "Keep a tab on evolving discussions in my teams and practice",
                "Bring the best knowledge and people from the Firm to my clients"
              ],
              motivations: [
                "Champion the Firm's mission to avoid communication sprawl",
                "Provide relevant information to the respective group",
                "Follow the Firm's risk guidelines – be a risk sherpa for my practice",
                "Role model standards and best practices"
              ],
              frustrations: [
                "I get too many emails",
                "At risk for receiving emails with information that conflicts with my study",
                "I'm getting lost in threads and don't know where I lend my expertise",
                "My EA isn't included in a distribution list, so they aren't able to modify my calendar"
              ]
            },
            {
              id: "csp-p-5",
              name: "Structured Sasha",
              avatar: "structured-sasha.png",
              role: "Partner",
              tenure: "10+ years",
              office: "SFO",
              quote: "I'm comfortable working the way that I have been for years. But I also know that there's value in using technology to lead and collaborate.",
              description: "A structured Partner based in SFO with 10+ years of tenure who values email as her primary workflow but recognizes the value of technology adoption. Splits time between client's office and home office. Relies heavily on laptop, mobile, and tablet.",
              techProfile: {
                techLiteracy: 45,
                workingStyle: "Structured",
                adaptabilityToChange: 40,
                meetingPreference: "In Person"
              },
              location: {
                clientSite: 50,
                localOffice: 0,
                remoteHomeOffice: 50
              },
              devices: ["Laptop", "Mobile", "Tablet"],
              inclusiveDesignLenses: [],
              coreNeeds: [
                "Share insights and documents internally or externally quickly and easily to keep work moving",
                "Have the ability to speak with and problem solve with clients efficiently",
                "Keep tools on limited platforms in order to limit switching communications methods while working",
                "Communicate clearly with engagement teams to keep everyone on the same page – desire for asynchronous communication"
              ],
              goals: [
                "Speed/ease of communications",
                "Maintaining client satisfaction",
                "Efficiency and confidentiality",
                "Keeping pulse of the team"
              ],
              motivations: [
                "Speed/ease of communications",
                "Maintaining client satisfaction",
                "Efficiency and confidentiality",
                "Keeping pulse of the team"
              ],
              frustrations: [
                "Not everyone you need to communicate with is on Slack – not all Partners are on Slack and there's no way to communicate with clients on Slack",
                "You can't send files on Slack – forces you to switch between platforms",
                "There's too much noise on Slack – too many channels and it's hard for a new user to navigate quickly"
              ]
            },
            {
              id: "csp-p-6",
              name: "Willing William",
              avatar: "willing-william.png",
              role: "Partner",
              tenure: "8+ years",
              office: "New York",
              quote: "My days as an Associate or EM are not too far in the rear-view mirror.",
              description: "William Brown is a Partner based in New York with 8+ years of tenure who is striving to transition internal communications to Slack. Values seamless collaboration through devices from anywhere, especially while traveling. Actively adopts Box, Slack, and Zoom.",
              techProfile: {
                techLiteracy: 65,
                workingStyle: "Spontaneous",
                adaptabilityToChange: 70,
                meetingPreference: "Hybrid"
              },
              location: {
                clientSite: 40,
                localOffice: 20,
                remoteHomeOffice: 40
              },
              devices: ["Mobile", "Laptop"],
              inclusiveDesignLenses: [],
              coreNeeds: [
                "Build strong collaborative client relationships through ongoing communication and reduce need for co-location",
                "Have easy access to the engagement teams to review ongoing work, engage in informal conversations, guide the problem solving and check the team health",
                "Be able to work and seamlessly collaborate with teams through devices from anywhere, especially while traveling",
                "Want to leverage technology to work more effectively by reducing the number of tools, organizing communication and simplifying workflows"
              ],
              goals: [
                "Conduct VC calls on-the-go easily and with reliability",
                "Ensure both internal and external clients can join and participate in the meeting",
                "Facilitate strong collaborative client relationships and solutions with less travel"
              ],
              motivations: [
                "Build stronger team and client relationships",
                "Create more impact for clients and internal teams with less travel",
                "Leverage visual cues and consensus features to drive alignment and outcomes"
              ],
              frustrations: [
                "Firm technology and integrations don't cover all collaboration and leadership needs, internally and externally",
                "Lack of firm-wide guiding principles on using technology creates difference in the way engagements teams operate",
                "Firm's best practices on securing client information and communication don't always align with the client's preferred way of collaboration",
                "Increasing clutter of information, documents and communication, which is difficult to organize based on his personal ways of working",
                "Meeting best practices and education on collaborative features within Zoom",
                "Conference room integration that allows for full use of Zoom collaboration features",
                "One-touch dial-in usability and education on dial-in customization"
              ]
            }
          ]
        },
        {
          id: "csp-engagement-managers",
          name: "Engagement Managers",
          personas: [
            {
              id: "csp-em-1",
              name: "Driven Derek",
              avatar: "https://randomuser.me/api/portraits/men/46.jpg",
              role: "Engagement Manager",
              tenure: "5-8 years",
              description: "An ambitious engagement manager who drives day-to-day delivery and manages client expectations. Aspires to partner track while maintaining work-life balance.",
              coreNeeds: ["Project management tools", "Client communication", "Career development"],
              motivations: ["Career progression", "Client impact", "Skill development"],
              frustrations: ["Administrative overhead", "Unclear career path", "Workload management"]
            },
            {
              id: "csp-em-2",
              name: "Methodical Maya",
              avatar: "https://randomuser.me/api/portraits/women/68.jpg",
              role: "Engagement Manager",
              tenure: "6 years",
              description: "A detail-oriented engagement manager known for flawless project execution and risk management. Ensures quality deliverables and client satisfaction at every stage.",
              coreNeeds: ["Quality frameworks", "Risk management", "Team coordination"],
              motivations: ["Delivery excellence", "Process improvement", "Mentoring"],
              frustrations: ["Scope changes", "Resource gaps", "Last-minute requests"]
            }
          ]
        },
        {
          id: "csp-associates",
          name: "Associates",
          personas: [
            {
              id: "csp-a-1",
              name: "Ambitious Alex",
              avatar: "https://randomuser.me/api/portraits/men/22.jpg",
              role: "Associate",
              tenure: "2-4 years",
              description: "A high-performing associate eager to develop consulting skills and build client relationships. Actively seeks learning opportunities and stretch assignments.",
              coreNeeds: ["Mentorship", "Skill development", "Meaningful project work"],
              motivations: ["Career growth", "Learning new industries", "Making an impact"],
              frustrations: ["Repetitive tasks", "Limited client exposure", "Feedback delays"]
            },
            {
              id: "csp-a-2",
              name: "Analytical Aria",
              avatar: "https://randomuser.me/api/portraits/women/26.jpg",
              role: "Associate",
              tenure: "3 years",
              description: "A data-savvy associate who brings analytical rigor to client engagements. Skilled in research, benchmarking, and synthesizing complex information into actionable insights.",
              coreNeeds: ["Data tools", "Research access", "Analytical frameworks"],
              motivations: ["Problem solving", "Data-driven insights", "Professional development"],
              frustrations: ["Data silos", "Manual reporting", "Unclear expectations"]
            }
          ]
        },
        {
          id: "csp-analysts",
          name: "Analysts",
          personas: [
            {
              id: "csp-an-1",
              name: "Fresh Farhan",
              avatar: "https://randomuser.me/api/portraits/men/11.jpg",
              role: "Analyst",
              tenure: "0-2 years",
              description: "A recently hired analyst keen to prove themselves and learn the consulting world. Brings fresh perspectives from academic training and is tech-savvy.",
              coreNeeds: ["Onboarding support", "Clear guidance", "Learning resources"],
              motivations: ["Career start", "Skill building", "Belonging"],
              frustrations: ["Steep learning curve", "Ambiguous tasks", "Imposter syndrome"]
            },
            {
              id: "csp-an-2",
              name: "Resourceful Rita",
              avatar: "https://randomuser.me/api/portraits/women/17.jpg",
              role: "Analyst",
              tenure: "1 year",
              description: "A resourceful analyst who quickly finds creative solutions to research challenges. Excellent at building presentations and client-ready materials.",
              coreNeeds: ["Templates", "Research databases", "Peer collaboration"],
              motivations: ["Contributing to team success", "Learning from seniors", "Building expertise"],
              frustrations: ["Tight deadlines", "Information overload", "Limited autonomy"]
            }
          ]
        }
      ]
    },
    {
      id: "esp",
      name: "ESP",
      fullName: "Expert Service Professionals",
      color: "#4338ca",
      colorLight: "#e0e7ff",
      description: "Experts who support practices with specialized knowledge, content, and communications capabilities.",
      groups: [
        {
          id: "esp-practice-leaders",
          name: "Practice Leaders",
          personas: [
            {
              id: "esp-pl-1",
              name: "Owner Persona",
              avatar: "https://randomuser.me/api/portraits/men/52.jpg",
              role: "Practice Leader",
              tenure: "10+ years",
              description: "A practice leader who owns the strategic direction and growth of their practice area. Responsible for talent, revenue, and market positioning within the practice.",
              coreNeeds: ["Market intelligence", "Talent pipeline", "Practice strategy tools"],
              motivations: ["Practice growth", "Market leadership", "Talent development"],
              frustrations: ["Resource competition", "Inconsistent quality", "Market changes"]
            },
            {
              id: "esp-pl-2",
              name: "Practice Manager Persona",
              avatar: "https://randomuser.me/api/portraits/women/33.jpg",
              role: "Practice Leader",
              tenure: "8+ years",
              description: "Manages day-to-day operations of the practice including staffing, knowledge management, and practice development activities.",
              coreNeeds: ["Staffing tools", "Knowledge management", "Performance tracking"],
              motivations: ["Operational efficiency", "Team satisfaction", "Practice metrics"],
              frustrations: ["Manual processes", "Fragmented data", "Competing demands"]
            }
          ]
        },
        {
          id: "esp-practice-managers",
          name: "Practice Managers",
          personas: [
            {
              id: "esp-pm-1",
              name: "Sender Persona",
              avatar: "https://randomuser.me/api/portraits/men/67.jpg",
              role: "Practice Manager",
              tenure: "5-8 years",
              description: "A practice manager responsible for communications outreach, sending targeted content and updates to practice members and stakeholders.",
              coreNeeds: ["Communication platforms", "Content curation", "Audience segmentation"],
              motivations: ["Effective communication", "Practice engagement", "Knowledge dissemination"],
              frustrations: ["Email fatigue", "Content overload", "Low engagement rates"]
            },
            {
              id: "esp-pm-2",
              name: "Coordinator Carl",
              avatar: "https://randomuser.me/api/portraits/men/41.jpg",
              role: "Practice Manager",
              tenure: "4 years",
              description: "Coordinates practice events, training sessions, and knowledge-sharing initiatives. Ensures smooth operations across distributed teams.",
              coreNeeds: ["Event management tools", "Scheduling systems", "Collaboration platforms"],
              motivations: ["Team cohesion", "Knowledge sharing", "Smooth operations"],
              frustrations: ["Timezone challenges", "Low attendance", "Tool fragmentation"]
            }
          ]
        },
        {
          id: "esp-practice-comms",
          name: "Practice Comms Specialists",
          personas: [
            {
              id: "esp-pcs-1",
              name: "Swift Sam",
              avatar: "https://randomuser.me/api/portraits/men/86.jpg",
              role: "Practice Communications Specialist",
              tenure: "3-5 years",
              description: "A fast-paced communications specialist who creates and distributes practice-level content, newsletters, and updates. Expert at crafting compelling narratives.",
              coreNeeds: ["Content creation tools", "Distribution channels", "Analytics dashboards"],
              motivations: ["Storytelling impact", "Practice visibility", "Content quality"],
              frustrations: ["Content bottlenecks", "Approval delays", "Measuring impact"]
            },
            {
              id: "esp-pcs-2",
              name: "Creative Priya",
              avatar: "https://randomuser.me/api/portraits/women/79.jpg",
              role: "Practice Communications Specialist",
              tenure: "4 years",
              description: "A creative communicator who designs visually compelling practice materials, presentations, and digital content for internal and external audiences.",
              coreNeeds: ["Design tools", "Brand guidelines", "Content templates"],
              motivations: ["Visual storytelling", "Brand consistency", "Creative expression"],
              frustrations: ["Brand inconsistency", "Last-minute requests", "Limited creative freedom"]
            }
          ]
        }
      ]
    },
    {
      id: "fsp",
      name: "FSP",
      fullName: "Firm Service Professionals",
      color: "#0891b2",
      colorLight: "#cffafe",
      description: "Professionals who build and maintain the firm's internal services, products, and infrastructure.",
      groups: [
        {
          id: "fsp-firm-functions-leaders",
          name: "Firm Functions Leaders",
          personas: [
            {
              id: "fsp-ffl-1",
              name: "Fiona",
              fullName: "Fiona — Firm Leader",
              avatar: "fiona-firm-leader.png",
              role: "Firm Leader",
              tenure: "15+ years",
              office: "Large Office Location",
              quote: "Technology empowers me to realize my vision for the future of the Firm",
              description: "As the leader of one of our largest offices, Fiona divides her focus between defining the future of the office, coaching her team on crafting strategy and tactics to realize that vision, and serving her clients. Given the demands on her time, rapid access to accurate data about her office is absolutely critical — she needs to be able to make day-to-day decisions on her feet as well as to step back and look at the big picture when working to plan for the future. Since the beginning of the COVID-19 pandemic, much of her focus has been on attracting and retaining the key talent (especially EMs and APs) her offices needs to staff their increased engagement load, as well as on providing the transparency her current office members need to feel secure, productive, and connected.",
              techProfile: {
                techLiteracy: 70,
                workingStyle: "Structured",
                adaptabilityToChange: 65,
                meetingPreference: "Hybrid"
              },
              location: {
                clientSite: 20,
                localOffice: 55,
                remoteHomeOffice: 25
              },
              devices: ["Laptop", "Mobile"],
              inclusiveDesignLenses: ["Loves data", "Aims for transparency", "Trend watcher", "Competitive", "Biased to action", "Champion for Firm values"],
              keyActivities: [
                "Defining vision and strategy for the future of her office location",
                "Collaborating closely with fellow Firm leaders to navigate a complex external landscape",
                "Serving as a responsible steward of the Firm's resources regardless of the economic climate",
                "Working closely with her office leadership team to define and implement tactics that drive toward their shared vision"
              ],
              coreNeeds: [
                "Rapid access to accurate data about her office",
                "Day-to-day decision-making tools on the go",
                "Big picture strategic planning dashboards",
                "Talent attraction and retention insights"
              ],
              goals: [
                "Plan and manage annual budgets",
                "Sponsor a colleague",
                "Find knowledge or expertise",
                "Provide feedback to a colleague"
              ],
              motivations: [
                "Uphold Firm values and preserve our culture, even as we scale in size",
                "Ensure her office can attract and retain the very best talent",
                "Make better, more data-informed decisions without losing time",
                "Communicate transparently with her office about what's happening at every level of the Firm"
              ],
              frustrations: [
                "Information about her office is stored in too many places and delivered via too many reports and systems",
                "Cadence of her work is often governed by Firm committee meetings",
                "Attrition is high for our most critical roles, making engagements difficult to staff"
              ]
            },
            {
              id: "fsp-ffl-2",
              name: "Visionary Legend",
              fullName: "Visionary Legend",
              avatar: "visionary-legend.png",
              role: "Developer Experience Leader",
              tenure: "15–20 years",
              office: "Global",
              quote: "I am working in the firm from 15 yr. My vision is to have world class products and good working ethics for the developers. I think a best practice is important to set a valuable Firm wide standard in collaboration and brings immediate value (less risk and cost).",
              description: "A seasoned leader aged 40–55 with 15–20 years of experience and 8–15 years at the Firm. A vision setter and advocate for standardisation, known for long-term thinking, deep knowledge, and a drive for transparency. Builds networks across teams and is impact-driven in every initiative.",
              techProfile: {
                techLiteracy: 80,
                workingStyle: "Structured",
                adaptabilityToChange: 35,
                meetingPreference: "Hybrid"
              },
              location: {
                clientSite: 10,
                localOffice: 50,
                remoteHomeOffice: 40
              },
              devices: ["Laptop", "Mobile"],
              inclusiveDesignLenses: ["Vision setter", "Advocate for standardisation", "Long term thinking", "Beacon of knowledge", "Aims for transparency", "Network builder", "Impact driven"],
              coreNeeds: [
                "I do my work on time, then I need my holidays",
                "I am up for challenges if my manager tells me",
                "My family is my motivation to work",
                "I have good friends here in the company — they share with me all things",
                "I follow all firm rules and apply them diligently",
                "I like to read some good coding articles but I don't like to share"
              ],
              goals: [
                "Set valuable Firm-wide standards in collaboration",
                "Bring immediate value with less risk and cost",
                "Have world-class products and good working ethics for developers"
              ],
              motivations: [
                "Building world-class products with strong developer ethics",
                "Setting Firm-wide best practices and standards",
                "Reducing risk and cost through collaboration",
                "Preserving good working culture"
              ],
              frustrations: [
                "Firm is ever changing — tools come and go, we learn something and then it gets decommissioned",
                "I know every 2 years leadership will change — I am used to it now",
                "I sometimes feel my manager doesn't appreciate me with my work"
              ]
            },
            {
              id: "fsp-ffl-3",
              name: "Peter",
              fullName: "Peter — People Leader",
              avatar: "peter-people-leader.png",
              role: "People Leader",
              tenure: "12+ years",
              office: "Multiple Offices",
              quote: "Technology enables me to develop and staff exceptional and diverse talent",
              description: "As a Partner of the Firm, Peter spends most of his time cultivating client relationships and delivering meaningful impact for clients through engagements and solution delivery. His deep commitment to creating an unrivaled environment for exceptional people informs his approach to client work. He believes client engagements are as much an opportunity for sponsorship and professional development as they are for client impact, and works hard to make sure the colleagues he coaches, mentors, and sponsors receive the feedback and opportunities they need to grow. He actively embraces and celebrates the diversity of his DGLees' contributions and backgrounds and strives to provide nonhierarchical and inclusive coaching.",
              techProfile: {
                techLiteracy: 60,
                workingStyle: "Structured",
                adaptabilityToChange: 70,
                meetingPreference: "In Person"
              },
              location: {
                clientSite: 40,
                localOffice: 35,
                remoteHomeOffice: 25
              },
              devices: ["Laptop", "Mobile", "Tablet"],
              inclusiveDesignLenses: ["Focused on impact", "Embraces diversity", "Caring coach", "Committed ally", "Catalyst leader", "Champion for Firm values"],
              keyActivities: [
                "Ensuring his engagements are staffed with the right combination of skillsets, backgrounds, and perspectives",
                "Ensuring his DGLees, mentees, and sponsorees receive the feedback and opportunities they need to grow",
                "Gathering feedback on and evaluating his DGLees",
                "Connecting colleagues in his care with Firm resources as needed (Mind Matters, HR, Immigration)"
              ],
              coreNeeds: [
                "Ramp up an engagement quickly with the right talent",
                "Evaluate a colleague fairly and comprehensively",
                "Sponsor a colleague effectively",
                "Mentor a colleague with care and impact"
              ],
              goals: [
                "Build a great Firm that attracts, develops, excites, and retains exceptional people",
                "Ensure DGLees receive unbiased and meaningful mid- and year-end evaluations",
                "Increase the Firm's impact by developing and staffing exceptional talent"
              ],
              motivations: [
                "Building a great Firm that attracts, develops, excites, and retains exceptional people",
                "Ensuring unbiased and meaningful evaluations for DGLees",
                "Increasing the Firm's impact through developing and staffing exceptional talent"
              ],
              frustrations: [
                "Information about staffing opportunities outside of his own network is hard to come by",
                "He has at least one other full-time job, which means he can't always spend as much time on apprenticeship as he would like",
                "Diverse engagement staffing isn't as emphasized as he would like"
              ]
            }
          ]
        },
        {
          id: "fsp-product-service-leaders",
          name: "Product/Service Leaders",
          personas: [
            {
              id: "fsp-psl-1",
              name: "Product Manager Jenna",
              avatar: "https://randomuser.me/api/portraits/women/21.jpg",
              role: "Product/Service Leader",
              tenure: "8+ years",
              description: "A dynamic product leader (also known as Jetting Jenna) who drives product strategy and roadmap for internal services. Balances user needs with business objectives.",
              coreNeeds: ["Product analytics", "User research", "Roadmap tools"],
              motivations: ["User satisfaction", "Product-market fit", "Innovation"],
              frustrations: ["Conflicting stakeholder demands", "Technical debt", "Resource limitations"]
            },
            {
              id: "fsp-psl-2",
              name: "Service Director Dan",
              avatar: "https://randomuser.me/api/portraits/men/43.jpg",
              role: "Product/Service Leader",
              tenure: "10+ years",
              description: "A service-oriented leader who ensures internal services meet the evolving needs of the firm. Champions service excellence and continuous improvement.",
              coreNeeds: ["Service metrics", "User feedback loops", "Quality assurance"],
              motivations: ["Service excellence", "User experience", "Operational efficiency"],
              frustrations: ["Service disruptions", "Unclear ownership", "Legacy infrastructure"]
            }
          ]
        },
        {
          id: "fsp-product-service-managers",
          name: "Product/Service Managers",
          personas: [
            {
              id: "fsp-psm-1",
              name: "Low-Tenure Generalist",
              avatar: "https://randomuser.me/api/portraits/men/18.jpg",
              role: "Product/Service Manager",
              tenure: "1-3 years",
              description: "A newer product/service manager still learning the firm's ecosystem. Brings fresh ideas but needs support navigating organizational complexity.",
              coreNeeds: ["Onboarding resources", "Mentor support", "Process documentation"],
              motivations: ["Quick wins", "Building credibility", "Learning the landscape"],
              frustrations: ["Steep learning curve", "Unclear processes", "Limited network"]
            },
            {
              id: "fsp-psm-2",
              name: "FSP Persona",
              avatar: "https://randomuser.me/api/portraits/men/70.jpg",
              role: "Product/Service Manager",
              tenure: "5+ years",
              description: "An experienced product/service manager who deeply understands the firm's operational needs and delivers reliable, scalable solutions.",
              coreNeeds: ["Stakeholder management", "Project tracking", "Quality standards"],
              motivations: ["Reliable delivery", "Stakeholder trust", "Process maturity"],
              frustrations: ["Scope creep", "Changing priorities", "Technical complexity"]
            }
          ]
        },
        {
          id: "fsp-product-service-designers",
          name: "Product/Service Designers",
          personas: [
            {
              id: "fsp-psd-1",
              name: "GenX Gina",
              avatar: "https://randomuser.me/api/portraits/women/55.jpg",
              role: "Product/Service Designer",
              tenure: "10+ years",
              description: "A seasoned GenX designer who combines deep experience with practical design sensibility. Values usability and accessibility in all design solutions.",
              coreNeeds: ["Design systems", "User research tools", "Accessibility standards"],
              motivations: ["Usable design", "Inclusive experiences", "Design mentoring"],
              frustrations: ["Trend-chasing", "Inconsistent standards", "Limited user access"]
            },
            {
              id: "fsp-psd-2",
              name: "Luminary Lamar",
              avatar: "https://randomuser.me/api/portraits/men/83.jpg",
              role: "Product/Service Designer",
              tenure: "6 years",
              description: "A creative luminary who pushes design boundaries and champions innovation in service design. Known for visually stunning and functionally excellent work.",
              coreNeeds: ["Creative tools", "Design inspiration", "Prototyping platforms"],
              motivations: ["Creative excellence", "Innovation", "Design impact"],
              frustrations: ["Corporate constraints", "Design-by-committee", "Tight timelines"]
            },
            {
              id: "fsp-psd-3",
              name: "Software Architect",
              avatar: "https://randomuser.me/api/portraits/men/36.jpg",
              role: "Product/Service Designer",
              tenure: "8+ years",
              description: "A technical designer who bridges the gap between design and engineering. Ensures designs are technically feasible and architecturally sound.",
              coreNeeds: ["Technical documentation", "Architecture tools", "Cross-team collaboration"],
              motivations: ["Technical excellence", "Scalable solutions", "Design-engineering alignment"],
              frustrations: ["Design-dev handoff issues", "Technical debt", "Unclear requirements"]
            },
            {
              id: "fsp-psd-4",
              name: "Data Designer",
              avatar: "https://randomuser.me/api/portraits/women/37.jpg",
              role: "Product/Service Designer",
              tenure: "4 years",
              description: "A data-focused designer who specializes in data visualization, dashboards, and information architecture for data-heavy products.",
              coreNeeds: ["Data viz tools", "Analytics platforms", "User research"],
              motivations: ["Data storytelling", "Clear information design", "User empowerment"],
              frustrations: ["Data quality issues", "Complex datasets", "Stakeholder misalignment"]
            }
          ]
        },
        {
          id: "fsp-product-service-engineers",
          name: "Product/Service Engineers",
          personas: [
            {
              id: "fsp-pse-1",
              name: "EA Persona",
              avatar: "https://randomuser.me/api/portraits/men/28.jpg",
              role: "Product/Service Engineer",
              tenure: "5+ years",
              description: "An enterprise architect persona who designs and maintains the technical infrastructure powering firm services. Ensures system reliability and scalability.",
              coreNeeds: ["Architecture tools", "Monitoring systems", "Security frameworks"],
              motivations: ["System reliability", "Technical innovation", "Scalability"],
              frustrations: ["Legacy systems", "Technical debt", "Resource constraints"]
            },
            {
              id: "fsp-pse-2",
              name: "Full-Stack Dev",
              avatar: "https://randomuser.me/api/portraits/men/9.jpg",
              role: "Product/Service Engineer",
              tenure: "3 years",
              description: "A versatile full-stack developer who builds and maintains internal tools and platforms. Comfortable across the technology stack.",
              coreNeeds: ["Dev tools", "CI/CD pipelines", "Code review processes"],
              motivations: ["Clean code", "Feature delivery", "Technical growth"],
              frustrations: ["Context switching", "Legacy codebases", "Unclear requirements"]
            }
          ]
        },
        {
          id: "fsp-executive-assistants",
          name: "Executive Assistants",
          personas: [
            {
              id: "fsp-ea-1",
              name: "Organized Olivia",
              avatar: "https://randomuser.me/api/portraits/women/90.jpg",
              role: "Executive Assistant",
              tenure: "7+ years",
              description: "A highly organized executive assistant who manages complex schedules, travel, and communications for firm leaders. The backbone of executive productivity.",
              coreNeeds: ["Calendar management", "Travel tools", "Communication platforms"],
              motivations: ["Smooth operations", "Executive support", "Proactive problem-solving"],
              frustrations: ["Last-minute changes", "Tool fragmentation", "Information gaps"]
            },
            {
              id: "fsp-ea-2",
              name: "Tech-Savvy Tina",
              avatar: "https://randomuser.me/api/portraits/women/12.jpg",
              role: "Executive Assistant",
              tenure: "3 years",
              description: "A tech-forward executive assistant who leverages digital tools and automation to increase efficiency. Champions new technology adoption among support staff.",
              coreNeeds: ["Automation tools", "Digital workspace", "Training resources"],
              motivations: ["Efficiency gains", "Technology adoption", "Professional development"],
              frustrations: ["Manual processes", "Outdated tools", "Resistance to change"]
            }
          ]
        }
      ]
    },
    {
      id: "ew",
      name: "EW",
      fullName: "Everyday Wins",
      color: "#059669",
      colorLight: "#d1fae5",
      description: "External stakeholders and executives who interact with the firm's services and experience everyday wins through engagement.",
      groups: [
        {
          id: "ew-c-suite",
          name: "C-Suite Executives",
          personas: [
            {
              id: "ew-cs-1",
              name: "Michael Morrison",
              avatar: "https://randomuser.me/api/portraits/men/64.jpg",
              role: "C-Suite Executive",
              tenure: "External",
              description: "A C-suite executive client who values strategic partnerships and measurable outcomes. Expects premium service and thought leadership from consulting engagements.",
              coreNeeds: ["Strategic insights", "ROI measurement", "Executive reporting"],
              motivations: ["Business transformation", "Competitive advantage", "Shareholder value"],
              frustrations: ["Slow delivery", "Misaligned priorities", "Lack of innovation"]
            },
            {
              id: "ew-cs-2",
              name: "Executive Emma",
              avatar: "https://randomuser.me/api/portraits/women/3.jpg",
              role: "C-Suite Executive",
              tenure: "External",
              description: "A forward-thinking C-suite executive focused on digital transformation and organizational agility. Values partners who challenge conventional thinking.",
              coreNeeds: ["Digital strategy", "Change management", "Innovation frameworks"],
              motivations: ["Digital leadership", "Organizational agility", "Market disruption"],
              frustrations: ["Resistance to change", "Vendor fatigue", "Unclear outcomes"]
            }
          ]
        }
      ]
    },
    {
      id: "firm-alumni",
      name: "Firm Alumni",
      fullName: "Firm Alumni",
      color: "#7c3aed",
      colorLight: "#ede9fe",
      description: "Former firm members who maintain connections and may serve as referral sources, clients, or brand ambassadors.",
      groups: [
        {
          id: "fa-alumni",
          name: "Alumni Network",
          personas: [
            {
              id: "fa-an-1",
              name: "Connected Chris",
              avatar: "https://randomuser.me/api/portraits/men/47.jpg",
              role: "Firm Alumni",
              tenure: "Former (5 years at firm)",
              description: "A well-connected alumni who actively participates in firm events and refers potential clients. Values the ongoing relationship with the firm.",
              coreNeeds: ["Alumni network access", "Event invitations", "Industry updates"],
              motivations: ["Professional network", "Industry connections", "Giving back"],
              frustrations: ["Losing touch", "Outdated contact info", "Irrelevant communications"]
            },
            {
              id: "fa-an-2",
              name: "Advocate Anita",
              avatar: "https://randomuser.me/api/portraits/women/85.jpg",
              role: "Firm Alumni",
              tenure: "Former (8 years at firm)",
              description: "A passionate firm advocate who actively promotes the firm brand in their current organization. Often serves as a bridge for new business opportunities.",
              coreNeeds: ["Firm updates", "Networking events", "Knowledge resources"],
              motivations: ["Brand advocacy", "Professional growth", "Community belonging"],
              frustrations: ["Communication gaps", "Exclusion from events", "Outdated information"]
            }
          ]
        }
      ]
    }
    ,
    {
      id: "data",
      name: "Data Persona",
      fullName: "Data Personas",
      color: "#0277bd",
      colorLight: "#e1f5fe",
      description: "Personas representing data practitioners and stakeholders across the firm — product managers, data engineers, data scientists, tech leads, and software engineers who work with data daily.",
      groups: [
        {
          id: "data-td",
          name: "T&D (Technology & Development)",
          personas: [
            {
              id: "data-td-1",
              name: "Sarah",
              fullName: "Sarah — Product Manager",
              avatar: "sarah-product-manager.png",
              role: "Product Manager",
              office: "New York 711",
              tenure: "10+ years",
              categoryTag: "T&D",
              categoryTagColor: "#0277bd",
              description: "I've been with the Firm for over 10 years. I joined the firm as a software engineer right after graduate school and is now the product manager that supports the firm's staffing needs. As part of the nature of my work, I often find myself making decisions on allocating resources to ensure we are on track of product roadmap while contributing to firm-wide initiatives. Sometimes with some specific tasks, I wish I have more support or resources I could use to help me better manage my team's work.",
              dataProfile: {
                dataLiteracy: 85,
                engagementCDB: 55,
                riskAccountability: 45
              },
              coreNeeds: [
                "**Need to understand the quality of our data and how that can help prioritize work and make product decisions**",
                "Being able to fix issues quickly",
                "Identify product requirements and prioritize requirements"
              ],
              motivations: ["Data-driven product decisions", "Team resource optimization", "Firm-wide initiative alignment"],
              frustrations: [
                "**Not able to identify potential risks timely due to inadequate reports**",
                "Resource and capability management, may not have the right person on the team to work on this — i.e. don't have the right talent available on team to work on data governance",
                "No immediate output or reports available because coding and set up time is required",
                "Lack of understanding of business functions",
                "Lack of full understanding of data and therefore leads to issues"
              ]
            },
            {
              id: "data-td-2",
              name: "Raina",
              fullName: "Raina — Tech Lead",
              avatar: "raina-tech-lead.png",
              role: "Tech Lead",
              office: "Waltham Office",
              tenure: "8 years",
              categoryTag: "T&D",
              categoryTagColor: "#0277bd",
              description: "I started at the Firm's Waltham office 8 years ago as a Technical Architect for Optimize team. Since I became the Tech Lead of my team, I took up more responsibilities at overseeing the team's work and collaborating with my business partners and other team leads to make sure my plan is agreed upon and executed properly. The next goal in my career is to be the Head of Engineers and overseeing multiple teams. I'm excited to take up more management skills and operate at a higher level to see bigger picture.",
              dataProfile: {
                dataLiteracy: 60,
                engagementCDB: 50,
                riskAccountability: 45
              },
              coreNeeds: [
                "**Ensure the team has a clear direction for development**",
                "Provide a smooth onboarding experience for CDB users",
                "Get regular updates and review data reports",
                "Provide solutions to achieving product requirements"
              ],
              motivations: ["Team leadership", "Technical excellence", "Career growth to Head of Engineers"],
              frustrations: [
                "Not getting insights to keep a pulse on data needs",
                "**Stretched thin and constantly solving impediments and setting technical direction**",
                "Lack of dedicated data engineer limits the bandwidth to support on additional data needs",
                "I do not always know what firm data is available for me to use and how reliable it currently is"
              ]
            },
            {
              id: "data-td-3",
              name: "Rahul",
              fullName: "Rahul — Software Engineer",
              avatar: "rahul-software-engineer.png",
              role: "Software Engineer / Full-stack Developer",
              office: "Gurgaon",
              tenure: "4 years",
              categoryTag: "T&D",
              categoryTagColor: "#0277bd",
              description: "I've been at the firm for about 4 years now, and primarily working on Drupal apps. I got into technology because I enjoy solving problems and creating solutions that make people's job easier. In recent years Cloud Migration has gained a lot of attention in enterprises big and small, so I started a learning journey to get AWS certification recently and my goal is to become an expert in cloud migration.",
              dataProfile: {
                dataLiteracy: 70,
                engagementCDB: 65,
                riskAccountability: 30
              },
              coreNeeds: [
                "**Build features for the products as planned and prioritized by the team while collaborating with other team members**",
                "Data quality is important to me, I need to have access to comprehensive and accurate data",
                "Need to understand how the data is consumed internally in the application"
              ],
              motivations: ["Problem solving", "Cloud migration expertise", "AWS certification"],
              frustrations: [
                "**Have to stay up-to-date with latest technological developments while continuously delivering**",
                "Do not always have the broader picture of what we are trying to solve for",
                "Data engineer sometimes missing in the teams but more teams adding now eg. Engage",
                "**My team does not have a full-time Data Engineer so sometimes I have to support that role, although often times I don't have the capacity or capability to provide full support**"
              ]
            },
            {
              id: "data-td-4",
              name: "Amir",
              fullName: "Amir — Data Engineer",
              avatar: "amir-data-engineer.png",
              role: "Data Engineer",
              office: "New York 711",
              tenure: "3 years",
              categoryTag: "T&D",
              categoryTagColor: "#0277bd",
              description: "I've been with McKinsey for the last three years, primarily working with the recruitment team to support data needs. A lot of my work is about cleaning up and running data quality checks over unstructured data from different offices globally, and making sure the data meet the firm's compliance standards. I have learned a lot while supporting such a global effort, and want to broaden my expertise by supporting other product teams and become a Tech Lead in the data engineering space.",
              dataProfile: {
                dataLiteracy: 80,
                engagementCDB: 55,
                riskAccountability: 30
              },
              coreNeeds: [
                "**Accelerate data management work efficiently and repeatably**",
                "Ensure the process of handling data and the outcome are in compliance with firm requirements",
                "Ability to fix issues quickly"
              ],
              motivations: ["Career growth to Tech Lead", "Data quality excellence", "Global data compliance"],
              frustrations: [
                "**Not sure how to select the best tool available within the firm to use for data needs — i.e. handle large-size dataset and apply various data quality check rules**",
                "**Not sure how to handle confidential data sensitively and adhere to secure guidelines**",
                "Challenging to identify and clean data issues especially for the ones not generating in our systems — unable to trace the source of the issue to fix it in the right place",
                "No easy way to find the data stewards associated for each firm-wide system"
              ]
            }
          ]
        },
        {
          id: "data-csp",
          name: "CSP (Client-Serving Professionals)",
          personas: [
            {
              id: "data-csp-1",
              name: "Joseph",
              fullName: "Joseph — Data Engineer",
              avatar: "joseph-data-engineer.png",
              role: "Data Engineer",
              office: "New York Office",
              tenure: "5 years",
              categoryTag: "CSP",
              categoryTagColor: "#2e7d32",
              description: "I've been with McKinsey for 5 years. I started out as a software engineer at a tech startup before moving into consulting, and am now an Expert at the firm. I have primarily worked with clients in the GEM sector, and I really enjoy working with data and analytics, drawing insights and setting up data pipelines that are sustainable. Throughout the years I have built really good relationships with our clients and I aspire to be a Partner one day be more engaged in managing client relationships.",
              dataProfile: {
                dataLiteracy: 90,
                engagementCDB: 75,
                riskAccountability: 35
              },
              coreNeeds: [
                "Help client set up the pipeline and run data quality check",
                "**Ensure the completeness and the comprehensiveness of data**"
              ],
              motivations: ["Client relationship building", "Data pipeline sustainability", "Career growth to Partner"],
              frustrations: [
                "**Need to build standardize Data Quality check on every client engagement from scratch**",
                "No best-in-class industry tool to use",
                "Sometimes license constraints come into play when choosing platforms",
                "In some cases, coding from scratch might be required for every dataset"
              ]
            },
            {
              id: "data-csp-2",
              name: "Vicky",
              fullName: "Vicky — Data Scientist",
              avatar: "vicky-data-scientist.png",
              role: "Data Scientist",
              office: "Seattle Office",
              tenure: "3 years",
              categoryTag: "CSP",
              categoryTagColor: "#2e7d32",
              description: "I have been with the firm for three years and served a lot of clients in the M&S sector. Most of my work involves building data science models to extract patterns and insights. I am truly passionate about the potential of data science and love seeing the impact of our team's work on client's business. I am planning to get a Ph.D degree in the data science field and join the Quantum Black team to do more advanced analytics work.",
              dataProfile: {
                dataLiteracy: 75,
                engagementCDB: 50,
                riskAccountability: 25
              },
              coreNeeds: [
                "Explore and clean data to generate insight and build analytic models",
                "**Deep-dive into certain sections of data to dig up insights**"
              ],
              motivations: ["Data science passion", "Client impact", "Ph.D and Quantum Black aspiration"],
              frustrations: [
                "**Worried about 'Garbage in garbage out'**",
                "CST team waiting for answers from day 1 without appropriate time for set-up and data clean-up",
                "No standard process or tool to check data quality and usability"
              ]
            }
          ]
        }
      ]
    }
  ]
};
