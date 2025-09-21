'use client';

import Image from 'next/image';
import { useState } from 'react';
import Header from '@/components/header';
import ScrollToTopButton from '@/components/scroll-to-top-button';
import { socialismContent } from './constants/socialism-content';

// Local components
import LocalScrollProgressBar from './components/local-scroll-progress-bar';
import LocalTOC from './components/local-toc';
import LocalQuoteCard from './components/local-quote-card';
import LocalSummaryBox from './components/local-summary-box';
import { LocalCard, LocalCardGrid, LocalFeatureCard } from './components/local-card';
import FilterChips from './components/filter-chips';

export default function SocialismPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter features based on selected category
  const filteredFeatures = socialismContent.sections[2].features?.filter(feature => 
    activeFilter === 'all' || feature.category === activeFilter
  ) || [];

  const getCategoryLabel = (category: string) => {
    const labels = {
      'kinh-te': 'Kinh tế',
      'chinh-tri': 'Chính trị', 
      'van-hoa': 'Văn hóa',
      'chu-the-xay-dung': 'Chủ thể xây dựng' // ADD THIS LINE
    };
    return labels[category as keyof typeof labels] || '';
  };

  // ADD THIS FUNCTION for category summaries
  const getCategorySummary = (category: string) => {
    const summaries = {
      'all': 'Hiển thị tất cả các đặc trưng cơ bản của xã hội chủ nghĩa theo tư tưởng Hồ Chí Minh',
      'kinh-te': 'Xã hội chủ nghĩa là xã hội có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu',
      'chinh-tri': 'Xã hội chủ nghĩa là xã hội có chế độ dân chủ.',
      'van-hoa': 'Xã hội xã hội chủ nghĩa có trình độ phát triển cao về văn hóa và đạo đức, bảo đảm sự cân bằng, hợp lý trong các quan hệ xã hội.',
      'chu-the-xay-dung': 'Chủ nghĩa xã hội là công trình tập thể của nhân dân dưới sự lãnh đạo của Đảng Cộng Sản'
    };
    return summaries[category as keyof typeof summaries] || '';
  };

  return (
    <>
      <LocalScrollProgressBar />
      
      <div className="min-h-screen bg-white">
        <Header />
        <ScrollToTopButton />

        <main id="main-content">
          {/* Hero Section */}
          <section 
            className="relative flex items-center justify-center overflow-hidden"
            // style={{ paddingTop: '400px', paddingBottom: '80px' }}
            style={{height: '100vh'}}
          >
            <div className="absolute inset-0">
              <Image
                src="/images/tu-tuong-hcm-bg.jpg"
                alt=""
                fill
                className="object-cover"
                priority
                sizes="100vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              <div 
                className="absolute inset-0"
                style={{ background: 'rgba(0, 0, 0, 0.6)' }}
              />
            </div>

            <div 
              className="relative z-10 text-center text-white px-6"
              style={{ 
                maxWidth: '1120px',
                margin: '0 auto',
                paddingTop: '64px',
                paddingBottom: '64px'
              }}
            >
              <h1 
                className="mb-6 font-bold text-white"
                style={{ 
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  lineHeight: '1.1'
                }}
              >
                {socialismContent.title}
              </h1>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#a-quan-niem"
                  className="px-6 py-3 border border-white/30 text-white/90 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  style={{ 
                    minHeight: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    borderRadius: '12px'
                  }}
                >
                  Quan niệm
                </a>
                <a 
                  href="#b-tat-yeu"
                  className="px-6 py-3 border border-white/30 text-white/90 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  style={{ 
                    minHeight: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    borderRadius: '12px'
                  }}
                >
                  Tất yếu
                </a>
                <a 
                  href="#c-dac-trung"
                  className="px-6 py-3 border border-white/30 text-white/90 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  style={{ 
                    minHeight: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    borderRadius: '12px'
                  }}
                >
                  Đặc trưng
                </a>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <div 
            className="mx-auto px-6"
            style={{ 
              maxWidth: '1120px',
              paddingTop: '32px',
              paddingBottom: '32px'
            }}
          >
            <div className="flex gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="flex-1 max-w-none">
                {/* Mobile TOC */}
                <LocalTOC variant="mobile" className="mb-8" />

                {/* Section A: Quan niệm */}
                <section 
                  id="a-quan-niem" 
                  className="mb-16" 
                  style={{ 
                    scrollMarginTop: '96px',
                    paddingBottom: '64px'
                  }}
                  aria-labelledby="heading-a"
                >
                  <header className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div 
                        className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg"
                        style={{ borderRadius: '12px' }}
                      >
                        A
                      </div>
                      <div>
                        <h2 
                          id="heading-a"
                          className="text-blue-600 mb-2"
                          style={{ 
                            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                            lineHeight: '1.2',
                            fontWeight: '600'
                          }}
                        >
                          {socialismContent.sections[0].title}
                        </h2>
                        <p className="text-gray-600">
                          {socialismContent.sections[0].subtitle}
                        </p>
                      </div>
                    </div>
                  </header>

                  <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="lg:col-span-2 space-y-8">
                      <LocalQuoteCard 
                        quote={socialismContent.sections[0].quote}
                        variant="blue"
                      />

                      <div className="space-y-6">
                        {socialismContent.sections[0].content.map((paragraph, index) => (
                          <p 
                            key={index} 
                            className="text-gray-700"
                            style={{ 
                              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                              lineHeight: '1.6',
                              maxWidth: '72ch'
                            }}
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      <LocalSummaryBox 
                        points={socialismContent.sections[0].summary.points}
                        annotations={socialismContent.sections[0].annotations}
                        variant="blue"
                      />
                    </div>

                    <div className="lg:col-span-1">
                      <div className="sticky top-24">
                        <LocalCard className="overflow-hidden">
                          <Image
                            src={socialismContent.sections[0].image}
                            alt="Quan niệm của Hồ Chí Minh về chủ nghĩa xã hội"
                            width={960}
                            height={540}
                            className="w-full object-cover"
                            style={{ aspectRatio: '16/9' }}
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                          <div className="p-4">
                            <h3 className="font-semibold text-gray-900 mb-2">
                              {socialismContent.sections[0].title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {socialismContent.sections[0].subtitle}
                            </p>
                          </div>
                        </LocalCard>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section B: Tất yếu */}
                <section 
                  id="b-tat-yeu" 
                  className="mb-16" 
                  style={{ 
                    scrollMarginTop: '96px',
                    paddingBottom: '64px'
                  }}
                  aria-labelledby="heading-b"
                >
                  <header className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div 
                        className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold text-lg"
                        style={{ borderRadius: '12px' }}
                      >
                        B
                      </div>
                      <div>
                        <h2 
                          id="heading-b"
                          className="text-green-600 mb-2"
                          style={{ 
                            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                            lineHeight: '1.2',
                            fontWeight: '600'
                          }}
                        >
                          {socialismContent.sections[1].title}
                        </h2>
                        <p className="text-gray-600">
                          {socialismContent.sections[1].subtitle}
                        </p>
                      </div>
                    </div>
                  </header>

                  <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="lg:col-span-1 lg:order-2">
                      <div className="sticky top-24">
                        <LocalCard className="overflow-hidden">
                          <Image
                            src={socialismContent.sections[1].image}
                            alt="Tiến lên chủ nghĩa xã hội là tất yếu khách quan"
                            width={960}
                            height={540}
                            className="w-full object-cover"
                            style={{ aspectRatio: '16/9' }}
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                          <div className="p-4">
                            <h3 className="font-semibold text-gray-900 mb-2">
                              {socialismContent.sections[1].title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              Song, tùy theo bối cảnh cụ thể mà con đường đi lên chủ nghĩa xã hội có thể khác nhau.
                            </p>
                          </div>
                        </LocalCard>
                      </div>
                    </div>

                    <div className="lg:col-span-2 lg:order-1 space-y-8">
                      <LocalQuoteCard 
                        quote={socialismContent.sections[1].quote}
                        variant="green"
                      />

                      <div className="space-y-6">
                        {socialismContent.sections[1].content.map((paragraph, index) => (
                          <p 
                            key={index} 
                            className="text-gray-700"
                            style={{ 
                              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                              lineHeight: '1.6',
                              maxWidth: '72ch'
                            }}
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      <LocalSummaryBox 
                        points={socialismContent.sections[1].summary.points}
                        annotations={socialismContent.sections[1].annotations}
                        variant="green"
                      />
                    </div>
                  </div>
                </section>

                {/* Section C: Đặc trưng */}
                <section 
                  id="c-dac-trung" 
                  className="mb-16" 
                  style={{ 
                    scrollMarginTop: '96px',
                    paddingBottom: '64px'
                  }}
                  aria-labelledby="heading-c"
                >
                  <header className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div 
                        className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-lg"
                        style={{ borderRadius: '12px' }}
                      >
                        C
                      </div>
                      <div>
                        <h2 
                          id="heading-c"
                          className="text-purple-600 mb-2"
                          style={{ 
                            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                            lineHeight: '1.2',
                            fontWeight: '600'
                          }}
                        >
                          {socialismContent.sections[2].title}
                        </h2>
                        <p className="text-gray-600">
                          {socialismContent.sections[2].subtitle}
                        </p>
                      </div>
                    </div>
                  </header>

                  <div className="space-y-8">
                    <LocalQuoteCard 
                      quote={socialismContent.sections[2].quote}
                      variant="purple"
                    />

                    <div>
                      {socialismContent.sections[2].content.map((paragraph, index) => (
                        <p 
                          key={index} 
                          className="text-gray-700 mb-6"
                          style={{ 
                            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                            lineHeight: '1.6',
                            maxWidth: '72ch'
                          }}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Features Section */}
                    <div>
                      <h3 
                        className="text-gray-900 mb-6"
                        style={{ 
                          fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                          lineHeight: '1.3',
                          fontWeight: '600'
                        }}
                      >
                        Một số đặc trưng cơ bản:
                      </h3>

                      {/* Filter Chips */}
                      <FilterChips onFilterChange={setActiveFilter} />

                      {/* Category Summary */}
                      <div 
                        className="mb-6 p-4 bg-purple-50 border border-purple-200 rounded-lg"
                        style={{ borderRadius: '12px' }}
                      >
                        <p 
                          className="text-purple-800 leading-relaxed"
                          style={{ fontSize: '1rem', fontStyle: 'italic' }}
                        >
                          <strong>📌 Khái quát:</strong> {getCategorySummary(activeFilter)}
                        </p>
                      </div>

                      {/* Features Grid */}
                      <LocalCardGrid columns={2} gap="md">
                        {filteredFeatures.map((feature, index) => (
                          <LocalFeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={<span style={{ fontSize: '24px' }}>{feature.icon}</span>}
                            variant="purple"
                            category={getCategoryLabel(feature.category)}
                          />
                        ))}
                      </LocalCardGrid>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <LocalSummaryBox 
                          points={socialismContent.sections[2].summary.points}
                          variant="purple"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* Conclusion Section */}
                <section 
                  id="y-nghia" 
                  className="mb-16" 
                  style={{ 
                    scrollMarginTop: '96px',
                    paddingBottom: '64px'
                  }}
                  aria-labelledby="heading-conclusion"
                >
                  <div 
                    className="text-white p-8 lg:p-12"
                    style={{
                      background: 'linear-gradient(to bottom right, #dc2626 0%, #b91c1c 85%, #991b1b 100%)',
                      borderRadius: '18px'
                    }}
                  >
                    <header className="text-center mb-12">
                      <div className="flex items-center justify-center gap-4 mb-6">
                        <div 
                          className="w-12 h-12 flex items-center justify-center"
                          style={{ 
                            background: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(4px)',
                            borderRadius: '12px'
                          }}
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        </div>
                      </div>
                      <h2 
                        id="heading-conclusion"
                        className="text-white mb-4"
                        style={{ 
                          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                          lineHeight: '1.2',
                          fontWeight: '600'
                        }}
                      >
                        Ý nghĩa và giá trị thời đại
                      </h2>
                      <p 
                        className="mx-auto"
                        style={{ 
                          fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                          color: 'rgba(255, 255, 255, 0.9)',
                          maxWidth: '672px'
                        }}
                      >
                        Tư tưởng Hồ Chí Minh về chủ nghĩa xã hội không chỉ có ý nghĩa đối với Việt Nam 
                        mà còn đóng góp quan trọng vào kho tàng lý luận xã hội chủ nghĩa của nhân loại.
                      </p>
                    </header>

                    <LocalCardGrid columns={2} gap="md" className="mb-12">
                      {[
                        {
                          icon: (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          ),
                          title: 'Sáng tạo lý luận',
                          description: 'Bổ sung và phát triển chủ nghĩa Mác-Lênin phù hợp với điều kiện Việt Nam'
                        },
                        {
                          icon: (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          ),
                          title: 'Con đường phù hợp',
                          description: 'Xác định con đường xây dựng XHCN phù hợp với điều kiện cụ thể của Việt Nam'
                        },
                        {
                          icon: (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          ),
                          title: 'Con người trung tâm',
                          description: 'Đặt con người làm trung tâm, mục tiêu và động lực của sự phát triển'
                        },
                        {
                          icon: (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          ),
                          title: 'Giá trị toàn cầu',
                          description: 'Định hướng xây dựng xã hội công bằng, dân chủ, văn minh cho nhân loại'
                        }
                      ].map((item, index) => (
                        <LocalCard 
                          key={index}
                          className="p-6 text-white"
                          style={{ 
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(4px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '14px'
                          }}
                          hover={false}
                        >
                          <div className="mb-4">
                            {item.icon}
                          </div>
                          <h3 
                            className="font-semibold text-white mb-3"
                            style={{ fontSize: '1.125rem' }}
                          >
                            {item.title}
                          </h3>
                          <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                            {item.description}
                          </p>
                        </LocalCard>
                      ))}
                    </LocalCardGrid>

                    <LocalQuoteCard
                      quote="Chủ nghĩa xã hội là xã hội của nhân dân, do nhân dân và vì nhân dân. Đó là xã hội mà mọi người được sống trong hạnh phúc, tự do và tiến bộ."
                      variant="brand"
                      className="text-white"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(4px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      }}
                    />
                  </div>
                </section>
              </div>

              {/* Desktop TOC */}
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <LocalTOC variant="desktop" />
              </aside>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}