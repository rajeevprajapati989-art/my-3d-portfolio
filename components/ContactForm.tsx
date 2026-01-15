
import React, { useState } from 'react';
import { Send, ArrowLeft, Mail, User, MessageSquare, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  onBack: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onBack }) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-8 animate-fade-in">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-400">
          <CheckCircle className="w-12 h-12" />
        </div>
        <h2 className="font-display text-4xl font-bold mb-4">Transmission Received</h2>
        <p className="text-white/60 max-w-md mb-8">
          Your message has been sent across the digital void. Rajeev will respond to your signal shortly.
        </p>
        <button 
          onClick={onBack}
          className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-indigo-500 hover:text-white transition-all"
        >
          Return to Orbit
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-16 px-8 flex flex-col items-center animate-fade-in">
      <div className="w-full max-w-2xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>

        <div className="mb-12">
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            LET'S <span className="text-indigo-500">CONNECT.</span>
          </h1>
          <p className="text-white/50 text-lg">
            Whether you have a project in mind or just want to say hi, my inbox is always open.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                <input 
                  required
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-white placeholder:text-white/10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                <input 
                  required
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-white placeholder:text-white/10"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Message</label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-6 w-4 h-4 text-white/20" />
              <textarea 
                required
                rows={6}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-white placeholder:text-white/10 resize-none"
              ></textarea>
            </div>
          </div>

          <button 
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-3 active:scale-[0.98]"
          >
            {status === 'sending' ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Initialize Transmission
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </form>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/5">
          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-white/30 mb-2">Location</h4>
            <p className="text-sm">Remote / Worldwide</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-white/30 mb-2">Email</h4>
            <p className="text-sm">hello@rajeev.dev</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-white/30 mb-2">Social</h4>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-indigo-400 transition-colors">LinkedIn</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-indigo-400 transition-colors">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-indigo-400 transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
