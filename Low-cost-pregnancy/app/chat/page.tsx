import UniversalChat from '@/components/universal-chat'

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Chat with Our Medical Team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get instant support and answers to your pregnancy-related questions from our qualified medical professionals.
          </p>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>This chat is for informational purposes. For medical emergencies, please call 911.</p>
        </div>
      </div>
      <UniversalChat siteName="Low-cost-pregnancy" />
    </div>
  )
}