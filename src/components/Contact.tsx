import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { location, phone, email, socials } = portfolioData.personalInfo;
  
  // Form states
  const [name, setName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !userEmail || !message) {
      setError('Please fill in all required fields.');
      return;
    }
    
    setLoading(true);
    setError('');

    // Simulate API request and open WhatsApp
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      const whatsappBaseUrl = 'https://wa.me/9779808677897';
      const text = `Hello Om, my name is ${name} (${userEmail}).\n\nSubject: ${subject || 'General Inquiry'}\n\nMessage: ${message}`;
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `${whatsappBaseUrl}?text=${encodedText}`;

      // Open WhatsApp chat in new window/tab
      window.open(whatsappUrl, '_blank');

      setName('');
      setUserEmail('');
      setSubject('');
      setMessage('');
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

  const contactDetails = [
    { label: 'Location', value: location, icon: MapPin, color: 'text-brand-blue' },
    { label: 'Email', value: email, icon: Mail, color: 'text-brand-purple', href: `mailto:${email}` },
    { label: 'Phone', value: phone, icon: Phone, color: 'text-brand-cyan', href: `tel:${phone}` },
    { label: 'WhatsApp', value: 'Chat on WhatsApp', icon: MessageCircle, color: 'text-green-500', href: socials.whatsapp }
  ];

  const socialLinks = [
    { name: 'GitHub', url: socials.github, color: 'hover:text-zinc-100 hover:border-zinc-500' },
    { name: 'LinkedIn', url: socials.linkedin, color: 'hover:text-brand-blue hover:border-brand-blue/50' },
    { name: 'Facebook', url: socials.facebook, color: 'hover:text-blue-500 hover:border-blue-500/50' },
    { name: 'Instagram', url: socials.instagram, color: 'hover:text-pink-500 hover:border-pink-500/50' },
  ];

  const renderSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>;
      case 'linkedin':
        return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
      case 'facebook':
        return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
      case 'instagram':
        return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845a1.21 1.21 0 100-2.42 1.21 1.21 0 000 2.42z"/></svg>;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-zinc-950">
      {/* Decorative Blur background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
            Have a project in mind, need technical advice, or want to discuss a full-time role? Send a message directly.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Contact Cards & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  const isLink = !!detail.href;
                  
                  const content = (
                    <div className="flex items-center space-x-4 p-4 rounded-xl glass hover:border-zinc-800 transition-colors">
                      <div className={`w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center ${detail.color}`}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <div className="text-zinc-500 text-xs font-semibold">{detail.label}</div>
                        <div className="text-white text-sm font-bold mt-0.5">{detail.value}</div>
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

            {/* Social Icons Connect */}
            <div className="mt-8 lg:mt-0 pt-8 border-t border-zinc-900">
              <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-4">Connect Socially</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl glass flex items-center justify-center text-zinc-400 border-zinc-800/80 transition-all ${social.color}`}
                      aria-label={social.name}
                    >
                      {renderSocialIcon(social.name)}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl glass-premium h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-3 text-sm text-red-500 bg-red-500/10 border border-red-500/30 rounded-lg">
                    {error}
                  </div>
                )}
                
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 text-sm text-brand-cyan bg-brand-cyan/15 border border-brand-cyan/30 rounded-lg flex items-center space-x-3"
                  >
                    <CheckCircle2 size={18} />
                    <span className="font-semibold">Message sent successfully! I will get back to you soon.</span>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-name" className="block text-zinc-400 text-xs font-semibold mb-2">Name *</label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-zinc-900/60 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="form-email" className="block text-zinc-400 text-xs font-semibold mb-2">Email Address *</label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full px-4 py-3 bg-zinc-900/60 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="form-subject" className="block text-zinc-400 text-xs font-semibold mb-2">Subject</label>
                  <input
                    id="form-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Message subject"
                    className="w-full px-4 py-3 bg-zinc-900/60 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="form-message" className="block text-zinc-400 text-xs font-semibold mb-2">Message *</label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your project description or inquiry details..."
                    className="w-full px-4 py-3 bg-zinc-900/60 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan text-sm font-bold text-white shadow-lg hover:brightness-110 disabled:opacity-50 disabled:hover:brightness-100 transition-all cursor-pointer"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Send Message</span>
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
