import { motion } from 'framer-motion';
import { User, Briefcase, Award, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

export default function About() {
  const { bioDetailed } = portfolioData.personalInfo;

  // Split bio by newlines for better paragraph rendering
  const paragraphs = bioDetailed.split('\n\n');

  const stats = [
    { label: 'Websites Launched', value: '10+', icon: Award, color: 'text-brand-cyan' },
    { label: 'Years Accounting', value: '1+', icon: Briefcase, color: 'text-brand-blue' },
    { label: 'CMO Leadership', value: 'Active', icon: User, color: 'text-brand-purple' },
    { label: 'BIT Semester', value: '8th', icon: GraduationCap, color: 'text-brand-cyan' }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-radial-bottom">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Profile / Cards */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden glass p-3 group">
              {/* Profile Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 via-brand-purple/20 to-brand-cyan/20 opacity-60 group-hover:opacity-80 transition-opacity"></div>
              
              {/* Profile Image */}
              <div className="w-full h-full rounded-xl bg-zinc-900 border border-zinc-800 relative overflow-hidden flex flex-col items-center justify-center">
                <img 
                  src={profileImg} 
                  alt="Om Prakash Sharma" 
                  className="w-full h-full object-cover rounded-xl filter contrast-105 hover:scale-105 transition-all duration-500" 
                />
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2.5 mt-8 justify-center max-w-sm">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-zinc-900/60 text-zinc-300 border border-zinc-800/80">
                💻 Python Developer
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-zinc-900/60 text-zinc-300 border border-zinc-800/80">
                📈 Digital Marketer
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-zinc-900/60 text-zinc-300 border border-zinc-800/80">
                📊 Accounting Expert
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-zinc-900/60 text-zinc-300 border border-zinc-800/80">
                🤝 Chief Marketing Officer
              </span>
            </div>
          </div>

          {/* Right Column: Bio Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-6 bg-brand-blue rounded-full mr-3"></span>
              A Unique Multi-Disciplinary Professional
            </h3>
            
            <div className="space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed">
              {paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="p-4 rounded-xl glass border-zinc-800/50 text-center hover:border-zinc-700 transition-colors"
                  >
                    <div className={`mx-auto w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-2 ${stat.color}`}>
                      <Icon size={18} />
                    </div>
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-zinc-500 text-xs font-medium mt-1">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
