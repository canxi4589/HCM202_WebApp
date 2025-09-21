'use client';

import { useEffect, useState } from 'react';

const items = [
  { id: 'a-quan-niem', label: 'Quan niệm' },
  { id: 'b-tat-yeu', label: 'Tất yếu' },
  { id: 'c-dac-trung', label: 'Đặc trưng' },
  { id: 'y-nghia', label: 'Ý nghĩa' },
];

interface LocalTOCProps {
  variant?: 'desktop' | 'mobile';
  className?: string;
}

export default function LocalTOC({ variant = 'desktop', className = '' }: LocalTOCProps) {
  const [active, setActive] = useState(items[0].id);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { 
        threshold: 0,
        rootMargin: '-120px 0px -80% 0px'
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  if (variant === 'mobile') {
    return (
      <div className={`md:hidden ${className}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.01]"
          style={{ borderRadius: '14px' }}
          aria-expanded={isOpen}
          aria-controls="mobile-toc"
        >
          <span className="font-medium text-gray-900">
            {items.find(item => item.id === active)?.label || 'Mục lục'}
          </span>
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isOpen && (
          <nav 
            id="mobile-toc"
            aria-label="Mục lục"
            className="mt-2 bg-white border border-gray-200 shadow-sm overflow-hidden"
            style={{ borderRadius: '14px' }}
          >
            <ul className="divide-y divide-gray-100">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`block px-4 py-3 text-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-sm ${
                      active === item.id
                        ? 'bg-blue-50 text-blue-600 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                    aria-current={active === item.id ? 'page' : undefined}
                    style={{
                      minHeight: '44px',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    );
  }

  return (
    <nav 
      aria-label="Mục lục"
      className={`hidden lg:block sticky ${className}`}
      style={{ 
        top: '96px',
        zIndex: 40
      }}
    >
      <div 
        className="bg-white border border-gray-200 p-4 shadow-sm"
        style={{ 
          borderRadius: '14px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}
      >
        <h3 className="text-sm font-semibold text-gray-900 mb-4">
          Nội dung
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {items.map((item) => (
            <li key={item.id} style={{ marginBottom: '8px' }}>
              <a
                href={`#${item.id}`}
                className={`block px-3 py-2 text-sm transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-md hover:translate-x-1 ${
                  active === item.id ? 'font-medium' : 'hover:bg-gray-50'
                }`}
                style={{
                  borderRadius: '8px',
                  color: active === item.id ? '#2563eb' : '#4b5563',
                  backgroundColor: active === item.id ? '#eff6ff' : 'transparent',
                  borderLeft: active === item.id ? '3px solid #2563eb' : '3px solid transparent',
                  paddingLeft: active === item.id ? '9px' : '12px',
                  minHeight: '44px',
                  display: 'flex',
                  alignItems: 'center'
                }}
                aria-current={active === item.id ? 'page' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
