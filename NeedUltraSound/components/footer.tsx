'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, MapPin, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            className="md:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">NeedUltrasoundToday</h3>
            <p className="text-medical-100 leading-relaxed mb-4">
              Providing compassionate, same-day pregnancy care when you need it most. 
              No insurance required.
            </p>
            <div className="space-y-2">
              <p className="text-medical-100"><span className="font-medium">License:</span> #L12345678</p>
              <p className="text-medical-100"><span className="font-medium">Established:</span> 2010</p>
              <p className="text-medical-100">
                <span className="font-medium">Hours:</span> Mon-Fri 9AM-5PM, Sat 9AM-2PM
              </p>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-medical-400 flex-shrink-0" />
                  <a href="tel:623-846-7597" className="text-medical-100 hover:text-white transition-colors">
                    623-846-7597
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-medical-400 mt-0.5 flex-shrink-0" />
                  <a href="mailto:info@needultrasoundtoday.com" className="text-medical-100 hover:text-white transition-colors">
                    info@needultrasoundtoday.com
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-medical-400 mt-0.5 flex-shrink-0" />
                  <div className="text-medical-100">
                    <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
                    <p>Sat: 9:00 AM - 2:00 PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 lg:col-span-2 h-64 rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.2369999999996!2d-112.1713705243182!3d33.50582410773776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b14c987eaaaab%3A0xaf123434c4d15982!2s4700%20N%2051st%20Ave%20%235%2C%20Phoenix%2C%20AZ%2085031%2C%20USA!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
              className="rounded-lg"
            ></iframe>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-slate-700 mt-12 pt-8 text-center text-medical-100"
        >
          <p>&copy; {new Date().getFullYear()} NeedUltrasoundToday. All rights reserved.</p>
          <div className="mt-2">
            <a 
              href="https://www.google.com/maps/dir//4700+N+51st+Ave+%235,+Phoenix,+AZ+85031,+USA/@33.5057968,-112.2515968,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x872b14c987eaaaab:0xaf123434c4d15982!2m2!1d-112.1691956!2d33.5058241?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-medical-200 hover:text-white transition-colors text-sm"
            >
              <MapPin className="w-4 h-4 mr-1" />
              Get Directions to Our Clinic
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
