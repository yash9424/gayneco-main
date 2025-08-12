'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, TrendingUp, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'

const blogPosts = [
  {
    id: 1,
    title: '5 Signs You Might Be Pregnant',
    excerpt: 'Learn about the early signs and symptoms that might indicate pregnancy, from missed periods to morning sickness.',
    date: 'January 15, 2025',
    readTime: '5 min read',
    category: 'Pregnancy Signs',
    image: '/images/pregnancy-signs.png',
    trending: true
  },
  {
    id: 2,
    title: 'When Should I Get a Pregnancy Ultrasound?',
    excerpt: 'Understanding the right timing for your first ultrasound and what to expect during the appointment.',
    date: 'January 12, 2025',
    readTime: '7 min read',
    category: 'Ultrasound',
    image: '/images/ultrasound-appointment.png',
    trending: false
  },
  {
    id: 3,
    title: 'What Is a WIC Referral and How Do I Get One?',
    excerpt: 'Everything you need to know about WIC benefits and how our clinic can help you get the support you need.',
    date: 'January 10, 2025',
    readTime: '6 min read',
    category: 'WIC Support',
    image: '/images/wic-support.png',
    trending: true
  },
  {
    id: 4,
    title: 'Understanding Your First Prenatal Visit',
    excerpt: 'What to expect during your first OB appointment and how to prepare for this important milestone.',
    date: 'January 8, 2025',
    readTime: '8 min read',
    category: 'Prenatal Care',
    image: '/images/prenatal-visit.png',
    trending: false
  },
  {
    id: 5,
    title: 'Pregnancy Symptoms: Normal vs. When to Seek Care',
    excerpt: 'Learn which pregnancy symptoms are normal and which ones require immediate medical attention.',
    date: 'January 5, 2025',
    readTime: '10 min read',
    category: 'Health & Safety',
    image: '/images/pregnancy-symptoms.png',
    trending: false
  },
  {
    id: 6,
    title: 'Free Pregnancy Testing: What You Need to Know',
    excerpt: 'Information about our free urine pregnancy tests and what happens after you get your results.',
    date: 'January 3, 2025',
    readTime: '4 min read',
    category: 'Testing',
    image: '/images/pregnancy-test.png',
    trending: true
  }
]

const categoryColors = {
  'Pregnancy Signs': 'from-pink-500 to-rose-500 dark:from-pink-600 dark:to-rose-600',
  'Ultrasound': 'from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600',
  'WIC Support': 'from-green-500 to-emerald-500 dark:from-green-600 dark:to-emerald-600',
  'Prenatal Care': 'from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600',
  'Health & Safety': 'from-orange-500 to-red-500 dark:from-orange-600 dark:to-red-600',
  'Testing': 'from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600'
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-500">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-100/20 dark:from-pink-900/10 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-rose-200/30 dark:from-rose-800/20 to-transparent rounded-full blur-3xl"></div>
      
      <Header />
      
      <main className="pt-32 pb-16 relative">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-pink-200/50 dark:border-pink-700/50 rounded-full text-sm font-medium text-pink-700 dark:text-pink-400 shadow-lg mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Health Resources
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Pregnancy & Health{' '}
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400 bg-clip-text text-transparent">
                Resources
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Expert advice and information to help you through your pregnancy journey and women's health concerns.
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 dark:border-gray-700/20 h-full transform group-hover:scale-105">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <div className={`bg-gradient-to-r ${categoryColors[post.category as keyof typeof categoryColors]} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg`}>
                        {post.category}
                      </div>
                      {post.trending && (
                        <div className="bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-600 dark:to-red-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg flex items-center">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300 leading-tight">
                      {post.title}
                    </h2>
                    
                    {/* Excerpt */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-light">
                      {post.excerpt}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Read More Button */}
                    <Button
                      variant="ghost"
                      className="w-full justify-between text-pink-600 dark:text-pink-400 hover:text-white hover:bg-gradient-to-r hover:from-pink-600 hover:to-rose-600 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-rose-600 group-hover:text-white transition-all duration-300 rounded-2xl py-3 font-medium"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
                
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 dark:from-pink-900/20 to-rose-100/50 dark:to-rose-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              </motion.article>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24 text-center relative"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/20 dark:border-gray-700/20 relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-200/30 dark:from-pink-700/20 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-rose-200/30 dark:from-rose-700/20 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Need Immediate{' '}
                  <span className="bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400 bg-clip-text text-transparent">
                    Care?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto font-light">
                  Don't wait for an appointment. Walk into our clinic today for professional OB/GYN care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={() => {
                      const footer = document.querySelector('footer');
                      footer?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-10 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    Visit Our Clinic
                  </Button>
                  <a href="tel:623-846-7597">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-pink-200 dark:border-pink-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-pink-700 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-gray-700 hover:border-pink-300 dark:hover:border-pink-600 px-10 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
