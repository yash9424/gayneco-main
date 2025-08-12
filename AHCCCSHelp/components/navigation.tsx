'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Menu, X, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'
import { ThemeToggle } from './theme-toggle'

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  }

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b-4 border-teal-500 dark:border-teal-400"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 dark:from-teal-400 dark:to-cyan-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Heart className="w-7 h-7 text-white" />
                  </motion.div>
                  <motion.div 
                    className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 dark:bg-orange-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                    AHCCCS<span className="text-teal-600 dark:text-teal-400">Help</span>
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">PregnancyAZ.com</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center space-x-2"
              >
                <Link
                  href="/"
                  className={`font-semibold transition-all duration-300 px-4 py-2 rounded-lg relative overflow-hidden ${
                    pathname === '/' 
                      ? 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 border-b-2 border-teal-600 dark:border-teal-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Home
                  </motion.span>
                </Link>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('openChat'))}
                  className="font-semibold transition-all duration-300 px-4 py-2 rounded-lg relative overflow-hidden text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Chat
                  </motion.span>
                </button>
                <Link
                  href="/blog"
                  className={`font-semibold transition-all duration-300 px-4 py-2 rounded-lg relative overflow-hidden ${
                    pathname === '/blog' 
                      ? 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 border-b-2 border-teal-600 dark:border-teal-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Blog
                  </motion.span>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold cursor-pointer"
              >
                <a href="tel:623-846-7597" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  623-846-7597
                </a>
              </motion.div>
              
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="flex flex-col space-y-2">
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/"
                      onClick={() => setIsMenuOpen(false)}
                      className={`font-semibold transition-all duration-300 px-4 py-3 rounded-lg block ${
                        pathname === '/' 
                          ? 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30' 
                          : 'text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      Home
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <button
                      onClick={() => {
                        setIsMenuOpen(false)
                        window.dispatchEvent(new CustomEvent('openChat'))
                      }}
                      className="font-semibold transition-all duration-300 px-4 py-3 rounded-lg block w-full text-left text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      Chat
                    </button>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/blog"
                      onClick={() => setIsMenuOpen(false)}
                      className={`font-semibold transition-all duration-300 px-4 py-3 rounded-lg block ${
                        pathname === '/blog' 
                          ? 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30' 
                          : 'text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      Blog
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <div className="bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-500 dark:to-cyan-500 text-white px-4 py-3 rounded-lg font-semibold text-center">
                      <a href="tel:623-846-7597">Call Now</a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  )
}
