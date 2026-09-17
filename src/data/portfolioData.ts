export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  category: 'react' | 'django' | 'fullstack' | 'business' | 'other';
  featured?: boolean;
  badge?: string;
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
      "Chief Marketing Officer",
      "Digital Marketing Specialist",
      "Website Management Specialist",
      "Full Stack Developer"
    ],
    bioSummary: "Chief Marketing Officer at Kreativemandu Technologies and Tech Professional with proven expertise in digital marketing growth, brand strategy, website management, and full-stack development.",
    bioDetailed: "Chief Marketing Officer (CMO) at Kreativemandu Technologies Pvt. Ltd. and seasoned technology professional with strong experience across digital growth strategy, brand positioning, website management, and IT operations.\n\nSkilled in spearheading high-impact digital marketing campaigns, driving SEO and lead generation, managing enterprise web portals, and bridging business strategy with technical execution. Holds a Bachelor of Information Technology (BIT) alongside a completed Bachelor of Business Studies (BBS).",
    location: "Lokanthali, Bhaktapur, Nepal",
    phone: "9808677897",
    email: "omprakash099507@gmail.com",
    whatsapp: "+9779808677897",
    resumeUrl: "/resume.pdf",
    portfolioUrl: "https://portfolio-om-nine.vercel.app",
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
      title: "Frontline Recruitment AI Platform",
      subtitle: "Global Recruitment & Talent Platform",
      description: "Official global AI recruitment and overseas talent acquisition platform providing automated job matching, candidate portal, and operational management.",
      tech: ["React.js", "AI Recruitment", "Talent Management", "CMS", "SEO"],
      link: "https://frontlinerecruitment.ai/en",
      category: "fullstack",
      featured: true,
      badge: "Featured Live"
    },
    {
      title: "Kreativemandu Technologies",
      subtitle: "Digital Agency & Growth Portal",
      description: "Official digital marketing agency portal driving client brand campaigns, technical SEO, social media growth strategies, and creative web solutions.",
      tech: ["Digital Marketing", "SEO", "Brand Strategy", "Content Planning", "Analytics"],
      link: "https://www.kreativemandu.com/",
      category: "business",
      featured: true,
      badge: "CMO Leadership"
    },
    {
      title: "Sharon HR Services Portal",
      subtitle: "International Manpower & Operations Hub",
      description: "Official website and digital operations platform for global HR services, overseas manpower deployment, job listings, and client recruitment management.",
      tech: ["Web Administration", "SEO", "IT Operations", "Digital Records", "Social Media"],
      link: "https://sharonhrservices.com/",
      category: "business",
      featured: true,
      badge: "Featured Live"
    },
    {
      title: "ICE Schools Digital Portal & Media",
      subtitle: "Institutional Web & Media Operations",
      description: "Administered institutional web portal updates, technical infrastructure, and digital multimedia campaigns driving admissions and brand engagement.",
      tech: ["Web Administration", "Digital Media", "Video Production", "IT Infrastructure", "SEO"],
      category: "business",
      featured: true,
      badge: "Institutional Media"
    },
    {
      title: "Full Stack Web Application",
      subtitle: "Python & React Architecture",
      description: "Interactive web application featuring secure user authentication, relational database management, and responsive UI.",
      tech: ["Python", "Django", "React.js", "PostgreSQL", "Tailwind CSS"],
      category: "fullstack"
    },
    {
      title: "Live Portfolio Showcase",
      subtitle: "Modern Web Presence",
      description: "Fast, responsive web portfolio built with React and Vite showcasing career milestones and tech expertise.",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Vercel"],
      link: "https://portfolio-om-nine.vercel.app",
      github: "https://github.com/Prakash0m",
      category: "react",
      featured: true,
      badge: "Live Portfolio"
    }
  ],
  services: [
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
