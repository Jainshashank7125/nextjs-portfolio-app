import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { toast } from 'sonner';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
        const token = process.env.RESEND_API_KEY;
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                from: 'onboarding@resend.dev',
                to: 'shashnkjain@outlook.com',  // Change to the recipient's email
                subject: `New Message from ${data.name}`,
                html: `
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Message:</strong></p>
                    <p>${data.message}</p>
                `
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to send message');
        }

        toast.success('Message sent successfully!');
        reset();
    } catch (error) {
        toast.error('Failed to send message. Please try again.');
        console.error('Error sending message:', error);
    }
};


  return (
    <section id="contact" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get in Touch</h2>
          <p className="text-dark-200 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="gradient-border p-6"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
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
                GitHub Profile
              </a>
              <a
                href="https://www.linkedin.com/in/shashankjain7125"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-dark-200 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn Profile
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-200 mb-1">
                  Name
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 gradient-border bg-dark-900 text-white focus:ring-2 focus:ring-white/10 focus:border-transparent"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">{errors.name.message}</span>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-200 mb-1">
                  Email
                </label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 gradient-border bg-dark-900 text-white focus:ring-2 focus:ring-white/10 focus:border-transparent"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email.message}</span>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-200 mb-1">
                  Message
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 gradient-border bg-dark-900 text-white focus:ring-2 focus:ring-white/10 focus:border-transparent"
                ></textarea>
                {errors.message && (
                  <span className="text-red-500 text-sm">{errors.message.message}</span>
                )}
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 gradient-border text-white hover:bg-dark-800 transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;