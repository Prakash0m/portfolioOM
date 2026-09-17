import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

export default function Footer() {
  const { name } = portfolioData.personalInfo;
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white/80 backdrop-blur-md border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Logo & copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="#hero" className="flex items-center space-x-3 mb-2.5 group">
            <div className="relative w-8 h-8 rounded-full p-0.5 bg-gradient-to-tr from-emerald-500 via-teal-400 to-blue-500 flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform">
              <img
                src={profileImg}
                alt="Om Prakash Sharma"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-base tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors flex items-center">
                Om Prakash Sharma<span className="text-emerald-500 ml-0.5">.</span>
              </span>
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                Chief Marketing Officer & Tech Specialist
              </span>
            </div>
          </a>
          <p className="text-slate-500 text-xs font-medium">
            &copy; {currentYear} {name}. Designed & Built in Nepal.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-6 text-xs font-semibold text-slate-500">
          <a href="#about" className="hover:text-emerald-600 transition-colors">About</a>
          <a href="#skills" className="hover:text-emerald-600 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-emerald-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
        </div>

        {/* Back to top button */}
        <button
          onClick={handleScrollTop}
          className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 text-slate-600 hover:text-emerald-600 transition-all flex items-center justify-center cursor-pointer shadow-2xs active:scale-95"
          aria-label="Back to Top"
        >
          <ArrowUp size={16} />
        </button>

      </div>
    </footer>
  );
}
