'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/theme-provider'
import { useToast, ToastComponent } from '@/components/ui/toast'
import { Globe, MessageSquare, FileText, Users, Activity, Settings, Moon, Sun, Menu, X, LogOut, Eye, EyeOff, Plus, Upload, Edit, Trash2, Send } from 'lucide-react'

const PROJECTS = [
  { name: 'AHCCCSHelp', port: 3001, color: 'bg-blue-500' },
  { name: 'First-Trimester', port: 3002, color: 'bg-green-500' },
  { name: 'FreePregnencyTest', port: 3003, color: 'bg-purple-500' },
  { name: 'Low-cost-pregnancy', port: 3004, color: 'bg-orange-500' },
  { name: 'NeedUltraSound', port: 3005, color: 'bg-pink-500' },
  { name: 'Pregnancy-Test', port: 3006, color: 'bg-indigo-500' },
  { name: 'SameDayUltraSound', port: 3007, color: 'bg-teal-500' },
  { name: 'Teen-Pregnancy-Support', port: 3008, color: 'bg-red-500' },
  { name: 'WalkIn-Pregnancy', port: 3009, color: 'bg-yellow-500' },
  { name: 'Wic-Pregnancy-help', port: 3010, color: 'bg-cyan-500' }
]

const BLOG_SITES = [
  { name: 'AHCCCSHelp', port: 3001, color: 'bg-blue-500' },
  { name: 'First-Trimester', port: 3002, color: 'bg-green-500' },
  { name: 'Low-cost-pregnancy', port: 3004, color: 'bg-orange-500' },
  { name: 'NeedUltraSound', port: 3005, color: 'bg-pink-500' },
  { name: 'Pregnancy-Test', port: 3006, color: 'bg-indigo-500' },
  { name: 'SameDayUltraSound', port: 3007, color: 'bg-teal-500' },
  { name: 'Teen-Pregnancy-Support', port: 3008, color: 'bg-red-500' },
  { name: 'WalkIn-Pregnancy', port: 3009, color: 'bg-yellow-500' },
  { name: 'Wic-Pregnancy-help', port: 3010, color: 'bg-cyan-500' }
]

export default function AdminPanel() {
  const [blogs, setBlogs] = useState<any[]>([])
  const [chats, setChats] = useState<any[]>([])
  const [activeTab, setActiveTab] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [blogFormOpen, setBlogFormOpen] = useState(false)
  const [currentPassword, setCurrentPassword] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [showPasswords, setShowPasswords] = useState({ current: false, new: false })
  const [updateMessage, setUpdateMessage] = useState('')
  const [blogForm, setBlogForm] = useState({
    title: '',
    excerpt: '',
    description: '',
    image: null as File | null,
    selectedSites: [] as string[]
  })
  const [editingBlog, setEditingBlog] = useState<any>(null)
  const [viewingBlog, setViewingBlog] = useState<any>(null)
  const [viewingChat, setViewingChat] = useState<any>(null)
  const [chatMessages, setChatMessages] = useState<any[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [selectedSite, setSelectedSite] = useState('')
  
  const filteredChats = selectedSite ? chats.filter((chat: any) => chat.project === selectedSite) : chats
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()
  const { toasts, removeToast, success, error, info } = useToast()
  const router = useRouter()

  useEffect(() => {
    const isAuth = localStorage.getItem('adminAuth')
    if (!isAuth) {
      router.push('/login')
      return
    }
  }, [router])

  useEffect(() => {
    fetch('/api/blogs').then(r => r.json()).then(setBlogs)
    fetchConversations()
    
    // Auto-refresh conversations every 5 seconds
    const interval = setInterval(fetchConversations, 5000)
    return () => clearInterval(interval)
  }, [])
  
  const fetchConversations = async () => {
    try {
      const response = await fetch('/api/chat')
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      setChats(Array.isArray(data) ? data : [])
    } catch (err) {
      console.error('Failed to fetch conversations:', err)
      error('Failed to load conversations')
      setChats([])
    }
  }

  useEffect(() => {
    if (viewingChat) {
      const fetchMessages = () => {
        fetch(`/api/chat?chatId=${viewingChat.chatId}`)
          .then(r => r.json())
          .then(data => setChatMessages(data))
      }
      
      fetchMessages()
      const interval = setInterval(fetchMessages, 2000)
      return () => clearInterval(interval)
    }
  }, [viewingChat])

  const handleSendAdminMessage = async () => {
    if (!newMessage.trim() || !viewingChat) return
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: newMessage, 
          project: viewingChat.project,
          userInfo: viewingChat.userInfo,
          isAdmin: true,
          chatId: viewingChat.chatId
        })
      })
      
      if (response.ok) {
        setNewMessage('')
        // Refresh messages
        fetch(`/api/chat?chatId=${viewingChat.chatId}`)
          .then(r => r.json())
          .then(data => setChatMessages(data))
        // Refresh conversations list
        fetchConversations()
        success('Message sent successfully')
      }
    } catch (err) {
      error('Failed to send message')
    }
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:relative lg:flex lg:flex-col`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                Gayneco
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Admin Panel</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </Button>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {[
            { id: 'overview', label: 'Overview', icon: Activity, color: 'text-blue-600 dark:text-blue-400' },
            { id: 'projects', label: 'All Sites', icon: Globe, color: 'text-green-600 dark:text-green-400' },
            { id: 'blogs', label: 'Blogs', icon: FileText, color: 'text-purple-600 dark:text-purple-400' },
            { id: 'chats', label: 'Chats', icon: MessageSquare, color: 'text-orange-600 dark:text-orange-400' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id)
                setSidebarOpen(false)
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all text-left ${
                activeTab === tab.id
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-blue-600 dark:text-blue-400' : tab.color}`} />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => {
              localStorage.removeItem('adminAuth')
              info('Logged out successfully')
              router.push('/login')
            }}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all text-left text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </Button>
              <div>
                <h2 className="text-xl font-semibold capitalize text-gray-900 dark:text-white">{activeTab === 'projects' ? 'All Sites' : activeTab}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 hidden sm:block">Manage your {activeTab === 'projects' ? 'sites' : activeTab}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <div className="hidden md:flex items-center space-x-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">A</span>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-gray-900 dark:text-white">Admin User</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">admin@gayneco.com</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setSettingsOpen(true)}
              >
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">

          <div key={activeTab} className="transition-all duration-300">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Total Sites</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{PROJECTS.length}</p>
                  </div>
                  <Globe className="w-8 h-8 text-blue-500" />
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Total Blogs</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{blogs.length}</p>
                  </div>
                  <FileText className="w-8 h-8 text-green-500" />
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Conversations</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{chats.length}</p>
                  </div>
                  <MessageSquare className="w-8 h-8 text-purple-500" />
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Active Users</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">1.2k</p>
                  </div>
                  <Users className="w-8 h-8 text-orange-500" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((project, index) => (
                <div
                  key={project.name}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-3 h-3 rounded-full ${project.color}`}></div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{project.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Port: {project.port}</p>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => window.open(`http://localhost:${project.port}`, '_blank')}
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    View Site
                  </Button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'blogs' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Blog Management</h2>
                <Button 
                  onClick={() => setBlogFormOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Blog
                </Button>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Recent Blogs</h3>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {blogs.slice(0, 10).map((blog: any) => (
                    <div key={blog._id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                      <div className="flex justify-between items-start">
                        <div className="flex space-x-4 flex-1">
                          {blog.image && (
                            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                              <img 
                                src={`data:image/png;base64,${blog.image}`} 
                                alt={blog.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.src = `data:image/jpeg;base64,${blog.image}`
                                }}
                              />
                            </div>
                          )}
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-medium text-gray-900 dark:text-white">{blog.title}</h4>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{blog.excerpt}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Sites: {blog.projects?.join(', ')}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => setViewingBlog(blog)}
                            className="text-green-600 hover:text-green-800 hover:bg-green-50 dark:hover:bg-green-900/20"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => {
                              setEditingBlog(blog)
                              setBlogForm({
                                title: blog.title,
                                excerpt: blog.excerpt,
                                description: blog.content,
                                image: null,
                                selectedSites: blog.projects || []
                              })
                              setBlogFormOpen(true)
                            }}
                            className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={async () => {
                              if (confirm('Are you sure you want to delete this blog?')) {
                                try {
                                  const response = await fetch(`/api/blogs/${blog._id}`, {
                                    method: 'DELETE'
                                  })
                                  if (response.ok) {
                                    success('Blog deleted successfully')
                                    fetch('/api/blogs').then(r => r.json()).then(setBlogs)
                                  } else {
                                    error('Failed to delete blog')
                                  }
                                } catch (err) {
                                  error('Failed to delete blog')
                                }
                              }
                            }}
                            className="text-red-600 hover:text-red-800 hover:bg-red-50 dark:hover:bg-red-900/20"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'chats' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Chat Management</h2>
                {selectedSite && (
                  <Button 
                    onClick={() => setSelectedSite('')}
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    ← Back to All Sites
                  </Button>
                )}
              </div>
              
              {!selectedSite ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {PROJECTS.map((project) => {
                    const siteChats = chats.filter((chat: any) => chat.project === project.name)
                    return (
                      <div
                        key={project.name}
                        onClick={() => setSelectedSite(project.name)}
                        className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-3 h-3 rounded-full ${project.color}`}></div>
                          {siteChats.length > 0 && (
                            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                              {siteChats.length}
                            </span>
                          )}
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                          {project.name}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                          <MessageSquare className="w-4 h-4" />
                          <span>{siteChats.length} conversations</span>
                        </div>
                        <div className="mt-3 text-xs text-gray-400">
                          Port: {project.port}
                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {selectedSite} Conversations
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {filteredChats.length} total
                    </span>
                  </div>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {filteredChats.length === 0 ? (
                      <div className="text-center py-8">
                        <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                        <p className="text-gray-500 dark:text-gray-400">No conversations for this site yet</p>
                      </div>
                    ) : filteredChats.map((conversation: any) => (
                      <div key={conversation._id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3 cursor-pointer flex-1" onClick={() => setViewingChat(conversation)}>
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm font-semibold">{conversation.userInfo?.name?.charAt(0)}</span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-900 dark:text-white">{conversation.userInfo?.name}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {new Date(conversation.lastMessage).toLocaleString()}
                            </span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={async (e) => {
                                e.stopPropagation()
                                if (confirm('Delete this entire conversation?')) {
                                  try {
                                    const response = await fetch(`/api/chat?chatId=${conversation.chatId}`, {
                                      method: 'DELETE'
                                    })
                                    if (response.ok) {
                                      success('Chat deleted successfully')
                                      fetchConversations()
                                    } else {
                                      error('Failed to delete chat')
                                    }
                                  } catch (err) {
                                    error('Failed to delete chat')
                                  }
                                }
                              }}
                              className="text-red-600 hover:text-red-800 hover:bg-red-50 dark:hover:bg-red-900/20"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300 cursor-pointer" onClick={() => setViewingChat(conversation)}>
                          <p>Age: {conversation.userInfo?.age} | Contact: {conversation.userInfo?.contact}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  </div>
                </div>
              )}
            </div>
          )}
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {settingsOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Admin Settings</h3>
              <Button variant="ghost" size="sm" onClick={() => setSettingsOpen(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <form onSubmit={async (e) => {
              e.preventDefault()
              try {
                const response = await fetch('/api/admin', {
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ currentPassword, newEmail, newPassword })
                })
                const data = await response.json()
                if (data.success) {
                  success(data.message)
                  setCurrentPassword('')
                  setNewEmail('')
                  setNewPassword('')
                  setSettingsOpen(false)
                } else {
                  error(data.message)
                }
              } catch (err) {
                error('Update failed')
              }
            }} className="space-y-4">
              <div className="relative">
                <input
                  type={showPasswords.current ? 'text' : 'password'}
                  placeholder="Current Password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPasswords(prev => ({ ...prev, current: !prev.current }))}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPasswords.current ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              
              <input
                type="email"
                placeholder="New Email (optional)"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              
              <div className="relative">
                <input
                  type={showPasswords.new ? 'text' : 'password'}
                  placeholder="New Password (optional)"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPasswords(prev => ({ ...prev, new: !prev.new }))}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPasswords.new ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              

              
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Update Credentials
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Blog Form Modal */}
      {blogFormOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {editingBlog ? 'Edit Blog' : 'Create New Blog'}
              </h3>
              <Button variant="ghost" size="sm" onClick={() => {
                setBlogFormOpen(false)
                setEditingBlog(null)
                setBlogForm({ title: '', excerpt: '', description: '', image: null, selectedSites: [] })
                setImagePreview(null)
              }}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <form onSubmit={async (e) => {
              e.preventDefault()
              const formData = new FormData()
              formData.append('title', blogForm.title)
              formData.append('excerpt', blogForm.excerpt)
              formData.append('content', blogForm.description)
              formData.append('projects', JSON.stringify(blogForm.selectedSites))
              if (blogForm.image) formData.append('image', blogForm.image)
              
              try {
                const url = editingBlog ? `/api/blogs/${editingBlog._id}` : '/api/blogs'
                const method = editingBlog ? 'PUT' : 'POST'
                const response = await fetch(url, {
                  method,
                  body: formData
                })
                if (response.ok) {
                  success(editingBlog ? 'Blog updated successfully' : 'Blog published successfully')
                  setBlogForm({ title: '', excerpt: '', description: '', image: null, selectedSites: [] })
                  setImagePreview(null)
                  setBlogFormOpen(false)
                  setEditingBlog(null)
                  fetch('/api/blogs').then(r => r.json()).then(setBlogs)
                } else {
                  error(editingBlog ? 'Failed to update blog' : 'Failed to publish blog')
                }
              } catch (err) {
                error(editingBlog ? 'Failed to update blog' : 'Failed to publish blog')
              }
            }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Main Heading</label>
                <input
                  type="text"
                  value={blogForm.title}
                  onChange={(e) => setBlogForm(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Enter blog title"
                  required
                  className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Excerpt</label>
                <input
                  type="text"
                  value={blogForm.excerpt}
                  onChange={(e) => setBlogForm(prev => ({ ...prev, excerpt: e.target.value }))}
                  placeholder="Brief description or excerpt"
                  required
                  className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Upload Image</label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null
                      setBlogForm(prev => ({ ...prev, image: file }))
                      if (file) {
                        const reader = new FileReader()
                        reader.onload = (e) => setImagePreview(e.target?.result as string)
                        reader.readAsDataURL(file)
                      } else {
                        setImagePreview(null)
                      }
                    }}
                    className="hidden"
                    id="image-upload"
                  />
                  {imagePreview ? (
                    <div className="space-y-3">
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">{blogForm.image?.name}</span>
                        <button
                          type="button"
                          onClick={() => {
                            setBlogForm(prev => ({ ...prev, image: null }))
                            setImagePreview(null)
                          }}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ) : (
                    <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center">
                      <Upload className="w-8 h-8 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Click to upload image</span>
                    </label>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                <textarea
                  value={blogForm.description}
                  onChange={(e) => setBlogForm(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Full blog content"
                  required
                  rows={6}
                  className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Sites</label>
                <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto p-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700">
                  {BLOG_SITES.map((project) => (
                    <label key={project.name} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={blogForm.selectedSites.includes(project.name)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setBlogForm(prev => ({ ...prev, selectedSites: [...prev.selectedSites, project.name] }))
                          } else {
                            setBlogForm(prev => ({ ...prev, selectedSites: prev.selectedSites.filter(s => s !== project.name) }))
                          }
                        }}
                        className="rounded border-gray-300 dark:border-gray-600"
                      />
                      <span className="text-sm text-gray-900 dark:text-white">{project.name}</span>
                    </label>
                  ))}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Selected: {blogForm.selectedSites.length} sites
                </p>
              </div>
              
              <div className="flex space-x-3 pt-4">
                <Button 
                  type="button" 
                  variant="ghost" 
                  onClick={() => setBlogFormOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={!blogForm.title || !blogForm.excerpt || !blogForm.description || blogForm.selectedSites.length === 0}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  {editingBlog ? 'Update Blog' : 'Publish Blog'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Blog Modal */}
      {viewingBlog && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Blog Preview</h3>
              <Button variant="ghost" size="sm" onClick={() => setViewingBlog(null)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="space-y-6">
              {viewingBlog.image && (
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <img 
                    src={`data:image/png;base64,${viewingBlog.image}`} 
                    alt={viewingBlog.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `data:image/jpeg;base64,${viewingBlog.image}`
                    }}
                  />
                </div>
              )}
              
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{viewingBlog.title}</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{viewingBlog.excerpt}</p>
                <div className="prose dark:prose-invert max-w-none">
                  <div className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{viewingBlog.content}</div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>Published on: {new Date(viewingBlog.createdAt).toLocaleDateString()}</span>
                  <span>Sites: {viewingBlog.projects?.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Modal */}
      {viewingChat && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-2xl h-[600px] flex flex-col border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{viewingChat.userInfo?.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{viewingChat.project} | Age: {viewingChat.userInfo?.age} | {viewingChat.userInfo?.contact}</p>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setViewingChat(null)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
              {chatMessages.map((msg: any) => (
                <div key={msg._id} className={`mb-3 ${msg.isAdmin ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-3 rounded-lg max-w-xs ${
                    msg.isAdmin 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600'
                  }`}>
                    <p className="text-sm">{msg.message}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {new Date(msg.timestamp).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendAdminMessage()}
                  placeholder="Type your reply..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <Button onClick={handleSendAdminMessage} className="bg-blue-600 hover:bg-blue-700 text-white">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
        {toasts.map(toast => (
          <ToastComponent key={toast.id} toast={toast} onRemove={removeToast} />
        ))}
      </div>
    </div>
  )
}