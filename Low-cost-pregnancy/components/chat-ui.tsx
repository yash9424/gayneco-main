"use client"

import { useState, useEffect, useRef } from 'react'
import { ArrowLeft, MoreHorizontal, Plus, Send } from 'lucide-react'

interface Message {
  id: number
  content: string
  isSent: boolean
  timestamp: Date
}

export default function ChatUI() {
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
    // Start conversation automatically
    const timer = setTimeout(() => {
      addDoctorMessage("Hello, what is your name and age?")
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

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

    // Handle doctor response
    setTimeout(() => {
      handleDoctorResponse(userMessage)
    }, 1000)
  }

  const handleDoctorResponse = (userMessage: string) => {
    let response = ''
    
    switch (conversationStep) {
      case 0:
        response = "Are you currently pregnant or planning to be pregnant?"
        setConversationStep(1)
        break
      case 1:
        response = "Thank you for that information. How can I help you today? Feel free to ask me anything about pregnancy, prenatal care, or our services."
        setConversationStep(2)
        break
      default:
        const responses = [
          "I understand. Can you tell me more about that?",
          "That's important information. What other questions do you have?",
          "I'm here to help. Is there anything specific you'd like to know?",
          "Thank you for sharing. How else can I assist you today?",
          "I see. Would you like to schedule an appointment or learn more about our services?"
        ]
        response = responses[Math.floor(Math.random() * responses.length)]
        break
    }

    addDoctorMessage(response)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden h-[600px] flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 flex items-center justify-between">
        <button className="p-1 hover:bg-white/20 rounded-full transition-colors">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-semibold">Messages</h1>
        <button className="p-1 hover:bg-white/20 rounded-full transition-colors">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
        <div className="text-center text-xs text-gray-500 mb-4">Today</div>
        
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-end gap-2 ${message.isSent ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
              message.isSent ? 'bg-gray-500' : 'bg-green-500'
            }`}>
              {message.isSent ? 'U' : 'Dr'}
            </div>
            <div
              className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm ${
                message.isSent
                  ? 'bg-blue-500 text-white rounded-br-md'
                  : 'bg-white text-gray-800 rounded-bl-md shadow-sm'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-gray-200 flex items-center gap-3">
        <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
          <Plus size={20} />
        </button>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message…"
          className="flex-1 px-4 py-2 bg-gray-100 rounded-full border-none outline-none text-sm"
        />
        <button
          onClick={handleSendMessage}
          disabled={!inputValue.trim()}
          className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  )
}