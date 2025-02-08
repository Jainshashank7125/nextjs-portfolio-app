import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'C++', level: 75 },
    ],
  },
  {
    title: 'Frontend Technologies',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Flutter', level: 85 },
      { name: 'React Native', level: 80 },
      { name: 'HTML/CSS', level: 85 },
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Spring Boot', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 80 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', level: 85 },
      { name: 'Azure', level: 80 },
      { name: 'Docker', level: 75 },
      { name: 'Kubernetes', level: 70 },
    ],
  },
  {
    title: 'Additional Technologies',
    skills: [
      { name: 'Microservices', level: 90 },
      { name: 'REST APIs', level: 85 },
      { name: 'GraphQL', level: 75 },
      { name: 'Redis', level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Skills</h2>
          <p className="text-dark-200 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency in various technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="gradient-border p-6"
            >
              <h3 className="text-xl font-semibold mb-6 text-white">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-dark-200">{skill.name}</span>
                      <span className="text-dark-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-800 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="skill-bar h-2.5 rounded-full"
                      />
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

export default Skills;