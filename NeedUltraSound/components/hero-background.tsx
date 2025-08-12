'use client'

import Image from 'next/image';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 bg-slate-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/background.jpg"
          alt="Medical background"
          fill
          priority
          className="object-cover"
          quality={100}
          style={{ objectPosition: 'center 30%' }}
        />
      </div>
      
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-teal-900/60">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.2),transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(20,184,166,0.2),transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(134,239,172,0.2),transparent_50%)] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
    </div>
  )
}
