'use client';

import { motion } from 'framer-motion';
import { 
  Server, 
  Smartphone, 
  Cloud, 
  Database, 
  Code2, 
  Zap, 
  Shield, 
  TrendingUp,
  Clock,
  Users,
  Globe,
  Lock
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MotionBackground } from '@/components/ui/motion-background';
import { 
  containerVariants, 
  fadeInUpVariants, 
  staggerChildrenVariants,
  staggerItemVariants
} from '@/lib/animations';

const services = [
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Scalable server-side applications using Node.js, NestJS, and microservices architecture.',
    features: ['RESTful APIs', 'GraphQL', 'Microservices', 'Authentication', 'Real-time features'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-500/10 to-cyan-500/10',
    borderColor: 'border-blue-500/20'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications using Flutter for iOS and Android.',
    features: ['Cross-platform', 'Native performance', 'Custom UI/UX', 'State management', 'Offline support'],
    color: 'from-emerald-500 to-green-500',
    bgColor: 'from-emerald-500/10 to-green-500/10',
    borderColor: 'border-emerald-500/20'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Infrastructure setup, deployment automation, and cloud optimization.',
    features: ['AWS/DigitalOcean', 'Docker', 'CI/CD', 'Monitoring', 'Auto-scaling'],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-500/10 to-pink-500/10',
    borderColor: 'border-purple-500/20'
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Optimized database architecture for high-performance applications.',
    features: ['MongoDB', 'PostgreSQL', 'Redis', 'Optimization', 'Backup strategies'],
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-500/10 to-red-500/10',
    borderColor: 'border-orange-500/20'
  },
  {
    icon: Code2,
    title: 'Full-Stack Solutions',
    description: 'End-to-end development from concept to deployment.',
    features: ['Frontend + Backend', 'Mobile apps', 'Database design', 'DevOps', 'Maintenance'],
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'from-indigo-500/10 to-blue-500/10',
    borderColor: 'border-indigo-500/20'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed optimization and scalability improvements for existing applications.',
    features: ['Code optimization', 'Database tuning', 'Caching strategies', 'Load balancing', 'Monitoring'],
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'from-yellow-500/10 to-orange-500/10',
    borderColor: 'border-yellow-500/20'
  }
];

const benefits = [
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Quick turnaround times without compromising quality'
  },
  {
    icon: Users,
    title: 'Client Focused',
    description: 'Dedicated support and regular communication'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Remote collaboration from anywhere in the world'
  },
  {
    icon: Lock,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.9% uptime'
  }
];

export function Services() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Enhanced Motion Background */}
      <MotionBackground variant="trendy" intensity="subtle" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-slate-900/20 dark:from-slate-950/30 dark:via-transparent dark:to-slate-950/30" />
      
      <div className="container-modern relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30"
            variants={fadeInUpVariants}
          >
            <span className="text-3xl">⚡</span>
          </motion.div>
          
          <motion.h2 
            className="gradient-text mb-6"
            variants={fadeInUpVariants}
          >
            Services I Offer
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUpVariants}
          >
            Comprehensive development solutions tailored to your business needs. 
            From concept to deployment, I handle every aspect of your project.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildrenVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={staggerItemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <Card className={`card-glass h-full bg-gradient-to-br ${service.bgColor} ${service.borderColor} hover-lift`}>
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={scrollToContact}
                    className={`border-current text-current hover:bg-gradient-to-r ${service.color} hover:text-white hover:border-transparent transition-all duration-300`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            variants={fadeInUpVariants}
          >
            Why Choose Me?
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={staggerItemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center p-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl border border-blue-500/20 backdrop-blur-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-3xl font-bold mb-4 gradient-text"
            variants={fadeInUpVariants}
          >
            Ready to Build Something Amazing?
          </motion.h3>
          
          <motion.p 
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            variants={fadeInUpVariants}
          >
            Let's discuss your project requirements and create a solution that exceeds your expectations.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUpVariants}
          >
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="btn-primary px-8 py-4 text-lg"
            >
              Start Your Project
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="btn-secondary px-8 py-4 text-lg"
            >
              View Portfolio
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
