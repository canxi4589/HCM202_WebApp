import Link from 'next/link';

export default function LocalFooterCTA() {
  return (
    <section 
      className="border-t border-gray-200"
      style={{ 
        background: '#f9fafb',
        paddingTop: '80px',
        paddingBottom: '80px'
      }}
    >
      <div 
        className="mx-auto px-6"
        style={{ maxWidth: '1120px' }}
      >
        <div 
          className="mx-auto text-center"
          style={{ maxWidth: '896px' }}
        >
          <h2 
            className="font-bold text-gray-900 mb-4"
            style={{ fontSize: '1.875rem', lineHeight: '2.25rem' }}
          >
            Tiếp tục học tập
          </h2>
          <p 
            className="text-gray-600 mb-8"
            style={{ fontSize: '1.125rem', lineHeight: '1.75' }}
          >
            Củng cố kiến thức với các tài liệu bổ sung và bài kiểm tra
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tai-lieu"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              style={{
                minHeight: '44px',
                borderRadius: '12px',
                textDecoration: 'none'
              }}
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                style={{ width: '20px', height: '20px' }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              Tải PDF tóm tắt
            </Link>
            
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
              style={{
                minHeight: '44px',
                borderRadius: '12px',
                textDecoration: 'none'
              }}
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                style={{ width: '20px', height: '20px' }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              Ôn tập câu hỏi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
