"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface UserInfo {
  name: string;
  age: string;
  phone: string;
}

interface Message {
  sender: "user" | "bot";
  text: string;
}

const initialQuestions = [
  { key: "name", question: "What is your name?" },
  { key: "age", question: "What is your age?" },
  { key: "phone", question: "What is your phone number?" },
];

export default function Chatbox() {
  const [open, setOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: "", age: "", phone: "" });
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [chatStarted, setChatStarted] = useState(false);

  // Bot reply samples for demo
  const contactNumber = "(623) 846-7597";
  const botReplies = [
    `Hi! How can I assist you today?\nContact: ${contactNumber}`,
    `Can you please provide more details?\nContact: ${contactNumber}`,
    `Your request has been noted.\nContact: ${contactNumber}`,
    `Is there anything else I can help you with?\nContact: ${contactNumber}`
  ];
  let botReplyIndex = 0;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    if (!chatStarted) {
      const currentKey = initialQuestions[step].key as keyof UserInfo;
      setUserInfo({ ...userInfo, [currentKey]: input });
      setMessages([
        ...messages,
        { sender: "user", text: input },
        { sender: "bot", text: step < 2 ? initialQuestions[step + 1].question : "Thank you! Let's start chatting." },
      ]);
      setInput("");
      if (step < 2) {
        setStep(step + 1);
      } else {
        setChatStarted(true);
        // Start chat with bot's greeting
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { sender: "bot" as const, text: botReplies[0] }
          ]);
        }, 800);
      }
    } else {
      // User sends a message
      setMessages((prev) => [
        ...prev,
        { sender: "user" as const, text: input }
      ]);
      setInput("");
      // Bot replies after short delay
      setTimeout(() => {
        botReplyIndex = (messages.filter(m => m.sender === "bot").length + 1) % botReplies.length;
        setMessages((prev) => [
          ...prev,
          { sender: "bot" as const, text: botReplies[botReplyIndex] }
        ]);
      }, 900);
    }
  };

  const handleCall = () => {
    alert("Call OK");
  };

  React.useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ sender: "bot", text: initialQuestions[0].question }]);
    }
  }, []);

  return (
    <>
      {/* Floating Chat Icon Button */}
      {!open && (
        <button
          className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none"
          aria-label="Open Chat"
          onClick={() => setOpen(true)}
        >
          <img src="/chat-icon.svg" alt="Chat Icon" className="w-8 h-8" />
        </button>
      )}
      
      {/* Responsive Chatbox UI */}
      {open && (
        <div className="fixed bottom-0 right-0 sm:bottom-4 sm:right-4 w-full sm:w-[95%] md:w-[28rem] z-50 rounded-t-lg sm:rounded-lg shadow-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex flex-col h-[90vh] sm:h-[70vh] md:h-[75vh] max-h-screen animate-fade-in">
          <div className="flex items-center justify-between p-3 border-b border-gray-100 dark:border-gray-800 bg-blue-600 rounded-t-lg">
            <span className="text-white font-semibold">Chat with Us</span>
            <button
              className="text-white hover:text-gray-200 text-xl font-bold focus:outline-none"
              aria-label="Close Chat"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
          
          {/* Enhanced Question Form */}
          {!chatStarted ? (
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Let's Get Started!</h3>
                <p className="text-gray-500 dark:text-gray-400">Please share a few details to help us assist you better</p>
              </div>
              
              <div className="space-y-4 sm:space-y-6 max-w-md mx-auto">
                {initialQuestions.map((q, index) => (
                  <div key={q.key} className="group relative">
                    <div className="flex items-center mb-1">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2">
                        <span className="text-blue-600 dark:text-blue-300 text-xs font-bold">{index + 1}</span>
                      </div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {q.question}
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type={q.key === 'age' ? 'number' : q.key === 'phone' ? 'tel' : 'text'}
                        value={userInfo[q.key as keyof UserInfo]}
                        onChange={(e) => setUserInfo({ ...userInfo, [q.key]: e.target.value })}
                        className="w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-800 dark:text-white"
                        placeholder={`Enter your ${q.key}`}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        {q.key === 'name' && (
                          <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        )}
                        {q.key === 'age' && (
                          <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                          </svg>
                        )}
                        {q.key === 'phone' && (
                          <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="pt-2">
                  <Button 
                    onClick={() => {
                      if (userInfo.name && userInfo.age && userInfo.phone) {
                        setChatStarted(true);
                        setMessages([
                          { sender: 'bot', text: `Hello ${userInfo.name}! Thank you for providing your details. How can I assist you today?` }
                        ]);
                      }
                    }}
                    disabled={!userInfo.name || !userInfo.age || !userInfo.phone}
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] ${
                      !userInfo.name || !userInfo.age || !userInfo.phone 
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl'
                    }`}
                  >
                    Start Chatting
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Button>
                  
                  <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-3">
                    We respect your privacy. Your information is secure with us.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`px-4 py-2 rounded-xl max-w-[80%] text-sm ${
                        msg.sender === "user"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Chat Input */}
              <div className="p-3 sm:p-4 border-t border-gray-100 dark:border-gray-800 flex gap-2 items-center bg-white dark:bg-gray-900">
                <input
                  type="text"
                  value={input}
                  onChange={handleInput}
                  placeholder="Type your message..."
                  onKeyPress={(e) => e.key === 'Enter' && input.trim() && handleSend()}
                  className="flex-1 rounded-lg border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-0"
                />
                <Button 
                  onClick={handleSend} 
                  disabled={!input.trim()} 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Send
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
