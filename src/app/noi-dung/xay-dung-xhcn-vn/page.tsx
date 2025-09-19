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
import SocialismProgress from "./components/socialism-progress";
import GoalsCarousel from './components/goals-carousel';
import GoalDetailModal from './components/goal-detail-modal';
import './styles/animations.css';

gsap.registerPlugin(ScrollTrigger);

export default function XayDungChuNghiaXaHoiVietNam() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedGoal, setSelectedGoal] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGoalClick = (goal: any) => {
    setSelectedGoal(goal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGoal(null);
  };

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
      <section className="header-section relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-700">
        <Image
          src="/images/giai-phong-dan-toc/cach-mang-giai-phong-dan-toc.jpg"
          alt="Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl w-full mt-16 sm:mt-20">
          {/* Academic Title */}
          <div className="mb-8">
            <p className="text-yellow-300 text-sm sm:text-base font-medium tracking-wider uppercase mb-4">
              Tư tưởng Hồ Chí Minh - HCM202
            </p>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Tư tưởng Hồ Chí Minh về 
              <span className="block text-yellow-300 mt-2">
                xây dựng chủ nghĩa xã hội ở Việt Nam
              </span>
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Nghiên cứu về mục tiêu, động lực và con đường xây dựng 
              xã hội chủ nghĩa theo tư tưởng của Chủ tịch Hồ Chí Minh
            </p>
          </div>

          {/* Key Principles Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-2xl mb-2">🏛️</div>
              <h3 className="text-white font-semibold text-sm">Mục tiêu chính trị</h3>
              <p className="text-white/80 text-xs mt-1">Dân chủ xã hội chủ nghĩa</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-2xl mb-2">📈</div>
              <h3 className="text-white font-semibold text-sm">Mục tiêu kinh tế</h3>
              <p className="text-white/80 text-xs mt-1">Phát triển toàn diện</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-2xl mb-2">�</div>
              <h3 className="text-white font-semibold text-sm">Mục tiêu văn hóa</h3>
              <p className="text-white/80 text-xs mt-1">Dân tộc - Khoa học - Đại chúng</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-2xl mb-2">⚖️</div>
              <h3 className="text-white font-semibold text-sm">Mục tiêu xã hội</h3>
              <p className="text-white/80 text-xs mt-1">Công bằng - Văn minh</p>
            </div>
          </div>

          {/* Key Quote */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-yellow-400/30 max-w-4xl mx-auto">
            <blockquote className="text-lg sm:text-xl text-white italic leading-relaxed">
              "Muốn xây dựng chủ nghĩa xã hội, trước hết cần có những con người xã hội chủ nghĩa"
            </blockquote>
            <cite className="block text-yellow-300 font-medium mt-3">
              — Chủ tịch Hồ Chí Minh
            </cite>
          </div>
        </div>
      </section>

      {/* Content Overview with Carousel */}
      <section className="steps-container py-16 sm:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header with Hero Image */}
          <div className="text-center mb-16">
            {/* Hero Image */}
            <div className="relative mb-12">
              <div className="relative w-full max-w-4xl mx-auto">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image
                    src="/images/giai-phong-dan-toc/cach-mang-vo-san.jpg"
                    alt="Tư tưởng Hồ Chí Minh về xây dựng chủ nghĩa xã hội"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl font-bold mb-2">Tư tưởng Hồ Chí Minh</h3>
                      <p className="text-sm opacity-90">Xây dựng chủ nghĩa xã hội ở Việt Nam</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Mục tiêu chủ nghĩa xã hội ở Việt Nam
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Khám phá các mục tiêu cơ bản trong tư tưởng Hồ Chí Minh về xây dựng chủ nghĩa xã hội. 
              Click vào từng mục tiêu để xem chi tiết đầy đủ.
            </p>

            {/* Key Quote */}
            <div className="bg-gradient-to-r from-red-50 to-blue-50 border border-red-200 rounded-2xl p-8 max-w-4xl mx-auto mb-8">
              <blockquote className="text-xl sm:text-2xl text-gray-800 italic leading-relaxed mb-4">
                "Muốn xây dựng chủ nghĩa xã hội, trước hết cần có những con người xã hội chủ nghĩa"
              </blockquote>
              <cite className="block text-red-700 font-semibold">
                — Chủ tịch Hồ Chí Minh
              </cite>
            </div>
            
            {/* Summary Box */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 max-w-5xl mx-auto shadow-lg">
              <h3 className="font-bold text-gray-800 mb-6 text-lg">Tổng quan 4 mục tiêu chính:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <div className="text-2xl mb-2">🏛️</div>
                  <h4 className="font-bold text-red-700 mb-2">Chính trị</h4>
                  <p className="text-gray-700">Xây dựng chế độ dân chủ, dân là chủ – dân làm chủ</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="text-2xl mb-2">📈</div>
                  <h4 className="font-bold text-blue-700 mb-2">Kinh tế</h4>
                  <p className="text-gray-700">Phát triển công nông nghiệp hiện đại, quốc doanh và hợp tác xã chủ đạo</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="text-2xl mb-2">🌸</div>
                  <h4 className="font-bold text-green-700 mb-2">Văn hóa</h4>
                  <p className="text-gray-700">Nền văn hóa dân tộc, khoa học, đại chúng; kế thừa truyền thống</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <div className="text-2xl mb-2">⚖️</div>
                  <h4 className="font-bold text-purple-700 mb-2">Xã hội</h4>
                  <p className="text-gray-700">Bảo đảm dân chủ, công bằng, văn minh, hài hòa lợi ích</p>
                </div>
              </div>
            </div>
          </div>

          {/* Goals Carousel - Simplified Preview */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Khám phá chi tiết từng mục tiêu
            </h3>
            <GoalsCarousel 
              goals={revolutionSteps.slice(0, 4)} // Chỉ lấy 4 mục tiêu đầu
              onGoalClick={handleGoalClick}
            />
          </div>

          {/* Interactive Tip */}
          <div className="text-center">
            <p className="text-gray-600 text-sm bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 inline-block">
              💡 <strong>Mẹo:</strong> Click "Xem chi tiết" trên carousel để xem thông tin đầy đủ trong modal
            </p>
          </div>
        </div>
      </section>

      {/* Goal Detail Modal */}
      <GoalDetailModal 
        goal={selectedGoal}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      {/* Detailed Driving Forces Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Động lực của chủ nghĩa xã hội ở Việt Nam - Chi tiết
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Phân tích chi tiết các động lực thúc đẩy xây dựng chủ nghĩa xã hội theo tư tưởng Hồ Chí Minh
            </p>
          </div>

          {/* 1. Động lực quyết định */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-red-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 text-lg font-bold">1</span>
                Động lực quyết định: Nội lực dân tộc – Nhân dân
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="font-bold text-red-700 mb-3">Lợi ích của dân</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    "Việc gì có lợi cho dân phải hết sức làm, việc gì có hại cho dân phải hết sức tránh"
                  </p>
                  <p className="text-sm text-gray-600">
                    Bảo đảm đời sống ấm no, hạnh phúc; tạo điều kiện cho mỗi người phát huy sở trường, cải thiện cuộc sống.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-bold text-blue-700 mb-3">Dân chủ của dân</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Dân chủ là "của quý báu nhất của nhân dân"
                  </p>
                  <p className="text-sm text-gray-600">
                    Bảo đảm quyền lực và trách nhiệm thuộc về dân, thực hiện dân chủ thực chất.
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-bold text-green-700 mb-3">Đoàn kết toàn dân</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Lực lượng mạnh nhất, gắn kết mọi giai tầng
                  </p>
                  <p className="text-sm text-gray-600">
                    Là cơ sở và tiền đề của mọi thành công trong xây dựng chủ nghĩa xã hội.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-800 mb-3">Ví dụ thực tiễn:</h4>
                <p className="text-sm text-gray-700">
                  Phong trào hiến đất làm đường, đóng góp công sức xây dựng hạ tầng tại địa phương – thể hiện quyền làm chủ và tinh thần đoàn kết.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Về tổ chức và lãnh đạo */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 text-lg font-bold">2</span>
                Về tổ chức và lãnh đạo
              </h3>
              
              <div className="space-y-6">
                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="font-bold text-red-700 mb-3">Đảng Cộng sản:</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    "Đảng như người cầm lái, người cầm lái có vững thì thuyền mới chạy" – giữ vai trò lãnh đạo quyết định.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Ví dụ:</strong> Đảng Cộng sản Việt Nam đề ra đường lối Đổi mới 1986, lãnh đạo đất nước vượt qua khủng hoảng, hội nhập quốc tế.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-bold text-blue-700 mb-3">Nhà nước:</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Đại diện ý chí, quyền lực nhân dân; biến chủ trương, đường lối của Đảng thành hiện thực.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Ví dụ:</strong> Nhà nước điện tử: cung cấp dịch vụ công trực tuyến, minh bạch hóa thủ tục, đưa đường lối, chính sách vào thực tiễn.
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-bold text-green-700 mb-3">Các tổ chức chính trị – xã hội:</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Hoạt động vì lợi ích hội viên, thống nhất với lợi ích dân tộc; phải chống phá hoại từ ngoài và chống "kẻ địch bên trong" như chủ nghĩa cá nhân, quan liêu.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Ví dụ:</strong> Các đoàn thể như Mặt trận Tổ quốc, Hội Phụ nữ, Đoàn Thanh niên vận động quần chúng tham gia các phong trào: phòng chống dịch COVID-19, bảo vệ môi trường.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Con người xã hội chủ nghĩa */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 text-lg font-bold">3</span>
                Con người xã hội chủ nghĩa
              </h3>
              
              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-green-700 mb-3 text-center">
                  "Muốn xây dựng chủ nghĩa xã hội, trước hết cần có con người xã hội chủ nghĩa"
                </h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">Phẩm chất cần bồi dưỡng:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Ý thức làm chủ, tinh thần tập thể, "mình vì mọi người – mọi người vì mình"
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Cần, kiệm, chống tham ô lãng phí
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Tư tưởng tiến nhanh, tiến mạnh, tiến vững chắc lên CNXH
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">Phải chống các lực cản:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Chủ nghĩa cá nhân
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Quan liêu, mệnh lệnh
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      Bảo thủ, rụt rè
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-6">
                <h4 className="font-bold text-yellow-700 mb-3">Ví dụ thực tiễn:</h4>
                <p className="text-sm text-gray-700">
                  Phong trào "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh"; cán bộ, công chức rèn luyện "cần, kiệm, liêm, chính".
                </p>
              </div>
            </div>
          </div>

          {/* 4. Quan điểm "xây" đi đôi với "chống" */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 text-lg font-bold">4</span>
                Quan điểm "xây" đi đôi với "chống"
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-bold text-green-700 mb-3">Xây dựng động lực:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      Phát huy lợi ích dân
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      Nâng cao dân chủ
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      Củng cố đoàn kết
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      Bồi dưỡng tinh thần xã hội chủ nghĩa
                    </li>
                  </ul>
                </div>
                
                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="font-bold text-red-700 mb-3">Chống mọi lực cản:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      Phá hoại từ bên ngoài
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      Tham ô, lãng phí
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      Chủ nghĩa cá nhân
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      Quan liêu, mệnh lệnh
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h4 className="font-bold text-purple-700 mb-3">Ví dụ thực tiễn:</h4>
                <p className="text-sm text-gray-700">
                  Bảo vệ chủ quyền biển đảo, đấu tranh phản bác các thông tin sai trái trên mạng – vừa xây dựng vừa bảo vệ thành quả cách mạng.
                </p>
              </div>
            </div>
          </div>

          {/* Tóm tắt */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-center mb-6">Tóm tắt</h3>
            <p className="text-lg leading-relaxed text-center">
              Động lực chủ yếu của chủ nghĩa xã hội Việt Nam theo Hồ Chí Minh là <strong>nội lực dân tộc</strong>, 
              trong đó trọng tâm là <strong>lợi ích của dân, dân chủ của dân và sức mạnh đoàn kết toàn dân</strong>. 
              Đảng Cộng sản lãnh đạo, Nhà nước quản lý, các tổ chức chính trị – xã hội vận động quần chúng. 
              Yếu tố quyết định là <strong>con người xã hội chủ nghĩa</strong> – có ý thức làm chủ, tinh thần tập thể, 
              cần kiệm, chống chủ nghĩa cá nhân. Người luôn nhấn mạnh phải <strong>xây đi đôi với chống</strong>, 
              phát huy động lực và loại bỏ mọi lực cản để đưa cách mạng xã hội chủ nghĩa tiến lên vững chắc.
            </p>
          </div>
        </div>
      </section>

      {/* Transition Period Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Thời kỳ quá độ lên chủ nghĩa xã hội
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Theo tư tưởng Hồ Chí Minh, thời kỳ quá độ là giai đoạn cải biến từ xã hội cũ 
              sang xã hội mới với những đặc điểm, nhiệm vụ và nguyên tắc xây dựng cụ thể.
            </p>
          </div>
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Characteristics */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🔄</span>
                  Tính chất và đặc điểm
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Giai đoạn cải biến sâu sắc, phức tạp và lâu dài
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Biến xã hội cũ thành xã hội mới chưa từng có
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Xóa bỏ giai cấp bóc lột, tàn dư thực dân - phong kiến
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    Từ nước nông nghiệp lạc hậu tiến thẳng lên CNXH
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🎯</span>
                  Nhiệm vụ chính
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-400 mb-2">Chính trị</h4>
                    <p className="text-sm text-gray-300">Xây dựng chế độ dân chủ, nâng cao dân trí</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-400 mb-2">Kinh tế</h4>
                    <p className="text-sm text-gray-300">Cải tạo và phát triển lực lượng sản xuất</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-400 mb-2">Văn hóa</h4>
                    <p className="text-sm text-gray-300">Tẩy trừ di tích cũ, xây dựng văn hóa mới</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-2">Xã hội</h4>
                    <p className="text-sm text-gray-300">Xây dựng quan hệ công bằng, văn minh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Principles */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center">
                  <span className="text-2xl mr-3">📋</span>
                  Nguyên tắc xây dựng
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-900/20 rounded-lg p-4">
                    <h4 className="font-semibold text-green-300 mb-2">1. Kiên định nền tảng Mác-Lênin</h4>
                    <p className="text-sm text-gray-300">Vận dụng sáng tạo, không rập khuôn, phù hợp với Việt Nam</p>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-300 mb-2">2. Giữ vững độc lập dân tộc</h4>
                    <p className="text-sm text-gray-300">"Không có gì quý hơn độc lập, tự do"</p>
                  </div>
                  <div className="bg-purple-900/20 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-300 mb-2">3. Đoàn kết quốc tế</h4>
                    <p className="text-sm text-gray-300">Học hỏi kinh nghiệm nhưng không sao chép máy móc</p>
                  </div>
                  <div className="bg-red-900/20 rounded-lg p-4">
                    <h4 className="font-semibold text-red-300 mb-2">4. Xây đi đôi với chống</h4>
                    <p className="text-sm text-gray-300">Phát huy động lực, chống mọi lực cản</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Xây đi đôi với Chống */}
          <div className="bg-gradient-to-r from-red-900/40 to-green-900/40 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Quan điểm "Xây" đi đôi với "Chống"
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-800/30 rounded-lg p-6">
                <h4 className="font-bold text-green-300 mb-4 text-lg flex items-center">
                  <span className="text-2xl mr-2">🏗️</span>
                  XÂY DỰNG
                </h4>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Phát huy lợi ích của dân
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Nâng cao dân chủ
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Củng cố đoàn kết dân tộc
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Bồi dưỡng con người XHCN
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Phát triển lực lượng sản xuất
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-800/30 rounded-lg p-6">
                <h4 className="font-bold text-red-300 mb-4 text-lg flex items-center">
                  <span className="text-2xl mr-2">⚔️</span>
                  CHỐNG PHÁ
                </h4>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    Chủ nghĩa cá nhân
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    Tham nhũng, lãng phí
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    Quan liêu, mệnh lệnh
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    Diễn biến hòa bình
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    Bảo thủ, rụt rè
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-red-900 via-red-800 to-red-700">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ý nghĩa và giá trị thời đại
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
              Tư tưởng Hồ Chí Minh về xây dựng chủ nghĩa xã hội ở Việt Nam không chỉ có giá trị 
              lịch sử mà còn định hướng cho sự nghiệp xây dựng và phát triển đất nước trong thời đại mới.
            </p>
          </div>

          {/* Main Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Giá trị lý luận
                </h3>
              </div>
              <ul className="space-y-3 text-white/90 text-sm">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Vận dụng sáng tạo chủ nghĩa Mác-Lênin
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Kết hợp lý luận với thực tiễn Việt Nam
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Đóng góp vào kho tàng lý luận nhân loại
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Giá trị thực tiễn
                </h3>
              </div>
              <ul className="space-y-3 text-white/90 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Định hướng công cuộc Đổi mới
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Xây dựng kinh tế thị trường ĐHXHCN
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Hội nhập quốc tế hiệu quả
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Giá trị thời đại
                </h3>
              </div>
              <ul className="space-y-3 text-white/90 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Phù hợp với xu thế toàn cầu hóa
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Định hướng phát triển bền vững
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Kinh nghiệm cho các nước đang phát triển
                </li>
              </ul>
            </div>
          </div>

          {/* Contemporary Applications */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-12">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Ứng dụng trong thời đại mới
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all">
                <div className="text-3xl mb-3">💻</div>
                <h4 className="font-semibold text-white mb-2">Chính phủ điện tử</h4>
                <p className="text-xs text-white/80">Dân chủ hóa quy trình hành chính</p>
              </div>
              <div className="text-center bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all">
                <div className="text-3xl mb-3">🌱</div>
                <h4 className="font-semibold text-white mb-2">Phát triển bền vững</h4>
                <p className="text-xs text-white/80">Kinh tế xanh, môi trường sạch</p>
              </div>
              <div className="text-center bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-semibold text-white mb-2">Hội nhập quốc tế</h4>
                <p className="text-xs text-white/80">Giữ vững độc lập, chủ quyền</p>
              </div>
              <div className="text-center bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all">
                <div className="text-3xl mb-3">⚖️</div>
                <h4 className="font-semibold text-white mb-2">Công bằng xã hội</h4>
                <p className="text-xs text-white/80">An sinh toàn diện</p>
              </div>
            </div>
          </div>

          {/* Key Quote and Progress */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-yellow-600/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/30">
              <h3 className="text-xl font-bold text-yellow-300 mb-4 text-center">
                Thông điệp cốt lõi
              </h3>
              <blockquote className="text-lg text-white italic text-center leading-relaxed mb-4">
                "Muốn xây dựng chủ nghĩa xã hội, trước hết cần có những con người xã hội chủ nghĩa"
              </blockquote>
              <cite className="block text-yellow-300 font-medium text-center">
                — Chủ tịch Hồ Chí Minh
              </cite>
              <div className="mt-4 text-center">
                <p className="text-sm text-white/80">
                  <strong>Nguồn:</strong> Hồ Chí Minh Toàn tập, Tập 12, tr. 377-378
                </p>
              </div>
            </div>

            <SocialismProgress />
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-3">
                Tiếp tục nghiên cứu và vận dụng
              </h3>
              <p className="text-white/90 mb-4">
                Tư tưởng Hồ Chí Minh về xây dựng chủ nghĩa xã hội cần được nghiên cứu, 
                học tập và vận dụng sáng tạo trong điều kiện mới.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">Học tập</span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Nghiên cứu</span>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">Vận dụng</span>
                <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm">Phát triển</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
