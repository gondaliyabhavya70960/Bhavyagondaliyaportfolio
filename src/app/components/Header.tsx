import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from './ui/Button';
import { Link as ScrollLink } from 'react-scroll';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Work', to: 'work' },
  { name: 'Contact', to: 'contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'h-[70px] bg-[#0F172A]/90 backdrop-blur-md border-b border-[#334155]'
            : 'h-[80px] bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 h-full flex items-center justify-between">
          {/* Logo */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer group"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#14B8A6] flex items-center justify-center text-white font-bold font-['Poppins']">
                BG
              </div>
              <span className="text-xl font-bold text-white font-['Poppins'] hidden sm:block">
                Bhavya
              </span>
            </div>
          </ScrollLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="text-[#3B82F6] font-semibold after:w-full"
                className="relative text-[#CBD5E1] hover:text-[#3B82F6] text-sm font-medium transition-colors cursor-pointer py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#3B82F6] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </ScrollLink>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button
              variant="primary"
              size="sm"
              className="hidden sm:flex"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Download CV
            </Button>

            <button
              className="md:hidden text-[#F1F5F9] p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0F172A] pt-24 px-5 md:hidden flex flex-col items-center gap-8"
          >
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-semibold text-[#F1F5F9] hover:text-[#3B82F6] cursor-pointer"
              >
                {link.name}
              </ScrollLink>
            ))}
            <Button
              variant="primary"
              size="lg"
              className="mt-4 w-full max-w-xs"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Download CV
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
