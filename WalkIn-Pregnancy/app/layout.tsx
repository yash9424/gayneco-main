import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import UniversalChat from '@/components/universal-chat'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Walk-In Pregnancy Clinic AZ | No Appointment Needed',
  description: 'Professional OB/GYN care in Phoenix, AZ. Same-day ultrasounds, free pregnancy testing, and WIC referral help. No insurance required.',
  keywords: 'pregnancy clinic, OB/GYN, ultrasound, Phoenix AZ, walk-in clinic, pregnancy test, WIC referral',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <UniversalChat siteName="WalkIn-Pregnancy" />
        </ThemeProvider>
      </body>
    </html>
  )
}
