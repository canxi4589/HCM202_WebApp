"use client";

import Image from "next/image";
import { useState } from "react";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface Summary {
  title: string;
  points: string[];
}

interface SocialismSectionProps {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  accentColor: string;
  content: string[];
  features?: Feature[];
  summary: Summary;
  quote: string;
  image: string;
  index: number;
}

export default function SocialismSection({
  id,
  title,
  subtitle,
  icon,
  color,
  accentColor,
  content,
  features,
  summary,
  quote,
  image,
  index
}: SocialismSectionProps) {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  
  const isReversed = index % 2 === 1;

  return (
    <section className={`py-16 sm:py-24 px-4 sm:px-6 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 
                         bg-gradient-to-br ${color} text-white rounded-full text-2xl sm:text-3xl mb-6`}>
            {icon}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            {id.toUpperCase()}. {title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Main Content Layout */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
          isReversed ? 'lg:grid-flow-col-dense' : ''
        }`}>
          
          {/* Text Content */}
          <div className={isReversed ? 'lg:order-2' : 'lg:order-1'}>
            {/* Quote */}
            <blockquote className={`relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${accentColor} 
                                   border-l-4 border-gradient-to-b ${color.replace('to-', 'to-')} mb-8`}>
              <div className="absolute top-2 left-2 text-4xl opacity-30">"</div>
              <p className="text-lg sm:text-xl font-medium text-gray-800 italic leading-relaxed pl-8">
                {quote}
              </p>
              <div className="absolute bottom-2 right-4 text-4xl opacity-30 transform rotate-180">"</div>
              <cite className="block text-right mt-4 text-gray-700 font-semibold">
                — Chủ tịch Hồ Chí Minh
              </cite>
            </blockquote>

            {/* Content Paragraphs */}
            <div className="space-y-6 mb-8">
              {content.map((paragraph, idx) => (
                <p key={idx} className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Features Grid (for section c) */}
            {features && (
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                  Các đặc trưng cơ bản:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`p-4 sm:p-6 rounded-xl border-2 border-gray-200 hover:border-gray-300 
                                transition-all duration-300 cursor-pointer ${
                                expandedFeature === idx ? 'bg-white shadow-lg' : 'bg-gray-50'
                              }`}
                      onClick={() => setExpandedFeature(expandedFeature === idx ? null : idx)}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl flex-shrink-0">{feature.icon}</span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            {feature.title}
                          </h4>
                          <p className={`text-sm text-gray-600 leading-relaxed transition-all duration-300 ${
                            expandedFeature === idx ? 'opacity-100' : 'opacity-70'
                          }`}>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Summary */}
            <div className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${color} text-white`}>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                {summary.title}
              </h3>
              <ul className="space-y-3">
                {summary.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className={isReversed ? 'lg:order-1' : 'lg:order-2'}>
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br ${color} 
                               rounded-full opacity-20 blur-2xl`} />
                <div className={`absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br ${color} 
                               rounded-full opacity-30 blur-xl`} />
                
                <div className="relative z-10">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-700 
                               group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                    />
                    
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100
                                   transition-opacity duration-300" />
                  </div>
                  
                  <div className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 
                                 bg-gradient-to-t from-black/80 to-transparent text-white`}>
                    <h4 className="font-bold text-lg sm:text-xl mb-2">{title}</h4>
                    <p className="text-sm opacity-90">{subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
