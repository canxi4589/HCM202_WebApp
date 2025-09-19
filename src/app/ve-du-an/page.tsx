"use client";

import { useLayoutEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";
import Header from "@/components/header";

const VeDuAn = () => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        titleRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3,
        }
      );

      // Animate content sections
      gsap.fromTo(
        ".content-section",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          delay: 0.6,
        }
      );

      // Animate decorative elements
      gsap.fromTo(
        ".decorative-element",
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "back.out(1.7)",
          delay: 1,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Background */}
      <Image
        src="/images/background.png"
        alt=""
        fill
        className="object-cover"
        priority
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h1
              ref={titleRef}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#f9f0e4] mb-6 drop-shadow-lg"
            >
              Về Dự Án
            </h1>
            <div className="decorative-element w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Project Overview */}
            <div className="content-section bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="decorative-element w-8 h-8 bg-red-600 rounded-full mr-4 flex-shrink-0"></span>
                Tổng Quan Dự Án
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Dự án "Tư tưởng Hồ Chí Minh" là một nền tảng giáo dục tương tác
                được phát triển nhằm giúp người học hiểu sâu sắc về tư tưởng của
                Chủ tịch Hồ Chí Minh - người anh hùng dân tộc vĩ đại và nhà tư
                tưởng lỗi lạc của Việt Nam.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Thông qua giao diện hiện đại và trải nghiệm người dùng trực
                quan, dự án mang đến cách tiếp cận mới mẻ trong việc học tập và
                nghiên cứu tư tưởng Hồ Chí Minh, đặc biệt là các vấn đề về độc
                lập dân tộc và cách mạng giải phóng.
              </p>
            </div>

            {/* Objectives */}
            <div className="content-section bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="decorative-element w-8 h-8 bg-red-600 rounded-full mr-4 flex-shrink-0"></span>
                Mục Tiêu Dự Án
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="decorative-element w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-lg text-gray-700">
                    <strong>Giáo dục và truyền bá:</strong> Giúp thế hệ trẻ hiểu
                    rõ hơn về tư tưởng, đạo đức và phong cách Hồ Chí Minh trong
                    bối cảnh hiện đại.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="decorative-element w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-lg text-gray-700">
                    <strong>Ứng dụng công nghệ:</strong> Sử dụng các công nghệ
                    web hiện đại để tạo ra trải nghiệm học tập sinh động và hấp
                    dẫn.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="decorative-element w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-lg text-gray-700">
                    <strong>Bảo tồn di sản:</strong> Góp phần bảo tồn và lan tỏa
                    những giá trị tinh thần quý báu của dân tộc Việt Nam.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Features */}
            <div className="content-section bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="decorative-element w-8 h-8 bg-red-600 rounded-full mr-4 flex-shrink-0"></span>
                Đặc Điểm Kỹ Thuật
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Frontend
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Next.js 14 với App Router
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      TypeScript cho type safety
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Tailwind CSS cho styling
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      GSAP cho animations
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">UI/UX</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Responsive design
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Interactive animations
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Modern visual effects
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Accessible navigation
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* AI Disclaimer */}
            <div className="content-section bg-gradient-to-r from-amber-50 to-orange-50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border-l-8 border-amber-500">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="decorative-element w-8 h-8 bg-amber-500 rounded-full mr-4 flex-shrink-0 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Tuyên Bố Về Việc Sử Dụng AI
              </h2>
              <div className="space-y-6">
                <div className="bg-white/80 rounded-lg p-6 border border-amber-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-amber-500 rounded-full mr-3"></span>
                    Mô Hình Ngôn Ngữ Lớn (LLM) Được Sử Dụng
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Dự án này có sử dụng hỗ trợ từ các mô hình AI tiên tiến như{" "}
                    <strong>GitHub Copilot</strong> và
                    <strong> Claude AI</strong> trong quá trình phát triển. Các
                    công cụ AI này được sử dụng để hỗ trợ viết code, tối ưu hóa
                    giao diện người dùng và cải thiện trải nghiệm tương tác.
                  </p>
                </div>

                <div className="bg-white/80 rounded-lg p-6 border border-amber-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-amber-500 rounded-full mr-3"></span>
                    Mục Đích Sử Dụng AI
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        <strong>Phát triển giao diện:</strong> Tạo ra các
                        component React hiện đại và responsive
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        <strong>Tối ưu hóa code:</strong> Cải thiện hiệu suất và
                        chất lượng mã nguồn
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        <strong>Thiết kế animations:</strong> Tạo hiệu ứng
                        chuyển động mượt mà với GSAP
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        <strong>Debug và testing:</strong> Phát hiện và sửa lỗi
                        trong quá trình phát triển
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/80 rounded-lg p-6 border border-amber-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-amber-500 rounded-full mr-3"></span>
                    Nội Dung và Script
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Toàn bộ nội dung học thuật, script thuyết trình và kiến thức
                    về tư tưởng Hồ Chí Minh được nghiên cứu và biên soạn bởi
                    nhóm sinh viên dựa trên tài liệu học thuật chính thống.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Tài liệu tham khảo:</strong>
                    </p>
                    <a
                      href="https://docs.google.com/document/d/1MekkW0bRRk2uHD7Fg7YwWWbd55i7KjuQtCL5l7ofJuU/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline text-sm break-all"
                    >
                      Script và Nội dung Thuyết trình - Google Docs
                    </a>
                  </div>
                </div>

                <div className="bg-white/80 rounded-lg p-6 border border-amber-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-amber-500 rounded-full mr-3"></span>
                    Cam Kết Chất Lượng
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Toàn bộ nội dung học thuật, ý tưởng sáng tạo và quyết định
                    thiết kế đều được thực hiện bởi nhóm sinh viên. AI chỉ đóng
                    vai trò hỗ trợ kỹ thuật, không thay thế tư duy và nghiên cứu
                    độc lập của nhóm.
                  </p>
                </div>
              </div>
            </div>

            {/* Contributors */}
            <div className="content-section bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="decorative-element w-8 h-8 bg-red-600 rounded-full mr-4 flex-shrink-0"></span>
                Thành Viên Đóng Góp
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg border-l-4 border-red-600">
                    <h4 className="font-bold text-gray-800 mb-2">
                      Huỳnh Lê Nhật Hoàng
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Quản lý dự án, Lập trình viên, Thuyết trình
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-bold text-gray-800 mb-2">
                      Huỳnh Đình Luyện
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Lập trình viên, Thuyết trình
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-bold text-gray-800 mb-2">
                      Phạm Nhất Thống
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Biên kịch, Thuyết trình
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border-l-4 border-purple-600">
                    <h4 className="font-bold text-gray-800 mb-2">
                      Nguyễn Lê Tiến Phát
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Lập trình viên, Xây dựng ngân hàng câu hỏi, Thuyết trình
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact/Credits */}
            <div className="content-section bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="decorative-element w-8 h-8 bg-red-600 rounded-full mr-4 flex-shrink-0"></span>
                Thông Tin Dự Án
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Phát triển bởi
                  </h3>
                  <p className="text-lg text-gray-700 mb-2">Sinh viên FPT</p>
                  <p className="text-gray-600">
                    Dự án được thực hiện trong khuôn khổ môn học Tư tưởng Hồ Chí
                    Minh
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Mục đích
                  </h3>
                  <p className="text-lg text-gray-700 mb-2">
                    Giáo dục & Nghiên cứu
                  </p>
                  <p className="text-gray-600">
                    Ứng dụng công nghệ thông tin trong việc truyền bá tư tưởng
                    Hồ Chí Minh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      {/* <button
        onClick={() => router.push("/")}
        className="fixed left-2 top-20 sm:left-6 sm:top-24 z-40 flex items-center gap-1 sm:gap-2 
                   bg-white/90 hover:bg-white text-red-800 font-semibold 
                   px-2 py-2 sm:px-4 sm:py-2 rounded-lg shadow-lg backdrop-blur-sm
                   transition-all duration-300 hover:scale-105 cursor-pointer
                   text-xs sm:text-sm"
      >
        <ArrowLeft className="w-5 h-5" />
        Trang chủ
      </button> */}
    </div>
  );
};

export default VeDuAn;
