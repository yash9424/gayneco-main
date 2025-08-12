'use client';

import { useState, useEffect, useRef } from 'react';
import { X, MessageSquare, Send, User as UserIcon, Bot } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string; sender: 'user' | 'bot'}>>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: ''
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.age && formData.phone) {
      setIsChatStarted(true);
      // Add welcome message
      setMessages([
        { text: `Hello ${formData.name}! I'm your virtual assistant. How can I help you today?`, sender: 'bot' },
        { text: 'I can help you with:\n• Appointment scheduling\n• Service information\n• Insurance questions\n• And more!', sender: 'bot' }
      ]);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage = { text: inputMessage, sender: 'user' as const };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    
    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "I understand you'd like to know more about our services. We offer same-day ultrasounds and pregnancy care.",
        "For scheduling an appointment, you can call us at (123) 456-7890 or visit our website.",
        "Our office is open Monday to Friday from 9 AM to 5 PM. Would you like to schedule an appointment?",
        "For insurance questions, we accept most major insurance plans. Would you like me to check if we accept yours?",
        "Thank you for your message. One of our representatives will be with you shortly."
      ];
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { text: randomResponse, sender: 'bot' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 overflow-hidden">
          <div className="bg-medical-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">Chat with Us</h3>
            <button 
              onClick={() => {
                setIsOpen(false);
                if (!isChatStarted) {
                  setIsChatStarted(false);
                  setFormData({ name: '', age: '', phone: '' });
                }
              }}
              className="text-white hover:text-gray-200"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="p-4 bg-gray-50 h-96 overflow-y-auto">
            {!isChatStarted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-sm text-gray-600 mb-4">Please provide your details to start chatting</p>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-medical-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                    Age *
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    required
                    min="1"
                    max="120"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-medical-500 focus:border-transparent"
                    placeholder="Your age"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-medical-500 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-medical-600 text-white py-2 px-4 rounded-md hover:bg-medical-700 transition-colors focus:outline-none focus:ring-2 focus:ring-medical-500 focus:ring-offset-2"
                >
                  Start Chat
                </button>
              </form>
            ) : (
              <div className="h-full flex flex-col">
                {/* Chat Header */}
                {/* <div className="border-b border-gray-200 p-4 bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-medical-100 flex items-center justify-center mr-3">
                      <MessageSquare className="w-5 h-5 text-medical-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Medical Support</h4>
                      <p className="text-xs text-gray-500">Online</p>
                    </div>
                  </div>
                </div> */}
                
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {/* Messages will be rendered from the messages state */}
                  {messages.map((message, index) => (
                    <div 
                      key={index} 
                      className={`flex items-start space-x-2 ${
                        message.sender === 'user' ? 'justify-end' : ''
                      }`}
                    >
                      {message.sender === 'bot' && (
                        <div className="w-8 h-8 rounded-full bg-medical-600 flex-shrink-0 flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <div 
                        className={`rounded-lg p-3 max-w-[80%] ${
                          message.sender === 'user' 
                            ? 'bg-medical-600 text-white' 
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                      </div>
                      {message.sender === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center">
                          <UserIcon className="w-4 h-4 text-gray-600" />
                        </div>
                      )}
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
                
                {/* Message Input */}
                <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-medical-500 focus:border-transparent text-sm"
                    />
                    <button
                      type="submit"
                      className="bg-medical-600 text-white p-2 rounded-full hover:bg-medical-700 transition-colors focus:outline-none focus:ring-2 focus:ring-medical-500 focus:ring-offset-2"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-medical-600 text-white p-4 rounded-full shadow-lg hover:bg-medical-700 transition-colors focus:outline-none focus:ring-2 focus:ring-medical-500 focus:ring-offset-2"
          aria-label="Open chat"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
}
