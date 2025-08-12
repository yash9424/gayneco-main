'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="w-12 h-12 px-0 rounded-full"
      >
        <div className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="w-12 h-12 px-0 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 dark:from-gray-800 dark:to-gray-700 border-2 border-orange-200/50 dark:border-gray-600/50 hover:border-orange-300 dark:hover:border-gray-500 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <motion.div
          initial={false}
          animate={{ 
            rotate: theme === 'dark' ? 360 : 0,
            scale: theme === 'dark' ? 1.2 : 1
          }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
        >
          {theme === 'light' ? (
            <Moon className="h-5 w-5 text-orange-600 dark:text-orange-400" />
          ) : (
            <Sun className="h-5 w-5 text-amber-500" />
          )}
        </motion.div>
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  )
}
