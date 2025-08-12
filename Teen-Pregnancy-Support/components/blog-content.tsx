'use client'

import { useEffect, useRef, useState } from 'react'

const sections = [
  {
    title: "What is Younger Patient Support?",
    content: "Younger patient support encompasses a wide range of services designed to help young people navigate healthcare challenges with dignity and care. This includes specialized medical care, counseling, educational support, and emotional guidance from trained professionals who understand the unique needs of younger patients.",
    image: "/IMAGE 1.jpeg",
    alt: "Young woman receiving medical consultation"
  },
  {
    title: "How Schools and Parents Can Help",
    content: "Educational institutions and families play crucial roles in providing non-judgmental support for younger patients. Schools can offer flexible scheduling, confidential counseling, and connections to resources. Parents can provide emotional support, help navigate healthcare options, and maintain open communication while respecting their young patient's autonomy and decisions.",
    image: "/IMAGE 2.png",
    alt: "Teen mother with her parents"
  },
  {
    title: "Tips for Younger Patients About Confidentiality",
    content: "Your privacy matters. In Arizona, younger patients have specific rights regarding confidential healthcare. You can speak with counselors, healthcare providers, and support services with appropriate privacy protections. Remember that seeking help is a sign of strength, not weakness.",
    image: "/IMAGE 3.png",
    alt: "Young woman having a private conversation with a counselor"
  },
  {
    title: "Local Help Centers for Younger Patients in Arizona",
    content: "Arizona offers numerous resources including specialized clinics, community health centers, school-based health services, and younger patient support organizations. Many services are available with appropriate support systems, ensuring that help is accessible when you need it most.",
    image: "/IMAGE 4.png",
    alt: "Healthcare professional showing resources to a young woman"
  }
]

export default function BlogContent() {
  const [visibleSections, setVisibleSections] = useState<boolean[]>(new Array(sections.length).fill(false))
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleSections(prev => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }, index * 150)
          }
        },
        { threshold: 0.1 }
      )
      
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [])

  return (
    <div className="space-y-8">
      <div className="animate-fade-in">
        <h1 className="text-3xl lg:text-4xl font-bold text-neutral-800 dark:text-white mb-4">
          Understanding Younger Patient Support
        </h1>
        <p className="text-lg text-neutral-600 dark:text-gray-300 mb-8">
          Comprehensive information for younger patients, parents, and school staff about available resources and support systems.
        </p>
      </div>

      {sections.map((section, index) => (
        <div
          key={index}
          ref={el => sectionRefs.current[index] = el}
          className={`bg-white rounded-xl overflow-hidden shadow-soft transition-all duration-700 ${
            visibleSections[index] 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-8'
          }`}
        >
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src={section.image} 
                alt={section.alt}
                className="w-full h-48 md:h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-2/3">
              <h2 className="text-xl font-semibold text-neutral-800 dark:text-white mb-4">
                {section.title}
              </h2>
              <p className="text-neutral-600 dark:text-gray-300 leading-relaxed">
                {section.content}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="bg-coral/5 rounded-xl p-6 border-l-4 border-coral">
        <h3 className="font-semibold text-neutral-800 dark:text-white mb-2">Need Immediate Support?</h3>
        <p className="text-neutral-600 dark:text-gray-300">
          Don't hesitate to reach out. Our team is here to provide confidential, judgment-free support for younger patients and their families whenever you need it.
        </p>
      </div>
    </div>
  )
}
