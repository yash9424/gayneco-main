'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Clean Gradient Background - Different for Dark Mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-secondary/5 to-accent/5 dark:from-gray-700/20 dark:via-gray-600/20 dark:to-gray-700/20"></div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20 dark:opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%230EA5E9' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Elements - Different colors for dark mode */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-primary/20 to-primary-light/20 dark:from-gray-600/30 dark:to-gray-500/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-secondary/20 to-secondary-light/20 dark:from-gray-700/30 dark:to-gray-600/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-10 h-10 bg-gradient-to-r from-accent/20 to-accent-light/20 dark:from-gray-500/30 dark:to-gray-400/30 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-r from-primary/15 to-secondary/15 dark:from-gray-600/20 dark:to-gray-700/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className={`flex flex-col lg:flex-row items-center justify-between transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-8 text-center lg:text-left lg:ml-12 xl:ml-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-blue-900 dark:text-blue-200 drop-shadow-sm">
                Support for Teen
              </span>
              <br />
              <span className="text-blue-900 dark:text-blue-200 drop-shadow-sm">
                Pregnancy in Arizona
              </span>
            </h1>
            
            <p className="text-xl text-neutral-700 dark:text-gray-200 mb-8 leading-relaxed font-medium">
              We offer safe, friendly, and judgment-free help for teens facing unexpected pregnancy — 
              whether you need support, answers, or someone to talk to.
            </p>
            
            {/* Simple Achievement Text */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Over 20 years of service</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700 dark:text-gray-300">30k+ free tests provided</span>
              </div>
            </div>
            
            {/* Support Team Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-blue-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">Julie Denton</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Nurse Practitioner</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-blue-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                    KT
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">Kylee Tate</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Physician Assistant</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Insurance Information */}
            <div className="text-center lg:text-left mb-8">
              <p className="text-blue-700 dark:text-blue-300 font-medium bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                We are accepting all types of AHCCCS health insurance plans.
              </p>
            </div>
            

          </div>
          
          {/* Right Side - Animated Image */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
              {/* Square Border Animation */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-2 border-dashed border-blue-500 dark:border-blue-400 opacity-80">
                <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 dark:bg-blue-300 -top-1.5 sm:-top-2 -left-1.5 sm:-left-2 animate-float"></div>
                <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 dark:bg-yellow-300 -top-1 sm:-top-1.5 -right-1 sm:-right-1.5 animate-float animation-delay-1000"></div>
                <div className="absolute w-3 h-3 sm:w-3.5 sm:h-3.5 bg-pink-500 dark:bg-pink-300 -bottom-1.5 -right-1.5 animate-float animation-delay-2000"></div>
                <div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 dark:bg-green-300 -bottom-1 sm:-bottom-1.5 -left-1 sm:-left-1.5 animate-float animation-delay-3000"></div>
              </div>
              
              {/* Main Image Container - Responsive Square */}
              <div className="relative bg-white dark:bg-gray-800 shadow-2xl overflow-hidden border-2 sm:border-4 border-white dark:border-gray-700 transform transition-all duration-700 hover:scale-105 group w-[95%] mx-auto aspect-square">
                <div className="absolute inset-0 border-2 sm:border-4 border-blue-300 dark:border-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative w-full h-full overflow-hidden">
                  <Image 
                    src="https://i0.wp.com/www.shriramsinghhospital.com/blog/wp-content/uploads/2022/09/Gynecologist-in-Noida.jpg?w=1000&ssl=1" 
                    alt="Pregnant woman consulting with doctor" 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 512px"
                  />
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-pink-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
