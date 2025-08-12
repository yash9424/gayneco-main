'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowLeft, MoreHorizontal, Plus, Send, User, Phone, Calendar } from 'lucide-react'

interface Message {
  id: number
  text: string
  isSent: boolean
  timestamp: Date
}

interface UserInfo {
  name: string
  age: string
  phone: string
}

export default function ChatUI() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [showUserForm, setShowUserForm] = useState(true)
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', age: '', phone: '' })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const questions = [
    'Are you currently pregnant or planning to be pregnant?',
    'When was your last menstrual period?',
    'Have you taken a pregnancy test before?'
  ]

  useEffect(() => {
    if (!showUserForm && messages.length === 0) {
      const timer = setTimeout(() => {
        addDoctorMessage(`Hello ${userInfo.name}! I'm here to help you with your pregnancy questions. ${questions[0]}`)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [showUserForm, userInfo.name])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleUserInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (userInfo.name.trim() && userInfo.age.trim() && userInfo.phone.trim()) {
      setShowUserForm(false)
    }
  }

  const addDoctorMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      isSent: false,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const sendMessage = () => {
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isSent: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newMessage])
    setInputValue('')

    if (questionIndex < questions.length - 1) {
      const nextIndex = questionIndex + 1
      setQuestionIndex(nextIndex)
      
      setTimeout(() => {
        addDoctorMessage(questions[nextIndex])
      }, 1500)
    } else {
      setTimeout(() => {
        addDoctorMessage('Thank you for sharing this information. Based on what you\'ve told me, I recommend scheduling a consultation with our medical team. Would you like me to help you book an appointment?')
      }, 1500)
    }
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  if (showUserForm) {
    return (
      <div className="max-w-md mx-auto h-[600px] bg-white border border-gray-200 rounded-xl flex flex-col shadow-lg md:max-w-sm">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white rounded-t-xl">
          <ArrowLeft className="w-6 h-6 text-gray-600 cursor-pointer" />
          <h1 className="text-lg font-semibold text-gray-900">Chat with Doctor</h1>
          <MoreHorizontal className="w-6 h-6 text-gray-600 cursor-pointer" />
        </div>

        {/* User Info Form */}
        <div className="flex-1 flex items-center justify-center p-6 bg-gray-50">
          <div className="w-full max-w-sm">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Welcome to Our Chat</h2>
              <p className="text-gray-600 text-sm">Please provide your information to get started</p>
            </div>
            
            <form onSubmit={handleUserInfoSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={userInfo.name}
                    onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="number"
                    value={userInfo.age}
                    onChange={(e) => setUserInfo(prev => ({ ...prev, age: e.target.value }))}
                    placeholder="Enter your age"
                    min="13"
                    max="100"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="tel"
                    value={userInfo.phone}
                    onChange={(e) => setUserInfo(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="(555) 123-4567"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-emerald-500 text-white py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 outline-none"
              >
                Start Chat
              </button>
            </form>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              Your information is secure and will only be used for medical consultation purposes.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto h-[600px] bg-white border border-gray-200 rounded-xl flex flex-col shadow-lg md:max-w-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white rounded-t-xl">
        <ArrowLeft className="w-6 h-6 text-gray-600 cursor-pointer" />
        <div className="text-center">
          <h1 className="text-lg font-semibold text-gray-900">Dr. Sarah</h1>
          <p className="text-xs text-gray-500">Chatting with {userInfo.name}</p>
        </div>
        <MoreHorizontal className="w-6 h-6 text-gray-600 cursor-pointer" />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
        <div className="text-center text-xs text-gray-500 mb-4">
          Today {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
        
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isSent ? 'justify-end' : 'justify-start'} mb-2`}
          >
            <div className={`flex flex-col ${message.isSent ? 'items-end' : 'items-start'} max-w-[70%]`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mb-1 ${
                message.isSent 
                  ? 'bg-gray-200 text-gray-700' 
                  : 'bg-emerald-500 text-white'
              }`}>
                {message.isSent ? userInfo.name.charAt(0).toUpperCase() : 'Dr'}
              </div>
              <div className={`px-4 py-3 rounded-2xl text-sm ${
                message.isSent
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white text-gray-900 border border-gray-200'
              }`}>
                {message.text}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex items-center p-4 border-t border-gray-200 bg-white rounded-b-xl">
        <Plus className="w-6 h-6 text-gray-400 mr-3 cursor-pointer" />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message…"
          className="flex-1 border-none outline-none text-sm text-gray-900 placeholder-gray-400"
        />
        <button
          onClick={sendMessage}
          disabled={!inputValue.trim()}
          className="w-9 h-9 bg-emerald-500 text-white rounded-full flex items-center justify-center ml-3 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export type { UserInfo }