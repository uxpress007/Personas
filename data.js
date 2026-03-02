const personaData = {
  categories: [
    {
      id: "csp",
      name: "CSP",
      fullName: "Client-Serving Professionals",
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
              name: "Visionary Legend",
              avatar: "https://randomuser.me/api/portraits/men/34.jpg",
              role: "Firm Functions Leader",
              tenure: "15+ years",
              description: "A visionary leader who shapes the strategic direction of firm functions. Known for forward-thinking initiatives and transformational leadership across the organization.",
              coreNeeds: ["Strategic planning tools", "Executive dashboards", "Change management"],
              motivations: ["Organizational transformation", "Legacy impact", "Innovation leadership"],
              frustrations: ["Resistance to change", "Budget constraints", "Slow adoption"]
            },
            {
              id: "fsp-ffl-2",
              name: "Supportive Suman",
              avatar: "https://randomuser.me/api/portraits/men/14.jpg",
              role: "Firm Functions Leader (T&D)",
              tenure: "10+ years",
              description: "A supportive Training & Development leader who champions talent growth and organizational learning. Focuses on building capabilities across the firm.",
              coreNeeds: ["Learning platforms", "Talent analytics", "Program management"],
              motivations: ["Talent development", "Organizational capability", "Employee satisfaction"],
              frustrations: ["Budget limitations", "Measuring ROI", "Content relevance"]
            },
            {
              id: "fsp-ffl-3",
              name: "Legendary Luke",
              avatar: "https://randomuser.me/api/portraits/men/55.jpg",
              role: "Firm Functions Leader",
              tenure: "12+ years",
              description: "An experienced firm functions leader known for operational excellence and building high-performing teams. Drives efficiency and quality across functional areas.",
              coreNeeds: ["Operational metrics", "Team performance tools", "Process automation"],
              motivations: ["Operational excellence", "Team empowerment", "Continuous improvement"],
              frustrations: ["Legacy systems", "Manual processes", "Cross-functional dependencies"]
            },
            {
              id: "fsp-ffl-4",
              name: "Group Lead",
              avatar: "https://randomuser.me/api/portraits/men/60.jpg",
              role: "Firm Functions Group Leader",
              tenure: "8+ years",
              description: "A group leader overseeing multiple functional teams and ensuring alignment with firm-wide initiatives. Balances strategic priorities with day-to-day operations.",
              coreNeeds: ["Portfolio management", "Resource allocation", "Stakeholder alignment"],
              motivations: ["Team alignment", "Strategic execution", "Cross-functional impact"],
              frustrations: ["Competing priorities", "Resource scarcity", "Communication gaps"]
            },
            {
              id: "fsp-ffl-5",
              name: "High-Tenure Helen",
              avatar: "https://randomuser.me/api/portraits/women/52.jpg",
              role: "Firm Functions Leader",
              tenure: "20+ years",
              description: "A deeply experienced leader with institutional knowledge spanning decades. Serves as a cultural anchor and mentor for newer team members.",
              coreNeeds: ["Knowledge transfer tools", "Succession planning", "Mentorship programs"],
              motivations: ["Legacy preservation", "Knowledge sharing", "Mentoring next generation"],
              frustrations: ["Rapid change", "Technology gaps", "Loss of institutional memory"]
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
  ]
};
