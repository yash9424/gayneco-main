'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Calendar, ArrowLeft, BookOpen } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ChatWidget from '@/components/chat-widget'

export default function BlogPost() {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const params = useParams()

  useEffect(() => {
    if (params.id) {
      fetch(`/api/blogs/${params.id}`)
        .then(res => {
          if (!res.ok) throw new Error('Failed to fetch')
          return res.json()
        })
        .then(data => {
          setPost(data)
          setLoading(false)
        })
        .catch(err => {
          console.error('Failed to fetch blog post:', err)
          setLoading(false)
        })
    }
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navigation />
        <div className="container mx-auto px-4 pt-8 pb-20">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading article...</p>
          </div>
        </div>
        <Footer />
        <ChatWidget />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navigation />
        <div className="container mx-auto px-4 pt-8 pb-20">
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Article Not Found</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">The article you're looking for doesn't exist.</p>
            <Link 
              href="/blog"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
        <ChatWidget />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <div className="container mx-auto px-4 pt-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/blog"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            {post.image && (
              <div className="w-full h-64 md:h-96 overflow-hidden">
                <img 
                  src={`data:image/png;base64,${post.image}`} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `data:image/jpeg;base64,${post.image}`
                  }}
                />
              </div>
            )}
            
            <div className="p-6 md:p-8">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {post.title}
              </h1>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 font-medium">
                  {post.excerpt}
                </p>
                
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                  {post.content}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <Footer />
      <ChatWidget />
    </div>
  )
}