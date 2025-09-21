import { ReactNode } from 'react';

interface LocalCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

export function LocalCard({ children, className = '', hover = true, style }: LocalCardProps) {
  return (
    <div 
      className={`bg-white border border-gray-200 transition-all duration-200 ${className}`}
      style={{ 
        borderRadius: '14px',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        ...(hover ? {
          cursor: 'default'
        } : {}),
        ...style
      }}
      onMouseEnter={(e) => {
        if (hover && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
        }
      }}
      onMouseLeave={(e) => {
        if (hover) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
        }
      }}
    >
      {children}
    </div>
  );
}

interface LocalCardGridProps {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LocalCardGrid({ 
  children, 
  columns = 3, 
  gap = 'md',
  className = ''
}: LocalCardGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  const gridGap = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8'
  };

  return (
    <div className={`grid ${gridCols[columns]} ${gridGap[gap]} ${className}`}>
      {children}
    </div>
  );
}

interface LocalFeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  variant?: 'blue' | 'green' | 'purple' | 'brand';
  className?: string;
  category?: string;
}

export function LocalFeatureCard({ 
  title, 
  description, 
  icon, 
  variant = 'blue',
  className = '',
  category
}: LocalFeatureCardProps) {
  const variantColors = {
    blue: {
      border: 'border-blue-200 hover:border-blue-300',
      icon: 'text-blue-600',
      category: 'bg-blue-100 text-blue-800'
    },
    green: {
      border: 'border-green-200 hover:border-green-300',
      icon: 'text-green-600',
      category: 'bg-green-100 text-green-800'
    },
    purple: {
      border: 'border-purple-200 hover:border-purple-300',
      icon: 'text-purple-600',
      category: 'bg-purple-100 text-purple-800'
    },
    brand: {
      border: 'border-red-200 hover:border-red-300',
      icon: 'text-red-600',
      category: 'bg-red-100 text-red-800'
    }
  };

  const currentVariant = variantColors[variant];

  return (
    <LocalCard 
      className={`p-6 transition-colors duration-200 ${currentVariant.border} ${className}`}
      style={{ 
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {category && (
        <div className="mb-3">
          <span 
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${currentVariant.category}`}
          >
            {category}
          </span>
        </div>
      )}
      
      {icon && (
        <div className={`mb-4 ${currentVariant.icon}`} style={{ fontSize: '24px' }}>
          {icon}
        </div>
      )}
      
      <h3 
        className="font-semibold text-gray-900 mb-3"
        style={{ fontSize: '1.125rem', lineHeight: '1.75' }}
      >
        {title}
      </h3>
      
      <p 
        className="text-gray-700 flex-1"
        style={{ lineHeight: '1.625' }}
      >
        {description}
      </p>
    </LocalCard>
  );
}
