'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

interface UserInfo {
  name: string
  contact: string
  age: string
}

export default function Chatbox() {
  const [isOpen, setIsOpen] = useState(false)
  const [showForm, setShowForm] = useState(true)
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', contact: '', age: '' })
  const [messages, setMessages] = useState<Message[]>([])
  const [currentMessage, setCurrentMessage] = useState('')

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (userInfo.name && userInfo.contact && userInfo.age) {
      setShowForm(false)
      // Add welcome message
      const welcomeMessage: Message = {
        id: 1,
        text: `Hello ${userInfo.name}! Welcome to WIC Pregnancy Help Arizona. How can I assist you today?`,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentMessage.trim()) {
      const userMessage: Message = {
        id: messages.length + 1,
        text: currentMessage,
        sender: 'user',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, userMessage])
      setCurrentMessage('')
      
      // Auto-reply after 1 second
      setTimeout(() => {
        const botReply: Message = {
          id: messages.length + 2,
          text: "Thank you for your message. Our team will get back to you shortly. For immediate assistance, please call us at 623-846-7597.",
          sender: 'bot',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, botReply])
      }, 1000)
    }
  }

  const resetChat = () => {
    setShowForm(true)
    setMessages([])
    setUserInfo({ name: '', contact: '', age: '' })
    setCurrentMessage('')
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-pink-300 to-purple-300 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          boxShadow: ["0 0 0 0 rgba(99, 102, 241, 0.5)", "0 0 0 10px rgba(99, 102, 241, 0)", "0 0 0 0 rgba(99, 102, 241, 0)"]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MessageCircle className="w-7 h-7 mx-auto" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-4 sm:right-6 w-80 sm:w-96 h-[450px] sm:h-[500px] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-base">WIC Support</h3>
                  <p className="text-sm text-pink-100">Online now</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="h-[370px] sm:h-[420px] flex flex-col bg-white">
              {showForm ? (
                /* User Info Form */
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-center bg-white">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">
                    Welcome to WIC Support
                  </h4>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <Input
                      placeholder="Your Name"
                      value={userInfo.name}
                      onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                      required
                      className="rounded-lg border-gray-300"
                    />
                    <Input
                      placeholder="Phone/Email"
                      value={userInfo.contact}
                      onChange={(e) => setUserInfo(prev => ({ ...prev, contact: e.target.value }))}
                      required
                      className="rounded-lg border-gray-300"
                    />
                    <Input
                      placeholder="Age"
                      value={userInfo.age}
                      onChange={(e) => setUserInfo(prev => ({ ...prev, age: e.target.value }))}
                      required
                      className="rounded-lg border-gray-300"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-300 to-purple-300 hover:from-pink-400 hover:to-purple-400 rounded-lg py-3 text-base font-semibold"
                    >
                      Start Chat
                    </Button>
                  </form>
                </div>
              ) : (
                /* Chat Interface */
                <>
                  {/* Messages */}
                  <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3 sm:space-y-4 bg-white">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs sm:max-w-sm px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm ${
                            message.sender === 'user'
                              ? 'bg-gradient-to-r from-pink-300 to-purple-300 text-white'
                              : 'bg-gray-50 text-gray-800 border border-gray-200'
                          }`}
                        >
                          {message.text}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-3 sm:p-4 border-t border-white/20 bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400">
                    <form onSubmit={handleSendMessage} className="flex space-x-2 sm:space-x-3">
                      <Input
                        placeholder="Type your message..."
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                        className="flex-1 rounded-lg bg-white/20 border-white/30 text-white placeholder:text-pink-100"
                      />
                      <Button
                        type="submit"
                        size="sm"
                        className="bg-gradient-to-r from-pink-200 to-purple-300 hover:from-pink-300 hover:to-purple-400 rounded-lg px-3 sm:px-4"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </form>
                    <button
                      onClick={resetChat}
                      className="text-xs text-pink-100 hover:text-white mt-3 transition-colors"
                    >
                      Start new chat
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}