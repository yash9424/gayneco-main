'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function MorphingLogo() {
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
          className="w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden"
          animate={{ 
            boxShadow: [
              "0 8px 25px rgba(59, 130, 246, 0.3)",
              "0 8px 35px rgba(59, 130, 246, 0.5)",
              "0 8px 25px rgba(59, 130, 246, 0.3)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {/* Background Pattern */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Fetal Doppler/Ultrasound Machine Icon */}
          <motion.div
            className="relative z-10"
            animate={{ 
              y: [0, -1, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {/* Ultrasound Machine */}
            <div className="relative">
              {/* Main Monitor/Screen */}
              <div className="w-8 h-5 bg-white/90 rounded-lg mb-1 relative">
                <div className="absolute inset-1 bg-gradient-to-br from-blue-400 to-purple-400 rounded">
                  {/* Screen Content - Heartbeat Line */}
                  <motion.div 
                    className="absolute top-1/2 left-1 right-1 h-0.5 bg-white/80"
                    style={{ transform: 'translateY(-50%)' }}
                  />
                  <motion.div 
                    className="absolute top-1/2 w-0.5 h-2 bg-white transform -translate-y-1/2"
                    animate={{ x: [4, 20, 4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {/* Blinking indicators */}
                  <motion.div 
                    className="absolute top-0.5 right-0.5 w-1 h-1 bg-green-300 rounded-full"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
              </div>
              
              {/* Control Panel */}
              <div className="w-8 h-2 bg-white/80 rounded-b-lg relative">
                <div className="absolute top-0.5 left-1 w-1 h-0.5 bg-blue-400 rounded-full" />
                <div className="absolute top-0.5 left-3 w-1 h-0.5 bg-purple-400 rounded-full" />
                <div className="absolute top-0.5 right-1 w-1 h-0.5 bg-green-400 rounded-full" />
              </div>
              
              {/* Doppler Probe/Transducer */}
              <motion.div 
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-white/70 rounded-full"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Cable */}
              <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-white/50 rounded-full" />
            </div>
          </motion.div>
          
          {/* Floating Sound Waves */}
          <motion.div
            className="absolute top-1 right-1"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-2 h-2 relative">
              {/* Sound wave arcs */}
              <div className="absolute inset-0 border border-white/60 rounded-full" />
              <div className="absolute inset-0.5 border border-white/40 rounded-full" />
              <div className="absolute top-1/2 left-0 w-0.5 h-0.5 bg-white rounded-full transform -translate-y-1/2" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Logo Text */}
      <div className="flex flex-col">
        <motion.div 
          className="flex items-baseline space-x-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            First
          </span>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Trimester
          </span>
        </motion.div>
      </div>
    </Link>
  )
}
