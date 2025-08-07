'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Bug, Upload, Code, MessageCircle, Calendar, CheckCircle } from 'lucide-react';
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

export function BugFix() {
  const [titleRef, titleInView] = useIntersectionObserver({ threshold: 0.3 });
  const [contentRef, contentInView] = useIntersectionObserver({ threshold: 0.2 });

  const services = [
    {
      icon: <Bug className="h-6 w-6" />,
      title: 'Backend Debugging',
      description: 'API issues, database problems, performance optimization'
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Flutter Issues',
      description: 'UI problems, state management, performance issues'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Deployment Help',
      description: 'AWS, DigitalOcean, Docker, CI/CD pipeline issues'
    }
  ];

  return (
    <section id="bug-fix" className="py-20 bg-muted/30 relative overflow-hidden">
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
            💡 Fix Bugs in Your Code with Vikash
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-2"
            variants={fadeInUpVariants}
          >
            Need help debugging backend, Flutter or deployment issues? I got you.
          </motion.p>
          <motion.p 
            className="text-lg text-muted-foreground/80 max-w-2xl mx-auto"
            variants={fadeInUpVariants}
          >
            Submit your code snippets, issues, or bugs and get expert solutions with detailed explanations.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Services */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={fadeInLeftVariants}
          >
            <motion.div variants={staggerChildrenVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                What I Can Help With
              </h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItemVariants}
                    whileHover="hover"
                    initial="rest"
                  >
                    <motion.div variants={cardHoverVariants}>
                      <Card className="bg-card/50 glass-effect hover-lift transition-all duration-300 border-primary/20">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <motion.div 
                              className="p-2 bg-primary/20 rounded-lg text-primary"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.2 }}
                            >
                              {service.icon}
                            </motion.div>
                            <div>
                              <h4 className="font-semibold mb-2 text-foreground">
                                {service.title}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUpVariants}>
              <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">
                        Quick Response Time
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Usually respond within 24 hours with detailed solutions and code examples.
                      </p>
                      <Button variant="outline" size="sm" className="border-green-500/20">
                        <Calendar className="h-4 w-4 mr-2" />
                        Book a Call
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Bug Submission Form */}
          <motion.div 
            ref={contentRef}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={fadeInRightVariants}
          >
            <Card className="bg-card/50 glass-effect border-primary/20">
              <CardHeader className="pb-6">
                <h3 className="text-xl font-semibold text-foreground">
                  Submit Your Bug or Issue
                </h3>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll help you debug your code.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="issue-type">Issue Type *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select issue type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="backend">Backend/API Issues</SelectItem>
                      <SelectItem value="flutter">Flutter/Mobile Issues</SelectItem>
                      <SelectItem value="database">Database Problems</SelectItem>
                      <SelectItem value="deployment">Deployment Issues</SelectItem>
                      <SelectItem value="performance">Performance Optimization</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Problem Description *</Label>
                  <Textarea 
                    id="description"
                    placeholder="Describe your issue in detail. What are you trying to achieve? What's not working? Include error messages if any..."
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="code-snippet">Code Snippet (Optional)</Label>
                  <Textarea 
                    id="code-snippet"
                    placeholder="Paste your relevant code here..."
                    rows={6}
                    className="font-mono text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file-upload">Upload Files (Optional)</Label>
                  <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Drag and drop files here, or click to browse
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Support for .dart, .js, .ts, .json, .log files (Max 5MB)
                    </p>
                    <input 
                      type="file" 
                      id="file-upload" 
                      className="hidden" 
                      multiple 
                      accept=".dart,.js,.ts,.json,.log,.txt"
                    />
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Submit Bug Report
                  </Button>
                </motion.div>

                <p className="text-xs text-muted-foreground text-center">
                  I'll review your submission and get back to you with a solution within 24 hours.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
