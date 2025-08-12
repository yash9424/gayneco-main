"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from 'lucide-react'


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  const handleChatClick = () => {
    if (typeof window !== 'undefined' && (window as any).openChat) {
      (window as any).openChat()
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-pink-500/10 border-b border-gray-200" 
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-500/25">
              L
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Low Cost Pregnancy Arizona
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-pink-600 font-medium transition-all duration-300 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <button 
              onClick={handleChatClick}
              className="text-gray-700 hover:text-pink-600 font-medium transition-all duration-300 relative group"
            >
              Chat
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-pink-600 font-medium transition-all duration-300 relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a 
              href="tel:623-846-7597"
              className="text-gray-700 hover:text-pink-600 font-medium transition-all duration-300 relative group flex items-center gap-2"
            >
              <Phone size={16} />
              623-846-7597
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-300 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <button 
                onClick={() => { handleChatClick(); setIsMenuOpen(false); }}
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-300 px-4 py-2 text-left w-full"
              >
                Chat
              </button>
              <Link 
                href="/blog" 
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-300 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <a 
                href="tel:623-846-7597"
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-300 px-4 py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={16} />
                623-846-7597
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
