"use client";

interface ContentSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  bgColor?: string;
  pageRef?: string;
}

export default function ContentSection({ 
  title, 
  subtitle, 
  children, 
  bgColor = "bg-white",
  pageRef 
}: ContentSectionProps) {
  return (
    <section className={`py-16 px-4 sm:px-6 ${bgColor}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              {title}
            </h2>
            {pageRef && (
              <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                {pageRef}
              </span>
            )}
          </div>
          {subtitle && (
            <>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            </>
          )}
        </div>

        {/* Content */}
        {children}
      </div>
    </section>
  );
}
