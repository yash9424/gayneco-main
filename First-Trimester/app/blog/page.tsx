'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Search, Filter, Heart, Baby, Stethoscope, User, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

const blogPosts = [
  {
    id: 1,
    title: 'I Just Found Out I\'m Pregnant — What Should I Do First?',
    excerpt: 'Congratulations! Discovering you\'re pregnant is exciting and overwhelming. Here\'s your complete first-step guide to starting your prenatal journey with confidence.',
    date: 'January 15, 2025',
    readTime: '8 min read',
    category: 'First Steps',
    trending: true,
    author: 'Dr. Sarah Johnson',
    icon: Heart,
    image: '/images/blog-first-steps.png',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'When Should I Start Seeing an OB/GYN?',
    excerpt: 'Learn the optimal timing for your first OB appointment, what to expect during early prenatal visits, and how to prepare for your first trimester care.',
    date: 'January 12, 2025',
    readTime: '6 min read',
    category: 'Prenatal Care',
    trending: false,
    author: 'Dr. Maria Rodriguez',
    icon: Stethoscope,
    image: '/images/blog-ob-appointment.png',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Understanding First Trimester Ultrasounds',
    excerpt: 'Everything you need to know about early pregnancy ultrasounds, what they reveal, and when to schedule your first imaging appointment.',
    date: 'January 10, 2025',
    readTime: '7 min read',
    category: 'Medical Care',
    trending: true,
    author: 'Dr. Jennifer Lee',
    icon: Baby,
    image: '/images/blog-ultrasound.png',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    id: 4,
    title: 'AHCCCS Coverage for Pregnancy Care',
    excerpt: 'Complete guide to AHCCCS benefits during pregnancy, how to apply, and what services are covered for expecting mothers in Arizona.',
    date: 'January 8, 2025',
    readTime: '5 min read',
    category: 'Insurance',
    trending: false,
    author: 'Healthcare Team',
    icon: Heart,
    image: '/images/blog-ahcccs.png',
    gradient: 'from-cyan-500 to-teal-500'
  },
  {
    id: 5,
    title: 'WIC Program Benefits for New Mothers',
    excerpt: 'Learn about WIC program benefits, eligibility requirements, and how our clinic can help you access nutritional support during pregnancy.',
    date: 'January 5, 2025',
    readTime: '6 min read',
    category: 'Support Programs',
    trending: false,
    author: 'Support Team',
    icon: Baby,
    image: '/images/blog-wic.png',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 6,
    title: 'Managing First Trimester Symptoms',
    excerpt: 'Practical tips for dealing with morning sickness, fatigue, and other common first trimester symptoms. Expert advice from our OB/GYN team.',
    date: 'January 3, 2025',
    readTime: '9 min read',
    category: 'Health Tips',
    trending: true,
    author: 'Dr. Sarah Johnson',
    icon: Stethoscope,
    image: '/images/blog-symptoms.png',
    gradient: 'from-rose-500 to-pink-500'
  }
]

export default function BlogPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-800 dark:to-indigo-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full text-white text-sm font-semibold mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Pregnancy & Prenatal Care Resources
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              First Trimester Care
              <span className="block text-blue-200">Knowledge Hub</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Expert guidance and resources for your early pregnancy journey from our experienced OB/GYN team.
            </p>

            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-12 py-4 text-lg rounded-xl border-0 bg-white/90 backdrop-blur-lg text-gray-900 shadow-lg"
                />
              </div>
              <Button 
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-4 text-lg rounded-xl backdrop-blur-lg"
              >
                <Filter className="w-5 h-5 mr-2" />
                Filter
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Featured Article</h2>
            <p className="text-gray-600 dark:text-gray-300">Most popular this week</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <img
                src={blogPosts[0].image || "/placeholder.svg"}
                alt={blogPosts[0].title}
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 bg-gradient-to-r ${blogPosts[0].gradient} text-white text-sm font-semibold rounded-full`}>
                  Featured
                </span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <span className={`px-3 py-1 bg-gradient-to-r ${blogPosts[0].gradient} text-white rounded-full`}>
                  {blogPosts[0].category}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {blogPosts[0].date}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {blogPosts[0].readTime}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                {blogPosts[0].title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{blogPosts[0].author}</span>
                </div>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Latest Articles</h2>
            <p className="text-gray-600 dark:text-gray-300">Stay informed with our latest pregnancy care insights</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Card className="h-full bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <span className={`px-3 py-1 bg-gradient-to-r ${post.gradient} text-white text-xs font-semibold rounded-full`}>
                        {post.category}
                      </span>
                      {post.trending && (
                        <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full flex items-center">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-8 h-8 bg-gradient-to-r ${post.gradient} rounded-full flex items-center justify-center`}>
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{post.author}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                        Read More
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </motion.div>

          {/* Load More */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4 text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl"
            >
              Load More Articles
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated on Pregnancy Care
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest first trimester care tips and prenatal guidance delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="flex-1 py-4 text-lg rounded-xl border-0 bg-white/90 backdrop-blur-lg text-gray-900"
              />
              <Button 
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-4 text-lg rounded-xl backdrop-blur-lg"
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
