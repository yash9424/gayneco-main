"use client"

import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function FloatingChatButton() {
  return (
    <Link
      href="/chat"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
    >
      <MessageCircle size={24} className="group-hover:scale-110 transition-transform duration-300" />
      <span className="sr-only">Open Chat</span>
    </Link>
  )
}