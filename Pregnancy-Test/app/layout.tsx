import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from './contexts/language-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FreePregnancyTestAZ - Pruebas de Embarazo Gratuitas y Atención en Arizona',
  description: 'Pruebas de embarazo de orina gratuitas, ultrasonidos el mismo día y referencias de WIC en Phoenix, Buckeye y Tonopah. No se necesita seguro.',
  keywords: 'prueba de embarazo gratuita, Arizona, Phoenix, Buckeye, Tonopah, ultrasonido, WIC, sin seguro',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className} suppressHydrationWarning={true}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
