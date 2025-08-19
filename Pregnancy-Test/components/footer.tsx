'use client'

import { Phone, MapPin, Clock, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-emerald-800 to-orange-800 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/50 to-orange-900/50 animate-gradient-shift"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-orange-400 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-200 to-orange-200 bg-clip-text text-transparent">
                  Free Pregnancy Test Arizona
                </h3>
                <p className="text-emerald-200 text-sm">Established 2010</p>
              </div>
            </div>
            <p className="text-gray-200 mb-6 leading-relaxed max-w-md">
              Providing compassionate, confidential pregnancy testing and ultrasound services to women in Phoenix, Buckeye, and Tonopah. No insurance required.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-xl">📧</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-xl">📱</span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-emerald-200">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">(623) 555-0123</p>
                  <p className="text-gray-300 text-sm">Call or Text</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">123 Main Street</p>
                  <p className="text-gray-300 text-sm">Phoenix, AZ 85001</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-emerald-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Mon-Fri: 9AM-5PM</p>
                  <p className="text-gray-300 text-sm">Walk-ins Welcome</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-200">Our Services</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-gray-200">Free Pregnancy Testing</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-gray-200">Same-Day Ultrasound</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-gray-200">WIC Program Referrals</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-gray-200">No Insurance Required</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-gray-200">Confidential Care</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4 text-center text-white">Visit Our Location</h3>
          <div className="aspect-video rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8944!2d-112.074037!3d33.448457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c69c7f8354a1559!2sPhoenix%2C%20AZ!5e0!3m2!1sen!2sus!4v1635959385!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-center md:text-left">
              © 2025 Free Pregnancy Test Arizona. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}