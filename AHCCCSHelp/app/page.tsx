'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, Check, Star, Clock, Shield, Award, Users, ArrowRight, Calendar, MapPin, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

import { useRef } from 'react'

export default function HomePage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section ref={ref} className="relative min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-teal-200/20 dark:bg-teal-400/10 rounded-full blur-xl"
            animate={floatingAnimation}
          />
          <motion.div
            className="absolute top-40 right-32 w-24 h-24 bg-cyan-200/20 dark:bg-cyan-400/10 rounded-full blur-xl"
            animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
          />
          <motion.div
            className="absolute bottom-32 left-32 w-40 h-40 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-xl"
            animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
          />
        </div>

        {/* Background Image */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y, opacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/60 dark:from-gray-900/90 dark:via-gray-900/75 dark:to-gray-900/60 z-10"></div>
          <img
            src="/images/clinic-background.png"
            alt="Modern medical clinic interior"
            className="w-full h-full object-cover opacity-80 dark:opacity-40"
          />
        </motion.div>

        <div className="relative z-20 container mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <motion.div 
            className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[70vh] sm:min-h-[80vh]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Content */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 space-y-8"
            >
              <motion.div 
                className="inline-flex items-center px-4 py-2 bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 rounded-full text-sm font-semibold backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(20, 184, 166, 0.4)",
                    "0 0 0 10px rgba(20, 184, 166, 0)",
                    "0 0 0 0 rgba(20, 184, 166, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="w-4 h-4 mr-2" />
                Arizona&apos;s #1 AHCCCS Pregnancy Confirmation Clinic
              </motion.div>
              
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                variants={itemVariants}
              >
                Get Your{' '}
                <motion.span 
                  className="text-teal-600 dark:text-teal-400 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Pregnancy Confirmation
                  <motion.div
                    className="absolute -top-2 -right-2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                </motion.span>{' '}
                for AHCCCS Today
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium"
                variants={itemVariants}
              >
                Walk-in clinic specializing in AHCCCS pregnancy confirmation, 
                same-day ultrasounds, and WIC referral assistance. No appointment needed.
              </motion.p>

              <motion.div 
                className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
                variants={containerVariants}
              >
                {[
                  'AHCCCS confirmation forms/proof of preg.',
                  'Same-day ultrasound $100 + office visit $75 = $175',
                  'We accept all types of AHCCCS health insurance plans',
                  'Private insurance also accepted',
                  'Help in picking the right hospital',
                  'Prenatal Care referral',
                  'Over 20 years of service',
                  '30k+ free tests provided'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center space-x-2 sm:space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-sm border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <motion.div 
                      className="w-6 h-6 bg-teal-500 dark:bg-teal-400 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Check className="w-4 h-4 text-white" />
                    </motion.div>
                    <span className="text-gray-800 dark:text-gray-200 font-semibold text-xs sm:text-sm">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Staff Information */}
              <motion.div 
                className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8"
                variants={containerVariants}
              >
                {[
                  { name: 'Julie Denton', designation: 'NP', title: 'Nurse Practitioner' },
                  { name: 'Kylee Tate', designation: 'PA', title: 'Physician Assistant' }
                ].map((staff, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <div className="flex items-center space-x-3">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 dark:from-teal-400 dark:to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {staff.designation}
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-base sm:text-lg">{staff.name}</h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{staff.title}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg w-full sm:w-auto" asChild>
                    <a href="tel:623-846-7597">
                      <Phone className="w-5 h-5 mr-2" />
                      Call 623-846-7597
                    </a>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" variant="outline" className="border-2 border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/30 px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm w-full sm:w-auto" asChild>
                    <a href="https://maps.google.com/?q=4700+N+51st+Ave,+Suite+5,+Phoenix,+AZ+85031" target="_blank" rel="noopener noreferrer">
                      <MapPin className="w-5 h-5 mr-2" />
                      Get Directions
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Doctor Image */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 relative mt-8 lg:mt-0"
            >
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Main Doctor Image */}
                <motion.div 
                  className="relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border-2 sm:border-4 border-white dark:border-gray-700"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <img
                    src="/images/female-doctor.png"
                    alt="Professional female doctor"
                    className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover"
                    loading="eager"
                  />
                </motion.div>
                


              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block"
        >
          <div className="flex flex-col items-center space-y-2 text-gray-700 dark:text-gray-300">
            <span className="text-xs sm:text-sm font-medium">Scroll to learn more</span>
            <motion.div 
              className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-500 dark:border-gray-400 rounded-full flex justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="w-1 h-2 sm:h-3 bg-gray-500 dark:bg-gray-400 rounded-full mt-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Why Choose Our Clinic?
            </motion.h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Specialized AHCCCS pregnancy services with expert care and fast results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'AHCCCS Specialists',
                description: 'Expert knowledge of Arizona Medicaid pregnancy confirmation requirements and documentation.',
                color: 'text-teal-600 dark:text-teal-400',
                bgColor: 'bg-teal-50 dark:bg-teal-900/30'
              },
              {
                icon: Clock,
                title: 'Same-Day Service',
                description: 'Walk-in appointments available with same-day pregnancy confirmation and ultrasound services.',
                color: 'text-blue-600 dark:text-blue-400',
                bgColor: 'bg-blue-50 dark:bg-blue-900/30'
              },
              {
                icon: Users,
                title: 'WIC Support',
                description: 'Complete assistance with WIC referral process and benefit enrollment for expecting mothers.',
                color: 'text-orange-600 dark:text-orange-400',
                bgColor: 'bg-orange-50 dark:bg-orange-900/30'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300, damping: 30 }
                }}
              >
                <Card className="h-full hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-8 text-center">
                    <motion.div 
                      className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Getting your AHCCCS pregnancy confirmation is quick and easy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Walk In',
                description: 'No appointment needed. Come to our clinic during business hours.',
                icon: MapPin
              },
              {
                step: '02',
                title: 'Get Tested',
                description: 'Free urine pregnancy test, genetic testing, and consultation with confirmation forms.',
                icon: Check
              },
              {
                step: '03',
                title: 'Receive Support',
                description: 'Get your AHCCCS documentation and WIC referral assistance.',
                icon: Award
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg text-center border border-gray-200 dark:border-gray-700">
                  <motion.div 
                    className="text-6xl font-bold text-teal-100 dark:text-teal-900/50 mb-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.step}
                  </motion.div>
                  <motion.div 
                    className="w-12 h-12 bg-teal-600 dark:bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 -mt-16 relative z-10"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
                
                {index < 2 && (
                  <motion.div 
                    className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-8 h-8 text-teal-300 dark:text-teal-600" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-700 dark:to-cyan-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              className="text-4xl font-bold text-white mb-6"
              whileHover={{ scale: 1.05 }}
            >
              Ready to Get Your Pregnancy Confirmation?
            </motion.h2>
            <p className="text-xl text-teal-100 dark:text-teal-200 mb-8">
              Walk into our clinic today for fast, professional AHCCCS pregnancy confirmation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg" asChild>
                  <a href="tel:623-846-7597">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 623-846-7597
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-600 bg-transparent px-8 py-4 text-lg font-semibold rounded-lg" asChild>
                  <a href="https://maps.google.com/?q=4700+N+51st+Ave,+Suite+5,+Phoenix,+AZ+85031" target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-5 h-5 mr-2" />
                    Visit Today
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}