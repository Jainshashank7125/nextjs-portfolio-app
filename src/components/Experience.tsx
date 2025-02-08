import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Hexaview Technologies Inc.',
    position: 'Application Engineer',
    period: 'September 2022 - Present',
    description: 'Leading development of enterprise applications and microservices architecture.',
    projects: [
      {
        name: 'Enterprise Organization Management System (Korporate)',
        details: [
          'Architected and implemented microservices ecosystem including Edge Service, User Service, Project Service, and Notification Service using Kafka',
          'Reduced service-to-service communication latency by 50% through optimized protocols',
          'Implemented API Gateway for centralized request routing and load balancing',
          'Achieved 90-95% performance improvement using Redis caching'
        ],
        technologies: ['Java', 'Spring Boot', 'React.js', 'MongoDB', 'Redis', 'Kafka']
      },
      {
        name: 'Financial Services Platform (Klondike Financial)',
        details: [
          'Developed comprehensive financial overview application with white-labeling capabilities',
          'Secured 5 new enterprise clients through brand customization features',
          'Integrated FastTrack Market, HubSpot CRM, and Plaid APIs'
        ],
        technologies: ['Flutter', 'Java', 'Spring Boot', 'React.js', 'MySQL']
      },
      {
        name: 'Healthcare Platform (Mobex Health Hub)',
        details: [
          'Led development of content delivery platform resulting in 40% increase in client acquisition',
          'Spearheaded Flutter-based mobile application development with 79% user conversion rate'
        ],
        technologies: ['Node.js', 'React', 'MongoDB', 'Flutter']
      }
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-dark-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Experience</h2>
          <p className="text-dark-200 max-w-2xl mx-auto">
            My professional journey and key achievements.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-8 border-l-2 border-dark-800 last:pb-0"
            >
              {/* <div className="absolute -left-3 top-0 w-6 h-6 gradient-border rounded-full" /> */}
              
              <div className="gradient-border p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 size={20} className="text-white" />
                  <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                </div>
                
                <div className="flex items-center gap-2 text-dark-300 mb-3">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
                
                <h4 className="text-lg font-medium text-white mb-3">
                  {exp.position}
                </h4>
                
                <p className="text-dark-200 mb-6">{exp.description}</p>

                {exp.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="mb-6 last:mb-0">
                    <h5 className="text-lg font-semibold mb-3 text-white">{project.name}</h5>
                    <ul className="list-disc list-inside space-y-2 mb-4 text-dark-200">
                      {project.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 glass-effect text-white rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;