'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Star, GitFork, Users, Code, Trophy, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { githubStats, socialLinks } from '@/lib/constants';
import { 
  containerVariants, 
  fadeInUpVariants, 
  staggerChildrenVariants,
  staggerItemVariants,
  cardHoverVariants
} from '@/lib/animations';

export function GitHub() {
  const [titleRef, titleInView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });
  const [statsRef, statsInView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
  const [projectsRef, projectsInView] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  const stats = [
    {
      icon: <Github className="h-6 w-6" />,
      label: 'Repositories',
      value: githubStats.repositories,
      color: 'text-primary'
    },
    {
      icon: <Users className="h-6 w-6" />,
      label: 'Followers',
      value: githubStats.followers,
      color: 'text-blue-500'
    },
    {
      icon: <Star className="h-6 w-6" />,
      label: 'Stars Earned',
      value: githubStats.stars,
      color: 'text-yellow-500'
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      label: 'Achievements',
      value: githubStats.achievements.length,
      color: 'text-purple-500'
    }
  ];

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'Dart': 'bg-blue-500',
      'TypeScript': 'bg-blue-600',
      'JavaScript': 'bg-yellow-500',
      'Python': 'bg-green-500',
      'Java': 'bg-red-500'
    };
    return colors[language] || 'bg-gray-500';
  };

  return (
    <section id="github" className="py-20 bg-background relative overflow-hidden">
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
            <Github className="h-8 w-8 inline-block mr-3" />
            GitHub Contributions
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUpVariants}
          >
            Check out my open-source contributions and development activity on GitHub.
          </motion.p>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          variants={staggerChildrenVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={staggerItemVariants}
              whileHover="hover"
              initial="rest"
            >
              <motion.div variants={cardHoverVariants}>
                <Card className="bg-card/50 glass-effect hover-lift transition-all duration-300 border-primary/20 text-center">
                  <CardContent className="p-6">
                    <motion.div 
                      className={`flex justify-center mb-3 ${stat.color}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div 
                      className="text-2xl font-bold text-foreground mb-1"
                      initial={{ scale: 0 }}
                      animate={statsInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* GitHub Activity */}
          <div className="lg:col-span-2">
            <motion.div 
              ref={projectsRef}
              className="space-y-6"
              initial="hidden"
              animate={projectsInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <motion.h3 
                className="text-2xl font-semibold mb-6 text-foreground"
                variants={fadeInUpVariants}
              >
                Featured Repositories
              </motion.h3>
              
              <motion.div 
                className="grid gap-4"
                variants={staggerChildrenVariants}
              >
                {githubStats.recentProjects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    variants={staggerItemVariants}
                    whileHover="hover"
                    initial="rest"
                  >
                    <motion.div variants={cardHoverVariants}>
                      <Card className="bg-card/50 glass-effect hover-lift transition-all duration-300 border-primary/20">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Code className="h-5 w-5 text-primary" />
                              </motion.div>
                              <h4 className="font-semibold text-foreground hover:text-primary transition-colors">
                                {project.name}
                              </h4>
                            </div>
                            <div className="flex items-center gap-2">
                              {project.stars && (
                                <div className="flex items-center gap-1 text-yellow-500">
                                  <Star className="h-4 w-4" />
                                  <span className="text-sm">{project.stars}</span>
                                </div>
                              )}
                              <motion.a
                                href={`${socialLinks.github}/${project.name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <ExternalLink className="h-4 w-4" />
                              </motion.a>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                            {project.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <Badge 
                              variant="secondary" 
                              className={`text-white text-xs ${getLanguageColor(project.language)}`}
                            >
                              {project.language}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* GitHub Profile Card */}
          <div className="lg:col-span-1">
            <motion.div 
              className="space-y-6"
              initial="hidden"
              animate={projectsInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {/* Profile Card */}
              <motion.div variants={fadeInUpVariants}>
                <Card className="bg-gradient-to-br from-primary/10 to-blue-500/10 border-primary/20 hover-lift">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="flex items-center justify-center gap-2">
                      <Github className="h-6 w-6 text-primary" />
                      GitHub Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      <p className="text-muted-foreground text-sm">
                        <strong className="text-foreground">@{githubStats.username}</strong>
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {githubStats.following} following · {githubStats.followers} followers
                      </p>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90"
                        onClick={() => window.open(socialLinks.github, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        View on GitHub
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Achievements */}
              <motion.div variants={fadeInUpVariants}>
                <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-600">
                      <Trophy className="h-5 w-5" />
                      Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {githubStats.achievements.map((achievement) => (
                      <div key={achievement} className="flex items-center gap-3">
                        <Trophy className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-foreground">{achievement}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* GitHub Stats Image */}
              <motion.div variants={fadeInUpVariants}>
                <Card className="bg-card/50 border-primary/20 hover-lift overflow-hidden">
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <img 
                        src={`https://github-readme-stats.vercel.app/api?username=${githubStats.username}&show_icons=true&theme=dark&hide_border=true`}
                        alt="GitHub Stats"
                        className="w-full rounded-lg"
                        loading="lazy"
                      />
                      <img 
                        src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubStats.username}&theme=dark&hide_border=true`}
                        alt="GitHub Streak"
                        className="w-full rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
