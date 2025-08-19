'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../app/contexts/language-context'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, translations, setLanguage } = useLanguage()
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100/50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
            {language === 'es' ? 'Prueba Embarazo Gratis Arizona' : 'Free Pregnancy Test Arizona'}
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="tel:6235550123" className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium">
              <Phone className="w-4 h-4" />
              <span>(623) 555-0123</span>
            </a>
            <Link href="/" className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group">
              {translations.nav.home}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group">
              {translations.nav.blog}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <button
              onClick={() => setIsChatOpen(true)}
              className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group flex items-center space-x-1"
              data-chat-button
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <LanguageDropdown language={language} setLanguage={setLanguage} isOpen={isLangOpen} setIsOpen={setIsLangOpen} />
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
              <a href="tel:6235550123" className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium">
                <Phone className="w-4 h-4" />
                <span>(623) 555-0123</span>
              </a>
              <Link href="/" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                {translations.nav.home}
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                {translations.nav.blog}
              </Link>
              <button
                onClick={() => setIsChatOpen(true)}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium flex items-center space-x-2 text-left"
                data-chat-button
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat</span>
              </button>
              <LanguageDropdown language={language} setLanguage={setLanguage} isOpen={isLangOpen} setIsOpen={setIsLangOpen} />
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

function LanguageDropdown({ language, setLanguage, isOpen, setIsOpen }) {
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