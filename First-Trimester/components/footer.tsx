'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Mail, Heart, Star, Facebook, Twitter, Instagram, Baby } from 'lucide-react'

export default function Footer() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Clinic Information */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Baby className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">First Trimester Care AZ</h3>
                <p className="text-blue-300">West Phoenix OB/GYN</p>
              </div>
            </motion.div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Your trusted partner for first trimester prenatal care, pregnancy confirmation, and comprehensive women's health services in West Phoenix.
            </p>
            <div className="flex items-center space-x-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </motion.div>
              ))}
              <span className="text-gray-300 ml-2">5.0 • 500+ Reviews</span>
            </div>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-bold text-white mb-6">Contact Info</h3>
            <div className="space-y-4">
              <motion.div 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Address</div>
                  <div className="text-gray-300 text-sm">4700 N 51st Ave, Suite 5<br />Phoenix, AZ 85031</div>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Phone</div>
                  <div className="text-gray-300 text-sm">623-846-7597</div>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Clock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium">Hours</div>
                  <div className="text-gray-300 text-sm">Mon–Fri: 9:00 AM – 5:00 PM<br />Walk-ins Welcome</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'First Trimester Care',
                'Pregnancy Confirmation',
                'Same-Day Ultrasound',
                'AHCCCS Support',
                'WIC Referrals',
                'Medicaid Assistance',
                'Prenatal Consultations',
                'Walk-in Appointments'
              ].map((service, index) => (
                <motion.li 
                  key={index} 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer text-sm"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Google Map */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-bold text-white mb-6">Find Us</h3>
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.8!2d-112.1667!3d33.5333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6c0c0c0c0c0c%3A0x0!2s4700%20N%2051st%20Ave%2C%20Phoenix%2C%20AZ%2085031!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-blue-400 fill-current" />
              <span className="text-gray-300 text-sm">© 2025 FirstTrimesterCareAZ.com - All rights reserved</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              {['Privacy Policy', 'Terms of Service', 'HIPAA Notice'].map((link, index) => (
                <motion.span 
                  key={index}
                  className="hover:text-blue-400 cursor-pointer transition-colors duration-200"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
