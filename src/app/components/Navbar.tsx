import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'motion/react';
import clsx from 'clsx';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Work', to: 'work' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-neutral-surface-medium/0',
        isScrolled
          ? 'bg-neutral-bg/90 backdrop-blur-md h-[70px] border-neutral-surface-medium'
          : 'bg-transparent h-[80px]'
      )}
    >
      <div className="max-w-[1200px] mx-auto px-5 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-blue to-accent-teal flex items-center justify-center text-white font-heading font-bold text-xl group-hover:scale-105 transition-transform">
            BG
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-primary-blue after:w-full"
                className="relative text-sm font-medium text-text-secondary hover:text-primary-blue cursor-pointer transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary-blue after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 bg-primary-blue text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-primary-blue-hover transition-all shadow-[0_8px_16px_rgba(59,130,246,0.3)] hover:-translate-y-0.5"
          >
            Download CV
            <Download size={16} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[70px] left-0 right-0 bg-neutral-bg border-b border-neutral-surface-medium md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="text-text-secondary text-lg font-medium py-2 hover:text-primary-blue"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/cv.pdf"
                className="mt-4 flex items-centerjustify-center gap-2 bg-primary-blue text-white py-3 rounded-md text-center font-semibold"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
