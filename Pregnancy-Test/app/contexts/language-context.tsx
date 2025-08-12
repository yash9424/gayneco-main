'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  translations: any
}

const translations = {
  en: {
    nav: {
      home: 'Home',
      blog: 'Blog'
    },
    hero: {
      headline: 'Think You Might Be Pregnant?',
      subheadline: 'We offer Free Urine Pregnancy Testing, Same-Day Ultrasounds, and WIC Referrals — No Insurance Needed.',
      points: [
        'Largest free pregnancy testing available',
        'Discounted lab services for patients',
        'Same-day pregnancy testing offered',
        'Walk-in free pregnancy testing welcome'
      ]
    },
    stats: {
      yearsOfService: 'Over 20 years of service',
      testsProvided: '30k+ free tests provided'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Compassionate care for women in West Phoenix, Buckeye, Tonopah, Glendale, Peoria, Surprise, Avondale, El Mirage, Gila Bend, Goodyear, Litchfield, Litchfield Park, Sun City West, Tolleson, Wickenburg, Youngtown and surrounding areas.',
      test: {
        title: 'Free Pregnancy Test',
        description: 'Confidential urine-based pregnancy testing with immediate results. <span class="text-emerald-600 font-semibold">No referral needed</span>.'
      },
      ultrasound: {
        title: '$175 = Office Visit and Ultrasound',
        description: 'Office Visit $75 + Ultrasound $100 = Total $175<br>Same-day ultrasound and obstetric consultation. Cash payment accepted, <span class="text-emerald-600 font-semibold">no referral needed</span>.'
      },
      wic: {
        title: 'Free WIC Referral',
        description: 'Complete WIC application assistance and referrals to local nutrition programs. <span class="text-emerald-600 font-semibold">No referral needed</span>.'
      },
      payment: {
        title: 'No Insurance? No Problem',
        description: 'Affordable ultrasound services with flexible payment options available. <span class="text-emerald-600 font-semibold">No referral needed</span>.'
      }
    },
    blog: {
      title: 'Health & Wellness Blog',
      subtitle: 'Expert advice and resources for your pregnancy journey',
      readMore: 'Read More',
      posts: {
        earlySignsTitle: 'Early Signs of Pregnancy to Watch For',
        earlySignsExcerpt: 'Learn about the common early symptoms of pregnancy and when to take a test for accurate results.',
        wicTitle: 'How to Get WIC Without Insurance in Arizona',
        wicExcerpt: 'A complete guide to applying for WIC benefits in Arizona, including eligibility requirements and application process.',
        testVisitTitle: 'What Happens During a Free Pregnancy Test Visit?',
        testVisitExcerpt: 'Everything you need to know about your first visit, from what to expect to how long it takes.'
      }
    },
    footer: {
      companyName: 'Free Pregnancy Test Arizona',
      description: 'Providing compassionate pregnancy care and support services to women in Arizona.',
      quickLinks: 'Quick Links',
      contact: 'Contact Us',
      phone: 'Phone',
      address: 'Address',
      hours: 'Hours',
      rights: 'All rights reserved.'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      blog: 'Blog'
    },
    hero: {
      headline: '¿Crees que Podrías Estar Embarazada?',
      subheadline: 'Ofrecemos Pruebas de Embarazo de Orina Gratuitas, Ultrasonidos el Mismo Día y Referencias de WIC — No Se Necesita Seguro.',
      points: [
        'Las pruebas de embarazo gratuitas más grandes disponibles',
        'Servicios de laboratorio con descuento para pacientes',
        'Pruebas de embarazo el mismo día ofrecidas',
        'Pruebas de embarazo gratuitas sin cita bienvenidas'
      ]
    },
    stats: {
      yearsOfService: 'Más de 20 años de servicio',
      testsProvided: '30k+ pruebas gratuitas proporcionadas'
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Atención compasiva para mujeres en el oeste de Phoenix, Buckeye, Tonopah, Glendale, Peoria, Surprise, Avondale, El Mirage, Gila Bend, Goodyear, Litchfield, Litchfield Park, Sun City West, Tolleson, Wickenburg, Youngtown y áreas circundantes.',
      test: {
        title: 'Prueba de Embarazo Gratuita',
        description: 'Prueba de embarazo confidencial basada en orina con resultados inmediatos. <span class="text-emerald-600 font-semibold">No se necesita referencia</span>.'
      },
      ultrasound: {
        title: '$175 = Visita Médica y Ultrasonido',
        description: 'Visita Médica $75 + Ultrasonido $100 = Total $175<br>Ultrasonido el mismo día y consulta obstétrica. Se acepta pago en efectivo, <span class="text-emerald-600 font-semibold">no se necesita referencia</span>.'
      },
      wic: {
        title: 'Referencia WIC Gratuita',
        description: 'Asistencia completa con la aplicación WIC y referencias a programas locales de nutrición. <span class="text-emerald-600 font-semibold">No se necesita referencia</span>.'
      },
      payment: {
        title: '¿Sin Seguro? No Hay Problema',
        description: 'Servicios de ultrasonido asequibles con opciones de pago flexibles disponibles. <span class="text-emerald-600 font-semibold">No se necesita referencia</span>.'
      }
    },
    blog: {
      title: 'Blog de Salud y Bienestar',
      subtitle: 'Consejos de expertos y recursos para tu viaje de embarazo',
      readMore: 'Leer Más',
      posts: {
        earlySignsTitle: 'Signos Tempranos del Embarazo a Observar',
        earlySignsExcerpt: 'Aprende sobre los síntomas tempranos comunes del embarazo y cuándo hacerte una prueba para obtener resultados precisos.',
        wicTitle: 'Cómo Obtener WIC Sin Seguro en Arizona',
        wicExcerpt: 'Una guía completa para solicitar beneficios de WIC en Arizona, incluyendo requisitos de elegibilidad y proceso de aplicación.',
        testVisitTitle: '¿Qué Sucede Durante una Visita de Prueba de Embarazo Gratuita?',
        testVisitExcerpt: 'Todo lo que necesitas saber sobre tu primera visita, desde qué esperar hasta cuánto tiempo toma.'
      }
    },
    footer: {
      companyName: 'Pruebas de Embarazo Gratuitas Arizona',
      description: 'Brindando atención compasiva del embarazo y servicios de apoyo a mujeres en Arizona.',
      quickLinks: 'Enlaces Rápidos',
      contact: 'Contáctanos',
      phone: 'Teléfono',
      address: 'Dirección',
      hours: 'Horarios',
      rights: 'Todos los derechos reservados.'
    }
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es') // Changed default to Spanish

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      translations: translations[language]
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
