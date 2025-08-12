'use client'

import { useState } from 'react'
import { MessageCircle, X, Send, User } from 'lucide-react'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [showForm, setShowForm] = useState(true)
  const [userInfo, setUserInfo] = useState({ name: '', contact: '', age: '' })
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([])
  const [currentMessage, setCurrentMessage] = useState('')

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (userInfo.name && userInfo.contact && userInfo.age) {
      setShowForm(false)
      setMessages([
        { text: `Hello ${userInfo.name}! I'm here to help you with any questions about teen pregnancy support. How can I assist you today?`, isUser: false }
      ])
    }
  }

  const sendMessage = () => {
    if (currentMessage.trim()) {
      setMessages(prev => [...prev, { text: currentMessage, isUser: true }])
      
      // Simple auto-response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "Thank you for your message. Our support team will get back to you soon. For immediate help, please call 623-846-7597.", 
          isUser: false 
        }])
      }, 1000)
      
      setCurrentMessage('')
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
        style={{ backgroundColor: '#26619C' }}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col">
          {/* Header */}
          <div className="text-white p-4 rounded-t-lg flex items-center justify-between" style={{ backgroundColor: '#26619C' }}>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span className="font-semibold">Support Chat</span>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          {showForm ? (
            <form onSubmit={handleFormSubmit} className="p-4 space-y-4 flex-1">
              <h3 className="font-semibold text-gray-800 dark:text-white">Please fill in your details:</h3>
              
              <input
                type="text"
                placeholder="Your Name"
                value={userInfo.name}
                onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                required
              />
              
              <input
                type="text"
                placeholder="Contact Number"
                value={userInfo.contact}
                onChange={(e) => setUserInfo(prev => ({ ...prev, contact: e.target.value }))}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                required
              />
              
              <input
                type="number"
                placeholder="Age"
                value={userInfo.age}
                onChange={(e) => setUserInfo(prev => ({ ...prev, age: e.target.value }))}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                required
              />
              
              <button
                type="submit"
                className="w-full text-white p-2 rounded-lg transition-colors hover:opacity-90"
                style={{ backgroundColor: '#26619C' }}
              >
                Start Chat
              </button>
            </form>
          ) : (
            <>
              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs p-3 rounded-lg ${
                      msg.isUser 
                        ? 'text-white' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'
                    }`} style={msg.isUser ? { backgroundColor: '#26619C' } : {}}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex gap-2">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                />
                <button
                  onClick={sendMessage}
                  className="text-white p-2 rounded-lg transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#26619C' }}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}