import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Folder, Globe, Users, ExternalLink, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

export default function Projects() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Works' },
    { id: 'team', name: '🤝 Client & Team Works' },
    { id: 'featured', name: '⭐ Featured Live' },
    { id: 'ecommerce', name: '🛒 E-Commerce' },
    { id: 'business', name: '🏢 Portals & Corporate' },
    { id: 'react', name: '⚛️ React.js' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : activeCategory === 'team'
    ? projects.filter(p => p.isTeamClient)
    : activeCategory === 'featured'
    ? projects.filter(p => p.featured)
    : activeCategory === 'ecommerce'
    ? projects.filter(p => p.category === 'ecommerce' || p.tech.some(t => t.toLowerCase().includes('commerce')))
    : activeCategory === 'business'
    ? projects.filter(p => p.category === 'business')
    : projects.filter(p => p.category === activeCategory || p.tech.some(t => t.toLowerCase().includes(activeCategory)));

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-white/60">
      {/* Background dot patterns and ambient blurs */}
      <div className="absolute top-1/4 left-6 w-32 h-32 dot-pattern-slate opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-12 right-10 w-36 h-36 dot-pattern-blue opacity-35 pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-50/70 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-600 block mb-2">
              Portfolio & Client Delivery
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Featured Client & Team Works
            </h2>
            <div className="w-12 h-1 bg-emerald-500 rounded-full mt-4"></div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Client Management & Team Delivery Banner */}
        <div className="mb-10 p-5 rounded-2xl bg-gradient-to-r from-emerald-50/90 via-teal-50/70 to-blue-50/80 border border-emerald-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Users size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm md:text-base font-bold text-slate-900">
                  Client Account Management & Team Co-Development
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md">
                  <Sparkles size={11} /> 100% Live
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Handled direct client relations, requirement roadmapping, and co-developed production-ready platforms with dedicated technical teams across e-commerce, healthcare, security, and financial consultancy.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white text-emerald-800 border border-emerald-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              5+ Commercial Deployments
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col justify-between p-7 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_25px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_35px_-4px_rgba(16,185,129,0.12)] hover:border-emerald-200 transition-all duration-300"
              >
                <div>
                  {/* Card Header: Folder, Live Badge, and Action Buttons */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
                        <Folder size={20} />
                      </div>
                      {project.featured && project.badge && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          {project.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <GithubIcon />
                        </a>
                      )}
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-emerald-600 transition-all shadow-xs group-hover:rotate-45"
                          aria-label="View Project"
                        >
                          <ArrowUpRight size={17} />
                        </a>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
                          <ArrowUpRight size={17} />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Client Role & Team Collaboration Badge */}
                  {project.isTeamClient && (
                    <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50/90 text-emerald-800 border border-emerald-200/80">
                      <Users size={12} className="text-emerald-600 shrink-0" />
                      <span>{project.clientRole || "Client Handled & Developed with Team"}</span>
                    </div>
                  )}

                  {/* Subtitle & Title */}
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                    {project.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {project.title}
                  </h3>

                  {/* Live Website Link Pill */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50/80 hover:bg-emerald-100 border border-emerald-200/80 px-2.5 py-1 rounded-lg mb-3 transition-colors group/link"
                    >
                      <Globe size={12} className="text-emerald-600 shrink-0" />
                      <span className="truncate max-w-[210px] font-mono text-[11px]">
                        {project.link.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                      </span>
                      <ArrowUpRight size={12} className="opacity-70 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform shrink-0" />
                    </a>
                  )}

                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/70 text-slate-600 text-[11px] font-bold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Direct Visit Button */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 bg-slate-900 text-white hover:bg-emerald-600 transition-all duration-200 group/btn shadow-xs cursor-pointer"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

