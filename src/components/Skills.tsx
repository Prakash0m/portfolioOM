import { motion } from 'framer-motion';
import { Code, Server, Layout, Database, Wrench, Megaphone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Map icon strings to Lucide components
const getIcon = (categoryName: string) => {
  switch (categoryName.toLowerCase()) {
    case 'programming languages':
      return <Code className="text-brand-blue" size={20} />;
    case 'backend development':
      return <Server className="text-brand-purple" size={20} />;
    case 'frontend development':
      return <Layout className="text-brand-cyan" size={20} />;
    case 'database systems':
      return <Database className="text-brand-blue" size={20} />;
    case 'tools & devops':
      return <Wrench className="text-brand-purple" size={20} />;
    case 'marketing & business':
      return <Megaphone className="text-brand-cyan" size={20} />;
    default:
      return <Code className="text-brand-blue" size={20} />;
  }
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-zinc-950">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Stack & Skills</h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
            A comprehensive overview of my technical capabilities spanning web development, systems engineering, and growth marketing.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan mx-auto rounded-full mt-4"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, catIdx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.05, duration: 0.5 }}
              className="p-6 rounded-2xl glass hover:border-zinc-700 transition-all duration-300 flex flex-col h-full hover:shadow-lg hover:shadow-brand-blue/5"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-zinc-900">
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  {getIcon(category.name)}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">{category.name}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5 flex-grow">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    {/* Skill Info */}
                    <div className="flex justify-between items-center text-sm mb-1.5">
                      <span className="text-zinc-300 font-medium group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-zinc-500 font-semibold text-xs group-hover:text-brand-cyan transition-colors">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-900/50">
                      {/* Animated Progress Bar */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + catIdx * 0.05, duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
