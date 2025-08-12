'use client'

import { motion } from 'framer-motion'
import { Menu, X, MessageCircle, Phone } from 'lucide-react'
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
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('openChat'))}
                  className="font-semibold transition-all duration-300 px-6 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-gray-800 flex items-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat</span>
                </button>
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
              </nav>
              
              <div className="flex items-center space-x-4">
                <a
                  href="tel:623-846-7597"
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">623-846-7597</span>
                </a>
                <ThemeToggle />
              </div>
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
                <button
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('openChat'))
                    setIsMenuOpen(false)
                  }}
                  className="font-semibold transition-all duration-300 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-gray-800 flex items-center space-x-2 text-left"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat</span>
                </button>
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
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}
