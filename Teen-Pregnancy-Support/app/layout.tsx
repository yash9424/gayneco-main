import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Teen Pregnancy Support Arizona | Safe, Judgment-Free Help',
  description: 'Safe, friendly, and judgment-free help for teens facing unexpected pregnancy in Arizona. Support, answers, and someone to talk to.',
  keywords: 'teen pregnancy, Arizona, support, help, confidential, judgment-free',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased text-lg`} suppressHydrationWarning>
        <ThemeProvider
          defaultTheme="system"
          storageKey="teen-support-theme"
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
