'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Save, 
  Plus, 
  X,
  Upload,
  Link,
  Code,
  Eye,
  Calendar,
  Tag,
  FolderOpen,
  Loader2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { useRouter, useParams } from 'next/navigation';

const categories = ['Full-Stack', 'Backend', 'Frontend', 'Mobile', 'DevOps', 'AI/ML', 'Blockchain', 'Other'];
const statuses = ['Planning', 'Development', 'Testing', 'Live', 'Completed', 'On Hold'];



// Mock project data - replace with actual API call
const mockProject = {
  id: 1,
  title: 'DP Bazaar',
  description: 'MLM network platform with comprehensive web and Flutter applications',
  longDescription: 'A comprehensive MLM (Multi-Level Marketing) platform that includes web applications, mobile apps, and backend services. The platform handles user management, commission tracking, product catalogs, and real-time analytics.',
  category: 'Full-Stack',
  status: 'Live',
  technologies: ['Flutter', 'NestJS', 'MongoDB', 'React', 'Node.js'],
  image: '/api/placeholder/400/300',
  liveUrl: 'https://dpbazaar.com',
  githubUrl: 'https://github.com/username/dp-bazaar',
  demoUrl: '',
  featured: true,
  client: 'DP Bazaar Inc.',
  startDate: '2024-01-01',
  endDate: '2024-01-15',
  budget: '$25,000',
  teamSize: '3 developers',
  challenges: 'Complex MLM commission calculations, real-time synchronization between web and mobile apps, handling large user base with concurrent transactions.',
  solutions: 'Implemented efficient algorithms for commission calculations, used WebSocket for real-time updates, designed scalable database architecture with proper indexing.',
  results: 'Successfully launched platform with 1000+ active users, 99.9% uptime, and 50% reduction in commission calculation time.',
  tags: ['MLM', 'E-commerce', 'Real-time', 'Mobile-first']
};

export default function EditProject() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    longDescription: '',
    category: '',
    status: '',
    technologies: [] as string[],
    image: '',
    liveUrl: '',
    githubUrl: '',
    demoUrl: '',
    featured: false,
    client: '',
    startDate: '',
    endDate: '',
    budget: '',
    teamSize: '',
    challenges: '',
    solutions: '',
    results: '',
    tags: [] as string[]
  });
  
  const [newTag, setNewTag] = useState('');
  const [newTech, setNewTech] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const params = useParams();
  const projectId = params.id;

  useEffect(() => {
    // Simulate API call to fetch project data
    const fetchProject = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate loading
        setFormData(mockProject);
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const addTechnology = () => {
    if (newTech.trim() && !formData.technologies.includes(newTech.trim())) {
      setFormData(prev => ({
        ...prev,
        technologies: [...prev.technologies, newTech.trim()]
      }));
      setNewTech('');
    }
  };

  const removeTechnology = (tech: string) => {
    setFormData(prev => ({
      ...prev,
      technologies: prev.technologies.filter(t => t !== tech)
    }));
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const removeTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to projects list
      router.push('/admin/projects');
    } catch (error) {
      console.error('Error updating project:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.title && formData.description && formData.category && formData.status;

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin text-emerald-500 mx-auto mb-4" />
            <p className="text-slate-600 dark:text-slate-400">Loading project...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => router.push('/admin/projects')}
              className="p-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Edit Project</h1>
              <p className="text-slate-600 dark:text-slate-400 mt-2">
                Update project information and details
              </p>
            </div>
          </div>
          
          <Button
            onClick={handleSubmit}
            disabled={!isFormValid || isSubmitting}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Updating...</span>
              </div>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Update Project
              </>
            )}
          </Button>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FolderOpen className="h-5 w-5 text-emerald-500" />
                  <span>Basic Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Project Title *
                    </label>
                    <Input
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Enter project title"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      required
                    >
                      <option value="">Select category</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Short Description *
                  </label>
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Brief description of the project"
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Detailed Description
                  </label>
                  <Textarea
                    name="longDescription"
                    value={formData.longDescription}
                    onChange={handleInputChange}
                    placeholder="Comprehensive project description including features, architecture, and implementation details"
                    rows={6}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Status *
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      required
                    >
                      <option value="">Select status</option>
                      {statuses.map(status => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500"
                    />
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Featured Project
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Technologies & Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-blue-500" />
                  <span>Technologies & Tags</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Technologies */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Technologies Used
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.technologies.map(tech => (
                      <Badge key={tech} variant="secondary" className="flex items-center space-x-1">
                        <span>{tech}</span>
                        <button
                          type="button"
                          onClick={() => removeTechnology(tech)}
                          className="ml-1 hover:text-red-600"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Input
                      value={newTech}
                      onChange={(e) => setNewTech(e.target.value)}
                      placeholder="Add technology"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTechnology())}
                    />
                    <Button type="button" onClick={addTechnology} variant="outline">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Press Enter or click + to add technology
                  </p>
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Tags
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="flex items-center space-x-1">
                        <span>{tag}</span>
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="ml-1 hover:text-red-600"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Add tag"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    />
                    <Button type="button" onClick={addTag} variant="outline">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Press Enter or click + to add tag
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-purple-500" />
                  <span>Project Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Client/Company
                    </label>
                    <Input
                      name="client"
                      value={formData.client}
                      onChange={handleInputChange}
                      placeholder="Client name or company"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Team Size
                    </label>
                    <Input
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleInputChange}
                      placeholder="e.g., Solo, 3 developers, 10+ team"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Start Date
                    </label>
                    <Input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      End Date
                    </label>
                    <Input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Budget (Optional)
                  </label>
                    <Input
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      placeholder="e.g., $10,000, €5,000, or range"
                    />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-orange-500" />
                  <span>Project Story</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Challenges Faced
                  </label>
                  <Textarea
                    name="challenges"
                    value={formData.challenges}
                    onChange={handleInputChange}
                    placeholder="Describe the main challenges and problems you solved"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Solutions Implemented
                  </label>
                  <Textarea
                    name="solutions"
                    value={formData.solutions}
                    onChange={handleInputChange}
                    placeholder="Explain your approach and solutions to the challenges"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Results & Impact
                  </label>
                  <Textarea
                    name="results"
                    value={formData.results}
                    onChange={handleInputChange}
                    placeholder="Share the outcomes, metrics, and impact of your solution"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Links & Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Link className="h-5 w-5 text-indigo-500" />
                  <span>Links & Media</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Live Demo URL
                    </label>
                    <Input
                      name="liveUrl"
                      value={formData.liveUrl}
                      onChange={handleInputChange}
                      placeholder="https://your-project.com"
                      type="url"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      GitHub Repository
                    </label>
                    <Input
                      name="githubUrl"
                      value={formData.githubUrl}
                      onChange={handleInputChange}
                      placeholder="https://github.com/username/project"
                      type="url"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Demo Video URL
                    </label>
                    <Input
                      name="demoUrl"
                      value={formData.demoUrl}
                      onChange={handleInputChange}
                      placeholder="https://youtube.com/watch?v=..."
                      type="url"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Project Image URL
                    </label>
                    <Input
                      name="image"
                      value={formData.image}
                      onChange={handleInputChange}
                      placeholder="https://example.com/image.jpg"
                      type="url"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </form>
      </div>
    </AdminLayout>
  );
}
