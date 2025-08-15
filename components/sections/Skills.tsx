'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { skills } from '@/lib/constants';
import { Skill } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { 
  containerVariants, 
  fadeInUpVariants, 
  staggerChildrenVariants,
  staggerItemVariants,
  progressBarVariants,
  scaleInVariants,
  buttonHoverVariants
} from '@/lib/animations';

const categories = {
  all: 'All Skills',
  backend: 'Backend',
  mobile: 'Mobile',
  cloud: 'DevOps & Cloud',
  database: 'Databases',
  frontend: 'Frontend',
  tools: 'Tools'
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof categories>('all');
  const [titleRef, titleInView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });
  const [skillsRef, skillsInView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
  const [summaryRef, summaryInView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getCategorySkills = (category: keyof typeof categories) => {
    return category === 'all' ? skills : skills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-l from-blue-500/5 via-transparent to-primary/5 pointer-events-none" />
      
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
            🧰 Core Skills & Technologies
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUpVariants}
          >
            Backend development, Flutter mobile apps, DevOps, and database technologies
            that power scalable applications.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={staggerChildrenVariants}
        >
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
                >
                  {categories[category]}
                  <motion.span 
                    className="ml-2 text-xs bg-muted-foreground/20 px-2 py-1 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    {getCategorySkills(category).length}
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            ref={skillsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            exit="hidden"
            variants={staggerChildrenVariants}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={staggerItemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 glass-effect border-primary/20 hover-lift">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex justify-between items-center text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <motion.span 
                        className="text-primary font-mono font-bold"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <div className="h-3 bg-muted/50 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-primary to-blue-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={skillsInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.2, 
                            delay: index * 0.1 + 0.2,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Skills Summary */}
        <motion.div 
          ref={summaryRef}
          className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-8"
          initial="hidden"
          animate={summaryInView ? "visible" : "hidden"}
          variants={staggerChildrenVariants}
        >
          {(Object.keys(categories) as Array<keyof typeof categories>)
            .filter(cat => cat !== 'all')
            .map((category) => {
              const categorySkills = getCategorySkills(category);
              const avgLevel = Math.round(
                categorySkills.reduce((acc, skill) => acc + skill.level, 0) / categorySkills.length
              );
              
              return (
                <motion.div 
                  key={category} 
                  className="text-center p-4 rounded-lg glass-effect border border-primary/20"
                  variants={staggerItemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="text-3xl font-bold text-primary mb-2"
                    initial={{ scale: 0 }}
                    animate={summaryInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    {categorySkills.length}
                  </motion.div>
                  <div className="text-sm text-muted-foreground capitalize mb-1 font-medium">
                    {category}
                  </div>
                  <motion.div 
                    className="text-xs text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={summaryInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Avg: <span className="text-primary font-semibold">{avgLevel}%</span>
                  </motion.div>
                </motion.div>
              );
            })}
        </motion.div>
      </div>
    </section>
  );
}