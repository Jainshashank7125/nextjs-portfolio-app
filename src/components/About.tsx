import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

const timelineItems = [
  {
    year: '2022 - Present',
    title: 'Application Engineer',
    description: 'Hexaview Technologies Inc.',
    icon: Briefcase,
  },
  {
    year: '2019 - 2023',
    title: 'Bachelor of Technology in Computer Science',
    description: 'Gyan Ganga College of Technology',
    icon: GraduationCap,
  },
  {
    year: '2022',
    title: 'Microsoft Azure Certified',
    description: 'Azure Fundamentals (AZ-900)',
    icon: Calendar,
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-dark-200 text-lg">
            Full-stack software engineer with expertise in microservices architecture and cloud technologies. 
            Proven track record of delivering high-performance applications in healthcare and financial sectors. 
            Specialized in developing scalable solutions using Flutter, Java, React, and Cloud technologies, 
            with a focus on optimizing system performance and user experience.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 mb-8"
            >
              <div className="flex-shrink-0 w-12 h-12 gradient-border flex items-center justify-center">
                <item.icon className="text-white" size={24} />
              </div>
              <div className="gradient-border p-6 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar size={16} className="text-dark-300" />
                  <span className="text-sm text-dark-300">{item.year}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-dark-200">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;