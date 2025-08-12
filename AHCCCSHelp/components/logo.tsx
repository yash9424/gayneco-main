'use client'

import { Heart, Stethoscope } from 'lucide-react'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-4 group">
      {/* Logo Icon */}
      <div className="relative">
        <div className="w-14 h-14 bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 dark:from-pink-600 dark:via-rose-600 dark:to-pink-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
          <div className="relative">
            <Stethoscope className="w-7 h-7 text-white" />
            <Heart className="w-3 h-3 text-pink-200 absolute -top-1 -right-1" />
          </div>
        </div>
        {/* Decorative ring */}
        <div className="absolute inset-0 rounded-2xl border-2 border-pink-200/50 dark:border-pink-400/30 group-hover:border-pink-300/70 dark:group-hover:border-pink-400/50 transition-all duration-300 transform scale-110"></div>
      </div>
      
      {/* Logo Text */}
      <div className="flex flex-col">
        <div className="flex items-baseline space-x-1">
          <span className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
            WalkIn
          </span>
          <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 dark:from-pink-400 dark:via-rose-400 dark:to-pink-500 bg-clip-text text-transparent">
            Pregnancy
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-gray-700 dark:text-gray-300">
            Clinic
          </span>
          <span className="text-sm font-semibold text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/30 px-2 py-0.5 rounded-full">
            AZ
          </span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5 hidden sm:block">
          No Appointment Needed
        </p>
      </div>
    </Link>
  )
}
