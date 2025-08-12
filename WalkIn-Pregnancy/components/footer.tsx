'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Mail, Heart, Star } from 'lucide-react'
import { Logo } from './logo'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white relative overflow-hidden transition-colors duration-500">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-900/20 dark:from-pink-900/10 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-800/10 dark:from-pink-800/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-16 relative">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Location Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-1 space-y-6"
          >
            <h3 className="text-xl font-bold mb-6">Find Us</h3>
            <div className="bg-white/10 dark:bg-white/5 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.8!2d-112.1677!3d33.5206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0f0f0f0f0f0f%3A0x1234567890abcdef!2s4700%20N%2051st%20Ave%2C%20Phoenix%2C%20AZ%2085031%2C%20USA!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
           
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-pink-600/20 dark:bg-pink-600/10 rounded-xl flex items-center justify-center group-hover:bg-pink-600/30 dark:group-hover:bg-pink-600/20 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-pink-400" />
                </div>
                <a href="tel:623-846-7597" className="text-gray-300 dark:text-gray-400 hover:text-pink-400 transition-colors duration-300">623-846-7597</a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-pink-600/20 dark:bg-pink-600/10 rounded-xl flex items-center justify-center group-hover:bg-pink-600/30 dark:group-hover:bg-pink-600/20 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-pink-400" />
                </div>
                <span className="text-gray-300 dark:text-gray-400">info@walkinpregnancyclinicaz.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-pink-600/20 dark:bg-pink-600/10 rounded-xl flex items-center justify-center group-hover:bg-pink-600/30 dark:group-hover:bg-pink-600/20 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-pink-400" />
                </div>
                <span className="text-gray-300 dark:text-gray-400">4700 North 51st Avenue, Phoenix, Arizona 85031</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Free Pregnancy Testing',
                'Same-Day Ultrasounds',
                'Female Consultations',
                'WIC Referral Assistance',
                'Pregnancy Support',
                'Women\'s Health Care'
              ].map((service, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-1 space-y-6"
          >
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-300 dark:text-gray-400 leading-relaxed">
              Providing compassionate, professional women health care when you need it most. No appointment necessary.
            </p>
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              <span className="text-gray-300 dark:text-gray-400 ml-2">5.0 Rating</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 dark:border-gray-800 mt-16 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-pink-400" />
              <span className="text-gray-300 dark:text-gray-400">© 2025 WalkInPregnancyClinicAZ.com - All rights reserved</span>
            </div>
            <div className="text-sm text-gray-400 dark:text-gray-500">
              Professional, Compassionate Care When You Need It Most
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
