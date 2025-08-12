"use client"

import { useState, useEffect } from 'react'

export function AnimatedBackground() {
  const [bubbles, setBubbles] = useState<Array<{left: string, delay: string, duration: string}>>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const bubbleData = [...Array(8)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      delay: `${i * 3}s`,
      duration: `${20 + Math.random() * 10}s`
    }))
    setBubbles(bubbleData)
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/40 to-cyan-200/40 rounded-full blur-3xl animate-wave" 
               style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-r from-sky-200/40 to-blue-200/40 rounded-full blur-3xl animate-wave" 
               style={{ animationDelay: '5s' }} />
          <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-gradient-to-r from-cyan-200/40 to-sky-200/40 rounded-full blur-3xl animate-wave" 
               style={{ animationDelay: '10s' }} />
          <div className="absolute bottom-0 right-1/3 w-88 h-88 bg-gradient-to-r from-blue-200/40 to-cyan-200/40 rounded-full blur-3xl animate-wave" 
               style={{ animationDelay: '15s' }} />
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient waves */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/40 to-cyan-200/40 rounded-full blur-3xl animate-wave" 
             style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-r from-sky-200/40 to-blue-200/40 rounded-full blur-3xl animate-wave" 
             style={{ animationDelay: '5s' }} />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-gradient-to-r from-cyan-200/40 to-sky-200/40 rounded-full blur-3xl animate-wave" 
             style={{ animationDelay: '10s' }} />
        <div className="absolute bottom-0 right-1/3 w-88 h-88 bg-gradient-to-r from-blue-200/40 to-cyan-200/40 rounded-full blur-3xl animate-wave" 
             style={{ animationDelay: '15s' }} />
      </div>

      {/* Floating bubbles */}
      <div className="absolute inset-0 opacity-20">
        {bubbles.map((bubble, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-blue-300/60 rounded-full animate-bubble"
            style={{
              left: bubble.left,
              animationDelay: bubble.delay,
              animationDuration: bubble.duration
            }}
          />
        ))}
      </div>

      {/* Subtle geometric shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-blue-300/30 rounded-full animate-spin-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-cyan-300/30 rotate-45 animate-spin-reverse" />
        <div className="absolute top-2/3 left-2/3 w-20 h-20 border border-sky-300/30 rounded-full animate-pulse-slow" />
      </div>
    </div>
  )
}
