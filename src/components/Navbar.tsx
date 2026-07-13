import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo / Name */}
        <a href="#hero" className="flex items-center space-x-2 group">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-blue to-brand-purple flex items-center justify-center font-bold text-white text-sm group-hover:scale-105 transition-transform">
            OS
          </span>
          <span className="font-semibold text-lg tracking-wider text-white group-hover:text-brand-cyan transition-colors">
            {portfolioData.personalInfo.name}
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-8 text-sm font-medium text-zinc-400">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors py-2 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-cyan group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan text-sm font-medium text-white hover:brightness-110 transition-all shadow-md shadow-brand-blue/10"
          >
            <span>Hire Me</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-zinc-400 hover:text-white transition-colors p-1"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[72px] bottom-0 w-full bg-zinc-950/98 backdrop-blur-xl border-t border-zinc-800 transition-all duration-300 ease-in-out transform ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="flex flex-col h-full px-8 py-12 justify-between">
          <ul className="space-y-6 text-xl font-medium text-zinc-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-white transition-colors py-2"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="space-y-6 pb-20">
            <a
              href={portfolioData.personalInfo.resumeUrl}
              className="flex justify-center items-center w-full py-3.5 rounded-xl border border-zinc-800 hover:border-zinc-700 text-base font-semibold text-white transition-all bg-zinc-900/50"
            >
              Download CV
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex justify-center items-center w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan text-base font-semibold text-white transition-all"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
