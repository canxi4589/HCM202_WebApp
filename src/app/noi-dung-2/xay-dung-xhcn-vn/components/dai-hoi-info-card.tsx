"use client";

import Image from "next/image";

interface InfoCardProps {
  data: {
    thoiGian: string;
    diaDiem: string;
    soLuongDaiBieu: string;
    daiDien: string;
    tongBiThu: string;
    nhiemVu: string;
  };
}

export default function DaiHoiInfoCard({ data }: InfoCardProps) {
  return (
    <div className="space-y-8">
      {/* Hero Image Section */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <div className="relative h-[400px] md:h-[500px] w-full">
          <Image
            src="/images/giai-phong-dan-toc/dang-cong-san-viet-nam-lanh-dao.jpg"
            alt="Đại hội V của Đảng"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-4xl">
                <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm mb-4">
                  Đại hội V - Tháng 3/1982
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Đại hội đại biểu toàn quốc lần thứ V
                </h3>
                <p className="text-white/90 text-lg">
                  Diễn ra tại Hà Nội - Điểm khởi đầu cho những thay đổi quan trọng
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Key Facts */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-red-50 rounded-xl shadow-lg p-8 border-2 border-red-200">
            <h4 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-3">
              <span className="text-3xl">📊</span>
              Thông tin chính
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <span className="text-2xl"></span>
                  <div>
                    <p className="text-xs text-gray-600 uppercase font-semibold mb-1">Thời gian</p>
                    <p className="font-bold text-gray-800">{data.thoiGian}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
                <div className="flex items-start gap-3">
                  <span className="text-2xl"></span>
                  <div>
                    <p className="text-xs text-gray-600 uppercase font-semibold mb-1">Địa điểm</p>
                    <p className="font-bold text-gray-800">{data.diaDiem}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
                <div className="flex items-start gap-3">
                  <span className="text-2xl"></span>
                  <div>
                    <p className="text-xs text-gray-600 uppercase font-semibold mb-1">Số đại biểu</p>
                    <p className="font-bold text-gray-800">{data.soLuongDaiBieu}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
                <div className="flex items-start gap-3">
                  <span className="text-2xl"></span>
                  <div>
                    <p className="text-xs text-gray-600 uppercase font-semibold mb-1">Đại diện</p>
                    <p className="font-bold text-gray-800">{data.daiDien}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-yellow-50 rounded-xl shadow-lg p-8 border-2 border-yellow-300">
            <h4 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-3">
              <span className="text-3xl"></span>
              Nhiệm vụ quan trọng
            </h4>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <p className="text-gray-800 leading-relaxed text-lg">{data.nhiemVu}</p>
            </div>
          </div>
        </div>

        {/* Right Column - Leader Info */}
        <div className="lg:col-span-1">
          <div className="bg-red-800 rounded-xl shadow-2xl p-6 text-white sticky top-4">
            <div className="text-center mb-6">
              {/* Lê Duẩn Portrait */}
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Le_duan.png"
                  alt="Tổng Bí thư Lê Duẩn"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h4 className="text-xl font-bold mb-2">Lãnh đạo Đảng</h4>
              <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-sm text-white/80 uppercase font-semibold mb-2">Tổng Bí thư</p>
              <p className="text-2xl font-bold text-yellow-300 mb-4">{data.tongBiThu}</p>
              <p className="text-sm text-white/90 leading-relaxed">
                Tiếp tục lãnh đạo Đảng trong giai đoạn quan trọng, đưa đất nước vượt qua khủng hoảng kinh tế - xã hội.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <p className="text-3xl font-bold text-yellow-300">1.033</p>
                <p className="text-xs text-white/80 mt-1">Đại biểu</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                <p className="text-3xl font-bold text-yellow-300">1,7M</p>
                <p className="text-xs text-white/80 mt-1">Đảng viên</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
