"use client";

import { useState, useEffect } from "react";

interface Section {
  id: string;
  title: string;
  icon: string;
  color: string;
}

interface SocialismNavigationProps {
  sections: Section[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export default function SocialismNavigation({ 
  sections, 
  activeSection, 
  onSectionClick 
}: SocialismNavigationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-50 
                    transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                    }`}>
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-2">
        <div className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className={`group relative flex items-center gap-3 p-3 rounded-xl
                         transition-all duration-300 hover:scale-105 ${
                           activeSection === section.id
                             ? `bg-gradient-to-r ${section.color} text-white shadow-lg`
                             : 'hover:bg-gray-100 text-gray-600'
                         }`}
              title={section.title}
            >
              <span className="text-xl">{section.icon}</span>
              <span className={`font-medium text-sm transition-all duration-300 ${
                activeSection === section.id ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'
              } group-hover:opacity-100 group-hover:w-auto`}>
                {section.id.toUpperCase()}
              </span>
              
              {/* Progress indicator */}
              {activeSection === section.id && (
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2
                               w-1 h-8 bg-white rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
