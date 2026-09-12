import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { location, phone, email, socials } = portfolioData.personalInfo;
  
  const [name, setName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !userEmail || !message) {
      setError('Please fill in all required fields.');
      return;
    }
    
    setLoading(true);
    setError('');

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      const whatsappBaseUrl = 'https://wa.me/9779808677897';
      const text = `Hello Om, my name is ${name} (${userEmail}).\n\nSubject: ${subject || 'General Inquiry'}\n\nMessage: ${message}`;
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `${whatsappBaseUrl}?text=${encodedText}`;

      window.open(whatsappUrl, '_blank');

      setName('');
      setUserEmail('');
      setSubject('');
      setMessage('');
      
      setTimeout(() => setSuccess(false), 6000);
    }, 1000);
  };

  const contactDetails = [
    { label: 'Location', value: location, icon: MapPin, color: 'text-blue-600', bg: 'bg-blue-50 border-blue-100' },
    { label: 'Email', value: email, icon: Mail, color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-100', href: `mailto:${email}` },
    { label: 'Phone', value: phone, icon: Phone, color: 'text-blue-600', bg: 'bg-blue-50 border-blue-100', href: `tel:${phone}` },
    { label: 'WhatsApp', value: 'Chat Directly (+977 9808677897)', icon: MessageCircle, color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-100', href: socials.whatsapp }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50/70">
      {/* Decorative ambient background */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-blue-100/35 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute inset-0 bg-dot-pattern-slate opacity-40 pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left md:text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-600 block mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Let's Talk About Your Project
          </h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full md:mx-auto mt-4"></div>
        </div>

        {/* Big Email Callout Card (Inspired by reference screenshot) */}
        <div className="mb-14 p-8 md:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-[0_10px_35px_-4px_rgba(0,0,0,0.04)] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Direct Inquiries
            </span>
            <a 
              href={`mailto:${email}`}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 hover:text-emerald-600 transition-colors tracking-tight"
            >
              {email}
            </a>
          </div>

          <button
            onClick={copyEmail}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all cursor-pointer shadow-2xs active:scale-95"
          >
            {copied ? (
              <>
                <Check size={16} className="text-emerald-600" />
                <span className="text-emerald-600">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Information</h3>
              
              <div className="grid grid-cols-1 gap-4">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  const isLink = !!detail.href;
                  
                  const content = (
                    <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-200 shadow-2xs transition-all">
                      <div className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 ${detail.bg}`}>
                        <Icon size={20} className={detail.color} />
                      </div>
                      <div>
                        <div className="text-slate-400 text-xs font-bold">{detail.label}</div>
                        <div className="text-slate-800 text-sm font-bold mt-0.5">{detail.value}</div>
                      </div>
                    </div>
                  );

                  return isLink ? (
                    <a key={detail.label} href={detail.href} className="block transition-all">
                      {content}
                    </a>
                  ) : (
                    <div key={detail.label}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* LinkedIn & GitHub Direct Access */}
            <div className="flex flex-wrap gap-3">
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/50 text-slate-800 text-xs font-bold transition-all shadow-2xs"
              >
                <span className="text-blue-600 font-bold">in</span>
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-400 hover:bg-slate-50 text-slate-800 text-xs font-bold transition-all shadow-2xs"
              >
                <span className="font-bold">⌥</span>
                <span>GitHub / Prakash0m</span>
              </a>
            </div>

            {/* Quick Note Card */}
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-emerald-900">
              <div className="font-bold text-sm mb-1">Fast Response Promised</div>
              <p className="text-xs text-emerald-800 leading-relaxed font-medium">
                I typically respond to inquiries within 24 hours. For immediate requirements, message directly via WhatsApp at +977 9808677897.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-[0_4px_25px_-4px_rgba(0,0,0,0.04)] h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-3.5 text-sm font-semibold text-red-600 bg-red-50 border border-red-200 rounded-xl">
                    {error}
                  </div>
                )}
                
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 text-sm text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center space-x-3"
                  >
                    <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                    <span className="font-bold">Message received! Opening WhatsApp to connect directly.</span>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-name" className="block text-slate-700 text-xs font-bold mb-2">Name *</label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="form-email" className="block text-slate-700 text-xs font-bold mb-2">Email Address *</label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="form-subject" className="block text-slate-700 text-xs font-bold mb-2">Subject</label>
                  <input
                    id="form-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Project inquiry / consultation"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="form-message" className="block text-slate-700 text-xs font-bold mb-2">Message *</label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project, goals, or timeline..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all placeholder:text-slate-400 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center space-x-2 py-4 rounded-full bg-slate-900 hover:bg-emerald-600 text-white font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-emerald-600/20 active:scale-98 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Send Message via WhatsApp</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
