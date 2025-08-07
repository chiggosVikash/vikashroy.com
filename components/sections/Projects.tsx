'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { projects } from '@/lib/constants';
import { Project } from '@/types';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { 
  containerVariants, 
  fadeInUpVariants, 
  staggerChildrenVariants,
  staggerItemVariants,
  cardHoverVariants,
  buttonHoverVariants
} from '@/lib/animations';

const categories = {
  all: 'All Projects',
  frontend: 'Frontend',
  fullstack: 'Full Stack',
  backend: 'Backend',
  mobile: 'Mobile'
};

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof categories>('all');
  const [showAll, setShowAll] = useState(false);
  const [titleRef, titleInView] = useIntersectionObserver({ threshold: 0.3 });
  const [projectsRef, projectsInView] = useIntersectionObserver({ threshold: 0.1 });

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const getCategoryCount = (category: keyof typeof categories) => {
    return category === 'all' ? projects.length : projects.filter(p => p.category === category).length;
  };

  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/5 via-transparent to-primary/5 pointer-events-none" />
      
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
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUpVariants}
          >
            A collection of projects that showcase my skills and passion for creating 
            innovative digital solutions.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={staggerChildrenVariants}
        >
          <motion.div 
            className="flex items-center gap-2 text-sm text-muted-foreground mr-4"
            variants={staggerItemVariants}
          >
            <Filter className="h-4 w-4" />
            Filter by:
          </motion.div>
          {(Object.keys(categories) as Array<keyof typeof categories>).map((category) => (
            <motion.div
              key={category}
              variants={staggerItemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div variants={buttonHoverVariants}>
                <Button
                  variant={activeCategory === category ? 'default' : 'outline'}
                  onClick={() => setActiveCategory(category)}
                  className="transition-all duration-200 glass-effect"
                  size="sm"
                >
                  {categories[category]}
                  <motion.span 
                    className="ml-2 text-xs bg-muted-foreground/20 px-2 py-1 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    {getCategoryCount(category)}
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            ref={projectsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            exit="hidden"
            variants={staggerChildrenVariants}
          >
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={staggerItemVariants}
                whileHover="hover"
                initial="rest"
              >
                <motion.div variants={cardHoverVariants}>
                  <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 glass-effect border-primary/20 hover-lift h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <motion.div 
                        className="aspect-video relative"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </motion.div>
                      {project.featured && (
                        <motion.div
                          initial={{ scale: 0, rotate: -45 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                        >
                          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground animate-pulse-subtle">
                            Featured
                          </Badge>
                        </motion.div>
                      )}
                    </div>
                    
                    <CardHeader className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <motion.h3 
                          className="text-xl font-semibold group-hover:text-primary transition-colors"
                          whileHover={{ scale: 1.02 }}
                        >
                          {project.title}
                        </motion.h3>
                        <Badge variant="secondary" className="ml-2 capitalize glass-effect">
                          {project.category}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent>
                      <motion.div 
                        className="flex flex-wrap gap-2"
                        initial="hidden"
                        animate="visible"
                        variants={staggerChildrenVariants}
                      >
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            variants={staggerItemVariants}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge variant="outline" className="text-xs glass-effect">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    </CardContent>
                    
                    <CardFooter className="flex justify-between pt-2">
                      <div className="flex space-x-2">
                        {project.liveUrl && (
                          <motion.div
                            whileHover="hover"
                            whileTap="tap"
                            variants={buttonHoverVariants}
                          >
                            <Button size="sm" asChild className="glass-effect">
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} live demo`}
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Demo
                              </a>
                            </Button>
                          </motion.div>
                        )}
                        {project.githubUrl && (
                          <motion.div
                            whileHover="hover"
                            whileTap="tap"
                            variants={buttonHoverVariants}
                          >
                            <Button size="sm" variant="outline" asChild className="glass-effect">
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} source code`}
                              >
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </a>
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More Button */}
        {filteredProjects.length > 6 && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              whileHover="hover"
              whileTap="tap"
              variants={buttonHoverVariants}
            >
              <Button
                onClick={() => setShowAll(!showAll)}
                variant="outline"
                size="lg"
                className="glass-effect border-primary/50 hover:border-primary"
              >
                {showAll ? 'Show Less' : `View All ${filteredProjects.length} Projects`}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}