import { motion } from 'framer-motion';
import { Code, TrendingUp, DollarSign, MessageSquare, Award, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Map icon name to Lucide components
const getHireIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code':
      return <Code className="text-brand-blue" size={20} />;
    case 'TrendingUp':
      return <TrendingUp className="text-brand-purple" size={20} />;
    case 'DollarSign':
      return <DollarSign className="text-brand-cyan" size={20} />;
    case 'MessageSquare':
      return <MessageSquare className="text-brand-blue" size={20} />;
    default:
      return <Code className="text-brand-blue" size={20} />;
  }
};

export default function WhyHireMe() {
  const { whyHireMe, achievements } = portfolioData;

  return (
    <section id="why-hire-me" className="py-24 relative overflow-hidden bg-zinc-950">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Value Proposition & Achievements</h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
            What makes me unique is the intersection of deep software development skills, real business leadership, and financial logic.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Why Hire Me Cards */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="w-2 h-6 bg-brand-cyan rounded-full mr-3"></span>
              Why Hire Me?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyHireMe.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  className="p-5 rounded-xl glass hover:border-zinc-800 transition-colors flex flex-col h-full"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                      {getHireIcon(item.icon)}
                    </div>
                    <h4 className="text-base font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements & Proof points */}
          <div className="lg:col-span-5">
            <div className="p-6 md:p-8 rounded-2xl glass-premium relative overflow-hidden">
              {/* Background ambient gradient */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/15 rounded-full blur-2xl"></div>
              
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center relative z-10">
                <span className="w-2 h-6 bg-brand-purple rounded-full mr-3"></span>
                Key Achievements
              </h3>

              <div className="space-y-4 relative z-10">
                {achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06, duration: 0.4 }}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-zinc-900/30 border border-zinc-900/50 hover:border-zinc-800 transition-all"
                  >
                    <CheckCircle size={18} className="text-brand-cyan mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300 text-sm md:text-base font-medium">
                      {achievement}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              {/* Medal award decoration */}
              <div className="absolute -bottom-6 -right-6 text-brand-purple/10 transform rotate-12">
                <Award size={120} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
