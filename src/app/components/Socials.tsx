import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'motion/react';
import { Linkedin, Github, Twitter, Instagram, Mail, Phone, MapPin, Figma } from 'lucide-react';

const SOCIAL_LINKS = [
  { name: 'LinkedIn', icon: <Linkedin size={24} />, url: 'https://www.linkedin.com/in/bhavya-gondaliya-b1b388269/' },
  { name: 'Behance', icon: <span className="font-bold text-lg">Be</span>, url: 'https://gondaliyabhavya728fa.myportfolio.com' },
  { name: 'Figma', icon: <Figma size={24} />, url: 'https://www.figma.com/@Bhavya70960' },
];

export const Socials: React.FC = () => {
  return (
    <Section id="connect" className="bg-[#0F172A] border-t border-[#334155]">
      <div className="flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-[#F1F5F9] mb-8"
        >
          Let's Connect
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {SOCIAL_LINKS.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -4, backgroundColor: 'rgba(59, 130, 246, 0.25)', borderColor: '#3B82F6' }}
              style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)' }}
              className="w-12 h-12 flex items-center justify-center border border-[#334155] rounded-lg text-[#3B82F6] shadow-lg shadow-blue-500/10 transition-all duration-200"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        <div className="w-full h-px bg-[#334155] my-10" />

        <div className="flex flex-wrap justify-center gap-10">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Mail size={20} className="text-[#3B82F6]" />
            <span className="text-[#CBD5E1] text-sm group-hover:text-[#3B82F6] transition-colors">gondaliyabhavya70960@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 group cursor-pointer">
            <Phone size={20} className="text-[#3B82F6]" />
            <span className="text-[#CBD5E1] text-sm group-hover:text-[#3B82F6] transition-colors">+91 70960 36250</span>
          </div>
          <div className="flex items-center gap-2 group cursor-pointer">
            <MapPin size={20} className="text-[#3B82F6]" />
            <span className="text-[#CBD5E1] text-sm group-hover:text-[#3B82F6] transition-colors">Surat, Gujarat, India</span>
          </div>
        </div>
      </div>
    </Section>
  );
};
