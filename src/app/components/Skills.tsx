import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Soft Skills',
    description: 'Personal attributes that enable effective interaction',
    skills: [
      { name: 'Team work', rating: 5 },
      { name: 'Communication', rating: 5 },
      { name: 'Creativity', rating: 5 },
      { name: 'Organization', rating: 3 },
      { name: 'Management', rating: 4 },
      { name: 'Presentation', rating: 4 },
    ]
  },
  {
    title: 'Interests / Hobbies',
    description: 'Activities I enjoy in my free time',
    skills: [
      { name: 'Art & Design', rating: 0 },
      { name: 'Music', rating: 0 },
      { name: 'Travel', rating: 0 },
      { name: 'Yoga', rating: 0 },
    ]
  }
];

export const Skills: React.FC = () => {
  return (
    <Section id="skills" className="bg-[#1A1F35]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold font-['Poppins'] text-[#F1F5F9] mb-2">Skills & Expertise</h2>
        <div className="w-20 h-1 bg-[#3B82F6] mb-16 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {SKILL_CATEGORIES.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-semibold text-[#F1F5F9] mb-2">{category.title}</h3>
            <p className="text-sm text-[#CBD5E1] mb-6">{category.description}</p>
            
            <div className="flex flex-col gap-4">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center justify-between bg-[#3B82F6]/5 p-3 rounded-lg border border-[#334155]">
                  <span className="text-[#F1F5F9] font-medium">{skill.name}</span>
                  {skill.rating > 0 && (
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < skill.rating ? "fill-[#3B82F6] text-[#3B82F6]" : "fill-transparent text-[#334155]"}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
