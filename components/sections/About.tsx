'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Code2, Database, Globe, Smartphone, Server, Cloud } from 'lucide-react';
import { personalInfo } from '@/lib/constants';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { 
  containerVariants, 
  fadeInUpVariants, 
  fadeInLeftVariants, 
  fadeInRightVariants, 
  staggerChildrenVariants,
  staggerItemVariants,
  cardHoverVariants
} from '@/lib/animations';

export function About() {
  const [titleRef, titleInView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });
  const [contentRef, contentInView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
  const [cardsRef, cardsInView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  const highlights = [
    {
      icon: <Server className="h-8 w-8" />,
      title: 'Backend Development',
      description: 'Scalable backend systems using Node.js, NestJS, and microservices architecture for high-performance applications.'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Flutter Development',
      description: 'Cross-platform mobile applications with Flutter, creating both user and admin apps with beautiful UIs.'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Database Design',
      description: 'Optimized database solutions using MongoDB, PostgreSQL, and CouchDB for various application needs.'
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'DevOps & Cloud',
      description: 'CI/CD pipelines, containerization with Docker, and deployment on AWS and DigitalOcean.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          ref={titleRef}
          className="text-center mb-16"
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4 gradient-text"
            variants={fadeInUpVariants}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUpVariants}
          >
            I'm a passionate {personalInfo.title.toLowerCase()} from {personalInfo.location} with {personalInfo.experience} experience 
            building scalable systems and delightful mobile experiences.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            ref={contentRef}
            className="space-y-6"
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={fadeInLeftVariants}
          >
            <div className="prose prose-lg dark:prose-invert space-y-6">
              <motion.p 
                className="text-muted-foreground text-lg leading-relaxed"
                variants={staggerItemVariants}
              >
                {personalInfo.bio}
              </motion.p>
              
              <motion.p 
                className="text-muted-foreground text-lg leading-relaxed"
                variants={staggerItemVariants}
              >
                I specialize in building robust backend systems with Node.js and NestJS, creating 
                beautiful cross-platform mobile apps with Flutter, and developing scalable SaaS platforms 
                that handle thousands of users with real-time features and seamless integrations.
              </motion.p>
              
              <motion.p 
                className="text-muted-foreground text-lg leading-relaxed"
                variants={staggerItemVariants}
              >
                My approach combines technical expertise with business understanding, ensuring that 
                every solution I build not only meets technical requirements but also drives real business value. 
                I believe in writing clean, maintainable code and creating systems that scale with your business.
              </motion.p>

              {/* Key Achievements */}
              <motion.div 
                className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20"
                variants={staggerItemVariants}
              >
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Key Achievements
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></span>
                    Built 15+ production applications serving thousands of users
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></span>
                    Achieved 99.9% uptime for critical business applications
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></span>
                    Reduced application load times by 60% through optimization
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></span>
                    Successfully migrated legacy systems to modern architectures
                  </li>
                </ul>
              </motion.div>

              {/* Development Philosophy */}
              <motion.div 
                className="mt-6 p-6 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl border border-emerald-500/20"
                variants={staggerItemVariants}
              >
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  My Development Philosophy
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div>
                    <h5 className="font-medium text-foreground mb-2">🚀 Performance First</h5>
                    <p>Every line of code is optimized for speed and scalability</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground mb-2">🔒 Security by Design</h5>
                    <p>Built-in security measures from the ground up</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground mb-2">�� User Experience</h5>
                    <p>Intuitive interfaces that users love to interact with</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground mb-2">🔄 Maintainable Code</h5>
                    <p>Clean, documented code that's easy to update and extend</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.p 
                className="text-muted-foreground text-lg leading-relaxed"
                variants={staggerItemVariants}
              >
                My expertise spans from MLM platforms and e-commerce solutions to high-volume booking 
                systems and grocery delivery platforms. I believe in clean architecture, performance 
                optimization, and delivering user experiences that drive business growth.
              </motion.p>
              
              <motion.p 
                className="text-muted-foreground text-lg leading-relaxed"
                variants={staggerItemVariants}
              >
                When I'm not coding, you can find me exploring new technologies, optimizing database 
                queries, or helping fellow developers debug their Flutter and backend challenges.
              </motion.p>
            </div>
          </motion.div>

          <motion.div 
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            animate={cardsInView ? "visible" : "hidden"}
            variants={staggerChildrenVariants}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={staggerItemVariants}
                whileHover="hover"
                initial="rest"
              >
                <motion.div variants={cardHoverVariants}>
                  <Card className="bg-card/50 glass-effect hover-lift transition-all duration-300 border-primary/20">
                    <CardContent className="p-6">
                      <motion.div 
                        className="text-primary mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {highlight.icon}
                      </motion.div>
                      <h3 className="font-semibold mb-3 text-base text-foreground">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}