import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'motion/react';

export const Network: React.FC = () => {
  return (
    <Section id="network" className="bg-[#0F172A] py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold font-['Poppins'] text-[#F1F5F9] mb-8 text-center">The Network</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.a
            href="https://www.behance.net/gondaliyabhavya"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="bg-[#1E293B] p-6 rounded-xl border border-[#334155] hover:border-[#3B82F6] flex items-center gap-4 group transition-colors"
          >
            <div className="w-12 h-12 bg-[#0057FF]/10 rounded-full flex items-center justify-center text-[#0057FF] group-hover:bg-[#0057FF] group-hover:text-white transition-colors font-bold text-xl">
              Be
            </div>
            <div>
              <h3 className="text-[#F1F5F9] font-bold">Behance</h3>
              <p className="text-sm text-[#94A3B8]">View Portfolio</p>
            </div>
          </motion.a>

          <motion.a
            href="https://dribbble.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="bg-[#1E293B] p-6 rounded-xl border border-[#334155] hover:border-[#EA4C89] flex items-center gap-4 group transition-colors"
          >
            <div className="w-12 h-12 bg-[#EA4C89]/10 rounded-full flex items-center justify-center text-[#EA4C89] group-hover:bg-[#EA4C89] group-hover:text-white transition-colors font-bold text-xl">
              Dr
            </div>
            <div>
              <h3 className="text-[#F1F5F9] font-bold">Dribbble</h3>
              <p className="text-sm text-[#94A3B8]">View Shots</p>
            </div>
          </motion.a>

          <motion.a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="bg-[#1E293B] p-6 rounded-xl border border-[#334155] hover:border-[#1DA1F2] flex items-center gap-4 group transition-colors"
          >
            <div className="w-12 h-12 bg-[#1DA1F2]/10 rounded-full flex items-center justify-center text-[#1DA1F2] group-hover:bg-[#1DA1F2] group-hover:text-white transition-colors font-bold text-xl">
              Li
            </div>
            <div>
              <h3 className="text-[#F1F5F9] font-bold">LinkedIn</h3>
              <p className="text-sm text-[#94A3B8]">Connect</p>
            </div>
          </motion.a>
        </div>
      </motion.div>
    </Section>
  );
};
