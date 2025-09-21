'use client';

import { useState } from 'react';

interface FilterChipsProps {
  onFilterChange: (filter: string) => void;
  className?: string;
}

const filters = [
  { id: 'all', label: 'Tất cả', color: 'bg-gray-100 text-gray-800 hover:bg-gray-200' },
  { id: 'kinh-te', label: 'Kinh tế', color: 'bg-blue-100 text-blue-800 hover:bg-blue-200' },
  { id: 'chinh-tri', label: 'Chính trị', color: 'bg-green-100 text-green-800 hover:bg-green-200' },
  { id: 'van-hoa', label: 'Văn hóa', color: 'bg-purple-100 text-purple-800 hover:bg-purple-200' },
];

export default function FilterChips({ onFilterChange, className = '' }: FilterChipsProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId);
    onFilterChange(filterId);
  };

  return (
    <div className={`flex flex-wrap gap-2 mb-6 ${className}`}>
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => handleFilterClick(filter.id)}
          className={`inline-flex items-center px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
            activeFilter === filter.id
              ? 'bg-purple-600 text-white'
              : filter.color
          }`}
          style={{
            borderRadius: '9999px',
            minHeight: '32px',
            border: activeFilter === filter.id ? '2px solid #9333ea' : '1px solid transparent'
          }}
          aria-pressed={activeFilter === filter.id}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
