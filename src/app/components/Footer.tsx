import React, { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { ArrowUp, Linkedin, Twitter, Instagram, Github } from 'lucide-react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

// Using placeholders for Behance and Figma as they aren't in lucide-react default export easily
// Simulating them with text or generic icons for now, or just use generic globe
const SOCIALS = [
  { name: 'LinkedIn', icon: <Linkedin size={24} />, url: 'https://www.linkedin.com/in/bhavya-gondaliya-b1b388269/' },
  { name: 'Behance', icon: <span className="font-bold text-lg">Be</span>, url: 'https://gondaliyabhavya728fa.myportfolio.com' }, // Custom text icon for Behance
  { name: 'Figma', icon: <span className="font-bold text-lg">Fi</span>, url: 'https://www.figma.com/@Bhavya70960' }, // Custom text icon for Figma
  { name: 'GitHub', icon: <Github size={24} />, url: '#' },
];

export const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <footer className="bg-[#1A1F35] border-t-2 border-[#3B82F6] pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Column 1 */}
          <div>
            <h3 className="text-[#F1F5F9] text-lg font-bold mb-4 font-['Poppins']">Bhavya Gondaliya</h3>
            <p className="text-[#CBD5E1] text-sm leading-relaxed max-w-xs">
              UI/UX Designer | 6+ years experience | Building beautiful digital products
            </p>
            
            <div className="flex gap-4 mt-6">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 border border-[#334155] flex items-center justify-center text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white hover:-translate-y-1 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-[#F1F5F9] text-lg font-bold mb-4 font-['Poppins']">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {['Home', 'About', 'Experience', 'Work', 'Contact'].map((item) => (
                <ScrollLink
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="text-[#CBD5E1] hover:text-[#3B82F6] hover:translate-x-1 transition-all cursor-pointer text-sm w-fit"
                >
                  {item}
                </ScrollLink>
              ))}
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-[#F1F5F9] text-lg font-bold mb-4 font-['Poppins']">Resources</h3>
            <div className="flex flex-col gap-2">
              {['Design Blog', 'Portfolio Tips', 'Case Studies', 'Tools Recommendations'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[#CBD5E1] hover:text-[#3B82F6] hover:translate-x-1 transition-all text-sm w-fit"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#334155] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#94A3B8] text-xs">
            © {new Date().getFullYear()} Bhavya Gondaliya. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((link) => (
              <a key={link} href="#" className="text-[#94A3B8] hover:text-[#3B82F6] text-xs transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => scroll.scrollToTop()}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-[#3B82F6] text-white rounded-lg shadow-lg flex items-center justify-center z-50 transition-all duration-300 hover:bg-[#2563EB] hover:-translate-y-1 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to Top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};
