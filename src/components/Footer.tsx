import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Shashank Jain</h3>
            <p className="text-dark-200">
              Full-stack software engineer specializing in microservices architecture and cloud technologies.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    className="text-dark-200 hover:text-white cursor-pointer capitalize transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-4">
              <a
                href="tel:+919340016492"
                className="flex items-center gap-3 text-dark-200 hover:text-white transition-colors"
              >
                <Phone size={20} />
                +91 93400 16492
              </a>
              <a
                href="mailto:shashnkjain@outlook.com"
                className="flex items-center gap-3 text-dark-200 hover:text-white transition-colors"
              >
                <Mail size={20} />
                shashnkjain@outlook.com
              </a>
              <a
                href="https://github.com/jainshashank7125"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-dark-200 hover:text-white transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shashankjain7125"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-dark-200 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-800 mt-8 pt-8 text-center text-dark-300">
          <p>© {currentYear} Shashank Jain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;