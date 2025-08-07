export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: 'frontend' | 'fullstack' | 'backend' | 'mobile';
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'cloud' | 'mobile';
  icon?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  status: string;
}

export interface BugFixForm {
  name: string;
  email: string;
  issueType: string;
  description: string;
  codeSnippet?: string;
  file?: File;
}