'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

interface ChatProps {
  siteName: string
}

export default function UniversalChat({ siteName }: ChatProps) {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [showForm, setShowForm] = useState(true)
  const [userInfo, setUserInfo] = useState({ name: '', age: '', contact: '' })
  const [messages, setMessages] = useState<any[]>([])
  const [currentMessage, setCurrentMessage] = useState('')
  const [conversationId, setConversationId] = useState('')

  const startChat = async () => {
    try {
      const response = await fetch('http://localhost:3011/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `Hello, I'm ${userInfo.name}. I need help.`,
          project: siteName,
          userInfo
        })
      })
      
      const data = await response.json()
      
      if (data.success) {
        setConversationId(data.chatId)
        setShowForm(false)
        setMessages([{
          _id: Date.now(),
          message: `Hello, I'm ${userInfo.name}. I need help.`,
          isAdmin: false,
          timestamp: new Date()
        }])
      }
    } catch (err) {
      console.error('Failed to start chat:', err)
    }
  }

  const sendMessage = async () => {
    if (!currentMessage.trim() || !conversationId) return
    
    const messageToSend = currentMessage
    setCurrentMessage('')
    
    // Add message to local state immediately
    const newMessage = {
      _id: Date.now(),
      message: messageToSend,
      isAdmin: false,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
    
    try {
      await fetch('http://localhost:3011/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: messageToSend, 
          project: siteName,
          userInfo,
          isAdmin: false,
          chatId: conversationId
        })
      })
    } catch (err) {
      console.error('Failed to send message:', err)
    }
  }

  useEffect(() => {
    if (conversationId) {
      const interval = setInterval(async () => {
        try {
          const response = await fetch(`http://localhost:3011/api/chat?chatId=${conversationId}`)
          const data = await response.json()
          setMessages(data)
        } catch (err) {
          console.error('Failed to fetch messages:', err)
        }
      }, 2000)
      
      return () => clearInterval(interval)
    }
  }, [conversationId])

  return (
    <>
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-all duration-300 transform hover:scale-110"
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {isChatOpen && (
        <div className="fixed bottom-20 right-6 z-50">
          <div className="bg-white rounded-xl shadow-2xl w-96 h-[500px] flex flex-col border">
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-t-xl">
              <h3 className="font-bold">Chat with Us</h3>
              <button
                onClick={() => {
                  setIsChatOpen(false)
                  setShowForm(true)
                  setMessages([])
                  setConversationId('')
                }}
                className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            {showForm ? (
              <div className="flex-1 p-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      value={userInfo.name}
                      onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                    <input
                      type="number"
                      value={userInfo.age}
                      onChange={(e) => setUserInfo({...userInfo, age: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Your age"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
                    <input
                      type="text"
                      value={userInfo.contact}
                      onChange={(e) => setUserInfo({...userInfo, contact: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Phone or email"
                    />
                  </div>
                  <button
                    onClick={startChat}
                    disabled={!userInfo.name || !userInfo.age || !userInfo.contact}
                    className="w-full py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:from-pink-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Start Chat
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 p-4 bg-gray-50 overflow-y-auto">
                  {messages.map((msg) => (
                    <div key={msg._id} className={`mb-3 ${msg.isAdmin ? 'text-left' : 'text-right'}`}>
                      <div className={`inline-block p-3 rounded-lg shadow-sm max-w-xs ${
                        msg.isAdmin 
                          ? 'bg-white text-gray-700 border' 
                          : 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
                      }`}>
                        <p className="text-sm">{msg.message}</p>
                        <p className="text-xs mt-1 opacity-70">
                          {new Date(msg.timestamp).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-b-xl">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button 
                      onClick={sendMessage}
                      className="px-3 py-2 bg-white text-pink-600 rounded-lg hover:bg-gray-100"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}