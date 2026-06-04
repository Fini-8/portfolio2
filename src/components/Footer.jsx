import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/syedfiras", label: "GitHub", color: "#00E5FF" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/syedfiras7", label: "LinkedIn", color: "#0066FF" },
    { icon: FaEnvelope, href: "mailto:syedfiras06@gmail.com", label: "Email", color: "#00E5FF" },
  ];

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Showcase', href: '#mobile-showcase' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative py-16 overflow-hidden border-t border-slate-900 bg-[#050505] font-geist">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 hud-grid opacity-10 pointer-events-none" />

      {/* Subtle Glows */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0066FF]/2 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#00E5FF]/2 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand/HQ description */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded border border-[#00E5FF]/30 bg-[#111111] flex items-center justify-center text-[9px] font-mono text-[#00E5FF] font-bold">
                SF
              </div>
              <h3 className="text-lg font-display font-bold text-white tracking-wider">
                FIRAS<span className="text-[#00E5FF]">//HQ</span>
              </h3>
            </div>
            
            <p className="text-slate-500 text-xs leading-relaxed max-w-xs">
              Futuristic software headquarters launching premium web experiences and cross-platform mobile systems.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded border border-slate-900 bg-[#111111]/40 flex items-center justify-center text-slate-500 hover:text-white hover:border-slate-700 transition-colors duration-300"
                  title={social.label}
                >
                  <social.icon size={12} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#00E5FF]">
              SYS_NAVIGATION
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector(item.href);
                      if (target) {
                        window.scrollTo({
                          top: item.href === '#home' ? 0 : target.offsetTop - 80,
                          behavior: 'smooth'
                        });
                      }
                    }}
                    className="text-slate-500 hover:text-[#00E5FF] transition-colors font-mono uppercase text-[10px]"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack Arsenal */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0066FF]">
              SYS_TECH_ARSENAL
            </h3>
            <ul className="space-y-2 text-xs font-mono text-slate-500">
              {['REACT / NEXTJS', 'REACT NATIVE / IONIC', 'NODEJS / EXPRESSJS', 'SUPABASE DB', 'OPENAI API'].map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#00E5FF]/40" />
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Comms telemetry */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#00E5FF]">
              HQ_TELEMETRY
            </h3>
            <div className="space-y-3 font-mono text-[10px]">
              <div>
                <p className="text-slate-600 uppercase mb-0.5">UPLINK_LOCATOR</p>
                <p className="text-slate-300 font-bold">BANGALORE, INDIA</p>
              </div>
              <div>
                <p className="text-slate-600 uppercase mb-0.5">SYSTEM_LATENCY</p>
                <p className="text-[#27C93F] font-bold">UPLINK_STABLE // 100%</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom copyright details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] text-slate-600"
        >
          <p>
            © {new Date().getFullYear()} FIRAS.DEV — SECURE SYSTEM HOST UPLINK v3.1
          </p>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse" />
              <span>HQ_UPLINK: ONLINE</span>
            </div>
            
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-4 py-1.5 rounded border border-slate-900 text-slate-400 hover:border-[#00E5FF] hover:text-[#00E5FF] transition-all duration-300 uppercase select-none cursor-pointer"
            >
              UPLINK_TOP ↑
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;