"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/header";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { revolutionSteps } from "./constants/revolution-steps";

gsap.registerPlugin(ScrollTrigger);

export default function CachMangGiaiPhongDanToc() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const contentSectionRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  const scrollToStep = (index: number) => {
    setCurrentStep(index);
    
    // Scroll xuống content section, điều chỉnh để scroll sâu hơn
    if (contentSectionRef.current) {
      const rect = contentSectionRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset + rect.top + 200; // Thêm 100px để scroll xuống sâu hơn
      
      window.scrollTo({
        top: scrollTop,
        behavior: "smooth"
      });
      
      // Sau đó scroll horizontal slider
      setTimeout(() => {
        if (sliderRef.current) {
          const stepWidth = sliderRef.current.scrollWidth / revolutionSteps.length;
          sliderRef.current.scrollTo({
            left: stepWidth * index,
            behavior: "smooth",
          });
        }
      }, 800);
    }
  };

  const scrollToStepOnly = (index: number) => {
    setCurrentStep(index);
    if (sliderRef.current) {
      const stepWidth = sliderRef.current.scrollWidth / revolutionSteps.length;
      sliderRef.current.scrollTo({
        left: stepWidth * index,
        behavior: "smooth",
      });
    }
  };

  const handleSliderScroll = () => {
    if (sliderRef.current) {
      const stepWidth = sliderRef.current.scrollWidth / revolutionSteps.length;
      const scrollLeft = sliderRef.current.scrollLeft;
      const newCurrentStep = Math.round(scrollLeft / stepWidth);
      setCurrentStep(newCurrentStep);
    }
  };

  const nextStep = () => {
    const next = Math.min(revolutionSteps.length - 1, currentStep + 1);
    scrollToStepOnly(next);
  };

  const prevStep = () => {
    const prev = Math.max(0, currentStep - 1);
    scrollToStepOnly(prev);
  };

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".header-section", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
      });

      // Steps animation
      gsap.fromTo(
        ".step-card",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".steps-container",
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      // Content slider animation
      gsap.fromTo(
        ".content-slider",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".content-slider",
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <Header />
      <ScrollToTopButton />

      {/* Header Section */}
      <section className="header-section relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/thoi-ky-qua-do/dangcongsan.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-3 sm:px-6 max-w-6xl w-full mt-20 sm:mt-24">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-4 sm:mb-6 drop-shadow-2xl leading-tight md:pt-20">
            Thời kỳ quá độ lên Chủ Nghĩa Xã Hội ở Việt Nam
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-2">
            Tính chất, đặc điểm và nhiệm vụ của thời kỳ quá độ
          </p>
        </div>
      </section>

      {/* Steps Overview */}
      <section className="steps-container py-12 sm:py-20 px-3 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-16 px-2">
            Các luận điểm cơ bản
          </h2>

          {/* Grid container with better centering */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl w-full">
              {revolutionSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`step-card cursor-pointer group relative overflow-hidden
                             bg-gradient-to-br ${step.color} text-white p-4 sm:p-6 rounded-xl
                             shadow-lg hover:shadow-xl transition-all duration-300
                             hover:-translate-y-1 min-h-[200px] sm:min-h-[240px] flex flex-col
                             ${currentStep === index ? 'ring-4 ring-blue-400 scale-105 shadow-2xl' : ''}`}
                  onClick={() => scrollToStep(index)}
                >
                  <div className="relative z-10 flex-1 flex flex-col justify-center">
                    <div className="text-3xl sm:text-4xl font-bold mb-4 text-center">
                      {step.id}
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold mb-2 leading-tight text-center px-2">
                      {step.title.length > 50 ? step.title.substring(0, 50) + "..." : step.title}
                    </h3>
                    {step.subtitle && (
                      <p className="text-xs sm:text-sm opacity-90 text-center px-2">{step.subtitle}</p>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 bg-white/30 rounded-full group-hover:scale-150 transition-transform duration-300" />
                  
                  {/* Click indicator */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call-to-action text */}
          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm animate-pulse">
              👆 Click vào một luận điểm để xem nội dung chi tiết bên dưới
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Content Slider */}
      <section 
        ref={contentSectionRef}
        className="content-slider py-12 sm:py-20 bg-gradient-to-br from-slate-100 to-slate-200"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          {/* Navigation Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nội dung chi tiết
            </h2>
            <p className="text-gray-600 mb-6">
              Luận điểm {currentStep + 1} / {revolutionSteps.length}
            </p>
            
            {/* Progress Bar */}
            <div className="max-w-md mx-auto bg-gray-300 rounded-full h-2 mb-6">
              <div 
                className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentStep + 1) / revolutionSteps.length) * 100}%` }}
              />
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mb-6">
              {revolutionSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToStepOnly(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentStep === index
                      ? "bg-red-600 scale-125"
                      : "bg-gray-400 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Horizontal Slider Container */}
          <div className="relative">
            <div
              ref={sliderRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              onScroll={handleSliderScroll}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {revolutionSteps.map((step, index) => (
                <div
                  key={step.id}
                  className="min-w-full snap-center px-4"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    index % 2 === 0 ? "" : "lg:grid-flow-col-dense"
                  }`}>
                    
                    {/* Content */}
                    <div className={`space-y-6 ${index % 2 === 0 ? "" : "lg:order-2"}`}>
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 bg-gradient-to-br ${step.color} text-white rounded-xl flex items-center justify-center text-xl font-bold`}>
                          {step.id}
                        </div>
                        <div>
                          <div className="text-sm text-red-600 font-medium mb-1">
                            Luận điểm {step.id}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="bg-red-50 border-l-4 border-red-500 p-4 sm:p-6 rounded-r-lg">
                        <blockquote className="text-lg italic text-gray-700 mb-3">
                          "{step.quote}"
                        </blockquote>
                        <cite className="block text-right text-red-600 font-medium text-sm">
                          — {step.author}
                        </cite>
                      </div>

                      {/* Content List */}
                      <div className="space-y-4">
                        {step.content.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                            <p className="text-gray-700 leading-relaxed">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Image */}
                    <div className={`relative ${index % 2 === 0 ? "" : "lg:order-1"}`}>
                      <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-2xl group">
                        <Image
                          src={step.image}
                          alt={step.altText}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white text-sm font-medium">
                            {step.altText}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-10"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextStep}
              disabled={currentStep === revolutionSteps.length - 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-10"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium transition-all duration-300 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Trước
            </button>
            <button
              onClick={nextStep}
              disabled={currentStep === revolutionSteps.length - 1}
              className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Tiếp →
            </button>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-12 sm:py-20 px-3 sm:px-6 bg-gradient-to-br from-red-800 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
            Ý nghĩa lịch sử
          </h2>
          <p className="text-base sm:text-xl leading-relaxed mb-6 sm:mb-8 px-2">
            Tư tưởng Hồ Chí Minh về thời kỳ quá độ lên chủ nghĩa xã hội không chỉ có ý
            nghĩa đối với Việt Nam mà còn đóng góp quan trọng vào kho tàng lý
            luận cách mạng của nhân loại.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                Sáng tạo lý luận
              </h3>
              <p className="text-sm sm:text-base">
                Bổ sung và phát triển chủ nghĩa Mác-Lênin phù hợp với điều kiện Việt Nam
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                Thực tiễn thành công
              </h3>
              <p className="text-sm sm:text-base">
                Dẫn dắt Việt Nam từ một nước nông nghiệp lạc hậu tiến lên CNXH
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                Giá trị toàn cầu
              </h3>
              <p className="text-sm sm:text-base">
                Định hướng cho các nước đang phát triển trên thế giới
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}