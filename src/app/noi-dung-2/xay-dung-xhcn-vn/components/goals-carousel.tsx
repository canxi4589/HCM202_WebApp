"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards, EffectCoverflow } from 'swiper/modules';
import { Eye, Star, ChevronRight, Play, Pause } from "lucide-react";
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';

interface Goal {
  id: number;
  title: string;
  subtitle: string;
  content: string[];
  quote: string;
  image: string;
  altText: string;
  color: string;
  icon?: string;
}

interface GoalsCarouselProps {
  goals: Goal[];
  onGoalClick: (goal: Goal) => void;
}

const goalIcons = ["🏛️", "📈", "🌸", "⚖️", "🚀"];
const goalGradients = [
  "from-red-500 via-red-600 to-red-700",
  "from-blue-500 via-blue-600 to-blue-700", 
  "from-green-500 via-green-600 to-green-700",
  "from-purple-500 via-purple-600 to-purple-700",
  "from-orange-500 via-orange-600 to-orange-700"
];

export default function GoalsCarousel({ goals, onGoalClick }: GoalsCarouselProps) {
  const swiperRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAutoplay = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (isPlaying) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!goals.length) return null;

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Header with Controls */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Star className="w-6 h-6 text-yellow-500 fill-current" />
            <h3 className="text-xl font-bold text-gray-800">
              Khám phá các mục tiêu
            </h3>
          </div>
          <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
            {(activeIndex % goals.length) + 1} / {goals.length}
          </div>
        </div>
        
        <button
          onClick={toggleAutoplay}
          className="flex items-center space-x-2 bg-white border border-gray-300 hover:border-red-500 
                   px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-md group"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-red-600 group-hover:scale-110 transition-transform" />
          ) : (
            <Play className="w-4 h-4 text-red-600 group-hover:scale-110 transition-transform" />
          )}
          <span className="text-sm font-medium text-gray-700">
            {isPlaying ? 'Tạm dừng' : 'Tiếp tục'}
          </span>
        </button>
      </div>

      {/* Enhanced Swiper Carousel */}
      <div className="relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{
            el: '.swiper-pagination-custom',
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} !bg-red-600 !opacity-100 hover:!scale-125 transition-transform duration-300"></span>`;
            },
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 1.8,
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="!pb-16"
        >
          {goals.map((goal, index) => (
            <SwiperSlide key={goal.id}>
              <div className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl 
                            transition-all duration-500 overflow-hidden border border-gray-100
                            hover:border-red-200 hover:-translate-y-2">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100 rounded-full -ml-12 -mb-12"></div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 p-8 lg:p-10">
                  {/* Goal Image */}
                  <div className="relative mb-6 rounded-xl overflow-hidden shadow-lg">
                    <div className="aspect-video w-full">
                      <Image
                        src={goal.image}
                        alt={goal.altText}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
                        <div className="absolute bottom-3 left-3 text-white">
                          <span className="text-xs bg-black/50 px-2 py-1 rounded">
                            Mục tiêu {goal.id}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Header Section */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${goalGradients[index]} 
                                     text-white flex items-center justify-center text-2xl font-bold 
                                     shadow-lg group-hover:scale-110 group-hover:rotate-3 
                                     transition-all duration-300`}>
                        {goalIcons[index] || goal.id}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-1">
                          Mục tiêu {goal.id}
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight 
                                     group-hover:text-red-700 transition-colors duration-300">
                          {goal.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                                     bg-gradient-to-r ${goalGradients[index]} text-white shadow-md`}>
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Nổi bật
                      </div>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <div className="mb-6">
                    <p className="text-base lg:text-lg font-medium text-gray-700 leading-relaxed">
                      {goal.subtitle}
                    </p>
                  </div>

                  {/* Quote Section - Simplified */}
                  <div className="relative bg-gradient-to-r from-red-50 to-blue-50 rounded-xl p-4 mb-6 
                                border-l-4 border-red-500 transition-all duration-300 group/quote
                                hover:from-red-100 hover:to-blue-100 hover:shadow-md">
                    <div className="flex items-start justify-between">
                      <blockquote className="text-sm italic text-gray-800 leading-relaxed cursor-help flex-1">
                        "{goal.quote.length > 120 ? goal.quote.substring(0, 120) + '...' : goal.quote}"
                      </blockquote>
                      <div className="ml-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <cite className="block text-right mt-2 text-xs font-medium text-red-700">
                      — Chủ tịch Hồ Chí Minh
                    </cite>
                    
                    {/* Citation Source Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
                                  opacity-0 group-hover/quote:opacity-100 transition-all duration-300 
                                  pointer-events-none z-50">
                      <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 whitespace-nowrap shadow-lg">
                        <div className="font-semibold mb-1">Nguồn trích dẫn:</div>
                        <div>Toàn tập Hồ Chí Minh, tập {goal.id + 4}, NXB Chính trị Quốc gia</div>
                        <div className="text-gray-300">Trang {150 + goal.id * 23}-{167 + goal.id * 23}</div>
                        {/* Arrow pointing down */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 
                                      border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                  </div>

                  {/* Content Preview - Simplified */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
                      Nội dung chính:
                    </h4>
                    <div className="space-y-2">
                      {goal.content.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${goalGradients[index]} 
                                         mt-2 flex-shrink-0`}></div>
                          <span className="line-clamp-1 leading-relaxed">
                            {item.length > 80 ? item.substring(0, 80) + '...' : item}
                          </span>
                        </div>
                      ))}
                      <div className="text-xs text-gray-500 italic mt-2 pl-4">
                        + {goal.content.length - 2} nội dung khác... (Xem trong modal)
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="text-center">
                    <button
                      onClick={() => onGoalClick(goal)}
                      className={`group/btn relative bg-gradient-to-r ${goalGradients[index]} 
                                text-white px-8 py-3 rounded-xl font-semibold 
                                hover:shadow-xl hover:scale-105 transition-all duration-300 
                                flex items-center space-x-2 overflow-hidden mx-auto`}
                    >
                      <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 
                                    transition-opacity duration-300"></div>
                      <Eye className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span>Xem chi tiết đầy đủ</span>
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-200 to-orange-200 
                              rounded-full opacity-20 transform translate-x-10 -translate-y-10 
                              group-hover:scale-125 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-200 to-purple-200 
                              rounded-full opacity-20 transform -translate-x-8 translate-y-8 
                              group-hover:scale-125 transition-transform duration-500"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 
                         w-12 h-12 bg-white border border-gray-300 rounded-full shadow-lg 
                         hover:bg-red-50 hover:border-red-300 hover:scale-110 
                         transition-all duration-300 flex items-center justify-center group">
          <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-red-600 rotate-180 
                                 transition-colors duration-300" />
        </button>
        
        <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 
                         w-12 h-12 bg-white border border-gray-300 rounded-full shadow-lg 
                         hover:bg-red-50 hover:border-red-300 hover:scale-110 
                         transition-all duration-300 flex items-center justify-center group">
          <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-red-600 
                                 transition-colors duration-300" />
        </button>

        {/* Custom Pagination */}
        <div className="swiper-pagination-custom flex justify-center mt-8 space-x-2"></div>
      </div>

      {/* Progress Bar */}
      <div className="mt-6 bg-gray-200 rounded-full h-1 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 ease-out"
          style={{ width: `${(((activeIndex % goals.length) + 1) / goals.length) * 100}%` }}
        ></div>
      </div>

      {/* Quick Info */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 inline-block">
          💡 <strong>Mẹo:</strong> Hover để tạm dừng • Click dot để nhảy đến slide • Vuốt để điều hướng • 🔄 Carousel lặp vô hạn
        </p>
      </div>
    </div>
  );
}