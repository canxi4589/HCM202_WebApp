"use client";

import { useEffect } from "react";
import { X, Quote, CheckCircle, ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";

interface ExampleLink {
  text: string;
  url: string;
  title: string;
}

interface Goal {
  id: number;
  title: string;
  subtitle: string;
  content: string[];
  exampleLinks?: ExampleLink[];
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

export default function GoalDetailModal({ goal, isOpen, onClose }: GoalDetailModalProps) {
  // Handle ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
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

  const getExamples = (content: string[]) => {
    return content.filter(item => 
      item.includes('Ví dụ') || 
      item.includes('•') || 
      item.startsWith('+') ||
      item.includes('Petrovietnam') ||
      item.includes('EVN') ||
      item.includes('VNPT')
    );
  };

  const getMainContent = (content: string[]) => {
    return content.filter(item => 
      !item.includes('Ví dụ') && 
      !item.includes('•') && 
      !item.startsWith('+') &&
      !item.includes('Petrovietnam') &&
      !item.includes('EVN') &&
      !item.includes('VNPT') &&
      item.length > 20
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all">
          {/* Header */}
          <div className={`relative bg-gradient-to-r ${goal.color} text-white p-6 md:p-8`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 
                       backdrop-blur-sm rounded-full flex items-center justify-center 
                       transition-colors duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start space-x-4 pr-12">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl">
                {goal.id}
              </div>
              <div>
                <div className="text-sm font-medium opacity-90 mb-1">
                  Mục tiêu {goal.id}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
                  {goal.title}
                </h2>
                <p className="text-lg opacity-95">
                  {goal.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-h-[70vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              {/* Quote Section */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-red-600">
                <div className="flex items-start space-x-3">
                  <Quote className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <blockquote className="text-lg italic text-gray-800 leading-relaxed mb-3">
                      "{goal.quote}"
                    </blockquote>
                    <cite className="text-red-700 font-medium">
                      — Chủ tịch Hồ Chí Minh
                    </cite>
                  </div>
                </div>
              </div>

              {/* Main Content and Image */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Main Content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Nội dung chính
                  </h3>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <ul className="space-y-3">
                      {getMainContent(goal.content).map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image */}
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={goal.image}
                      alt={goal.altText}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium bg-black bg-opacity-50 backdrop-blur-sm px-3 py-1 rounded">
                        {goal.altText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Examples Section */}
              {goal.exampleLinks && goal.exampleLinks.length > 0 && (
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <ArrowRight className="w-5 h-5 text-blue-600 mr-2" />
                    Ví dụ thực tiễn
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {goal.exampleLinks.map((example, index) => (
                      <a
                        key={index}
                        href={example.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={example.title}
                        className="group bg-white rounded-lg p-4 border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-start justify-between">
                          <p className="text-gray-700 text-sm leading-relaxed group-hover:text-blue-700 transition-colors duration-300">
                            {example.text}
                          </p>
                          <ExternalLink className="w-4 h-4 text-blue-500 ml-2 flex-shrink-0 group-hover:text-blue-700 transition-colors duration-300" />
                        </div>
                        <div className="mt-2 text-xs text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Click để tìm hiểu thêm →
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Points Summary */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Trích Nguồn
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-red-600 font-bold">{goal.id}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-700">Mục tiêu thứ {goal.id}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-blue-600 font-bold">{goal.content.length}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-700">Nội dung chi tiết</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-green-600 font-bold">{getExamples(goal.content).length}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-700">Ví dụ thực tiễn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 md:px-8 py-4 border-t">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">
                Tư tưởng Hồ Chí Minh về xây dựng chủ nghĩa xã hội ở Việt Nam
              </p>
              <button
                onClick={onClose}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg 
                         transition-colors duration-300 text-sm font-medium"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}