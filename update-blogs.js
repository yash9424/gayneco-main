const fs = require('fs');
const path = require('path');

const sites = [
  'Pregnancy-Test',
  'SameDayUltraSound', 
  'Teen-Pregnancy-Support',
  'WalkIn-Pregnancy',
  'Wic-Pregnancy-help'
];

const basicTemplate = (siteName) => `'use client'

import { useState, useEffect } from 'react'
import { BookOpen, Calendar } from 'lucide-react'

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3011/api/blogs/${siteName}')
      .then(res => res.json())
      .then(data => {
        setBlogPosts(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch blogs:', err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Health Blog</h1>
          <p className="text-xl text-gray-600">Expert advice and resources for your pregnancy journey</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-full text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading articles...</p>
            </div>
          ) : blogPosts.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No articles available yet.</p>
            </div>
          ) : blogPosts.map((post) => (
            <div key={post._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-blue-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}`;

sites.forEach(site => {
  const filePath = path.join(__dirname, site, 'app', 'blog', 'page.tsx');
  const content = basicTemplate(site);
  
  try {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${site}/app/blog/page.tsx`);
  } catch (error) {
    console.error(`Failed to update ${site}:`, error.message);
  }
});

console.log('Blog updates completed!');