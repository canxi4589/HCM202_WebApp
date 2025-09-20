"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/header";
import VideoPlayer from "@/components/video-player";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { revolutionSteps } from "./constants/revolution-steps";
import RevolutionStepCard from "./components/revolution-step-card";
import RevolutionContent from "./components/revolution-content";

gsap.registerPlugin(ScrollTrigger);

export default function CachMangGiaiPhongDanToc() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  const scrollToSection = (index: number) => {
    setCurrentStep(index);
    const targetElement = document.querySelector(`.content-section-${index}`);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
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

      revolutionSteps.forEach((_, index) => {
        gsap.fromTo(
          `.content-section-${index}`,
          {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: `.content-section-${index}`,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });
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

      {/* Back Button */}
      {/* <button
        onClick={() => router.push("/")}
        className="fixed left-2 top-20 sm:left-6 sm:top-24 z-40 flex items-center gap-1 sm:gap-2 
                   bg-white/90 hover:bg-white text-red-800 font-semibold 
                   px-2 py-2 sm:px-4 sm:py-2 rounded-lg shadow-lg backdrop-blur-sm
                   transition-all duration-300 hover:scale-105 cursor-pointer
                   text-xs sm:text-sm"
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="hidden sm:inline">Trang chủ</span>
      </button> */}

      {/* Header Section */}
      <section className="header-section relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/giai-phong-dan-toc/cach-mang-giai-phong-dan-toc.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-3 sm:px-6 max-w-6xl w-full mt-20 sm:mt-24">
          <h1
            className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold text-white mb-4 sm:mb-6 
                         drop-shadow-2xl leading-tight md:pt-20 whitespace-nowrap"
          >
            Thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam
          </h1>
          <p className="text-sm sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-2">
            Tính chất, đặc điểm và nhiệm vụ của thời kỳ quá độ
          </p>

          <VideoPlayer
            src="/videos/tuyen-ngon-doc-lap.mp4"
            poster="/images/giai-phong-dan-toc/tuyen-ngon-doc-lap.jpg"
            title="Tuyên ngôn độc lập"
            subtitle="2 tháng 9 năm 1945"
            className="max-w-xs sm:max-w-2xl lg:max-w-5xl mx-auto mb-6 sm:mb-8"
          />
        </div>
      </section>

      {/* Steps Overview */}
      <section className="steps-container py-12 sm:py-20 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-16 px-2">
            Hai luận điểm cơ bản
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {revolutionSteps.map((step, index) => (
              <RevolutionStepCard
                key={step.id}
                step={step}
                index={index}
                currentStep={currentStep}
                onClick={scrollToSection}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content Sections */}
      {revolutionSteps.map((step, index) => (
        <RevolutionContent key={step.id} step={step} index={index} />
      ))}

      {/* Conclusion Section */}
      <section className="py-12 sm:py-20 px-3 sm:px-6 bg-gradient-to-br from-red-800 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
            Ý nghĩa lịch sử
          </h2>
          <p className="text-base sm:text-xl leading-relaxed mb-6 sm:mb-8 px-2">
            Tư tưởng Hồ Chí Minh về cách mạng giải phóng dân tộc không chỉ có ý
            nghĩa đối với Việt Nam mà còn đóng góp quan trọng vào kho tàng lý
            luận cách mạng của nhân loại.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                Sáng tạo lý luận
              </h3>
              <p className="text-sm sm:text-base">
                Bổ sung và phát triển chủ nghĩa Mác-Lênin phù hợp với điều kiện
                Việt Nam
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                Thực tiễn thành công
              </h3>
              <p className="text-sm sm:text-base">
                Dẫn dắt cách mạng Việt Nam từ thắng lợi này đến thắng lợi khác
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                Giá trị toàn cầu
              </h3>
              <p className="text-sm sm:text-base">
                Định hướng cho các dân tộc bị áp bức trên thế giới
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
