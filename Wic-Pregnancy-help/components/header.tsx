'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header 
      className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div 
              className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white font-bold text-sm">W</span>
            </motion.div>
<motion.span 
              className="font-bold text-gray-800 text-base sm:text-lg md:text-xl"
              whileHover={{ scale: 1.05 }}
            >
              <span className="hidden sm:inline">WIC Pregnancy Help</span>
              <span className="sm:hidden">WIC Help</span>
            </motion.span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="ghost" 
                  className={`text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-full px-4 transition-colors ${
                    pathname === '/' ? 'bg-pink-50 text-pink-600' : ''
                  }`}
                >
                  Home
                </Button>
              </motion.div>
            </Link>
            <Link href="/blog">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="ghost" 
                  className={`text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-full px-4 transition-colors ${
                    pathname === '/blog' ? 'bg-pink-50 text-pink-600' : ''
                  }`}
                >
                  Blog
                </Button>
              </motion.div>
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="ghost" 
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).openChat) {
                    (window as any).openChat()
                  }
                }}
                className="text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-full px-4 transition-colors"
              >
                Chat
              </Button>
            </motion.div>
            <motion.a
              href="tel:623-846-7597"
              className="text-gray-700 hover:text-pink-600 font-medium text-sm px-3 py-2 rounded-full hover:bg-pink-50 transition-colors flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              📞 623-846-7597
            </motion.a>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-pink-600 p-2 rounded-full hover:bg-pink-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-pink-100 bg-white/95 backdrop-blur-sm"
            >
              <div className="px-4 py-3 space-y-2">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      pathname === '/' 
                        ? 'bg-pink-50 text-pink-600' 
                        : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                    }`}
                  >
                    Home
                  </motion.div>
                </Link>
                <Link href="/blog" onClick={() => setIsMenuOpen(false)}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      pathname === '/blog' 
                        ? 'bg-pink-50 text-pink-600' 
                        : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                    }`}
                  >
                    Blog
                  </motion.div>
                </Link>
                <motion.button
                  onClick={() => {
                    setIsMenuOpen(false)
                    if (typeof window !== 'undefined' && (window as any).openChat) {
                      (window as any).openChat()
                    }
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="block w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors"
                >
                  Chat
                </motion.button>
                <motion.a
                  href="tel:623-846-7597"
                  className="block w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  📞 Call: 623-846-7597
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
