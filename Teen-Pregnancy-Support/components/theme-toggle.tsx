'use client'

import { Moon } from 'lucide-react'

export function ThemeToggle() {
  return (
    <div className="relative">
      <button
        className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-700/40 backdrop-blur-sm border border-blue-600/40 hover:bg-blue-600/50 transition-all duration-300 group"
        aria-label="Dark mode"
        disabled
      >
        <Moon className="w-5 h-5 text-white group-hover:text-blue-200 transition-colors" />
      </button>
    </div>
  )
}
