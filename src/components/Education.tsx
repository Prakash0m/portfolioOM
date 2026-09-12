import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import tuLogo from '../assets/tu_logo.png';
import lincolnLogo from '../assets/lincoln_logo.png';

const getUniversityLogo = (edu: { university?: string; degree: string }) => {
  if (edu.university?.toLowerCase().includes('lincoln') || edu.degree.includes('BIT') || edu.degree.toLowerCase().includes('information technology')) {
    return lincolnLogo;
  }
  return tuLogo;
};

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-50/70">
      {/* Decorative ambient background */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-100/35 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-100/35 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute inset-0 bg-dot-pattern-blue opacity-30 pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left md:text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-600 block mb-2">
            Academics
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Education
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full md:mx-auto mt-4"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* University Logo, Affiliation & Status */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-center p-2 group-hover:scale-105 group-hover:shadow-md group-hover:border-blue-200 transition-all duration-300 flex-shrink-0">
                      <img
                        src={getUniversityLogo(edu)}
                        alt={edu.university || 'University'}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        University
                      </span>
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                        {edu.university}
                      </span>
                    </div>
                  </div>
                  
                  {edu.status && (
                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold border shadow-2xs ${
                      edu.status.toLowerCase().includes('semester') || edu.status.toLowerCase().includes('running')
                        ? 'bg-blue-50 text-blue-700 border-blue-200' 
                        : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }`}>
                      {edu.status}
                    </span>
                  )}
                </div>

                {/* Degree and College Name */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1.5">
                  {edu.degree}
                </h3>
                <p className="text-slate-700 font-bold text-sm md:text-base mb-4">
                  {edu.institution}
                </p>
              </div>

              {/* Footer info: Location & Duration */}
              <div className="space-y-2 pt-4 border-t border-slate-100 text-slate-500 text-xs font-semibold">
                {edu.location && (
                  <div className="flex items-center space-x-2">
                    <MapPin size={14} className="text-blue-500 flex-shrink-0" />
                    <span>{edu.location}</span>
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  <Calendar size={14} className="text-emerald-500 flex-shrink-0" />
                  <span>{edu.duration}</span>
                </div>
                {edu.details && (
                  <p className="text-emerald-700 text-xs mt-1 font-bold">
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
