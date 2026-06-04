import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const scrollDirectionRef = useRef('up');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Showcase', href: '#mobile-showcase' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Determine direction and hide/show navbar
      if (currentY > lastScrollYRef.current && currentY > 100) {
        setIsVisible(false);
        scrollDirectionRef.current = 'down';
      } else {
        setIsVisible(true);
        scrollDirectionRef.current = 'up';
      }

      setScrolled(currentY > 50);
      lastScrollYRef.current = currentY;

      // Scroll spy logic
      const sections = navItems.map(item => ({
        id: item.href.substring(1),
        element: document.getElementById(item.href.substring(1))
      }));

      let currentSection = '';
      const scrollPos = window.scrollY + 180;

      for (const sec of sections) {
        if (sec.element) {
          const top = sec.element.offsetTop;
          const bottom = top + sec.element.offsetHeight;

          if (scrollPos >= top && scrollPos < bottom) {
            currentSection = sec.id;
            break;
          }
        }
      }

      if (window.scrollY < 100) currentSection = 'home';

      if (currentSection) {
        const active = navItems.find(i => i.href.substring(1) === currentSection);
        if (active) setActiveItem(active.name);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href, name) => {
    e.preventDefault();
    setActiveItem(name);
    setMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: href === '#home' ? 0 : offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ 
          y: isVisible ? 0 : -120,
          transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-3.5 bg-[#050505]/80 backdrop-blur-xl border-b border-[#00E5FF]/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Futuristic HQ Logo */}
          <motion.a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home', 'Home')}
            className="group relative flex items-center gap-2.5 cursor-pointer font-geist"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <div className="relative w-7 h-7 flex items-center justify-center rounded border border-[#00E5FF]/40 bg-[#111111] overflow-hidden">
              {/* Spinning grid details inside logo icon */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.2)_1px,transparent_1px)] bg-[size:6px_6px]" />
              <div className="text-[10px] font-mono text-[#00E5FF] z-10 font-bold">SF</div>
            </div>
            <span className="text-lg font-display font-bold tracking-widest text-[#F8FAFC] group-hover:text-white">
              FIRAS<span className="text-[#00E5FF] text-glow-cyan">//HQ</span>
            </span>
          </motion.a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-8">
            <div className="flex items-center gap-1.5">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.name)}
                  className="relative px-3.5 py-2 text-xs font-mono font-medium rounded uppercase tracking-wider cursor-pointer"
                  style={{ 
                    color: activeItem === item.name ? '#00E5FF' : '#94A3B8'
                  }}
                  whileHover={{ color: '#00E5FF' }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeItem === item.name && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]"
                      transition={{ 
                        type: "spring", 
                        stiffness: 500, 
                        damping: 25,
                        mass: 0.4
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </motion.a>
              ))}
            </div>

            <motion.a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact', 'Contact')}
              className="px-4 py-2 rounded border border-[#0066FF] bg-[#0066FF]/10 text-xs font-mono font-bold uppercase tracking-wider text-white hover:bg-[#0066FF] hover:shadow-[0_0_15px_rgba(0,102,255,0.4)] transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              SECURE_CHANNEL
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <motion.button 
            className="xl:hidden text-slate-300 hover:text-white transition-colors relative z-50 p-1"
            onClick={() => setMobileMenuOpen(true)}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
          >
            <Menu size={24} />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Fullscreen Overlay */}
      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed inset-0 z-[60] bg-[#050505] flex flex-col items-center justify-center p-6 scanline-overlay"
          >
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 hud-grid opacity-20 pointer-events-none" />

            <motion.button 
              className="absolute top-6 right-6 text-slate-400 hover:text-white p-2"
              onClick={() => setMobileMenuOpen(false)}
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <X size={28} />
            </motion.button>
            
            <div className="flex flex-col items-center space-y-6 text-center font-geist relative z-10">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  onClick={(e) => handleNavClick(e, item.href, item.name)}
                  className="relative group cursor-pointer block py-1"
                >
                  <span className={`text-xl font-display font-bold uppercase tracking-widest transition-colors duration-300 ${activeItem === item.name ? 'text-[#00E5FF] text-glow-cyan' : 'text-slate-400 hover:text-white'}`}>
                    {item.name}
                  </span>
                  {activeItem === item.name && (
                    <motion.div 
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]"
                      layoutId="mobileIndicator"
                      transition={{ type: "spring", stiffness: 500, damping: 25 }}
                    />
                  )}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onClick={(e) => handleNavClick(e, '#contact', 'Contact')}
                className="mt-8 px-8 py-3 rounded border border-[#00E5FF] bg-[#00E5FF]/10 text-sm font-mono font-bold uppercase tracking-wider text-[#00E5FF] hover:bg-[#00E5FF] hover:text-black transition-all cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20, delay: navItems.length * 0.05 + 0.05 }}
              >
                OPEN_UPLINK
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;