import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import UniversalChat from '@/components/universal-chat'

const inter = Inter({ subsets: ['latin'] })
const outfit = Outfit({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit'
})

export const metadata: Metadata = {
  title: 'First Trimester Care AZ | Early Prenatal Care & OB/GYN Services in West Phoenix',
  description: 'Expert first trimester prenatal care in West Phoenix. Walk-in friendly OB/GYN clinic with same-day ultrasounds, AHCCCS support, and WIC referrals. No insurance required.',
  keywords: 'first trimester, prenatal care, OB/GYN, West Phoenix, ultrasound, AHCCCS, WIC, pregnancy confirmation, Arizona',
  openGraph: {
    title: 'First Trimester Care AZ | Early Prenatal Care in West Phoenix',
    description: 'Expert first trimester prenatal care with same-day ultrasounds and AHCCCS support.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'First Trimester Care AZ | Early Prenatal Care',
    description: 'Expert first trimester prenatal care in West Phoenix.',
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${outfit.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <UniversalChat siteName="First-Trimester" />
        </ThemeProvider>
      </body>
    </html>
  )
}
