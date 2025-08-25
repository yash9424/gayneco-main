import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { LanguageProvider } from './contexts/language-context'
import { ThemeProvider } from '@/components/theme-provider'
import UniversalChat from '@/components/universal-chat'

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
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <UniversalChat siteName="Pregnancy-Test" />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
