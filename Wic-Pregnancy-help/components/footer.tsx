'use client'

import { MapPin, Phone, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-5xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4">
            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
              <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white">WIC Pregnancy Help Arizona</h4>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs sm:text-sm">4700 N 51st Ave, Phoenix, AZ 85031, USA</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                  </div>
                  <a href="tel:623-846-7597" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">
                    623-846-7597
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                    <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm">Monday – Friday: 08:00 AM – 05:00 PM</p>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
              <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white">Find Us</h4>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.8!2d-112.1677!3d33.5206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6e8c8c8c8c8c%3A0x8c8c8c8c8c8c8c8c!2s4700%20N%2051st%20Ave%2C%20Phoenix%2C%20AZ%2085031%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus&q=4700+N+51st+Ave,+Phoenix,+AZ+85031,+USA"
                  width="100%"
                  height="120"
                  className="sm:h-[150px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="WIC Office Location"
                ></iframe>
              </div>
            </div>
          </div>
          
          {/* Bottom */}
          <div className="border-t border-white/20 pt-3 text-center">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} WICPregnancyHelpAZ.com • Walk-ins Welcome
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
