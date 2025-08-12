import Hero from '@/components/hero'
import InfoCards from '@/components/info-cards'
import Chatbot from '@/components/chatbot'

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-sky-50 to-cyan-50 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Hero />
      <InfoCards />
      <Chatbot />
    </div>
  )
}
