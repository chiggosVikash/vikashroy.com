'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Eye, 
  MessageSquare, 
  Calendar,
  Clock,
  Activity,
  BarChart3,
  PieChart,
  Target,
  Award,
  Zap,
  Star,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowUpRight,
  ArrowDownRight,
  FolderOpen,
  FileText,
  Code2,
  Mail,
  Globe,
  Smartphone,
  Database,
  Server,
  GitBranch,
  Palette,
  Shield,
  Rocket
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
// import { Progress } from '@/components/ui/progress';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { useRouter } from 'next/navigation';

// Mock data - replace with actual API calls
const mockStats = {
  totalViews: 2847,
  viewsChange: 12.5,
  totalProjects: 15,
  projectsChange: 2,
  totalBlogPosts: 8,
  blogChange: 1,
  totalSkills: 24,
  skillsChange: 3,
  totalEnquiries: 12,
  enquiriesChange: 5,
  conversionRate: 3.2,
  conversionChange: 0.8,
  avgResponseTime: 2.4,
  responseTimeChange: -0.5
};

const mockRecentActivities = [
  {
    id: 1,
    type: 'project',
    title: 'New project "AI Chat Platform" added',
    description: 'Advanced AI-powered chat application with real-time processing',
    time: '2 hours ago',
    icon: FolderOpen,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-900/20'
  },
  {
    id: 2,
    type: 'blog',
    title: 'Blog post "Next.js 14 Features" published',
    description: 'Comprehensive guide to the latest Next.js features and improvements',
    time: '4 hours ago',
    icon: FileText,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20'
  },
  {
    id: 3,
    type: 'enquiry',
    title: 'New enquiry from TechCorp Inc.',
    description: 'Enterprise-level backend system development inquiry',
    time: '6 hours ago',
    icon: MessageSquare,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    id: 4,
    type: 'skill',
    title: 'Skill "Rust Programming" updated',
    description: 'Updated proficiency level and added new projects',
    time: '1 day ago',
    icon: Code2,
    color: 'text-orange-500',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20'
  },
  {
    id: 5,
    type: 'project',
    title: 'Project "E-commerce Platform" completed',
    description: 'Successfully delivered and deployed to production',
    time: '2 days ago',
    icon: FolderOpen,
    color: 'text-green-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20'
  }
];

const mockPerformanceMetrics = [
  {
    name: 'Portfolio Views',
    value: 2847,
    change: 12.5,
    trend: 'up',
    icon: Eye,
    color: 'text-blue-600'
  },
  {
    name: 'Contact Form Submissions',
    value: 156,
    change: 8.2,
    trend: 'up',
    icon: MessageSquare,
    color: 'text-green-600'
  },
  {
    name: 'Project Clicks',
    value: 892,
    change: 15.7,
    trend: 'up',
    icon: FolderOpen,
    color: 'text-purple-600'
  },
  {
    name: 'Blog Read Time',
    value: '4.2 min',
    change: -2.1,
    trend: 'down',
    icon: Clock,
    color: 'text-orange-600'
  }
];

const mockQuickActions = [
  {
    title: 'Add New Project',
    description: 'Create a new project entry',
    icon: FolderOpen,
    href: '/admin/projects/new',
    color: 'from-emerald-500 to-green-500',
    gradient: 'bg-gradient-to-br from-emerald-500 to-green-500'
  },
  {
    title: 'Write Blog Post',
    description: 'Create a new blog article',
    icon: FileText,
    href: '/admin/blog/new',
    color: 'from-purple-500 to-pink-500',
    gradient: 'bg-gradient-to-br from-purple-500 to-pink-500'
  },
  {
    title: 'Add Skill',
    description: 'Add a new technical skill',
    icon: Code2,
    href: '/admin/skills/new',
    color: 'from-orange-500 to-red-500',
    gradient: 'bg-gradient-to-br from-orange-500 to-red-500'
  },
  {
    title: 'View Enquiries',
    description: 'Check new contact messages',
    icon: MessageSquare,
    href: '/admin/enquiries',
    color: 'from-indigo-500 to-blue-500',
    gradient: 'bg-gradient-to-br from-indigo-500 to-blue-500'
  }
];

const mockUpcomingTasks = [
  {
    id: 1,
    title: 'Review client proposal for AI project',
    priority: 'High',
    dueDate: '2024-02-25',
    category: 'Client',
    completed: false
  },
  {
    id: 2,
    title: 'Update portfolio with new projects',
    priority: 'Medium',
    dueDate: '2024-02-28',
    category: 'Portfolio',
    completed: false
  },
  {
    id: 3,
    title: 'Write blog post about Flutter best practices',
    priority: 'Low',
    dueDate: '2024-03-05',
    category: 'Content',
    completed: false
  },
  {
    id: 4,
    title: 'Optimize website performance',
    priority: 'Medium',
    dueDate: '2024-03-01',
    category: 'Technical',
    completed: false
  }
];

const mockSkillDistribution = [
  { name: 'Frontend', value: 35, color: 'bg-blue-500' },
  { name: 'Backend', value: 30, color: 'bg-emerald-500' },
  { name: 'Mobile', value: 20, color: 'bg-purple-500' },
  { name: 'DevOps', value: 10, color: 'bg-orange-500' },
  { name: 'Database', value: 5, color: 'bg-red-500' }
];

export default function AdminDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const hour = currentTime.getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 17) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');

    return () => clearInterval(timer);
  }, [currentTime]);

  const handleQuickAction = (href: string) => {
    router.push(href);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'Medium':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      case 'Low':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Client':
        return Users;
      case 'Portfolio':
        return Globe;
      case 'Content':
        return FileText;
      case 'Technical':
        return Code2;
      default:
        return Target;
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 text-white"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                {greeting}, Admin! 👋
              </h1>
              <p className="text-slate-300 text-lg">
                Here's what's happening with your portfolio today
              </p>
            </div>
            
            <div className="text-right">
              <div className="text-2xl font-mono font-bold text-blue-400">
                {currentTime.toLocaleTimeString()}
              </div>
              <div className="text-slate-400">
                {currentTime.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Metrics Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Portfolio Views */}
          <Card className="card-glass hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Portfolio Views
              </CardTitle>
              <Eye className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">
                {mockStats.totalViews.toLocaleString()}
              </div>
              <div className="flex items-center space-x-2 mt-1">
                {mockStats.viewsChange > 0 ? (
                  <ArrowUpRight className="h-4 w-4 text-green-600" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-red-600" />
                )}
                <span className={`text-sm font-medium ${
                  mockStats.viewsChange > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {Math.abs(mockStats.viewsChange)}%
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-400">
                  from last month
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Total Projects */}
          <Card className="card-glass hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Total Projects
              </CardTitle>
              <FolderOpen className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">
                {mockStats.totalProjects}
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <ArrowUpRight className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-600">
                  +{mockStats.projectsChange}
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-400">
                  this month
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Blog Posts */}
          <Card className="card-glass hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Blog Posts
              </CardTitle>
              <FileText className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">
                {mockStats.totalBlogPosts}
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <ArrowUpRight className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-600">
                  +{mockStats.blogChange}
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-400">
                  this month
                </span>
              </div>
            </CardContent>
          </Card>

          {/* New Enquiries */}
          <Card className="card-glass hover-lift">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
                New Enquiries
              </CardTitle>
              <MessageSquare className="h-4 w-4 text-indigo-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">
                {mockStats.totalEnquiries}
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <ArrowUpRight className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-600">
                  +{mockStats.enquiriesChange}
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-400">
                  this month
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Performance Metrics & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-blue-500" />
                  <span>Performance Metrics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockPerformanceMetrics.map((metric, index) => (
                    <motion.div
                      key={metric.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${metric.color} bg-opacity-10`}>
                          <metric.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900 dark:text-white">
                            {metric.name}
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            {metric.value}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {metric.trend === 'up' ? (
                          <ArrowUpRight className="h-4 w-4 text-green-600" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 text-red-600" />
                        )}
                        <span className={`text-sm font-medium ${
                          metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {Math.abs(metric.change)}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {mockQuickActions.map((action, index) => (
                    <motion.div
                      key={action.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    >
                      <Button
                        variant="outline"
                        className="w-full h-auto p-4 flex flex-col items-start space-y-2 hover:scale-105 transition-transform duration-200"
                        onClick={() => handleQuickAction(action.href)}
                      >
                        <div className={`w-10 h-10 ${action.gradient} rounded-lg flex items-center justify-center`}>
                          <action.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="text-left">
                          <div className="font-medium text-slate-900 dark:text-white">
                            {action.title}
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">
                            {action.description}
                          </div>
                        </div>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent Activities & Upcoming Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-purple-500" />
                  <span>Recent Activities</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockRecentActivities.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-200"
                    >
                      <div className={`w-10 h-10 ${activity.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <activity.icon className={`h-5 w-5 ${activity.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                          {activity.title}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                          {activity.description}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                          {activity.time}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <Button
                  variant="ghost"
                  className="w-full mt-4 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  View All Activities
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Tasks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-orange-500" />
                  <span>Upcoming Tasks</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockUpcomingTasks.map((task, index) => {
                    const CategoryIcon = getCategoryIcon(task.category);
                    return (
                      <motion.div
                        key={task.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg"
                      >
                        <div className="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                          <CategoryIcon className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <p className="text-sm font-medium text-slate-900 dark:text-white">
                              {task.title}
                            </p>
                            <Badge className={getPriorityColor(task.priority)}>
                              {task.priority}
                            </Badge>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            Due: {new Date(task.dueDate).toLocaleDateString()}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-slate-400 hover:text-slate-600"
                        >
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    );
                  })}
                </div>
                
                <Button
                  variant="ghost"
                  className="w-full mt-4 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  View All Tasks
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Skills Distribution & Portfolio Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Skills Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PieChart className="h-5 w-5 text-emerald-500" />
                  <span>Skills Distribution</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockSkillDistribution.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-slate-900 dark:text-white">
                          {skill.value}%
                        </span>
                      </div>
                                             {/* <Progress value={skill.value} className="h-2" /> */}
                       <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                         <div 
                           className={`h-2 rounded-full transition-all duration-300 ${skill.color}`}
                           style={{ width: `${skill.value}%` }}
                         ></div>
                       </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Portfolio Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-purple-500" />
                  <span>Portfolio Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {mockStats.conversionRate}%
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Conversion Rate
                    </div>
                    <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                      +{mockStats.conversionChange}%
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {mockStats.avgResponseTime}h
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Avg Response Time
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                      {mockStats.responseTimeChange > 0 ? '+' : ''}{mockStats.responseTimeChange}h
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      99.9%
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Uptime
                    </div>
                    <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                      Excellent
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      5.0
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Client Rating
                    </div>
                    <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                      ⭐⭐⭐⭐⭐
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="card-glass bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-blue-500/20">
            <CardContent className="p-8 text-center">
              <Rocket className="h-16 w-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Ready to Take Your Portfolio to the Next Level?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
                Your admin panel is fully equipped with powerful tools to manage projects, 
                create engaging content, and track performance. Start building your digital presence today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => router.push('/admin/projects/new')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  <FolderOpen className="h-4 w-4 mr-2" />
                  Add New Project
                </Button>
                <Button
                  variant="outline"
                  onClick={() => router.push('/admin/blog/new')}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Write Blog Post
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </AdminLayout>
  );
}
