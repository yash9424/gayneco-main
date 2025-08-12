'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Mail, Heart, Star, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Clinic Information */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2"
          >
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 dark:from-teal-400 dark:to-cyan-500 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Heart className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-white">Arizona Women's Specialists</h3>
                <p className="text-teal-300 dark:text-teal-400">West Valley Location</p>
              </div>
            </motion.div>
            <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for AHCCCS pregnancy confirmation, WIC referrals, and comprehensive women's health services in Arizona.
            </p>
            <motion.div 
              className="flex items-center space-x-1 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </motion.div>
              ))}
              <span className="text-gray-300 dark:text-gray-400 ml-2">5.0 • 500+ Reviews</span>
            </motion.div>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-teal-600 dark:hover:bg-teal-500 transition-colors duration-300 cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
          >
            <h3 className="text-lg font-bold text-white mb-6">Contact Info</h3>
            <div className="space-y-4">
              <motion.div 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <MapPin className="w-5 h-5 text-teal-400 dark:text-teal-300 mt-1" />
                <div>
                  <div className="text-white font-medium">Address</div>
                  <div className="text-gray-300 dark:text-gray-400">4700 N 51st Ave, Suite 5<br />Phoenix, AZ 85031</div>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Phone className="w-5 h-5 text-teal-400 dark:text-teal-300 mt-1" />
                <div>
                  <div className="text-white font-medium">Phone</div>
                  <div className="text-gray-300 dark:text-gray-400">623-846-7597</div>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Clock className="w-5 h-5 text-teal-400 dark:text-teal-300 mt-1" />
                <div>
                  <div className="text-white font-medium">Hours</div>
                  <div className="text-gray-300 dark:text-gray-400">Walk-ins Welcome<br />Mon-Fri: 8AM-5PM</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={itemVariants}
          >
            <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Free Pregnancy Testing',
                'AHCCCS Confirmation',
                'Same-Day Ultrasound',
                'WIC Referral Support',
                'Medicaid Assistance',
                'Prenatal Care',
                'Women\'s Health'
              ].map((service, index) => (
                <motion.li 
                  key={index} 
                  className="text-gray-300 dark:text-gray-400 hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Google Map */}
          <motion.div
            variants={itemVariants}
          >
            <h3 className="text-lg font-bold text-white mb-6">Find Us</h3>
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.8!2d-112.1667!3d33.5333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6e0c7b8b8b8b%3A0x1234567890abcdef!2s4700%20N%2051st%20Ave%2C%20Phoenix%2C%20AZ%2085031!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
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
          className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-5 h-5 text-teal-400 dark:text-teal-300" />
              </motion.div>
              <span className="text-gray-300 dark:text-gray-400">© 2025 AHCCCSPregnancyHelpAZ.com - All rights reserved</span>
            </motion.div>
            <div className="flex space-x-6 text-sm text-gray-400 dark:text-gray-500">
              {['Privacy Policy', 'Terms of Service', 'HIPAA Notice'].map((link, index) => (
                <motion.span 
                  key={index}
                  className="hover:text-teal-400 dark:hover:text-teal-300 cursor-pointer transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
