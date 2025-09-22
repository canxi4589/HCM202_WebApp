// components/ExampleQuestions.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Lightbulb } from 'lucide-react';

interface ExampleQuestionsProps {
  onQuestionClick: (question: string) => void;
}

const ExampleQuestions: React.FC<ExampleQuestionsProps> = ({ onQuestionClick }) => {
  const exampleQuestions = [
    {
      category: "Quan niệm về chủ nghĩa xã hội",
      questions: [
        "Quan niệm của Hồ Chí Minh về chủ nghĩa xã hội là gì?",
        "Tại sao Hồ Chí Minh nhấn mạnh mục tiêu 'dân giàu, nước mạnh'?",
        "Cách Hồ Chí Minh kết hợp chủ nghĩa Mác-Lênin với thực tiễn Việt Nam?"
      ]
    },
    {
      category: "Tính tất yếu và đặc trưng",
      questions: [
        "Vì sao tiến lên chủ nghĩa xã hội là tất yếu khách quan?",
        "Đặc trưng của xã hội xã hội chủ nghĩa theo Hồ Chí Minh là gì?",
        "Vai trò của chế độ công hữu trong chủ nghĩa xã hội?"
      ]
    },
    {
      category: "Mục tiêu chủ nghĩa xã hội",
      questions: [
        "Mục tiêu xây dựng nền văn hóa dân tộc, khoa học, đại chúng là gì?",
        "Mối quan hệ giữa các mục tiêu chính trị, kinh tế, xã hội như thế nào?",
        "Làm sao để đạt được xã hội dân chủ, công bằng, văn minh?"
      ]
    },
    {
      category: "Thời kỳ quá độ và động lực",
      questions: [
        "Thời kỳ quá độ lên chủ nghĩa xã hội có đặc điểm gì?",
        "Nguyên tắc xây dựng chủ nghĩa xã hội trong thời kỳ quá độ là gì?",
        "Tại sao nội lực dân tộc là động lực quyết định?"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
      <div className="flex items-center gap-3 mb-4">
        <Lightbulb className="text-orange-500" size={24} />
        <h3 className="text-lg font-bold text-gray-800">Câu hỏi gợi ý</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {exampleQuestions.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: categoryIndex * 0.1 }}
            className="bg-white rounded-lg p-4 shadow-sm"
          >
            <h4 className="font-semibold text-gray-700 mb-3 text-sm">
              {category.category}
            </h4>
            <div className="space-y-2">
              {category.questions.map((question, questionIndex) => (
                <button
                  key={questionIndex}
                  onClick={() => onQuestionClick(question)}
                  className="w-full text-left p-2 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200 flex items-start gap-2"
                >
                  <MessageCircle size={14} className="mt-1 flex-shrink-0 text-blue-400" />
                  <span className="leading-relaxed">{question}</span>
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          Click vào câu hỏi để gửi ngay, hoặc tự do đặt câu hỏi của bạn!
        </p>
      </div>
    </div>
  );
};

export default ExampleQuestions;