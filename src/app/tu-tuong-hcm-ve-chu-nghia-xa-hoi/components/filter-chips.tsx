'use client';

import { useState } from 'react';

interface FilterChipsProps {
  onFilterChange: (filter: string) => void;
}

export default function FilterChips({ onFilterChange }: FilterChipsProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Tất cả', icon: '📋' },
    { id: 'kinh-te', label: 'Kinh tế', icon: '💰' },
    { id: 'chinh-tri', label: 'Chính trị', icon: '🏛️' },
    { id: 'van-hoa', label: 'Văn hóa', icon: '🎭' },
    { id: 'chu-the-xay-dung', label: 'Chủ thể xây dựng', icon: '👥' }
  ];

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    onFilterChange(filterId);
  };

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleFilterChange(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeFilter === category.id
              ? 'bg-purple-600 text-white shadow-lg'
              : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
          }`}
        >
          <span className="mr-2">{category.icon}</span>
          {category.label}
        </button>
      ))}
    </div>
  );
}
