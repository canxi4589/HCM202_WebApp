"use client";

interface EvaluationCardProps {
  data: {
    dungDan: string[];
    saiLam: string[];
    mucTieuChienLuoc: string[];
  };
}

export default function EvaluationCard({ data }: EvaluationCardProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left side - Đúng đắn & Sai lầm */}
      <div className="space-y-6">
        {/* Đúng đắn */}
        <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200 shadow-md">
          <h4 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">✓</span>
            Những điểm đúng đắn
          </h4>
          <ul className="space-y-3">
            {data.dungDan.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sai lầm */}
        <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200 shadow-md">
          <h4 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">⚠️</span>
            Những khuyết điểm, sai lầm
          </h4>
          <ul className="space-y-3">
            {data.saiLam.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right side - Mục tiêu chiến lược */}
      <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 border-2 border-red-300 shadow-lg flex flex-col justify-center">
        <div className="text-center mb-6">
          <div className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-bold text-lg mb-4 shadow-md">
            Mục tiêu Chiến lược Xuyên suốt
          </div>
        </div>
        
        <div className="space-y-4">
          {data.mucTieuChienLuoc.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md border-l-4 border-red-600 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-red-600">{index + 1}</span>
                <p className="text-gray-800 font-semibold leading-relaxed flex-1">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
