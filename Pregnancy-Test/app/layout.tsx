import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from './contexts/language-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pregnancy Test',
  description: 'Free pregnancy tests, same-day ultrasounds and WIC referrals in Phoenix, Buckeye and Tonopah. No insurance needed.',
  keywords: 'free pregnancy test, Arizona, Phoenix, Buckeye, Tonopah, ultrasound, WIC, no insurance',
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
