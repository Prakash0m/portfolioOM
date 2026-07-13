import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, ExternalLink, Tag } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Filter categories
  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'react', name: 'React.js' },
    { id: 'django', name: 'Python/Django' },
  ];

  // Filter project lists
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory || p.tech.some(t => t.toLowerCase().includes(activeCategory)));

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-zinc-950">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
            A showcase of web applications and business systems engineered using modern developer stacks.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan mx-auto rounded-full mt-4"></div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all relative ${
                activeCategory === cat.id
                  ? 'text-white'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
              }`}
            >
              {activeCategory === cat.id && (
                <motion.span
                  layoutId="active-project-tab"
                  className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col justify-between p-6 rounded-2xl glass hover:border-zinc-700 transition-all duration-300 hover:shadow-xl hover:shadow-brand-purple/5"
              >
                <div>
                  {/* Card Header Folder Icon & External Links */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-brand-purple flex items-center justify-center">
                      <Folder size={20} />
                    </div>
                    
                    <div className="flex items-center space-x-2 text-zinc-500">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:text-white transition-colors hover:bg-zinc-900 rounded-lg flex items-center justify-center"
                          aria-label="GitHub Repository"
                        >
                          <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:text-white transition-colors hover:bg-zinc-900 rounded-lg"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-brand-purple text-xs font-semibold uppercase tracking-wider mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags Footer */}
                <div className="pt-4 border-t border-zinc-900">
                  <div className="flex flex-wrap gap-1.5 items-center">
                    <Tag size={12} className="text-zinc-500 mr-1" />
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800/80 text-zinc-400 text-[10px] font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
