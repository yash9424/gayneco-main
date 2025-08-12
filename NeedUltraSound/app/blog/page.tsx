'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar } from 'lucide-react'
import Image from 'next/image'

const blogPosts = [
  {
    id: 1,
    title: "Why You Might Need a Repeat Ultrasound After the ER",
    excerpt: "Understanding when and why follow-up ultrasounds are necessary after emergency room visits during early pregnancy.",
    date: "January 15, 2024",
    image: "/medical-ultrasound.png",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "What to Expect During a Same-Day Pregnancy Ultrasound",
    excerpt: "A comprehensive guide to preparing for and understanding your ultrasound appointment, from arrival to results.",
    date: "January 10, 2024",
    image: "/pregnant-woman-ultrasound.png",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Free Resources for Pregnant Women Without Insurance",
    excerpt: "Discover available support programs, resources, and assistance options for expectant mothers without health insurance.",
    date: "January 5, 2024",
    image: "/pregnancy-support.png",
    readTime: "6 min read"
  }
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-medical-100 max-w-2xl mx-auto">
              Expert insights, helpful guides, and important information about pregnancy care and ultrasound services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-medical-600 transition-colors duration-300">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
