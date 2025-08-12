'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, Check, Heart, Clock, Shield, Star, Users, Award, TestTube } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ChatUI from '@/components/chat-ui'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-500">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-100/20 dark:from-pink-900/10 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-200/30 dark:from-pink-800/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-rose-200/30 dark:from-rose-800/20 to-transparent rounded-full blur-3xl"></div>
      
      <Header />
      
      {/* Hero Section */}
      <main className="min-h-screen flex items-center pt-32 pb-16 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-pink-200/50 dark:border-pink-700/50 rounded-full text-sm font-medium text-pink-700 dark:text-pink-400 shadow-lg"
                >
                  <Star className="w-4 h-4 mr-2 text-pink-500 dark:text-pink-400" />
                  Trusted by 1000+ Women in Arizona
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight"
                >
                  Walk-In Office visit Clinic –{' '}
                  <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 dark:from-pink-400 dark:via-rose-400 dark:to-pink-500 bg-clip-text text-transparent">
                    No Appointment Needed
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light"
                >
                  Get seen today for pregnancy symptoms, urgent concerns, or a free urine pregnancy test
                </motion.p>
              </div>

              {/* Benefits List */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-5"
              >
                {[
                  { text: 'Same-day $100 ultrasound test + $75 office visit = $175 total', icon: Clock },
                  { text: 'Free WIC Referral Help', icon: Heart },
                  { text: 'We are accepting all types of AHCCCS health insurance plans', icon: Shield },
                  { text: 'Free urine pregnancy tests', icon: TestTube }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 dark:from-green-500 dark:to-green-700 rounded-xl flex items-center justify-center shadow-lg">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-3">
                      <benefit.icon className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                      <span className="text-lg text-gray-800 dark:text-gray-200 font-medium">{benefit.text}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-row gap-4"
              >
                <a href="tel:623-846-7597">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-10 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    Call Now
                  </Button>
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.dispatchEvent(new CustomEvent('openChat'))}
                  className="border-2 border-pink-200 dark:border-pink-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-pink-700 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-gray-700 hover:border-pink-300 dark:hover:border-pink-600 px-10 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Text Us
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Image Card */}
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20 dark:border-gray-700/20 transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/images/side  doctor.jpg"
                    alt="Friendly female doctor with patients"
                    width={600}
                    height={700}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/10 dark:from-pink-900/20 to-transparent"></div>
                </div>
                
                {/* Floating Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="absolute -top-6 -left-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/20 dark:border-gray-700/20"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 dark:from-pink-600 dark:to-rose-600 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">20+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Years of Services</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute -bottom-6 -right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/20 dark:border-gray-700/20"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 dark:from-green-600 dark:to-emerald-600 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">30K+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Successful Test</div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 top-10 right-10 w-32 h-32 bg-gradient-to-br from-pink-300/30 dark:from-pink-600/20 to-rose-300/30 dark:to-rose-600/20 rounded-full blur-2xl"></div>
                <div className="absolute -z-10 bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-purple-300/30 dark:from-purple-600/20 to-pink-300/30 dark:to-pink-600/20 rounded-full blur-2xl"></div>
              </div>
              
              {/* Staff Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="mt-8 w-full flex gap-2"
              >
                <div className="flex-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/20 dark:border-gray-700/20 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 dark:from-pink-600 dark:to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    NP
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">Julie Denton</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Nurse Practitioner</div>
                  </div>
                </div>
                <div className="flex-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/20 dark:border-gray-700/20 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 dark:from-pink-600 dark:to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    PA
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">Kylee Tate</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Physician Assistant</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-pink-200/50 dark:border-pink-700/50 rounded-full text-sm font-medium text-pink-700 dark:text-pink-400 shadow-lg mb-6">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              Providing compassionate, professional{' '}
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400 bg-clip-text text-transparent">
                womans health care when you need it most. No appointment necessary.
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
              Experience compassionate, expert medical care in a modern, welcoming environment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'No Wait Times',
                description: 'Walk in anytime during our business hours - no appointment necessary',
                gradient: 'from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600'
              },
              {
                icon: Shield,
                title: 'Professional Care',
                description: 'Licensed physicians providing expert medical care',
                gradient: 'from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600'
              },
              {
                icon: Heart,
                title: 'Compassionate Support',
                description: 'Understanding and supportive environment for all your needs',
                gradient: 'from-pink-500 to-rose-500 dark:from-pink-600 dark:to-rose-600'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-gray-700/20 h-full transform group-hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed font-light">{feature.description}</p>
                </div>
                
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 dark:from-pink-900/20 to-rose-100/50 dark:to-rose-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ChatUI />
    </div>
  )
}
