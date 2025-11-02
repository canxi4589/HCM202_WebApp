"use client";

import { Calendar, Users, MapPin, Flag } from "lucide-react";

export default function DaiHoiIntro() {
  return (
    <div className="mb-12">
      {/* Main intro text */}
      <div className="bg-red-50 rounded-lg p-8 shadow-sm border-l-4 border-red-600 mb-8">
        <p className="text-lg text-gray-700 leading-relaxed">
          Đại hội V chính thức khai mạc vào ngày <strong className="text-red-700">27 tháng 3 năm 1982</strong> tại Hà Nội. 
          Tham dự Đại hội có <strong className="text-red-700">1.033 đại biểu</strong>, đại diện cho{" "}
          <strong className="text-red-700">1,7 triệu đảng viên</strong> cả nước. 
          Về nhân sự trọng yếu, đồng chí <strong className="text-red-700">Lê Duẩn</strong> tiếp tục được bầu làm 
          Tổng Bí thư Ban Chấp hành Trung ương Đảng.
        </p>
      </div>

      {/* Key highlights in cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-red-500">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-red-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Thời điểm</h4>
            <p className="text-sm text-gray-600">Tháng 3/1982</p>
            <p className="text-xs text-gray-500 mt-1">Bước ngoặt lịch sử</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-blue-500">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Quy mô</h4>
            <p className="text-sm text-gray-600">1.033 đại biểu</p>
            <p className="text-xs text-gray-500 mt-1">1,7 triệu đảng viên</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-green-500">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Địa điểm</h4>
            <p className="text-sm text-gray-600">Hà Nội</p>
            <p className="text-xs text-gray-500 mt-1">Thủ đô Việt Nam</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-red-600">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <Flag className="w-8 h-8 text-red-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Nhiệm vụ</h4>
            <p className="text-sm text-gray-600">Vượt khủng hoảng</p>
            <p className="text-xs text-gray-500 mt-1">Đổi mới đất nước</p>
          </div>
        </div>
      </div>
    </div>
  );
}
