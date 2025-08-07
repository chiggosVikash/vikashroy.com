'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin } from 'lucide-react';
import { experiences } from '@/lib/constants';
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

export function Experience() {
  const [titleRef, titleInView] = useIntersectionObserver({ threshold: 0.3 });
  const [timelineRef, timelineInView] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-blue-500/5 pointer-events-none" />
      
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
            Work Experience
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUpVariants}
          >
            My professional journey and the impact I've made at various organizations.
          </motion.p>
        </motion.div>

        <motion.div 
          ref={timelineRef}
          className="relative"
          initial="hidden"
          animate={timelineInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Animated Timeline line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 transform md:-translate-x-px w-0.5 bg-gradient-to-b from-primary via-blue-600 to-purple-600"
            initial={{ height: 0 }}
            animate={timelineInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <motion.div 
            className="space-y-12"
            variants={staggerChildrenVariants}
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                variants={staggerItemVariants}
                whileHover="hover"
                initial="rest"
              >
                {/* Animated Timeline dot */}
                <motion.div 
                  className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary to-blue-600 rounded-full border-4 border-background z-10 shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={timelineInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ 
                    delay: index * 0.2 + 0.5, 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.2, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                />

                {/* Content */}
                <motion.div 
                  className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}
                  variants={index % 2 === 0 ? fadeInRightVariants : fadeInLeftVariants}
                >
                  <motion.div variants={cardHoverVariants}>
                    <Card className="hover:shadow-2xl transition-all duration-300 glass-effect border-primary/20 hover-lift">
                      <CardHeader>
                        <CardTitle className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                          <div>
                            <motion.h3 
                              className="text-xl font-semibold text-primary"
                              whileHover={{ scale: 1.02 }}
                            >
                              {experience.position}
                            </motion.h3>
                            <motion.p 
                              className="text-lg font-medium text-foreground"
                              whileHover={{ scale: 1.01 }}
                            >
                              {experience.company}
                            </motion.p>
                          </div>
                          <div className="flex flex-col md:text-right gap-2">
                            <motion.div 
                              className="flex items-center text-muted-foreground text-sm"
                              whileHover={{ scale: 1.05 }}
                            >
                              <CalendarDays className="h-4 w-4 mr-2" />
                              {experience.startDate} - {experience.endDate}
                            </motion.div>
                            <motion.div 
                              className="flex items-center text-muted-foreground text-sm"
                              whileHover={{ scale: 1.05 }}
                            >
                              <MapPin className="h-4 w-4 mr-2" />
                              {experience.location}
                            </motion.div>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <motion.ul 
                          className="space-y-3"
                          variants={staggerChildrenVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {experience.description.map((item, itemIndex) => (
                            <motion.li
                              key={itemIndex}
                              className="text-muted-foreground flex items-start"
                              variants={staggerItemVariants}
                              whileHover={{ x: 5 }}
                            >
                              <span className="text-primary mr-3 mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-blue-600 flex-shrink-0" />
                              <span className="text-sm leading-relaxed">{item}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                        
                        <div className="pt-6 border-t border-border/50">
                          <p className="text-sm font-medium text-foreground mb-4">
                            Key Technologies:
                          </p>
                          <motion.div 
                            className="flex flex-wrap gap-2"
                            variants={staggerChildrenVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            {experience.technologies.map((tech, techIndex) => (
                              <motion.div
                                key={tech}
                                variants={staggerItemVariants}
                                whileHover={{ scale: 1.05, y: -2 }}
                              >
                                <Badge variant="secondary" className="text-xs glass-effect hover:bg-primary/20 transition-colors">
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}