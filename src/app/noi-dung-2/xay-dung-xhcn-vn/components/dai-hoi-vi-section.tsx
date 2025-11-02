"use client";

import { Sparkles, Heart, Users, Flag } from "lucide-react";
import Image from "next/image";

interface DaiHoiVISectionProps {
  data: {
    title: string;
    suKien: {
      ten: string;
      thoiGian: string;
      ketQua: string;
    };
    tinhThan: string[];
    ketQua: {
      title: string;
      thoiGian: string;
      yNghia: string;
    };
  };
}

export default function DaiHoiVISection({ data }: DaiHoiVISectionProps) {
  const iconMap = [Heart, Users, Users];

  return (
    <div className="space-y-8">
      {/* Sự kiện quan trọng */}
      <div className="bg-gray-800 text-white rounded-lg p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-8 h-8 text-yellow-400" />
          <h3 className="text-2xl font-bold">Sự kiện lịch sử</h3>
        </div>
        <div className="bg-white/10 rounded-lg p-6">
          <p className="text-lg mb-2">
            <span className="font-bold text-yellow-300">{data.suKien.ten}</span>
          </p>
          <p className="text-gray-300 mb-4">{data.suKien.thoiGian}</p>
          <p className="text-white">{data.suKien.ketQua}</p>
        </div>
      </div>

      {/* Tinh thần mới */}
      <div className="bg-blue-50 rounded-lg p-8 border-2 border-blue-300 shadow-sm">
        <h4 className="font-bold text-gray-800 text-xl mb-6 text-center">
          Tinh thần lãnh đạo mới
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.tinhThan.map((item, index) => {
            const IconComponent = iconMap[index];
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-gray-800 font-semibold">{item}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Đại hội VI */}
      <div className="relative bg-red-700 text-white rounded-lg overflow-hidden shadow-xl">
        <div className="relative z-10 p-8">
          <div className="text-center mb-6">
            <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold mb-4">
              BƯỚC NGOẶT LỊCH SỬ
            </div>
            <h3 className="text-4xl font-bold mb-2">{data.ketQua.title}</h3>
            <p className="text-yellow-300 text-xl font-semibold">{data.ketQua.thoiGian}</p>
          </div>

          <div className="bg-white/20 rounded-lg p-8 backdrop-blur-sm border border-white/30">
            <div className="flex items-start gap-4">
              <Flag className="w-12 h-12 text-yellow-400 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-2xl mb-3">Ý nghĩa lịch sử</h4>
                <p className="text-lg leading-relaxed">{data.ketQua.yNghia}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-yellow-300 text-lg font-semibold italic">
              &ldquo;Đổi Mới để sinh tồn và phát triển&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Timeline visualization */}
      <div className="bg-white rounded-lg p-8 shadow-md">
        <h4 className="font-bold text-gray-800 text-xl mb-6 text-center">
          Hành trình đến Đổi Mới
        </h4>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200"></div>
          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gray-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold shadow-md relative z-10">
                1976
              </div>
              <div className="flex-1 bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">Bắt đầu xây dựng CNXH - gặp khó khăn</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold shadow-md relative z-10">
                1982
              </div>
              <div className="flex-1 bg-red-50 rounded-lg p-4">
                <p className="text-gray-700 font-semibold">Đại hội V - Điều chỉnh đường lối</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold shadow-md relative z-10">
                1984-85
              </div>
              <div className="flex-1 bg-yellow-50 rounded-lg p-4">
                <p className="text-gray-700">Hội nghị TW 6, 8 - Cải cách bộ phận</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold shadow-md relative z-10">
                8/1986
              </div>
              <div className="flex-1 bg-blue-50 rounded-lg p-4">
                <p className="text-gray-700 font-semibold">Nghị quyết V - Bước đột phá</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-red-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold shadow-md relative z-10">
                12/1986
              </div>
              <div className="flex-1 bg-red-100 rounded-lg p-4 border-2 border-red-400">
                <p className="text-gray-800 font-bold">Đại hội VI - Đổi Mới toàn diện 🎯</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
