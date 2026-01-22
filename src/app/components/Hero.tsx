import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { ArrowRight, Download } from 'lucide-react';
import CountUp from 'react-countup';
import { Link as ScrollLink } from 'react-scroll';

// Imported from Figma
const HERO_IMAGE_URL = "figma:asset/dd3aa5fe7ac44ae4220d5d1d4ea8f99561b471ee.png";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#1E293B]"
    >
      {/* Background Animated Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[10%] w-64 h-64 bg-[#3B82F6] rounded-full blur-[100px] z-0 pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, 20, 0], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[10%] w-80 h-80 bg-[#14B8A6] rounded-full blur-[120px] z-0 pointer-events-none"
      />

      <div className="max-w-[1200px] w-full mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-['Poppins'] text-[#F1F5F9] leading-tight mb-4">
              Hi, I'm Bhavya 👋 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#14B8A6]">
                UI/UX & Web Designer
              </span>{' '}
              Crafting Digital Experiences
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[#CBD5E1] mb-8 max-w-2xl leading-relaxed"
          >
            6+ years of expertise in designing intuitive, visually stunning digital products. 
            Specializing in web & app design with a focus on user-centered solutions.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 md:gap-8 w-full max-w-lg mb-10"
          >
            {[
              { number: 6, suffix: '+', label: 'Years Experience' },
              { number: 50, suffix: '+', label: 'Projects Completed' },
              { number: 29, suffix: '', label: 'Appreciations' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-[#3B82F6]/10 border border-[#334155] p-4 rounded-lg flex flex-col items-center justify-center text-center hover:border-[#3B82F6] transition-colors duration-300"
              >
                <span className="text-2xl md:text-3xl font-bold text-[#3B82F6] mb-1">
                  <CountUp end={stat.number} duration={2.5} />{stat.suffix}
                </span>
                <span className="text-xs md:text-sm text-[#CBD5E1]">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <ScrollLink to="work" smooth={true} duration={500} offset={-50}>
              <Button variant="primary" size="lg" className="w-full sm:w-auto" icon={<ArrowRight size={18} />}>
                View My Work
              </Button>
            </ScrollLink>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto" 
              icon={<Download size={18} />}
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Download CV
            </Button>
          </motion.div>
        </div>

        {/* Right Content - Visual/Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-[400px] h-[527px]"
          >
            {/* Background Gradient Blob matching Figma */}
            <div className="absolute top-[37px] left-[25px] w-[400px] h-[527px] bg-gradient-to-b from-[#3B82F6] to-[#14B8A6] opacity-50 blur-[40px] rounded-[16px]"></div>
            
            {/* Main Image Container */}
            <div className="absolute top-[37px] left-[25px] w-[400px] h-[527px] rounded-[16px] overflow-hidden border border-[#334155]/50 shadow-2xl">
                <img 
                  src={HERO_IMAGE_URL} 
                  alt="Design Abstract" 
                  className="w-full h-full object-cover scale-[1.27] -translate-x-[13%] -translate-y-[16%]"
                />
            </div>

            {/* Floating Elements (Decorative) */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-[20px] bg-[#1E293B] p-3 pl-4 pr-6 rounded-xl border border-[#334155] shadow-xl flex items-center gap-3 z-20"
            >
               <div className="w-10 h-10 rounded-full bg-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6]">
                <span className="font-bold">Ui</span>
              </div>
              <div>
                <div className="text-xs text-[#94A3B8]">Role</div>
                <div className="text-sm font-semibold text-[#F1F5F9]">Visual Designer</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 left-0 bg-[#1E293B] p-3 pl-4 pr-6 rounded-xl border border-[#334155] shadow-xl flex items-center gap-3 z-20"
            >
               <div className="w-10 h-10 rounded-full bg-[#10B981]/20 flex items-center justify-center text-[#10B981]">
                <span className="font-bold">Ux</span>
              </div>
              <div>
                <div className="text-xs text-[#94A3B8]">Focus</div>
                <div className="text-sm font-semibold text-[#F1F5F9]">User Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
