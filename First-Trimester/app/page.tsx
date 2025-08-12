'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Phone, MessageSquare, Check, Star, Clock, Shield, Award, Users, ArrowRight, Calendar, MapPin, Sparkles, Heart, Baby, Zap, ChevronDown, Stethoscope } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { useRef } from 'react'

export default function HomePage() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-800 dark:to-indigo-900">
      <Navigation />
      
      {/* Hero Section - Completely New Layout */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y, opacity }}
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: "url('/images/hero-medical-bg.png')",
              filter: "brightness(0.3)"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-indigo-900/70 to-purple-900/80" />
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-xl"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 12}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="relative z-20 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - New Design */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg border border-blue-300/30 rounded-full text-blue-200 text-sm font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Arizona's #1 First Trimester Care Clinic
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Your First Trimester
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Prenatal Care 
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-blue-100 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Expert prenatal care, same-day appointments, and comprehensive support for your pregnancy journey in West Phoenix.
              </motion.p>

              {/* Insurance Notice */}
              <motion.div 
                className="inline-block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-6 py-4">
                  <p className="text-blue-100 text-lg font-semibold">
                    ✓ We are accepting all types of AHCCCS health insurance plans
                  </p>
                </div>
              </motion.div>

              {/* Service Statistics */}
              <motion.div 
                className="grid grid-cols-2 gap-3 max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-6 py-4">
                  <p className="text-blue-100 text-lg font-semibold">
                    20+ Years of Service
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-6 py-4">
                  <p className="text-blue-100 text-lg font-semibold">
                    30k+ Successful Tests
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button 
                  size="lg" 
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <motion.a 
                    href="tel:6238467597"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </motion.a>
                </Button>
                <Button 
                  size="lg" 
                  onClick={() => window.dispatchEvent(new CustomEvent('toggleChat'))}
                  className="bg-white/20 border-2 border-white text-white hover:bg-white/30 hover:text-white px-8 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
  
                    Text Me
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Clock, title: "Same Day", subtitle: "Ultrasound & Office Visit", color: "from-blue-500 to-cyan-500" },
                  { icon: Shield, title: "Expert", subtitle: "First Trimester Prenatal Care", color: "from-purple-500 to-pink-500" },
                  { icon: Heart, title: "AHCCCS", subtitle: "Insurance & WIC Assistance", color: "from-indigo-500 to-blue-500" },
                  { icon: Award, title: "Walk-in", subtitle: "Welcome & Affordable", color: "from-cyan-500 to-teal-500" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <p className="text-blue-200 text-sm">{item.subtitle}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Team Section */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">NP</span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white font-semibold text-base truncate">Julie Denton</h4>
                    <p className="text-blue-200 text-sm truncate">Nurse Practitioner</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">PA</span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white font-semibold text-base truncate">Kylee Tate</h4>
                    <p className="text-blue-200 text-sm truncate">Physician Assistant</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-blue-300" />
        </motion.div>
      </section>

      {/* Services Section - New Layout */}
      <section ref={servicesRef} className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Comprehensive First Trimester Care
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need for a healthy start to your pregnancy journey
            </p>
          </motion.div>

          {/* Services Grid - New Design */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Baby,
                title: 'Pregnancy Confirmation',
                description: 'Free urine pregnancy test and comprehensive first visit consultation with our experienced OB/GYN team.',
                features: ['Free urine pregnancy test', 'Same-day results', 'Expert consultation'],
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Stethoscope,
                title: 'Same-Day Ultrasound',
                description: 'Same-day ultrasound $100 + office visit for $75 = $175 total package.',
                features: ['Latest technology', '$175 total package', 'Immediate results'],
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Heart,
                title: 'AHCCCS & WIC Support',
                description: 'Complete assistance with insurance paperwork and WIC referrals for expecting mothers.',
                features: ['AHCCCS assistance', 'WIC referrals', 'Medicaid support'],
                color: 'from-indigo-500 to-purple-500'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - New Layout */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                Why Choose Our Clinic?
              </h2>
              <div className="space-y-6">
                {[
                  'No appointment needed - Walk-ins welcome',
                  'Same-day ultrasound and consultation',
                  'Affordable cash pay options available',
                  'Complete AHCCCS and WIC assistance',
                  'Experienced women care specialists',
                  'Comprehensive first trimester care'
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <img
                  src="/images/doctor-patient-consultation.png"
                  alt="Doctor consultation"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Expert Care Team</h3>
                  <p className="text-blue-100">Dedicated to your health and comfort</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - New Design */}
      <section className="py-24 bg-gray-900 dark:bg-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Contact us today for expert first trimester care. Walk-ins welcome, or call ahead to schedule your appointment.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Phone, title: "Call Us", subtitle: "623-846-7597", action: "tel:6238467597" },
                { icon: MessageSquare, title: "Text Us", subtitle: "Quick Response", action: "sms:6238467597" },
                { icon: MapPin, title: "Visit Us", subtitle: "West Phoenix, AZ", action: "https://maps.google.com/?q=4700+N+51st+Ave,+Suite+5,+Phoenix,+AZ+85031" }
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.action}
                  className="block bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <contact.icon className="w-8 h-8 text-white mx-auto mb-3" />
                  <h3 className="text-white font-bold text-lg mb-1">{contact.title}</h3>
                  <p className="text-blue-100 text-sm">{contact.subtitle}</p>
                </motion.a>
              ))}
            </div>


          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
