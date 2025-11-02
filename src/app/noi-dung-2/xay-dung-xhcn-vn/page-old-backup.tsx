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
              Lịch sử Đảng Cộng sản Việt Nam - VNR202
            </p>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Đại hội đại biểu toàn quốc lần thứ V của Đảng và 
              <span className="block text-yellow-300 mt-2">
                các bước đột phá tiếp tục đổi mới kinh tế 1982-1986
              </span>
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Nghiên cứu đại hội V của Đảng và quá trình thực hiện Nghị quyết Đại hội 
              và các bước đột phá tiếp tục đổi mới kinh tế (1982-1986)
            </p>
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

         
            
            {/* Summary Box */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 max-w-5xl mx-auto shadow-lg">
              <h3 className="font-bold text-gray-800 mb-6 text-lg">Tổng quan 4 mục tiêu chính:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <div className="text-2xl mb-2">🏛️</div>
                  <h4 className="font-bold text-red-700 mb-2">Chính trị</h4>
                  <p className="text-gray-700">Xây dựng chế độ dân chủ - "Dân là chủ, dân làm chủ"</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="text-2xl mb-2">📈</div>
                  <h4 className="font-bold text-blue-700 mb-2">Kinh tế</h4>
                  <p className="text-gray-700">Nền kinh tế phát triển cao gắn bó mật thiết với mục tiêu chính trị</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="text-2xl mb-2">🌸</div>
                  <h4 className="font-bold text-green-700 mb-2">Văn hóa</h4>
                  <p className="text-gray-700">Nền văn hóa dân tộc, khoa học, đại chúng và tiếp thu tinh hoa văn hóa nhân loại</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <div className="text-2xl mb-2">⚖️</div>
                  <h4 className="font-bold text-purple-700 mb-2">Quan hệ xã hội</h4>
                  <p className="text-gray-700">Xã hội dân chủ, công bằng, văn minh với sự hài hòa lợi ích cá nhân - tập thể</p>
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
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Phân tích chi tiết các động lực thúc đẩy xây dựng chủ nghĩa xã hội theo tư tưởng Hồ Chí Minh
            </p>
            
            {/* Interactive Button to View Goal 5 */}
            <div className="mb-8">
              <button
                onClick={() => handleGoalClick(revolutionSteps[4])}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 flex items-center mx-auto gap-2"
              >
                <span>🎯</span>
                Xem mục tiêu 5 với ví dụ tương tác
                <span>→</span>
              </button>
              <p className="text-sm text-gray-500 mt-2">
                Click để xem chi tiết với các liên kết thực tiễn có thể nhấp
              </p>
            </div>
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
                <div className="space-y-3">
                  <p className="text-sm text-gray-700">
                    Phong trào hiến đất làm đường, đóng góp công sức xây dựng hạ tầng tại địa phương – thể hiện quyền làm chủ và tinh thần đoàn kết.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://kcdd.vn/chuong-trinh-muc-tieu-quoc-gia/chuong-trinh-muc-tieu-quoc-gia-xay-dung-nong-thon-moi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full transition-colors duration-300"
                    >
                      📖 Chương trình nông thôn mới
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a
                      href="https://mattran.org.vn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full transition-colors duration-300"
                    >
                      🤝 Mặt trận Tổ quốc
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
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
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Ví dụ:</strong> Đảng Cộng sản Việt Nam đề ra đường lối Đổi mới 1986, lãnh đạo đất nước vượt qua khủng hoảng, hội nhập quốc tế.
                  </p>
                  <a
                    href="https://dangcongsan.vn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-600 hover:text-red-800 text-sm font-medium bg-red-100 hover:bg-red-200 px-3 py-1 rounded-full transition-colors duration-300"
                  >
                    🏛️ Trang chủ Đảng Cộng sản Việt Nam
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-bold text-blue-700 mb-3">Nhà nước:</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Đại diện ý chí, quyền lực nhân dân; biến chủ trương, đường lối của Đảng thành hiện thực.
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Ví dụ:</strong> Nhà nước điện tử: cung cấp dịch vụ công trực tuyến, minh bạch hóa thủ tục, đưa đường lối, chính sách vào thực tiễn.
                  </p>
                  <a
                    href="https://dichvucong.gov.vn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium bg-blue-100 hover:bg-blue-200 px-3 py-1 rounded-full transition-colors duration-300"
                  >
                    💻 Cổng dịch vụ công quốc gia
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-bold text-green-700 mb-3">Các tổ chức chính trị – xã hội:</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Hoạt động vì lợi ích hội viên, thống nhất với lợi ích dân tộc; phải chống phá hoại từ ngoài và chống "kẻ địch bên trong" như chủ nghĩa cá nhân, quan liêu.
                  </p>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-700">
                      <strong>Ví dụ:</strong> Các đoàn thể như Mặt trận Tổ quốc, Hội Phụ nữ, Đoàn Thanh niên vận động quần chúng tham gia các phong trào: phòng chống dịch COVID-19, bảo vệ môi trường.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href="https://mattran.org.vn/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 hover:text-green-800 text-sm font-medium bg-green-100 hover:bg-green-200 px-3 py-1 rounded-full transition-colors duration-300"
                      >
                        🤝 Mặt trận Tổ quốc
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a
                        href="https://hoiphunu.org.vn/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 hover:text-green-800 text-sm font-medium bg-green-100 hover:bg-green-200 px-3 py-1 rounded-full transition-colors duration-300"
                      >
                        👩 Hội Phụ nữ Việt Nam
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a
                        href="https://doanthanhnien.vn/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 hover:text-green-800 text-sm font-medium bg-green-100 hover:bg-green-200 px-3 py-1 rounded-full transition-colors duration-300"
                      >
                        🌟 Đoàn Thanh niên
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
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
                <div className="space-y-3">
                  <p className="text-sm text-gray-700">
                    Phong trào "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh"; cán bộ, công chức rèn luyện "cần, kiệm, liêm, chính".
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://www.cpv.org.vn/cpv/Modules/News/NewsDetail.aspx?co_id=30287&cn_id=949880"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-yellow-600 hover:text-yellow-800 text-sm font-medium bg-yellow-100 hover:bg-yellow-200 px-3 py-1 rounded-full transition-colors duration-300"
                    >
                      🎓 Phong trào học tập Hồ Chí Minh
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a
                      href="https://baochinhphu.vn/van-hoa-doanh-nghiep-xa-hoi-chu-nghia-102240924.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-yellow-600 hover:text-yellow-800 text-sm font-medium bg-yellow-100 hover:bg-yellow-200 px-3 py-1 rounded-full transition-colors duration-300"
                    >
                      🏢 Văn hóa doanh nghiệp XHCN
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
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
                <div className="space-y-3">
                  <p className="text-sm text-gray-700">
                    Bảo vệ chủ quyền biển đảo, đấu tranh phản bác các thông tin sai trái trên mạng – vừa xây dựng vừa bảo vệ thành quả cách mạng.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://www.mod.gov.vn/wps/portal/!ut/p/c4/04_SB8K8xLLM9MSSzPy8xBz9CP0os3hjdwMDJydnRwN3_wAPAyMDTwMPMwcjAwcHE_3g1Dz9gmxHRQD7rQwJ/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-600 hover:text-purple-800 text-sm font-medium bg-purple-100 hover:bg-purple-200 px-3 py-1 rounded-full transition-colors duration-300"
                    >
                      🛡️ Bộ Quốc phòng
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a
                      href="https://bienphong.com.vn/bao-ve-chu-quyen-bien-dao-post532158.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-600 hover:text-purple-800 text-sm font-medium bg-purple-100 hover:bg-purple-200 px-3 py-1 rounded-full transition-colors duration-300"
                    >
                      🏝️ Bảo vệ chủ quyền biển đảo
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tóm tắt */}
        {/* References and Bibliography Section */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              📚 Tài liệu tham khảo
            </h3>
            
            <div className="space-y-6">
              {/* Primary Sources */}
              <div>
                <h4 className="text-lg font-semibold text-red-700 mb-3">Nguồn tài liệu chính:</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>1. Hồ Chí Minh (2011). <em>Toàn tập</em>, Tập 8. Nhà xuất bản Chính trị quốc gia Sự thật, Hà Nội.</p>
                  <p>2. Hồ Chí Minh (2011). <em>Toàn tập</em>, Tập 9. Nhà xuất bản Chính trị quốc gia Sự thật, Hà Nội.</p>
                  <p>3. Hồ Chí Minh (2011). <em>Toàn tập</em>, Tập 10. Nhà xuất bản Chính trị quốc gia Sự thật, Hà Nội.</p>
                  <p>4. Hồ Chí Minh (2011). <em>Toàn tập</em>, Tập 12. Nhà xuất bản Chính trị quốc gia Sự thật, Hà Nội.</p>
                  <p>5. Hồ Chí Minh (2011). <em>Toàn tập</em>, Tập 14. Nhà xuất bản Chính trị quốc gia Sự thật, Hà Nội.</p>
                  <p>6. Hồ Chí Minh (2011). <em>Toàn tập</em>, Tập 15. Nhà xuất bản Chính trị quốc gia Sự thật, Hà Nội.</p>
                </div>
              </div>

              {/* Legal Documents */}
              <div>
                <h4 className="text-lg font-semibold text-blue-700 mb-3">Văn bản pháp lý:</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>7. Hiến pháp nước Cộng hòa xã hội chủ nghĩa Việt Nam năm 2013 (sửa đổi, bổ sung năm 2023).</p>
                  <p>8. Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (bổ sung, phát triển năm 2011).</p>
                </div>
              </div>

              {/* Academic Sources */}
              <div>
                <h4 className="text-lg font-semibold text-green-700 mb-3">Giáo trình và nghiên cứu:</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>9. Học viện Chính trị quốc gia Hồ Chí Minh (2021). <em>Giáo trình Tư tưởng Hồ Chí Minh</em>. Nhà xuất bản Chính trị quốc gia Sự thật, Hà Nội.</p>
                  <p>10. Bộ Giáo dục và Đào tạo (2023). <em>Tài liệu tham khảo môn Tư tưởng Hồ Chí Minh (HCM202)</em>. Chương II: Tư tưởng Hồ Chí Minh về chủ nghĩa xã hội và xây dựng chủ nghĩa xã hội ở Việt Nam.</p>
                </div>
              </div>

              {/* Citation Style Note */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 italic text-center">
                  * Các trích dẫn và tham khảo được lập theo chuẩn học thuật Việt Nam. 
                  Số trang cụ thể được ghi chú trong từng phần nội dung chi tiết.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mb-16">
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
        </div>
      </section>
    </div>
  );
}
