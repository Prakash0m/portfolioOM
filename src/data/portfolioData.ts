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
      "IT Officer",
      "Website Management Specialist",
      "Digital Marketing Professional",
      "IT Support Specialist"
    ],
    bioSummary: "IT and Digital Marketing professional with hands-on experience in IT operations, website management, and social media marketing across service and technology organizations.",
    bioDetailed: "IT and Digital Marketing professional with hands-on experience in IT operations, website management, and social media marketing across service and technology organizations. Currently working as IT Officer at IEC Group Nepal, handling IT support, website management, and digital marketing.\n\nSkilled in maintaining websites, resolving technical issues, and planning digital campaigns, with a technical background in web technologies and strong client communication. Currently completing a Bachelor of Information Technology (BIT) alongside a completed Bachelor of Business Studies (BBS).",
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
      role: "IT Officer — Marketing & Website Handling",
      company: "IEC Group Nepal",
      website: "iecgroupnepal.com",
      duration: "January 2026 – Present",
      responsibilities: [
        "Handle IT support and day-to-day technical operations, managing the organization's website and digital marketing activities.",
        "Manage website updates and monitoring while planning and coordinating social media and digital marketing campaigns."
      ]
    },
    {
      role: "Marketing Officer",
      company: "Kreativemandu Technologies Pvt. Ltd.",
      website: "https://www.kreativemandu.com/",
      location: "Kathmandu",
      duration: "Until December 2025",
      responsibilities: [
        "Managed digital marketing activities and online brand promotion, planning and coordinating social media campaigns.",
        "Supported website-related activities, SEO, and online visibility, communicating with clients on digital marketing needs."
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
      badge: "Featured Live"
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
      title: "IEC Group Digital Portal",
      subtitle: "Corporate Website & Campaign Hub",
      description: "Managing website updates, IT operations, and coordinated digital marketing campaigns for IEC Group Nepal.",
      tech: ["CMS", "Web Administration", "SEO", "Google Workspace", "Meta Ads"],
      link: "https://iecgroupnepal.com",
      category: "business",
      featured: true,
      badge: "Active Employer"
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
      title: "IT Support & Technical Operations",
      description: "Comprehensive IT support, computer troubleshooting, software installation and configuration, network troubleshooting, and digital file management."
    },
    {
      title: "Website Administration & Maintenance",
      description: "End-to-end website management, regular content updates, continuous monitoring, performance troubleshooting, and CMS administration."
    },
    {
      title: "Website Management & Development",
      description: "Building, maintaining, and enhancing responsive websites and web applications using HTML, CSS, JavaScript, React.js, Python, and Django."
    },
    {
      title: "Social Media Marketing & Management",
      description: "Planning and coordinating multi-platform social media campaigns, content strategy, brand promotion, and active audience engagement."
    },
    {
      title: "SEO & Online Brand Promotion",
      description: "Optimizing website SEO, improving search engine rankings, increasing digital visibility, and executing online brand growth initiatives."
    },
    {
      title: "Lead Generation & Campaign Management",
      description: "Formulating high-converting digital marketing campaigns, target audience segmentation, and lead generation pipelines for business growth."
    }
  ],
  achievements: [
    "Currently IT Officer at IEC Group Nepal handling IT support, website management, and digital marketing",
    "Successfully managed digital marketing, SEO, and brand promotion at Kreativemandu Technologies",
    "Maintained IT operations, website, and social media campaigns at Sharon Manpower Service",
    "Managed website content, social channels, and digital records at Frontline Requirement",
    "Completed Bachelor of Information Technology (BIT) alongside completed Bachelor of Business Studies (BBS)",
    "Extensive experience in web technologies (HTML, CSS, JS, Python, Django, React.js, MySQL, PostgreSQL)"
  ],
  whyHireMe: [
    {
      title: "IT Operations & Technical Support",
      desc: "Proven track record in IT operations, computer/network troubleshooting, software installation, and seamless technical administration.",
      icon: "Code"
    },
    {
      title: "Website Management & Development",
      desc: "Experienced in managing websites, CMS administration, and hands-on development using React.js, Python, and Django.",
      icon: "TrendingUp"
    },
    {
      title: "Digital Marketing & Brand Growth",
      desc: "Skilled in social media management, SEO optimization, online brand promotion, and campaign lead generation.",
      icon: "DollarSign"
    },
    {
      title: "Dual Technical & Business Education",
      desc: "Unique blend of technical information technology acumen (BIT Graduate) and business management principles (BBS Graduate).",
      icon: "MessageSquare"
    }
  ]
};
