import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Github, Linkedin, Instagram, Moon, Sun, Download, 
  ExternalLink, Send, Menu, X, ChevronRight, 
  Mail, MapPin, Phone // <-- Ini yang tadi kurang
} from "lucide-react";
import { PERSONAL_INFO, SKILLS, EXPERIENCE, PROJECTS } from "./data";
import  gambarHero  from './assets/background-hero.jpeg';

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Toggle Theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Handle Contact Form (WhatsApp)
  const handleContact = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    const text = `*New Inquiry from Portfolio*%0A` +
      `👤 Name: ${data.name}%0A` +
      `📧 Email: ${data.email}%0A` +
      `💬 Message: ${data.message}`;
      
    window.open(`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50" style={{ scaleX }} />

      {/* --- NAVIGATION --- */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${darkMode ? 'bg-slate-900/80' : 'bg-white/80'} backdrop-blur-md border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            FA.
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Experience', 'Portfolio', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-500 transition-colors text-sm font-medium">
                {item}
              </a>
            ))}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-600" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-600" />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="md:hidden border-t dark:border-slate-800 bg-inherit px-6 py-4 space-y-4"
          >
            {['Home', 'About', 'Experience', 'Portfolio', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="block py-2 font-medium">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="md:w-1/2 space-y-6"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm font-semibold mb-4 border border-blue-500/20">
            Available for Freelance & Teaching
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-lg">
            {PERSONAL_INFO.role}. {PERSONAL_INFO.description}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href={PERSONAL_INFO.cvLink} 
              download 
              className="flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-500/30"
            >
              <Download size={18} /> Download CV
            </a>
            <div className="flex gap-4 items-center px-4">
              {PERSONAL_INFO.socials.map((social, index) => (
                <a 
                  key={index} 
                  href={social.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 rounded-full border border-slate-300 dark:border-slate-700 hover:border-blue-500 hover:text-blue-500 transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center mt-12 md:mt-0 relative"
        >
          {/* Glowing blobs background */}
          <div className="absolute top-0 right-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl -z-10 animate-pulse" />
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl -z-10" />
          
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <img 
              src={gambarHero}
              alt="Profile" 
              className="w-full h-full object-cover rounded-3xl rotate-3 border-4 border-slate-200 dark:border-slate-800 shadow-2xl hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </section>

      {/* --- ABOUT & SKILLS --- */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="w-12 h-1 bg-blue-500 rounded-full"></span>
              About Me
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-lg">
              I am a student at <span className="text-blue-500 font-semibold">Politeknik IDN</span> with a dual passion for building software and sharing knowledge. My journey involves not just mastering the MERN stack and Laravel, but also breaking down these concepts for my students.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Currently, I am deepening my expertise in scalable web apps while working towards a career in Japan's tech industry.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/50 border dark:border-slate-700">
                <h3 className="font-bold text-2xl mb-1 text-blue-500">3+</h3>
                <p className="text-sm text-slate-500">Years Coding</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/50 border dark:border-slate-700">
                <h3 className="font-bold text-2xl mb-1 text-purple-500">100+</h3>
                <p className="text-sm text-slate-500">Students Taught</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
             className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">Technical Proficiency</h3>
            {SKILLS.map((skill, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <div className="flex justify-between mb-2 text-sm font-medium">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-3 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={`h-full ${skill.color}`} 
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- EXPERIENCE --- */}
      <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Path</h2>
          <p className="text-slate-500">My professional journey in education and development.</p>
        </motion.div>

        <div className="space-y-12">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line for Desktop */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-700 transform -translate-x-1/2"></div>
              
              <div className={`md:flex items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-[45%] mb-4 md:mb-0">
                  <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 shadow-lg border border-slate-100 dark:border-slate-700 hover:border-blue-500/50 transition-colors">
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-500 uppercase bg-blue-500/10 rounded-full">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <h4 className="text-md font-medium text-slate-500 mb-4">{exp.company}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-[50%] top-6 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-50 dark:border-slate-900 transform md:-translate-x-1/2 z-10"></div>
                
                <div className="md:w-[45%]"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PORTFOLIO --- */}
      <section id="portfolio" className="py-20 px-6 max-w-6xl mx-auto bg-slate-100/50 dark:bg-slate-800/30 rounded-3xl my-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end justify-center pb-4">
                  <span className="text-white font-medium flex items-center gap-2">View Project <ChevronRight size={16}/></span>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-1 text-xs rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500 hover:underline"
                >
                  Visit Website <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-20 px-6 max-w-5xl mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 dark:border-slate-700"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                Have a project in mind or want to discuss the latest in web tech? Feel free to reach out. I'm always open to new opportunities.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 text-blue-500 rounded-full">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-sm text-slate-500">{PERSONAL_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-500/10 text-purple-500 rounded-full">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-sm text-slate-500">{PERSONAL_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-pink-500/10 text-pink-500 rounded-full">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-sm text-slate-500">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleContact} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input required name="name" type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input required name="email" type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea required name="message" rows="4" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/40 transition-all transform hover:-translate-y-1 flex justify-center items-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center text-slate-500 dark:text-slate-600 border-t dark:border-slate-800">
        <p>© {new Date().getFullYear()} Firman Azhary. Crafted with React & Tailwind.</p>
      </footer>
    </div>
  );
}