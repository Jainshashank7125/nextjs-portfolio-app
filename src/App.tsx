import React from "react";
import { motion } from "framer-motion";
import { Github, Mail, Code, User, Send, X, Linkedin } from "lucide-react";
import { Link } from "react-scroll";
import { toast, Toaster } from "sonner";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully! I will get back to you soon.");
      reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Toaster position="top-right" />
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold"
            >
              SJ
            </motion.span>
            <div className="flex gap-6">
              {[
                { name: "About", icon: User, to: "about" },
                { name: "Projects", icon: Code, to: "projects" },
                { name: "Contact", icon: Mail, to: "contact" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  className="flex items-center gap-1 text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  <item.icon size={16} />
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen pt-20 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-lg p-8 max-w-2xl w-full text-center"
        >
          <h1 className="text-4xl font-bold mb-8">Shashank Jain</h1>

          <div className="mb-8">
            <img
              src="images/profile-photo.jpeg"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <a
              href="https://x.com/Jainshashank7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <X size={16} className="inline-block mr-2" />X (formerly Twitter)
            </a>
            <a
              href="https://github.com/jainshashank7125"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <Github size={16} className="inline-block mr-2" />
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/shashankjain7125"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <Linkedin size={16} className="inline-block mr-2" />
              LinkedIn
            </a>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              className="btn cursor-pointer"
            >
              <Mail size={16} className="inline-block mr-2" />
              Get In Touch!
            </Link>
          </div>

          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
            I’m a full-stack software engineer specializing in mobile
            application and web development with backend expertise and a strong
            foundation in cloud technologies. With skills in Flutter, React
            Native, and Java, I’ve delivered high-performance applications in
            healthcare and financial sectors, achieving measurable success. Open
            to collaborations on innovative projects — let’s create something
            impactful together!
          </p>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-4"
        >
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-lg p-10">
            <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">
              Who Am I?
            </h2>
            <div className="space-y-8 text-gray-700">
              <p className="text-lg leading-relaxed">
                I’m a passionate{" "}
                <span className="font-semibold text-blue-500">
                  Software Developer
                </span>{" "}
                with over two years of crafting innovative web and mobile
                solutions. My journey began with a curiosity for solving
                problems, and today, I specialize in building scalable,
                efficient, and user-focused applications—especially in the
                Healthcare and Insurance realms, where impact matters most.
              </p>

              <div>
                <h3 className="text-2xl font-semibold text-blue-500 mb-4">
                  📚 My Toolbox
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Fluent in{" "}
                    <span className="font-semibold">
                      Flutter, Java, and Node.js
                    </span>
                    , crafting full-stack magic for modern applications.
                  </li>
                  <li>
                    Cloud-savvy with an{" "}
                    <span className="font-semibold">AZ-900 certification</span>,
                    ensuring deployments are smart, scalable, and
                    budget-friendly.
                  </li>
                  <li>
                    Proficient in{" "}
                    <span className="font-semibold">Agile methodologies</span>,
                    delivering projects with precision and collaboration.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-blue-500 mb-4">
                  🏆 Achievements I’m Proud Of
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Engineered scalable systems to enhance performance and
                    delight users across devices.
                  </li>
                  <li>
                    Drove end-to-end delivery for diverse projects, from
                    brainstorming to seamless post-launch optimization.
                  </li>
                  <li>
                    Optimized code and workflows to ensure long-term
                    maintainability and efficiency.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-blue-500 mb-4">
                  🌟 My Core Strengths
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-semibold">Problem-Solver:</span> I
                    thrive on dissecting challenges and crafting creative,
                    effective solutions.
                  </li>
                  <li>
                    <span className="font-semibold">Adaptable Learner:</span>{" "}
                    From Generative AI to Cloud Computing, I embrace
                    cutting-edge tech to stay ahead.
                  </li>
                  <li>
                    <span className="font-semibold">Team Collaborator:</span>{" "}
                    Balancing technical expertise with clear communication, I
                    excel in cross-functional teams.
                  </li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed">
                My ultimate vision? To create applications that don’t just solve
                problems—they inspire innovation and drive real-world impact.
              </p>

              <div>
                <h3 className="text-2xl font-semibold text-blue-500 mb-4">
                  🌈 Beyond the Code
                </h3>
                <p className="leading-relaxed">
                  When I step away from the screen, you’ll find me:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-semibold">Gaming:</span> Whether
                    competing or marveling at game design, I enjoy every pixel.
                  </li>
                  <li>
                    <span className="font-semibold">Biking:</span> Exploring new
                    trails and soaking in the beauty of nature keeps me
                    refreshed.
                  </li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed text-center font-medium text-blue-600 mt-6">
                Let’s connect and build something extraordinary together!
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto px-4"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Healthcare Mobile Application",
                description:
                  "Flutter-based healthcare app with real-time chat and video consultation features, achieving 79% user conversion rate.",
                tech: ["Flutter", "Provider", "SQLite", "WebRTC"],
              },
              {
                title: "Financial Services Platform",
                description:
                  "White-labeled financial overview application with secure biometric authentication and real-time payment processing.",
                tech: ["Flutter", "Bloc Pattern", "Firebase"],
              },
              {
                title: "Enterprise Management System",
                description:
                  "Microservices-based system with comprehensive organization management capabilities, reducing service-to-service latency by 50%.",
                tech: ["Java", "Spring Boot", "React", "MongoDB", "Kafka"],
              },
              {
                title: "PREDICO - Disease Predictor",
                description:
                  "Disease prediction system with role-based access control and real-time online consultation features.",
                tech: ["Django", "Python", "PostgreSQL"],
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-lg p-6"
              >
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto px-4"
        >
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 outline-none transition-colors"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 outline-none transition-colors"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-200 focus:border-gray-400 outline-none transition-colors"
                ></textarea>
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    {errors.message.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>
            © {new Date().getFullYear()} Shashank Jain. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
