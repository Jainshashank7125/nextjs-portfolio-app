import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Enterprise Organization Management System (Korporate)',
    description: 'Microservices-based system with Edge Service, User Service, Project Service, and Notification Service using Kafka',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
    technologies: ['Java', 'Spring Boot', 'React.js', 'MongoDB', 'Redis', 'Kafka'],
    github: 'https://github.com/jainshashank7125',
  },
  {
    title: 'Financial Services Platform (Klondike Financial)',
    description: 'Comprehensive financial overview application with white-labeling capabilities',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    technologies: ['Flutter', 'Java', 'Spring Boot', 'React.js', 'MySQL'],
    github: 'https://github.com/jainshashank7125',
  },
  {
    title: 'Healthcare Platform (Mobex Health Hub)',
    description: 'Content delivery platform with Flutter-based mobile application',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    technologies: ['Node.js', 'React', 'MongoDB', 'Flutter'],
    github: 'https://github.com/jainshashank7125',
  },
  {
    title: 'Polls Application',
    description: 'Secure polling platform with JWT authentication and real-time updates',
    image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&q=80',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'React'],
    github: 'https://github.com/jainshashank7125',
  },
  {
    title: 'PREDICO - Disease Predictor',
    description: 'Disease prediction system with role-based access control and real-time consultation features',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
    technologies: ['Django', 'Python', 'PostgreSQL'],
    github: 'https://github.com/jainshashank7125',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-dark-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Projects</h2>
          <p className="text-dark-200 max-w-2xl mx-auto">
            A showcase of my professional work and personal projects, demonstrating expertise in various technologies and domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="gradient-border overflow-hidden group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-dark-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 glass-effect text-white rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-dark-200 hover:text-white transition-colors"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;