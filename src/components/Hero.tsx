import { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { name, titles, bioSummary, resumeUrl } = portfolioData.personalInfo;
  
  // Custom typing effect logic
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 2000;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const currentFullText = titles[currentTitleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) => currentFullText.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    // Handle state transitions
    if (!isDeleting && displayedText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex, titles]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-radial-ambient">
      {/* Decorative backdrop elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center z-10 flex flex-col items-center">
        {/* Intro Badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass border-zinc-800 text-xs font-semibold text-brand-cyan tracking-wider uppercase mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
          <span>Available for Projects</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-4">
          {name}
        </h1>

        {/* Dynamic Typing Title */}
        <div className="h-12 md:h-16 flex items-center justify-center mb-6">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gradient">
            {displayedText}
            <span className="inline-block w-1.5 h-8 md:h-12 ml-1 bg-brand-cyan animate-pulse">|</span>
          </h2>
        </div>

        {/* Summary Description */}
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          {bioSummary}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <a
            href="#contact"
            className="flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan text-base font-bold text-white shadow-lg shadow-brand-purple/20 hover:brightness-110 hover:shadow-brand-purple/35 hover:-translate-y-0.5 transition-all w-full sm:w-auto"
          >
            <span>Hire Me</span>
            <ArrowRight size={18} />
          </a>

          <a
            href={resumeUrl}
            className="flex items-center justify-center space-x-2 px-8 py-4 rounded-xl glass border-zinc-800 text-base font-bold text-white hover:bg-zinc-900/50 hover:border-zinc-700 hover:-translate-y-0.5 transition-all w-full sm:w-auto"
          >
            <Download size={18} className="text-brand-blue" />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            className="flex items-center justify-center space-x-2 px-6 py-4 text-base font-semibold text-zinc-400 hover:text-white transition-all w-full sm:w-auto sm:hidden"
          >
            <Mail size={18} />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-zinc-500 tracking-widest uppercase">Scroll Down</span>
          <div className="w-6 h-10 rounded-full border-2 border-zinc-700 flex justify-center p-1">
            <div className="w-1.5 h-2.5 bg-brand-cyan rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
