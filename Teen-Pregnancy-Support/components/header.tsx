'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Logo from './logo'
import { ThemeToggle } from './theme-toggle'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-[#26619C]/30" style={{ backgroundColor: 'rgba(38, 97, 156, 0.95)' }}>
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <nav className="flex items-center gap-6">
              <Link 
                href="/" 
                className={`font-medium transition-all duration-300 hover:text-white relative px-3 py-2 ${
                  pathname === '/' ? 'text-white' : 'text-blue-100'
                }`}
              >
                Home
                {pathname === '/' && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"></div>
                )}
              </Link>
              <Link 
                href="/blog" 
                className={`font-medium transition-all duration-300 hover:text-white relative px-3 py-2 ${
                  pathname === '/blog' ? 'text-white' : 'text-blue-100'
                }`}
              >
                Blog
                {pathname === '/blog' && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"></div>
                )}
              </Link>
            </nav>
            
            <a href="tel:623-846-7597" className="flex items-center gap-2 text-white hover:text-blue-100 transition-colors">
              <span className="font-semibold">📞 623-846-7597</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              className="p-2 text-white hover:text-blue-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-blue-300/30">
            <nav className="flex flex-col gap-4 pt-4">
              <Link 
                href="/" 
                className={`font-medium transition-colors duration-300 px-3 py-2 ${
                  pathname === '/' ? 'text-white bg-blue-700/30 rounded' : 'text-blue-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/blog" 
                className={`font-medium transition-colors duration-300 px-3 py-2 ${
                  pathname === '/blog' ? 'text-white bg-blue-700/30 rounded' : 'text-blue-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <a 
                href="tel:623-846-7597" 
                className="flex items-center gap-2 text-white hover:text-blue-100 transition-colors px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="font-semibold">📞 623-846-7597</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}