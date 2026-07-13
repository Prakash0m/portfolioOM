import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-zinc-950">
      {/* Decorative Radial Background */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Education</h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
            My academic accomplishments, specializing in Information Technology, Business Administration, and Management.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan mx-auto rounded-full mt-4"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="p-6 md:p-8 rounded-2xl glass hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group hover:shadow-lg hover:shadow-brand-blue/5"
            >
              <div>
                {/* Icon & Degree Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-brand-cyan group-hover:scale-105 transition-transform">
                    <GraduationCap size={22} />
                  </div>
                  
                  {/* Status Label (e.g. running or completed) */}
                  {edu.status && (
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                      edu.status.toLowerCase().includes('running') 
                        ? 'bg-brand-blue/15 text-brand-blue border border-brand-blue/30' 
                        : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
                    }`}>
                      {edu.status}
                    </span>
                  )}
                </div>

                {/* Degree and School Name */}
                <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors mb-2">
                  {edu.degree}
                </h3>
                <p className="text-zinc-300 font-semibold text-sm md:text-base mb-4">
                  {edu.institution}
                </p>
              </div>

              {/* Footer info: Location & Duration */}
              <div className="space-y-2.5 pt-4 border-t border-zinc-900 text-zinc-500 text-xs font-medium">
                {edu.location && (
                  <div className="flex items-center space-x-2">
                    <MapPin size={14} className="text-brand-purple flex-shrink-0" />
                    <span>{edu.location}</span>
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  <Calendar size={14} className="text-brand-blue flex-shrink-0" />
                  <span>{edu.duration}</span>
                </div>
                {edu.details && (
                  <p className="text-brand-cyan/80 text-xs italic mt-1 font-semibold">
                    {edu.details}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
