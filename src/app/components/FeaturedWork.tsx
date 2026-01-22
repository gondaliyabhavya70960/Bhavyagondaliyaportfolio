import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/Button';

const FEATURED_PROJECTS = [
  {
    id: '01',
    title: 'Fintech Dashboard Design',
    category: 'Web Design',
    description: 'A comprehensive financial dashboard for analyzing crypto assets and stock markets. Focused on data visualization and real-time updates.',
    metrics: ['40% | Faster Workflow', '2x | User Retention', '5 | Awards Won'],
    details: {
      Client: 'FinCorp',
      Duration: '3 Months',
      Tools: 'Figma, React',
      Role: 'Lead Designer',
    },
    image: 'figma:asset/9deec01ca6dbc24666c85a2059eaf40d9c9e698b.png',
  },
  {
    id: '02',
    title: 'E-Learning Platform UI',
    category: 'Web Platform',
    description: 'An interactive learning management system designed to make online education engaging and accessible for students worldwide.',
    metrics: ['85% | Completion Rate', '15k+ | Active Users', '4.8 | App Rating'],
    details: {
      Client: 'EduTech Inc',
      Duration: '4 Months',
      Tools: 'Adobe XD, ProtoPie',
      Role: 'UI/UX Designer',
    },
    image: 'figma:asset/ee52b5976b59c35ec25241a445ecbb5aa2b01e7c.png',
  },
  {
    id: '03',
    title: 'Real Estate Mobile App',
    category: 'Mobile App',
    description: 'A modern property finder application with AR viewing capabilities and seamless agent communication features.',
    metrics: ['30% | Sales Increase', '1M+ | Downloads', '#1 | Category Rank'],
    details: {
      Client: 'PropEstate',
      Duration: '6 Months',
      Tools: 'Figma, Swift',
      Role: 'Product Designer',
    },
    image: 'figma:asset/57777f1b8bbc6d59a48ce207d221d5cd7bc1c052.png',
  },
  {
    id: '04',
    title: 'AI Banking Interface',
    category: 'Mobile App',
    description: 'Next-gen banking application integrating AI for personalized financial insights and automated savings goals.',
    metrics: ['50% | Engagement', '4.9 | App Store', '2M+ | Transacted'],
    details: {
      Client: 'NeoBank',
      Duration: '5 Months',
      Tools: 'Figma, AE',
      Role: 'Lead UI Designer',
    },
    image: 'figma:asset/52063ca48a04b29b2782193ac3ceb633673f0871.png',
  },
  {
    id: '05',
    title: 'Telemedicine Dashboard',
    category: 'Web App',
    description: 'A clean, intuitive dashboard for healthcare providers to manage patient records, appointments, and tele-consultations.',
    metrics: ['30% | Time Saved', '99% | Uptime', 'HIPAA | Compliant'],
    details: {
      Client: 'HealthPlus',
      Duration: '4 Months',
      Tools: 'Sketch, React',
      Role: 'UX Researcher',
    },
    image: 'figma:asset/30b340e9ac1f275b01dcc1423ca75169302ab921.png',
  },
  {
    id: '06',
    title: 'Social Connect App',
    category: 'Mobile App',
    description: 'A vibrant social networking platform focused on connecting professionals through shared interests and events.',
    metrics: ['10k | Daily Active', '4.7 | Rating', 'Global | Reach'],
    details: {
      Client: 'ConnectMe',
      Duration: '3 Months',
      Tools: 'Figma, Framer',
      Role: 'UI Designer',
    },
    image: 'figma:asset/3259d37c515159174b4e77c13f1abd6fb59ef632.png',
  },
];

export const FeaturedWork: React.FC = () => {
  return (
    <Section id="work" className="bg-[#0F172A]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold font-['Poppins'] text-[#F1F5F9] mb-2">Featured Works</h2>
        <p className="text-[#94A3B8] text-lg mb-2">Showcasing my best recent design work</p>
        <div className="w-20 h-1 bg-[#3B82F6] mb-16 rounded-full"></div>
      </motion.div>

      <div className="flex flex-col gap-24">
        {FEATURED_PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                !isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content Side */}
              <div className="flex-1 relative">
                <span className="absolute -top-10 -left-6 text-8xl font-bold text-[#3B82F6]/5 font-['Poppins'] z-0">
                  {project.id}
                </span>
                
                <div className="relative z-10">
                  <span className="inline-block px-4 py-1.5 rounded-full border border-[#3B82F6] bg-[#3B82F6]/10 text-[#3B82F6] text-xs font-medium mb-6">
                    {project.category}
                  </span>
                  
                  <h3 className="text-3xl font-bold text-[#F1F5F9] mb-4">{project.title}</h3>
                  <p className="text-[#CBD5E1] leading-relaxed mb-8 text-lg">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {project.metrics.map((metric, i) => {
                      const [value, label] = metric.split(' | ');
                      return (
                        <div key={i} className="bg-[#3B82F6]/5 border border-[#334155] p-3 rounded-lg text-center">
                          <div className="text-lg font-bold text-[#3B82F6]">{value}</div>
                          <div className="text-xs text-[#94A3B8]">{label}</div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="grid grid-cols-2 gap-y-2 text-sm text-[#94A3B8] mb-8">
                    {Object.entries(project.details).map(([key, value]) => (
                      <div key={key}>
                        <span className="font-semibold text-[#CBD5E1]">{key}: </span>
                        {value}
                      </div>
                    ))}
                  </div>

                  <Button variant="primary" icon={<ExternalLink size={16} />}>
                    View Case Study
                  </Button>
                </div>
              </div>

              {/* Image Side */}
              <div className="flex-1 w-full">
                <div className="relative group perspective-1000">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6] to-[#14B8A6] rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative w-full rounded-xl border-2 border-[#334155] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2 object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
