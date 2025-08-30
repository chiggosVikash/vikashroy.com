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
  Code2,
  Star,
  TrendingUp,
  Calendar,
  Tag
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { useRouter } from 'next/navigation';

// Mock data - replace with actual API calls
const mockSkills = [
  {
    id: 1,
    name: 'React',
    category: 'Frontend',
    proficiency: 95,
    yearsOfExperience: 4,
    description: 'Modern React with hooks, context, and advanced patterns',
    tags: ['JavaScript', 'JSX', 'Hooks', 'Context'],
    status: 'Active',
    featured: true,
    icon: '⚛️',
    createdAt: '2023-01-15',
    updatedAt: '2024-02-15'
  },
  {
    id: 2,
    name: 'Node.js',
    category: 'Backend',
    proficiency: 90,
    yearsOfExperience: 5,
    description: 'Server-side JavaScript with Express and NestJS',
    tags: ['JavaScript', 'Express', 'NestJS', 'APIs'],
    status: 'Active',
    featured: true,
    icon: '🟢',
    createdAt: '2022-06-01',
    updatedAt: '2024-01-20'
  },
  {
    id: 3,
    name: 'Flutter',
    category: 'Mobile',
    proficiency: 88,
    yearsOfExperience: 3,
    description: 'Cross-platform mobile development with Dart',
    tags: ['Dart', 'Mobile', 'Cross-platform', 'UI/UX'],
    status: 'Active',
    featured: true,
    icon: '📱',
    createdAt: '2023-03-10',
    updatedAt: '2024-02-10'
  },
  {
    id: 4,
    name: 'MongoDB',
    category: 'Database',
    proficiency: 85,
    yearsOfExperience: 4,
    description: 'NoSQL database design and optimization',
    tags: ['NoSQL', 'Database', 'MongoDB', 'Aggregation'],
    status: 'Active',
    featured: false,
    icon: '🍃',
    createdAt: '2022-09-15',
    updatedAt: '2024-01-15'
  },
  {
    id: 5,
    name: 'GraphQL',
    category: 'Backend',
    proficiency: 80,
    yearsOfExperience: 2,
    description: 'Modern API development with GraphQL',
    tags: ['API', 'GraphQL', 'Schema', 'Resolvers'],
    status: 'Active',
    featured: false,
    icon: '🔷',
    createdAt: '2023-08-01',
    updatedAt: '2024-01-30'
  }
];

const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'Database', 'DevOps', 'Tools'];
const statuses = ['All', 'Active', 'Inactive', 'Learning', 'Deprecated'];

export default function AdminSkills() {
  const [skills, setSkills] = useState(mockSkills);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const router = useRouter();

  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         skill.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || skill.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this skill?')) {
      setSkills(skills.filter(skill => skill.id !== id));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Inactive':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      case 'Learning':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Deprecated':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
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
      case 'Database':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      case 'DevOps':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 90) return 'text-emerald-600 dark:text-emerald-400';
    if (proficiency >= 80) return 'text-blue-600 dark:text-blue-400';
    if (proficiency >= 70) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
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
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Skills</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Manage your technical skills and expertise areas.
            </p>
          </div>
          
          <Button
            onClick={() => router.push('/admin/skills/new')}
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Skill
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
                    placeholder="Search skills..."
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
                        "bg-orange-600 hover:bg-orange-700" : 
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

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filteredSkills.length === 0 ? (
            <Card className="card-glass">
              <CardContent className="p-12 text-center">
                <Code2 className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  No skills found
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {searchTerm || selectedCategory !== 'All' || selectedStatus !== 'All' 
                    ? 'Try adjusting your search or filters.' 
                    : 'Get started by adding your first skill.'
                  }
                </p>
                {!searchTerm && selectedCategory === 'All' && selectedStatus === 'All' && (
                  <Button onClick={() => router.push('/admin/skills/new')}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Skill
                  </Button>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <Card className={`card-glass hover-lift h-full ${skill.featured ? 'ring-2 ring-orange-500/20' : ''}`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-2xl">{skill.icon}</span>
                            <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                              {skill.name}
                            </CardTitle>
                            {skill.featured && (
                              <Star className="h-4 w-4 text-orange-500 fill-current" />
                            )}
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                            {skill.description}
                          </p>
                        </div>
                        
                        <div className="flex items-center space-x-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => router.push(`/admin/skills/${skill.id}`)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => router.push(`/admin/skills/${skill.id}/edit`)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(skill.id)}
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
                        <Badge className={getStatusColor(skill.status)}>
                          {skill.status}
                        </Badge>
                        <Badge className={getCategoryColor(skill.category)}>
                          {skill.category}
                        </Badge>
                      </div>

                      {/* Proficiency Bar */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Proficiency
                          </span>
                          <span className={`text-sm font-bold ${getProficiencyColor(skill.proficiency)}`}>
                            {skill.proficiency}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-300 ${
                              skill.proficiency >= 90 ? 'bg-emerald-500' :
                              skill.proficiency >= 80 ? 'bg-blue-500' :
                              skill.proficiency >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${skill.proficiency}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {skill.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {skill.tags.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{skill.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Skill Info */}
                      <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-3 w-3" />
                          <span>{skill.yearsOfExperience} years experience</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-3 w-3" />
                          <span>Updated {new Date(skill.updatedAt).toLocaleDateString()}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center space-x-2 pt-4 border-t border-slate-200 dark:border-slate-700">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          onClick={() => router.push(`/admin/skills/${skill.id}/edit`)}
                        >
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          onClick={() => router.push(`/admin/skills/${skill.id}`)}
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          View
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
        {filteredSkills.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-sm text-slate-600 dark:text-slate-400"
          >
            Showing {filteredSkills.length} of {skills.length} skills
          </motion.div>
        )}
      </div>
    </AdminLayout>
  );
}
