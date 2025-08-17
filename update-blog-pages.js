const fs = require('fs');
const path = require('path');

const sites = [
  'AHCCCSHelp',
  'First-Trimester', 
  'Low-cost-pregnancy',
  'NeedUltraSound',
  'Pregnancy-Test',
  'SameDayUltraSound',
  'WalkIn-Pregnancy',
  'Wic-Pregnancy-help'
];

const blogPageTemplate = `'use client'

import { useState, useEffect } from 'react'
import { BookOpen, Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Health Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Expert advice and resources for your pregnancy journey</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-full text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">Loading articles...</p>
            </div>
          ) : blogPosts.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-300 text-lg">No articles available yet.</p>
            </div>
          ) : blogPosts.map((post) => (
            <div key={post._id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center overflow-hidden">
                {post.image ? (
                  <img 
                    src={\`data:image/jpeg;base64,\${post.image}\`} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <BookOpen className="w-16 h-16 text-blue-600 dark:text-blue-400" />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  </div>
                  <Link 
                    href={\`/blog/\${post._id}\`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}`;

const blogPostTemplate = `'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Calendar, ArrowLeft, BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function BlogPost() {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const params = useParams()

  useEffect(() => {
    if (params.id) {
      fetch(\`/api/blogs/\${params.id}\`)
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
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading article...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-20">
        <div className="container mx-auto px-4">
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
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-20">
      <div className="container mx-auto px-4">
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
                  src={\`data:image/jpeg;base64,\${post.image}\`} 
                  alt={post.title}
                  className="w-full h-full object-cover"
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
    </div>
  )
}`;

const apiRouteTemplate = `import { NextRequest } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const response = await fetch(\`http://localhost:3011/api/blogs/\${params.id}\`)
    if (!response.ok) {
      return Response.json({ error: 'Blog not found' }, { status: 404 })
    }
    const blog = await response.json()
    return Response.json(blog)
  } catch (error) {
    return Response.json({ error: 'Failed to fetch blog' }, { status: 500 })
  }
}`;

sites.forEach(site => {
  try {
    // Update blog page
    const blogPagePath = path.join(__dirname, site, 'app', 'blog', 'page.tsx');
    fs.writeFileSync(blogPagePath, blogPageTemplate, 'utf8');
    console.log(`Updated ${site}/app/blog/page.tsx`);

    // Create [id] directory and page
    const blogIdDir = path.join(__dirname, site, 'app', 'blog', '[id]');
    if (!fs.existsSync(blogIdDir)) {
      fs.mkdirSync(blogIdDir, { recursive: true });
    }
    const blogPostPath = path.join(blogIdDir, 'page.tsx');
    fs.writeFileSync(blogPostPath, blogPostTemplate, 'utf8');
    console.log(`Created ${site}/app/blog/[id]/page.tsx`);

    // Create API [id] directory and route
    const apiIdDir = path.join(__dirname, site, 'app', 'api', 'blogs', '[id]');
    if (!fs.existsSync(apiIdDir)) {
      fs.mkdirSync(apiIdDir, { recursive: true });
    }
    const apiRoutePath = path.join(apiIdDir, 'route.ts');
    fs.writeFileSync(apiRoutePath, apiRouteTemplate, 'utf8');
    console.log(`Created ${site}/app/api/blogs/[id]/route.ts`);

  } catch (error) {
    console.error(`Failed to update ${site}:`, error.message);
  }
});

console.log('Blog pages update completed!');