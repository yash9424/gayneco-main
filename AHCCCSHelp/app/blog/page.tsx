'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

const blogPosts = [
  {
    id: 1,
    title: 'Complete Guide to AHCCCS Pregnancy Confirmation',
    excerpt: 'Everything you need to know about getting pregnancy confirmation for Arizona Medicaid, including required documents and step-by-step process.',
    date: 'January 15, 2025',
    readTime: '8 min read',
    category: 'AHCCCS Guide',
    trending: true,
    image: '/images/pregnancy-test.png'
  },
  {
    id: 2,
    title: 'WIC Benefits During Pregnancy: Complete Overview',
    excerpt: 'Comprehensive guide to WIC benefits for pregnant women in Arizona, including eligibility requirements and application process.',
    date: 'January 12, 2025',
    readTime: '6 min read',
    category: 'WIC Benefits',
    trending: false,
    image: '/images/wic-support.png'
  },
  {
    id: 3,
    title: 'Early Pregnancy Signs and When to Get Tested',
    excerpt: 'Learn about common early pregnancy symptoms and when to seek professional confirmation and prenatal care.',
    date: 'January 10, 2025',
    readTime: '5 min read',
    category: 'Pregnancy Health',
    trending: true,
    image: '/images/pregnancy-signs.png'
  },
  {
    id: 4,
    title: 'Understanding Ultrasound During Early Pregnancy',
    excerpt: 'What to expect during your first ultrasound appointment and how it helps confirm pregnancy for AHCCCS.',
    date: 'January 8, 2025',
    readTime: '7 min read',
    category: 'Medical Procedures',
    trending: false,
    image: '/images/ultrasound-appointment.png'
  },
  {
    id: 5,
    title: 'Prenatal Care Basics for First-Time Mothers',
    excerpt: 'Essential information about prenatal care, what to expect, and how to prepare for your pregnancy journey.',
    date: 'January 5, 2025',
    readTime: '9 min read',
    category: 'Pregnancy Health',
    trending: false,
    image: '/images/prenatal-visit.png'
  },
  {
    id: 6,
    title: 'Common Pregnancy Symptoms in the First Trimester',
    excerpt: 'Understanding normal pregnancy symptoms and when to contact your healthcare provider for concerns.',
    date: 'January 3, 2025',
    readTime: '6 min read',
    category: 'Pregnancy Health',
    trending: false,
    image: '/images/pregnancy-symptoms.png'
  }
]

const categories = ['All', 'AHCCCS Guide', 'WIC Benefits', 'Pregnancy Health', 'Medical Procedures']

export default function BlogPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Health & Pregnancy Resources
            </motion.div>
            
            <motion.h1 
              className="text-5xl font-bold text-gray-900 dark:text-white mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Pregnancy & AHCCCS Blog
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Expert advice on pregnancy confirmation, AHCCCS enrollment, WIC benefits, and women's health in Arizona.
            </motion.p>

            {/* Search and Filter */}
            <motion.div 
              className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10 py-3 text-lg rounded-lg border-2 border-gray-200 dark:border-gray-700 focus:border-teal-500 dark:focus:border-teal-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="px-6 py-3 text-lg rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  index === 0 
                    ? 'bg-teal-600 dark:bg-teal-500 text-white shadow-lg' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.03, 
                    rotateY: 5,
                    transition: { type: "spring", stiffness: 300, damping: 30 }
                  }}
                  layout
                >
                  <Card className="h-full hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <motion.img
                        src={post.image || "/placeholder.svg?height=250&width=400"}
                        alt={post.title}
                        className="w-full h-48 object-cover transition-transform duration-300"
                        whileHover={{ scale: 1.1 }}
                      />
                      <AnimatePresence>
                        {post.trending && (
                          <motion.div 
                            className="absolute top-4 left-4 bg-orange-500 dark:bg-orange-400 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 180 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Trending
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <motion.div 
                        className="absolute top-4 right-4 bg-teal-600 dark:bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {post.category}
                      </motion.div>
                    </div>
                    
                    <CardContent className="p-6">
                      <motion.h2 
                        className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300 line-clamp-2"
                        whileHover={{ x: 5 }}
                      >
                        {post.title}
                      </motion.h2>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <motion.div 
                            className="flex items-center space-x-1"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </motion.div>
                          <motion.div 
                            className="flex items-center space-x-1"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </motion.div>
                        </div>
                      </div>
                      
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Button variant="ghost" className="w-full justify-between text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/30 p-0 h-auto font-semibold">
                          Read Full Article
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/30">
                Load More Articles
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-700 dark:to-cyan-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <motion.h2 
              className="text-3xl font-bold text-white mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Stay Updated on Pregnancy Health
            </motion.h2>
            <p className="text-teal-100 dark:text-teal-200 mb-8 text-lg">
              Get the latest articles on AHCCCS, WIC benefits, and pregnancy care delivered to your inbox.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Input 
                placeholder="Enter your email" 
                className="flex-1 py-3 text-lg rounded-lg border-0 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-white text-teal-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-teal-400 dark:hover:bg-gray-700 px-6 py-3 text-lg font-semibold rounded-lg">
                  Subscribe
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
