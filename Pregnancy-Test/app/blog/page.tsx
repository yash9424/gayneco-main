'use client'

import { useState, useEffect } from 'react'
import { BookOpen, Calendar, Phone, MapPin, Clock, Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '../contexts/language-context'

export default function BlogPage() {
  const { language, translations } = useLanguage()
  const [blogPosts, setBlogPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    <div className="min-h-screen bg-gradient-animated">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100/50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              {language === 'es' ? 'Prueba Embarazo Gratis Arizona' : 'Free Pregnancy Test Arizona'}
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group">
                {translations.nav.home}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/blog" className="text-emerald-600 font-medium relative">
                {translations.nav.blog}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600"></span>
              </Link>
              <LanguageDropdown />
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-emerald-600 transition-all duration-300 transform hover:scale-110"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-emerald-100 pt-4 animate-slide-down">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  {translations.nav.home}
                </Link>
                <Link href="/blog" className="text-emerald-600 font-medium">
                  {translations.nav.blog}
                </Link>
                <LanguageDropdown />
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Blog Content */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-orange-600 bg-clip-text text-transparent">
                {translations.blog.title}
              </span>
            </h1>
            <p className="text-xl text-gray-600">{translations.blog.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <div className="col-span-full text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading articles...</p>
              </div>
            ) : blogPosts.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">No articles available yet.</p>
              </div>
            ) : blogPosts.map((post) => (
              <div key={post._id} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="w-full h-48 bg-gradient-to-br from-emerald-100 to-orange-100 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-emerald-600" />
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

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-orange-900/20 animate-gradient-shift"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-emerald-400">
                Free Pregnancy Test Arizona
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Providing compassionate pregnancy care and support services to women in Arizona.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-orange-400">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="h-4 w-4 text-emerald-400" />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p>(623) 555-0123</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="h-4 w-4 text-emerald-400" />
                  <div>
                    <p className="text-sm text-gray-400">Address</p>
                    <p>4700 N 51st Ave #5, Phoenix, AZ 85031, USA</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Clock className="h-4 w-4 text-emerald-400" />
                  <div>
                    <p className="text-sm text-gray-400">Hours</p>
                    <p>Mon-Fri 8AM-5PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-orange-400">Find Us</h4>
              <div className="rounded-lg overflow-hidden shadow-lg border border-gray-600">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8!2d-112.1667!3d33.5333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6e0c7b8b8b8b%3A0x1234567890abcdef!2s4700%20N%2051st%20Ave%20%235%2C%20Phoenix%2C%20AZ%2085031%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 {translations.footer.companyName}. {translations.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function LanguageDropdown() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white/90 border border-gray-200 rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
      >
        <span className="text-xl">{language === 'en' ? '🇺🇸' : '🇪🇸'}</span>
        <span className="font-medium">{language === 'en' ? 'English' : 'Español'}</span>
        <ChevronDown className="h-4 w-4" />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 min-w-full animate-slide-down">
          <button
            onClick={() => {
              setLanguage('en')
              setIsOpen(false)
            }}
            className="flex items-center space-x-2 px-4 py-2 hover:bg-emerald-50 transition-colors w-full text-left"
          >
            <span className="text-xl">🇺🇸</span>
            <span>English</span>
          </button>
          <button
            onClick={() => {
              setLanguage('es')
              setIsOpen(false)
            }}
            className="flex items-center space-x-2 px-4 py-2 hover:bg-emerald-50 transition-colors w-full text-left"
          >
            <span className="text-xl">🇪🇸</span>
            <span>Español</span>
          </button>
        </div>
      )}
    </div>
  )
}