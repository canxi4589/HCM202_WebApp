"use client";

import { CheckCircle2, Target, Sprout, Cog, Shield } from "lucide-react";

interface DinhHuongSectionProps {
  data: {
    title: string;
    pageRef: string;
    nhiemVuChienLuoc: string[];
    congNghiepHoa: {
      title: string;
      phuongChim: string;
      noiDung: Array<{
        icon: string;
        title: string;
        description: string;
      }>;
    };
  };
}

export default function DinhHuongSection({ data }: DinhHuongSectionProps) {
  const iconMap: { [key: string]: any } = {
    "🌾": Sprout,
    "⚙️": Cog,
    "🛡️": Shield,
  };

  return (
    <div className="space-y-8">
      {/* Nhiệm vụ Chiến lược */}
      <div className="bg-red-50 rounded-lg p-8 border-l-4 border-red-600 shadow-sm">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Target className="w-8 h-8 text-red-600" />
          Hai Nhiệm vụ Chiến lược
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.nhiemVuChienLuoc.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-gray-800 font-semibold leading-relaxed">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Công nghiệp hóa */}
      <div className="bg-blue-50 rounded-lg p-8 border-2 border-blue-300 shadow-sm">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{data.congNghiepHoa.title}</h3>
        <div className="bg-yellow-50 rounded-lg p-4 mb-6 border-l-4 border-yellow-500">
          <p className="text-gray-800 font-semibold">
            <span className="text-yellow-700">Phương châm:</span> {data.congNghiepHoa.phuongChim}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {data.congNghiepHoa.noiDung.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-blue-200">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {IconComponent ? (
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  ) : (
                    <span className="text-3xl">{item.icon}</span>
                  )}
                </div>
                <h4 className="font-bold text-gray-800 mb-3 text-lg">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
