'use client'

import { Heart, Activity } from 'lucide-react'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-4 group">
      {/* Logo Icon */}
      <div className="relative">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 dark:from-blue-600 dark:via-indigo-600 dark:to-purple-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
          <div className="relative">
            <Activity className="w-8 h-8 text-white" />
            <Heart className="w-4 h-4 text-blue-200 absolute -top-1 -right-1" />
          </div>
        </div>
        {/* Decorative ring */}
        <div className="absolute inset-0 rounded-2xl border-2 border-blue-200/50 dark:border-blue-400/30 group-hover:border-blue-300/70 dark:group-hover:border-blue-400/50 transition-all duration-300 transform scale-110"></div>
      </div>
      
      {/* Logo Text */}
      <div className="flex flex-col">
        <div className="flex items-baseline space-x-1">
          <span className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
            FirstTrimester
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-700 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500 bg-clip-text text-transparent">
            Care AZ
          </span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5 hidden sm:block">
          Expert Prenatal Care
        </p>
      </div>
    </Link>
  )
}
