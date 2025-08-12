'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowLeft, MoreVertical, Plus, Send, MessageCircle, X } from 'lucide-react'

interface Message {
  id: number
  text: string
  sender: 'doctor' | 'user'
  timestamp: Date
}

interface ChatUIProps {
  openChat?: boolean
  onOpenChange?: (open: boolean) => void
}

export default function ChatUI({ openChat, onOpenChange }: ChatUIProps = {}) {
  const [isOpen, setIsOpen] = useState(openChat || false)

  useEffect(() => {
    if (openChat !== undefined) {
      setIsOpen(openChat)
    }
  }, [openChat])

  useEffect(() => {
    const handleOpenChat = () => {
      handleOpenChange(true)
    }
    
    window.addEventListener('openChat', handleOpenChat)
    return () => window.removeEventListener('openChat', handleOpenChat)
  }, [])

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    onOpenChange?.(open)
  }
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [questionStep, setQuestionStep] = useState(0)
  const [showForm, setShowForm] = useState(true)
  const [formData, setFormData] = useState({ name: '', age: '', phone: '' })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const questions = [
    "Hello, what is your name and age?",
    "Are you currently pregnant or planning to be pregnant?"
  ]

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.age && formData.phone) {
      setShowForm(false)
      const welcomeMessage: Message = {
        id: 1,
        text: `Hello ${formData.name}! Thank you for providing your information. How can I help you today?`,
        sender: 'doctor',
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    // Auto-reply logic
    setTimeout(() => {
      if (questionStep < questions.length - 1) {
        const nextQuestion: Message = {
          id: messages.length + 2,
          text: questions[questionStep + 1],
          sender: 'doctor',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, nextQuestion])
        setQuestionStep(prev => prev + 1)
      } else if (questionStep === questions.length - 1) {
        const finalMessage: Message = {
          id: messages.length + 2,
          text: "Thank you for the information. How can I help you today?",
          sender: 'doctor',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, finalMessage])
        setQuestionStep(prev => prev + 1)
      }
    }, 1000)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => handleOpenChange(true)}
            className="w-16 h-16 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <h3 className="font-semibold text-gray-900 dark:text-white">Messages</h3>
            <div className="flex items-center space-x-2">
              <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
                <MoreVertical className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <button
                onClick={() => handleOpenChange(false)}
                className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {showForm ? (
              /* Contact Form */
              <div className="flex items-center justify-center h-full">
                <form onSubmit={handleFormSubmit} className="w-full max-w-sm space-y-4">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Let's Get Started</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Please provide your information to begin</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Age</label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Your age"
                      min="1"
                      max="120"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="(123) 456-7890"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300"
                  >
                    Start Chat
                  </button>
                </form>
              </div>
            ) : (
              /* Messages */
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div key={message.id}>
                    {/* Time indicator */}
                    {index === 0 || 
                     (messages[index - 1] && 
                      Math.abs(message.timestamp.getTime() - messages[index - 1].timestamp.getTime()) > 300000) && (
                      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                        {formatTime(message.timestamp)}
                      </div>
                    )}
                    
                    <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        {/* Avatar */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                          message.sender === 'doctor' 
                            ? 'bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400' 
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                        }`}>
                          {message.sender === 'doctor' ? 'Dr' : 'You'}
                        </div>
                        
                        {/* Message bubble */}
                        <div className={`px-4 py-2 rounded-2xl ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                        }`}>
                          <p className="text-sm">{message.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Input Bar */}
          {!showForm && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <div className="flex items-center space-x-2">
                <button className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors h-12 w-12 flex items-center justify-center">
                  <Plus className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
                
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message…"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-full text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400 h-12"
                  />
                </div>
                
                <button
                  onClick={handleSendMessage}
                  className="p-3 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white rounded-full transition-all duration-300 hover:scale-105 h-12 w-12 flex items-center justify-center"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}