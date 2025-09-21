"use client";

import { useEffect } from "react";
import { X, Quote, CheckCircle, ArrowRight, Star, Sparkles } from "lucide-react";

interface Goal {
  id: number;
  title: string;
  subtitle: string;
  content: string[];
  quote: string;
  image: string;
  altText: string;
  color: string;
}

interface GoalDetailModalProps {
  goal: Goal | null;
  isOpen: boolean;
  onClose: () => void;
}

const goalGradients = [
  "from-red-500 via-red-600 to-red-700",
  "from-blue-500 via-blue-600 to-blue-700", 
  "from-green-500 via-green-600 to-green-700",
  "from-purple-500 via-purple-600 to-purple-700",
  "from-orange-500 via-orange-600 to-orange-700"
];

const goalIcons = ["🏛️", "📈", "🌸", "⚖️", "🚀"];

export default function EnhancedGoalModal({ goal, isOpen, onClose }: GoalDetailModalProps) {
  // Handle ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !goal) return null;

  const goalIndex = goal.id - 1;
  const gradient = goalGradients[goalIndex] || goalGradients[0];

  // Parse content to separate examples from main content
  const mainContent = goal.content.filter(item => !item.toLowerCase().includes('ví dụ:'));
  const examples = goal.content.filter(item => item.toLowerCase().includes('ví dụ:'));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Enhanced Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 animate-fadeIn"
        onClick={onClose}
        style={{
          animation: 'fadeIn 0.3s ease-out forwards'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-blue-900/20"></div>
      </div>
      
      {/* Modal Container */}
      <div 
        className="relative z-10 w-full max-w-6xl mx-4 max-h-[90vh] overflow-hidden opacity-0"
        style={{
          animation: 'modalSlideUp 0.4s ease-out forwards'
        }}
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          
          {/* Header Section */}
          <div className={`relative bg-gradient-to-r ${gradient} text-white overflow-hidden`}>
            {/* Background Pattern */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
              <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            
            <div className="relative z-10 p-8 lg:p-12">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl
                                shadow-xl border border-white/30">
                    {goalIcons[goalIndex] || goal.id}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="w-5 h-5 fill-current text-yellow-300" />
                      <span className="text-sm font-semibold text-yellow-200 uppercase tracking-wide">
                        Mục tiêu {goal.id}
                      </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-2">
                      {goal.title}
                    </h2>
                    <p className="text-lg text-white/90 font-medium">
                      {goal.subtitle}
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={onClose}
                  className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl 
                           flex items-center justify-center transition-all duration-300 
                           hover:scale-110 hover:rotate-90 border border-white/30"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Quote Section */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <Quote className="w-8 h-8 text-white/70 flex-shrink-0 mt-1" />
                  <div>
                    <blockquote className="text-lg lg:text-xl italic leading-relaxed mb-3">
                      "{goal.quote}"
                    </blockquote>
                    <cite className="text-sm font-medium text-white/80">
                      — Chủ tịch Hồ Chí Minh
                    </cite>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
            <div className="p-8 lg:p-12 space-y-8">
              
              {/* Main Content */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${gradient} 
                                 flex items-center justify-center`}>
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Nội dung chi tiết
                  </h3>
                </div>
                
                <div className="grid gap-4">
                  {mainContent.map((item, index) => (
                    <div 
                      key={index}
                      className="group flex items-start space-x-4 p-4 bg-gray-50 rounded-xl 
                               hover:bg-gray-100 transition-all duration-300 hover:shadow-md"
                    >
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${gradient} 
                                     flex items-center justify-center flex-shrink-0 mt-1
                                     group-hover:scale-110 transition-transform duration-300`}>
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Examples Section */}
              {examples.length > 0 && (
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${gradient} 
                                   flex items-center justify-center`}>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Ví dụ minh họa
                    </h3>
                  </div>
                  
                  <div className="grid gap-4">
                    {examples.map((example, index) => (
                      <div 
                        key={index}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 
                                 border border-blue-100 hover:border-blue-200 transition-all duration-300"
                      >
                        <p className="text-gray-800 leading-relaxed">
                          {example.replace(/^ví dụ:\s*/i, '')}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Summary Box */}
              <div className={`bg-gradient-to-r ${gradient} rounded-2xl p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <Star className="w-6 h-6 fill-current" />
                    <h3 className="text-lg font-bold">
                      Tóm tắt mục tiêu
                    </h3>
                  </div>
                  <p className="text-white/90 leading-relaxed">
                    Mục tiêu này tập trung vào việc {goal.title.toLowerCase()}, 
                    đóng vai trò quan trọng trong tư tưởng Hồ Chí Minh về xây dựng 
                    chủ nghĩa xã hội tại Việt Nam.
                  </p>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-white/80">
                      <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                      <span>{mainContent.length} nội dung chính</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-white/80">
                      <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                      <span>{examples.length} ví dụ minh họa</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Section */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-500">
                  💡 Nhấn <kbd className="px-2 py-1 bg-gray-100 rounded font-mono text-xs">ESC</kbd> để đóng
                </div>
                
                <button
                  onClick={onClose}
                  className={`bg-gradient-to-r ${gradient} text-white px-6 py-3 rounded-xl 
                            font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 
                            flex items-center space-x-2`}
                >
                  <span>Đóng</span>
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}