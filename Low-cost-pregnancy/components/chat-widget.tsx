"use client"

import { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, ArrowLeft, MoreHorizontal, Plus, Send } from 'lucide-react'

// Global chat state
let globalChatState = {
  isOpen: false,
  listeners: [] as (() => void)[]
}

const openChat = () => {
  globalChatState.isOpen = true
  globalChatState.listeners.forEach(listener => listener())
}

const closeChat = () => {
  globalChatState.isOpen = false
  globalChatState.listeners.forEach(listener => listener())
}

interface Message {
  id: number
  content: string
  isSent: boolean
  timestamp: Date
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [showForm, setShowForm] = useState(true)
  const [formData, setFormData] = useState({ name: '', age: '', number: '' })
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [conversationStep, setConversationStep] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    setMounted(true)
    // Export for header to use
    if (typeof window !== 'undefined') {
      (window as any).openChat = openChat
    }
    
    const updateState = () => setIsOpen(globalChatState.isOpen)
    globalChatState.listeners.push(updateState)
    setIsOpen(globalChatState.isOpen)
    
    return () => {
      globalChatState.listeners = globalChatState.listeners.filter(l => l !== updateState)
    }
  }, [])

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.age && formData.number) {
      setShowForm(false)
      setTimeout(() => {
        addDoctorMessage(`Hello ${formData.name}! Thank you for providing your information. How can I help you today?`)
      }, 500)
    }
  }

  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const addMessage = (content: string, isSent: boolean) => {
    const newMessage: Message = {
      id: Date.now(),
      content,
      isSent,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const addDoctorMessage = (content: string) => {
    addMessage(content, false)
  }

  const addUserMessage = (content: string) => {
    addMessage(content, true)
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    addUserMessage(inputValue)
    const userMessage = inputValue
    setInputValue('')

    setTimeout(() => {
      handleDoctorResponse(userMessage)
    }, 1000)
  }

  const handleDoctorResponse = (userMessage: string) => {
    const responses = [
      "I understand. Can you tell me more about that?",
      "That's important information. What other questions do you have?",
      "I'm here to help. Is there anything specific you'd like to know?",
      "Thank you for sharing. How else can I assist you today?",
      "I see. Would you like to schedule an appointment or learn more about our services?"
    ]
    const response = responses[Math.floor(Math.random() * responses.length)]
    addDoctorMessage(response)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  if (!mounted) return null

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={openChat}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4 md:p-6">
          <div className="w-full max-w-sm h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 flex items-center justify-between">
              <button className="p-1 hover:bg-white/20 rounded-full transition-colors">
                <ArrowLeft size={20} />
              </button>
              <h1 className="text-lg font-semibold">Messages</h1>
              <button 
                onClick={closeChat}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {showForm ? (
              /* Contact Form */
              <div className="flex-1 p-6 bg-gray-900 flex flex-col justify-center">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold text-white mb-2">Get Started</h2>
                  <p className="text-gray-400 text-sm">Please provide your details to begin</p>
                </div>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => handleFormChange('name', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-pink-500 focus:outline-none text-sm"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Your Age"
                      value={formData.age}
                      onChange={(e) => handleFormChange('age', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-pink-500 focus:outline-none text-sm"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Your Phone Number"
                      value={formData.number}
                      onChange={(e) => handleFormChange('number', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-pink-500 focus:outline-none text-sm"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Start Chat
                  </button>
                </form>
              </div>
            ) : (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 bg-gray-900 space-y-4">
                  <div className="text-center text-xs text-gray-400 mb-4">Today 3:44 PM</div>
                  
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex items-start gap-3 ${message.isSent ? 'flex-row-reverse' : 'flex-row'}`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 ${
                        message.isSent ? 'bg-blue-500' : 'bg-pink-500'
                      }`}>
                        {message.isSent ? 'U' : 'Dr'}
                      </div>
                      <div
                        className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                          message.isSent
                            ? 'bg-blue-500 text-white rounded-br-md'
                            : 'bg-gray-700 text-white rounded-bl-md'
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 bg-gray-900 border-t border-gray-700 flex items-center gap-3">
                  <button className="p-2 text-gray-400 hover:text-white transition-colors">
                    <Plus size={20} />
                  </button>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-full border-none outline-none text-sm placeholder-gray-400"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}