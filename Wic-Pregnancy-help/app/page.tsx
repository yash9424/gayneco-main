'use client'


import Link from "next/link"
import { Button } from "@/components/ui/button"
import UniversalChat from "@/components/universal-chat"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function HomePage() {
  const cardsRef = useRef(null)
  const cardsInView = useInView(cardsRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    })
  }



  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      
      <main className="container mx-auto pl-1 pr-4 sm:px-4 py-8 md:py-16">
        {/* Hero Section */}
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left space-y-4 lg:pr-2">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
                variants={itemVariants}
              >
                WIC Help for Pregnant Women in Arizona
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 font-medium"
                variants={itemVariants}
              >
                Fast, Friendly, and Walk-In Support
              </motion.p>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-500 max-w-lg mx-auto lg:mx-0"
                variants={itemVariants}
              >
                Get the nutrition support you and your baby deserve. We're here to help you navigate the WIC application process with compassionate, walk-in assistance.
              </motion.p>
              
              {/* Staff Cards - Left Side */}
              <motion.div 
                className="mt-6"
                variants={itemVariants}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Meet Our Care Team</h3>
                <div className="flex gap-3">
                  {[
                    {
                      name: "Julie Denton",
                      title: "Nurse Practitioner",
                      initials: "NP",
                      bgColor: "bg-gradient-to-r from-pink-500 to-rose-500"
                    },
                    {
                      name: "Kylee Tate",
                      title: "Physician Assistant",
                      initials: "PA",
                      bgColor: "bg-gradient-to-r from-purple-500 to-indigo-500"
                    }
                  ].map((staff, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-sm flex-1 border-2 border-gray-200"
                    >
                      <div className="flex items-center space-x-2">
                        <motion.div 
                          className={`w-8 h-8 ${staff.bgColor} rounded-full flex items-center justify-center text-white font-bold text-xs`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {staff.initials}
                        </motion.div>
                        <div>
                          <h4 className="text-base font-semibold text-gray-800">{staff.name}</h4>
                          <p className="text-sm text-gray-600">{staff.title}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>
            
            {/* Hero Image */}
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full max-w-md lg:max-w-lg">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 rounded-3xl"
                  animate={{ rotate: [3, -3, 3] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
                <div className="relative bg-white rounded-3xl p-2 shadow-xl">
                  <img
                    src="/wic-support-hero.png"
                    alt="Happy pregnant woman receiving support"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>


        
        {/* Animated Info Cards */}
        <div ref={cardsRef} className="mt-16 md:mt-24 max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate={cardsInView ? "visible" : "hidden"}
          >
            {[
              {
                icon: "🏥",
                title: "Health Insurance Options",
                description: "Explore public and private health insurance choices, including ACA marketplace plans, employer coverage, and COBRA.",
                gradient: "from-blue-400 to-cyan-400"
              },
              {
                icon: "📋",
                title: "Medicaid & CHIP Eligibility",
                description: "Learn how income, household size, and state-specific rules affect your eligibility for Medicaid or the Children's Health Insurance Program.",
                gradient: "from-green-400 to-emerald-400"
              },
              {
                icon: "🤱",
                title: "Prenatal & Maternity Insurance Coverage",
                description: "Understand what's covered during pregnancy—prenatal visits, ultrasounds, labor, and delivery—under most insurance plans, including no-cost options.",
                gradient: "from-pink-400 to-rose-400"
              },
              {
                icon: "💳",
                title: "We Accept All Insurance Plans",
                description: "We are accepting all types of health insurance plans to ensure you get the care and support you need without financial barriers.",
                gradient: "from-purple-400 to-violet-400"
              }
             
            ].map((card, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg cursor-pointer"
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${card.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-2xl">{card.icon}</span>
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>


      </main>
      
      <UniversalChat siteName="Wic-Pregnancy-help" />
    </div>
  )
}