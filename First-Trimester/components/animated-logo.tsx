'use client'

import { motion } from 'framer-motion'
import { Heart, Stethoscope, Baby, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function AnimatedLogo() {
  return (
    <Link href="/" className="flex items-center space-x-3 group">
      {/* Logo Container */}
      <motion.div 
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {/* Main Logo Circle */}
        <motion.div 
          className="w-16 h-16 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 dark:from-emerald-300 dark:via-teal-400 dark:to-cyan-400 rounded-3xl flex items-center justify-center shadow-lg relative overflow-hidden"
          animate={{ 
            boxShadow: [
              "0 10px 25px rgba(16, 185, 129, 0.3)",
              "0 10px 35px rgba(16, 185, 129, 0.5)",
              "0 10px 25px rgba(16, 185, 129, 0.3)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {/* Background Pattern */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Main Icon - Stethoscope */}
          <motion.div
            animate={{ 
              y: [0, -2, 0],
              rotate: [0, 3, -3, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Stethoscope className="w-8 h-8 text-white relative z-10" />
          </motion.div>
          
          {/* Floating Heart */}
          <motion.div
            className="absolute top-1 right-1"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 15, -15, 0]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <Heart className="w-4 h-4 text-pink-200 fill-current" />
          </motion.div>
          
          {/* Baby Icon */}
          <motion.div
            className="absolute bottom-1 left-1"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 1, 0]
            }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
          >
            <Baby className="w-3 h-3 text-emerald-100" />
          </motion.div>

          {/* Sparkles */}
          <motion.div
            className="absolute top-0 left-0"
            animate={{ 
              scale: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            <Sparkles className="w-2 h-2 text-yellow-300" />
          </motion.div>
        </motion.div>
        
        {/* Decorative Ring */}
        <motion.div 
          className="absolute inset-0 rounded-3xl border-2 border-emerald-300/50 dark:border-emerald-400/30"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ transform: 'scale(1.15)' }}
        />
      </motion.div>
      
      {/* Logo Text */}
      <div className="flex flex-col">
        <motion.div 
          className="flex items-baseline space-x-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-2xl md:text-3xl font-bold font-nunito text-gray-900 dark:text-white tracking-tight">
            First
          </span>
          <span className="text-2xl md:text-3xl font-bold font-nunito bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Trimester
          </span>
        </motion.div>
        <motion.div 
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="text-lg font-semibold text-gray-700 dark:text-gray-300 font-nunito">
            Care
          </span>
          <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">
            AZ
          </span>
        </motion.div>
        <motion.p 
          className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5 hidden sm:block font-nunito"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          West Phoenix OB/GYN
        </motion.p>
      </div>
    </Link>
  )
}
