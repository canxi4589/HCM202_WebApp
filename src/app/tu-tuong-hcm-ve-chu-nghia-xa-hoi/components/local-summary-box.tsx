interface LocalSummaryBoxProps {
  title?: string;
  points: string[];
  annotations?: string[];
  variant?: 'blue' | 'green' | 'purple' | 'brand';
  className?: string;
}

export default function LocalSummaryBox({ 
  title = "Tóm tắt:", 
  points, 
  annotations,
  variant = 'blue',
  className = ''
}: LocalSummaryBoxProps) {
  const variantStyles = {
    blue: { 
      background: '#eff6ff', 
      borderColor: '#bfdbfe', 
      dotColor: '#2563eb',
      titleColor: '#1e40af'
    },
    green: { 
      background: '#f0fdf4', 
      borderColor: '#bbf7d0', 
      dotColor: '#16a34a',
      titleColor: '#15803d'
    },
    purple: { 
      background: '#faf5ff', 
      borderColor: '#e9d5ff', 
      dotColor: '#9333ea',
      titleColor: '#7c3aed'
    },
    brand: { 
      background: '#fef2f2', 
      borderColor: '#fecaca', 
      dotColor: '#dc2626',
      titleColor: '#b91c1c'
    }
  };

  const currentStyle = variantStyles[variant];

  return (
    <div 
      className={className}
      style={{
        background: currentStyle.background,
        border: `1px solid ${currentStyle.borderColor}`,
        borderRadius: '14px',
        padding: '32px'
      }}
    >
      <h3 
        className="font-semibold mb-4"
        style={{ 
          fontSize: '1.125rem',
          color: currentStyle.titleColor
        }}
      >
        {title}
      </h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {points.map((point, index) => (
          <li 
            key={index} 
            className="flex items-start gap-3"
            style={{ marginBottom: index < points.length - 1 ? '16px' : '0' }}
          >
            <div 
              className="rounded-full flex-shrink-0"
              style={{ 
                width: '8px',
                height: '8px',
                backgroundColor: currentStyle.dotColor,
                marginTop: '8px'
              }}
            />
            <span 
              style={{ 
                color: '#374151',
                lineHeight: '1.625',
                fontSize: '1rem'
              }}
            >
              {point}
            </span>
          </li>
        ))}
      </ul>

      {/* Annotations Section */}
      {annotations && annotations.length > 0 && (
        <>
          <div 
            style={{ 
              borderTop: `1px solid ${currentStyle.borderColor}`,
              marginTop: '24px',
              paddingTop: '20px'
            }}
          >
            <h4 
              className="font-semibold mb-3"
              style={{ 
                fontSize: '1rem',
                color: currentStyle.titleColor
              }}
            >
              Chú thích:
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {annotations.map((annotation, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3"
                  style={{ marginBottom: index < annotations.length - 1 ? '12px' : '0' }}
                >
                  <div 
                    className="rounded-full flex-shrink-0"
                    style={{ 
                      width: '6px',
                      height: '6px',
                      backgroundColor: currentStyle.dotColor,
                      marginTop: '8px',
                      opacity: 0.6
                    }}
                  />
                  <span 
                    style={{ 
                      color: '#6b7280',
                      lineHeight: '1.5',
                      fontSize: '0.875rem',
                      fontStyle: 'italic'
                    }}
                  >
                    {annotation}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
