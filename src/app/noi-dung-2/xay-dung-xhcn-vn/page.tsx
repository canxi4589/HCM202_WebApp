"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Globe, Home } from "lucide-react";
import Header from "@/components/header";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import TimelineComponent from "./components/timeline";
import ContentSection from "./components/content-section";
import DaiHoiInfoCard from "./components/dai-hoi-info-card";
import DaiHoiIntro from "./components/dai-hoi-intro";
import EvaluationCard from "./components/evaluation-card";
import TaskCard from "./components/task-card";
import DinhHuongSection from "./components/dinh-huong-section";
import BuocDotPhaSection from "./components/buoc-dot-pha-section";
import TongKetSection from "./components/tong-ket-section";
import DaiHoiVISection from "./components/dai-hoi-vi-section";
import { boiCanhData, daiHoiVData, pageReference } from "./constants/dai-hoi-v-content";
import { doiMoiContent } from "./constants/doi-moi-content";

gsap.registerPlugin(ScrollTrigger);

export default function DaiHoiVPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".header-section", {
        opacity: 0,
        y: -50,
        duration: 1,
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

      {/* Hero Section */}
      <section className="header-section relative min-h-screen flex items-center justify-center overflow-hidden bg-red-800">
        <Image
          src="/images/giai-phong-dan-toc/cach-mang-giai-phong-dan-toc.jpg"
          alt="Đại hội V của Đảng"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl w-full mt-16 sm:mt-20">
          <div className="mb-8">
            <div className="inline-block bg-yellow-400/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <p className="text-yellow-300 text-sm sm:text-base font-medium tracking-wider uppercase">
                Lịch sử Đảng Cộng sản Việt Nam - VNR202
              </p>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Đại hội V của Đảng
              <span className="block text-yellow-300 mt-4">
                và quá trình thực hiện Nghị quyết
              </span>
              <span className="block text-white/90 text-2xl sm:text-3xl md:text-4xl mt-4">
                Tháng 3/1982
              </span>
            </h1>
            
            <div className="w-32 h-1 bg-yellow-400 mx-auto mb-8"></div>
            
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
              Diễn ra trong bối cảnh lịch sử và tình hình quốc tế hết sức phức tạp
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="mt-12 animate-bounce">
            <ArrowRight className="w-8 h-8 text-white/70 mx-auto rotate-90" />
          </div>
        </div>
      </section>

      {/* Bối cảnh lịch sử - Timeline */}
      <ContentSection 
        title="Bối cảnh lịch sử và tình hình thế giới"
        pageRef={pageReference}
        bgColor="bg-white"
      >
        {/* Tình hình Thế giới */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-800">Tình hình Thế giới</h3>
          </div>
          
          <div className="bg-gray-50 rounded-lg shadow-sm p-6 mb-8 border-l-4 border-blue-600">
            <p className="text-gray-700 leading-relaxed">
              Vào thời điểm này, thế giới đang có nhiều mâu thuẫn, biến động và thách thức mới. 
              Đặc biệt, các thế lực thù địch vẫn tiếp tục thực hiện chính sách bao vây, cấm vận 
              và &ldquo;kế hoạch hậu chiến&rdquo; nhằm chống phá Việt Nam và ba nước Đông Dương. 
              Việt Nam phải tập trung sức lực để giúp đỡ nhân dân Campuchia thoát khỏi họa diệt chủng 
              và xây dựng lại đất nước, điều này cũng là một gánh nặng không nhỏ.
            </p>
          </div>
          
          <TimelineComponent data={boiCanhData.theGioi} />
        </div>

        {/* Tình hình Trong nước */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Home className="w-8 h-8 text-red-600" />
            <h3 className="text-2xl font-bold text-gray-800">Tình hình Trong nước</h3>
          </div>
          
          <div className="bg-gray-50 rounded-lg shadow-sm p-6 mb-8 border-l-4 border-red-600">
            <p className="text-gray-700 leading-relaxed">
              Việt Nam bước vào giai đoạn xây dựng chủ nghĩa xã hội trong điều kiện kinh tế gặp nhiều khó khăn, 
              chịu hậu quả nặng nề của chiến tranh. Tình trạng sản xuất đình trệ, lạm phát cao, 
              khiến đời sống nhân dân còn nhiều thiếu thốn và khó khăn chồng chất.
            </p>
          </div>
          
          <TimelineComponent data={boiCanhData.trongNuoc} />
        </div>
      </ContentSection>

      {/* Diễn biến và Nội dung Đại hội V */}
      <ContentSection 
        title="Diễn biến và Nội dung Đại hội V"
        subtitle="Tháng 3/1982"
        bgColor="bg-white"
      >
        <DaiHoiIntro />
        
        <DaiHoiInfoCard data={daiHoiVData.thongTin} />
      </ContentSection>

      {/* Đánh giá và Khẳng định */}
      <ContentSection 
        title="Đánh giá và Khẳng định Đường lối tại Đại hội V"
        bgColor="bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="mb-8 text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Đại hội V đã tiến hành kiểm điểm và đánh giá nghiêm túc tình hình thực hiện đường lối 
            của Đại hội IV, từ đó rút ra những bài học quan trọng.
          </p>
        </div>
        
        <EvaluationCard data={daiHoiVData.danhGia} />
      </ContentSection>

      {/* Nhiệm vụ Trọng tâm */}
      <ContentSection 
        title="Nhiệm vụ Trọng tâm của Chặng đường Đầu tiên"
        subtitle="Khắc phục khủng hoảng và từng bước thực hiện mục tiêu chiến lược"
        bgColor="bg-white"
      >
        <TaskCard data={daiHoiVData.nhiemVuTrongTam} />
      </ContentSection>

      {/* PHẦN B: CÁC BƯỚC ĐỘT PHÁ TIẾP TỤC ĐỔI MỚI KINH TẾ (1982-1986) */}
      
      {/* Định hướng và Nhiệm vụ Chiến lược */}
      <ContentSection 
        title={doiMoiContent.dinhHuong.title}
        subtitle="Sau khi Đại hội V xác định lại đường lối"
        pageRef={doiMoiContent.dinhHuong.pageRef}
        bgColor="bg-gray-50"
      >
        <DinhHuongSection data={doiMoiContent.dinhHuong} />
      </ContentSection>

      {/* Những Bước Đột Phá về Cơ chế Quản lý */}
      <ContentSection 
        title={doiMoiContent.buocDotPha.title}
        subtitle="Giai đoạn 1982-1986"
        pageRef={doiMoiContent.buocDotPha.pageRef}
        bgColor="bg-white"
      >
        <BuocDotPhaSection data={doiMoiContent.buocDotPha} />
      </ContentSection>

      {/* Tổng kết Giai đoạn 1976-1986 */}
      <ContentSection 
        title={doiMoiContent.tongKet.title}
        subtitle="Nhìn lại một thập kỷ đầy thử thách"
        pageRef={doiMoiContent.tongKet.pageRef}
        bgColor="bg-gray-50"
      >
        <TongKetSection data={doiMoiContent.tongKet} />
      </ContentSection>

      {/* Mở đầu Công cuộc Đổi Mới */}
      <ContentSection 
        title={doiMoiContent.daiHoiVI.title}
        subtitle="Tiền đề cho bước ngoặt lịch sử"
        bgColor="bg-white"
      >
        <DaiHoiVISection data={doiMoiContent.daiHoiVI} />
      </ContentSection>

      {/* Summary Section */}
      <section className="py-20 px-4 sm:px-6 bg-red-800 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Tóm tắt</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          </div>

          <div className="bg-white/10 rounded-lg p-8 border border-white/20">
            <div className="space-y-6 text-lg leading-relaxed">
              <div className="border-b border-white/20 pb-4 mb-4">
                <h3 className="text-2xl font-bold text-yellow-300 mb-3">Đại hội V (3/1982)</h3>
                <p>
                  Diễn ra trong bối cảnh khủng hoảng kinh tế nghiêm trọng, Đại hội V đã thẳng thắn 
                  kiểm điểm sai lầm chủ quan, đặc biệt là việc duy trì cơ chế tập trung, quan liêu, 
                  bao cấp quá lâu. Nhiệm vụ cấp bách là ổn định đời sống nhân dân và phát triển 
                  nông nghiệp, công nghiệp nhẹ.
                </p>
              </div>

              <div className="border-b border-white/20 pb-4 mb-4">
                <h3 className="text-2xl font-bold text-yellow-300 mb-3">Các bước đột phá (1982-1986)</h3>
                <p>
                  Hội nghị Trung ương 6 (1984) và 8 (1985) chuẩn bị chuyển sang cơ chế hạch toán 
                  kinh doanh xã hội chủ nghĩa. Tuy nhiên, chính sách còn chắp vá, dẫn đến sự cố 
                  giá-lương-tiền năm 1985 với lạm phát lên tới 774%.
                </p>
              </div>

              <div className="border-b border-white/20 pb-4 mb-4">
                <h3 className="text-2xl font-bold text-yellow-300 mb-3">Nghị quyết V (8/1986)</h3>
                <p className="font-semibold">
                  Bước đột phá thứ ba, phá bỏ rào cản về quan điểm kinh tế, đổi mới cơ chế quản lý 
                  triệt để, mạnh dạn vận dụng quy luật thị trường trong khuôn khổ định hướng xã hội chủ nghĩa.
                </p>
              </div>

              <div className="bg-yellow-400/20 rounded-lg p-6 border border-yellow-400/30">
                <h3 className="text-2xl font-bold text-yellow-300 mb-3">Đại hội VI (12/1986)</h3>
                <p className="font-bold text-xl">
                  Bước ngoặt lịch sử - Mở đầu công cuộc Đổi Mới toàn diện, đưa đất nước thoát khỏi 
                  khủng hoảng và phát triển bền vững. 🎯
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            📚 Tài liệu tham khảo
          </h3>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="space-y-4 text-sm text-gray-700">
              <p>
                <strong>1.</strong> Bộ Giáo dục và Đào tạo (2023). 
                <em> Tài liệu tham khảo môn Tư tưởng Hồ Chí Minh (HCM202)</em>. 
                Chương III, Trang 124.
              </p>
              <p>
                <strong>2.</strong> Văn kiện Đại hội đại biểu toàn quốc lần thứ V của Đảng Cộng sản Việt Nam (1982). 
                Nhà xuất bản Sự thật, Hà Nội.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
