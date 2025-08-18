import { Card, CardContent } from "@/components/ui/card"
import { Heart, Stethoscope, FileText } from 'lucide-react'
import UniversalChat from '@/components/universal-chat'
import { AnimatedBackground } from "@/components/animated-background"
import Image from "next/image"

export default function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen relative z-10">
        {/* Hero Section with Background Image Only */}
        <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
          {/* Single Background Image Layer */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(/clinic-hero-image.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'blur(2px)',
              opacity: 0.6
            }}
          />
          
          <div className="relative z-20 max-w-4xl mx-auto text-center">
            {/* Main heading first */}
            <div className="animate-fade-in mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight drop-shadow-lg">
                No Insurance?{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">
                  We're Here for You.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-800 mb-8 font-medium animate-fade-in-delay drop-shadow-lg">
                $100 For Same-Day Pregnancy Ultrasound + $75 For Office Visit • Free Pregnancy Test • WIC Help
              </p>
              
              <div className="flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse" />
              </div>
            </div>
            
            {/* Profile Cards after main heading */}
            <div className="mb-8 flex justify-center gap-6 flex-wrap">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 min-w-[280px] shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  NP
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Julie Denton</h4>
                  <p className="text-gray-600 text-sm font-medium">Nurse Practitioner</p>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 min-w-[280px] shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  PA
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Kylee Tate</h4>
                  <p className="text-gray-600 text-sm font-medium">Physician Assistant</p>
                </div>
              </div>
            </div>
            
            {/* Achievement badges at the bottom */}
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-3 shadow-lg border border-white/20">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">Over 20 years of service</span>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-3 shadow-lg border border-white/20">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">30k+ free tests provided</span>
              </div>
            </div>

          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 px-4 bg-white/80 backdrop-blur-sm relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
              Our Services
            </h2>
            <div className="flex justify-center mb-16">
              <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group text-center p-8 border-0 shadow-lg hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-pink-300 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="pt-6 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-500/25">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-pink-600 transition-colors duration-300">Free Pregnancy Test</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Quick, confidential in-office results with compassionate support</p>
                </CardContent>
              </Card>

              <Card className="group text-center p-8 border-0 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-blue-300 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="pt-6 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                    <Stethoscope className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">$100 For Ultrasound & $75 For Office Visit</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Same-day comprehensive care - no insurance required</p>
                </CardContent>
              </Card>

              <Card className="group text-center p-8 border-0 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-purple-300 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="pt-6 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">Free WIC Referral</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Complete guidance and paperwork assistance for WIC benefits</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Free Pregnancy Test CTA Section */}
        <section className="py-20 px-4 bg-white/80 backdrop-blur-sm relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Start with a Free Pregnancy Test
            </h3>
            
            <div className="text-left max-w-3xl mx-auto space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Not sure if you're pregnant? We're here to help you find out—at no cost to you. Our clinic offers free, lab-quality pregnancy tests in a private, supportive environment. You don't need an appointment, and there's no insurance required.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're feeling uncertain, overwhelmed, or just want to confirm your results, our compassionate medical team is here to listen and support you—without judgment. If your test is positive, we'll walk you through your next steps and talk about all your options, including scheduling a same-day ultrasound and office visit if you're ready.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                You're not alone. From the moment you walk through our doors, we're here to guide you through your pregnancy journey—one step at a time.
              </p>
            </div>
            
            {/* Decorative divider */}
            <div className="flex justify-center mt-8">
              <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
            </div>
          </div>
        </section>
      </div>
      <UniversalChat siteName="Low-cost-pregnancy" />
    </>
  )
}
