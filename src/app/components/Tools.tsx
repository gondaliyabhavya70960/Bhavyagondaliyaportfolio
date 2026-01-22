import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'motion/react';
import { Figma, PenTool, Image as ImageIcon, Box, Code, Layers, Layout, Video, Bot } from 'lucide-react';

const TOOLS = [
  { name: 'Figma', level: 'Expert', icon: <Figma />, color: 'text-purple-400' },
  { name: 'Photoshop', level: 'Proficient', icon: <ImageIcon />, color: 'text-blue-500' },
  { name: 'Adobe XD', level: 'Expert', icon: <PenTool />, color: 'text-pink-500' },
  { name: 'Dreamweaver', level: 'Proficient', icon: <Code />, color: 'text-green-500' },
  { name: 'Illustrator', level: 'Proficient', icon: <PenTool />, color: 'text-orange-500' },
  { name: 'After Effects', level: 'Proficient', icon: <Video />, color: 'text-purple-600' },
  { name: 'UI/UX Design', level: 'Expert', icon: <Layout />, color: 'text-blue-400' },
  { name: 'AI Tools', level: 'Proficient', icon: <Bot />, color: 'text-emerald-400' },
];

export const Tools: React.FC = () => {
  return (
    <Section id="tools" className="bg-[#0F172A]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold font-['Poppins'] text-[#F1F5F9] mb-2">Tools & Technologies</h2>
        <div className="w-20 h-1 bg-[#3B82F6] mb-16 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {TOOLS.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.05, borderColor: '#3B82F6', backgroundColor: 'rgba(59, 130, 246, 0.15)' }}
            style={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
            className="border border-[#334155] p-8 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-300 group"
          >
            <div className={`p-4 rounded-full bg-[#1E293B] mb-4 ${tool.color} group-hover:bg-[#0F172A] transition-colors`}>
              {React.cloneElement(tool.icon as React.ReactElement, { size: 32 })}
            </div>
            <h4 className="text-lg font-semibold text-[#F1F5F9]">{tool.name}</h4>
            <span className="text-sm text-[#94A3B8] mt-1">{tool.level}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
