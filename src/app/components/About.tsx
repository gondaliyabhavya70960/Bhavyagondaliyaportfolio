import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'motion/react';
import { Palette, Layers, Smartphone, Monitor, RefreshCw, Search, Eye, Settings, Gamepad, Bot } from 'lucide-react';

const SKILLS = [
  { icon: <Palette />, label: 'UI/UX Design' },
  { icon: <Layers />, label: 'Design Systems' },
  { icon: <Smartphone />, label: 'Mobile Design' },
  { icon: <Monitor />, label: 'Web Design' },
  { icon: <RefreshCw />, label: 'Prototyping' },
  { icon: <Search />, label: 'User Research' },
  { icon: <Eye />, label: 'Visual Design' },
  { icon: <Settings />, label: 'Interaction Design' },
  { icon: <Gamepad />, label: 'Game Design' },
  { icon: <Bot />, label: 'AI' },
];

const PROFILE_IMAGE_URL = "https://github.com/gondaliyabhavya70960/Portfolio/blob/main/image-5.png?raw=true";

export const About: React.FC = () => {
  return (
    <Section id="about" className="bg-[#0F172A]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold font-['Poppins'] text-[#F1F5F9] mb-2">About Me</h2>
        <div className="w-20 h-1 bg-[#3B82F6] mb-16 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative group z-10">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#3B82F6] to-[#06B6D4] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
            
            {/* Main Image Container */}
            <div className="relative w-[346px] h-[574px] rounded-2xl overflow-hidden border-2 border-[#334155] group-hover:border-[#3B82F6] transition-colors duration-300 bg-[#1E293B]">
              <img
                src={PROFILE_IMAGE_URL}
                alt="Bhavya Gondaliya"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-[50px] -left-[16px] w-12 h-12 border-t-2 border-l-2 border-[#3B82F6] rounded-tl-xl z-20"></div>
            
            {/* Stats Box Floating */}
            <div className="absolute top-[400px] right-[-40px] bg-[#1E293B] p-4 rounded-xl border border-[#334155] shadow-xl flex flex-col items-center justify-center z-30">
               <span className="text-[#3B82F6] font-bold text-2xl">6+</span>
               <span className="text-[#94A3B8] text-[10px] uppercase font-bold tracking-wider">Years Exp.</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-[#CBD5E1] leading-relaxed mb-6">
            With 6+ years in UI/UX, web, and graphic design, I'm adept at creating visually compelling and user-centric designs that leave a lasting impact. My strengths include information architecture, wireframing, prototyping, and user testing.
          </p>
          <p className="text-lg text-[#CBD5E1] leading-relaxed mb-8">
            I've successfully led projects from concept to launch, resulting in increased user engagement and satisfaction. I'm a lifelong learner, dedicated to staying on top of emerging design trends and technologies, and I'm eager to bring my passion for innovation to a team that values creative problem-solving and user-centered design.
          </p>

          <h3 className="text-xl font-semibold text-[#F1F5F9] mb-6">Skills & Competencies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.15)' }}
                style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                className="border border-[#334155] p-3 rounded-lg flex flex-col items-center justify-center text-center gap-2 cursor-default transition-colors duration-200"
              >
                <div className="text-[#3B82F6]">{React.cloneElement(skill.icon as React.ReactElement, { size: 24 })}</div>
                <span className="text-sm font-medium text-[#F1F5F9]">{skill.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <a href="#contact" className="text-lg font-semibold text-[#3B82F6] border-b-2 border-dashed border-[#3B82F6] pb-1 hover:text-[#2563EB] hover:border-[#2563EB] transition-colors">
              Let's create something amazing together!
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
