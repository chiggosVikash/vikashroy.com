'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowDown, Download, Github, Linkedin, Code2, Sparkles, Smartphone, Server, MapPin, Coffee, Star, Zap } from 'lucide-react';
import { socialLinks, personalInfo } from '@/lib/constants';
import { motion } from 'framer-motion';
import { MotionBackground } from '@/components/ui/motion-background';
import { 
  containerVariants, 
  heroTextVariants, 
  fadeInUpVariants, 
  buttonHoverVariants,
  floatingVariants,
  staggerChildrenVariants,
  staggerItemVariants
} from '@/lib/animations';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const specialties = personalInfo.specialties || ['Backend Development', 'Flutter Apps', 'SaaS Platforms'];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Motion Background */}
      <MotionBackground variant="trendy" intensity="moderate" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/30 pointer-events-none" />
      
      {/* Enhanced floating tech icons */}
      <motion.div 
        className="absolute top-20 left-8 md:left-16 text-primary/30"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '0s' }}
      >
        <Server className="h-10 w-10 md:h-12 md:w-12" />
      </motion.div>
      
      <motion.div 
        className="absolute top-32 right-8 md:right-20 text-purple-500/30"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
      >
        <Smartphone className="h-8 w-8 md:h-10 md:w-10" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-32 left-12 md:left-24 text-blue-500/30"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      >
        <Code2 className="h-12 w-12 md:h-14 md:w-14" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-40 right-8 md:right-16 text-cyan-500/30"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '0.5s' }}
      >
        <Zap className="h-8 w-8 md:h-10 md:w-10" />
      </motion.div>
      
      <motion.div 
        className="absolute top-1/2 left-4 md:left-8 text-green-500/20"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '1.5s' }}
      >
        <Sparkles className="h-6 w-6 md:h-8 md:w-8" />
      </motion.div>
      
      <motion.div 
        className="container-modern relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Main content */}
          <div className="lg:col-span-8 text-center lg:text-left">
            {/* Status badge */}
            <motion.div 
              className="flex justify-center lg:justify-start mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge className="bg-green-500/20 text-green-600 border-green-500/30 px-4 py-2 text-sm font-medium">
                <motion.div 
                  className="w-2 h-2 bg-green-500 rounded-full mr-2"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                Available for Projects
              </Badge>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={heroTextVariants}>
              <motion.h1 
                className="leading-tight"
                variants={staggerChildrenVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.span 
                  className="block text-foreground"
                  variants={staggerItemVariants}
                >
                  Hi, I'm
                </motion.span>
                <motion.span 
                  className="block gradient-text"
                  variants={staggerItemVariants}
                >
                  {personalInfo.name}
                </motion.span>
                <motion.span 
                  className="block text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-medium mt-2"
                  variants={staggerItemVariants}
                >
                  {personalInfo.title}
                </motion.span>
              </motion.h1>
            </motion.div>
            
            {/* Location and experience */}
            <motion.div 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium">{personalInfo.experience} Experience</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Coffee className="h-4 w-4 text-amber-500" />
                <span className="text-sm font-medium">Building since 2020</span>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p 
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {personalInfo.bio}
            </motion.p>

            {/* Specialties */}
            <motion.div 
              className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {specialties.map((specialty, index) => (
                <motion.div
                  key={specialty}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-3 py-1">
                    {specialty}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Action buttons */}
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.div
                variants={buttonHoverVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection('#projects')}
                  className="btn-primary px-8 py-3 text-lg"
                >
                  <Code2 className="h-5 w-5 mr-2" />
                  View My Projects
                </Button>
              </motion.div>
              
              <motion.div
                variants={buttonHoverVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('#contact')}
                  className="btn-secondary px-8 py-3 text-lg"
                >
                  Let's Talk
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="ghost"
                  className="btn-ghost px-6 py-3"
                  aria-label="Download Resume"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Resume
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Social links */}
            <motion.div 
              className="mt-8 flex justify-center lg:justify-start space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-primary/10"
                aria-label="GitHub"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-6 w-6" />
              </motion.a>
              
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-primary/10"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
            </motion.div>

            {/* Featured Project Preview */}
            <motion.div 
              className="mt-12 lg:mt-16 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground mb-2">Featured Project: DP Bazaar</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    MLM network platform with comprehensive web and Flutter applications featuring real-time analytics and multi-level commission tracking.
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Live Demo
                    </span>
                    <span className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      Flutter + NestJS
                    </span>
                    <span className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      Real-time
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-2 border-background"></div>
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-blue-500 rounded-full border-2 border-background"></div>
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-2 border-background"></div>
                </div>
                <span>Trusted by 15+ clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-500">⭐</span>
                  ))}
                </div>
                <span>5.0 rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for projects</span>
              </div>
            </motion.div>
          </div>

          {/* Stats sidebar */}
          <div className="lg:col-span-4 mt-12 lg:mt-0">
            <motion.div 
              className="grid grid-cols-1 gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <Card className="card-glass bg-gradient-to-br from-primary/10 to-blue-500/10 border-primary/20 hover-lift">
                <CardContent className="p-6 text-center">
                  <motion.div 
                    className="text-3xl font-bold text-primary mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                  >
                    15+
                  </motion.div>
                  <p className="text-sm text-muted-foreground">Projects Built</p>
                </CardContent>
              </Card>

              <Card className="card-glass bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 hover-lift">
                <CardContent className="p-6 text-center">
                  <motion.div 
                    className="text-3xl font-bold text-purple-600 mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                  >
                    {personalInfo.experience.split('+')[0]}+
                  </motion.div>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>

              <Card className="card-glass bg-gradient-to-br from-green-500/10 to-cyan-500/10 border-green-500/20 hover-lift">
                <CardContent className="p-6 text-center">
                  <motion.div 
                    className="text-3xl font-bold text-green-600 mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
                  >
                    52
                  </motion.div>
                  <p className="text-sm text-muted-foreground">GitHub Repos</p>
                </CardContent>
              </Card>

              {/* Additional Stats */}
              <Card className="card-glass bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20 hover-lift">
                <CardContent className="p-6 text-center">
                  <motion.div 
                    className="text-3xl font-bold text-orange-600 mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.7, type: "spring", stiffness: 200 }}
                  >
                    100%
                  </motion.div>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </CardContent>
              </Card>

              <Card className="card-glass bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border-indigo-500/20 hover-lift">
                <CardContent className="p-6 text-center">
                  <motion.div 
                    className="text-3xl font-bold text-indigo-600 mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
                  >
                    24/7
                  </motion.div>
                  <p className="text-sm text-muted-foreground">Support Available</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-200 group"
          aria-label="Scroll to about section"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-xs mb-2 opacity-60 group-hover:opacity-100">Scroll Down</span>
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}