'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye, 
  MessageSquare,
  Mail,
  Phone,
  Calendar,
  User,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { useRouter } from 'next/navigation';

// Mock data - replace with actual API calls
const mockEnquiries = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    subject: 'Project Inquiry - E-commerce Platform',
    message: 'Hi, I\'m looking for a developer to build an e-commerce platform for my business. I need a solution that can handle inventory management, payment processing, and customer management. Can you help me with this project?',
    status: 'New',
    priority: 'High',
    source: 'Contact Form',
    createdAt: '2024-02-20T10:30:00Z',
    updatedAt: '2024-02-20T10:30:00Z',
    read: false,
    responded: false
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.j@startup.com',
    phone: '+1 (555) 987-6543',
    subject: 'Mobile App Development',
    message: 'We\'re a startup looking to develop a mobile app for task management. We need both iOS and Android versions with real-time synchronization. What would be your approach and timeline for this project?',
    status: 'In Progress',
    priority: 'Medium',
    source: 'Contact Form',
    createdAt: '2024-02-19T14:15:00Z',
    updatedAt: '2024-02-20T09:45:00Z',
    read: true,
    responded: true
  },
  {
    id: 3,
    name: 'Mike Chen',
    email: 'mike.chen@techcorp.com',
    phone: '+1 (555) 456-7890',
    subject: 'Backend System Consultation',
    message: 'Our company needs help optimizing our existing backend system. We\'re experiencing performance issues and need someone to review our architecture and suggest improvements. Are you available for consultation?',
    status: 'Completed',
    priority: 'Low',
    source: 'Email',
    createdAt: '2024-02-18T11:20:00Z',
    updatedAt: '2024-02-19T16:30:00Z',
    read: true,
    responded: true
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    email: 'emily.r@designstudio.com',
    phone: '+1 (555) 321-0987',
    subject: 'Full-Stack Developer Position',
    message: 'We\'re hiring for a full-stack developer position and came across your portfolio. Your work looks impressive! Are you currently open to new opportunities? We\'d love to discuss potential collaboration.',
    status: 'New',
    priority: 'High',
    source: 'Contact Form',
    createdAt: '2024-02-20T08:45:00Z',
    updatedAt: '2024-02-20T08:45:00Z',
    read: false,
    responded: false
  }
];

const statuses = ['All', 'New', 'In Progress', 'Completed', 'Archived'];
const priorities = ['All', 'High', 'Medium', 'Low'];
const sources = ['All', 'Contact Form', 'Email', 'LinkedIn', 'Referral'];

export default function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState(mockEnquiries);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedPriority, setSelectedPriority] = useState('All');
  const [selectedSource, setSelectedSource] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const router = useRouter();

  const filteredEnquiries = enquiries.filter(enquiry => {
    const matchesSearch = enquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         enquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         enquiry.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         enquiry.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || enquiry.status === selectedStatus;
    const matchesPriority = selectedPriority === 'All' || enquiry.priority === selectedPriority;
    const matchesSource = selectedSource === 'All' || enquiry.source === selectedSource;
    
    return matchesSearch && matchesStatus && matchesPriority && matchesSource;
  });

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this enquiry?')) {
      setEnquiries(enquiries.filter(enquiry => enquiry.id !== id));
    }
  };

  const handleStatusChange = (id: number, newStatus: string) => {
    setEnquiries(enquiries.map(enquiry => 
      enquiry.id === id 
        ? { ...enquiry, status: newStatus, updatedAt: new Date().toISOString() }
        : enquiry
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Archived':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
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

  const getSourceColor = (source: string) => {
    switch (source) {
      case 'Contact Form':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'Email':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'LinkedIn':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300';
      case 'Referral':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Today';
    if (diffDays === 2) return 'Yesterday';
    if (diffDays <= 7) return `${diffDays - 1} days ago`;
    return date.toLocaleDateString();
  };

  const unreadCount = enquiries.filter(e => !e.read).length;
  const newCount = enquiries.filter(e => e.status === 'New').length;

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
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Enquiries</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Manage client inquiries and contact form submissions.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm text-slate-600 dark:text-slate-400">Unread</div>
              <div className="text-2xl font-bold text-blue-600">{unreadCount}</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-600 dark:text-slate-400">New</div>
              <div className="text-2xl font-bold text-emerald-600">{newCount}</div>
            </div>
          </div>
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
                    placeholder="Search enquiries..."
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

                {/* Status Filter */}
                <div className="flex flex-wrap gap-2">
                  {statuses.map((status) => (
                    <Button
                      key={status}
                      variant={selectedStatus === status ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedStatus(status)}
                      className={selectedStatus === status ? 
                        "bg-indigo-600 hover:bg-indigo-700" : 
                        "hover:bg-slate-100 dark:hover:bg-slate-700"
                      }
                    >
                      {status}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Additional Filters */}
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 space-y-4"
                >
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mr-2">
                      Priority:
                    </span>
                    {priorities.map((priority) => (
                      <Button
                        key={priority}
                        variant={selectedPriority === priority ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedPriority(priority)}
                        className={selectedPriority === priority ? 
                          "bg-blue-600 hover:bg-blue-700" : 
                          "hover:bg-slate-100 dark:hover:bg-slate-700"
                        }
                      >
                        {priority}
                      </Button>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mr-2">
                      Source:
                    </span>
                    {sources.map((source) => (
                      <Button
                        key={source}
                        variant={selectedSource === source ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedSource(source)}
                        className={selectedSource === source ? 
                          "bg-green-600 hover:bg-green-700" : 
                          "hover:bg-slate-100 dark:hover:bg-slate-700"
                        }
                      >
                        {source}
                      </Button>
                    ))}
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Enquiries List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filteredEnquiries.length === 0 ? (
            <Card className="card-glass">
              <CardContent className="p-12 text-center">
                <MessageSquare className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  No enquiries found
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {searchTerm || selectedStatus !== 'All' || selectedPriority !== 'All' || selectedSource !== 'All'
                    ? 'Try adjusting your search or filters.' 
                    : 'No enquiries have been submitted yet.'
                  }
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredEnquiries.map((enquiry, index) => (
                <motion.div
                  key={enquiry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <Card className={`card-glass hover-lift ${!enquiry.read ? 'ring-2 ring-blue-500/20 bg-blue-50/50 dark:bg-blue-900/20' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row gap-4">
                        {/* Main Content */}
                        <div className="flex-1 space-y-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                {!enquiry.read && (
                                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                )}
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                  {enquiry.subject}
                                </h3>
                              </div>
                              
                              <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400 mb-2">
                                <div className="flex items-center space-x-1">
                                  <User className="h-4 w-4" />
                                  <span>{enquiry.name}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Mail className="h-4 w-4" />
                                  <span>{enquiry.email}</span>
                                </div>
                                {enquiry.phone && (
                                  <div className="flex items-center space-x-1">
                                    <Phone className="h-4 w-4" />
                                    <span>{enquiry.phone}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => router.push(`/admin/enquiries/${enquiry.id}`)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => router.push(`/admin/enquiries/${enquiry.id}/edit`)}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDelete(enquiry.id)}
                                className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          
                          <p className="text-slate-600 dark:text-slate-400 line-clamp-2">
                            {enquiry.message}
                          </p>
                        </div>
                        
                        {/* Sidebar Info */}
                        <div className="lg:w-48 space-y-3">
                          {/* Status and Priority */}
                          <div className="flex flex-wrap gap-2">
                            <Badge className={getStatusColor(enquiry.status)}>
                              {enquiry.status}
                            </Badge>
                            <Badge className={getPriorityColor(enquiry.priority)}>
                              {enquiry.priority}
                            </Badge>
                            <Badge className={getSourceColor(enquiry.source)}>
                              {enquiry.source}
                            </Badge>
                          </div>
                          
                          {/* Time Info */}
                          <div className="text-xs text-slate-500 dark:text-slate-500 space-y-1">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{formatDate(enquiry.createdAt)}</span>
                            </div>
                            {enquiry.updatedAt !== enquiry.createdAt && (
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-3 w-3" />
                                <span>Updated {formatDate(enquiry.updatedAt)}</span>
                              </div>
                            )}
                          </div>
                          
                          {/* Response Status */}
                          <div className="flex items-center space-x-2">
                            {enquiry.responded ? (
                              <div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
                                <CheckCircle className="h-3 w-3" />
                                <span className="text-xs">Responded</span>
                              </div>
                            ) : (
                              <div className="flex items-center space-x-1 text-orange-600 dark:text-orange-400">
                                <AlertCircle className="h-3 w-3" />
                                <span className="text-xs">Pending</span>
                              </div>
                            )}
                          </div>
                          
                          {/* Quick Actions */}
                          <div className="flex flex-col space-y-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full"
                              onClick={() => handleStatusChange(enquiry.id, 'In Progress')}
                              disabled={enquiry.status === 'In Progress'}
                            >
                              Mark In Progress
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full"
                              onClick={() => handleStatusChange(enquiry.id, 'Completed')}
                              disabled={enquiry.status === 'Completed'}
                            >
                              Mark Complete
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Results Summary */}
        {filteredEnquiries.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-sm text-slate-600 dark:text-slate-400"
          >
            Showing {filteredEnquiries.length} of {enquiries.length} enquiries
          </motion.div>
        )}
      </div>
    </AdminLayout>
  );
}
