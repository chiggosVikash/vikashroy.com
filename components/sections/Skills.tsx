'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { skills } from '@/lib/constants';
import { Skill } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { MotionBackground } from '@/components/ui/motion-background';
import { 
  containerVariants, 
  fadeInUpVariants, 
  staggerChildrenVariants,
  staggerItemVariants,
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
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Enhanced Motion Background */}
      <MotionBackground variant="trendy" intensity="moderate" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-transparent to-slate-900/30 dark:from-slate-950/50 dark:via-transparent dark:to-slate-950/50" />
      
      <div className="container-modern relative z-10">
        {/* Enhanced Header Section */}
        <motion.div 
          ref={titleRef}
          className="text-center mb-20"
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 backdrop-blur-xl border border-blue-500/30"
            variants={scaleInVariants}
          >
            <span className="text-3xl">🚀</span>
          </motion.div>
          
          <motion.h2 
            className="gradient-text mb-6"
            variants={fadeInUpVariants}
          >
            Core Skills & Technologies
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUpVariants}
          >
            Backend development, Flutter mobile apps, DevOps, and database technologies
            that power <span className="font-semibold text-blue-600 dark:text-blue-400">scalable applications</span>.
          </motion.p>
        </motion.div>

        {/* Enhanced Category Filter with Glassmorphism */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
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
                  className={`
                    relative overflow-hidden transition-all duration-300 
                    ${activeCategory === category 
                      ? 'btn-primary' 
                      : 'btn-secondary'
                    }
                    will-change-transform
                  `}
                >
                  {categories[category]}
                  <motion.span 
                    className={`ml-3 px-3 py-1 rounded-full text-xs font-semibold ${
                      activeCategory === category 
                        ? 'bg-white/20 text-white' 
                        : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {getCategorySkills(category).length}
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Skills Grid with Bento Layout */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            ref={skillsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            exit="hidden"
            variants={staggerChildrenVariants}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={staggerItemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className={`
                  ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}
                  ${index === 3 ? 'md:col-span-2' : ''}
                  ${index === 6 ? 'lg:col-span-2' : ''}
                  will-change-transform
                `}
              >
                <Card className="card-glass group h-full hover-glow">
                  {/* Skill Header with Enhanced Styling */}
                  <CardHeader className="pb-4 pt-6">
                    <CardTitle className="flex justify-between items-center">
                      <span className="font-semibold text-slate-800 dark:text-slate-200 text-lg">
                        {skill.name}
                      </span>
                      <motion.div 
                        className="relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center border border-blue-300/30 dark:border-blue-500/30">
                          <span className="text-blue-700 dark:text-blue-300 font-mono font-bold text-sm">
                            {skill.level}%
                          </span>
                        </div>
                      </motion.div>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    {/* Enhanced Progress Bar */}
                    <div className="relative">
                      <div className="h-4 bg-slate-200/50 dark:bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-blue-500 via-blue-600 to-emerald-500 rounded-full relative overflow-hidden"
                          initial={{ width: 0 }}
                          animate={skillsInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: index * 0.1 + 0.2,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                        >
                          {/* Shimmer Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                        </motion.div>
                      </div>
                      
                      {/* Skill Level Indicator */}
                      <div className="flex justify-between items-center mt-3 text-xs text-slate-500 dark:text-slate-400">
                        <span>Beginner</span>
                        <span>Expert</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Skills Summary with 3D Cards */}
        <motion.div 
          ref={summaryRef}
          className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-6"
          initial="hidden"
          animate={summaryInView ? "visible" : "hidden"}
          variants={staggerChildrenVariants}
        >
          {(Object.keys(categories) as Array<keyof typeof categories>)
            .filter(cat => cat !== 'all')
            .map((category, index) => {
              const categorySkills = getCategorySkills(category);
              const avgLevel = Math.round(
                categorySkills.reduce((acc, skill) => acc + skill.level, 0) / categorySkills.length
              );
              
              return (
                <motion.div 
                  key={category} 
                  className="relative group will-change-transform"
                  variants={staggerItemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -8,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* 3D Card Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  
                  <div className="card-glass relative p-6 text-center hover-border-glow">
                    <motion.div 
                      className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-3"
                      initial={{ scale: 0 }}
                      animate={summaryInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      {categorySkills.length}
                    </motion.div>
                    
                    <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 capitalize mb-2">
                      {category}
                    </div>
                    
                    <motion.div 
                      className="text-xs text-slate-500 dark:text-slate-400"
                      initial={{ opacity: 0 }}
                      animate={summaryInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      Avg: <span className="font-semibold text-blue-600 dark:text-blue-400">{avgLevel}%</span>
                    </motion.div>
                    
                    {/* Category Icon */}
                    <div className="mt-4 text-2xl opacity-60">
                      {category === 'backend' && '⚙️'}
                      {category === 'mobile' && '📱'}
                      {category === 'cloud' && '☁️'}
                      {category === 'database' && '🗄️'}
                      {category === 'frontend' && '🎨'}
                      {category === 'tools' && '🛠️'}
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </motion.div>
      </div>
    </section>
  );
}