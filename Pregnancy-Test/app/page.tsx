'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TestTube, Stethoscope, ChevronDown, MessageCircle, Heart, CreditCard, Send, Baby } from 'lucide-react'
import Image from "next/image"

import { useLanguage } from './contexts/language-context'
import UniversalChat from '@/components/universal-chat'


export default function HomePage() {
  const { language, translations } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)



  useEffect(() => {
    setIsVisible(true)
  }, [])



  const services = [
    {
      icon: TestTube,
      titleKey: 'services.test.title',
      descriptionKey: 'services.test.description'
    },
    {
      icon: Stethoscope,
      titleKey: 'services.ultrasound.title',
      descriptionKey: 'services.ultrasound.description'
    },
    {
      icon: Heart,
      titleKey: 'services.wic.title',
      descriptionKey: 'services.wic.description'
    },
    {
      icon: CreditCard,
      titleKey: 'services.payment.title',
      descriptionKey: 'services.payment.description'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-animated" suppressHydrationWarning={true}>
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-4 h-4 bg-emerald-300/20 rounded-full animate-float-1"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-orange-300/20 rounded-full animate-float-2"></div>
        <div className="absolute top-40 left-1/4 w-3 h-3 bg-emerald-400/30 rounded-full animate-float-3"></div>
        <div className="absolute top-60 right-1/3 w-5 h-5 bg-orange-400/25 rounded-full animate-float-4"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-emerald-300/20 rounded-full animate-float-5"></div>
        <div className="absolute bottom-60 right-10 w-6 h-6 bg-orange-300/20 rounded-full animate-float-6"></div>
        <div className="absolute bottom-20 left-1/2 w-3 h-3 bg-emerald-400/30 rounded-full animate-float-1"></div>
        <div className="absolute top-1/2 left-10 w-5 h-5 bg-orange-400/25 rounded-full animate-float-2"></div>
        <div className="absolute top-1/3 right-40 w-4 h-4 bg-emerald-300/20 rounded-full animate-float-3"></div>
        <div className="absolute bottom-1/3 left-40 w-6 h-6 bg-orange-300/20 rounded-full animate-float-4"></div>
      </div>



      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200/30 rounded-full animate-bounce-slow blur-sm"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-orange-200/30 rounded-full animate-float blur-sm"></div>
          <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-emerald-300/20 rounded-full animate-pulse-slow blur-sm"></div>
          <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-orange-300/20 rounded-full animate-bounce-slow delay-1000 blur-sm"></div>
          <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-emerald-400/25 rounded-full animate-float delay-500 blur-sm"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="relative group mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-orange-400/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <Image
                  src="/pregnant-woman-holding-belly.png"
                  alt="Caring pregnancy support"
                  width={600}
                  height={500}
                  className="relative rounded-3xl shadow-2xl object-cover w-full h-[500px] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-emerald-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow">
                  <TestTube className="h-12 w-12 text-white" />
                </div>
              </div>
              
              {/* Statistics Cards */}
              <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-900 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-800">{translations.stats.yearsOfService}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-800">{translations.stats.testsProvided}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Text */}
            <div className="lg:pl-8">
              <h1 className={`text-4xl lg:text-6xl font-bold text-gray-800 mb-6 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <span className="bg-gradient-to-r from-emerald-600 to-orange-600 bg-clip-text text-transparent animate-gradient-text">
                  {translations.hero.headline}
                </span>
              </h1>
              <p className={`text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                {translations.hero.subheadline}
              </p>
              
              {/* Hero Points */}
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                {translations.hero.points.map((point, index) => {
                  const gradients = [
                    'from-emerald-500 to-emerald-600',
                    'from-orange-500 to-orange-600',
                    'from-emerald-500 to-orange-500',
                    'from-orange-500 to-emerald-500'
                  ]
                  const hoverColors = ['group-hover:text-emerald-600', 'group-hover:text-orange-600', 'group-hover:text-emerald-600', 'group-hover:text-orange-600']
                  return (
                    <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-emerald-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${800 + index * 100}ms`}}>
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 bg-gradient-to-r ${gradients[index]} rounded-full animate-pulse`}></div>
                        <span className={`font-semibold text-gray-800 ${hoverColors[index]} transition-colors`}>{point}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
              
              {/* Staff Cards */}
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-1000 delay-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-emerald-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">NP</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Julie Denton</h3>
                      <p className="text-gray-600 text-sm">{language === 'es' ? 'Enfermera Especializada' : 'Nurse Practitioner'}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-emerald-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">PA</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Kylee Tate</h3>
                      <p className="text-gray-600 text-sm">{language === 'es' ? 'Asistente Médico' : 'Physician Assistant'}</p>
                    </div>
                  </div>
                </div>
              </div>
              

            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm relative">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-orange-50/50 animate-gradient-shift"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">
              {translations.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-200">
              {translations.services.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-lg bg-gradient-to-br from-white to-emerald-50/30 animate-fade-in-up hover:bg-gradient-to-br hover:from-white hover:to-orange-50/30" style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-all duration-500 animate-pulse-glow">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {translations[service.titleKey.split('.')[0]][service.titleKey.split('.')[1]][service.titleKey.split('.')[2]]}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300" dangerouslySetInnerHTML={{
                    __html: translations[service.descriptionKey.split('.')[0]][service.descriptionKey.split('.')[1]][service.descriptionKey.split('.')[2]]
                  }}></p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* Universal Chat Component */}
      <UniversalChat siteName="Pregnancy-Test" />




    </div>
  )
}


