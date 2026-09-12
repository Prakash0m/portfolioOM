import { motion } from 'framer-motion';
import { Code, TrendingUp, DollarSign, MessageSquare, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const getHireIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code':
      return <Code className="text-emerald-600" size={20} />;
    case 'TrendingUp':
      return <TrendingUp className="text-blue-600" size={20} />;
    case 'DollarSign':
      return <DollarSign className="text-emerald-600" size={20} />;
    case 'MessageSquare':
      return <MessageSquare className="text-blue-600" size={20} />;
    default:
      return <Code className="text-emerald-600" size={20} />;
  }
};

const getHireBg = (iconName: string) => {
  return ['TrendingUp', 'MessageSquare'].includes(iconName)
    ? 'bg-blue-50 border-blue-100'
    : 'bg-emerald-50 border-emerald-100';
};

export default function WhyHireMe() {
  const { whyHireMe, achievements } = portfolioData;

  return (
    <section id="why-hire-me" className="py-24 relative overflow-hidden bg-white/60">
      {/* Decorative ambient background */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-emerald-50/70 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left md:text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-600 block mb-2">
            Value Proposition
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Why Work With Me?
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full md:mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Why Hire Me Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {whyHireMe.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-emerald-200 transition-all flex flex-col h-full"
                >
                  <div className="flex items-center space-x-3.5 mb-3.5">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${getHireBg(item.icon)}`}>
                      {getHireIcon(item.icon)}
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements & Proof points */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 relative overflow-hidden shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-2 h-6 bg-emerald-500 rounded-full mr-3"></span>
                Key Milestones & Achievements
              </h3>

              <div className="space-y-3.5">
                {achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06, duration: 0.4 }}
                    className="flex items-start space-x-3 p-3.5 rounded-2xl bg-white border border-slate-200/60 shadow-2xs hover:border-emerald-200 transition-all"
                  >
                    <CheckCircle size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm font-semibold">
                      {achievement}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
