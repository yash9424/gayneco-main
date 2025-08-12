'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Send, MessageCircle, User, Calendar, Phone, X } from 'lucide-react';

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

export default function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    age: '',
    mobile: ''
  });
  const [formErrors, setFormErrors] = useState<Partial<UserInfo>>({});
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Partial<UserInfo> = {};
    
    if (!userInfo.name.trim()) errors.name = 'Name is required';
    if (!userInfo.age.trim()) errors.age = 'Age is required';
    if (!userInfo.mobile.trim()) {
      errors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(userInfo.mobile)) {
      errors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Save user info to localStorage
    localStorage.setItem('chatUserInfo', JSON.stringify(userInfo));
    
    // Hide form and show chat
    setShowForm(false);
    
    // Add welcome message
    const welcomeMessage = {
      id: 1,
      text: `Hello ${userInfo.name}! I'm your pregnancy assistant. How can I help you today?`,
      sender: 'assistant' as const,
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
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
      return `Hello ${userInfo.name}! I'm here to help with any pregnancy-related questions you might have. What would you like to know?`;
    } else {
      return "I'm here to help with pregnancy-related questions. Could you please rephrase your question or ask about pregnancy tests, symptoms, or appointments?";
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-8 right-8 z-50">
        <Button 
          onClick={() => setIsOpen(true)}
          className="rounded-full h-16 w-16 bg-blue-600 hover:bg-blue-700 shadow-lg"
          size="icon"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-8 right-8 z-50 w-80 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col" style={{ height: '500px' }}>
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h3 className="font-semibold text-lg">
          {showForm ? 'Enter Your Details' : 'Pregnancy Assistant'}
        </h3>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-gray-200"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      {showForm ? (
        <div className="flex-1 p-6 overflow-y-auto">
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                  placeholder="Enter your full name"
                  className={`pl-10 ${formErrors.name ? 'border-red-500' : ''}`}
                />
              </div>
              {formErrors.name && <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="number"
                  value={userInfo.age}
                  onChange={(e) => setUserInfo({...userInfo, age: e.target.value})}
                  placeholder="Enter your age"
                  min="1"
                  max="100"
                  className={`pl-10 ${formErrors.age ? 'border-red-500' : ''}`}
                />
              </div>
              {formErrors.age && <p className="mt-1 text-sm text-red-600">{formErrors.age}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="tel"
                  value={userInfo.mobile}
                  onChange={(e) => setUserInfo({...userInfo, mobile: e.target.value})}
                  placeholder="Enter 10-digit mobile number"
                  className={`pl-10 ${formErrors.mobile ? 'border-red-500' : ''}`}
                />
              </div>
              {formErrors.mobile && <p className="mt-1 text-sm text-red-600">{formErrors.mobile}</p>}
            </div>
            
            <div className="pt-2">
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Start Chat
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-xs rounded-lg px-4 py-2 ${
                    message.sender === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
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
          <div className="border-t border-gray-200 p-3 bg-white">
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
        </>
      )}
    </div>
  );
}
