'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X, Send, Plus, ArrowLeft, MoreHorizontal, User, Phone, Calendar } from 'lucide-react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<any[]>([])
  const [inputValue, setInputValue] = useState('')
  const [showForm, setShowForm] = useState(true)
  const [formData, setFormData] = useState({ name: '', age: '', phone: '' })
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const handleToggleChat = () => setIsOpen(prev => !prev)
    window.addEventListener('toggleChat', handleToggleChat)
    return () => window.removeEventListener('toggleChat', handleToggleChat)
  }, [])

  useEffect(() => {
    if (isOpen && !showForm && messages.length === 0) {
      setTimeout(() => {
        setMessages([{
          id: 1,
          text: `Hello ${formData.name}! How can I help you today?`,
          sender: 'doctor',
          time: new Date()
        }])
      }, 1000)
    }
  }, [isOpen, showForm, messages.length, formData.name])

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.age.trim() || !formData.phone.trim()) return
    
    setUserName(formData.name)
    setShowForm(false)
  }

  const sendMessage = () => {
    if (!inputValue.trim()) return

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      time: new Date()
    }

    setMessages(prev => [...prev, newMessage])
    
    setTimeout(() => {
      handleDoctorResponse(inputValue)
    }, 1000)

    setInputValue('')
  }

  const handleDoctorResponse = (userText: string) => {
    const responses = [
      "I understand. Let me help you with that.",
      "That's a great question. Can you tell me more?",
      "I'm here to help. What specific concerns do you have?",
      "Would you like to schedule an appointment to discuss this further?",
      "Based on your age and concerns, I'd recommend scheduling a consultation.",
      "Let me connect you with our pregnancy care specialists."
    ]
    const doctorResponse = responses[Math.floor(Math.random() * responses.length)]

    const doctorMessage = {
      id: messages.length + 2,
      text: doctorResponse,
      sender: 'doctor',
      time: new Date()
    }

    setMessages(prev => [...prev, doctorMessage])
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    })
  }

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-background border border-border rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
            <ArrowLeft className="w-5 h-5 cursor-pointer" onClick={() => setIsOpen(false)} />
            <span className="font-semibold">{showForm ? 'Get Started' : 'Messages'}</span>
            <MoreHorizontal className="w-5 h-5 cursor-pointer" />
          </div>

          {showForm ? (
            /* Contact Form */
            <div className="flex-1 p-6 flex flex-col justify-center">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Let's Get Started!</h3>
                <p className="text-sm text-muted-foreground">Please provide your information to begin our conversation</p>
              </div>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  />
                </div>
                
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="number"
                    placeholder="Your age"
                    value={formData.age}
                    onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    min="18"
                    max="50"
                    required
                  />
                </div>
                
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 mt-6"
                >
                  Start Chat →
                </button>
              </form>
              
              <p className="text-xs text-muted-foreground text-center mt-4">
                Your information is secure and will only be used to provide you with personalized care.
              </p>
            </div>
          ) : (
            /* Chat Interface */
            <>
              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto bg-muted/30">
                {messages.length > 0 && (
                  <div className="text-center text-xs text-muted-foreground mb-4">
                    Today {formatTime(messages[0].time)}
                  </div>
                )}
                
                {messages.map((message, index) => (
                  <div key={message.id} className="mb-4">
                    <div className={`flex items-start gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      {/* Avatar */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                          : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      }`}>
                        {message.sender === 'user' ? 'U' : 'Dr'}
                      </div>
                      
                      {/* Message Bubble */}
                      <div className={`max-w-[70%] px-4 py-2 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-tr-sm'
                          : 'bg-background border border-border text-foreground rounded-tl-sm'
                      }`}>
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                    
                    {/* Time indicator between message groups */}
                    {index < messages.length - 1 && messages[index + 1].sender !== message.sender && (
                      <div className="text-center text-xs text-muted-foreground my-3">
                        {formatTime(message.time)}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 bg-background border-t border-border">
                <div className="flex items-center gap-3">
                  <Plus className="w-5 h-5 text-muted-foreground cursor-pointer" />
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type your message…"
                    className="flex-1 px-4 py-2 bg-muted rounded-full text-sm border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-muted-foreground"
                  />
                  <button
                    onClick={sendMessage}
                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center hover:from-blue-700 hover:to-purple-700 transition-colors"
                  >
                    <Send className="w-4 h-4" />
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