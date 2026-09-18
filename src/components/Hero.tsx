import { useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Send, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import omDigitalCutout from '../assets/om_digital_cutout.png';

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845a1.21 1.21 0 100-2.42 1.21 1.21 0 000 2.42z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 32 32" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.268 2 2 8.268 2 16c0 2.68.756 5.244 2.188 7.468L2.05 30l6.772-1.776A13.935 13.935 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#25D366"/>
    <path d="M22.844 19.344c-.313-.156-1.844-.906-2.125-1.016-.281-.109-.484-.156-.688.156-.203.313-.797 1.016-.984 1.219-.188.203-.359.234-.672.078-.313-.156-1.328-.484-2.531-1.563-.938-.828-1.578-1.859-1.766-2.172-.188-.313-.016-.484.141-.641.141-.141.313-.359.469-.547.156-.188.203-.313.313-.516.109-.203.047-.391-.031-.547-.078-.156-.688-1.656-.938-2.281-.25-.609-.5-.531-.688-.531h-.594c-.203 0-.547.078-.828.391-.281.313-1.094 1.063-1.094 2.609 0 1.547 1.125 3.031 1.281 3.25.156.219 2.203 3.375 5.344 4.734.75.328 1.328.516 1.781.672.75.234 1.437.203 1.984.125.609-.094 1.844-.75 2.109-1.484.266-.734.266-1.359.188-1.484-.078-.125-.281-.203-.594-.359z" fill="#fff"/>
  </svg>
);

interface TitleConfig {
  text: string;
  themeColor: string;
  themeGradient: string;
}

const TITLES: TitleConfig[] = [
  {
    text: "IT Officer & Web Specialist",
    themeColor: "#059669",
    themeGradient: "from-emerald-600 to-teal-500",
  },
  {
    text: "Web Developer (React & Python)",
    themeColor: "#0d9488",
    themeGradient: "from-teal-600 to-emerald-500",
  },
  {
    text: "Digital Marketing Specialist",
    themeColor: "#2563eb",
    themeGradient: "from-blue-600 to-cyan-500",
  },
  {
    text: "Chief Marketing Officer",
    themeColor: "#4f46e5",
    themeGradient: "from-indigo-600 to-blue-500",
  },
];

interface MetricItem {
  metric: string;
  label: string;
  sub: string;
  themeColor: string;
  themeBg: string;
  themeBorder: string;
  themeGradient: string;
  frames: string[];
  hasLivePulse?: boolean;
}

const METRICS_DATA: MetricItem[] = [
  {
    metric: '10+',
    label: 'Shipped Websites',
    sub: 'Production Ready',
    themeColor: '#059669', // Emerald
    themeBg: 'rgba(236, 253, 245, 0.75)',
    themeBorder: 'rgba(167, 243, 208, 0.95)',
    themeGradient: 'from-emerald-400 to-teal-500',
    frames: ['2+', '5+', '8+', '10+']
  },
  {
    metric: 'Completed',
    label: 'BIT/BBS Graduate',
    sub: 'Lincoln/ TU',
    themeColor: '#2563eb', // Royal Blue
    themeBg: 'rgba(239, 246, 255, 0.75)',
    themeBorder: 'rgba(191, 219, 254, 0.95)',
    themeGradient: 'from-blue-400 to-indigo-500',
    frames: ['Study', 'Project', 'Defense', 'Completed']
  },
  {
    metric: 'Active',
    label: 'Chief Marketing Officer',
    sub: 'Kreativemandu Tech',
    themeColor: '#059669', // Emerald with live pulse
    themeBg: 'rgba(236, 253, 245, 0.85)',
    themeBorder: 'rgba(110, 231, 183, 1)',
    themeGradient: 'from-emerald-400 to-emerald-600',
    frames: ['Sync...', 'Live', 'Ready', 'Active'],
    hasLivePulse: true
  },
  {
    metric: '1+ Years',
    label: 'Accounting & ERP',
    sub: 'Finance & Systems',
    themeColor: '#0d9488', // Teal
    themeBg: 'rgba(240, 253, 250, 0.75)',
    themeBorder: 'rgba(153, 246, 228, 0.95)',
    themeGradient: 'from-teal-400 to-cyan-500',
    frames: ['0.2+', '0.5+', '0.8+', '1+ Years']
  }
];

function MetricCard({ item, idx }: { item: MetricItem; idx: number }) {
  const [displayText, setDisplayText] = useState(item.frames[0] || item.metric);
  const [isAnimating, setIsAnimating] = useState(true);

  const startFastAnimation = useCallback(() => {
    setIsAnimating(true);
    let step = 0;
    const interval = setInterval(() => {
      if (step < item.frames.length) {
        setDisplayText(item.frames[step]);
        step++;
      } else {
        setDisplayText(item.metric);
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 110);
  }, [item.frames, item.metric]);

  useEffect(() => {
    const timer = setTimeout(() => {
      startFastAnimation();
    }, idx * 120 + 250);
    return () => clearTimeout(timer);
  }, [idx, startFastAnimation]);

  const runningTextColors = ['#f97316', '#ec4899', '#8b5cf6', '#06b6d4', item.themeColor];
  const runningBorders = [
    'rgba(249, 115, 22, 0.85)',
    'rgba(236, 72, 153, 0.85)',
    'rgba(139, 92, 246, 0.85)',
    'rgba(6, 182, 212, 0.85)',
    item.themeBorder
  ];
  const runningBgs = [
    'rgba(255, 247, 237, 0.8)',
    'rgba(253, 242, 248, 0.8)',
    'rgba(245, 243, 255, 0.8)',
    'rgba(236, 254, 255, 0.8)',
    item.themeBg
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      animate={
        isAnimating
          ? {
            borderColor: runningBorders,
            backgroundColor: runningBgs,
          }
          : {
            borderColor: item.themeBorder,
            backgroundColor: item.themeBg,
          }
      }
      onMouseEnter={() => {
        if (!isAnimating) startFastAnimation();
      }}
      whileHover={{
        scale: 1.03,
        y: -3,
        boxShadow: '0 12px 28px -6px rgba(0, 0, 0, 0.08)',
        transition: { duration: 0.2 }
      }}
      className="p-5 rounded-2xl border text-center relative overflow-hidden transition-all shadow-xs cursor-pointer group"
      style={{
        borderColor: item.themeBorder,
        backgroundColor: item.themeBg
      }}
    >
      {/* Top Accent Gradient Line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.themeGradient}`} />

      {/* Main Metric Text with Fast Color Cycling while running, stops on theme color */}
      <motion.div
        animate={
          isAnimating
            ? {
              color: runningTextColors,
              scale: [0.94, 1.1, 0.98, 1.05, 1],
            }
            : {
              color: item.themeColor,
              scale: 1,
            }
        }
        transition={{ duration: 0.55, ease: 'easeInOut' }}
        className="text-2xl sm:text-3xl font-extrabold flex items-center justify-center tracking-tight min-h-[36px]"
        style={{ color: item.themeColor }}
      >
        {item.hasLivePulse && !isAnimating && (
          <span className="relative flex h-2.5 w-2.5 mr-2 -ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)]"></span>
          </span>
        )}
        <span>{displayText}</span>
      </motion.div>

      {/* Label and Subtitle */}
      <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
        {item.label}
      </div>
      <div className="text-[11px] text-slate-500 font-semibold mt-0.5">
        {item.sub}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const { resumeUrl, socials } = portfolioData.personalInfo;

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 90;
  const deletingSpeed = 45;
  const pauseDuration = 2000;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const currentFullText = TITLES[currentTitleIndex].text;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) => currentFullText.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && displayedText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % TITLES.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex]);

  // Interactive 3D mouse parallax tracking for portrait
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 220 };
  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-6, 6]), springConfig);
  const parallaxX = useSpring(useTransform(mouseX, [-200, 200], [-7, 7]), springConfig);
  const parallaxY = useSpring(useTransform(mouseY, [-200, 200], [-5, 5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-white">
      {/* Soft background ambient blurs */}
      <div className="absolute top-12 right-10 w-[500px] h-[500px] bg-emerald-50/70 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left Column: Typography and Action Buttons matching reference style */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start z-10">

            {/* Status Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-xs font-bold text-emerald-800 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4"></span>
              <span>Available for CMO, Digital Growth & Tech Roles</span>
            </div>

            {/* Main Greeting - Primary H1 for Personal Brand SEO */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-4">
              Hello,<br />
              <span>I'm </span>
              <span className="text-slate-900">Om Prakash Sharma</span>
            </h1>

            {/* Highlighted Role with colorful running animation and theme stopping */}
            <div className="min-h-[56px] flex items-center mb-6">
              <div className="inline-block relative">
                <motion.span
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight inline-block min-h-[36px]"
                  animate={
                    !isDeleting && displayedText === TITLES[currentTitleIndex].text
                      ? {
                        color: TITLES[currentTitleIndex].themeColor,
                      }
                      : {
                        color: ['#f97316', '#ec4899', '#8b5cf6', '#06b6d4', TITLES[currentTitleIndex].themeColor],
                      }
                  }
                  transition={
                    !isDeleting && displayedText === TITLES[currentTitleIndex].text
                      ? { duration: 0.3 }
                      : { duration: 0.65, repeat: Infinity, ease: 'linear' }
                  }
                >
                  {displayedText}
                </motion.span>
                <span
                  className="inline-block w-0.5 h-6 md:h-7 ml-1 animate-pulse align-middle"
                  style={{ backgroundColor: TITLES[currentTitleIndex].themeColor }}
                ></span>

                {/* Dynamic Underline that expands in the theme color when settled */}
                <motion.div
                  className={`h-1 rounded-full bg-gradient-to-r ${TITLES[currentTitleIndex].themeGradient} mt-1`}
                  animate={{
                    width: !isDeleting && displayedText === TITLES[currentTitleIndex].text ? '100%' : '35%',
                    opacity: !isDeleting && displayedText === TITLES[currentTitleIndex].text ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl mb-9">
              {portfolioData.personalInfo.bioDetailed}
            </p>

            {/* Actions: Pill CTA Button & Download CV */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2.5 px-8 py-3.5 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-emerald-600 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-emerald-600/20 group active:scale-95"
              >
                <span>Message</span>
                <Send size={15} className="text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={resumeUrl}
                download="Om_Prakash_Sharma_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:border-slate-400 hover:text-slate-900 transition-all shadow-xs active:scale-95"
              >
                <Download size={16} className="text-blue-600" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {['Full Stack Python', 'Django', 'React.js', 'Digital Marketing', 'SEO & Meta Ads', 'IT Operations', 'IT Support'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200/70 text-slate-700 text-xs font-semibold hover:border-emerald-300 hover:bg-emerald-50/60 hover:text-emerald-800 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Social Icons row matching reference */}
            <div className="flex items-center space-x-3 pt-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2">Follow:</span>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-white hover:bg-slate-900 hover:border-slate-900 transition-all shadow-2xs"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-2xs"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-2xs"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-white hover:bg-pink-600 hover:border-pink-600 transition-all shadow-2xs"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all shadow-2xs"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>

          </div>

          {/* Right Column: High-Impact Prominent Circular Portrait with Interactive Depth Chips */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-center xl:justify-end items-center py-6 pr-2 sm:pr-6 xl:pr-10">

            {/* Decorative Dot Matrix Patterns scaled for larger circle */}
            <div className="absolute top-0 left-4 sm:left-10 lg:left-2 w-36 h-36 dot-pattern opacity-60 z-0 pointer-events-none"></div>
            <div className="absolute -bottom-6 right-2 sm:right-6 lg:-right-4 w-40 h-40 dot-pattern-blue opacity-40 z-0 pointer-events-none"></div>

            {/* Circular Composition Wrapper with 3D perspective and mouse tracking */}
            <motion.div
              className="relative z-10 cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >

              {/* Outer Glowing Gradient Ring with gentle breathing pulse */}
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-tr from-emerald-400/25 via-teal-300/20 to-blue-400/25 blur-lg pointer-events-none"
                animate={{
                  scale: [1, 1.06, 1],
                  opacity: [0.65, 0.95, 0.65],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Rotating Accent Ring */}
              <div className="absolute -inset-2 rounded-full border-2 border-dashed border-emerald-400/40 pointer-events-none animate-[spin_45s_linear_infinite]" />

              {/* Floating Top-Left Tech Badge */}
              <div className="hidden sm:flex absolute -top-4 -left-6 p-2.5 px-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl items-center gap-2.5 z-30 animate-float">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                  <span className="text-sm">💻</span>
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Full Stack</div>
                  <div className="text-xs font-extrabold text-slate-900">Python • Django • React</div>
                </div>
              </div>

              {/* Floating Right Growth Badge - Digital Marketing Specialist with colorful run & theme stop */}
              <motion.div
                className="hidden sm:flex absolute top-6 sm:top-8 lg:top-10 -right-4 sm:-right-6 lg:-right-8 p-2.5 px-4 rounded-2xl bg-white/95 backdrop-blur-md border shadow-xl items-center gap-2.5 z-30 cursor-pointer"
                style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '2.5s' }}
                initial={{ borderColor: 'rgba(226, 232, 240, 0.9)' }}
                animate={{
                  borderColor: [
                    'rgba(249, 115, 22, 0.8)',
                    'rgba(236, 72, 153, 0.8)',
                    'rgba(139, 92, 246, 0.8)',
                    'rgba(6, 182, 212, 0.8)',
                    'rgba(147, 197, 253, 0.95)'
                  ]
                }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                whileHover={{
                  scale: 1.05,
                  borderColor: [
                    'rgba(249, 115, 22, 0.8)',
                    'rgba(236, 72, 153, 0.8)',
                    'rgba(139, 92, 246, 0.8)',
                    'rgba(6, 182, 212, 0.8)',
                    'rgba(147, 197, 253, 0.95)'
                  ],
                  transition: { duration: 0.7 }
                }}
              >
                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  <span className="text-sm">📈</span>
                </div>
                <div className="text-left">
                  <motion.div
                    className="text-[10px] font-bold uppercase tracking-wider"
                    initial={{ color: '#64748b' }}
                    animate={{
                      color: ['#f97316', '#ec4899', '#8b5cf6', '#06b6d4', '#2563eb']
                    }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  >
                    Digital Marketing Specialist
                  </motion.div>
                  <div className="text-xs font-extrabold text-slate-900">SEO • Meta Ads • Growth</div>
                </div>
              </motion.div>

              {/* Prominent Large Circular Frame with 3D Tilt and Spring Physics */}
              <motion.div
                style={{ rotateX, rotateY, transformPerspective: 1000 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[460px] md:h-[460px] lg:w-[490px] lg:h-[490px] xl:w-[520px] xl:h-[520px] rounded-full overflow-hidden border-2 border-emerald-400/30 shadow-[0_20px_50px_-10px_rgba(16,185,129,0.22),0_10px_30px_-5px_rgba(37,99,235,0.15)] bg-gradient-to-tr from-emerald-200/80 via-teal-50/90 to-blue-200/80 flex items-end justify-center group"
              >

                {/* Studio Ambient Backlight Glow pulsing smoothly behind portrait */}
                <motion.div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.65)_0%,rgba(52,211,153,0.25)_45%,transparent_70%)] pointer-events-none z-0"
                  animate={{
                    scale: [1, 1.12, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Shimmer / Glint Light Sweep across the circular glass frame */}
                <motion.div
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none z-20"
                  animate={{
                    x: ['-140%', '160%'],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    repeatDelay: 3.5,
                    ease: "easeInOut",
                  }}
                  style={{ transform: 'skewX(-25deg)' }}
                />

                {/* Portrait Cutout with Organic Breathing/Floating & Mouse Parallax */}
                <motion.img
                  src={omDigitalCutout}
                  alt="Om Prakash Sharma - IT Officer, Web Developer and Digital Marketing Professional in Nepal"
                  style={{ x: parallaxX, y: parallaxY }}
                  animate={{
                    y: [0, -7, 0],
                    scale: [1, 1.016, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-full h-full object-contain object-bottom filter contrast-[1.03] brightness-[1.02] drop-shadow-[0_16px_32px_rgba(15,23,42,0.18)] select-none z-10 pointer-events-none"
                />
              </motion.div>

              {/* Floating Experience Badge with emerald tinted border */}
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-max max-w-[92%] px-5 py-3 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-200/80 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.1)] flex items-center justify-between gap-5 z-20">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Chief Marketing Officer (CMO)</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">Kreativemandu Technologies</div>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                  Present
                </span>
              </div>

            </motion.div>

          </div>

        </div>

        {/* Advanced Key Metrics Bento Ribbon with fast running color animation & theme resting */}
        <div className="mt-16 pt-8 border-t border-slate-200/60 grid grid-cols-2 md:grid-cols-4 gap-6">
          {METRICS_DATA.map((item, idx) => (
            <MetricCard key={item.label} item={item} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
