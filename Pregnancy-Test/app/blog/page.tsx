'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, ArrowRight, ChevronDown, Phone, MapPin, Clock, Menu, X } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from '../contexts/language-context'

export default function BlogPage() {
  const { language, translations } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const blogPosts = [
    {
      id: 1,
      titleKey: 'blog.posts.earlySignsTitle',
      excerptKey: 'blog.posts.earlySignsExcerpt',
      image: '/pregnant-woman-holding-belly.png',
      date: '2024-01-15',
      author: language === 'es' ? 'Dra. Sarah Martínez' : 'Dr. Sarah Martinez'
    },
    {
      id: 2,
      titleKey: 'blog.posts.wicTitle',
      excerptKey: 'blog.posts.wicExcerpt',
      image: '/wic-arizona-nutrition.png',
      date: '2024-01-10',
      author: 'María Rodríguez'
    },
    {
      id: 3,
      titleKey: 'blog.posts.testVisitTitle',
      excerptKey: 'blog.posts.testVisitExcerpt',
      image: '/medical-clinic-pregnancy-test.png',
      date: '2024-01-05',
      author: language === 'es' ? 'Dra. Jennifer López' : 'Dr. Jennifer Lee'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-animated">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-4 h-4 bg-emerald-300/20 rounded-full animate-float-1"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-orange-300/20 rounded-full animate-float-2"></div>
        <div className="absolute top-40 left-1/4 w-3 h-3 bg-emerald-400/30 rounded-full animate-float-3"></div>
        <div className="absolute top-60 right-1/3 w-5 h-5 bg-orange-400/25 rounded-full animate-float-4"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-emerald-300/20 rounded-full animate-float-5"></div>
        <div className="absolute bottom-60 right-10 w-6 h-6 bg-orange-300/20 rounded-full animate-float-6"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100/50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-sm md:text-lg lg:text-xl font-bold bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
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

      {/* Blog Header */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-emerald-100/50 to-orange-100/50 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 animate-gradient-shift"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-emerald-600 to-orange-600 bg-clip-text text-transparent">
              {translations.blog.title}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-200">
            {translations.blog.subtitle}
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 md:py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={post.id} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={translations.blog.posts[post.titleKey.split('.').pop()]}
                    width={400}
                    height={300}
                    className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span className="truncate">{post.author}</span>
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2">
                    {translations.blog.posts[post.titleKey.split('.').pop()]}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base line-clamp-3">
                    {translations.blog.posts[post.excerptKey.split('.').pop()]}
                  </p>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium group-hover:translate-x-2 transition-all duration-300"
                  >
                    {translations.blog.readMore}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-orange-900/20 animate-gradient-shift"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Company Info */}
            <div className="animate-fade-in-up">
              <h3 className="text-xl font-bold mb-4 text-emerald-400">
                {translations.footer.companyName}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {translations.footer.description}
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="animate-fade-in-up delay-200">
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

            {/* Map */}
            <div className="animate-fade-in-up delay-400">
              <h4 className="font-bold mb-4 text-orange-400">Find Us</h4>
              <div className="rounded-lg overflow-hidden shadow-lg border border-gray-600">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8!2d-112.1667!3d33.5333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6e0c7b8b8b8b%3A0x1234567890abcdef!2s4700%20N%2051st%20Ave%20%235%2C%20Phoenix%2C%20AZ%2085031%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 animate-fade-in-up delay-600">
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
