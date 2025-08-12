import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AHCCCS Pregnancy Help AZ | Pregnancy Confirmation & Medicaid Support',
  description: 'Walk-in OB clinic for pregnancy confirmation, AHCCCS support, same-day ultrasound, and WIC referral help in Arizona.',
  keywords: 'AHCCCS, pregnancy confirmation, WIC referral, ultrasound, Arizona, OB/GYN, Medicaid',
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
