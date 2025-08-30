'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye, 
  FileText,
  Calendar,
  User,
  Tag,
  Clock,
  TrendingUp
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { useRouter } from 'next/navigation';

// Mock data - replace with actual API calls
const mockBlogPosts = [
  {
    id: 1,
    title: 'React Best Practices for 2024',
    excerpt: 'Learn the latest React patterns and best practices to build better applications.',
    content: 'Full blog post content here...',
    author: 'Vikash Roy',
    status: 'Published',
    category: 'Frontend',
    tags: ['React', 'JavaScript', 'Best Practices'],
    image: '/api/placeholder/400/300',
    slug: 'react-best-practices-2024',
    publishedAt: '2024-02-15',
    createdAt: '2024-02-10',
    updatedAt: '2024-02-15',
    readTime: '8 min read',
    views: 1247
  },
  {
    id: 2,
    title: 'Building Scalable Backend Systems',
    excerpt: 'Architecture patterns and strategies for building robust backend systems.',
    content: 'Full blog post content here...',
    author: 'Vikash Roy',
    status: 'Draft',
    category: 'Backend',
    tags: ['Node.js', 'Architecture', 'Scalability'],
    image: '/api/placeholder/400/300',
    slug: 'building-scalable-backend-systems',
    publishedAt: null,
    createdAt: '2024-02-08',
    updatedAt: '2024-02-12',
    readTime: '12 min read',
    views: 0
  },
  {
    id: 3,
    title: 'Flutter vs React Native: A Developer\'s Perspective',
    excerpt: 'Comparing the two popular cross-platform frameworks based on real-world experience.',
    content: 'Full blog post content here...',
    author: 'Vikash Roy',
    status: 'Published',
    category: 'Mobile',
    tags: ['Flutter', 'React Native', 'Mobile Development'],
    image: '/api/placeholder/400/300',
    slug: 'flutter-vs-react-native-comparison',
    publishedAt: '2024-01-20',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20',
    readTime: '10 min read',
    views: 892
  }
];

const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'DevOps', 'General'];
const statuses = ['All', 'Published', 'Draft', 'Scheduled', 'Archived'];

export default function AdminBlog() {
  const [blogPosts, setBlogPosts] = useState(mockBlogPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const router = useRouter();

  const filteredBlogPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || post.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      setBlogPosts(blogPosts.filter(post => post.id !== id));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Draft':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Scheduled':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Archived':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Backend':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300';
      case 'Mobile':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'DevOps':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        >
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Blog Posts</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Manage your blog content and share your knowledge with the world.
            </p>
          </div>
          
          <Button
            onClick={() => router.push('/admin/blog/new')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
          >
            <Plus className="h-4 w-4 mr-2" />
            Write Post
          </Button>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="card-glass">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="Search blog posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Filter Toggle */}
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={selectedCategory === category ? 
                        "bg-purple-600 hover:bg-purple-700" : 
                        "hover:bg-slate-100 dark:hover:bg-slate-700"
                      }
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Status Filters */}
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700"
                >
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mr-2">
                      Status:
                    </span>
                    {statuses.map((status) => (
                      <Button
                        key={status}
                        variant={selectedStatus === status ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedStatus(status)}
                        className={selectedStatus === status ? 
                          "bg-blue-600 hover:bg-blue-700" : 
                          "hover:bg-slate-100 dark:hover:bg-slate-700"
                        }
                      >
                        {status}
                      </Button>
                    ))}
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filteredBlogPosts.length === 0 ? (
            <Card className="card-glass">
              <CardContent className="p-12 text-center">
                <FileText className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  No blog posts found
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {searchTerm || selectedCategory !== 'All' || selectedStatus !== 'All' 
                    ? 'Try adjusting your search or filters.' 
                    : 'Get started by writing your first blog post.'
                  }
                </p>
                {!searchTerm && selectedCategory === 'All' && selectedStatus === 'All' && (
                  <Button onClick={() => router.push('/admin/blog/new')}>
                    <Plus className="h-4 w-4 mr-2" />
                    Write Post
                  </Button>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <Card className="card-glass hover-lift h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white mb-2 line-clamp-2">
                            {post.title}
                          </CardTitle>
                          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-3">
                            {post.excerpt}
                          </p>
                        </div>
                        
                        <div className="flex items-center space-x-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => router.push(`/admin/blog/${post.id}`)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => router.push(`/admin/blog/${post.id}/edit`)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(post.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      {/* Status and Category Badges */}
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className={getStatusColor(post.status)}>
                          {post.status}
                        </Badge>
                        <Badge className={getCategoryColor(post.category)}>
                          {post.category}
                        </Badge>
                      </div>

                      {/* Tags */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {post.tags.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{post.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Post Info */}
                      <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
                        <div className="flex items-center space-x-2">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                        {post.status === 'Published' && (
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="h-3 w-3" />
                            <span>{post.views} views</span>
                          </div>
                        )}
                      </div>

                      {/* Dates */}
                      <div className="space-y-1 text-xs text-slate-500 dark:text-slate-500 mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-3 w-3" />
                          <span>Created: {new Date(post.createdAt).toLocaleDateString()}</span>
                        </div>
                        {post.publishedAt && (
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-3 w-3" />
                            <span>Published: {new Date(post.publishedAt).toLocaleDateString()}</span>
                          </div>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center space-x-2 pt-4 border-t border-slate-200 dark:border-slate-700">
                        {post.status === 'Published' && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                            onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                          >
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Button>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          onClick={() => router.push(`/admin/blog/${post.id}/edit`)}
                        >
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Results Summary */}
        {filteredBlogPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-sm text-slate-600 dark:text-slate-400"
          >
            Showing {filteredBlogPosts.length} of {blogPosts.length} blog posts
          </motion.div>
        )}
      </div>
    </AdminLayout>
  );
}
