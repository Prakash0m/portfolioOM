export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  category: 'react' | 'django' | 'fullstack' | 'business' | 'other';
}

export interface Experience {
  role: string;
  company: string;
  location?: string;
  duration: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location?: string;
  duration: string;
  status?: string;
  details?: string;
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[]; // level out of 100 for visual indicators
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
  projects: Project[];
  services: { title: string; description: string }[];
  achievements: string[];
  whyHireMe: { title: string; desc: string; icon: string }[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "OM PRAKASH SHARMA",
    titles: [
      "Full Stack Python Developer",
      "Software Engineer",
      "Chief Marketing Officer"
    ],
    bioSummary: "Building Modern Web Applications with Python, Django, React & AI.",
    bioDetailed: "I am Om Prakash Sharma, a passionate Full Stack Python Developer and Software Engineer from Nepal with strong expertise in Python, Django, Django REST Framework, React.js, JavaScript, HTML, CSS, Tailwind CSS, MySQL, PostgreSQL, REST APIs, and modern web technologies.\n\nAlongside software development, I have practical experience in accounting, digital marketing, business development, and leadership. Currently, I am working as the Chief Marketing Officer (CMO) at Kreativemandu Technologies, where I lead marketing strategies, branding, and business growth initiatives.\n\nMy goal is to build scalable software solutions, contribute to innovative technology companies, and continuously expand my expertise in software engineering and AI-driven applications.",
    location: "Lokanthali, Bhaktapur, Nepal",
    phone: "+977-9808677897",
    email: "omprakash099507@gmail.com",
    whatsapp: "+9779808677897",
    resumeUrl: "/resume.pdf", // Point directly to the copied PDF file
    socials: {
      github: "https://github.com/Prakash0m",
      linkedin: "https://linkedin.com",
      facebook: "https://www.facebook.com/sharmaprakashom",
      instagram: "https://instagram.com",
      whatsapp: "https://wa.me/9779808677897"
    }
  },
  education: [
    {
      degree: "Bachelor of Information Technology (BIT)",
      institution: "Texas College of Management & IT",
      location: "Kathmandu, Nepal (Affiliated with Lincoln University College, Malaysia)",
      duration: "2022 – November 2026 (Running)",
      status: "8th Semester Running (CGPA: 3.20 Expected)",
      details: "Expected Graduation: November 2026"
    },
    {
      degree: "Bachelor of Business Studies (BBS)",
      institution: "Danfe College, Putalisadak, Kathmandu",
      location: "Kathmandu, Nepal (Affiliated to Tribhuvan University (TU))",
      duration: "2020 – 2024",
      status: "Completed",
      details: "Completed"
    },
    {
      degree: "Intermediate (+2)",
      institution: "Sirjana E.B. Secondary School, Rajbiraj, Saptari",
      location: "Saptari, Nepal (National Examination Board)",
      duration: "Completed (2021)",
      status: "GPA: 2.69",
      details: "Major: Accountancy, Economics, Business Mathematics, Computer Science, and English"
    },
    {
      degree: "School Leaving Certificate (SLC)",
      institution: "Uday Jalpadevi Ma Vi Secondary School, Nuwakot",
      location: "Nuwakot, Nepal (National Examination Board)",
      duration: "Completed (2018)",
      status: "GPA: 2.15",
      details: "School Leaving Certificate (SEE)"
    }
  ],
  experience: [
    {
      role: "Chief Marketing Officer (CMO)",
      company: "Kreativemandu Technologies Pvt. Ltd.",
      duration: "Present",
      responsibilities: [
        "Marketing Strategy formulation and execution",
        "Business Development and client communication",
        "Digital branding and social media growth initiatives",
        "Website consultation and technical requirement mapping"
      ]
    },
    {
      role: "Full Stack Web Developer",
      company: "Frontline Recruitment",
      duration: "Contract",
      responsibilities: [
        "Designed and developed frontlinerecruitment.ai",
        "Frontend Development, Backend Development and UI/UX",
        "API integration and Database Design"
      ]
    },
    {
      role: "Python / Django Developer Intern",
      company: "Vacker360",
      duration: "3 Months",
      responsibilities: [
        "Django backend development and REST API creation",
        "Bug fixing and database management",
        "Team collaboration and version control"
      ]
    },
    {
      role: "Accounting Officer",
      company: "Sharon Manpower Service KTM",
      duration: "1+ Years",
      responsibilities: [
        "Financial record keeping and daily accounting",
        "Billing and inventory management",
        "Daily reporting to senior management"
      ]
    }
  ],
  skills: [
    {
      name: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML5 / CSS3", level: 90 },
        { name: "SQL", level: 80 },
        { name: "C++", level: 75 }
      ]
    },
    {
      name: "Backend Development",
      skills: [
        { name: "Django", level: 90 },
        { name: "Django REST Framework", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "Authentication (JWT/OAuth)", level: 80 }
      ]
    },
    {
      name: "Frontend Development",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 75 },
        { name: "Responsive UI/UX", level: 90 }
      ]
    },
    {
      name: "Database Systems",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "SQLite", level: 85 }
      ]
    },
    {
      name: "Tools & DevOps",
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "VS Code", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Vercel / Netlify", level: 80 },
        { name: "Figma / Canva", level: 75 }
      ]
    },
    {
      name: "Marketing & Business",
      skills: [
        { name: "SEO Optimization", level: 85 },
        { name: "Facebook Marketing / Meta Ads", level: 80 },
        { name: "Digital Branding", level: 85 },
        { name: "Lead Generation", level: 80 },
        { name: "Content Marketing", level: 75 }
      ]
    }
  ],
  projects: [
    {
      title: "Frontline Recruitment",
      subtitle: "AI Recruitment Platform",
      description: "An AI-powered recruitment platform designed to streamline hiring processes with interactive elements and REST APIs.",
      tech: ["React.js", "Python", "Django", "MySQL", "REST API"],
      link: "https://frontlinerecruitment.ai",
      category: "fullstack"
    },
    {
      title: "Ganpati Consultancy",
      subtitle: "Accounting Firm Website",
      description: "A fully responsive, professional website for an accounting consultancy firm, showcasing services and contact portal.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion"],
      category: "react"
    },
    {
      title: "Pharmacy Website",
      subtitle: "Business Website",
      description: "A business website tailored for a pharmacy, offering inventory viewing, business hours, and location mapping.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      category: "other"
    },
    {
      title: "E-Commerce Website",
      subtitle: "Full Stack Store",
      description: "An online marketplace featuring authentication, cart management, search filters, and an admin dashboard.",
      tech: ["Python", "Django", "React.js", "PostgreSQL"],
      category: "fullstack"
    },
    {
      title: "Weather Application",
      subtitle: "React Project",
      description: "A sleek dashboard fetching real-time weather analytics and forecasts based on location data.",
      tech: ["React.js", "Tailwind CSS", "Weather API"],
      category: "react"
    },
    {
      title: "Personal Portfolio",
      subtitle: "Interactive Showcase",
      description: "A premium, Apple-like portfolio displaying developer skills, work experience timeline, and digital marketing services.",
      tech: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"],
      category: "react"
    }
  ],
  services: [
    {
      title: "Website Development",
      description: "Building fast, premium, and SEO-friendly personal, business, and e-commerce websites."
    },
    {
      title: "ERP & Accounting Software",
      description: "Custom ERP and finance management systems built to simplify business accounting, billing, and inventory."
    },
    {
      title: "API Development & Integration",
      description: "Creating secure, scalable REST APIs using Django REST Framework and connecting external services."
    },
    {
      title: "Search Engine Optimization (SEO)",
      description: "Optimizing sites to rank higher on search engines, driving organic traffic, and improving visibility."
    },
    {
      title: "Digital Marketing & Branding",
      description: "Crafting comprehensive Meta ad campaigns, building social media growth, and personal branding strategies."
    },
    {
      title: "UI/UX & Graphic Design",
      description: "Creating premium wireframes in Figma and assets in Canva that visually wow target customers."
    }
  ],
  achievements: [
    "Successfully developed and launched multiple business websites",
    "Designed and engineered an AI-powered Recruitment Platform",
    "Led marketing campaigns resulting in business growth at Kreativemandu",
    "Over 1+ years managing accounts and financial structures at Sharon Manpower Service KTM",
    "Expertise in client relations and high-value technical consultancy",
    "Completed advanced Full Stack Development Training from Dursikshya"
  ],
  whyHireMe: [
    {
      title: "Full Stack Developer",
      desc: "Proficient in frontend (React) and backend (Django) with clean, maintainable code practices.",
      icon: "Code"
    },
    {
      title: "Marketing & Business Growth",
      desc: "CMO experience leading branding, Meta ads, SEO, and client acquisition strategies.",
      icon: "TrendingUp"
    },
    {
      title: "Financial & Accounting Knowledge",
      desc: "Practical understanding of billing, inventory, and ledger accounting, perfect for building ERPs.",
      icon: "DollarSign"
    },
    {
      title: "Problem Solver & Communicator",
      desc: "Able to bridge the gap between technical code and business requirements clearly.",
      icon: "MessageSquare"
    }
  ]
};
