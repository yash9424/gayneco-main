'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
};

type UserInfo = {
  name: string;
  age: string;
  mobile: string;
};

export default function ChatScreen() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Load user info from localStorage on component mount
  useEffect(() => {
    const savedUserInfo = typeof window !== 'undefined' ? localStorage.getItem('chatUserInfo') : null;
    if (savedUserInfo) {
      setUserInfo(JSON.parse(savedUserInfo));
      
      // Add welcome message if no messages exist
      if (messages.length === 0) {
        const welcomeMessage = {
          id: 1,
          text: `Hello ${JSON.parse(savedUserInfo).name}! I'm your pregnancy assistant. How can I help you today?`,
          sender: 'assistant' as const,
          timestamp: new Date(),
        };
        setMessages([welcomeMessage]);
      }
    }
  }, []);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue('');

    // Simulate assistant response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: messages.length + 2,
        text: getResponse(inputValue),
        sender: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };

  const getResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('pregnancy test') || lowerMessage.includes('test')) {
      return "You can take a home pregnancy test as early as the first day of your missed period. For the most accurate results, take the test first thing in the morning when your urine is most concentrated.";
    } else if (lowerMessage.includes('symptom') || lowerMessage.includes('sign')) {
      return "Common early pregnancy symptoms include missed period, nausea (morning sickness), breast tenderness, fatigue, frequent urination, and food aversions. However, these symptoms can vary from person to person.";
    } else if (lowerMessage.includes('appointment') || lowerMessage.includes('doctor')) {
      return "It's recommended to schedule your first prenatal visit when you get a positive pregnancy test. Call us at 623-846-7597 to book your appointment.";
    } else if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey')) {
      return `Hello ${userInfo?.name}! I'm here to help with any pregnancy-related questions you might have. What would you like to know?`;
    } else {
      return "I'm here to help with pregnancy-related questions. Could you please rephrase your question or ask about pregnancy tests, symptoms, or appointments?";
    }
  };

  if (!userInfo) {
    // If no user info, redirect to home
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex items-center">
          <Link href="/" className="mr-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-blue-700">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-xl font-bold">Pregnancy Assistant</h1>
            <p className="text-sm opacity-80">Chat with our assistant</p>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 container mx-auto max-w-4xl">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2 ${
                message.sender === 'user' 
                  ? 'bg-blue-600 text-white rounded-br-none' 
                  : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
              }`}
            >
              {message.text}
              <div className="text-xs mt-1 opacity-70 text-right">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
      <div className="border-t border-gray-200 bg-white p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex space-x-2">
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button 
              onClick={handleSendMessage}
              className="bg-blue-600 hover:bg-blue-700"
              size="icon"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
