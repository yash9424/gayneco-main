'use client'

import { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Send, Plus } from 'lucide-react'

interface Message {
  id: number
  text: string
  sender: 'user' | 'doctor'
  timestamp: string
}

interface UserInfo {
  name: string
  age: string
  phone: string
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [showForm, setShowForm] = useState(true)
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', age: '', phone: '' })
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
    if (isOpen && !showForm && messages.length === 0) {
      setTimeout(() => {
        addMessage(`Hello ${userInfo.name}, are you currently pregnant or planning to be pregnant?`, 'doctor')
      }, 1000)
    }
  }, [isOpen, showForm, userInfo.name])

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true)
    window.addEventListener('openChat', handleOpenChat)
    return () => window.removeEventListener('openChat', handleOpenChat)
  }, [])

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (userInfo.name && userInfo.age && userInfo.phone) {
      setShowForm(false)
    }
  }

  const addMessage = (text: string, sender: 'user' | 'doctor') => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    setMessages(prev => [...prev, newMessage])
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    addMessage(inputValue, 'user')
    setInputValue('')

    setTimeout(() => {
      if (conversationStep === 0) {
        addMessage("Thank you for that information. How can I help you today?", 'doctor')
        setConversationStep(1)
      }
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-teal-600 text-white rounded-t-lg">
            <h3 className="font-semibold">{showForm ? 'Contact Information' : 'Chat with Us'}</h3>
            <button onClick={() => {
              setIsOpen(false)
              setShowForm(true)
              setMessages([])
              setUserInfo({ name: '', age: '', phone: '' })
            }}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {showForm ? (
            /* Contact Form */
            <div className="flex-1 p-6">
              <div className="mb-4 p-3 bg-teal-50 dark:bg-teal-900/30 rounded-lg border-l-4 border-teal-500">
                <p className="text-sm text-teal-700 dark:text-teal-300">
                  Please provide your information to move forward with our chat support.
                </p>
              </div>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={userInfo.name}
                    onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Age *
                  </label>
                  <input
                    type="number"
                    required
                    value={userInfo.age}
                    onChange={(e) => setUserInfo(prev => ({ ...prev, age: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Enter your age"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={userInfo.phone}
                    onChange={(e) => setUserInfo(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Enter your phone number"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
                >
                  Start Chat
                </button>
              </form>
            </div>
          ) : (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message, index) => (
                  <div key={message.id}>
                    {index === 0 || messages[index - 1].timestamp !== message.timestamp ? (
                      <div className="text-center text-xs text-gray-500 mb-2">
                        {message.timestamp}
                      </div>
                    ) : null}
                    
                    <div className={`flex items-end gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      {message.sender === 'doctor' && (
                        <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-semibold">
                          Dr
                        </div>
                      )}
                      
                      <div className={`max-w-[70%] px-3 py-2 rounded-lg text-sm ${
                        message.sender === 'user' 
                          ? 'bg-teal-600 text-white rounded-br-sm' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-sm'
                      }`}>
                        {message.text}
                      </div>
                      
                      {message.sender === 'user' && (
                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-semibold">
                          You
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 rounded-full px-3 py-2">
                  <Plus className="w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message…"
                    className="flex-1 bg-transparent outline-none text-sm text-gray-900 dark:text-white placeholder:text-gray-500"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center hover:bg-teal-700"
                  >
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}