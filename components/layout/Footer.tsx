'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Calendar, Code2, Heart } from 'lucide-react';
import { socialLinks, personalInfo } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 dark:bg-slate-950 border-t border-slate-800 dark:border-slate-800">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50" />
      
      <div className="container-modern relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company/Personal Info */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                    <Code2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
                    <p className="text-slate-400 text-sm">{personalInfo.title}</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
                  {personalInfo.bio} I specialize in building scalable backend systems, 
                  mobile applications, and cloud infrastructure that power real businesses.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Get in Touch
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                  >
                    <Code2 className="h-4 w-4 mr-2" />
                    View Projects
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="#home" 
                      className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Home
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#about" 
                      className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                      About
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#skills" 
                      className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Skills
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#projects" 
                      className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#contact" 
                      className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      Contact
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
                <ul className="space-y-4">
                  <li className="flex items-center text-slate-400">
                    <Mail className="h-4 w-4 mr-3 text-blue-500" />
                    <span className="text-sm">{socialLinks.email}</span>
                  </li>
                  <li className="flex items-center text-slate-400">
                    <Phone className="h-4 w-4 mr-3 text-emerald-500" />
                    <span className="text-sm">{socialLinks.phone}</span>
                  </li>
                  <li className="flex items-center text-slate-400">
                    <MapPin className="h-4 w-4 mr-3 text-purple-500" />
                    <span className="text-sm">{personalInfo.location}</span>
                  </li>
                  <li className="flex items-center text-slate-400">
                    <Calendar className="h-4 w-4 mr-3 text-pink-500" />
                    <span className="text-sm">{personalInfo.experience} Experience</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="py-8 border-t border-slate-800 dark:border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              <span className="text-slate-400 text-sm mr-4">Follow me:</span>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-slate-800"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-slate-800"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="text-slate-400 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-slate-800"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3"
            >
              <span className="text-slate-400 text-sm">Stay updated:</span>
              <div className="flex items-center space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800 dark:border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-slate-400 text-sm text-center md:text-left"
            >
              © {currentYear} {personalInfo.name}. All rights reserved.
            </motion.div>

            {/* Made with love */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center text-slate-400 text-sm"
            >
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-2 text-red-500 animate-pulse" />
              <span>using Next.js & Tailwind CSS</span>
            </motion.div>

            {/* Additional Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 text-sm"
            >
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}