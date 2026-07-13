import { motion } from 'framer-motion';
import { Monitor, FileSpreadsheet, Cpu, Search, Sparkles, Palette } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const getServiceIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('website') || t.includes('development')) {
    return <Monitor className="text-brand-blue" size={24} />;
  } else if (t.includes('erp') || t.includes('accounting') || t.includes('software')) {
    return <FileSpreadsheet className="text-brand-purple" size={24} />;
  } else if (t.includes('api')) {
    return <Cpu className="text-brand-cyan" size={24} />;
  } else if (t.includes('seo')) {
    return <Search className="text-brand-blue" size={24} />;
  } else if (t.includes('marketing') || t.includes('branding')) {
    return <Sparkles className="text-brand-purple" size={24} />;
  } else if (t.includes('ui') || t.includes('design') || t.includes('graphic')) {
    return <Palette className="text-brand-cyan" size={24} />;
  }
  return <Monitor className="text-brand-blue" size={24} />;
};

export default function Services() {
  const { services } = portfolioData;

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-zinc-950">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Services Offered</h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
            Professional high-impact services tailored to help businesses build products and grow their digital presence.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan mx-auto rounded-full mt-4"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="p-6 md:p-8 rounded-2xl glass hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-purple/5"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {getServiceIcon(service.title)}
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Action indicator link */}
              <div className="mt-8 pt-4 border-t border-zinc-900/50 flex items-center text-xs font-semibold text-brand-purple group-hover:text-brand-cyan transition-colors">
                <span>Inquire details</span>
                <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
