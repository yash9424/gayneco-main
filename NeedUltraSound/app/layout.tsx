import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import dynamic from 'next/dynamic';

// Dynamically import the ChatWidget with no SSR to avoid hydration issues
const ChatWidget = dynamic(() => import('@/components/chat-widget'), {
  ssr: false,
})

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
        <ChatWidget />
      </body>
    </html>
  )
}
