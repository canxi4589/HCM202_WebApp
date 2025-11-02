"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/header";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { ArrowLeft } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TongHopKienThuc() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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

      // Timeline container animation
      gsap.from(".timeline-container", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-gray-50"
    >
      <Header />
      <ScrollToTopButton />

      {/* Header Section */}
      <section className="header-section relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/thoi-ky-qua-do/dangcongsan.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 max-w-6xl w-full mt-16">
          <button
            onClick={() => router.back()}
            className="absolute top-4 left-4 flex items-center gap-2 text-white hover:text-yellow-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Quay lại</span>
          </button>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            Tổng hợp kiến thức
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-6">
            Timeline - Dòng thời gian Lịch sử Đảng Cộng sản Việt Nam
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-container py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Dòng thời gian tương tác
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Khám phá các mốc thời gian quan trọng trong lịch sử Đảng Cộng sản Việt Nam 
              thông qua timeline tương tác. Bạn có thể điều hướng, phóng to và xem chi tiết từng sự kiện.
            </p>
          </div>

          {/* Timeline Embed */}
          <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden border-4 border-red-600">
            <iframe 
              src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2%3A2PACX-1vT-HD50l4EUAdeHFxZRoPbYEETxX6BNUxcr6_2FGabLAiBDEWvGzI5Nj1L7OKTPsgCyFyh1S_JdI2iD&font=Default&lang=en&initial_zoom=2&width=100%25&height=650" 
              width="100%" 
              height="650" 
              allowFullScreen
              className="border-0"
              title="Timeline Lịch sử Đảng Cộng sản Việt Nam"
            />
          </div>

          {/* Instructions */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="font-bold text-gray-800 mb-2">📍 Điều hướng</h3>
              <p className="text-sm text-gray-600">
                Sử dụng mũi tên hoặc kéo timeline để di chuyển giữa các sự kiện
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="font-bold text-gray-800 mb-2">🔍 Phóng to</h3>
              <p className="text-sm text-gray-600">
                Click vào các sự kiện để xem thông tin chi tiết và hình ảnh
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
              <h3 className="font-bold text-gray-800 mb-2">⌨️ Phím tắt</h3>
              <p className="text-sm text-gray-600">
                Sử dụng phím mũi tên ← → để chuyển nhanh giữa các mốc thời gian
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              📚 Về Timeline này
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Timeline này được xây dựng dựa trên tài liệu học tập môn Lịch sử Đảng Cộng sản Việt Nam (VNR202), 
                tập hợp các sự kiện quan trọng từ khi thành lập Đảng đến nay.
              </p>
              <p>
                Mỗi mốc thời gian đều được ghi chú đầy đủ về ngày tháng, địa điểm, nhân vật và ý nghĩa lịch sử. 
                Hình ảnh minh họa giúp người học dễ dàng hình dung và ghi nhớ kiến thức.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mt-6">
                <p className="text-sm">
                  <strong>💡 Gợi ý học tập:</strong> Hãy theo dõi timeline từ đầu đến cuối để có cái nhìn tổng quan 
                  về lịch sử phát triển của Đảng. Sau đó, tập trung vào các giai đoạn quan trọng để nghiên cứu sâu hơn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 px-4 bg-red-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">Khám phá thêm nội dung</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => router.push('/noi-dung')}
              className="bg-white text-red-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Quay lại Nội dung
            </button>
            <button
              onClick={() => router.push('/on-tap')}
              className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Ôn tập kiến thức
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}