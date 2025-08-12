import Link from 'next/link'
import { Heart, Shield } from 'lucide-react'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 sm:gap-3 group ml-2 sm:ml-4">
      <div className="relative">
        {/* Main Logo Circle - Smaller on mobile */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-all duration-300 group-hover:scale-105 border border-blue-400/30">
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-current" />
        </div>
        
        {/* Accent Dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-secondary rounded-full flex items-center justify-center">
          <Shield className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white" />
        </div>
      </div>
      
      <div className="block">
        <div className="font-bold text-sm sm:text-lg lg:text-xl text-white group-hover:text-blue-200 transition-colors duration-300">
          Teen Support
        </div>
        <div className="text-xs text-blue-100/80 group-hover:text-blue-200 transition-colors duration-300">
          Compassionate Care
        </div>
      </div>
    </Link>
  )
}
