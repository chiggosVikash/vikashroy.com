'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Save, 
  Plus, 
  X,
  FileText,
  Eye,
  Calendar,
  Tag,
  User,
  Image,
  Clock,
  Search,
  TrendingUp,
  Loader2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { useRouter, useParams } from 'next/navigation';
import RichTextEditor from '@/components/ui/rich-text-editor';

const categories = ['Frontend', 'Backend', 'Mobile', 'DevOps', 'AI/ML', 'General', 'Tutorial', 'Case Study', 'Opinion'];
const statuses = ['Draft', 'Published', 'Scheduled', 'Archived'];

// Mock blog post data
const mockBlogPost = {
  id: 1,
  title: 'React Best Practices for 2024',
  excerpt: 'Learn the latest React patterns and best practices to build better applications.',
  content: '# React Best Practices for 2024\n\nReact has evolved significantly over the years...',
  author: 'Vikash Roy',
  status: 'Published',
  category: 'Frontend',
  tags: ['React', 'JavaScript', 'Best Practices', 'Performance', 'TypeScript'],
  image: '/api/placeholder/1200/630',
  slug: 'react-best-practices-2024',
  metaTitle: 'React Best Practices for 2024 - Complete Guide',
  metaDescription: 'Learn the latest React patterns, performance optimization techniques, and best practices for building modern applications in 2024.',
  keywords: 'React, JavaScript, Best Practices, Performance, TypeScript, Hooks, 2024',
  featured: true,
  allowComments: true,
  publishDate: '2024-02-15T10:00:00',
  readTime: '8 min read',
  seoScore: 85
};

export default function EditBlogPost() {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: 'Vikash Roy',
    status: 'Draft',
    category: '',
    tags: [] as string[],
    image: '',
    slug: '',
    metaTitle: '',
    metaDescription: '',
    keywords: '',
    featured: false,
    allowComments: true,
    publishDate: '',
    readTime: '',
    seoScore: 0
  });
  
  const [newTag, setNewTag] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const params = useParams();
  const blogId = params.id;

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setFormData(mockBlogPost);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPost();
  }, [blogId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
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

  const generateSlug = () => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
    setFormData(prev => ({ ...prev, slug }));
  };

  const calculateReadTime = () => {
    const wordsPerMinute = 200;
    const wordCount = formData.content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    setFormData(prev => ({ ...prev, readTime: `${readTime} min read` }));
  };

  const calculateSEOScore = () => {
    let score = 0;
    if (formData.title.length > 10 && formData.title.length < 60) score += 20;
    if (formData.metaDescription.length > 50 && formData.metaDescription.length < 160) score += 20;
    if (formData.tags.length >= 3) score += 15;
    if (formData.image) score += 15;
    if (formData.content.length > 300) score += 30;
    setFormData(prev => ({ ...prev, seoScore: score }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/admin/blog');
    } catch (error) {
      console.error('Error updating blog post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.title && formData.excerpt && formData.content && formData.category && formData.status;

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin text-purple-500 mx-auto mb-4" />
            <p className="text-slate-600 dark:text-slate-400">Loading blog post...</p>
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
              onClick={() => router.push('/admin/blog')}
              className="p-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Edit Blog Post</h1>
              <p className="text-slate-600 dark:text-slate-400 mt-2">
                Update your blog post content and settings
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
                Update Post
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
                  <FileText className="h-5 w-5 text-purple-500" />
                  <span>Basic Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Blog Post Title *
                  </label>
                  <Input
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter an engaging title for your blog post"
                    className="text-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Excerpt *
                  </label>
                  <Textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    placeholder="Write a compelling excerpt that summarizes your post (150-200 characters)"
                    rows={3}
                    maxLength={200}
                    required
                  />
                  <div className="text-xs text-slate-500 mt-1 text-right">
                    {formData.excerpt.length}/200 characters
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    >
                      <option value="">Select category</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Status *
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    >
                      {statuses.map(status => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Author
                    </label>
                    <Input
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      placeholder="Author name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Slug
                    </label>
                    <div className="flex space-x-2">
                      <Input
                        name="slug"
                        value={formData.slug}
                        onChange={handleInputChange}
                        placeholder="auto-generated-slug"
                      />
                      <Button type="button" onClick={generateSlug} variant="outline">
                        Generate
                      </Button>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      URL-friendly version of the title
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Publish Date
                    </label>
                    <Input
                      type="datetime-local"
                      name="publishDate"
                      value={formData.publishDate}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-purple-600 border-slate-300 rounded focus:ring-purple-500"
                    />
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Featured Post
                    </label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="allowComments"
                      checked={formData.allowComments}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-purple-600 border-slate-300 rounded focus:ring-purple-500"
                    />
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Allow Comments
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Content Editor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-blue-500" />
                  <span>Content Editor</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Blog Content *
                  </label>
                  <RichTextEditor
                    content={formData.content}
                    onChange={(content) => setFormData(prev => ({ ...prev, content }))}
                    placeholder="Write your blog post content here. Use the toolbar above for formatting..."
                  />
                  <div className="flex items-center justify-between mt-2">
                    <div className="text-xs text-slate-500">
                      Word count: {formData.content.split(/\s+/).filter(word => word.length > 0).length}
                    </div>
                    <Button type="button" onClick={calculateReadTime} variant="outline" size="sm">
                      Calculate Read Time
                    </Button>
                  </div>
                </div>

                {formData.readTime && (
                  <div className="flex items-center space-x-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-blue-700 dark:text-blue-300">
                      Estimated read time: {formData.readTime}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Tag className="h-5 w-5 text-green-500" />
                  <span>Tags</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Tags
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="flex items-center space-x-1">
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

          {/* Media & Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Image className="h-5 w-5 text-orange-500" />
                  <span>Media & Images</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Featured Image URL
                  </label>
                  <Input
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="https://example.com/featured-image.jpg"
                    type="url"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Recommended size: 1200x630px for social media sharing
                  </p>
                </div>

                {formData.image && (
                  <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Image Preview:
                    </div>
                    <div className="w-full h-48 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                      <img 
                        src={formData.image} 
                        alt="Featured image preview"
                        className="max-w-full max-h-full object-contain rounded"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* SEO & Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Search className="h-5 w-5 text-indigo-500" />
                  <span>SEO & Meta Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Meta Title
                  </label>
                  <Input
                    name="metaTitle"
                    value={formData.metaTitle}
                    onChange={handleInputChange}
                    placeholder="SEO-optimized title for search engines"
                    maxLength={60}
                  />
                  <div className="text-xs text-slate-500 mt-1 text-right">
                    {formData.metaTitle.length}/60 characters
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Meta Description
                  </label>
                  <Textarea
                    name="metaDescription"
                    value={formData.metaDescription}
                    onChange={handleInputChange}
                    placeholder="Brief description that appears in search results"
                    rows={3}
                    maxLength={160}
                  />
                  <div className="text-xs text-slate-500 mt-1 text-right">
                    {formData.metaDescription.length}/160 characters
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Keywords
                  </label>
                  <Input
                    name="keywords"
                    value={formData.keywords}
                    onChange={handleInputChange}
                    placeholder="Comma-separated keywords for SEO"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Separate keywords with commas
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <Button type="button" onClick={calculateSEOScore} variant="outline">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Calculate SEO Score
                  </Button>
                  
                  {formData.seoScore > 0 && (
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        SEO Score:
                      </span>
                      <div className="flex items-center space-x-1">
                        <div className="w-20 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-300 ${
                              formData.seoScore >= 80 ? 'bg-green-500' :
                              formData.seoScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${formData.seoScore}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-slate-900 dark:text-white">
                          {formData.seoScore}/100
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </form>
      </div>
    </AdminLayout>
  );
}
