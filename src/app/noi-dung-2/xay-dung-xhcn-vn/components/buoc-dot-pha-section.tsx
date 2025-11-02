"use client";

import { Zap, Calendar, AlertTriangle, TrendingUp } from "lucide-react";

interface BuocDotPhaProps {
  data: {
    title: string;
    pageRef: string;
    moTa: string;
    trungTam: {
      title: string;
      linhVuc: string;
      moTa: string;
    };
    hoiNghi: Array<{
      ten: string;
      thoiGian: string;
      yNghia: string;
    }>;
    chuTruong: {
      title: string;
      noiDung: string;
      hanChe: string;
      hậuQua: {
        title: string;
        moTa: string;
      };
    };
    nghiQuyetV: {
      ten: string;
      thoiGian: string;
      tenGoi: string;
      yNghia: string;
      noiDung: string[];
    };
  };
}

export default function BuocDotPhaSection({ data }: BuocDotPhaProps) {
  return (
    <div className="space-y-8">
      {/* Mô tả */}
      <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-600 shadow-sm">
        <p className="text-lg text-gray-700 leading-relaxed">{data.moTa}</p>
      </div>

      {/* Trung tâm đột phá */}
      <div className="bg-yellow-50 rounded-lg p-6 border-2 border-yellow-400 shadow-sm">
        <div className="flex items-start gap-4 mb-4">
          <Zap className="w-8 h-8 text-yellow-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-gray-800 text-xl mb-2">{data.trungTam.title}</h4>
            <p className="text-gray-700">
              <span className="font-semibold">Lĩnh vực:</span> {data.trungTam.linhVuc}
            </p>
            <p className="text-gray-600 italic mt-2">{data.trungTam.moTa}</p>
          </div>
        </div>
      </div>

      {/* Hội nghị */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.hoiNghi.map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md border-t-4 border-blue-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">{item.ten}</h4>
                <p className="text-sm text-blue-600">{item.thoiGian}</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{item.yNghia}</p>
          </div>
        ))}
      </div>

      {/* Chủ trương mới */}
      <div className="bg-blue-50 rounded-lg p-8 border-2 border-blue-300 shadow-sm">
        <h4 className="font-bold text-gray-800 text-xl mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-blue-600" />
          {data.chuTruong.title}
        </h4>
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="text-gray-700 leading-relaxed">{data.chuTruong.noiDung}</p>
          </div>
          
          <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-400">
            <p className="text-gray-700 mb-3">
              <span className="font-semibold text-orange-700">Hạn chế:</span> {data.chuTruong.hanChe}
            </p>
          </div>

          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-400 shadow-sm">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h5 className="font-bold text-red-700 mb-2">{data.chuTruong.hậuQua.title}</h5>
                <p className="text-gray-700">{data.chuTruong.hậuQua.moTa}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nghị quyết V */}
      <div className="bg-red-50 rounded-lg p-8 border-2 border-red-400 shadow-md">
        <div className="text-center mb-6">
          <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full font-bold mb-4">
            {data.nghiQuyetV.yNghia}
          </div>
          <h4 className="text-2xl font-bold text-gray-800 mb-2">{data.nghiQuyetV.ten}</h4>
          <p className="text-red-700 font-semibold">{data.nghiQuyetV.thoiGian}</p>
          <p className="text-gray-600 italic mt-2">&ldquo;{data.nghiQuyetV.tenGoi}&rdquo;</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h5 className="font-bold text-gray-800 mb-4">Nội dung chính:</h5>
          <div className="space-y-3">
            {data.nghiQuyetV.noiDung.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed flex-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
