"use client";

interface TimelineProps {
  data: Array<{
    year: string;
    event: string;
    description: string;
  }>;
}

export default function TimelineComponent({ data }: TimelineProps) {
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        Không có dữ liệu timeline
      </div>
    );
  }

  return (
    <div className="relative w-full pb-8">
      {/* Scrollable container */}
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-gray-200">
        <div className="flex items-start gap-0 min-w-max px-4 py-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center">
              {/* Timeline item */}
              <div className="flex flex-col items-center w-[280px] flex-shrink-0">
                {/* Card */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full border-2 border-gray-200 hover:border-red-500">
                  <div className="text-center">
                    {/* Year badge */}
                    <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full font-bold text-lg mb-3 shadow-md">
                      {item.year}
                    </div>
                    
                    {/* Event title */}
                    <h4 className="text-base font-bold text-gray-800 mb-3 min-h-[48px] flex items-center justify-center">
                      {item.event}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Dot on timeline */}
                <div className="relative flex items-center justify-center">
                  <div className="w-5 h-5 bg-red-600 rounded-full border-4 border-white shadow-lg z-10 ring-4 ring-red-100"></div>
                </div>
              </div>

              {/* Connector line (except for last item) */}
              {index < data.length - 1 && (
                <div className="flex items-center w-[80px] flex-shrink-0">
                  <div className="h-1 w-full bg-gradient-to-r from-red-600 to-yellow-500 relative">
                    {/* Arrow */}
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <div 
                        className="w-0 h-0"
                        style={{
                          borderTop: '6px solid transparent',
                          borderBottom: '6px solid transparent',
                          borderLeft: '10px solid rgb(234, 179, 8)'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint for mobile */}
      <div className="text-center mt-6 lg:hidden">
        <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
          <span>👈</span>
          <span>Vuốt sang trái/phải để xem thêm</span>
          <span>👉</span>
        </p>
      </div>

    </div>);
}
