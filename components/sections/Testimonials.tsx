'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { testimonials } from '@/lib/constants';
import { 
  containerVariants, 
  fadeInUpVariants, 
  staggerChildrenVariants,
  staggerItemVariants,
  cardHoverVariants
} from '@/lib/animations';

export function Testimonials() {
  const [titleRef, titleInView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });
  const [cardsRef, cardsInView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30 relative overflow-hidden">
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
            💬 Client Testimonials
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUpVariants}
          >
            What clients say about working with me on their projects.
          </motion.p>
        </motion.div>

        <motion.div 
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
          variants={staggerChildrenVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={staggerItemVariants}
              whileHover="hover"
              initial="rest"
            >
              <motion.div variants={cardHoverVariants}>
                <Card className="h-full bg-card/50 glass-effect hover-lift transition-all duration-300 border-primary/20 relative">
                  <CardContent className="p-6">
                    {/* Quote icon */}
                    <motion.div 
                      className="absolute top-4 right-4 text-primary/20"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Quote className="h-8 w-8" />
                    </motion.div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    {/* Testimonial content */}
                    <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    
                    {/* Client info */}
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="object-cover"
                        />
                        <AvatarFallback className="bg-primary/20 text-primary">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.position}
                        </p>
                        <p className="text-xs text-primary font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={fadeInUpVariants}>
            <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Want to Be the Next Success Story?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join these satisfied clients and let's build something amazing together. 
                  Whether it's a mobile app, backend system, or SaaS platform.
                </p>
                <motion.button
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const contactSection = document.querySelector('#contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Start Your Project
                </motion.button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
