export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  category: 'react' | 'django' | 'fullstack' | 'business' | 'ecommerce' | 'other';
  featured?: boolean;
  badge?: string;
  clientRole?: string;
  isTeamClient?: boolean;
  teamWork?: string[];
}



export interface Experience {
  role: string;
  company: string;
  location?: string;
  duration: string;
  website?: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  university?: string;
  universityLogo?: string;
  location?: string;
  duration: string;
  status?: string;
  details?: string;
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    titles: string[];
    bioSummary: string;
    bioDetailed: string;
    location: string;
    phone: string;
    email: string;
    whatsapp: string;
    resumeUrl: string;
    portfolioUrl: string;
    socials: {
      github: string;
      linkedin: string;
      facebook: string;
      instagram: string;
      whatsapp: string;
    };
  };
  education: Education[];
  experience: Experience[];
  skills: SkillCategory[];
  professionalSkills: string[];
  languages: Language[];
  projects: Project[];
  services: { title: string; description: string }[];
  achievements: string[];
  whyHireMe: { title: string; desc: string; icon: string }[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Om Prakash Sharma",
    titles: [
      "IT Officer",
      "Web Developer",
      "Website Management Specialist",
      "Digital Marketing Specialist",
      "Chief Marketing Officer"
    ],
    bioSummary: "Om Prakash Sharma is an IT Officer, Web Developer, and Digital Marketing professional based in Nepal, specializing in website management, IT operations, full-stack development, and SEO.",
    bioDetailed: "Om Prakash Sharma is an IT Officer, Web Developer, and Digital Marketing professional based in Lokanthali, Bhaktapur, Nepal. He serves as Chief Marketing Officer (CMO) at Kreativemandu Technologies Pvt. Ltd., bringing extensive hands-on experience in IT operations, website management, full-stack web development, and digital marketing campaigns across organizations in Nepal.\n\nSkilled in building responsive web applications, managing enterprise CMS platforms, technical SEO, and IT support, Om combines technical software engineering (React.js, TypeScript, Python, Django, REST APIs, PostgreSQL, MySQL) with strategic digital marketing leadership. He holds a Bachelor of Information Technology (BIT) and a Bachelor of Business Studies (BBS).",
    location: "Lokanthali, Bhaktapur, Nepal",
    phone: "9808677897",
    email: "omprakash099507@gmail.com",
    whatsapp: "+9779808677897",
    resumeUrl: "/resume.pdf",
    portfolioUrl: "https://www.omprakashsharma.info.np",
    socials: {
      github: "https://github.com/Prakash0m",
      linkedin: "https://linkedin.com/in/prakashomsharma",
      facebook: "https://www.facebook.com/sharmaprakashom",
      instagram: "https://instagram.com",
      whatsapp: "https://wa.me/9779808677897"
    }
  },
  experience: [
    {
      role: "Chief Marketing Officer (CMO)",
      company: "Kreativemandu Technologies Pvt. Ltd.",
      website: "https://www.kreativemandu.com/",
      location: "Kathmandu, Nepal",
      duration: "Present",
      responsibilities: [
        "Lead corporate brand strategy, digital marketing campaigns, and online growth initiatives across diverse industry clients.",
        "Oversee technical SEO, performance marketing (Meta/Google Ads), creative content pipelines, and conversion rate optimization.",
        "Direct client communications and digital solutions roadmap, aligning technical delivery with client business objectives."
      ]
    },
    {
      role: "IT & Digital Media Officer",
      company: "ICE Schools",
      location: "Kathmandu, Nepal",
      duration: "1 Year",
      responsibilities: [
        "Managed school IT infrastructure, portal operations, and digital communication systems for students and faculty.",
        "Spearheaded multimedia content, promotional video production, and social media campaigns driving institutional brand reach."
      ]
    },
    {
      role: "IT Officer — Digital Marketing / Website Handling",
      company: "Sharon Manpower Service",
      website: "https://sharonhrservices.com/",
      location: "Chakrapath / Maharajgunj, Kathmandu",
      duration: "2024 – 2025",
      responsibilities: [
        "Managed day-to-day IT operations and website maintenance.",
        "Managed social media platforms and digital marketing campaigns."
      ]
    },
    {
      role: "IT Officer — Website Handling / Social Media",
      company: "Frontline Requirement",
      website: "https://frontlinerecruitment.ai/en",
      location: "Sinnamangal, Kathmandu",
      duration: "6 Months",
      responsibilities: [
        "Managed website content, updates, and social media pages, providing basic IT support and maintaining digital records."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Information Technology (BIT)",
      institution: "Texas College of Management & IT",
      university: "Lincoln University College",
      universityLogo: "lincoln",
      location: "Sifal, Kathmandu",
      duration: "Completed",
      status: "Completed",
      details: "Affiliated with Lincoln University College. Comprehensive study in IT systems, software engineering, databases, and network administration."
    },
    {
      degree: "Bachelor of Business Studies (BBS)",
      institution: "Danfe College",
      university: "Tribhuvan University (TU)",
      universityLogo: "tu",
      location: "Putalisadak, Kathmandu",
      duration: "Completed 2024",
      status: "Completed (54.30%)",
      details: "Affiliated with Tribhuvan University (TU). Focus in organizational management, business communication, marketing principles, and financial systems."
    }
  ],
  skills: [
    {
      name: "Programming Languages",
      skills: [
        { name: "Python", level: 92 },
        { name: "JavaScript", level: 86 },
        { name: "HTML5 / CSS3", level: 92 },
        { name: "SQL", level: 85 },
        { name: "C++", level: 75 }
      ]
    },
    {
      name: "Backend & Full Stack (Python)",
      skills: [
        { name: "Django", level: 92 },
        { name: "Django REST Framework", level: 88 },
        { name: "REST APIs", level: 92 },
        { name: "Authentication (JWT/OAuth)", level: 84 },
        { name: "Python Automation", level: 88 }
      ]
    },
    {
      name: "Frontend Development",
      skills: [
        { name: "React.js", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Bootstrap", level: 78 },
        { name: "Responsive UI/UX", level: 90 }
      ]
    },
    {
      name: "Database Systems",
      skills: [
        { name: "MySQL", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "SQLite", level: 85 }
      ]
    },
    {
      name: "IT Operations & Support",
      skills: [
        { name: "IT Operations", level: 95 },
        { name: "Technical Support", level: 95 },
        { name: "Computer Troubleshooting", level: 92 },
        { name: "Software Installation & Config", level: 90 },
        { name: "Network Troubleshooting", level: 88 },
        { name: "Digital File Management", level: 92 }
      ]
    },
    {
      name: "Digital Marketing & Growth",
      skills: [
        { name: "Social Media Marketing & Mgmt", level: 94 },
        { name: "Search Engine Optimization (SEO)", level: 90 },
        { name: "Online Brand Promotion", level: 92 },
        { name: "Meta Ads & Campaigns", level: 88 },
        { name: "Lead Generation", level: 88 },
        { name: "Content Planning & Strategy", level: 90 }
      ]
    },
    {
      name: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 92 },
        { name: "Docker", level: 78 },
        { name: "Vercel / Netlify", level: 85 },
        { name: "MS Office & Google Workspace", level: 95 },
        { name: "Canva & CapCut", level: 90 }
      ]
    }
  ],
  professionalSkills: [
    "Problem Solving",
    "Communication",
    "Client Communication",
    "Teamwork",
    "Time Management",
    "Project Coordination",
    "Critical Thinking",
    "Quick Learning",
    "Adaptability",
    "Documentation",
    "Organizational Skills",
    "Multitasking"
  ],
  languages: [
    { language: "Nepali", proficiency: "Native" },
    { language: "English", proficiency: "Proficient" },
    { language: "Hindi", proficiency: "Fluent" }
  ],
  projects: [
    {
      title: "Performance House",
      subtitle: "Full E-Commerce Store & Supplements",
      description: "Commercial e-commerce platform for fitness and nutritional supplements. Managed client requirements and coordinated with the technical team to build the product catalog, cart, checkout pipeline, inventory handling, and payment flow.",
      tech: ["E-Commerce", "Web Development", "Cart & Checkout", "Inventory System", "Payment Flow", "Responsive UI"],
      link: "http://performancehouse.com.np/",
      category: "ecommerce",
      featured: true,
      badge: "E-Commerce",
      clientRole: "Client Account & Team Development",
      isTeamClient: true,
      teamWork: [
        "Gathered client product requirements & established multi-category catalog",
        "Co-developed responsive shopping cart, dynamic checkout & payment flow",
        "Built inventory tracking & automated customer order notification pipeline",
        "Optimized mobile page speed, caching, and on-page product SEO"
      ]
    },
    {
      title: "Ganapati Consultancy",
      subtitle: "Accounting & Tax Advisory Firm",
      description: "Corporate website for an accounting, auditing, and tax advisory consultancy. Handled direct client communications and developed the portal with the team, focusing on financial advisory services, appointment booking, and tax compliance resources.",
      tech: ["Corporate Portal", "Accounting Systems", "Tax Advisory", "Lead Inquiries", "SEO", "Responsive UI"],
      link: "https://ganapaticonsultancy.com.np/",
      category: "business",
      featured: true,
      badge: "Accounting & Tax",
      clientRole: "Client Account & Team Development",
      isTeamClient: true,
      teamWork: [
        "Scoped client service offerings in financial audits, tax planning, and corporate compliance",
        "Engineered client appointment scheduling & consultation inquiry forms",
        "Structured accounting resource hub with downloadable advisory guides",
        "Delivered mobile-responsive interface with fast local search engine indexing"
      ]
    },
    {
      title: "Kreativemandu Technologies",
      subtitle: "Digital Agency & Technology Solutions",
      description: "Official digital agency website for Kreativemandu Technologies. As Chief Marketing Officer (CMO), led client acquisitions, digital strategy, SEO architecture, and web development with our cross-functional team.",
      tech: ["Digital Agency", "Brand Strategy", "Web Development", "Technical SEO", "Growth Funnels", "UI/UX"],
      link: "https://kreativemandu.com/",
      category: "business",
      featured: true,
      badge: "Digital Agency",
      clientRole: "CMO & Technical Lead",
      isTeamClient: true,
      teamWork: [
        "Directed agency brand strategy, client acquisition pipeline, and service roadmap",
        "Led engineering and creative teams in developing the official agency portal",
        "Implemented high-converting lead capture funnels & technical SEO architecture",
        "Established client onboarding workflows and digital marketing service packages"
      ]
    },
    {
      title: "Seven Star Security Services",
      subtitle: "Security & Facility Management Portal",
      description: "Corporate web portal for a licensed security guard and facility management provider. Handled client requirements and developed the site with the team, covering security personnel deployment, event security contracts, and rapid inquiries.",
      tech: ["Corporate Website", "Security Services", "Client Portal", "Lead Capture", "Modern UI", "SEO"],
      link: "https://sevenstarsecurity.com.np/",
      category: "business",
      featured: true,
      badge: "Security Services",
      clientRole: "Client Account & Team Development",
      isTeamClient: true,
      teamWork: [
        "Consulted with company leadership to map security tiers and operational services",
        "Built detailed showcases for corporate guarding, VIP bodyguarding, and event security",
        "Developed emergency contact and fast contract quotation inquiry forms",
        "Optimized website for mobile users and regional corporate client search"
      ]
    },
    {
      title: "Riddhi Siddhi Healthcare",
      subtitle: "Medical & Healthcare Services Portal",
      description: "Healthcare clinic and diagnostic center portal. Managed client relations and built the platform with the team, detailing clinical specialties, doctor schedules, diagnostic services, and online appointment requests.",
      tech: ["Healthcare Portal", "Medical Clinic", "Doctor Directory", "Appointment Booking", "Responsive Layout", "SEO"],
      link: "https://www.riddhisiddhihealthcare.com.np/",
      category: "business",
      featured: true,
      badge: "Healthcare",
      clientRole: "Client Account & Team Development",
      isTeamClient: true,
      teamWork: [
        "Collaborated with clinic administration to structure clinical specialties & services",
        "Built searchable doctor directory with department schedules and consultation hours",
        "Implemented patient appointment inquiry system and diagnostic test rate cards",
        "Delivered accessible, cross-browser responsive layout with optimized load times"
      ]
    },
    {
      title: "Frontline Recruitment AI Platform",
      subtitle: "Global Recruitment & Talent Platform",
      description: "AI-driven international talent acquisition and recruitment platform with automated job matching, candidate portal, and operational records management.",
      tech: ["React.js", "AI Recruitment", "Talent Management", "CMS", "SEO"],
      link: "https://frontlinerecruitment.ai/en",
      category: "fullstack",
      featured: true,
      badge: "Talent Platform",
      clientRole: "Operations & Web Management",
      isTeamClient: true,
      teamWork: [
        "Coordinated candidate record systems and operational recruitment pipelines",
        "Managed website CMS, overseas job listings, and regulatory compliance updates",
        "Collaborated on talent portal interfaces and international visibility SEO"
      ]
    },
    {
      title: "Sharon HR Services Portal",
      subtitle: "International Manpower & Operations Hub",
      description: "Digital operations and web platform for global manpower deployment, international job listings, and client recruitment administration.",
      tech: ["Web Administration", "SEO", "IT Operations", "Digital Records", "Social Media"],
      link: "https://sharonhrservices.com/",
      category: "business",
      featured: true,
      badge: "HR Services",
      clientRole: "Web & IT Operations",
      isTeamClient: true,
      teamWork: [
        "Administered international job posting boards and applicant record pipelines",
        "Managed technical site maintenance, updates, and domain server configurations",
        "Executed integrated digital media campaigns driving overseas recruitment drives"
      ]
    },
    {
      title: "Live Portfolio Showcase",
      subtitle: "Personal Portfolio & Work Showcase",
      description: "Clean, responsive portfolio built with React, TypeScript, and Tailwind CSS to showcase verified engineering experience, client projects, and academic background.",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Vercel"],
      link: "https://www.omprakashsharma.info.np",
      github: "https://github.com/Prakash0m",
      category: "react",
      featured: true,
      badge: "Portfolio"
    },
    {
      title: "ICE Schools Digital Portal & Media",
      subtitle: "Institutional Web & Media Operations",
      description: "Institutional website administration, IT support, and digital multimedia campaigns driving student admissions and brand engagement.",
      tech: ["Web Administration", "Digital Media", "Video Production", "IT Infrastructure", "SEO"],
      category: "business",
      featured: false,
      badge: "Education"
    },
    {
      title: "Full Stack Web Application",
      subtitle: "Python & React Architecture",
      description: "Full-stack application featuring authentication, relational database management, REST API endpoints, and responsive user interface.",
      tech: ["Python", "Django", "React.js", "PostgreSQL", "Tailwind CSS"],
      category: "fullstack"
    }
  ],
  services: [
    {
      title: "Client Project Management & Team Web Delivery",
      description: "End-to-end client consultation, requirement gathering, and leading technical teams to develop and deploy high-converting websites, e-commerce stores, and corporate portals."
    },
    {
      title: "Chief Marketing Strategy & Brand Growth",
      description: "Comprehensive brand strategy, market positioning, conversion optimization, client growth roadmaps, and full-spectrum digital marketing leadership."
    },
    {
      title: "Social Media Marketing & Campaign Management",
      description: "Planning and coordinating multi-platform social media campaigns, high-converting Meta Ads, content strategy, and active audience engagement."
    },
    {
      title: "Search Engine Optimization (SEO) & Visibility",
      description: "Optimizing website SEO, improving organic search rankings, keyword strategies, technical audits, and expanding online digital presence."
    },
    {
      title: "Website Management & Development",
      description: "Building, maintaining, and enhancing responsive websites and web applications using HTML, CSS, JavaScript, React.js, Python, and Django."
    },
    {
      title: "IT Support & Technical Operations",
      description: "Comprehensive IT support, computer troubleshooting, software installation and configuration, network troubleshooting, and digital file management."
    },
    {
      title: "Lead Generation & Performance Marketing",
      description: "Formulating high-converting digital marketing funnels, target audience segmentation, and lead generation pipelines for rapid business growth."
    }
  ],
  achievements: [
    "Handled client accounts & co-developed 5+ live commercial platforms with team: Performance House (E-Commerce), Ganapati Consultancy, Kreativemandu, Seven Star Security, and Riddhi Siddhi Healthcare",
    "Chief Marketing Officer at Kreativemandu Technologies driving brand strategy, SEO, and client growth",
    "Completed 1 Year at ICE Schools managing IT systems, digital media, and social outreach",
    "Maintained IT operations, website, and social media campaigns at Sharon Manpower Service",
    "Managed website content, social channels, and digital records at Frontline Requirement",
    "Completed Bachelor of Information Technology (BIT) alongside completed Bachelor of Business Studies (BBS)",
    "Extensive experience in web technologies (HTML, CSS, JS, Python, Django, React.js, MySQL, PostgreSQL)"
  ],
  whyHireMe: [
    {
      title: "Marketing Leadership & Brand Growth",
      desc: "Proven track record as Chief Marketing Officer delivering high-impact brand strategies, SEO dominance, and client revenue growth.",
      icon: "DollarSign"
    },
    {
      title: "Website Management & Development",
      desc: "Experienced in managing enterprise websites, CMS administration, and hands-on full-stack development with React.js, Python, and Django.",
      icon: "Code"
    },
    {
      title: "Digital Campaigns & Performance Ads",
      desc: "Skilled in social media management, multi-channel ad campaigns (Meta/Google), funnel design, and measurable lead generation.",
      icon: "TrendingUp"
    },
    {
      title: "Dual Technical & Business Education",
      desc: "Unique blend of technical information technology acumen (BIT Graduate) and business management principles (BBS Graduate).",
      icon: "MessageSquare"
    }
  ]
};
