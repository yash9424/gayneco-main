'use client'

import { useEffect, useRef, useState } from 'react'
import { Shield, Users, MapPin } from 'lucide-react'

const cards = [
  {
    icon: Shield,
    title: "I'm Scared I Might Be Pregnant",
    description: "We offer free, private pregnancy tests — no ID or insurance required. Same-day help with ultrasound and WIC referrals. You can walk in or text us.",
    gradient: "from-sky-500 via-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Help Your Students Get Real Care",
    description: "We provide safe, fast, and respectful services for teens. Refer them for free pregnancy testing and low-cost care — we're walk-in friendly and AHCCCS supported.",
    gradient: "from-emerald-500 via-teal-500 to-green-500"
  },
  {
    icon: MapPin,
    title: "Support Without Judgment",
    description: "If your daughter needs a pregnancy test or ultrasound, we're here with affordable, confidential care. We also help with WIC and next steps — no pressure, no cost to start.",
    gradient: "from-sky-500 via-blue-500 to-cyan-500"
  }
]

export default function InfoCards() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setTimeout(() => {
                setVisibleCards(prev => {
                  const newState = [...prev]
                  newState[index] = true
                  return newState
                })
              }, index * 200)
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 relative bg-gradient-to-b from-transparent via-neutral-50/50 to-transparent dark:via-black-200/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-50/50 to-transparent dark:via-black-200/50"></div>
      
      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-blue-900 dark:text-blue-200">How We Can </span>
            <span className="text-blue-900 dark:text-blue-200 drop-shadow-sm">Help You</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive support tailored for younger patients, schools, and parents
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <div
                key={index}
                ref={el => cardRefs.current[index] = el}
                className={`group relative backdrop-blur-sm rounded-3xl p-8 shadow-elegant hover:shadow-modern transition-all duration-500 cursor-pointer overflow-hidden bg-gradient-to-br from-blue-50/80 via-sky-50/60 to-cyan-50/80 dark:from-gray-800/50 dark:via-gray-700/40 dark:to-gray-800/50 ${
                  visibleCards[index] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-0 transition-opacity duration-500`}></div>
                
                {/* Icon with Gradient */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="relative text-lg sm:text-xl font-normal text-card dark:text-gray-300 mb-3 group-hover:text-[#1560BD] dark:group-hover:text-gray-300 transition-colors duration-300">
                  {card.title}
                </h3>
                
                <p className="relative text-sm text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-[#1560BD] dark:group-hover:text-gray-400 transition-colors duration-300">
                  {card.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
