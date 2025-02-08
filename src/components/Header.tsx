import React from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { title: 'Home', to: 'home' },
    { title: 'About', to: 'about' },
    { title: 'Projects', to: 'projects' },
    { title: 'Skills', to: 'skills' },
    { title: 'Experience', to: 'experience' },
    { title: 'Contact', to: 'contact' },
  ];

  return (
    <header className="fixed w-full z-50">
      <div className="glass-effect">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold heading-primary"
            >
              Portfolio
            </motion.div>

            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  className="text-custom-pink hover:text-custom-sage cursor-pointer transition-colors duration-200"
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://github.com/jainshashank7125"
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom-pink hover:text-custom-sage transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/shashankjain7125"
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom-pink hover:text-custom-sage transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:shashnkjain@outlook.com"
                className="text-custom-pink hover:text-custom-sage transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>

            <button
              className="md:hidden text-custom-pink"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-effect"
        >
          <div className="px-4 py-2">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-64}
                className="block py-2 text-custom-pink hover:text-custom-sage"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;