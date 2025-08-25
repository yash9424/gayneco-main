'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Menu, X, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Logo } from './logo'
import { ThemeToggle } from './theme-toggle'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-700 dark:to-rose-700 text-white py-3">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="font-medium">(480) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Phoenix, AZ</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Mon-Fri: 8AM-6PM | Sat: 9AM-3PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-white/20 dark:border-gray-800/20">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Logo />
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex items-center space-x-6"
            >
              <nav className="flex items-center space-x-2">
                <Link
                  href="/"
                  className={`font-semibold transition-all duration-300 px-6 py-3 rounded-xl ${
                    pathname === '/' 
                      ? 'text-white bg-gradient-to-r from-pink-600 to-rose-600 shadow-lg' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-gray-800'
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/blog"
                  className={`font-semibold transition-all duration-300 px-6 py-3 rounded-xl ${
                    pathname === '/blog' 
                      ? 'text-white bg-gradient-to-r from-pink-600 to-rose-600 shadow-lg' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-gray-800'
                  }`}
                >
                  Blog
                </Link>
                <button
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('toggleChat'))
                  }}
                  className="font-semibold transition-all duration-300 px-6 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-gray-800 flex items-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat
                </button>
              </nav>
              
              <ThemeToggle />
            </motion.div>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-xl bg-pink-50 dark:bg-gray-800 text-pink-600 dark:text-pink-400 hover:bg-pink-100 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 py-4 border-t border-pink-100 dark:border-gray-800"
            >
              <div className="flex flex-col space-y-2">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-semibold transition-all duration-300 px-4 py-3 rounded-xl ${
                    pathname === '/' 
                      ? 'text-white bg-gradient-to-r from-pink-600 to-rose-600 shadow-lg' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-gray-800'
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-semibold transition-all duration-300 px-4 py-3 rounded-xl ${
                    pathname === '/blog' 
                      ? 'text-white bg-gradient-to-r from-pink-600 to-rose-600 shadow-lg' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-gray-800'
                  }`}
                >
                  Blog
                </Link>
                <button
                  onClick={() => {
                    setIsMenuOpen(false)
                    window.dispatchEvent(new CustomEvent('toggleChat'))
                  }}
                  className="font-semibold transition-all duration-300 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-gray-800 flex items-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}
