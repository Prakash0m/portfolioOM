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
      description: "Full-scale commercial e-commerce platform for fitness & sports nutritional supplements. Handled direct client relations and spearheaded full-cycle development with the team — integrating product catalog, shopping cart, dynamic checkout flow, inventory tracking, and payment processing.",
      tech: ["E-Commerce", "Web Development", "Cart & Checkout", "Inventory System", "Payment Flow", "Responsive UI"],
      link: "http://performancehouse.com.np/",
      category: "ecommerce",
      featured: true,
      badge: "⭐ Client Live • E-Commerce",
      clientRole: "Handled Client & Developed with Team",
      isTeamClient: true
    },
    {
      title: "Ganapati Consultancy",
      subtitle: "Accounting & Tax Advisory Firm",
      description: "Corporate web platform for a premier accounting, auditing, and tax advisory consultancy. Handled end-to-end client consultation and co-developed with the team — structured around financial consulting services, audit workflows, corporate tax consultation, and lead inquiry channels.",
      tech: ["Corporate Portal", "Accounting Systems", "Tax Advisory", "Lead Inquiries", "SEO Architecture", "Responsive UI"],
      link: "https://ganapaticonsultancy.com.np/",
      category: "business",
      featured: true,
      badge: "⭐ Client Live • Accounting",
      clientRole: "Handled Client & Developed with Team",
      isTeamClient: true
    },
    {
      title: "Kreativemandu Technologies",
      subtitle: "My Company • Digital Agency & IT Solutions",
      description: "Official company portal for Kreativemandu Technologies, where I serve as Chief Marketing Officer (CMO). Handled client onboarding and led website development with our team — covering digital branding, full-stack web solutions, technical SEO architecture, and conversion growth funnels.",
      tech: ["Digital Agency", "Brand Strategy", "Web Development", "Technical SEO", "Growth Funnels", "UI/UX"],
      link: "https://kreativemandu.com/",
      category: "business",
      featured: true,
      badge: "⭐ My Company • Official",
      clientRole: "Co-Founder/CMO & Team Lead",
      isTeamClient: true
    },
    {
      title: "Seven Star Security Services",
      subtitle: "Security & Facility Management Portal",
      description: "Official web portal for an authorized commercial security guard and facility management services provider. Handled direct client coordination and developed with the team — presenting guarding personnel tiers, VIP bodyguard deployments, event security contracts, and rapid response inquiry forms.",
      tech: ["Corporate Website", "Security Services", "Client Portal", "Rapid Contact", "Modern UI", "SEO"],
      link: "https://sevenstarsecurity.com.np/",
      category: "business",
      featured: true,
      badge: "⭐ Client Live • Security",
      clientRole: "Handled Client & Developed with Team",
      isTeamClient: true
    },
    {
      title: "Riddhi Siddhi Healthcare",
      subtitle: "Medical & Healthcare Services Portal",
      description: "Comprehensive healthcare clinic and medical diagnostic web platform. Handled complete client requirements and developed with the team — featuring specialized clinical departments, medical doctor directories, diagnostic service overviews, and online patient appointment inquiries.",
      tech: ["Healthcare Portal", "Medical Clinic", "Doctor Directory", "Appointment Booking", "Responsive Layout", "SEO"],
      link: "https://www.riddhisiddhihealthcare.com.np/",
      category: "business",
      featured: true,
      badge: "⭐ Client Live • Healthcare",
      clientRole: "Handled Client & Developed with Team",
      isTeamClient: true
    },
    {
      title: "Frontline Recruitment AI Platform",
      subtitle: "Global Recruitment & Talent Platform",
      description: "Official global AI recruitment and overseas talent acquisition platform providing automated job matching, candidate portal, and operational management.",
      tech: ["React.js", "AI Recruitment", "Talent Management", "CMS", "SEO"],
      link: "https://frontlinerecruitment.ai/en",
      category: "fullstack",
      featured: true,
      badge: "Featured Live",
      clientRole: "Operations & Web Management",
      isTeamClient: true
    },
    {
      title: "Sharon HR Services Portal",
      subtitle: "International Manpower & Operations Hub",
      description: "Official website and digital operations platform for global HR services, overseas manpower deployment, job listings, and client recruitment management.",
      tech: ["Web Administration", "SEO", "IT Operations", "Digital Records", "Social Media"],
      link: "https://sharonhrservices.com/",
      category: "business",
      featured: true,
      badge: "Featured Live",
      clientRole: "Web Administration & IT Operations",
      isTeamClient: true
    },
    {
      title: "Live Portfolio Showcase",
      subtitle: "Modern Web Presence",
      description: "Fast, responsive web portfolio built with React and Vite showcasing career milestones, live client works, verified education, and tech expertise.",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Vercel"],
      link: "https://www.omprakashsharma.info.np",
      github: "https://github.com/Prakash0m",
      category: "react",
      featured: true,
      badge: "Live Portfolio"
    },
    {
      title: "ICE Schools Digital Portal & Media",
      subtitle: "Institutional Web & Media Operations",
      description: "Administered institutional web portal updates, technical infrastructure, and digital multimedia campaigns driving admissions and brand engagement.",
      tech: ["Web Administration", "Digital Media", "Video Production", "IT Infrastructure", "SEO"],
      category: "business",
      featured: false,
      badge: "Institutional Media"
    },
    {
      title: "Full Stack Web Application",
      subtitle: "Python & React Architecture",
      description: "Interactive web application featuring secure user authentication, relational database management, and responsive UI.",
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
