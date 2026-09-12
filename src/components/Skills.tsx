import { motion } from 'framer-motion';
import { Code, Server, Layout, Database, Wrench, Megaphone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Map icon strings to Lucide components with clean emerald & blue tints
const getIcon = (categoryName: string) => {
  const c = categoryName.toLowerCase();
  if (c.includes('programming')) {
    return <Code className="text-emerald-600" size={22} />;
  } else if (c.includes('backend') || c.includes('python')) {
    return <Server className="text-blue-600" size={22} />;
  } else if (c.includes('frontend') || c.includes('react')) {
    return <Layout className="text-emerald-600" size={22} />;
  } else if (c.includes('database')) {
    return <Database className="text-blue-600" size={22} />;
  } else if (c.includes('it') || c.includes('support')) {
    return <Wrench className="text-emerald-600" size={22} />;
  } else if (c.includes('marketing') || c.includes('growth')) {
    return <Megaphone className="text-blue-600" size={22} />;
  } else if (c.includes('tools') || c.includes('platforms')) {
    return <Server className="text-emerald-600" size={22} />;
  }
  return <Code className="text-emerald-600" size={22} />;
};

const getIconBg = (categoryName: string) => {
  const c = categoryName.toLowerCase();
  const isBlue = c.includes('backend') || c.includes('database') || c.includes('marketing');
  return isBlue ? 'bg-blue-50 border-blue-100' : 'bg-emerald-50 border-emerald-100';
};

export default function Skills() {
  const { skills, professionalSkills } = portfolioData;

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white/60">
      {/* Decorative dot matrix and ambient glows */}
      <div className="absolute top-10 right-8 w-36 h-36 dot-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-12 left-8 w-40 h-40 dot-pattern-slate opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-50/70 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header matching reference typography */}
        <div className="text-left md:text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-600 block mb-2">
            Technical & Professional Skills
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Skills & Competencies
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full md:mx-auto mt-4"></div>
        </div>

        {/* Skills Grid - Clean White Cards with soft subtle borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
          {skills.map((category, catIdx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.05, duration: 0.5 }}
              className="p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_-4px_rgba(16,185,129,0.1)] hover:border-emerald-200/80 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3.5 mb-5 pb-3.5 border-b border-slate-100">
                <div className={`p-2.5 rounded-xl border flex items-center justify-center group-hover:scale-105 transition-transform ${getIconBg(category.name)}`}>
                  {getIcon(category.name)}
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">{category.name}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3.5 flex-grow">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group/item">
                    {/* Skill Info */}
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span className="text-slate-700 font-semibold group-hover/item:text-emerald-700 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-slate-400 font-bold text-[11px]">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 + catIdx * 0.04, duration: 0.7, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Skills / Workplace Competencies from CV */}
        <div className="p-8 rounded-3xl bg-slate-50/80 border border-slate-200/80 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                Core Competencies
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Professional & Interpersonal Skills
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Grounded in teamwork, client communication & adaptability
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {professionalSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-xl bg-white border border-slate-200/80 text-slate-800 text-xs sm:text-sm font-semibold shadow-2xs hover:border-emerald-300 hover:text-emerald-700 transition-all cursor-default"
              >
                ✓ {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
