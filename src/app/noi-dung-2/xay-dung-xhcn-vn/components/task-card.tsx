"use client";

import { Target, TrendingUp, Users, Factory, Package, DollarSign } from "lucide-react";
import Image from "next/image";

interface TaskCardProps {
  data: {
    thoiGian: string;
    capBach: {
      title: string;
      content: string;
      note: string;
    };
    kinhTe: {
      title: string;
      tasks: string[];
    };
  };
}

export default function TaskCard({ data }: TaskCardProps) {
  const taskIcons = [Factory, TrendingUp, Package, DollarSign];

  return (
    <div className="space-y-10">
      {/* Enhanced Time Period Header */}
      <div className="relative text-center py-12">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-1 bg-red-200"></div>
        </div>
        <div className="relative inline-block">
          <div className="bg-red-700 text-white px-12 py-4 rounded-xl font-bold text-2xl shadow-lg border-2 border-red-800 relative">
            <div className="relative flex items-center gap-3">
              <span className="text-yellow-300">⏱</span>
              <span>Giai đoạn {data.thoiGian}</span>
              <span className="text-yellow-300">⏱</span>
            </div>
          </div>
        </div>
      </div>

      {/* Priority Task - Enhanced Design with Image */}
      <div className="relative group">
        <div className="relative bg-orange-50 rounded-xl p-8 border-2 border-orange-300 shadow-lg">
          {/* Priority Badge */}
          <div className="absolute -top-5 left-8 z-10">
            <div className="bg-red-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
              <span>🔥</span>
              <span>ƯU TIÊN SỐ 1</span>
              <span>🔥</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8 mt-4">
            <div className="flex-shrink-0 w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center shadow-md">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-3xl font-bold text-gray-800">{data.capBach.title}</h4>
          </div>

          {/* Image Gallery Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Image 1 */}
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group/img">
              <Image
                src="/images/sau-1975/sau1975.jpg"
                alt="Đời sống nhân dân sau 1975"
                fill
                className="object-cover transition-transform duration-500 group-hover/img:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-sm">Đời sống nhân dân sau 1975</p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group/img">
              <Image
                src="/images/sau-1975/hophanh.jpg"
                alt="Hợp tác hóa nông nghiệp"
                fill
                className="object-cover transition-transform duration-500 group-hover/img:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-sm">Hợp tác hóa nông nghiệp</p>
              </div>
            </div>
          </div>
          
          {/* Main content with icon */}
          <div className="bg-white rounded-lg p-8 shadow-md mb-6 border-l-4 border-red-600">
            <div className="flex items-start gap-4">
              <Users className="w-12 h-12 text-red-600 flex-shrink-0 mt-1" />
              <p className="text-xl text-gray-800 font-semibold leading-relaxed">
                {data.capBach.content}
              </p>
            </div>
          </div>
          
          {/* Significance note with enhanced styling */}
          <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-xl">💡</span>
              </div>
              <div>
                <p className="font-bold text-gray-800 mb-2 text-lg">Ý nghĩa chiến lược:</p>
                <p className="text-gray-700 leading-relaxed">
                  {data.capBach.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Economic Tasks - Enhanced Grid with Images */}
      <div className="relative">
        <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-300 shadow-lg">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-md">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-3xl font-bold text-gray-800">{data.kinhTe.title}</h4>
          </div>

          {/* Featured Image Banner */}
          <div className="relative h-80 rounded-xl overflow-hidden shadow-lg mb-8">
            <Image
              src="/images/sau-1975/daihoidang4.jpg"
              alt="Đại hội Đảng lần thứ IV - Định hướng phát triển kinh tế"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 rounded-lg p-6">
                <h5 className="text-gray-800 font-bold text-2xl mb-2">Đại hội Đảng lần thứ IV</h5>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Định hướng chiến lược phát triển kinh tế quốc gia giai đoạn 1976-1980
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {data.kinhTe.tasks.map((task, index) => {
              const Icon = taskIcons[index % taskIcons.length];
              return (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-200 relative"
                >
                  {/* Number badge */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1 pt-2">
                      {task}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Images Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/sau-1975/chienthang.jpg"
                alt="Chiến thắng lịch sử"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white font-semibold text-sm">Chiến thắng 1975</p>
              </div>
            </div>

            <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/sau-1975/baovetoquoc.jpg"
                alt="Bảo vệ Tổ quốc"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white font-semibold text-sm">Bảo vệ Tổ quốc</p>
              </div>
            </div>

            <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/sau-1975/cuoi.jpg"
                alt="Niềm vui của nhân dân"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white font-semibold text-sm">Niềm vui nhân dân</p>
              </div>
            </div>
          </div>

          {/* Summary footer */}
          <div className="mt-8 bg-blue-100 rounded-lg p-6 border-2 border-blue-300">
            <p className="text-center text-gray-800 font-semibold text-lg">
              🎯 Mục tiêu: Phát triển toàn diện và bền vững nền kinh tế quốc dân
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
