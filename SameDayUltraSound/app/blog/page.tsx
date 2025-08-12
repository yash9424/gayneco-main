'use client'

import { useState, useEffect } from 'react'
import { BookOpen, Calendar, Phone, MapPin } from 'lucide-react'
import Header from '@/components/header'
import { AnimatedBackground } from '@/components/animated-background'

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then(data => {
        setBlogPosts(Array.isArray(data) ? data : [])
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch blogs:', err)
        setBlogPosts([])
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      
      {/* Header Spacer */}
      <div className="h-24 sm:h-28 md:h-32"></div>
      
      {/* Blog Content */}
      <div className="py-16 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Medical Resources & Health Guides
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Expert medical insights and guidance on pregnancy, ultrasounds, and women's healthcare</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <div className="col-span-full text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">Loading articles...</p>
              </div>
            ) : blogPosts.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-300 text-lg">No articles available yet.</p>
              </div>
            ) : blogPosts.map((post) => (
              <div key={post._id} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-full h-48 bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900 dark:to-blue-900 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-teal-600 dark:text-teal-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">SameDayUltrasound<span className="text-teal-400">Arizona</span></h3>
                </div>
              </div>
              <p className="text-gray-300">
                Professional same-day ultrasound services in Phoenix, Arizona.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-teal-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p>4700 N 51st Ave</p>
                    <p>Phoenix, AZ 85031</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                  <a href="tel:623-846-7597" className="hover:text-teal-400 transition-colors">623-846-7597</a>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Location</h4>
              <div className="aspect-w-16 aspect-h-9 w-full h-48 rounded-lg overflow-hidden border border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.308996301072!2d-112.17177052480064!3d33.5058241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b14c987eaaaab%3A0xaf123434c4d15982!2s4700%20N%2051st%20Ave%20%235%2C%20Phoenix%2C%20AZ%2085031%2C%20USA!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 SameDayUltrasoundAZ.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}