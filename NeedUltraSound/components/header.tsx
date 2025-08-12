'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 mb-6">
        <div className="flex items-center justify-between h-20">
          {/* Text Logo */}
          <Link href="/" className="group">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex flex-col"
            >
              <span className={`text-xl md:text-2xl font-bold tracking-tight leading-tight transition-colors duration-300 ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}>
                <span className="text-medical-500">N</span>eed<span className="text-medical-500">U</span>ltrasound
              </span>
              <span className={`text-xs md:text-sm font-medium tracking-wider transition-colors duration-300 ${
                isScrolled ? 'text-slate-600' : 'text-white/90'
              }`}>
                Same Day Pregnancy Care
              </span>
            </motion.div>
          </Link>
          
          {/* Desktop Navigation with Phone Number */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium transition-colors duration-300 ${
                    pathname === item.href
                      ? isScrolled ? 'text-medical-600' : 'text-medical-300'
                      : isScrolled ? 'text-slate-900 hover:text-medical-600' : 'text-white hover:text-medical-300'
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                        isScrolled ? 'bg-medical-600' : 'bg-medical-300'
                      }`}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Phone Number */}
            <a 
              href="tel:+1234567890" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors duration-300 ${
                isScrolled 
                  ? 'bg-medical-600 text-white hover:bg-medical-700' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium text-sm">(123) 456-7890</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-b-2xl"
        >
          <nav className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 font-medium transition-colors duration-300 ${
                  pathname === item.href
                    ? 'text-medical-600 bg-medical-50'
                    : 'text-slate-900 hover:text-medical-600 hover:bg-medical-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      </div>
    </motion.header>
  )
}
