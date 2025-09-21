"use client";

import { useEffect, useState } from "react";

interface ProgressData {
  label: string;
  percentage: number;
  color: string;
  icon: string;
}

const socialismProgress: ProgressData[] = [
  { label: "Dân chủ hóa", percentage: 85, color: "bg-red-500", icon: "🏛️" },
  { label: "Phát triển kinh tế", percentage: 90, color: "bg-blue-500", icon: "📈" },
  { label: "Văn hóa tiến bộ", percentage: 80, color: "bg-green-500", icon: "📚" },
  { label: "Công bằng xã hội", percentage: 75, color: "bg-purple-500", icon: "⚖️" },
  { label: "Đoàn kết dân tộc", percentage: 95, color: "bg-yellow-500", icon: "🤝" }
];

export default function SocialismProgress() {
  const [animatedPercentages, setAnimatedPercentages] = useState<number[]>(
    new Array(socialismProgress.length).fill(0)
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentages(socialismProgress.map(item => item.percentage));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-8">
      <h3 className="text-xl font-bold text-white mb-6 text-center">
        Tiến trình xây dựng chủ nghĩa xã hội Việt Nam
      </h3>
      
      <div className="space-y-4">
        {socialismProgress.map((item, index) => (
          <div key={item.label} className="space-y-2">
            <div className="flex items-center justify-between text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </div>
              <span className="font-bold">{animatedPercentages[index]}%</span>
            </div>
            
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`}
                style={{ width: `${animatedPercentages[index]}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center text-white/80 text-xs">
        * Dựa trên các thành tựu trong công cuộc Đổi mới và phát triển đất nước
      </div>
    </div>
  );
}