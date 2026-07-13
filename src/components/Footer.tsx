import { ArrowUp, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { name } = portfolioData.personalInfo;
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Logo & copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center space-x-2 mb-2.5">
            <span className="w-6 h-6 rounded bg-gradient-to-tr from-brand-blue to-brand-purple flex items-center justify-center font-bold text-white text-xs">
              OS
            </span>
            <span className="font-semibold text-sm tracking-wider text-white">
              {name}
            </span>
          </div>
          <p className="text-zinc-500 text-xs font-medium">
            &copy; {currentYear} Om Prakash Sharma. All rights reserved.
          </p>
        </div>

        {/* Made with Love tag */}
        <div className="flex items-center text-zinc-500 text-xs font-medium space-x-1 order-3 md:order-2">
          <span>Made with</span>
          <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" />
          <span>in Nepal</span>
        </div>

        {/* Back to top button */}
        <button
          onClick={handleScrollTop}
          className="p-3 rounded-xl glass hover:border-zinc-700 hover:text-brand-cyan text-zinc-400 transition-colors flex items-center justify-center cursor-pointer order-2 md:order-3"
          aria-label="Back to Top"
        >
          <ArrowUp size={16} />
        </button>

      </div>
    </footer>
  );
}
