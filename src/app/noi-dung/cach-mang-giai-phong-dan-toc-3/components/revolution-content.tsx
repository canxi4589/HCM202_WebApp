"use client";

import Image from "next/image";

interface RevolutionStep {
  id: number;
  title: string;
  subtitle: string;
  content: string[];
  quote: string;
  author: string;
  image: string;
  altText: string;
  color: string;
}

interface RevolutionContentProps {
  step: RevolutionStep;
  index: number;
}

export default function RevolutionContent({ step, index }: RevolutionContentProps) {
  return (
    <section
      className={`content-section-${index} py-12 sm:py-20 px-3 sm:px-6 ${
        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
          index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
        }`}>
          {/* Content */}
          <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${step.color} 
                               text-white rounded-full flex items-center justify-center
                               text-lg sm:text-xl font-bold flex-shrink-0 mt-1 sm:mt-0`}>
                  {step.id}
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-tight mb-1">
                    {step.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600">{step.subtitle}</p>
                </div>
              </div>

              <blockquote className="relative border-l-4 border-red-600 pl-4 sm:pl-6 py-4 sm:py-6 
                                   bg-gradient-to-r from-red-50 to-orange-50 
                                   rounded-r-lg shadow-md">
                <div className="absolute top-1 left-1 sm:top-2 sm:left-2 text-red-300 text-2xl sm:text-4xl leading-none">"</div>
                <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 italic 
                             leading-relaxed pl-4 sm:pl-6">
                  {step.quote}
                </p>
                <div className="absolute bottom-1 right-2 sm:bottom-2 sm:right-4 text-red-300 text-2xl sm:text-4xl leading-none 
                               transform rotate-180">"</div>
                <cite className="block text-right mt-3 sm:mt-4 text-red-700 font-medium text-xs sm:text-sm">
                  — {step.author}
                </cite>
              </blockquote>

              <ul className="space-y-3 sm:space-y-4">
                {step.content.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-br ${step.color} 
                                   rounded-full mt-2 flex-shrink-0`} />
                    <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Media */}
          <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} mt-6 lg:mt-0`}>
            <div className="relative group">
              <div className="relative overflow-visible">
                <div className={`absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br ${step.color} 
                               rounded-full opacity-20 blur-xl`} />
                <div className={`absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-br ${step.color} 
                               rounded-full opacity-30 blur-lg`} />
                
                <div className="relative z-10 bg-white p-3 sm:p-4 rounded-xl shadow-2xl 
                               transform rotate-1 sm:rotate-2 group-hover:rotate-0 transition-all duration-500
                               group-hover:scale-105">
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={step.image}
                      alt={step.altText}
                      fill
                      className="object-cover transition-transform duration-500 
                               group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                    />
                    
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100
                                   transition-opacity duration-300 flex items-center justify-center
                                   rounded-lg">
                      <div className="text-center text-white p-3 sm:p-4">
                        <h4 className="font-bold text-base sm:text-lg mb-2">{step.title}</h4>
                        <p className="text-xs sm:text-sm">{step.altText}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 sm:mt-4 text-center">
                    <p className="text-gray-600 text-xs sm:text-sm italic">{step.altText}</p>
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