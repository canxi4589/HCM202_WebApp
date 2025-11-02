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
                  Sau 1975
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
                  1975-1976
                </a>
                <a 
                  href="#c-boi-canh"
                  className="px-6 py-3 border border-white/30 text-white/90 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  style={{ 
                    minHeight: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    borderRadius: '12px'
                  }}
                >
                  12-1976
                </a>
                <a 
                  href="#d-dac-diem"
                  className="px-6 py-3 border border-white/30 text-white/90 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  style={{ 
                    minHeight: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    borderRadius: '12px'
                  }}
                >
                  1979-1981
                </a>
                 <a 
                  href="#e-dai-hoi-4"
                  className="px-6 py-3 border border-white/30 text-white/90 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  style={{ 
                    minHeight: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    borderRadius: '12px'
                  }}
                >
                  1978–1979
                </a>
                 <a 
                  href="#f-y-nghia-han-che"
                  className="px-6 py-3 border border-white/30 text-white/90 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  style={{ 
                    minHeight: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    borderRadius: '12px'
                  }}
                >
                  Đến năm 1981
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
                        variant="green"
                      />
                    </div>
                  </div>
                </section>

                {/* Section C: Bối cảnh lịch sử */}
                <section 
  id="c-boi-canh" 
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
        className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg"
        style={{ borderRadius: '12px' }}
      >
        C
      </div>
      <div>
        <h2 
          id="heading-c"
          className="text-blue-600 mb-2"
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

  <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
    <div className="lg:col-span-1 lg:order-2">
      <div className="sticky top-24">
        <LocalCard className="overflow-hidden">
          <Image
            src={socialismContent.sections[2].image}
            alt="Bối cảnh lịch sử sau 1975"
            width={960}
            height={540}
            className="w-full object-cover"
            style={{ aspectRatio: '16/9' }}
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              {socialismContent.sections[2].title}
            </h3>
            <p className="text-sm text-gray-600">
              Hoàn cảnh lịch sử của thời kỳ sau năm 1975 với nhiều thuận lợi và thách thức.
            </p>
          </div>
        </LocalCard>
      </div>
    </div>

    <div className="lg:col-span-2 lg:order-1 space-y-8">
      <LocalQuoteCard 
        quote={socialismContent.sections[2].quote}
        variant="blue"
      />

      <div className="space-y-6">
        {socialismContent.sections[2].content.map((paragraph, index) => {
          // Tách text trước và sau dấu ":"
          const parts = paragraph.split(':');
          if (parts.length > 1) {
            return (
              <p 
                key={index} 
                className="text-gray-700"
                style={{ 
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  lineHeight: '1.6',
                  maxWidth: '72ch'
                }}
              >
                <strong>{parts[0]}:</strong> {parts.slice(1).join(':')}
              </p>
            );
          }
          return (
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
          );
        })}
      </div>

      <LocalSummaryBox 
        points={socialismContent.sections[2].summary.points}
        variant="blue"
      />
    </div>
  </div>
                </section>
                {/* Section D*/}
                <section 
  id="d-dac-diem" 
  className="mb-16" 
  style={{ 
    scrollMarginTop: '96px',
    paddingBottom: '64px'
  }}
  aria-labelledby="heading-d"
>
  <header className="mb-8">
    <div className="flex items-center gap-4 mb-4">
      <div 
        className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg"
        style={{ borderRadius: '12px' }}
      >
        D
      </div>
      <div>
        <h2 
          id="heading-d"
          className="text-blue-600 mb-2"
          style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            lineHeight: '1.2',
            fontWeight: '600'
          }}
        >
          {socialismContent.sections[3].title}
        </h2>
        <p className="text-gray-600">
          {socialismContent.sections[3].subtitle}
        </p>
      </div>
    </div>
  </header>

  <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
    <div className="lg:col-span-1 lg:order-2">
      <div className="sticky top-24">
        <LocalCard className="overflow-hidden">
          <Image
            src={socialismContent.sections[3].image}
            alt="Ba đặc điểm lớn của cách mạng"
            width={960}
            height={540}
            className="w-full object-cover"
            style={{ aspectRatio: '16/9' }}
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              {socialismContent.sections[3].title}
            </h3>
            <p className="text-sm text-gray-600">
              Hoàn cảnh lịch sử của thời kỳ sau năm 1975 với nhiều thuận lợi và thách thức.
            </p>
          </div>
        </LocalCard>
      </div>
    </div>

    <div className="lg:col-span-2 lg:order-1 space-y-8">
      <LocalQuoteCard 
        quote={socialismContent.sections[3].quote}
      />

      <div className="space-y-6">
        {socialismContent.sections[3].content.map((paragraph, index) => {
          const parts = paragraph.split(':');
          if (parts.length > 1) {
            return (
              <p 
                key={index} 
                className="text-gray-700"
                style={{ 
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  lineHeight: '1.6',
                  maxWidth: '72ch'
                }}
              >
                <strong>{parts[0]}:</strong> {parts.slice(1).join(':')}
              </p>
            );
          }
          return (
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
          );
        })}
      </div>

      <LocalSummaryBox 
        points={socialismContent.sections[3].summary.points}
      />
    </div>
  </div>
                </section>

                {/* Section E*/}
                <section 
  id="e-dai-hoi-4" 
  className="mb-16" 
  style={{ 
    scrollMarginTop: '96px',
    paddingBottom: '64px'
  }}
  aria-labelledby="heading-e"
>
  <header className="mb-8">
    <div className="flex items-center gap-4 mb-4">
      <div 
        className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg"
        style={{ borderRadius: '12px' }}
      >
        E
      </div>
      <div>
        <h2 
          id="heading-e"
          className="text-blue-600 mb-2"
          style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            lineHeight: '1.2',
            fontWeight: '600'
          }}
        >
          {socialismContent.sections[4].title}
        </h2>
        <p className="text-gray-600">
          {socialismContent.sections[4].subtitle}
        </p>
      </div>
    </div>
  </header>

  <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
    <div className="lg:col-span-1 lg:order-2">
      <div className="sticky top-24">
        <LocalCard className="overflow-hidden">
          <Image
            src={socialismContent.sections[4].image}
            alt="Đại hội IV của Đảng"
            width={960}
            height={540}
            className="w-full object-cover"
            style={{ aspectRatio: '16/9' }}
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              {socialismContent.sections[4].title}
            </h3>
            <p className="text-sm text-gray-600">
              Hoàn cảnh lịch sử của thời kỳ sau năm 1975 với nhiều thuận lợi và thách thức.
            </p>
          </div>
        </LocalCard>
      </div>
    </div>

    <div className="lg:col-span-2 lg:order-1 space-y-8">
      <LocalQuoteCard 
        quote={socialismContent.sections[4].quote}
      />

      <div className="space-y-6">
        {socialismContent.sections[4].content.map((paragraph, index) => {
          const parts = paragraph.split(':');
          if (parts.length > 1) {
            return (
              <p 
                key={index} 
                className="text-gray-700"
                style={{ 
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  lineHeight: '1.6',
                  maxWidth: '72ch'
                }}
              >
                <strong>{parts[0]}:</strong> {parts.slice(1).join(':')}
              </p>
            );
          }
          return (
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
          );
        })}
      </div>

      <LocalSummaryBox 
        points={socialismContent.sections[4].summary.points}
      />
    </div>
  </div>
                </section>

                {/* Section F*/}
                <section 
  id="f-y-nghia-han-che" 
  className="mb-16" 
  style={{ 
    scrollMarginTop: '96px',
    paddingBottom: '64px'
  }}
  aria-labelledby="heading-f"
>
  <header className="mb-8">
    <div className="flex items-center gap-4 mb-4">
      <div 
        className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg"
        style={{ borderRadius: '12px' }}
      >
        F
      </div>
      <div>
        <h2 
          id="heading-f"
          className="text-blue-600 mb-2"
          style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            lineHeight: '1.2',
            fontWeight: '600'
          }}
        >
          {socialismContent.sections[5].title}
        </h2>
        <p className="text-gray-600">
          {socialismContent.sections[5].subtitle}
        </p>
      </div>
    </div>
  </header>

  <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
    <div className="lg:col-span-1 lg:order-2">
      <div className="sticky top-24">
        <LocalCard className="overflow-hidden">
          <Image
            src={socialismContent.sections[5].image}
            alt="Ý nghĩa và hạn chế Đại hội IV"
            width={960}
            height={540}
            className="w-full object-cover"
            style={{ aspectRatio: '16/9' }}
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              {socialismContent.sections[5].title}
            </h3>
            <p className="text-sm text-gray-600">
              Hoàn cảnh lịch sử của thời kỳ sau năm 1975 với nhiều thuận lợi và thách thức.
            </p>
          </div>
        </LocalCard>
      </div>
    </div>

    <div className="lg:col-span-2 lg:order-1 space-y-8">
      <LocalQuoteCard 
        quote={socialismContent.sections[5].quote}
      />

      <div className="space-y-6">
        {socialismContent.sections[5].content.map((paragraph, index) => {
          const parts = paragraph.split(':');
          if (parts.length > 1) {
            return (
              <p 
                key={index} 
                className="text-gray-700"
                style={{ 
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  lineHeight: '1.6',
                  maxWidth: '72ch'
                }}
              >
                <strong>{parts[0]}:</strong> {parts.slice(1).join(':')}
              </p>
            );
          }
          return (
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
          );
        })}
      </div>

      <LocalSummaryBox 
        points={socialismContent.sections[5].summary.points}
      />
    </div>
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