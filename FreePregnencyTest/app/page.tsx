"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageCircle, MapPin, Clock, Star } from 'lucide-react'
import UniversalChat from '@/components/universal-chat'
import Image from "next/image"


export default function Component() {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section with Background Image - No Scroll */}
      <section className="relative w-full" style={{ height: '100dvh' }}>
        {/* Background Image */}
        <Image
          src="/medical-blue-background.png"
          alt="Medical office background"
          fill
          className="object-cover"
          priority
        />
        
        {/* Dark Translucent Blur Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="min-h-full flex flex-col">
            {/* Top Section - Logo and Phone */}
            <div className="flex justify-between items-center w-full p-4">
              {/* Logo - Top Left */}
              <div>
                <div className="inline-block bg-white/10 backdrop-blur-md rounded-lg p-3 shadow-lg border border-white/20">
                  <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    <span className="font-black">Pregnancy</span>
                    <span className="text-blue-300 font-black">Test</span>
                  </h1>
                </div>
              </div>
              
              {/* Phone - Icon Only on Mobile */}
              <a 
                href="tel:623-846-7597" 
                className="bg-white/10 hover:bg-white/20 rounded-full p-2 sm:p-3 transition-colors flex items-center justify-center"
                aria-label="Call 623-846-7597"
              >
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                <span className="sr-only">Call 623-846-7597</span>
                <span className="hidden md:inline-block ml-2 text-white font-medium">623-846-7597</span>
              </a>
            </div>
            
            {/* Main Content - Centered and Scrollable if needed */}
            <div className="flex-1 flex items-center justify-center p-4 box-border">
              <div className="text-center text-white w-full max-w-3xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
                  Free Pregnancy Test
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-blue-100 font-medium">
                  <span className="block sm:inline">Same-day ultrasound + Office visit</span>
                  <span className="hidden sm:inline"> | </span>
                  <span className="block sm:inline">Free WIC Referral</span>
                </p>
                
                {/* Additional Content */}
                <div className="mb-8 animate-fade-in-up animation-delay-400">
                  <p className="text-lg mb-4 text-blue-50">
                    Compassionate care in a comfortable, private setting
                  </p>
                  <p className="text-lg mb-4 text-yellow-50">
                    Free Prgnency Urinalysis Test
                  </p>
                  
                  {/* Experience and Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-white">20+</p>
                      <p className="text-blue-100 text-sm">Years Experience</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-white">30K+</p>
                      <p className="text-blue-100 text-sm">Free Tests Provided</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-white">$175</p>
                      <p className="text-blue-100 text-sm">Ultrasound + Office Visit</p>
                      <p className="text-blue-200 text-xs">($100 ultrasound + $75 office visit)</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100 mb-8">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      No appointment needed
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      Confidential & supportive
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      Insurance accepted
                    </div>
                  </div>
                  
                  {/* Staff and Insurance Cards */}
                  <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mt-8">
                    {/* First Doctor Card */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 w-full sm:w-auto">
                      <div className="flex items-center gap-4">
                        <div className="bg-white/20 rounded-full p-3">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">Julie Denton</h3>
                          <p className="text-blue-200">Nurse Practitioner</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Second Doctor Card */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 w-full sm:w-auto">
                      <div className="flex items-center gap-4">
                        <div className="bg-white/20 rounded-full p-3">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">Kylee Tate</h3>
                          <p className="text-blue-100">Physician Assistant</p>
                        </div>
                      </div>
                    </div>

                    {/* Insurance Card */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20 hover:bg-white/20 transition-all duration-300 w-full sm:w-auto">
                      <div className="flex items-center gap-4">
                        <div className="bg-white/20 rounded-full p-3">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                          </svg>
                        </div>
                        <div>
                          <p className="text-blue-100">We accept all types of ACCHS health insurance plans</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Map on Left and Info on Right */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-blue-800">
            Visit Our Clinic
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left Side - Map */}
              <div className="w-full lg:w-1/2 h-96 lg:h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.8!2d-112.1707!3d33.5186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6e0d4b1c5555%3A0x1234567890abcdef!2s4700%20N%2051st%20Ave%2C%20Phoenix%2C%20AZ%2085031!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location Map"
                ></iframe>
              </div>
              
              {/* Right Side - Contact Info Card */}
              <div className="w-full lg:w-1/2 p-6 sm:p-8 bg-white">
                <div className="h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-6 text-blue-800 border-b pb-4">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6 flex-grow">
                    {/* Address */}
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                        <MapPin className="w-5 h-5 text-blue-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-800">Our Location</h4>
                        <p className="text-gray-600">
                          4700 North 51st Avenue<br />
                          Phoenix, Arizona 85031
                        </p>
                        <p className="text-blue-600 text-sm mt-1">Easy to find with free parking</p>
                      </div>
                    </div>
                    
                    {/* Phone */}
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                        <Phone className="w-5 h-5 text-blue-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-800">Phone</h4>
                        <a href="tel:623-846-7597" className="text-blue-600 hover:text-blue-800 transition-colors">
                          (623) 846-7597
                        </a>
                      </div>
                    </div>
                    
                    {/* Hours */}
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                        <Clock className="w-5 h-5 text-blue-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-800 mb-2">Working Hours</h4>
                        <div className="space-y-1 text-gray-600">
                          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                          <p>Saturday: 9:00 AM - 2:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Directions Button */}
                    <div className="pt-2 mt-auto">
                      <a 
                        href="https://www.google.com/maps/dir//4700+N+51st+Ave,+Phoenix,+AZ+85031" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full sm:w-auto"
                      >
                        <MapPin className="mr-2 h-5 w-5" />
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            © 2025 FreePregnancyTestAZ.com
          </p>
        </div>
      </footer>
      

      
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes ring {
          0%, 20%, 50%, 80%, 100% {
            transform: rotate(0deg);
          }
          10% {
            transform: rotate(-10deg);
          }
          30% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(-5deg);
          }
          70% {
            transform: rotate(5deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-ring {
          animation: ring 2s ease-in-out infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }
      `}</style>
          <UniversalChat siteName="FreePregnencyTest" />
    </div>
  )
}