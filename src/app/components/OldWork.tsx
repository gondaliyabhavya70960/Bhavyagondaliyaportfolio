import React, { useState } from 'react';
import { Section } from './ui/Section';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const OLD_PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    category: 'Web Design',
    type: 'figma',
    description: 'Modernized dashboard UI for online retail platform',
    image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 2,
    title: 'Health Tracking App',
    category: 'Mobile App',
    type: 'behance',
    description: 'iOS/Android fitness and wellness tracking application',
    image: 'https://images.unsplash.com/photo-1663153203139-40c3caf54a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 3,
    title: 'Travel Booking Site',
    category: 'Web Design',
    type: 'figma',
    description: 'Responsive design for travel and hotel booking platform',
    image: 'https://images.unsplash.com/photo-1673515336319-20a3ea59c228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 4,
    title: 'Mobile Game UI',
    category: 'Game Design',
    type: 'behance',
    description: 'Interactive UI for educational mobile game',
    image: 'https://images.unsplash.com/photo-1586763749650-70d7996310d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 5,
    title: 'SaaS Platform System',
    category: 'Design System',
    type: 'figma',
    description: 'Comprehensive component library for B2B platform',
    image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 6,
    title: 'Brand Identity',
    category: 'Branding',
    type: 'behance',
    description: 'Complete visual identity and guidelines',
    image: 'https://images.unsplash.com/photo-1680986070892-1b64bfe03338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 7,
    title: 'Minimalist Portfolio',
    category: 'Web Design',
    type: 'behance',
    description: 'Clean and minimal portfolio template for creatives',
    image: 'https://images.unsplash.com/photo-1557752370-a545ea73b64f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 8,
    title: 'Mobile Protoyping Kit',
    category: 'Prototyping',
    type: 'figma',
    description: 'Rapid prototyping kit for mobile applications',
    image: 'https://images.unsplash.com/photo-1582406592664-24b0c8705265?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 9,
    title: 'Product Landing Page',
    category: 'Web Design',
    type: 'behance',
    description: 'High-conversion landing page for SaaS product',
    image: 'https://images.unsplash.com/photo-1667771428712-7056dbee6317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 10,
    title: 'Creative Studio',
    category: 'Web Design',
    type: 'figma',
    description: 'Immersive website design for a digital agency',
    image: 'https://images.unsplash.com/photo-1556894181-cb8e4ccca5d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 11,
    title: 'Typography Poster Series',
    category: 'Graphic Design',
    type: 'behance',
    description: 'Experimental typography and layout design',
    image: 'https://images.unsplash.com/photo-1766031460453-89471b652a16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 12,
    title: 'Design System UI Kit',
    category: 'UI Resources',
    type: 'figma',
    description: 'Complete UI kit and component library',
    image: 'https://images.unsplash.com/photo-1683564766990-74ab5353d9c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
];

type CategoryType = 'all' | 'figma' | 'behance';

export const OldWork: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const filteredProjects = activeCategory === 'all' 
    ? OLD_PROJECTS 
    : OLD_PROJECTS.filter(project => project.type === activeCategory);

  return (
    <Section id="old-work" className="bg-[#1A1F35]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold font-['Poppins'] text-[#F1F5F9] mb-2">Earlier Works & Archived Projects</h2>
        <p className="text-[#94A3B8] text-lg mb-8">Past projects that shaped my design journey</p>
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          {(['all', 'figma', 'behance'] as const).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 capitalize ${
                activeCategory === category
                  ? 'bg-[#3B82F6] border-[#3B82F6] text-white'
                  : 'bg-transparent border-[#334155] text-[#94A3B8] hover:border-[#3B82F6] hover:text-[#3B82F6]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="group relative h-[300px] rounded-xl overflow-hidden border border-[#334155] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex justify-between items-end mb-1">
                  <span className="text-[#3B82F6] text-xs font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#3B82F6]/20 text-[#3B82F6] text-[10px] uppercase font-bold border border-[#3B82F6]/30">
                    {project.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-[#F1F5F9] mb-2">{project.title}</h3>
                <p className="text-[#CBD5E1] text-sm mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex items-center text-[#3B82F6] text-sm font-semibold gap-1 group-hover:gap-2 transition-all">
                  View Project <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
};
