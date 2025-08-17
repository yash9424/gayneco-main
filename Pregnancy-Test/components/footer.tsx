'use client'

import { Phone, MapPin, Clock, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Pregnancy Test</h3>
                <p className="text-gray-400 text-sm">Free Testing Available</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Free pregnancy tests, same-day ultrasounds and WIC referrals in Phoenix, Buckeye and Tonopah.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>623-846-7597</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Phoenix, Buckeye, Tonopah</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>Walk-ins Welcome</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Free Pregnancy Testing</li>
              <li>Same-Day Ultrasound</li>
              <li>WIC Referrals</li>
              <li>No Insurance Needed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 Pregnancy Test - All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}