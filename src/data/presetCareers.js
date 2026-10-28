export const PRESET_BUTTONS = [
  // Row 1
  { id: 'doctor', name: 'Doctor', color: '#ffd21f', textColor: '#14123b' },
  { id: 'engineer', name: 'Engineer', color: '#2ce6a6', textColor: '#14123b' },
  { id: 'civil-servant', name: 'Civil servant', color: '#ff9acb', textColor: '#14123b' },
  { id: 'lawyer', name: 'Lawyer', color: '#a0b2ff', textColor: '#14123b' },
  { id: 'ca', name: 'Chartered accountant', color: '#ffffff', textColor: '#14123b' },
  // Row 2
  { id: 'designer', name: 'Designer', color: '#ffd21f', textColor: '#14123b' },
  { id: 'pilot', name: 'Pilot', color: '#2ce6a6', textColor: '#14123b' },
  { id: 'teacher', name: 'Teacher', color: '#ff9acb', textColor: '#14123b' },
  { id: 'game-developer', name: 'Game developer', color: '#a0b2ff', textColor: '#14123b' },
  { id: 'chef', name: 'Chef', color: '#ffffff', textColor: '#14123b' },
];

export const PRESET_ROADMAPS = {
  doctor: {
    career: "Doctor (Medical Practitioner)",
    tagline: "Heal lives, master human biology, and build a prestigious healthcare career",
    streamRecommendation: {
      stream: "Science (PCB - Physics, Chemistry, Biology)",
      mandatorySubjects: ["Biology", "Chemistry", "Physics", "English"],
      optionalSubjects: ["Psychology", "Physical Education", "Biotechnology", "Mathematics (PCMB optional)"],
      advice: "Take PCB. Mathematics is optional, but taking PCMB keeps biotechnology and bio-informatics doors open. Dedicate high focus to NCERT Biology line-by-line."
    },
    immediateActions: [
      {
        title: "Master Class 10 Biology & Chemistry Foundations",
        desc: "Chapters like Life Processes, Control & Coordination, Heredity, and Chemical Reactions directly form the base for Class 11 Human Physiology and Organic Chemistry.",
        badge: "Academic"
      },
      {
        title: "Read Inspiring Medical Books",
        desc: "Read 'When Breath Becomes Air' by Paul Kalanithi or 'The Gene' by Siddhartha Mukherjee to understand the emotional and intellectual life of medicine.",
        badge: "Mindset"
      },
      {
        title: "Build 5-6 Hours Daily Focused Study Habit",
        desc: "NEET requires high consistency over 2 years. Train your concentration using the Pomodoro technique without social media distractions.",
        badge: "Discipline"
      },
      {
        title: "Volunteer or Shadow at a Local Health Camp/Clinic",
        desc: "Talk to working doctors and MBBS interns to understand night shifts, empathy requirements, and clinical diagnosis reality.",
        badge: "Exposure"
      }
    ],
    examsToCrack: [
      {
        name: "NEET-UG",
        stage: "After Class 12",
        importance: "Critical (Only gateway)",
        details: "National Eligibility cum Entrance Test. 720 marks, covers Physics, Chemistry, and Biology from Class 11 & 12 NCERT. Required for MBBS, BDS, BAMS, BHMS."
      },
      {
        name: "NTSE & Science Olympiads (NSEB / NSO)",
        stage: "During Class 10 & 11",
        importance: "Recommended",
        details: "National Standard Examination in Biology (NSEB) prepares you for competitive multi-tier problem solving and tests fundamental concepts."
      },
      {
        name: "USMLE / PLAB / NEXT",
        stage: "During/After MBBS",
        importance: "Licensing & Postgrad",
        details: "National Exit Test (NExT) for license in India, USMLE for USA practice, PLAB for UK."
      }
    ],
    timelineMilestones: [
      {
        phase: "Phase 1: Class 10 & 11 (Foundations)",
        period: "Age 15 - 17",
        focus: "Strengthen 10th science concepts. Start Class 11 PCB with absolute focus on NCERT textbook lines and solve previous years' NEET MCQs."
      },
      {
        phase: "Phase 2: Class 12 & NEET Sprint",
        period: "Age 17 - 18",
        focus: "Complete 12th syllabus by November. Dedicate Dec–April to full syllabus test series (aim for 650+ marks out of 720) and Board exams."
      },
      {
        phase: "Phase 3: MBBS College & Internship",
        period: "5.5 Years",
        focus: "4.5 years of preclinical, paraclinical, and clinical subjects (Anatomy, Pharmacology, Surgery, Medicine) + 1 year compulsory rotating rotatory hospital internship."
      },
      {
        phase: "Phase 4: Specialization (MD / MS / DNB)",
        period: "3 Years",
        focus: "Crack NEET-PG / NExT to specialize in Cardiology, Neurology, Pediatrics, Orthopedics, or General Surgery."
      }
    ],
    freeResources: {
      youtube: [
        {
          name: "Khan Academy Medicine & Health",
          url: "https://www.youtube.com/@khanacademymedicine",
          description: "World-class visual animations explaining human anatomy, circulatory system, and cellular biology."
        },
        {
          name: "Physics Wallah - Alakh Pandey",
          url: "https://www.youtube.com/@PhysicsWallah",
          description: "Top-rated free lectures breaking down 11th & 12th Physics and Chemistry concepts specifically for NEET."
        },
        {
          name: "Armando Hasudungan",
          url: "https://www.youtube.com/@armandohasudungan",
          description: "Hand-drawn medical and biological illustrations simplifying complex immunological and physiological pathways."
        },
        {
          name: "NCERT Official E-Books & Audio",
          url: "https://ncert.nic.in/textbook.php",
          description: "Official free downloadable NCERT textbooks - the holy grail Bible for NEET."
        }
      ],
      websites: [
        {
          name: "Embibe (Free AI Mock Tests)",
          url: "https://www.embibe.com",
          description: "Personalized AI mock test analytics and NCERT 3D interactive practice questions."
        },
        {
          name: "Coursera Medical Neuroscience (Free Audit)",
          url: "https://www.coursera.org",
          description: "Duke University free introductory course on brain anatomy and neurobiology."
        }
      ]
    },
    proTips: [
      "90%+ of NEET Biology questions come directly from NCERT. Don't waste money on 5 different thick guides before mastering NCERT word-by-word.",
      "Physics is usually the rank decider for medical aspirants. Never neglect Physics numerical practice in Class 11.",
      "Medicine is a marathon: expect 10 years of rigorous learning before reaching independent high-earning practice."
    ]
  },

  engineer: {
    career: "Software / Core Engineer",
    tagline: "Build technology, solve world-scale problems, and architect the future",
    streamRecommendation: {
      stream: "Science (PCM - Physics, Chemistry, Mathematics)",
      mandatorySubjects: ["Mathematics", "Physics", "Chemistry", "English"],
      optionalSubjects: ["Computer Science", "Information Technology", "Physical Education", "Economics"],
      advice: "Take PCM with Computer Science or Informatics Practices. Strong mathematical intuition and logical problem solving are essential."
    },
    immediateActions: [
      {
        title: "Learn Python or C++ Basics Online",
        desc: "Spend 30 minutes a day writing basic algorithms, loops, and conditions on free interactive platforms like Replit or CS50.",
        badge: "Coding"
      },
      {
        title: "Ace Class 10 Trigonometry & Quadratic Equations",
        desc: "Class 11 Calculus and Coordinate Geometry build heavily on 10th algebra, coordinate geometry, and trigonometry.",
        badge: "Math Foundation"
      },
      {
        title: "Build a Small Project (Website or Mini Game)",
        desc: "Create your first HTML/CSS webpage or a text-based Python game to experience the thrill of building things from scratch.",
        badge: "Practical"
      },
      {
        title: "Participate in Coding Challenges or Olympiads",
        desc: "Explore IOI (International Olympiad in Informatics) starter problems or solve Bebras computing challenge tasks.",
        badge: "Logic"
      }
    ],
    examsToCrack: [
      {
        name: "JEE Main & JEE Advanced",
        stage: "After Class 12",
        importance: "Critical (Top Indian Institutes)",
        details: "JEE Main qualifies you for NITs, IIITs, and acts as the screening test for JEE Advanced (the gateway to IITs)."
      },
      {
        name: "BITSAT, VITEEE, MET, MHT-CET, COMEDK",
        stage: "After Class 12",
        importance: "Major State & Private Exams",
        details: "Premier alternatives for BITS Pilani, VIT Vellore, Manipal, RV College, etc."
      },
      {
        name: "IOQM / PRMO (Math Olympiad)",
        stage: "Class 10 & 11",
        importance: "Recommended",
        details: "Develops unmatched analytical speed and non-routine mathematical problem-solving."
      }
    ],
    timelineMilestones: [
      {
        phase: "Phase 1: Class 10 & 11 (Core Math & Physics)",
        period: "Age 15 - 17",
        focus: "Master mechanics in Physics, algebra & calculus in Math. Build small coding side projects on weekends."
      },
      {
        phase: "Phase 2: Class 12 & Entrance Sprint",
        period: "Age 17 - 18",
        focus: "Balance Board exam percentages with mock tests for JEE Main and state entrance tests."
      },
      {
        phase: "Phase 3: B.Tech / B.E. (4 Years)",
        period: "College Years",
        focus: "Learn Data Structures & Algorithms (DSA), System Design, Open Source, Git, and land 3rd-year internships."
      },
      {
        phase: "Phase 4: Tech Industry / High Growth Roles",
        period: "Post-College",
        focus: "Work as Software Development Engineer (SDE), Cloud/DevOps Architect, AI Engineer, or launch your tech startup."
      }
    ],
    freeResources: {
      youtube: [
        {
          name: "CS50 by Harvard University",
          url: "https://www.youtube.com/@cs50",
          description: "The gold standard introduction to computer science, algorithms, memory, and programming."
        },
        {
          name: "freeCodeCamp.org",
          url: "https://www.youtube.com/@freecodecamp",
          description: "Full 10+ hour comprehensive courses on Python, Web Development, C++, and Data Structures for zero cost."
        },
        {
          name: "3Blue1Brown",
          url: "https://www.youtube.com/@3blue1brown",
          description: "Mind-bending visual explanations of calculus, linear algebra, and neural networks."
        },
        {
          name: "Mohit Tyagi (Competishun)",
          url: "https://www.youtube.com/@MohitTyagi",
          description: "Complete, structured IIT JEE PCM lectures from basic to advanced level."
        }
      ],
      websites: [
        {
          name: "LeetCode & HackerRank",
          url: "https://leetcode.com",
          description: "Practice algorithmic logic and prepare for competitive coding challenges."
        },
        {
          name: "Roadmap.sh",
          url: "https://roadmap.sh",
          description: "Interactive visual developer roadmaps for Frontend, Backend, AI, and DevOps."
        }
      ]
    },
    proTips: [
      "Your engineering degree college matters, but your GitHub portfolio and problem-solving skills matter more in modern tech.",
      "Don't ignore Mathematics: machine learning, 3D graphics, cryptography, and game physics are all applied math.",
      "Start version control (Git & GitHub) as early as possible."
    ]
  },

  "civil-servant": {
    career: "Civil Servant (IAS / IPS / IFS)",
    tagline: "Serve the nation, shape public policy, and lead administrative governance",
    streamRecommendation: {
      stream: "Any Stream (Humanities / Arts or Science or Commerce)",
      mandatorySubjects: ["English", "General Studies / History / Pol Science"],
      optionalSubjects: ["Geography", "Economics", "Sociology", "Public Administration"],
      advice: "Any recognized graduation degree is valid. Humanities/Arts (History, Pol Sci, Geography, Economics) gives a direct syllabus overlap for UPSC GS papers, but engineers and commerce grads also top the exam."
    },
    immediateActions: [
      {
        title: "Develop Daily Newspaper Reading Habit",
        desc: "Read editorial columns of The Hindu or The Indian Express daily to develop balanced, analytical perspectives on current affairs.",
        badge: "Current Affairs"
      },
      {
        title: "Study NCERT History, Geography & Civics (Class 6-10)",
        desc: "Do not throw away your 9th & 10th Social Science books! UPSC toppers re-read these exact foundational NCERTs.",
        badge: "Core Foundation"
      },
      {
        title: "Participate in Debates, MUNs & Essay Writing",
        desc: "Cultivate clear spoken communication, articulate expression, and structured argumentation for the UPSC interview and Mains essays.",
        badge: "Communication"
      },
      {
        title: "Understand Indian Constitution & Governance",
        desc: "Watch RSTV/Sansad TV debates on constitutional amendments and parliamentary bills.",
        badge: "Civic Knowledge"
      }
    ],
    examsToCrack: [
      {
        name: "UPSC Civil Services Examination (CSE)",
        stage: "After Graduation (Age 21+)",
        importance: "Critical (IAS, IPS, IFS, IRS)",
        details: "3-stage prestigious examination: Prelims (Objective GS & CSAT), Mains (9 descriptive papers), and Personality Interview."
      },
      {
        name: "State PSC Exams (UPPSC, BPSC, MPSC, TNPSC)",
        stage: "After Graduation",
        importance: "State Administration",
        details: "Recruits Deputy Collectors, DSPs, and state administrative officers."
      },
      {
        name: "CUET-UG",
        stage: "After Class 12",
        importance: "College Admission",
        details: "Gateway to top central universities like DU, JNU, BHU for BA / BSc degrees."
      }
    ],
    timelineMilestones: [
      {
        phase: "Phase 1: Class 10 & 11 (General Awareness)",
        period: "Age 15 - 17",
        focus: "Cultivate world curiosity, understand world history, Indian freedom movement, and practice writing 250-word analytical essays."
      },
      {
        phase: "Phase 2: Class 12 & College Choice",
        period: "Age 17 - 18",
        focus: "Excel in 12th boards, clear CUET or college entrance for a graduation discipline you genuinely enjoy."
      },
      {
        phase: "Phase 3: Graduation Years (Years 1 to 3)",
        period: "Age 18 - 21",
        focus: "Read standard UPSC reference texts (Laxmikanth for Polity, Spectrum for Modern History, Ramesh Singh for Economy) alongside degree."
      },
      {
        phase: "Phase 4: UPSC CSE Attempt & LBSNAA Training",
        period: "Age 21+",
        focus: "Dedicate 1-2 years of intensive full-time preparation, write mock tests, clear CSE, and join the Lal Bahadur Shastri National Academy of Administration."
      }
    ],
    freeResources: {
      youtube: [
        {
          name: "Sansad TV (Perspective & Vishesh)",
          url: "https://www.youtube.com/@SansadTV",
          description: "Authoritative government panel discussions breaking down national policies and geopolitical events."
        },
        {
          name: "Drishti IAS (English & Hindi)",
          url: "https://www.youtube.com/@DrishtiIASvideos",
          description: "Top-notch free daily editorial analysis, Prelims booster series, and mock interview videos."
        },
        {
          name: "StudyIQ IAS",
          url: "https://www.youtube.com/@StudyIQEducationLtd",
          description: "Crisp animated coverage of world history, international relations, and burning current topics."
        },
        {
          name: "CrashCourse World & US History",
          url: "https://www.youtube.com/@crashcourse",
          description: "Fast-paced, entertaining animated history lectures by John Green that make historical concepts click instantly."
        }
      ],
      websites: [
        {
          name: "PIB (Press Information Bureau)",
          url: "https://pib.gov.in",
          description: "Primary official releases of all Government of India ministries, schemes, and policies."
        },
        {
          name: "Insights on India & ClearIAS",
          url: "https://www.insightsonindia.com",
          description: "Free daily current affairs quizzes, answer writing challenges, and mind maps."
        }
      ]
    },
    proTips: [
      "Don't isolate yourself in Class 10/11: develop leadership, hobbies, and sports. The UPSC interview board tests your well-rounded personality, not just book knowledge.",
      "Always have a strong Plan B (like higher studies, private sector skills, or state exams) because UPSC has a 0.2% acceptance rate.",
      "Focus on understanding the 'Why' behind events rather than memorizing dates."
    ]
  },

  lawyer: {
    career: "Lawyer / Corporate Counsel / Judge",
    tagline: "Advocate for justice, draft billion-dollar contracts, and master the legal framework",
    streamRecommendation: {
      stream: "Any Stream (Humanities / Arts or Commerce preferred)",
      mandatorySubjects: ["English", "Political Science / Legal Studies (if available)"],
      optionalSubjects: ["History", "Economics", "Sociology", "Applied Mathematics"],
      advice: "Humanities or Commerce with Legal Studies is ideal. High reading speed, reading comprehension, critical reasoning, and command of English are your greatest superpowers."
    },
    immediateActions: [
      {
        title: "Supercharge Reading Speed & Critical Comprehension",
        desc: "CLAT is 100% a reading speed exam. Read opinion editorials, high-brow fiction, and non-fiction essays for 45 minutes daily.",
        badge: "Comprehension"
      },
      {
        title: "Start Following Landmark Supreme Court Judgments",
        desc: "Follow legal news portals like LiveLaw or Bar & Bench to understand constitutional rights, fundamental liberties, and major ongoing disputes.",
        badge: "Legal Awareness"
      },
      {
        title: "Join School Debate Club or Youth Parliament",
        desc: "Practice constructing arguments under pressure and identifying logical fallacies in opposing viewpoints.",
        badge: "Advocacy"
      },
      {
        title: "Explore Introductory Legal Reasoning Problems",
        desc: "Solve past CLAT legal aptitude questions based on Principle-Fact scenarios to understand legal logic.",
        badge: "Logic"
      }
    ],
    examsToCrack: [
      {
        name: "CLAT (Common Law Admission Test)",
        stage: "In Class 12 (December)",
        importance: "Critical (Top 24+ NLUs)",
        details: "Gateway to top National Law Universities like NLSIU Bengaluru, NALSAR Hyderabad, and WBNUJS Kolkata for 5-year integrated BA LLB / BBA LLB."
      },
      {
        name: "AILET (All India Law Entrance Test)",
        stage: "Class 12 (December)",
        importance: "Exclusive for NLU Delhi",
        details: "Rigorous entrance test for premier National Law University, Delhi."
      },
      {
        name: "SLAT, MH-CET Law, LSAT India",
        stage: "After Class 12",
        importance: "Symbiosis, GLC Mumbai, Jindal",
        details: "Top tier private and state law colleges."
      }
    ],
    timelineMilestones: [
      {
        phase: "Phase 1: Class 10 & 11 (Reading & General Knowledge)",
        period: "Age 15 - 17",
        focus: "Build exceptional vocabulary, speed reading habits, and begin solving basic critical reasoning puzzles."
      },
      {
        phase: "Phase 2: Class 12 (CLAT Intensive Prep)",
        period: "Age 17 - 18",
        focus: "Take 40-50 full-length 2-hour mock tests, master current legal affairs, and crack CLAT in December of Class 12."
      },
      {
        phase: "Phase 3: 5-Year Integrated LLB at NLU / Law School",
        period: "5 Years",
        focus: "Moot courts, law reviews, legal aid clinics, and internships at law firms, senior advocates, and judiciary."
      },
      {
        phase: "Phase 4: Bar Enrollment or Judicial Services",
        period: "Post-Law School",
        focus: "Clear All India Bar Examination (AIBE) to practice in courts, join top-tier corporate firms (Tier 1), or crack Judicial Services Exams."
      }
    ],
    freeResources: {
      youtube: [
        {
          name: "LegalEdge by Toprankers",
          url: "https://www.youtube.com/@LegalEdge",
          description: "Free weekly CLAT current affairs roundups, legal aptitude problem breakdowns, and mock analysis."
        },
        {
          name: "Bar & Bench and LiveLaw",
          url: "https://www.youtube.com/@livelawindia",
          description: "Live Supreme Court proceeding discussions, constitution bench updates, and legal explainers."
        },
        {
          name: "CrashCourse Government & Politics",
          url: "https://www.youtube.com/@crashcourse",
          description: "Entertaining visual breakdown of how laws are drafted, courts operate, and constitutional rights are defended."
        }
      ],
      websites: [
        {
          name: "LiveLaw.in & BarAndBench.com",
          url: "https://www.livelaw.in",
          description: "India's premier legal news portals with concise summaries of landmark judgments."
        },
        {
          name: "Constituent Assembly Debates (CADIndia)",
          url: "https://www.constitutionofindia.net",
          description: "Read the actual historical debates of Dr. B.R. Ambedkar and founders framing the Indian Constitution."
        }
      ]
    },
    proTips: [
      "Modern law is not about dramatic courtroom yelling like Bollywood movies; it is 90% meticulous research, drafting, and contract precision.",
      "Since CLAT happens in December of your 12th grade, you must prepare during Class 11 so it doesn't clash with Board exam preparation.",
      "Corporate law and tech IP law are among the highest-paying starting careers in India right out of premier NLUs."
    ]
  },

  ca: {
    career: "Chartered Accountant (CA)",
    tagline: "Master finance, taxation, corporate auditing, and economic advisory",
    streamRecommendation: {
      stream: "Commerce (With Mathematics highly recommended)",
      mandatorySubjects: ["Accountancy", "Business Studies", "Economics", "English"],
      optionalSubjects: ["Mathematics / Applied Mathematics", "Informatics Practices", "Financial Markets"],
      advice: "Take Commerce with Mathematics. While math is not strictly mandatory for CA, Applied Math makes Business Statistics and Quantitative Aptitude in CA Foundation significantly easier."
    },
    immediateActions: [
      {
        title: "Master Class 10 Commercial Mathematics & Statistics",
        desc: "Mean, median, mode, percentages, simple & compound interest from Class 10 form the bedrock for quantitative aptitude in financial accounting.",
        badge: "Math Foundation"
      },
      {
        title: "Learn Basic Financial Terminology",
        desc: "Learn what assets, liabilities, debit, credit, balance sheets, and profit & loss statements mean through basic videos.",
        badge: "Accounting Basics"
      },
      {
        title: "Read Financial Newspapers (Mint / Business Standard)",
        desc: "Familiarize yourself with GST, corporate earnings, IPOs, RBI interest rates, and national budget discussions.",
        badge: "Business Acumen"
      },
      {
        title: "Develop High Numerical Accuracy & Speed",
        desc: "CA exams are notoriously lengthy. Practice mental arithmetic and calculation accuracy.",
        badge: "Accuracy"
      }
    ],
    examsToCrack: [
      {
        name: "CA Foundation",
        stage: "After Class 12 (May / November)",
        importance: "Step 1 Entry Gate",
        details: "Administered by ICAI. 4 papers: Accounting, Business Laws, Quantitative Aptitude, and Business Economics."
      },
      {
        name: "CA Intermediate",
        stage: "9 Months after Foundation",
        importance: "Step 2 Core Filter",
        details: "Two groups covering Advanced Accounting, Corporate Laws, Taxation, Costing, and Auditing."
      },
      {
        name: "CA Final",
        stage: "After 2-3 Years of Articleship",
        importance: "Final Licensing Step",
        details: "Advanced financial reporting, strategic financial management, international taxation, and corporate governance."
      }
    ],
    timelineMilestones: [
      {
        phase: "Phase 1: Class 10 & 11 (Commerce & Bookkeeping Fundamentals)",
        period: "Age 15 - 17",
        focus: "Master double-entry bookkeeping, journal entries, ledgers, and trial balances in Class 11."
      },
      {
        phase: "Phase 2: Class 12 & CA Foundation Registration",
        period: "Age 17 - 18",
        focus: "Register with ICAI during Class 12. Score 90%+ in Board Exams and crack CA Foundation in your first attempt."
      },
      {
        phase: "Phase 3: CA Intermediate & 2-Year Practical Articleship",
        period: "Age 19 - 22",
        focus: "Clear CA Inter, complete practical IT & orientation training, and complete mandatory articleship at a reputed CA firm (Big 4 or mid-size)."
      },
      {
        phase: "Phase 4: CA Final & ICAI Membership",
        period: "Age 22 - 23",
        focus: "Crack CA Final, receive ICAI charter, and work as a financial controller, investment banker, audit partner, or independent tax consultant."
      }
    ],
    freeResources: {
      youtube: [
        {
          name: "CA Rachana Phadke Ranade",
          url: "https://www.youtube.com/@rachanaranade",
          description: "Super accessible, fun lessons on stock markets, balance sheets, and fundamental accounting concepts."
        },
        {
          name: "Unacademy CA Foundation",
          url: "https://www.youtube.com/@UnacademyCAFoundation",
          description: "Full chapter-wise free lectures on Accounting, Business Law, and Quantitative Aptitude for ICAI syllabus."
        },
        {
          name: "Sunil Panda - The Educator",
          url: "https://www.youtube.com/@TheSunilPanda",
          description: "India's beloved Class 11 & 12 Commerce teacher for mastering Accountancy and Economics concepts with high clarity."
        }
      ],
      websites: [
        {
          name: "ICAI BoS Knowledge Portal (Official)",
          url: "https://www.icai.org/post/bos-knowledge-portal",
          description: "Free study modules, mock test papers, revision test papers (RTPs), and video lectures direct from ICAI."
        },
        {
          name: "Investopedia",
          url: "https://www.investopedia.com",
          description: "The world's clearest dictionary for every financial, tax, and accounting term imaginable."
        }
      ]
    },
    proTips: [
      "CA does not require expensive college degrees: it is an extremely affordable course run by the government statutory body ICAI, offering unmatched ROI.",
      "Articleship is where real CAs are made. Work with a firm that exposes you to corporate auditing, not just mundane tax filing.",
      "The pass percentage is low (10-20%), so self-discipline, writing practice, and sticking to ICAI study material are mandatory."
    ]
  },

  designer: {
    career: "UI/UX & Product Designer",
    tagline: "Design intuitive digital products, visual systems, and delightful human experiences",
    streamRecommendation: {
      stream: "Any Stream (Science, Arts, or Commerce)",
      mandatorySubjects: ["English"],
      optionalSubjects: ["Fine Arts / Commercial Arts", "Computer Science", "Psychology", "Design Thinking"],
      advice: "Any stream is valid! Students from Science, Arts, and Commerce excel equally. Design entrance exams test creative problem solving, observation, drawing, and spatial reasoning."
    },
    immediateActions: [
      {
        title: "Download Figma & Complete Beginner Tutorials",
        desc: "Figma is 100% free for students and the universal industry tool. Learn wireframing, typography, auto-layout, and prototyping.",
        badge: "Tooling"
      },
      {
        title: "Maintain a Daily Sketching & Observation Journal",
        desc: "Sketch objects around you, human figures in perspective, and observe poor designs in everyday life (e.g. confusing door handles or bad app menus).",
        badge: "Creativity"
      },
      {
        title: "Redesign a Screen of Your Favorite Mobile App",
        desc: "Take Spotify, WhatsApp, or Swiggy and redesign one screen to make it cleaner and easier for elderly or young users to use.",
        badge: "Portfolio"
      },
      {
        title: "Study Color Theory, Layout & Typography",
        desc: "Understand contrasting palettes, hierarchy, white space, and why certain fonts evoke different emotional responses.",
        badge: "Visual Sense"
      }
    ],
    examsToCrack: [
      {
        name: "UCEED (Undergraduate Common Entrance for Design)",
        stage: "Class 12 (January)",
        importance: "IIT B.Des Gateway",
        details: "Conducted by IIT Bombay for admission to B.Des programs at IIT Bombay, IIT Delhi, IIT Guwahati, IIT Hyderabad, and IIITDM."
      },
      {
        name: "NID DAT (National Institute of Design Prelims & Mains)",
        stage: "Class 12 (January & April)",
        importance: "India's Premier Design Institute",
        details: "Tests creativity, visualization, model making, and portfolio interview at NID Ahmedabad and campuses."
      },
      {
        name: "NIFT & Private Design Entrances (Srishti, MIT-ID, Pearl)",
        stage: "After Class 12",
        importance: "Fashion, Industrial, Graphic Design",
        details: "High quality design education across specialized domains."
      }
    ],
    timelineMilestones: [
      {
        phase: "Phase 1: Class 10 & 11 (Observation & Sketching)",
        period: "Age 15 - 17",
        focus: "Sharpen 2D/3D visualization, perspective drawing, light & shadow, and participate in design challenges."
      },
      {
        phase: "Phase 2: Class 12 & UCEED / NID Sprint",
        period: "Age 17 - 18",
        focus: "Solve 10 years of UCEED & NID past question papers, build a physical and digital design portfolio."
      },
      {
        phase: "Phase 3: B.Des Degree (4 Years)",
        period: "College Years",
        focus: "Study Human-Computer Interaction (HCI), user research, ergonomics, 3D prototyping, and land tech internships."
      },
      {
        phase: "Phase 4: Product Designer / Design Lead",
        period: "Industry",
        focus: "Work at top product companies (Apple, Google, Swiggy, Airbnb) or design studios shaping next-gen AI interfaces."
      }
    ],
    freeResources: {
      youtube: [
        {
          name: "Mizko (The Design Ship)",
          url: "https://www.youtube.com/@Mizko",
          description: "Top-tier practical tutorials on Figma, UI component systems, UX research, and portfolio building."
        },
        {
          name: "Flux Academy by Ran Segall",
          url: "https://www.youtube.com/@FluxAcademy",
          description: "Master typography, web design principles, layout grids, and working with real clients."
        },
        {
          name: "DesignCourse",
          url: "https://www.youtube.com/@DesignCourse",
          description: "Interactive UI critiques, modern web UI trends, animations, and frontend integration."
        }
      ],
      websites: [
        {
          name: "Mobbin & Dribbble",
          url: "https://mobbin.com",
          description: "Archive of thousands of real iOS/Android app screens to study UX flows and visual patterns."
        },
        {
          name: "LawsofUX.com",
          url: "https://lawsofux.com",
          description: "Visual collection of psychological principles that govern user-friendly interface design."
        }
      ]
    },
    proTips: [
      "Design is not just making things look pretty; design is how it works, how accessible it is, and how effortlessly users achieve their goals.",
      "Your portfolio of 3-4 thoughtful case studies is worth 100 times more than any paper certificate.",
      "Learn basic HTML/CSS: understanding code makes you 10x more valuable to engineering teams."
    ]
  },

  pilot: {
    career: "Commercial Airline Pilot",
    tagline: "Fly modern aircraft, travel the globe, and command the skies",
    streamRecommendation: {
      stream: "Science (PCM - Physics and Mathematics are MANDATORY)",
      mandatorySubjects: ["Physics", "Mathematics", "English"],
      optionalSubjects: ["Aviation / Geography / Physical Education / Computer Science"],
      advice: "DGCA (Directorate General of Civil Aviation) requires minimum 50% in Class 12 Physics and Mathematics. If you didn't have PCM, you must clear them via NIOS (National Institute of Open Schooling)."
    },
    immediateActions: [
      {
        title: "Check DGCA Medical Class 2 / Class 1 Standards",
        desc: "Get an initial eye exam (distant vision correctable to 6/6, normal color vision) and check basic fitness and hearing requirements.",
        badge: "Medical Check"
      },
      {
        title: "Master Class 10 & 11 Physics & Trigonometry",
        desc: "Aerodynamics, vectors, speed-distance-time, atmospheric pressure, and weather science form the foundation of flight navigation.",
        badge: "Physics & Math"
      },
      {
        title: "Experiment with Flight Simulators",
        desc: "Try Microsoft Flight Simulator or Infinite Flight on mobile to understand cockpit instruments, attitude indicators, and rudder controls.",
        badge: "Simulation"
      },
      {
        title: "Polish Radio Communication & English Fluency",
        desc: "All international aviation operates in English (ICAO English Language Proficiency Level 4+ is mandatory for pilots).",
        badge: "Aviation English"
      }
    ],
    examsToCrack: [
      {
        name: "DGCA CPL Ground Theory Exams",
        stage: "After Class 12",
        importance: "Mandatory Licensing",
        details: "Air Navigation, Aviation Meteorology, Air Regulations, Aircraft Technical General, and Radio Telephony (RTR-A)."
      },
      {
        name: "IGRUA Entrance Exam",
        stage: "Class 12 Passing Year",
        importance: "Premier Indian Flight Academy",
        details: "Indira Gandhi Rashtriya Uran Akademi entrance test, pilot aptitude test, and interview."
      },
      {
        name: "Cadet Pilot Program Assessments (IndiGo, Air India)",
        stage: "Age 18+",
        importance: "Guaranteed Job Pathway",
        details: "ADAPT psychomotor aptitude test, simulator evaluation, and HR panel."
      }
    ],
    timelineMilestones: [
      {
        phase: "Phase 1: Class 10 & 12 (Secure PCM 60%+ & Class 2 Medical)",
        period: "Age 15 - 18",
        focus: "Excel in 12th Board exams with Physics and Math. Complete DGCA Class 2 medical through DGCA approved doctors."
      },
      {
        phase: "Phase 2: Flying School & DGCA CPL (Commercial Pilot License)",
        period: "18 - 24 Months",
        focus: "Complete 200 hours of flying time (cross-country, night flying, instrument rating) and clear all 5 DGCA ground exams."
      },
      {
        phase: "Phase 3: Multi-Engine Rating & Type Rating (A320 / B737)",
        period: "6 - 12 Months",
        focus: "Complete type-specific simulator training for modern commercial jets like Airbus A320 or Boeing 737."
      },
      {
        phase: "Phase 4: First Officer (Co-Pilot) to Captain",
        period: "Career Progression",
        focus: "Join an airline as Junior First Officer, clock 1,500+ commercial hours, clear ATPL, and earn your 4th stripe as Captain."
      }
    ],
    freeResources: {
      youtube: [
        {
          name: "Mentour Pilot",
          url: "https://www.youtube.com/@MentourPilot",
          description: "Real Boeing 737 training captain explaining air crash investigations, cockpit procedures, and flight dynamics."
        },
        {
          name: "Captain Joe",
          url: "https://www.youtube.com/@CaptainJoe",
          description: "Answers every fascinating pilot question: how crosswind landings work, flight instruments, and daily airline life."
        },
        {
          name: "Flight Radar 24 & LiveATC",
          url: "https://www.flightradar24.com",
          description: "Track real-time commercial flights and listen to live air traffic controller radio chatter worldwide."
        }
      ],
      websites: [
        {
          name: "DGCA Official Portal (dgca.gov.in)",
          url: "https://www.dgca.gov.in",
          description: "Official pilot licensing guidelines, approved medical examiner list, and syllabus."
        },
        {
          name: "FAA Pilot Handbooks (Free PDFs)",
          url: "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation",
          description: "Free complete official handbooks: Pilot's Handbook of Aeronautical Knowledge and Instrument Flying."
        }
      ]
    },
    proTips: [
      "Commercial pilot training requires substantial financial investment (approx. ₹45–80 Lakhs). Research airline Cadet Pilot Programs which offer structured financing and letters of intent.",
      "Get your Class 2 and Class 1 medicals done early before investing in flying school deposits to ensure you are medically fit.",
      "Discipline, mental calm under pressure, and spatial alertness are far more critical than raw academic brilliance."
    ]
  },

  teacher: {
    career: "Educator / Professor / EdTech Specialist",
    tagline: "Inspire the next generation, master pedagogy, and transform human potential",
    streamRecommendation: {
      stream: "Any Stream matching your favorite subject passion",
      mandatorySubjects: ["English", "Subject of your interest (Physics, Math, History, Literature, etc.)"],
      optionalSubjects: ["Psychology", "Sociology", "Education"],
      advice: "Pick the stream you genuinely love. If you want to teach Science/Math, choose PCM/PCB. If you love literature and history, choose Humanities. If you love commerce and economics, choose Commerce."
    },
    immediateActions: [
      {
        title: "Start Tutoring Younger Siblings or Peers",
        desc: "Explain a difficult Class 8 or 9 concept in simple terms. The best way to learn any concept deeply is to teach it to someone else.",
        badge: "Practice"
      },
      {
        title: "Study the Feynman Technique of Learning",
        desc: "Learn how Nobel laureate Richard Feynman simplified complex quantum mechanics into plain English with zero jargon.",
        badge: "Pedagogy"
      },
      {
        title: "Read Foundational Books on Human Psychology & Learning",
        desc: "Understand how the human brain retains memory, overcomes learning plateaus, and stays intrinsically motivated.",
        badge: "Psychology"
      },
      {
        title: "Create 3-Minute Video Lessons",
        desc: "Record yourself teaching one interesting topic using a whiteboard or slide presentation and critique your clarity and pacing.",
        badge: "Delivery"
      }
    ],
    examsToCrack: [
      {
        name: "CUET-UG",
        stage: "After Class 12",
        importance: "College Admission",
        details: "Admission to top universities for BA / BSc / B.Ed programs."
      },
      {
        name: "CTET & State TET",
        stage: "After B.Ed",
        importance: "Central / State School Eligibility",
        details: "Central Teacher Eligibility Test for Kendriya Vidyalayas (KVS), Navodaya (NVS), and top private schools."
      },
      {
        name: "UGC-NET / CSIR-NET",
        stage: "After Master's Degree (MA/MSc)",
        importance: "College Professor / JRF",
        details: "Eligibility for Assistant Professor in Indian universities and Junior Research Fellowship for funded PhD."
      }
    ],
    timelineMilestones: [
      {
        phase: "Phase 1: Class 10 & 12 (Subject Mastery)",
        period: "Age 15 - 18",
        focus: "Develop profound clarity in your chosen subject area and cultivate stage presence and storytelling ability."
      },
      {
        phase: "Phase 2: Bachelor's Degree + B.Ed (or Integrated 4-Year ITEP)",
        period: "3 - 4 Years",
        focus: "Complete graduation and integrated B.Ed learning educational psychology, curriculum design, and classroom management."
      },
      {
        phase: "Phase 3: Master's Degree & NET / TET Exams",
        period: "2 Years",
        focus: "Pursue post-graduation in your core subject and clear CTET or UGC NET."
      },
      {
        phase: "Phase 4: School Faculty, University Professor, or EdTech Creator",
        period: "Career",
        focus: "Join top international schools, universities, or reach millions of students worldwide through digital education platforms."
      }
    ],
    freeResources: {
      youtube: [
        {
          name: "Veritasium & 3Blue1Brown",
          url: "https://www.youtube.com/@veritasium",
          description: "Masterclasses in how to construct scientific narratives, build suspense, and explain counterintuitive phenomena."
        },
        {
          name: "TED-Ed",
          url: "https://www.youtube.com/@TEDEd",
          description: "Short, beautifully animated educational lessons demonstrating the power of visual pedagogy."
        },
        {
          name: "Edutopia",
          url: "https://www.youtube.com/@edutopia",
          description: "Evidence-based classroom practices, active learning strategies, and emotional intelligence in teaching."
        }
      ],
      websites: [
        {
          name: "Swayam & NPTEL Portal (Govt of India)",
          url: "https://swayam.gov.in",
          description: "Free certified courses taught by India's top professors across all academic disciplines."
        },
        {
          name: "Khan Academy",
          url: "https://www.khanacademy.org",
          description: "The world's best example of mastery-based self-paced digital teaching."
        }
      ]
    },
    proTips: [
      "Modern educators are no longer lecture machines; they are learning experience designers, content creators, and empathetic mentors.",
      "Teaching on platforms like YouTube or building digital courses can generate an income and impact larger than many corporate jobs.",
      "Patience and empathy are your greatest assets: celebrate students when they make mistakes and guide them to find answers themselves."
    ]
  },

  "game-developer": {
    career: "Game Developer & Interactive 3D Engineer",
    tagline: "Build immersive virtual worlds, write gameplay systems, and create interactive magic",
    streamRecommendation: {
      stream: "Science (PCM - Physics, Chemistry, Mathematics)",
      mandatorySubjects: ["Mathematics", "Physics", "Computer Science (if available)"],
      optionalSubjects: ["Information Technology", "Fine Arts", "Multimedia"],
      advice: "Take Science with Mathematics. Game physics, 3D vector transformations, lighting shaders, and game engine mechanics are built entirely on vectors, trigonometry, and linear algebra."
    },
    immediateActions: [
      {
        title: "Download Godot Engine or Unity (Free)",
        desc: "Godot is ultra-lightweight, 100% free open-source, and perfect for learning 2D/3D game mechanics using GDScript or C#.",
        badge: "Engine"
      },
      {
        title: "Learn C# or Python Programming Basics",
        desc: "Understand variables, loops, object-oriented programming (OOP), vectors, and collision detection logic.",
        badge: "Coding"
      },
      {
        title: "Build and Finish a Tiny Game (Flappy Bird / Pong clone)",
        desc: "Starting and finishing a complete game with a start screen, score counter, and game-over state teaches 90% of game loop architecture.",
        badge: "Project"
      },
      {
        title: "Participate in Game Jams on Itch.io",
        desc: "Join weekend events like Ludum Dare or GMTK Game Jam to build games under creative constraints with global indie devs.",
        badge: "Community"
      }
    ],
    examsToCrack: [
      {
        name: "JEE Main / BITSAT / State CETs",
        stage: "After Class 12",
        importance: "B.Tech in Computer Science",
        details: "A strong Computer Science engineering degree provides the ideal math and systems programming foundation for game studios."
      },
      {
        name: "UCEED / NID DAT",
        stage: "Class 12",
        importance: "Game Art & Game Design Degrees",
        details: "For students focusing on game design, level design, character rigging, and interactive narrative."
      },
      {
        name: "Foreign University Entrances (DigiPen, SMU Guildhall, Abertay)",
        stage: "After Class 12",
        importance: "Specialized Global Game Colleges",
        details: "World-renowned institutes dedicated 100% to game software engineering."
      }
    ],
    timelineMilestones: [
      {
        phase: "Phase 1: Class 10 & 11 (Game Logic & Vector Math)",
        period: "Age 15 - 17",
        focus: "Master 10th & 11th math (vectors, coordinate geometry). Build 3 mini games in Godot/Unity and upload to itch.io."
      },
      {
        phase: "Phase 2: Class 12 & CS College Entrance",
        period: "Age 17 - 18",
        focus: "Crack entrance into B.Tech CSE or specialized Game Design program while keeping your game dev hobby active."
      },
      {
        phase: "Phase 3: College Years (C++, Unreal Engine & Shaders)",
        period: "College Years",
        focus: "Learn C++, Unreal Engine 5, memory management, graphics programming, multiplayer networking, and publish playable demos."
      },
      {
        phase: "Phase 4: AAA Studio or Indie Game Studio",
        period: "Career",
        focus: "Work as Gameplay Programmer, Engine Developer, Technical Artist at Rockstar, Ubisoft, EA, Epic Games, or launch your own indie studio."
      }
    ],
    freeResources: {
      youtube: [
        {
          name: "Brackeys (Legendary Archives)",
          url: "https://www.youtube.com/@Brackeys",
          description: "The absolute greatest beginner tutorials for game development, C#, and game feel."
        },
        {
          name: "Game Maker's Toolkit (GMTK)",
          url: "https://www.youtube.com/@GMTK",
          description: "Brilliant deep-dives into game design theory, level design, pacing, and mechanics."
        },
        {
          name: "Sebastian Lague",
          url: "https://www.youtube.com/@SebastianLague",
          description: "Incredible visual coding journeys: procedural planet generation, ray tracing, and compute shaders."
        },
        {
          name: "Clear Code (Godot & Python)",
          url: "https://www.youtube.com/@ClearCode",
          description: "Massive comprehensive 10-hour free courses on 2D and 3D game engines."
        }
      ],
      websites: [
        {
          name: "Itch.io",
          url: "https://itch.io",
          description: "Publish your free browser/desktop games and download thousands of free 2D/3D sprite & sound packs."
        },
        {
          name: "OpenGameArt.org & Kenney.nl",
          url: "https://kenney.nl/assets",
          description: "Completely free, public domain game assets, sound effects, 3D models, and textures."
        }
      ]
    },
    proTips: [
      "The #1 trap beginner developers fall into: trying to make a massive open-world MMO RPG on day one. Scope tiny: finish small games first.",
      "Gameplay programming requires solid math: do not skip vectors, dot products, cross products, and trigonometry in school.",
      "Having 2 completed, playable games hosted on itch.io is more powerful than any resume bullet point."
    ]
  },

  chef: {
    career: "Executive Chef & Culinary Artist",
    tagline: "Master gastronomic science, lead world-class kitchens, and create culinary artistry",
    streamRecommendation: {
      stream: "Any Stream (Commerce, Arts, or Science)",
      mandatorySubjects: ["English"],
      optionalSubjects: ["Home Science", "Business Studies", "Chemistry (Food Science)", "Entrepreneurship"],
      advice: "Any stream is valid! Science helps you understand molecular gastronomy and food chemistry; Commerce prepares you to manage restaurant profit margins and supply chains."
    },
    immediateActions: [
      {
        title: "Master Fundamental Knife Skills & Safety",
        desc: "Learn basic French cuts (julienne, brunoise, batonnet) under adult supervision using simple vegetables like potatoes and carrots.",
        badge: "Kitchen Basics"
      },
      {
        title: "Understand the Science of Flavor Balancing",
        desc: "Learn how the 5 basic tastes (salt, sweet, sour, bitter, umami) interact with heat, acidity, and fat.",
        badge: "Flavor Science"
      },
      {
        title: "Cook Daily Meals for Your Family",
        desc: "Take charge of Sunday lunches: plan the menu, budget ingredients, prep stations, cook, and clean up. Consistency under time constraints is key.",
        badge: "Hands-on"
      },
      {
        title: "Read 'Salt, Fat, Acid, Heat' by Samin Nosrat",
        desc: "The single best foundational culinary book explaining the 4 universal pillars that make any food taste phenomenal.",
        badge: "Literature"
      }
    ],
    examsToCrack: [
      {
        name: "NCHM JEE (National Council for Hotel Management Joint Entrance Exam)",
        stage: "After Class 12",
        importance: "Critical (Top IHMs in India)",
        details: "Conducted by NTA for admission to premier government Institutes of Hotel Management (IHM Pusa Delhi, IHM Mumbai, etc.) for B.Sc. Hospitality & Hotel Administration."
      },
      {
        name: "STEP Program (Oberoi Group of Hotels)",
        stage: "After Class 12 (Age 18-20)",
        importance: "Elite Hotel Apprenticeship",
        details: "Prestigious 3-year practical culinary apprenticeship training directly inside luxury Oberoi and Trident kitchens."
      },
      {
        name: "Culinary Institute of America (CIA) / Le Cordon Bleu",
        stage: "After Class 12",
        importance: "Global Culinary Academies",
        details: "World-class French culinary diplomas in Paris, London, Sydney, and New York."
      }
    ],
    timelineMilestones: [
      {
        phase: "Phase 1: Class 10 & 12 (Kitchen Curiosity & Culinary Fundamentals)",
        period: "Age 15 - 18",
        focus: "Develop palate sensitivity, master home cooking, understand food hygiene standards, and prepare for NCHM JEE."
      },
      {
        phase: "Phase 2: Culinary Arts / Hotel Management Degree (3 Years)",
        period: "Age 18 - 21",
        focus: "Attend top IHM or culinary academy, master butchery, bakery, pastry arts, food microbiology, and industrial training."
      },
      {
        phase: "Phase 3: Commis Chef to Chef de Partie (Kitchen Hierarchy)",
        period: "Age 21 - 25",
        focus: "Grind in high-pressure commercial kitchens (Commis 3, Commis 2, Demi Chef, Chef de Partie), mastering hot line stations."
      },
      {
        phase: "Phase 4: Sous Chef to Executive Chef / Restaurateur",
        period: "Age 26+",
        focus: "Manage kitchen operations, design seasonal tasting menus, run Michelin-starred or luxury dining establishments, or open your own restaurant."
      }
    ],
    freeResources: {
      youtube: [
        {
          name: "Gordon Ramsay Academy & Masterclass Clips",
          url: "https://www.youtube.com/@gordonramsay",
          description: "Essential masterclasses in pan searing, egg poaching, knife sharpness, seasoning, and kitchen speed."
        },
        {
          name: "Babin Eats / Basics with Babish",
          url: "https://www.youtube.com/@babishculinaryuniverse",
          description: "Engaging step-by-step breakdowns of essential sauces, stocks, baking doughs, and meat cuts."
        },
        {
          name: "Your Food Lab (Chef Sanjyot Keer)",
          url: "https://www.youtube.com/@YourFoodLab",
          description: "Modern, hygienic, and authentic professional Indian culinary techniques and street food reinvention."
        },
        {
          name: "French Cooking Academy",
          url: "https://www.youtube.com/@FrenchCookingAcademy",
          description: "Traditional French culinary fundamentals: mother sauces, emulsions, roux, and classical reductions."
        }
      ],
      websites: [
        {
          name: "Serious Eats - The Food Lab",
          url: "https://www.seriouseats.com",
          description: "J. Kenji López-Alt's food science breakdowns explaining why chemical browning (Maillard reaction) happens."
        },
        {
          name: "NCHMCT Official Portal",
          url: "https://nchmct.info",
          description: "Official information on Indian hospitality degrees, campus cutoffs, and culinary syllabi."
        }
      ]
    },
    proTips: [
      "Commercial kitchens are high-adrenaline, physical team environments with 12-hour shifts on your feet. Physical fitness and mental stamina are essential.",
      "Cleanliness, station organization (Mise en Place), and respect for ingredients are what separate great chefs from ordinary cooks.",
      "Do not limit yourself to just one cuisine: the best modern chefs blend classical techniques with global and regional flavors."
    ]
  }
};

/**
 * Intelligent Dynamic Fallback Generator for any arbitrary career typed by student.
 * Creates an authentic, rich roadmap matching the exact structure.
 */
export function generateDynamicRoadmap(careerName) {
  const cleanName = careerName.trim();
  const lower = cleanName.toLowerCase();

  // Check if it matches any preset
  for (const key of Object.keys(PRESET_ROADMAPS)) {
    if (lower.includes(key) || key.includes(lower)) {
      return PRESET_ROADMAPS[key];
    }
  }

  // Determine likely stream
  let stream = "Science (PCM / PCB), Commerce, or Humanities depending on specialization";
  let streamAdvice = "Evaluate whether this career leans towards technical engineering/medical sciences, business/finance, or creative humanities.";
  let exams = [
    {
      name: "CUET-UG (Central Universities Entrance Test)",
      stage: "After Class 12",
      importance: "Top National Universities",
      details: "Comprehensive national entrance exam for admission into premier undergraduate degree programs across India."
    },
    {
      name: "Subject-Specific Entrance / State CETs",
      stage: "Class 12",
      importance: "Domain Specialization",
      details: "Premier university or council-level screening examinations for this specialized profession."
    }
  ];

  if (lower.includes("ai") || lower.includes("data") || lower.includes("tech") || lower.includes("cyber") || lower.includes("robot")) {
    stream = "Science (PCM - Physics, Chemistry, Mathematics with Computer Science)";
    streamAdvice = "Pure mathematics, discrete algorithms, and programming logic are the core foundations.";
    exams.unshift({
      name: "JEE Main & JEE Advanced",
      stage: "After Class 12",
      importance: "Gateway to IITs & NITs",
      details: "Benchmark technical entrance test for Computer Science & Engineering disciplines."
    });
  } else if (lower.includes("finance") || lower.includes("bank") || lower.includes("invest") || lower.includes("market") || lower.includes("business")) {
    stream = "Commerce (With Mathematics / Applied Mathematics)";
    streamAdvice = "Take Commerce with Mathematics. Financial accounting, statistics, and business economics provide immediate leverage.";
    exams.unshift({
      name: "IPMAT (IIM Indore, Rohtak, etc.)",
      stage: "Class 12",
      importance: "5-Year Integrated Management at IIMs",
      details: "Pre-eminent management entrance test right after Class 12 for dual BBA + MBA."
    });
  } else if (lower.includes("art") || lower.includes("write") || lower.includes("journal") || lower.includes("psycholog") || lower.includes("actor") || lower.includes("film")) {
    stream = "Humanities / Arts or Any Passionate Stream";
    streamAdvice = "Humanities with Psychology, Literature, Media, or Sociology builds nuanced human insight and critical expression.";
    exams.unshift({
      name: "FTII / IIMC / Central University Entrance",
      stage: "After Graduation / Class 12",
      importance: "Premier Creative Academies",
      details: "Film, Television, Journalism, and Media testing creative aptitude and storytelling."
    });
  }

  return {
    career: cleanName.charAt(0).toUpperCase() + cleanName.slice(1),
    tagline: `Your customized pathway to excel as a world-class ${cleanName}`,
    streamRecommendation: {
      stream: stream,
      mandatorySubjects: ["English", "Foundational Domain Subjects"],
      optionalSubjects: ["Applied Mathematics", "Computer Science", "Economics / Psychology"],
      advice: streamAdvice
    },
    immediateActions: [
      {
        title: `Explore Fundamentals of ${cleanName} Right Now`,
        desc: `Spend 30 minutes every weekend watching introductory lectures, documentaries, and industry interviews on what top professionals in this field do daily.`,
        badge: "Awareness"
      },
      {
        title: "Focus on High Scores in Class 10 Boards",
        desc: "A solid 10th grade foundation ensures you have free choice in picking your preferred school stream and prestigious 11th/12th junior colleges.",
        badge: "Academic"
      },
      {
        title: "Build One Practical Hobby Project",
        desc: `Don't just read theory: create a small real-world experiment, portfolio piece, or blog post related to ${cleanName}.`,
        badge: "Portfolio"
      },
      {
        title: "Connect with Mentors & Seniors in the Field",
        desc: "Reach out to working professionals or college seniors on LinkedIn (with parent guidance) or through school alumni networks to ask about real career paths.",
        badge: "Networking"
      }
    ],
    examsToCrack: exams,
    timelineMilestones: [
      {
        phase: "Phase 1: Class 10 & 11 (Foundational Knowledge)",
        period: "Age 15 - 17",
        focus: `Strengthen core subjects, explore free beginner courses, and choose the optimal stream after Class 10 results.`
      },
      {
        phase: "Phase 2: Class 12 & Competitive Entrances",
        period: "Age 17 - 18",
        focus: `Balance Board exams with national/state college entrance tests (CUET, JEE, CLAT, or specialized university screening).`
      },
      {
        phase: "Phase 3: Undergraduate Degree & Practical Internships",
        period: "3 - 4 Years",
        focus: `Master the theoretical depth, build peer networks, join student clubs, and complete real-world summer internships.`
      },
      {
        phase: "Phase 4: Industry Launch / Post-Graduation",
        period: "Career Start",
        focus: `Step into junior professional roles, build recognized domain expertise, and continuously upskill with modern tools.`
      }
    ],
    freeResources: {
      youtube: [
        {
          name: "CrashCourse",
          url: "https://www.youtube.com/@crashcourse",
          description: "High quality, visual, entertaining educational video series covering science, history, economics, psychology, and philosophy."
        },
        {
          name: "Khan Academy",
          url: "https://www.youtube.com/@khanacademy",
          description: "Clear, step-by-step master lessons for academic fundamentals, math, science, and computing."
        },
        {
          name: "TEDx & Big Think",
          url: "https://www.youtube.com/@TEDx",
          description: "Inspiring perspectives from global leaders and pioneers breaking ground in diverse modern professions."
        }
      ],
      websites: [
        {
          name: "Coursera & edX (Free Audit Option)",
          url: "https://www.coursera.org",
          description: "Audit world-class university courses from Harvard, Stanford, and Yale for zero dollars."
        },
        {
          name: "Roadmap.sh & National Career Service (NCS India)",
          url: "https://www.ncs.gov.in",
          description: "Official career guidance and step-by-step skill roadmaps."
        }
      ]
    },
    proTips: [
      "Never pick a career solely based on what your friends or relatives suggest. Test your genuine curiosity by building small projects first.",
      "The most successful professionals pair domain skills with excellent communication, emotional intelligence, and technological adaptability.",
      "Consistency beats intensity: studying 1-2 hours of focused domain skills every day compounds into massive mastery over 3 years."
    ]
  };
}

