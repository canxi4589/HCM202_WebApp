// components/ChatbotInterface.tsx
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ExampleQuestions from './ExampleQuestions';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotInterfaceProps {
  onSendMessage?: (message: string) => Promise<string>;
}

const ChatbotInterface: React.FC<ChatbotInterfaceProps> = ({ onSendMessage }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '## AI Bot chào bạn!\n\nAI Bot chuyên về **tư tưởng Hồ Chí Minh**. AI Bot có thể giúp bạn tìm hiểu về:\n\n### **Các chủ đề chính:**\n- Tư tưởng độc lập dân tộc\n- Đạo đức cách mạng\n- Quan điểm giáo dục\n- Chủ nghĩa xã hội Việt Nam\n\n**Bạn muốn tìm hiểu điều gì?**',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Sử dụng API hoặc logic chatbot
      const response = onSendMessage 
        ? await onSendMessage(userMessage.text)
        : await getDefaultResponse(userMessage.text);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Xin lỗi, tôi gặp sự cố kỹ thuật. Vui lòng thử lại sau.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const getDefaultResponse = async (message: string): Promise<string> => {
    // Phản hồi cơ bản dựa trên từ khóa
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('độc lập')) {
      return 'Tư tưởng về độc lập dân tộc của Hồ Chí Minh được thể hiện rõ nét trong Tuyên ngôn độc lập 1945: "Tất cả mọi người đều sinh ra có quyền bình đẳng. Tạo hóa cho họ những quyền không ai có thể xâm phạm được; trong những quyền ấy, có quyền được sống, quyền tự do và quyền mưu cầu hạnh phúc."';
    }
    
    if (lowerMessage.includes('chủ nghĩa xã hội')) {
      return 'Theo Hồ Chí Minh, chủ nghĩa xã hội ở Việt Nam phải phù hợp với điều kiện cụ thể của đất nước, với mục tiêu "dân giàu, nước mạnh, xã hội công bằng, dân chủ, văn minh".';
    }
    
    if (lowerMessage.includes('dân chủ')) {
      return 'Hồ Chí Minh nhấn mạnh: "Dân chủ phải là do dân, vì dân". Người quan niệm dân chủ thực sự là dân được làm chủ đất nước, quyết định vận mệnh của mình.';
    }
    
    return 'Cảm ơn câu hỏi của bạn! Đây là một chủ đề sâu sắc trong tư tưởng Hồ Chí Minh. Bạn có thể đặt câu hỏi cụ thể hơn về các khía cạnh như độc lập dân tộc, chủ nghĩa xã hội, dân chủ, hay các quan điểm khác của Người.';
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleExampleQuestion = (question: string) => {
    setInputMessage(question);
    // Tự động gửi câu hỏi
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  return (
    <div className="space-y-6">
      {/* Example Questions - chỉ hiển thị khi chưa có tin nhắn nào */}
      {messages.length <= 1 && (
        <ExampleQuestions onQuestionClick={handleExampleQuestion} />
      )}
      
      {/* Main Chat Interface */}
      <div className="bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl p-6 h-[600px] flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
          <Bot className="text-white" size={20} />
        </div>
        <div>
          <h3 className="font-bold text-gray-800">AI Tư tưởng Hồ Chí Minh</h3>
          <p className="text-sm text-gray-600">Trợ lý học tập thông minh</p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <div className="flex items-start gap-2">
                  {message.sender === 'bot' && (
                    <Bot size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                  )}
                  {message.sender === 'user' && (
                    <User size={16} className="text-white mt-1 flex-shrink-0" />
                  )}
                  <div className={`text-sm leading-relaxed ${
                    message.sender === 'bot' ? 'prose prose-sm max-w-none' : ''
                  }`}>
                    {message.sender === 'bot' ? (
                      <ReactMarkdown
                        components={{
                          h1: ({ ...props }) => <h1 className="text-lg font-bold text-red-600 mb-2" {...props} />,
                          h2: ({ ...props }) => <h2 className="text-base font-semibold text-red-500 mb-2 mt-3" {...props} />,
                          h3: ({ ...props }) => <h3 className="text-sm font-medium text-gray-700 mb-1 mt-2" {...props} />,
                          p: ({ ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                          ul: ({ ...props }) => <ul className="list-disc pl-4 mb-2 space-y-1" {...props} />,
                          li: ({ ...props }) => <li className="text-sm" {...props} />,
                          strong: ({ ...props }) => <strong className="font-semibold text-red-600" {...props} />,
                          em: ({ ...props }) => <em className="italic text-gray-600" {...props} />,
                          code: ({ ...props }) => <code className="bg-gray-100 px-1 py-0.5 rounded text-xs" {...props} />
                        }}
                      >
                        {message.text}
                      </ReactMarkdown>
                    ) : (
                      <span>{message.text}</span>
                    )}
                  </div>
                </div>
                <p className={`text-xs mt-2 ${
                  message.sender === 'user' ? 'text-red-100' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString('vi-VN', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="bg-gray-100 p-3 rounded-lg flex items-center gap-2">
              <Loader className="animate-spin text-blue-500" size={16} />
              <span className="text-sm text-gray-600">Đang xử lý...</span>
            </div>
          </motion.div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="flex gap-2">
        <textarea
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Hỏi về tư tưởng Hồ Chí Minh: độc lập, dân chủ, xã hội chủ nghĩa, đạo đức..."
          className="flex-1 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          rows={2}
          disabled={isLoading}
        />
        <button
          onClick={handleSendMessage}
          disabled={!inputMessage.trim() || isLoading}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
    </div>
  );
};

export default ChatbotInterface;