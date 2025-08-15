'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { ContactForm } from '@/types';
import { socialLinks, personalInfo } from '@/lib/constants';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { 
  containerVariants, 
  fadeInUpVariants, 
  fadeInLeftVariants,
  fadeInRightVariants,
  staggerChildrenVariants,
  staggerItemVariants,
  buttonHoverVariants
} from '@/lib/animations';

export function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [titleRef, titleInView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });
  const [formRef, formInView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
  const [contactRef, contactInView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      content: socialLinks.email,
      link: `mailto:${socialLinks.email}`,
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Location',
      content: personalInfo.location,
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone',
      content: socialLinks.phone,
      link: `tel:${socialLinks.phone}`,
    },
  ];

  const socialPlatforms = [
    {
      icon: <Github className="h-6 w-6" />,
      name: 'GitHub',
      url: socialLinks.github,
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: 'LinkedIn',
      url: socialLinks.linkedin,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />
      
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
            📞 Let's Work Together
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUpVariants}
          >
            Ready to build your next Flutter app, backend system, or SaaS platform? 
            Let's discuss how I can help bring your project to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={fadeInLeftVariants}
          >
            <Card className="glass-effect border-primary/20 hover-lift">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    variants={staggerChildrenVariants}
                    initial="hidden"
                    animate={formInView ? "visible" : "hidden"}
                  >
                    <motion.div className="space-y-2" variants={staggerItemVariants}>
                      <Label htmlFor="name">Name</Label>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                          className="glass-effect"
                        />
                      </motion.div>
                    </motion.div>
                    <motion.div className="space-y-2" variants={staggerItemVariants}>
                      <Label htmlFor="email">Email</Label>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="glass-effect"
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Label htmlFor="subject">Subject</Label>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="glass-effect"
                      />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Label htmlFor="message">Message</Label>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or how I can help..."
                        rows={6}
                        required
                        className="glass-effect"
                      />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 }}
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonHoverVariants}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div 
                            className="rounded-full h-4 w-4 border-b-2 border-white mr-2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            ref={contactRef}
            className="space-y-8"
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={fadeInRightVariants}
          >
            <motion.div variants={staggerChildrenVariants}>
              <motion.div variants={staggerItemVariants}>
                <Card className="glass-effect border-primary/20 hover-lift">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Get In Touch</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start space-x-4"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div 
                          className="text-primary mt-1"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                        >
                          {info.icon}
                        </motion.div>
                        <div>
                          <h3 className="font-medium text-foreground">{info.title}</h3>
                          {info.link ? (
                            <motion.a
                              href={info.link}
                              className="text-muted-foreground hover:text-primary transition-colors"
                              whileHover={{ scale: 1.05 }}
                            >
                              {info.content}
                            </motion.a>
                          ) : (
                            <p className="text-muted-foreground">{info.content}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={staggerItemVariants}>
                <Card className="glass-effect border-primary/20 hover-lift">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Follow Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-6">
                      {socialPlatforms.map((platform, index) => (
                        <motion.a
                          key={index}
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors duration-200 flex flex-col items-center space-y-2"
                          aria-label={platform.name}
                          whileHover={{ scale: 1.1, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {platform.icon}
                          <span className="text-sm">{platform.name}</span>
                        </motion.a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={staggerItemVariants}>
                <Card className="glass-effect border-green-500/20 hover-lift">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <motion.h3 
                        className="font-semibold mb-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        Available for Work
                      </motion.h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        I'm currently open to new opportunities and interesting projects.
                      </p>
                      <div className="flex items-center justify-center">
                        <motion.div 
                          className="w-3 h-3 bg-green-500 rounded-full mr-2"
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
                        <span className="text-green-500 text-sm font-medium">Available</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}