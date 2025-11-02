"use client";

import { TrendingDown, XCircle, AlertCircle } from "lucide-react";

interface TongKetSectionProps {
  data: {
    title: string;
    pageRef: string;
    tinhHinh: {
      moTa: string;
      bieuHien: Array<{
        icon: string;
        title: string;
        data: string;
      }>;
    };
    nguyenNhan: {
      khachQuan: string[];
      chuQuan: {
        title: string;
        noiDung: string[];
      };
    };
  };
}

export default function TongKetSection({ data }: TongKetSectionProps) {
  return (
    <div className="space-y-8">
      {/* Tình hình */}
      <div className="bg-red-50 rounded-lg p-8 border-2 border-red-400 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <TrendingDown className="w-8 h-8 text-red-600" />
          <h3 className="text-2xl font-bold text-gray-800">Tình hình khủng hoảng</h3>
        </div>
        <p className="text-lg text-gray-700 mb-6 font-semibold">{data.tinhHinh.moTa}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.tinhHinh.bieuHien.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-red-500">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-red-700 font-semibold text-lg">{item.data}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Nguyên nhân */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Khách quan */}
        <div className="bg-gray-50 rounded-lg p-6 border-t-4 border-gray-500 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-gray-600" />
            <h4 className="font-bold text-gray-800 text-lg">Nguyên nhân Khách quan</h4>
          </div>
          <ul className="space-y-3">
            {data.nguyenNhan.khachQuan.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-gray-600 mt-1">•</span>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Chủ quan */}
        <div className="bg-red-50 rounded-lg p-6 border-t-4 border-red-600 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <XCircle className="w-6 h-6 text-red-600" />
            <h4 className="font-bold text-red-700 text-lg">{data.nguyenNhan.chuQuan.title}</h4>
          </div>
          <ul className="space-y-3">
            {data.nguyenNhan.chuQuan.noiDung.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-1">✗</span>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
