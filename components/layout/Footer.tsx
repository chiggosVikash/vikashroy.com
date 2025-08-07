'use client';

import { socialLinks, personalInfo } from '@/lib/constants';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { buttonHoverVariants } from '@/lib/animations';

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="mb-6 md:mb-0 text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sm text-muted-foreground mb-2">
              © 2024 {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground flex items-center justify-center md:justify-start">
              Made with 
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="mx-1"
              >
                <Heart className="h-3 w-3 text-red-500 fill-current" />
              </motion.span>
              Flutter, Next.js & NestJS
            </p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Twitter"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={`mailto:${socialLinks.email}`}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Email"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Back to top button */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            ↑ Back to top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}