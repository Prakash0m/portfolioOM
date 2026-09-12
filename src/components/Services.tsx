import { motion } from 'framer-motion';
import { Monitor, Cpu, Search, Sparkles, Layout, TrendingUp, ArrowRight, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const getServiceIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('support') || t.includes('technical operations')) {
    return <Wrench className="text-emerald-600" size={24} />;
  } else if (t.includes('administration') || t.includes('maintenance')) {
    return <Monitor className="text-blue-600" size={24} />;
  } else if (t.includes('development') || t.includes('web')) {
    return <Layout className="text-emerald-600" size={24} />;
  } else if (t.includes('social media') || t.includes('marketing')) {
    return <Sparkles className="text-blue-600" size={24} />;
  } else if (t.includes('seo') || t.includes('brand')) {
    return <Search className="text-emerald-600" size={24} />;
  } else if (t.includes('lead generation') || t.includes('campaign')) {
    return <TrendingUp className="text-blue-600" size={24} />;
  }
  return <Cpu className="text-emerald-600" size={24} />;
};

const getServiceBg = (title: string) => {
  const t = title.toLowerCase();
  const isBlue = t.includes('administration') || t.includes('social') || t.includes('lead') || t.includes('campaign');
  return isBlue ? 'bg-blue-50 border-blue-100' : 'bg-emerald-50 border-emerald-100';
};

export default function Services() {
  const { services } = portfolioData;

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-50/70">
      {/* Background ambient blurs and dot matrix */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-100/35 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-20 right-12 w-32 h-32 dot-pattern opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left md:text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-600 block mb-2">
            Services
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            What I Offer
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full md:mx-auto mt-4"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_30px_-4px_rgba(16,185,129,0.1)] hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 group-hover:scale-105 transition-transform ${getServiceBg(service.title)}`}>
                  {getServiceIcon(service.title)}
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Action indicator */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                <span>Inquire Details</span>
                <ArrowRight size={14} className="ml-1.5 transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
