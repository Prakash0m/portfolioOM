import { motion } from 'framer-motion';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-white/60">
      {/* Background ambient lighting and dot matrix */}
      <div className="absolute top-1/4 right-6 w-96 h-96 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-6 w-80 h-80 bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-16 left-8 w-36 h-36 dot-pattern-slate opacity-30 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left md:text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-600 block mb-2">
            Career
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Work Experience
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full md:mx-auto mt-4"></div>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l-2 border-slate-100 ml-4 md:ml-6 pl-8 md:pl-10 space-y-10">
          {experience.map((exp, idx) => (
            <motion.div
              key={`${exp.role}-${exp.company}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="relative group"
            >
              {/* Timeline Bullet Pin */}
              <div className="absolute -left-[45px] md:-left-[53px] top-2 w-8 h-8 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-xs">
                <Briefcase size={14} />
              </div>

              {/* Card Container */}
              <div className="p-7 md:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-emerald-200 transition-all duration-300">
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-slate-700 font-bold text-sm md:text-base">
                        {exp.company}
                      </span>
                      {exp.website && (
                        <a 
                          href={`https://${exp.website}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-emerald-600 hover:text-emerald-700 font-semibold underline underline-offset-2"
                        >
                          {exp.website}
                        </a>
                      )}
                      {exp.location && (
                        <span className="text-xs text-slate-400 font-medium">
                          • {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Duration Tag */}
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-xs font-bold self-start md:self-center">
                    <Calendar size={12} className="text-emerald-600" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <ul className="space-y-2 text-slate-600 text-sm md:text-base">
                  {exp.responsibilities.map((resp, respIdx) => (
                    <li key={respIdx} className="flex items-start">
                      <ChevronRight size={16} className="text-emerald-500 mt-1 mr-2 flex-shrink-0" />
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
