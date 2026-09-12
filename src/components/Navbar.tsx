import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-slate-100 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo - Clean, Modern Tech Signature */}
        <a href="#hero" className="flex items-center space-x-2.5 group">
          <div className="w-8.5 h-8.5 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-emerald-500 text-white flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:shadow-md group-hover:shadow-emerald-500/25 transition-all duration-300">
            <Code2 size={18} className="text-white group-hover:rotate-6 transition-transform" />
          </div>
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
            Om Prakash Sharma<span className="text-emerald-500">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-9">
          <ul className="flex space-x-8 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-slate-900 transition-colors py-1 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </a>
              </li>
            ))}
          </ul>
          
          <a
            href="#contact"
            className="flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-slate-900 text-white hover:bg-emerald-600 transition-all duration-300 text-sm font-semibold shadow-xs hover:shadow-md hover:shadow-emerald-600/20 active:scale-95"
          >
            <span>Hire Me</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-700 hover:text-slate-900 transition-colors p-2 rounded-lg hover:bg-slate-100"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[65px] bottom-0 w-full bg-white/98 backdrop-blur-xl border-t border-slate-100 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full px-8 py-8 justify-between">
          <ul className="space-y-4 text-lg font-bold text-slate-800">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-emerald-600 transition-colors py-2 border-b border-slate-50"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="space-y-3 pb-16">
            <a
              href={portfolioData.personalInfo.resumeUrl}
              className="flex justify-center items-center w-full py-3.5 rounded-full border border-slate-200 hover:border-slate-300 text-sm font-bold text-slate-700 transition-all bg-slate-50"
            >
              Download CV
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex justify-center items-center w-full py-3.5 rounded-full bg-slate-900 hover:bg-emerald-600 text-sm font-bold text-white transition-all shadow-sm"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
