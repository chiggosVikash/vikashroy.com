'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  FolderOpen, 
  FileText, 
  Code2, 
  MessageSquare, 
  TrendingUp, 
  Eye, 
  Clock,
  Calendar,
  Activity
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { useRouter } from 'next/navigation';

const stats = [
  {
    title: 'Total Projects',
    value: '15',
    change: '+2',
    changeType: 'positive',
    icon: FolderOpen,
    color: 'from-emerald-500 to-green-500',
    href: '/admin/projects'
  },
  {
    title: 'Blog Posts',
    value: '8',
    change: '+1',
    changeType: 'positive',
    icon: FileText,
    color: 'from-purple-500 to-pink-500',
    href: '/admin/blog'
  },
  {
    title: 'Skills',
    value: '24',
    change: '+3',
    changeType: 'positive',
    icon: Code2,
    color: 'from-orange-500 to-red-500',
    href: '/admin/skills'
  },
  {
    title: 'New Enquiries',
    value: '12',
    change: '+5',
    changeType: 'positive',
    icon: MessageSquare,
    color: 'from-indigo-500 to-blue-500',
    href: '/admin/enquiries'
  }
];

const recentActivities = [
  {
    id: 1,
    type: 'project',
    title: 'New project "E-commerce Platform" added',
    time: '2 hours ago',
    icon: FolderOpen,
    color: 'text-emerald-500'
  },
  {
    id: 2,
    type: 'blog',
    title: 'Blog post "React Best Practices" published',
    time: '4 hours ago',
    icon: FileText,
    color: 'text-purple-500'
  },
  {
    id: 3,
    type: 'enquiry',
    title: 'New enquiry from John Doe',
    time: '6 hours ago',
    icon: MessageSquare,
    color: 'text-blue-500'
  },
  {
    id: 4,
    type: 'skill',
    title: 'Skill "GraphQL" updated',
    time: '1 day ago',
    icon: Code2,
    color: 'text-orange-500'
  }
];

const quickActions = [
  {
    title: 'Add New Project',
    description: 'Create a new project entry',
    icon: FolderOpen,
    href: '/admin/projects/new',
    color: 'from-emerald-500 to-green-500'
  },
  {
    title: 'Write Blog Post',
    description: 'Create a new blog article',
    icon: FileText,
    href: '/admin/blog/new',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Add Skill',
    description: 'Add a new technical skill',
    icon: Code2,
    href: '/admin/skills/new',
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'View Enquiries',
    description: 'Check new contact messages',
    icon: MessageSquare,
    href: '/admin/enquiries',
    color: 'from-indigo-500 to-blue-500'
  }
];

export default function AdminDashboard() {
  const router = useRouter();

  const handleQuickAction = (href: string) => {
    router.push(href);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Welcome back! Here's what's happening with your portfolio.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              <Card className="card-glass hover-lift cursor-pointer" onClick={() => router.push(stat.href)}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    {stat.title}
                  </CardTitle>
                  <div className={`w-8 h-8 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                    <stat.icon className="h-4 w-4 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    <span className="text-emerald-600 dark:text-emerald-400">
                      {stat.change}
                    </span>{' '}
                    from last month
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Actions & Recent Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-blue-500" />
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {quickActions.map((action, index) => (
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
                        <div className={`w-10 h-10 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center`}>
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

          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="card-glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-purple-500" />
                  <span>Recent Activities</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-200"
                    >
                      <div className={`w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <activity.icon className={`h-4 w-4 ${activity.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                          {activity.title}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
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
        </div>

        {/* Portfolio Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="card-glass">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-emerald-500" />
                <span>Portfolio Overview</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    2,847
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Portfolio Views
                  </div>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                    +12% this month
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    156
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Contact Form Submissions
                  </div>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                    +8% this month
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    89%
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Bounce Rate
                  </div>
                  <div className="text-xs text-red-600 dark:text-red-400 mt-1">
                    -3% this month
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </AdminLayout>
  );
}
