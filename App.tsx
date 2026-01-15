
import React, { useState, useEffect } from 'react';
import ThreeBackground from './components/ThreeBackground';
import ChatInterface from './components/ChatInterface';
import ContactForm from './components/ContactForm';
import { 
  Download, 
  Code, 
  User, 
  Rocket, 
  Mail, 
  Github, 
  Linkedin, 
  Instagram, 
  ExternalLink, 
  Cpu, 
  ArrowLeft, 
  Terminal, 
  Layout, 
  Shield, 
  GraduationCap, 
  Briefcase,
  Menu,
  X
} from 'lucide-react';

type View = 'home' | 'contact' | 'projects' | 'skills' | 'about';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');

  const projects = [
    {
      title: "Nebula Dashboard",
      desc: "Real-time analytics engine with 3D data visualization components and cosmic themes.",
      tech: ["React", "Three.js", "Redis"],
      link: "https://github.com/rajeevprajapati/nebula-dashboard"
    },
    {
      title: "Quantum Pay",
      desc: "A high-security fintech platform for global digital transactions with encrypted cores.",
      tech: ["Node.js", "AWS", "TypeScript"],
      link: "https://github.com/rajeevprajapati/quantum-pay"
    },
    {
      title: "Cosmos UI",
      desc: "A comprehensive design system focusing on fluid animations and universal accessibility.",
      tech: ["Tailwind", "Framer Motion"],
      link: "https://github.com/rajeevprajapati/cosmos-ui"
    }
  ];

  const skillCategories = [
    { name: 'React', level: 'Expert' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'Node.js', level: 'Expert' },
    { name: 'Go', level: 'Intermediate' },
    { name: 'AWS', level: 'Advanced' },
    { name: 'Docker', level: 'Advanced' },
    { name: 'PostgreSQL', level: 'Expert' },
    { name: 'Three.js', level: 'Advanced' }
  ];

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  }, [currentView]);

  const renderNavbar = () => (
    <nav className="w-full max-w-7xl px-6 md:px-8 py-6 md:py-8 flex justify-between items-center sticky top-0 backdrop-blur-sm z-50">
      <div 
        className="flex items-center gap-3 group cursor-pointer"
        onClick={() => setCurrentView('home')}
      >
        <div className="w-10 h-10 md:w-12 md:h-10 bg-indigo-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-indigo-600/40">
          <span className="font-display font-bold text-lg md:text-xl tracking-tighter text-white">RP</span>
        </div>
        <span className="font-display text-lg md:text-2xl font-bold tracking-tighter bg-gradient-to-r from-white via-indigo-200 to-white/40 bg-clip-text text-transparent uppercase whitespace-nowrap">
          RAJEEV PRAJAPATI
        </span>
      </div>
      
      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
        <button 
          onClick={() => setCurrentView('home')} 
          className={`hover:text-white transition-colors ${currentView === 'home' ? 'text-white' : ''}`}
        >
          Home
        </button>
        <button 
          onClick={() => setCurrentView('about')} 
          className={`hover:text-white transition-colors ${currentView === 'about' ? 'text-white' : ''}`}
        >
          About
        </button>
        <button 
          onClick={() => setCurrentView('projects')} 
          className={`hover:text-white transition-colors ${currentView === 'projects' ? 'text-white' : ''}`}
        >
          Projects
        </button>
        <button 
          onClick={() => setCurrentView('skills')} 
          className={`hover:text-white transition-colors ${currentView === 'skills' ? 'text-white' : ''}`}
        >
          Skills
        </button>
        <button 
          onClick={() => setCurrentView('contact')}
          className={`hover:text-white transition-colors ${currentView === 'contact' ? 'text-white' : ''}`}
        >
          Contact
        </button>
        <button 
          onClick={() => setCurrentView('contact')}
          className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
        >
          Hire Me
        </button>
      </div>

      {/* Mobile Toggle */}
      <button 
        className="md:hidden p-2 text-white/60 hover:text-white transition-colors z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-8 h-8 text-white" /> : <Menu className="w-8 h-8 text-white" />}
      </button>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 bg-[#020617] transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-8 text-2xl font-bold z-40 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <button onClick={() => setCurrentView('home')} className={currentView === 'home' ? 'text-indigo-500' : 'text-white/60'}>Home</button>
        <button onClick={() => setCurrentView('about')} className={currentView === 'about' ? 'text-indigo-500' : 'text-white/60'}>About</button>
        <button onClick={() => setCurrentView('projects')} className={currentView === 'projects' ? 'text-indigo-500' : 'text-white/60'}>Projects</button>
        <button onClick={() => setCurrentView('skills')} className={currentView === 'skills' ? 'text-indigo-500' : 'text-white/60'}>Skills</button>
        <button onClick={() => setCurrentView('contact')} className={currentView === 'contact' ? 'text-indigo-500' : 'text-white/60'}>Contact</button>
        <button 
          onClick={() => setCurrentView('contact')}
          className="px-10 py-4 bg-indigo-600 text-white rounded-2xl"
        >
          Hire Me
        </button>
      </div>
    </nav>
  );

  const renderAboutPage = () => (
    <section className="py-24 px-8 w-full max-w-7xl animate-fade-in min-h-[70vh]">
      <button 
        onClick={() => setCurrentView('home')}
        className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </button>

      <div className="bg-gradient-to-br from-indigo-600/10 to-transparent p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-white/5 backdrop-blur-sm">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 tracking-tighter text-white">About <span className="text-indigo-500">Me.</span></h2>
            <div className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed font-light">
              <p>
                I’m <span className="text-white font-medium">Rajeev Prajapati</span>, a full-stack developer and a student at <span className="text-indigo-400">Government Polytechnic Mau</span>. I enjoy working on both frontend and backend development to build complete and functional web applications.
              </p>
              <p>
                I have completed training and an internship from <span className="text-white font-medium">Internshala</span>, where I gained practical experience in full-stack development and real project work. I like learning new technologies and building scalable, efficient, and user-focused applications.
              </p>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="#" className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-sm font-bold text-white">
                <Download className="w-4 h-4" /> CV / Resume
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:bg-white/10 transition-all">
              <GraduationCap className="text-indigo-500 w-10 h-10 mb-4 group-hover:rotate-12 transition-transform" />
              <h4 className="text-xl font-bold mb-2 text-white">Education</h4>
              <p className="text-sm text-white/40 leading-relaxed mb-2">Government Polytechnic Mau</p>
              <span className="text-[10px] uppercase tracking-[0.2em] text-indigo-400 font-bold">Student • Engineering</span>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:bg-white/10 transition-all">
              <Briefcase className="text-indigo-500 w-10 h-10 mb-4 group-hover:rotate-12 transition-transform" />
              <h4 className="text-xl font-bold mb-2 text-white">Experience</h4>
              <p className="text-sm text-white/40 leading-relaxed mb-2">Full Stack Internship @ Internshala</p>
              <span className="text-[10px] uppercase tracking-[0.2em] text-indigo-400 font-bold">Completed Training</span>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:bg-white/10 transition-all">
              <User className="text-indigo-500 w-10 h-10 mb-4 group-hover:rotate-12 transition-transform" />
              <h4 className="text-xl font-bold mb-2 text-white">Focus</h4>
              <p className="text-sm text-white/40 leading-relaxed">
                Dedicated to building high-performance, user-centric applications while continuously mastering emerging technologies in the JS ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderProjectGrid = () => (
    <section className="py-24 px-8 w-full max-w-7xl animate-fade-in min-h-[70vh]">
      <button 
        onClick={() => setCurrentView('home')}
        className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </button>
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px flex-1 bg-white/10"></div>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-center px-4 text-white">Portfolio Projects</h2>
        <div className="h-px flex-1 bg-white/10"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="group p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-indigo-500/50 transition-all hover:-translate-y-2">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-3 text-white">{p.title}</h3>
            <p className="text-white/50 mb-6 text-sm leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {p.tech.map((t, idx) => (
                <span key={idx} className="px-2 py-1 text-[10px] uppercase font-bold tracking-widest bg-white/5 border border-white/10 rounded-md text-white/40">
                  {t}
                </span>
              ))}
            </div>
            <a 
              href={p.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors"
            >
              Case Study <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );

  const renderSkillsPage = () => (
    <section className="py-24 px-8 w-full max-w-7xl animate-fade-in min-h-[70vh]">
      <button 
        onClick={() => setCurrentView('home')}
        className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </button>

      <div className="bg-gradient-to-br from-indigo-600/10 to-transparent p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-white/5 backdrop-blur-sm">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 tracking-tighter text-white">My <span className="text-indigo-500">Expertise.</span></h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              I've spent years honing my craft across the stack. From architecting high-traffic backends to crafting silky-smooth user interfaces, my toolkit is built for modern scalability and performance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((skill) => (
                <div key={skill.name} className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all flex flex-col gap-1">
                  <span className="font-bold text-white">{skill.name}</span>
                  <span className="text-[10px] uppercase tracking-widest text-indigo-400/60 font-medium">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:bg-white/10 transition-all">
              <Layout className="text-indigo-500 w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-2 text-white">Frontend Engineering</h4>
              <p className="text-sm text-white/40 leading-relaxed">
                Expert in building reactive, pixel-perfect interfaces. Focused on user experience, performance optimization, and accessible design systems using React and Three.js.
              </p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:bg-white/10 transition-all">
              <Terminal className="text-indigo-500 w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-2 text-white">Backend Architecture</h4>
              <p className="text-sm text-white/40 leading-relaxed">
                Specialized in distributed systems, microservices, and serverless computing. Proficient in Node.js, Go, and managing high-performance databases.
              </p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:bg-white/10 transition-all">
              <Shield className="text-indigo-500 w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-2 text-white">DevOps & Cloud</h4>
              <p className="text-sm text-white/40 leading-relaxed">
                Experienced with CI/CD pipelines, containerization with Docker/Kubernetes, and architecting cloud-native solutions on AWS and Google Cloud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="relative w-full h-screen text-white overflow-y-auto overflow-x-hidden selection:bg-indigo-500/30 scroll-smooth">
      <div className="fixed inset-0 pointer-events-none">
        <ThreeBackground />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        {renderNavbar()}

        {currentView === 'home' && (
          <div className="w-full flex flex-col items-center">
            <section className="min-h-[85vh] flex flex-col justify-center px-6 md:px-24 w-full max-w-7xl">
              <div className="max-w-4xl space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] md:text-xs font-semibold uppercase tracking-wider animate-fade-in">
                    <Cpu className="w-3 h-3" />
                    Available for New Challenges
                  </div>
                  <h1 className="font-display text-5xl md:text-9xl font-bold leading-[1] tracking-tighter uppercase text-white">
                    RAJEEV <br /> 
                    <span className="text-indigo-500">PRAJAPATI.</span>
                  </h1>
                  <p className="text-lg md:text-3xl text-white/60 max-w-2xl font-light leading-snug">
                    Full Stack Developer building <span className="text-white">scalable architecture</span> and <span className="text-white">immersive digital experiences</span>.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#" 
                    className="group px-6 md:px-8 py-3 md:py-4 bg-white text-black hover:bg-indigo-500 hover:text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-xl transition-all flex items-center gap-3 active:scale-95"
                  >
                    Download Resume
                    <Download className="w-5 h-5" />
                  </a>
                  <div className="flex gap-3 md:gap-4 items-center px-2 md:px-4">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-white">
                      <Github className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-white">
                      <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-white">
                      <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentView === 'about' && renderAboutPage()}

        {currentView === 'projects' && renderProjectGrid()}

        {currentView === 'skills' && renderSkillsPage()}

        {currentView === 'contact' && (
          <ContactForm onBack={() => setCurrentView('home')} />
        )}

        {/* Global Footer Section */}
        <footer className="w-full max-w-7xl p-8 mt-12 flex flex-col md:flex-row justify-between items-center text-white/30 gap-8 md:gap-4 border-t border-white/5">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2.5 px-4 py-2 bg-green-500/5 rounded-full border border-green-500/10">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm md:text-base font-semibold text-green-500/80">Available for Hire</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1.5 text-center">
            <span className="text-sm md:text-base font-medium tracking-[0.1em] uppercase text-white/60">
              Developed by RAJEEV PRAJAPATI
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] font-light uppercase">
              2026 • All Rights Reserved
            </span>
          </div>
          <div className="flex gap-6 md:gap-4 items-center">
             <button onClick={() => setCurrentView('contact')} className="p-2 hover:text-white transition-colors bg-white/5 border border-white/10 rounded-lg">
               <Mail className="w-5 h-5" />
             </button>
             <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-white transition-colors bg-white/5 border border-white/10 rounded-lg text-white">
               <Github className="w-5 h-5" />
             </a>
          </div>
        </footer>
      </div>

      <ChatInterface isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        html {
          scroll-behavior: smooth;
        }
      `}} />
    </div>
  );
};

export default App;
