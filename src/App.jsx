import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { 
  Github, Linkedin, Instagram, Moon, Sun, Download, 
  Send, Menu, X, Mail, MapPin, Phone, CheckCircle2, Briefcase, ArrowUpRight
} from "lucide-react";

import { PERSONAL_INFO, SKILLS, EXPERIENCE, SERVICES } from "./data";
import gambarHero from './assets/background-hero.jpeg';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans ${
      darkMode ? 'bg-[#0a0a0a] text-slate-300' : 'bg-white text-slate-900'
    }`}>
      
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50" style={{ scaleX }} />

      {/* --- NAVIGATION --- */}
   {/* --- NAVIGATION --- */}
<nav className={`fixed w-full z-50 transition-all ${
  darkMode ? 'bg-[#0a0a0a]/80' : 'bg-white/80'
} backdrop-blur-md border-b ${darkMode ? 'border-slate-900' : 'border-slate-100'}`}>
  <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
    <a href="#" className="text-lg font-bold tracking-tight uppercase">
      FIRMAN AZHARY<span className="text-blue-600">.</span>
    </a>
    
    {/* Desktop Menu */}
    <div className="hidden md:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-widest">
      {['Home', 'About', 'Experience', 'Services', 'Contact'].map((item) => (
        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition-colors">{item}</a>
      ))}
      <button onClick={() => setDarkMode(!darkMode)} className="ml-4 p-2 rounded-full border border-slate-700 hover:bg-slate-800 transition-colors">
        {darkMode ? <Sun size={14} className="text-yellow-500"/> : <Moon size={14}/>}
      </button>
    </div>

    {/* Mobile Button Toggle */}
    <div className="md:hidden flex items-center gap-4">
      <button onClick={() => setDarkMode(!darkMode)} className="p-2">
        {darkMode ? <Sun size={20} className="text-yellow-500"/> : <Moon size={20}/>}
      </button>
      <button className="text-blue-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
  </div>

  {/* --- MOBILE DROPDOWN MENU --- */}
  <AnimatePresence>
    {isMenuOpen && (
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        className={`md:hidden border-t overflow-hidden ${darkMode ? 'bg-[#0a0a0a] border-slate-900' : 'bg-white border-slate-100'}`}
      >
        <div className="flex flex-col p-6 space-y-4 text-center text-[12px] font-bold uppercase tracking-[0.2em]">
          {['Home', 'About', 'Experience', 'Services', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsMenuOpen(false)} // Menutup menu setelah klik
              className="py-3 hover:text-blue-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="pt-48 pb-32 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="md:w-3/5 space-y-10 text-center md:text-left">
          <h1 className={`text-6xl md:text-8xl font-medium tracking-tighter leading-none ${darkMode ? 'text-white' : 'text-black'}`}>
            Building <br /> <span className="text-blue-600">Digital Worth.</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-lg leading-relaxed">{PERSONAL_INFO.description}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <a href={PERSONAL_INFO.cvLink} download="./src/assets/MUHAMMAD FIRMAN AZHARY_cv.pdf" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all">Download CV</a>
            <div className="flex gap-2">
              {PERSONAL_INFO.socials.map((s, i) => (
                <a key={i} href={s.link} className="p-4 rounded-full border border-slate-800 hover:border-blue-600 transition-all"><s.icon size={18} /></a>
              ))}
            </div>
          </div>
        </motion.div>
        <div className="md:w-2/5 relative">
          <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full" />
          <img src={gambarHero} className="relative rounded-3xl grayscale hover:grayscale-0 transition-all duration-1000 object-cover aspect-[4/5] shadow-2xl" alt="Profile" />
        </div>
      </section>

      {/* --- SERVICES (DESIGNABLE CARDS) --- */}
      <section id="services" className={`py-32 px-6 ${darkMode ? 'bg-[#0f0f0f]' : 'bg-slate-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => (
              <div key={i} className={`p-10 rounded-3xl border transition-all hover:scale-[1.02] ${
                darkMode ? 'bg-[#0a0a0a] border-slate-900 hover:border-blue-600' : 'bg-white border-slate-200'
              }`}>
                <div className="text-blue-600 mb-8"><s.icon size={40} strokeWidth={1.5} /></div>
                <h4 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>{s.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-8">{s.description}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag, j) => (
                    <span key={j} className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 bg-slate-100 dark:bg-slate-900 rounded-md text-slate-500">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE --- */}
      <section id="experience" className="py-32 px-6 max-w-4xl mx-auto">
        <h2 className="text-center text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mb-20">The Records</h2>
        <div className="space-y-16">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="group grid md:grid-cols-[1fr_2fr] gap-8 border-t border-slate-800 pt-10">
              <div className="text-sm font-bold text-slate-500">{exp.period}</div>
              <div className="space-y-4">
                <h4 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>{exp.role}</h4>
                <div className="text-sm font-medium text-blue-600 uppercase tracking-widest flex items-center gap-2">
                  <Briefcase size={14}/> {exp.company}
                </div>
                <ul className="space-y-3 pt-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-slate-500 leading-relaxed flex gap-3">
                      <ArrowUpRight size={14} className="text-blue-600 shrink-0 mt-1" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className={`py-32 px-6 ${darkMode ? 'bg-[#0f0f0f]' : 'bg-slate-50'}`}>
        <div className="max-w-4xl mx-auto p-12 rounded-[40px] border border-slate-800 bg-black text-center space-y-10 shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white">Let's start <br/> a conversation.</h2>
          <div className="flex flex-wrap justify-center gap-8 pt-6">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-bold border-b border-blue-600 pb-1 text-white hover:text-blue-600 transition-all">EMAIL ME</a>
            <a href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-sm font-bold border-b border-blue-600 pb-1 text-white hover:text-blue-600 transition-all">WHATSAPP</a>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center text-[10px] font-bold uppercase tracking-[0.5em] text-slate-500">
        © {new Date().getFullYear()} FIRMAN AZHARY — CREATING WITH PURPOSE.
      </footer>
    </div>
  );
}