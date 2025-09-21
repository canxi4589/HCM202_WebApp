interface LocalQuoteCardProps {
  quote: string;
  author?: string;
  variant?: 'blue' | 'green' | 'purple' | 'brand';
  className?: string;
  style?: React.CSSProperties;
}

export default function LocalQuoteCard({ 
  quote, 
  author = "Chủ tịch Hồ Chí Minh", 
  variant = 'blue',
  className = '',
  style
}: LocalQuoteCardProps) {
  const variantStyles = {
    blue: {
      borderColor: '#2563eb',
      background: 'linear-gradient(180deg, rgba(37, 99, 235, 0.08), rgba(37, 99, 235, 0.04))',
      borderLeft: '4px solid #2563eb'
    },
    green: {
      borderColor: '#16a34a',
      background: 'linear-gradient(180deg, rgba(22, 163, 74, 0.08), rgba(22, 163, 74, 0.04))',
      borderLeft: '4px solid #16a34a'
    },
    purple: {
      borderColor: '#9333ea',
      background: 'linear-gradient(180deg, rgba(147, 51, 234, 0.08), rgba(147, 51, 234, 0.04))',
      borderLeft: '4px solid #9333ea'
    },
    brand: {
      borderColor: '#dc2626',
      background: 'linear-gradient(180deg, rgba(220, 38, 38, 0.08), rgba(220, 38, 38, 0.04))',
      borderLeft: '4px solid #dc2626'
    }
  };

  const currentStyle = variantStyles[variant];

  return (
    <blockquote 
      className={`relative ${className}`}
      style={{
        ...currentStyle,
        borderRadius: '14px',
        padding: '32px',
        fontStyle: 'italic',
        marginBottom: '24px',
        ...style
      }}
    >
      <div className="relative">
        {/* Quote icon */}
        <svg 
          className="absolute -top-2 -left-2 w-6 h-6 opacity-20" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
          style={{ color: currentStyle.borderColor }}
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
        
        <p 
          className="mb-4 pl-8"
          style={{ 
            fontSize: '1.125rem',
            lineHeight: '1.75',
            color: '#374151'
          }}
        >
          {quote}
        </p>
      </div>
    </blockquote>
  );
}
