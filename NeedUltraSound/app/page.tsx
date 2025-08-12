'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Clock, MapPin, Heart, Baby, Users, User } from 'lucide-react'
import HeroBackground from '@/components/hero-background'

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

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 h-auto min-h-screen flex items-center justify-center overflow-hidden">
        <HeroBackground />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-0 md:mt-5">
           <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Need an Ultrasound{' '}
              <span className="text-medical-300">Today?</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-medical-100 mb-8 leading-relaxed max-w-3xl mx-auto"
            >
              Same-day care for early pregnancy concerns. Office Visit + Ultrasound for just{' '}
              <span className="font-semibold text-white">$175 </span> — no insurance required.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {/* Buttons removed - hero section now focuses on information only */}
            </motion.div>

            {/* Doctor Cards */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-6 mt-12"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg w-full max-w-xs">
                <div className="flex items-start gap-4">
                  <User className="w-6 h-6 text-medical-300 mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white">Julie Denton</h3>
                    <p className="text-medical-100 text-sm">Nurse Practitioner</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg w-full max-w-xs">
                <div className="flex items-start gap-4">
                  <User className="w-6 h-6 text-medical-300 mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white">Kylee Tate</h3>
                    <p className="text-medical-100 text-sm">Physician Assistant</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Statistics */}
            <motion.div 
              variants={fadeInUp}
              className="flex justify-center mt-8"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg">
                <ul className="text-white space-y-3 list-disc pl-5 text-start">
                  <li>20+ Years Experience</li>
                  <li>30K+ Free Tests Provided</li>
                  <li>We are accepting all types of acchs health Insurance plans</li>
                  <li>Office Visit $75 + Ultrasound $100 - Total $175 (no insurance required)</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-medical-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive care when you need it most
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Baby,
                title: "OB Ultrasound",
                description: "Same day available with experienced professionals",
                color: "from-medical-500 to-teal-600"
              },
              {
                icon: Heart,
                title: "Free Pregnancy Test",
                description: "Accurate urine-based testing with immediate results",
                color: "from-teal-500 to-medical-600"
              },
              {
                icon: Users,
                title: "WIC Referral Support",
                description: "Connect with resources and support programs",
                color: "from-medical-400 to-teal-500"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-8 text-center relative">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      {/* <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              We're Here to Help
            </h2>
            <p className="text-xl leading-relaxed text-medical-100 mb-8">
              If you've just left the ER or urgent care and need a follow-up ultrasound, we're here to help. 
              Fast, compassionate care in a private clinic — no insurance needed. Our experienced team 
              understands the urgency and emotional stress of early pregnancy concerns.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              
            </motion.div>
          </motion.div>
        </div>
      </section> */}
    </div>
  )
}
