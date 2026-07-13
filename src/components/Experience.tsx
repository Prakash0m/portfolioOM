import { motion } from 'framer-motion';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-zinc-950">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
            A chronological timeline of my professional roles in software engineering, project management, and business administration.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan mx-auto rounded-full mt-4"></div>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
          {experience.map((exp, idx) => (
            <motion.div
              key={`${exp.role}-${exp.company}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative group"
            >
              {/* Timeline Bullet Pin */}
              <div className="absolute -left-[45px] md:-left-[53px] top-1.5 w-8 h-8 rounded-full bg-zinc-950 border-2 border-brand-purple flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                <Briefcase size={14} />
              </div>

              {/* Card Container */}
              <div className="p-6 md:p-8 rounded-2xl glass hover:border-zinc-700 transition-all duration-300 relative">
                {/* Glow indicator on card hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/5 to-brand-blue/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 relative z-10">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-zinc-300 font-semibold text-sm md:text-base mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  {/* Duration Tag */}
                  <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-semibold self-start md:self-center">
                    <Calendar size={12} className="text-brand-purple" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <ul className="space-y-2.5 text-zinc-400 text-sm md:text-base relative z-10">
                  {exp.responsibilities.map((resp, respIdx) => (
                    <li key={respIdx} className="flex items-start">
                      <ChevronRight size={16} className="text-brand-cyan mt-1 mr-2 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
