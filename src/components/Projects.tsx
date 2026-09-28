import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Globe } from 'lucide-react';
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
    { id: 'all', name: 'All' },
    { id: 'client', name: 'Client Work' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'business', name: 'Corporate & Portals' },
    { id: 'fullstack', name: 'Web & Full Stack' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : activeCategory === 'client'
    ? projects.filter(p => p.isTeamClient)
    : activeCategory === 'ecommerce'
    ? projects.filter(p => p.category === 'ecommerce' || p.tech.some(t => t.toLowerCase().includes('commerce')))
    : activeCategory === 'business'
    ? projects.filter(p => p.category === 'business')
    : projects.filter(p => p.category === activeCategory || p.tech.some(t => t.toLowerCase().includes(activeCategory)));

  const cleanUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-emerald-600 block mb-2">
              Work & Deployments
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Selected Projects
            </h2>
            <p className="text-slate-500 text-sm mt-2 max-w-xl">
              Live websites and digital platforms built in collaboration with clients and technical teams.
            </p>
          </div>

          {/* Clean Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/60 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200"
              >
                <div>
                  {/* Top Row: Category tag & External links */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200/60">
                        {project.badge || project.category}
                      </span>
                      {project.isTeamClient && (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          Live Client
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <GithubIcon />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                          aria-label={`Open ${project.title}`}
                        >
                          <ArrowUpRight size={17} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Domain */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {project.title}
                  </h3>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-emerald-600 font-mono mt-0.5 mb-3 transition-colors"
                    >
                      <Globe size={11} className="text-slate-400" />
                      <span>{cleanUrl(project.link)}</span>
                    </a>
                  ) : (
                    <p className="text-xs text-slate-400 mt-0.5 mb-3">
                      {project.subtitle}
                    </p>
                  )}

                  {/* Project Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Role Note */}
                  {project.clientRole && (
                    <p className="text-xs text-slate-500 mb-4">
                      <span className="font-medium text-slate-700">Role:</span> {project.clientRole}
                    </p>
                  )}
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-50 text-slate-600 border border-slate-200/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Simple, Professional Live Link Action */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 bg-slate-900 text-white hover:bg-emerald-600 transition-colors cursor-pointer"
                    >
                      <span>Visit Website</span>
                      <ArrowUpRight size={13} />
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

