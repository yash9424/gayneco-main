import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import UniversalChat from '@/components/universal-chat'

export const metadata: Metadata = {
  title: 'FreePregnancyTest',
  description: 'Free pregnancy testing and consultation services',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={`${GeistSans.className} antialiased`}>
        {children}
        <UniversalChat siteName="FreePregnencyTest" />
      </body>
    </html>
  )
}
