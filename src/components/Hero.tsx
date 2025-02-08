import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-blue">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent blur-xl opacity-30"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-white to-dark-200 bg-clip-text text-transparent">
                Shashank Jain
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-dark-200 mb-8">
              Full-stack software engineer specializing in microservices architecture and cloud technologies
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-64}
                className="inline-flex items-center px-6 py-3 gradient-border text-white hover:bg-dark-800 transition-colors cursor-pointer"
              >
                View Projects
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                spy={true}
                smooth={true}
                offset={-64}
to="https://drive.google.com/file/d/1Fk6NBXF9el96Phw5308vXrclHGPBLoPz/view?usp=sharing"
                className="inline-flex items-center px-6 py-3 border border-white/10 text-white hover:bg-white/5 transition-colors rounded-lg"
              >
                Download Resume
                <Download className="ml-2" size={20} />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent blur-xl opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
                alt="Developer"
                className="w-full h-[600px] object-cover rounded-2xl gradient-border animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;