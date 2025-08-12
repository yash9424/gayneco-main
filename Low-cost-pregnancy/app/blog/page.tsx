'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, BookOpen } from 'lucide-react'
import Image from "next/image"
import { AnimatedBackground } from "@/components/animated-background"
import ChatWidget from "@/components/chat-widget"

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
    <>
      <AnimatedBackground />
      <div className="min-h-screen pt-20 relative z-10">
        {/* Blog Header */}
        <div className="relative py-12 overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Health & Wellness{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">
                  Blog
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                Expert advice, helpful resources, and supportive guidance for your pregnancy journey
              </p>
              <div className="flex justify-center mt-6">
                <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 pb-12 relative">
          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {loading ? (
              <div className="col-span-full text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading articles...</p>
              </div>
            ) : blogPosts.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">No articles available yet.</p>
              </div>
            ) : blogPosts.map((post, index) => (
              <Card 
                key={post._id} 
                className="group hover:shadow-xl hover:shadow-pink-500/15 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border-0 shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-pink-300 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <BookOpen className="w-16 h-16 text-pink-600" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 shadow-lg">
                      Article
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-3 relative z-10">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="pt-0 relative z-10">
                  <p className="text-gray-600 group-hover:text-gray-700 mb-4 line-clamp-3 transition-colors duration-300">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.createdAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      Admin
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <ChatWidget />
    </>
  )
}
