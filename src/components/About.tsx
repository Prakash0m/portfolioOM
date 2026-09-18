import { motion } from 'framer-motion';
import { Briefcase, Award, GraduationCap, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

export default function About() {
  const { bioDetailed } = portfolioData.personalInfo;
  const paragraphs = bioDetailed.split('\n\n');

  const stats = [
    { label: 'Current Role', value: 'CMO', icon: Briefcase, color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-100' },
    { label: 'Academics', value: 'BIT & BBS', icon: GraduationCap, color: 'text-blue-600', bg: 'bg-blue-50 border-blue-100' },
    { label: 'Organizations', value: '4 Roles', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-100' },
    { label: 'Marketing & Tech', value: 'Leadership', icon: Award, color: 'text-blue-600', bg: 'bg-blue-50 border-blue-100' }
  ];

  const badges = [
    { text: 'Chief Marketing Strategy', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
    { text: 'Digital Campaigns & SEO', color: 'bg-blue-50 text-blue-800 border-blue-200' },
    { text: 'Website Management & CMS', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
    { text: 'Web Tech (React / Django)', color: 'bg-blue-50 text-blue-800 border-blue-200' },
    { text: 'IT Operations & Support', color: 'bg-slate-100 text-slate-800 border-slate-200' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50/70">
      {/* Background blurs and dot matrix */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100/35 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-12 right-12 w-32 h-32 dot-pattern opacity-35 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left md:text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-600 block mb-2">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            About Om Prakash Sharma
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full md:mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Profile Card with organic accent & attractive hover animations */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative p-3 rounded-3xl bg-white border border-slate-200/90 shadow-xl max-w-sm w-full group cursor-pointer"
            >
              {/* Soft breathing ambient glow behind card */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-emerald-200/40 via-teal-100/30 to-blue-200/40 blur-xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none -z-10" />

              {/* Profile Image with rounded corners */}
              <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-slate-100">
                <img 
                  src={profileImg} 
                  alt="Om Prakash Sharma - IT Officer, Web Developer and Digital Marketing Professional from Nepal" 
                  loading="lazy"
                  width={384}
                  height={320}
                  className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-108 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
              </div>

              {/* Badges Container */}
              <div className="flex flex-wrap gap-2 mt-4 justify-center p-2">
                {badges.map((b) => (
                  <span
                    key={b.text}
                    className={`px-3 py-1 rounded-full text-xs font-bold border ${b.color}`}
                  >
                    {b.text}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio Narrative & Clean Stats Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 flex items-center">
              <span className="w-2 h-7 bg-emerald-500 rounded-full mr-3.5"></span>
              IT Officer, Web Developer & Digital Marketing Professional
            </h3>
            
            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed mb-8">
              {paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all text-center"
                  >
                    <div className={`mx-auto w-10 h-10 rounded-xl border flex items-center justify-center mb-2.5 ${stat.bg}`}>
                      <Icon size={18} className={stat.color} />
                    </div>
                    <div className="text-xl font-extrabold text-slate-900">{stat.value}</div>
                    <div className="text-slate-500 text-xs font-semibold mt-0.5">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Languages & Professional Skills from CV */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Languages:</span>
                {portfolioData.languages.map((l) => (
                  <span key={l.language} className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-bold">
                    {l.language} — <span className="font-semibold text-emerald-600">{l.proficiency}</span>
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Key Skills:</span>
                {portfolioData.professionalSkills.slice(0, 6).map((skill) => (
                  <span key={skill} className="px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
