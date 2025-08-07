import { Project, Experience, Skill } from '@/types';

export const projects: Project[] = [
  {
    id: 'dp-bazaar',
    title: 'DP Bazaar',
    description: 'MLM network platform with comprehensive web and Flutter applications featuring real-time analytics and multi-level commission tracking.',
    longDescription: 'A sophisticated MLM (Multi-Level Marketing) platform built with Flutter for mobile apps and NestJS for backend. Features include real-time analytics dashboard, commission calculations, network visualization, payment processing, and admin controls for managing the entire MLM ecosystem.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Flutter', 'NestJS', 'MongoDB', 'Socket.io', 'AWS', 'Payment Gateway'],
    category: 'fullstack',
    liveUrl: 'https://dpbazaar.com',
    githubUrl: 'https://github.com/vikashkumar/dp-bazaar',
    featured: true,
  },
  {
    id: 'hamara-ticket',
    title: 'HamaraTicket',
    description: 'High-volume event booking system with web and mobile applications supporting thousands of concurrent users.',
    longDescription: 'A scalable event booking platform handling high-volume ticket sales with real-time inventory management, payment processing, QR code generation, and comprehensive admin dashboard. Built to handle peak loads during popular events.',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Flutter', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Payment Gateway'],
    category: 'fullstack',
    liveUrl: 'https://hamaraticket.com',
    githubUrl: 'https://github.com/vikashkumar/hamara-ticket',
    featured: true,
  },
  {
    id: 'drs-solar',
    title: 'DRS Solar',
    description: 'Modern corporate website for solar energy company built with Next.js and React with responsive design.',
    longDescription: 'A professional corporate website for DRS Solar featuring modern design, responsive layouts, service showcases, project galleries, and contact forms. Built with performance optimization and SEO best practices.',
    image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    category: 'frontend',
    liveUrl: 'https://drssolar.com',
    githubUrl: 'https://github.com/vikashkumar/drs-solar',
    featured: true,
  },
  {
    id: 'lagoon-waterpark',
    title: 'Lagoon Waterpark',
    description: 'Electron-based desktop billing system and web POS portal for waterpark operations and management.',
    longDescription: 'A comprehensive billing and POS system built with Electron for desktop operations and web portal for management. Features include ticket generation, inventory management, real-time reporting, and integrated payment processing.',
    image: 'https://images.pexels.com/photos/164335/pexels-photo-164335.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Electron', 'React', 'Node.js', 'MongoDB', 'POS Integration'],
    category: 'fullstack',
    githubUrl: 'https://github.com/vikashkumar/lagoon-waterpark',
    featured: true,
  },
  {
    id: 'dehat-fresh',
    title: 'Dehat Fresh',
    description: 'Multi-tenant SaaS grocery platform with real-time order processing, Flutter mobile app, and comprehensive web dashboard.',
    longDescription: 'A scalable SaaS grocery delivery platform supporting multiple vendors with real-time order tracking, inventory management, delivery optimization, payment processing, and separate apps for customers, vendors, and delivery partners.',
    image: 'https://images.pexels.com/photos/4199098/pexels-photo-4199098.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Flutter', 'NestJS', 'PostgreSQL', 'Redis', 'AWS', 'Socket.io', 'Payment Gateway'],
    category: 'fullstack',
    liveUrl: 'https://dehatfresh.com',
    githubUrl: 'https://github.com/vikashkumar/dehat-fresh',
    featured: true,
  },
  {
    id: 'expert-in-the-city',
    title: 'ExpertInTheCity',
    description: 'Expert-user matchmaking marketplace connecting professionals with clients, built with Flutter and NestJS.',
    longDescription: 'A sophisticated marketplace platform connecting experts with users seeking professional services. Features include profile matching, booking system, payment processing, rating system, and real-time chat functionality.',
    image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Flutter', 'NestJS', 'MongoDB', 'Socket.io', 'AWS', 'Payment Gateway'],
    category: 'fullstack',
    liveUrl: 'https://expertinthecity.com',
    githubUrl: 'https://github.com/vikashkumar/expert-in-the-city',
    featured: true,
  },
];

export const experiences: Experience[] = [
  {
    id: 'senior-backend-flutter-developer',
    company: 'Freelance & Contract Work',
    position: 'Senior Backend & Flutter Developer',
    location: 'Patna, Bihar, India',
    startDate: 'Jan 2021',
    endDate: 'Present',
    description: [
      'Developed 6+ scalable web and mobile applications serving thousands of users',
      'Built robust backend systems using Node.js, NestJS with microservices architecture',
      'Created cross-platform mobile applications using Flutter for both user and admin panels',
      'Implemented CI/CD pipelines using Docker, AWS, and DigitalOcean for seamless deployments',
      'Designed and optimized databases (MongoDB, PostgreSQL, CouchDB) for high-performance applications'
    ],
    technologies: ['Flutter', 'NestJS', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker']
  },
  {
    id: 'fullstack-developer',
    company: 'Various Client Projects',
    position: 'Full Stack Developer',
    location: 'Remote',
    startDate: 'Jun 2020',
    endDate: 'Dec 2020',
    description: [
      'Delivered end-to-end solutions for MLM platforms, e-commerce, and SaaS applications',
      'Integrated payment gateways and real-time features using Socket.io',
      'Built responsive web applications with React and Next.js',
      'Developed RESTful APIs and implemented authentication systems',
      'Collaborated with clients to understand requirements and deliver pixel-perfect solutions'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Payment Gateway', 'AWS']
  },
  {
    id: 'backend-developer',
    company: 'Early Career Projects',
    position: 'Backend Developer',
    location: 'Patna, Bihar, India',
    startDate: 'Jan 2020',
    endDate: 'May 2020',
    description: [
      'Started journey in backend development with Node.js and Express.js',
      'Built REST APIs for mobile applications and web platforms',
      'Worked with databases and implemented basic authentication systems',
      'Learned DevOps practices and cloud deployment on AWS',
      'Contributed to open-source projects and enhanced coding skills'
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Git', 'AWS']
  }
];

export const skills: Skill[] = [
  // Backend
  { name: 'Node.js', level: 95, category: 'backend' },
  { name: 'NestJS', level: 90, category: 'backend' },
  { name: 'RESTful APIs', level: 95, category: 'backend' },
  { name: 'Express.js', level: 85, category: 'backend' },
  { name: 'Microservices', level: 85, category: 'backend' },
  { name: 'GraphQL', level: 75, category: 'backend' },
  
  // Mobile
  { name: 'Flutter', level: 95, category: 'mobile' },
  { name: 'Dart', level: 90, category: 'mobile' },
  { name: 'Mobile UI/UX', level: 85, category: 'mobile' },
  { name: 'State Management', level: 90, category: 'mobile' },
  
  // Database
  { name: 'MongoDB', level: 90, category: 'database' },
  { name: 'PostgreSQL', level: 85, category: 'database' },
  { name: 'CouchDB', level: 80, category: 'database' },
  { name: 'Redis', level: 75, category: 'database' },
  { name: 'Database Design', level: 85, category: 'database' },
  
  // DevOps & Cloud
  { name: 'AWS', level: 85, category: 'cloud' },
  { name: 'DigitalOcean', level: 80, category: 'cloud' },
  { name: 'Docker', level: 85, category: 'cloud' },
  { name: 'CI/CD', level: 80, category: 'cloud' },
  { name: 'Linux', level: 75, category: 'cloud' },
  
  // Frontend
  { name: 'React', level: 85, category: 'frontend' },
  { name: 'Next.js', level: 80, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
 
  
  // Tools
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Socket.io', level: 85, category: 'tools' },
  { name: 'Payment Gateways', level: 80, category: 'tools' },
  { name: 'Electron', level: 75, category: 'tools' },
];

export const socialLinks = {
  github: 'https://github.com/chiggosVikash',
  linkedin: 'https://linkedin.com/in/vikash-kumar-96678928a',
  email: 'vikash.personal15@gmail.com',
  phone: '+91-7033576828',
};

// Personal Information
export const personalInfo = {
  name: 'Vikash Kumar',
  title: 'Backend & Flutter Developer',
  location: 'Bihar, India',
  experience: '4+ years',
  bio: "I'm a Backend and Mobile Application Developer (Flutter). Founder of ParivartanX & HamaraTicket. I don't just build software—I build solutions that power real businesses.",
  specialties: ['Backend Development', 'Flutter Apps', 'SaaS Platforms'],
  websites: ['https://parivartanx.com', 'https://hamaraticket.com'],
};

// Education Information
export const education = [
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Patliputra University',
    location: 'Patna, Bihar, India',
    year: 'Expected 2026',
    status: 'In Progress',
  },
  {
    id: 'fullstack-dev',
    degree: 'Full Stack Development',
    institution: '100xDevs',
    location: 'Online',
    year: '2024',
    status: 'Completed',
  },
  {
    id: 'process-engineering',
    degree: 'Bachelor of Design in Process Engineering',
    institution: 'Technical Institute',
    location: 'Bihar, India',
    year: '2022',
    status: 'Completed',
  },
];

// Blog Posts
export const blogPosts = [
  {
    id: 'grocery-saas-scaling',
    title: 'How I scaled a grocery SaaS with Flutter & NestJS',
    excerpt: 'Learn the architecture decisions and optimizations that helped scale Dehat Fresh to handle thousands of concurrent orders.',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['Flutter', 'NestJS', 'Scaling', 'SaaS'],
    featured: true,
  },
  {
    id: 'firebase-vs-custom-auth',
    title: 'Firebase vs Custom Auth: A Backend Engineer\'s Perspective',
    excerpt: 'A comprehensive comparison of Firebase Authentication vs custom authentication solutions for different use cases.',
    date: '2024-01-08',
    readTime: '6 min read',
    tags: ['Authentication', 'Firebase', 'Backend', 'Security'],
    featured: true,
  },
  {
    id: 'flutter-debugging-tricks',
    title: '5 Debugging Tricks Every Flutter Dev Should Know',
    excerpt: 'Essential debugging techniques that will save you hours of development time in Flutter applications.',
    date: '2024-01-01',
    readTime: '5 min read',
    tags: ['Flutter', 'Debugging', 'Mobile Development', 'Tips'],
    featured: true,
  },
];

// Testimonials
export const testimonials = [
  {
    id: 'client-1',
    name: 'Rahul Sharma',
    position: 'CEO, DP Bazaar',
    company: 'DP Bazaar',
    content: 'Vikash delivered an exceptional MLM platform that exceeded our expectations. His expertise in Flutter and backend development is outstanding.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: 'client-2',
    name: 'Priya Gupta',
    position: 'CTO, HamaraTicket',
    company: 'HamaraTicket',
    content: 'The high-volume event booking system Vikash built handles thousands of concurrent users flawlessly. Highly recommended!',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: 'client-3',
    name: 'Amit Singh',
    position: 'Founder, Dehat Fresh',
    company: 'Dehat Fresh',
    content: 'Vikash created a robust SaaS platform that scales beautifully. His attention to detail and technical expertise is remarkable.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];

// GitHub Stats
export const githubStats = {
  username: 'chiggosVikash',
  repositories: 52,
  followers: 5,
  following: 14,
  stars: 12,
  achievements: ['Pull Shark x2', 'YOLO'],
  recentProjects: [
    {
      name: 'expense_manager',
      description: 'User-friendly open-source mobile application crafted with Flutter that simplifies expense tracking and analysis',
      language: 'Dart',
      stars: 1
    },
    {
      name: 'quiz_app',
      description: 'Dynamic and engaging mobile app built using Flutter offering stimulating quiz-taking experience',
      language: 'Dart',
      stars: 2
    },
    {
      name: 'weather_app',
      description: 'Simple weather application built using Flutter for checking current weather conditions',
      language: 'Dart'
    },
    {
      name: 'chat_gpt_in_flutter',
      description: 'ChatGPT integration in Flutter application',
      language: 'Dart'
    },
    {
      name: 'ygsd',
      description: 'TypeScript project with modern development setup',
      language: 'TypeScript',
      stars: 1
    }
  ]
};