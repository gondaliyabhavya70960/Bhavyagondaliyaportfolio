import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  current?: boolean;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 1,
    company: 'Global Media Desai',
    role: 'UI-UX & Web Designer',
    duration: 'Jun 2023 - Present',
    location: '1 Year 7 Months',
    current: true,
    description: [
      'Designing software, websites and apps using Adobe Suit and Figma.'
    ],
  },
  {
    id: 2,
    company: 'Logicwind',
    role: 'UI-UX & Graphic Designer',
    duration: 'Feb 2023 - Jun 2023',
    location: '5 Months',
    description: [
      'Designing websites and apps using Adobe Suit and Figma.'
    ],
  },
  {
    id: 3,
    company: 'Vasundhara Vision',
    role: 'UI-UX & Web Designer',
    duration: 'Feb 2022 - Dec 2022',
    location: '11 Months',
    description: [
      'Designing website templates using Adobe XD and Figma is my specialty.'
    ],
  },
  {
    id: 4,
    company: 'Arth i-Soft',
    role: 'Game Designer',
    duration: 'Oct 2021 - May 2022',
    location: '8 Months',
    description: [
      'The work is remote and based on a freelance basis. In my role, I design games for children aged 2 to 7. I use Illustrator, Photoshop, Figma, and After Effects to create these games.'
    ],
  },
  {
    id: 5,
    company: 'Creative Design & Multimedia Institute',
    role: 'Trainee',
    duration: 'Sep 2018 - May 2019',
    location: '9 Months',
    description: [
      'This is where I train and work as a freelancer for another company. I learn Adobe Photoshop, XD, and Illustrator for design, and Dreamweaver and Web Builder for front-end websites with HTML, CSS, and JavaScript.'
    ],
  },
];

const EDUCATION = [
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'A.P.J Abdul Kalam University - 7.37 cgpa',
    year: '2016 - 2019',
  },
  {
    degree: 'Hsc Education',
    institution: 'Shree Gurukrupaa Vidya Sankul - 73.36 PR',
    year: '2014 - 2015',
  }
];

export const Experience: React.FC = () => {
  return (
    <Section id="experience" className="bg-[#1A1F35]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold font-['Poppins'] text-[#F1F5F9] mb-2">Professional Experience</h2>
        <div className="w-20 h-1 bg-[#3B82F6] mb-16 rounded-full"></div>
      </motion.div>

      <div className="relative">
        {/* Central Timeline Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#3B82F6] -translate-x-1/2" />

        <div className="space-y-12 md:space-y-0">
          {EXPERIENCES.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center justify-between md:mb-12 w-full ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Empty Half */}
                <div className="hidden md:block w-5/12" />

                {/* Center Point */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#3B82F6] border-[3px] border-[#0F172A] z-10 -translate-x-1/2 md:translate-x-[-50%] mt-6 md:mt-0 shadow-[0_0_0_4px_rgba(59,130,246,0.2)]" />

                {/* Content Card */}
                <div className="w-full md:w-5/12 pl-12 md:pl-0">
                  <div className="relative bg-[#3B82F6]/10 border border-[#334155] p-6 md:p-8 rounded-xl hover:border-[#3B82F6] hover:bg-[#3B82F6]/15 transition-all duration-300 group">
                    {/* Mobile Timeline Line connection */}
                    <div className="md:hidden absolute left-[-29px] top-8 w-6 h-0.5 bg-[#3B82F6]" />
                    
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-[#F1F5F9] mb-1">{exp.company}</h4>
                        <p className="text-[#3B82F6] font-semibold">{exp.role}</p>
                      </div>
                      <div className="flex flex-col items-end">
                        {exp.current ? (
                          <span className="px-3 py-1 text-xs font-bold text-[#10B981] bg-[#10B981]/20 border border-[#10B981] rounded-full mb-1">
                            Current
                          </span>
                        ) : null}
                        <span className="text-sm text-[#94A3B8]">{exp.duration}</span>
                        <span className="text-xs text-[#94A3B8] mt-1">{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-[#CBD5E1] text-sm leading-relaxed flex items-start gap-2">
                          <span className="mt-1.5 min-w-[6px] w-[6px] h-[6px] rounded-full bg-[#3B82F6]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Mobile Timeline Vertical Line */}
        <div className="md:hidden absolute left-4 top-2 bottom-0 w-0.5 bg-[#3B82F6] -translate-x-1/2" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px bg-[#334155] flex-1 max-w-[100px]"></div>
          <h3 className="text-3xl font-bold font-['Poppins'] text-[#F1F5F9] flex items-center gap-3">
            <GraduationCap className="text-[#3B82F6]" size={32} /> Education
          </h3>
          <div className="h-px bg-[#334155] flex-1 max-w-[100px]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="bg-[#1E293B] border border-[#334155] p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#3B82F6]/5 rounded-bl-full -mr-4 -mt-4"></div>
              <h4 className="text-lg font-bold text-[#F1F5F9] mb-2">{edu.degree}</h4>
              <p className="text-[#3B82F6] font-medium mb-1">{edu.institution}</p>
              <span className="text-sm text-[#94A3B8] block">{edu.year}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};
