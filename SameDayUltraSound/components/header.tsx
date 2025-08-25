'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, Menu, X, MapPin, Clock } from 'lucide-react'
import React, { useState } from "react"
import { ThemeToggle } from "./theme-toggle"
import { motion } from "framer-motion"

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showContactInMain, setShowContactInMain] = useState(true)
  const [mounted, setMounted] = useState(false)
  React.useEffect(() => {
    setMounted(true);
  }, [])

  return (
    <div className="header-container fixed top-0 left-0 right-0 w-full z-[60]">
      {/* Main Header */}
      <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-3 sm:py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-white font-bold text-base sm:text-lg lg:text-xl">S</span>
              </motion.div>
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  <span className="hidden sm:inline">SameDay</span><span className="sm:hidden">SD</span><span className="text-teal-600">Ultrasound</span>
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 hidden sm:block">Professional Medical Care</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/blog', label: 'Blog' }
              ].map((item) => (
                <motion.div key={item.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href={item.href}
                    className={`px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-medium transition-all duration-300 text-sm lg:text-base ${
                      pathname === item.href 
                        ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg' 
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).openChat) {
                      (window as any).openChat()
                    }
                  }}
                  className="px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-medium transition-all duration-300 text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Chat
                </button>
              </motion.div>
              {mounted && (
  <div className="hidden lg:flex items-center ml-6 text-base text-gray-700 dark:text-gray-200 font-semibold ms-4">
    <Phone className="w-4 h-4 mr-2" />
    <span>623-846-7597</span>
  </div>
)}
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden border-t border-gray-200 dark:border-gray-700 py-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="space-y-2">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/blog', label: 'Blog' }
                ].map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                      pathname === item.href 
                        ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white' 
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setIsMenuOpen(false)
                    if (typeof window !== 'undefined' && (window as any).openChat) {
                      (window as any).openChat()
                    }
                  }}
                  className="block px-4 py-3 rounded-lg font-medium transition-colors text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-left w-full"
                >
                  Chat
                </button>

              </div>
            </motion.div>
          )}
        </div>
      </header>
    </div>
  )
}
