import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import UniversalChat from '@/components/universal-chat'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NeedUltrasoundToday - Same-Day Pregnancy Care',
  description: 'Same-day ultrasound and pregnancy care. OB visit + ultrasound for just $175 - no insurance required.',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <UniversalChat siteName="NeedUltraSound" />
      </body>
    </html>
  )
}
