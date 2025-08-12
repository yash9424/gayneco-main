'use client'

import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
const Chatbox = dynamic(() => import("@/components/Chatbox"), { ssr: false })
import { Card, CardContent } from "@/components/ui/card"
import { Phone, CheckCircle, Calendar, FileText, Stethoscope, Shield, Heart, Award, Clock, Star, Users, ArrowRight, Baby, Activity, MapPin, Sparkles } from 'lucide-react'
import Link from "next/link"
import Header from "@/components/header"
import { AnimatedBackground } from "@/components/animated-background"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      
      {/* Header Spacer */}
      <div className="h-24 sm:h-28 md:h-32"></div>
      
      {/* Hero Section - Modern Split Layout */}
      <section className="relative py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 px-6 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-xl border border-green-200/50 dark:border-green-800/50"
                whileHover={{ scale: 1.05 }}
              >
              <Star className="w-4 h-4 text-Green-500 fill-Green-500 mr-2" /> 
               Arizona's #1 AHCCCS Same-Day Ultrasound Center
              </motion.div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                  Same-Day
                </span>
                <br />
                <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Ultrasound Services
                </span>
                <br />
                <span className="text-4xl lg:text-5xl bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-400 bg-clip-text text-transparent">
                  in Phoenix
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 md:mb-10 leading-relaxed font-light">
                Professional medical care with Our Hospital. 
                Complete examination, ultrasound, and documentation for just <span className="font-bold text-2xl text-teal-600">$175</span>.
                <br className="hidden sm:block" />
                <span className="text-sm sm:text-base">($100 for ultrasound + $75 for office visit)</span>
              </p>
              
              {/* <div className="flex flex-col sm:flex-row gap-6 mb-10">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-10 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300">
                    <Calendar className="w-6 h-6 mr-3" />
                    Schedule Now
                    <Sparkles className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-10 py-6 text-xl font-semibold rounded-2xl backdrop-blur-xl">
                    <Phone className="w-6 h-6 mr-3" />
                    (623) 846-7597
                  </Button>
                </motion.div>
              </div> */}
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-xl px-6 py-4 border border-white/20">
                  <Shield className="w-5 h-5 mr-3 text-teal-600" />
                  <span className="font-medium">Licensed Physician • No Insurance Required • Same-Day Results</span>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-xl px-6 py-4 border border-white/20">
                  <Award className="w-5 h-5 mr-3 text-blue-600" />
                  <span className="font-medium">20+ Years of Experience • Expert Medical Team • Trusted Care</span>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-xl px-6 py-4 border border-white/20">
                  <Star className="w-5 h-5 mr-3 text-yellow-500" />
                  <span className="font-medium">30K+ Free Test Provided </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/30 dark:to-teal-900/30 backdrop-blur-xl rounded-xl p-4 border border-blue-100 dark:border-blue-800/50">
                    <div className="flex items-start">
                      <Stethoscope className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Julie Denton</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Nurse Practitioner</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/30 dark:to-teal-900/30 backdrop-blur-xl rounded-xl p-4 border border-blue-100 dark:border-blue-800/50">
                    <div className="flex items-start">
                      <Stethoscope className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Kylee Tate</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Physician Assistant</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right Content - Modern Price Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <motion.div 
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl max-w-md w-full border border-white/20 dark:border-gray-700/20"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="text-center mb-6 sm:mb-8">
                  <p className="text-teal-600 font-semibold text-lg mb-2">Office Visit </p>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-green-600 dark:text-green-400 text-sm font-medium">Available Today</span>
                  </div>
                </div>
                
                <div className="text-center mb-6 sm:mb-8">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-3">$175</div>
                  <p className="text-gray-600 dark:text-gray-300 font-medium text-lg">Complete Package</p>
                  <span className="text-sm sm:text-base">($100 for ultrasound + $75 for office visit)</span>

                </div>
                
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {[
                    { text: "Complete Ultrasound Examination", icon: Stethoscope },
                    { text: "Professional Ultrasound Imaging", icon: Activity }, 
                    { text: "Official Medical Report", icon: FileText },
                    { text: "WIC/Medicaid Documentation", icon: Baby },
                    { text: "All ACC Health Insurance Accepted", icon: Shield },
                    { text: "AHCCCS & Medicare Accepted", icon: CheckCircle }
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3 sm:p-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                      <item.icon className="w-5 h-5 text-teal-600 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
                

              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Services Grid */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <motion.div 
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 px-4 sm:px-6 py-3 rounded-full text-base sm:text-lg font-semibold mb-6 sm:mb-8 backdrop-blur-xl border border-blue-200/50">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Specialized Care for Every Patient
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Comprehensive Medical
              </span>
              <br />
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional healthcare services designed with your comfort and needs in mind
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Stethoscope, title: "Medical Examination", desc: "Complete Ultrasound examination by licensed physician", gradient: "from-blue-500 to-blue-600", bg: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20" },
              { icon: Activity, title: "Ultrasound Imaging", desc: "Professional Ultrasound with accurate dating", gradient: "from-teal-500 to-teal-600", bg: "from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20" },
              { icon: FileText, title: "Medical Reports", desc: "Official documentation for all purposes", gradient: "from-purple-500 to-purple-600", bg: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20" }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className={`text-center hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${service.bg} border-0 backdrop-blur-xl rounded-3xl overflow-hidden`}>
                  <CardContent className="p-6 sm:p-8">
                    <motion.div 
                      className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Process Timeline */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <motion.div 
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 text-teal-700 dark:text-teal-300 px-4 sm:px-6 py-3 rounded-full text-base sm:text-lg font-semibold mb-6 sm:mb-8 backdrop-blur-xl border border-teal-200/50">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Simple Process
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                How We
              </span>
              <br />
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Serve You
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Three simple steps to get the professional care you need
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Animated Timeline Line */}
            <motion.div 
              className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-teal-200 via-blue-200 to-purple-200 dark:from-teal-800 dark:via-blue-800 dark:to-purple-800 transform -translate-y-1/2 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
            />
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
              {[
                { step: "01", title: "Call & Schedule", desc: "Contact us to book your same-day appointment with our professional medical team", icon: Phone, gradient: "from-teal-500 to-blue-500" },
                { step: "02", title: "Visit & Examine", desc: "Come to our modern Phoenix facility for your comprehensive examination and ultrasound", icon: MapPin, gradient: "from-blue-500 to-purple-500" },
                { step: "03", title: "Results & Documents", desc: "Receive your professional medical report and all necessary documentation immediately", icon: FileText, gradient: "from-purple-500 to-pink-500" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <motion.div 
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl text-center relative z-10 border border-white/20 dark:border-gray-700/20"
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="relative mb-6 sm:mb-8">
                      <motion.div 
                        className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${item.gradient} rounded-3xl flex items-center justify-center mx-auto shadow-2xl`}
                        whileHover={{ rotate: 10 }}
                      >
                        <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </motion.div>
                      <motion.div 
                        className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-xl border-2 border-gray-100 dark:border-gray-700"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="text-gray-700 dark:text-gray-300 font-bold text-base sm:text-lg">{item.step}</span>
                      </motion.div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>




      {/* Modern Footer */}
 <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">SameDayUltrasound<span className="text-teal-400">Arizona </span></h3>
                </div>
              </div>
              <p className="text-gray-300">
                Professional same-day ultrasound services in Phoenix, Arizona.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-teal-400 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p>4700 N 51st Ave</p>
                    <p>Phoenix, AZ 85031</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                  <a href="tel:623-846-7597" className="hover:text-teal-400 transition-colors">623-846-7597</a>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Location</h4>
              <div className="space-y-4">
                
                <div className="aspect-w-16 aspect-h-9 w-full h-48 rounded-lg overflow-hidden border border-gray-700">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.308996301072!2d-112.17177052480064!3d33.5058241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b14c987eaaaab%3A0xaf123434c4d15982!2s4700%20N%2051st%20Ave%20%235%2C%20Phoenix%2C%20AZ%2085031%2C%20USA!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
                <a 
                  href="https://www.google.com/maps/dir//4700+N+51st+Ave+%235,+Phoenix,+AZ+85031,+USA/@33.5057968,-112.2515968,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x872b14c987eaaaab:0xaf123434c4d15982!2m2!1d-112.1691956!2d33.5058241?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4 mr-1" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 SameDayUltrasoundAZ.com
            </p>
          </div>
        </div>
      </footer>
      <Chatbox />
    </div>
  )
}
