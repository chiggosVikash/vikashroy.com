'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { blogPosts } from '@/lib/constants';
import { 
  containerVariants, 
  fadeInUpVariants, 
  staggerChildrenVariants,
  staggerItemVariants,
  cardHoverVariants
} from '@/lib/animations';

export function Blog() {
  const [titleRef, titleInView] = useIntersectionObserver({ threshold: 0.3 });
  const [postsRef, postsInView] = useIntersectionObserver({ threshold: 0.1 });
  const [subscribeRef, subscribeInView] = useIntersectionObserver({ threshold: 0.3 });

  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-primary/5 pointer-events-none" />
      
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
            📓 Latest Blog Posts
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUpVariants}
          >
            Insights on Flutter development, backend architecture, cloud deployment, and debugging tips 
            from real-world projects.
          </motion.p>
        </motion.div>

        <motion.div 
          ref={postsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          animate={postsInView ? "visible" : "hidden"}
          variants={staggerChildrenVariants}
        >
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={staggerItemVariants}
              whileHover="hover"
              initial="rest"
            >
              <motion.div variants={cardHoverVariants}>
                <Card className="h-full bg-card/50 glass-effect hover-lift transition-all duration-300 border-primary/20 cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <Clock className="h-4 w-4 ml-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-lg leading-tight mb-3 text-foreground">
                      {post.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-primary text-sm font-medium group">
                      <span>Read more</span>
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div 
          ref={subscribeRef}
          className="max-w-2xl mx-auto"
          initial="hidden"
          animate={subscribeInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={fadeInUpVariants}>
            <Card className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <motion.div
                    className="p-3 bg-primary/20 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail className="h-8 w-8 text-primary" />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  Subscribe to My Newsletter
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get the latest updates on Flutter development, backend tips, and exclusive tutorials 
                  delivered straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input 
                    placeholder="Enter your email" 
                    type="email"
                    className="flex-1"
                  />
                  <Button className="bg-primary hover:bg-primary/90">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  No spam, unsubscribe at any time.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
