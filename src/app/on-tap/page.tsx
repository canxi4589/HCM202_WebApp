"use client";

import React, { useState } from "react";
import { BookOpen, MessageCircle, ChevronLeft, ChevronRight, HelpCircle, Bot, Sparkles, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/header";
import ChatbotInterface from "@/components/ChatbotInterface";
import { AnswerOption, hoChiMinhThoughtQuiz, Question } from "../quiz/constant/quiz";

type TabType = "quiz" | "chatbot" | "qna";

const StudyRecapPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>("quiz");
  
  // Quiz state
  const [current, setCurrent] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(hoChiMinhThoughtQuiz.length).fill(null)
  );
  const [showHint, setShowHint] = useState(false);

  const question: Question = hoChiMinhThoughtQuiz[current];

  // Quiz handlers
  const handleSelect = (idx: number) => {
    const newSelected = [...selectedAnswers];
    newSelected[current] = idx;
    setSelectedAnswers(newSelected);
  };

  const nextQuestion = () => {
    if (selectedAnswers[current] === null) return;
    setShowHint(false);
    setCurrent((prev) => Math.min(prev + 1, hoChiMinhThoughtQuiz.length - 1));
  };

  const prevQuestion = () => {
    setShowHint(false);
    setCurrent((prev) => Math.max(prev - 1, 0));
  };

  const handleRetry = () => {
    setSelectedAnswers(Array(hoChiMinhThoughtQuiz.length).fill(null));
    setCurrent(0);
    setShowHint(false);
  };

  // Chatbot message handler
  const handleChatMessage = async (message: string): Promise<string> => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Chat error:', error);
      return 'Xin lỗi, tôi gặp sự cố kỹ thuật. Vui lòng thử lại sau.';
    }
  };

  // Tab component
  const TabButton = ({ tab, label, icon: Icon }: { tab: TabType; label: string; icon: React.ComponentType<any> }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
        activeTab === tab
          ? "bg-red-600 text-white shadow-lg transform scale-105"
          : "bg-white/80 text-gray-700 hover:bg-white hover:shadow-md hover:scale-102"
      }`}
    >
      <Icon size={24} />
      <span className="text-lg">{label}</span>
    </button>
  );

  // Quiz Component
  const QuizSection = () => (
    <div className="w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl p-8"
        >
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-red-900">
                Câu {question.questionNumber}: {question.question}
              </h2>
              <div className="bg-red-100 px-4 py-2 rounded-full">
                <span className="text-red-700 font-semibold">
                  {current + 1} / {hoChiMinhThoughtQuiz.length}
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 mb-8">
            {question.answerOptions.map((option: AnswerOption, idx: number) => {
              const isSelected = selectedAnswers[current] === idx;
              const isCorrect = option.isCorrect;

              return (
                <motion.div
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 min-h-[80px] flex flex-col justify-center ${
                    isSelected
                      ? isCorrect
                        ? "bg-green-50 border-green-500 text-green-900 shadow-lg"
                        : "bg-red-50 border-red-500 text-red-900 shadow-lg"
                      : "bg-white border-gray-300 hover:bg-gray-50 hover:border-gray-400 text-gray-900"
                  }`}
                >
                  <p className="font-medium text-lg mb-2">{option.text}</p>
                  {isSelected && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`text-sm italic ${
                        isCorrect ? "text-green-700" : "text-red-700"
                      }`}
                    >
                      💡 {option.rationale}
                    </motion.p>
                  )}
                </motion.div>
              );
            })}
          </div>

          {showHint ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 mb-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg"
            >
              <div className="flex items-start gap-3">
                <HelpCircle className="text-yellow-600 mt-1" size={20} />
                <p className="text-yellow-800 font-medium">{question.hint}</p>
              </div>
            </motion.div>
          ) : (
            <button
              onClick={() => setShowHint(true)}
              className="mb-6 px-6 py-3 border-2 rounded-lg text-yellow-700 border-yellow-400 hover:bg-yellow-50 flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <HelpCircle size={20} /> 
              <span className="font-semibold">Xem gợi ý</span>
            </button>
          )}

          <div className="flex justify-between items-center">
            <button
              onClick={prevQuestion}
              disabled={current === 0}
              className="px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-all duration-300"
            >
              <ChevronLeft size={20} /> 
              <span className="font-semibold">Câu trước</span>
            </button>

            {current === hoChiMinhThoughtQuiz.length - 1 ? (
              <button
                onClick={handleRetry}
                disabled={selectedAnswers[current] === null}
                className="px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-all duration-300 hover:scale-105"
              >
                <span className="font-semibold">Làm lại bài quiz</span>
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                disabled={selectedAnswers[current] === null}
                className="px-6 py-3 rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-all duration-300 hover:scale-105"
              >
                <span className="font-semibold">Câu tiếp theo</span>
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );

  // Q&A Section Component  
  const QnASection = () => (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl p-8 text-center"
      >
        <div className="mb-6">
          <ExternalLink size={64} className="mx-auto text-blue-600 mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Hỏi đáp trực tuyến
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Tham gia thảo luận và trao đổi kiến thức về tư tưởng Hồ Chí Minh với cộng đồng học tập
          </p>
        </div>

      

        <motion.button
          onClick={() => window.open('https://padlet.com/trincse182497/hcm202-t-t-ng-h-ch-minh-v-ch-ngh-a-x-h-i-v-x-y-d-ng-ch-ngh-a-actxusylrbo7ao9u', '_blank')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
        >
          <ExternalLink size={24} />
          <span>Truy cập diễn đàn hỏi đáp</span>
        </motion.button>

        <p className="text-sm text-gray-500 mt-4">
          * Liên kết sẽ mở trong tab mới
        </p>
      </motion.div>
    </div>
  );

  // Chatbot Component (Real Implementation)
  const ChatbotSection = () => (
    <div className="w-full max-w-4xl mx-auto">
      <ChatbotInterface onSendMessage={handleChatMessage} />
    </div>
  );

  return (
    <>
      <Header />
      
      <div
        className="relative flex flex-col items-center justify-center pt-20 min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background.png')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              📚 Ôn tập & Học tập
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Củng cố kiến thức về tư tưởng Hồ Chí Minh qua quiz hoặc chatbot AI
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4 mb-8"
          >
            <TabButton tab="quiz" label="Quiz Ôn tập" icon={BookOpen} />
            <TabButton tab="chatbot" label="Chatbot AI" icon={MessageCircle} />
            <TabButton tab="qna" label="Hỏi đáp" icon={ExternalLink} />
          </motion.div>

          {/* Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              {activeTab === "quiz" ? (
                <motion.div
                  key="quiz"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                >
                  <QuizSection />
                </motion.div>
              ) : activeTab === "chatbot" ? (
                <motion.div
                  key="chatbot"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChatbotSection />
                </motion.div>
              ) : (
                <motion.div
                  key="qna"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <QnASection />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default StudyRecapPage;