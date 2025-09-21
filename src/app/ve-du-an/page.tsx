"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Users, Target, Code, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "@/components/header";
import Trail from "@/components/trail";

const VeDuAn = () => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [exactPosition, setExactPosition] = useState(0);
  const [showPositionIndicator, setShowPositionIndicator] = useState(true);
  const [sectionsVisible, setSectionsVisible] = useState<boolean[]>(new Array(6).fill(false));

  const sections = [
    'title', 'overview', 'tech', 'ai', 'team', 'info'
  ];

  const scrollToSection = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;
    
    const sectionWidth = container.scrollWidth / sections.length;
    const targetPosition = sectionWidth * index;
    
    container.scrollTo({
      left: targetPosition,
      behavior: 'smooth'
    });
    
    // Update current section immediately for better UX
    setCurrentSection(index);
  }, [sections.length]);

  const nextSection = useCallback(() => {
    if (currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1);
    }
  }, [currentSection, sections.length, scrollToSection]);

  const prevSection = useCallback(() => {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  }, [currentSection, scrollToSection]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const sectionWidth = container.scrollWidth / sections.length;
      const maxScroll = container.scrollWidth - containerWidth;
      
      // Calculate scroll progress
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
      
      // Calculate current section more smoothly
      const exactPosition = scrollLeft / sectionWidth;
      const currentIndex = Math.round(exactPosition);
      
      setCurrentSection(Math.min(Math.max(currentIndex, 0), sections.length - 1));
      setExactPosition(exactPosition);
      
      // Simple near/far activation logic for Trail animations
      setSectionsVisible(prev => {
        const newVisibility = new Array(sections.length).fill(false);
        
        for (let i = 0; i < sections.length; i++) {
          const sectionCenter = i + 0.5; // Center of each section
          const distanceFromCenter = Math.abs(exactPosition - sectionCenter);
          
          // Near: Activate when within 0.5 units of section center
          // Far: Hide when more than 0.5 units away
          if (distanceFromCenter <= 1.2) {
            newVisibility[i] = true;
          }
        }
        
        return newVisibility;
      });
    };

    // Add mouse wheel support for horizontal scrolling
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        // If horizontal scroll is detected, let it through
        return;
      }
      
      // Convert vertical scroll to horizontal
      e.preventDefault();
      const scrollAmount = e.deltaY;
      container.scrollLeft += scrollAmount;
    };

    // Add keyboard support
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          prevSection();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextSection();
          break;
        case 'Home':
          e.preventDefault();
          scrollToSection(0);
          break;
        case 'End':
          e.preventDefault();
          scrollToSection(sections.length - 1);
          break;
        case 'p':
        case 'P':
          e.preventDefault();
          setShowPositionIndicator(prev => !prev);
          break;
      }
    };

    container.addEventListener('scroll', handleScroll);
    container.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('keydown', handleKeyDown);
    
    // Initial trigger
    handleScroll();

    return () => {
      container.removeEventListener('scroll', handleScroll);
      container.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [sections.length, prevSection, nextSection]);

  const techStack = [
    { name: "Next.js 14", color: "bg-black text-white", icon: "⚡" },
    { name: "TypeScript", color: "bg-blue-600 text-white", icon: "🔷" },
    { name: "Tailwind CSS", color: "bg-cyan-500 text-white", icon: "🎨" },
    { name: "GSAP", color: "bg-green-500 text-white", icon: "✨" },
    { name: "React Spring", color: "bg-orange-500 text-white", icon: "🌊" },
  ];

  const features = [
    { icon: <Target className="w-8 h-8" />, title: "Responsive Design", desc: "Tối ưu cho mọi thiết bị", color: "from-blue-500 to-blue-600" },
    { icon: <Code className="w-8 h-8" />, title: "Modern Tech Stack", desc: "Công nghệ tiên tiến nhất", color: "from-green-500 to-green-600" },
    { icon: <Lightbulb className="w-8 h-8" />, title: "Interactive Learning", desc: "Trải nghiệm học tập tương tác", color: "from-purple-500 to-purple-600" },
    { icon: <Users className="w-8 h-8" />, title: "Collaborative", desc: "Phát triển nhóm chuyên nghiệp", color: "from-red-500 to-red-600" },
  ];

  const teamMembers = [
    { 
      name: "Huỳnh Lê Nhật Hoàng", 
      role: "Project Manager & Developer", 
      color: "from-red-500 to-red-600", 
      avatar: "🚀",
      specialty: "Leadership & Architecture",
      quote: "Leading innovation through collaboration"
    },
    { 
      name: "Huỳnh Đình Luyện", 
      role: "Frontend Developer", 
      color: "from-blue-500 to-blue-600", 
      avatar: "💻",
      specialty: "UI/UX & React",
      quote: "Crafting beautiful user experiences"
    },
    { 
      name: "Phạm Nhất Thống", 
      role: "Content Writer", 
      color: "from-green-500 to-green-600", 
      avatar: "✍️",
      specialty: "Content Strategy",
      quote: "Words that inspire and educate"
    },
    { 
      name: "Nguyễn Lê Tiến Phát", 
      role: "Developer & QA", 
      color: "from-purple-500 to-purple-600", 
      avatar: "🎯",
      specialty: "Quality Assurance",
      quote: "Ensuring excellence in every detail"
    },
    { 
      name: "Trần Văn Nam", 
      role: "Backend Developer", 
      color: "from-orange-500 to-orange-600", 
      avatar: "⚙️",
      specialty: "Server & Database",
      quote: "Building robust foundations"
    },
    { 
      name: "Lê Thị Mai", 
      role: "UI/UX Designer", 
      color: "from-pink-500 to-pink-600", 
      avatar: "🎨",
      specialty: "Design & Prototyping",
      quote: "Where creativity meets functionality"
    },
    { 
      name: "Nguyễn Hoàng Khang", 
      role: "Research & Analysis", 
      color: "from-indigo-500 to-indigo-600", 
      avatar: "📊",
      specialty: "Data & Insights",
      quote: "Turning data into meaningful stories"
    }
  ];

  const stats = [
    { label: "Team Members", value: "7", icon: "👥", color: "from-red-400 to-red-500" },
    { label: "Technologies", value: "5+", icon: "⚡", color: "from-blue-400 to-blue-500" },
    { label: "Features", value: "10+", icon: "🚀", color: "from-green-400 to-green-500" },
    { label: "Weeks", value: "8", icon: "⏰", color: "from-purple-400 to-purple-500" }
  ];

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Inject scrollbar hide styles */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/images/background-2.jpg" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-blue-900/20" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Header */}
      <Header />

      {/* Position Indicator */}
      {showPositionIndicator && (
        <div className="fixed top-32 right-6 z-50 bg-black/80 backdrop-blur-md text-white rounded-xl p-4 shadow-2xl border border-white/20 animate-in slide-in-from-right duration-300">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">Position</div>
              <button
                onClick={() => setShowPositionIndicator(false)}
                className="text-gray-400 hover:text-white transition-colors"
                title="Hide (Press P to toggle)"
              >
                ✕
              </button>
            </div>
          <div className="space-y-1">
            <div className="text-sm text-gray-300">
              Section: <span className="text-white font-mono">{currentSection + 1}</span>/{sections.length}
            </div>
            <div className="text-sm text-gray-300">
              Name: <span className="text-white capitalize">{sections[currentSection]?.replace('-', ' ')}</span>
            </div>
            <div className="text-sm text-gray-300">
              Exact: <span className="text-white font-mono">{(exactPosition + 1).toFixed(2)}</span>
            </div>
            <div className="text-sm text-gray-300">
              Progress: <span className="text-white font-mono">{scrollProgress.toFixed(1)}%</span>
            </div>
            <div className="text-xs text-gray-400 mt-1">
              Boundaries: <span className="text-white font-mono">{Math.floor(exactPosition)}.0 - {Math.floor(exactPosition) + 1}.0</span>
            </div>
          </div>
          
          {/* Mini Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
            <div 
              className="bg-gradient-to-r from-red-500 to-red-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
          
          {/* Section Indicators */}
          <div className="flex justify-between mt-3 space-x-1">
            {sections.map((section, index) => {
              const sectionCenter = index + 0.5;
              const distanceFromCenter = Math.abs(exactPosition - sectionCenter);
              const isNear = distanceFromCenter <= 0.5; // Near = within 0.5 units
              
              return (
                <div
                  key={index}
                  className={`w-2 h-6 rounded-full transition-all duration-300 relative ${
                    Math.floor(exactPosition) === index
                      ? 'bg-red-400' // Current section
                      : isNear
                      ? 'bg-green-400' // Near - animation active
                      : 'bg-gray-600' // Far - hidden
                  }`}
                  title={`${section.charAt(0).toUpperCase()}${section.slice(1).replace('-', ' ')} ${
                    isNear ? '(NEAR - Animating)' : '(FAR - Hidden)'
                  }`}
                >
                  {isNear && (
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse" />
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Legend */}
          <div className="text-xs text-gray-400 mt-2 space-y-1">
            <div className="flex items-center justify-between">
              <span>🔴 Current</span>
              <span>� Animating</span>
            </div>
            <div className="flex items-center justify-between">
              <span>� Transition</span>
              <span>⚫ Hidden</span>
            </div>
            <div className="text-center mt-1 text-xs">
              <span>✨ Pulse = Active Animation</span>
            </div>
          </div>
          
          {/* Section Map */}
          <details className="mt-3">
            <summary className="text-xs text-gray-400 cursor-pointer hover:text-white">Near/Far Ranges</summary>
            <div className="mt-2 space-y-1 text-xs text-gray-400">
              {sections.map((section, index) => {
                const sectionCenter = index + 0.5;
                const distanceFromCenter = Math.abs(exactPosition - sectionCenter);
                const isNear = distanceFromCenter <= 0.5;
                const nearStart = index; // Start of section
                const nearEnd = index + 1; // End of section
                
                return (
                  <div key={index} className={`flex justify-between ${
                    isNear ? 'text-green-400' : 
                    Math.floor(exactPosition) === index ? 'text-red-400' : ''
                  }`}>
                    <span className="capitalize">{section.replace('-', ' ')}</span>
                    <span className="font-mono">
                      {nearStart.toFixed(1)} → {nearEnd.toFixed(1)}
                      {isNear ? ' 🟢' : ' ⚫'}
                    </span>
                  </div>
                );
              })}
              <div className="mt-2 pt-2 border-t border-gray-600 text-xs text-gray-500">
                Current: {exactPosition.toFixed(2)} | 
                Near Range: ±0.5 from center
              </div>
            </div>
          </details>
        </div>
      </div>
      )}

      {/* Show Position Indicator Button (when hidden) */}
      {!showPositionIndicator && (
        <button
          onClick={() => setShowPositionIndicator(true)}
          className="fixed top-32 right-6 z-50 w-12 h-12 bg-black/80 backdrop-blur-md text-white rounded-full shadow-2xl border border-white/20 hover:bg-black/90 transition-all duration-300 flex items-center justify-center"
          title="Show Position (Press P)"
        >
          📍
        </button>
      )}

      {/* Horizontal Scrolling Container */}
      <div
        ref={containerRef}
        className="relative z-10 h-full overflow-x-auto overflow-y-hidden pt-20 pb-8 scrollbar-hide"
        style={{ 
          scrollBehavior: 'smooth',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        <div className="flex h-full" style={{ width: `${sections.length * 100}vw` }}>
          
          {/* Section 1: Academic Title */}
          <section className="w-screen h-full flex items-center justify-center px-8">
            <div className={`max-w-6xl w-full transition-all duration-1000 ease-out ${
              sectionsVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Trail open={sectionsVisible[0]}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left: Academic Content */}
                  <div className="space-y-8">
                    {/* University Header */}
                    <div className="text-left">
                      <div className="text-lg font-semibold text-white mb-2">
                        TRƯỜNG ĐẠI HỌC FPT
                      </div>
                      <div className="text-base text-white mb-6">
                        Khoa Công nghệ Thông tin
                      </div>
                    </div>

                    {/* Main Title */}
                    <div>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f9f0e4] mb-6 leading-tight"
                          style={{ fontFamily: '"Times New Roman", serif' }}>
                        Dự Án Nghiên Cứu
                      </h1>
                      <h2 className="text-2xl md:text-3xl font-semibold text-[#f9f0e4]/90 mb-8 leading-relaxed">
                        "Phát triển Nền tảng Giáo dục Tương tác về Tư tưởng Hồ Chí Minh"
                      </h2>
                    </div>

                    {/* Academic Details */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                      <div className="space-y-3 text-white">
                        <div className="flex justify-between">
                          <span className="font-semibold">Môn học:</span>
                          <span>Tư tưởng Hồ Chí Minh (HCM202)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Học kỳ:</span>
                          <span>Fall 2025</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Nhóm thực hiện:</span>
                          <span>7 thành viên</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Công nghệ:</span>
                          <span>Next.js, TypeScript, Tailwind CSS</span>
                        </div>
                      </div>
                    </div>

                    {/* Objective Statement */}
                    <div className="bg-gradient-to-r from-red-900/30 to-transparent rounded-lg p-6 border-l-4 border-red-400">
                      <h3 className="text-xl font-semibold text-[#f9f0e4] mb-3">Mục tiêu Dự án</h3>
                      <p className="text-white leading-relaxed">
                        Ứng dụng kĩ năng chuyên ngành để tạo ra một website học tập tương tác, 
                        giúp sinh viên và người học tiếp cận tư tưởng Hồ Chí Minh một cách 
                        sinh động và hiệu quả.
                      </p>
                    </div>
                  </div>

                  {/* Right: Image/Visual Section */}
                  <div className="flex flex-col items-center space-y-4">
                    {/* Main Image Placeholder - You can replace with actual images */}
                    <div className="w-full max-w-L">
                      {/* Option 1: Ho Chi Minh Portrait */}
                      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl">
                        <div className="aspect-[4/5] bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-3">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/0/07/Ho_Chi_Minh_-_1946_Portrait.jpg" alt="Chủ tịch Hồ Chí Minh"  className="object-cover rounded-lg" />
                          {/* <div className="text-center text-gray-500">
                            <div className="text-2xl mb-1">🖼️</div>
                            <div className="text-xs">Portrait of<br/>President Ho Chi Minh</div>
                          </div> */}
                        </div>
                        <div className="text-center text-gray-700">
                          <div className="font-semibold text-sm">Chủ tịch Hồ Chí Minh</div>
                          <div className="text-xs text-gray-500">(1890-1969)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Trail>
            </div>
          </section>

          {/* Section 2: Academic Project Overview */}
          <section className="w-screen h-full flex items-center justify-center px-8">
            <div className={`max-w-6xl w-full transition-all duration-1000 ease-out ${
              sectionsVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Trail open={sectionsVisible[1]}>
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/20">
                  <div className="mb-12">
                    <div className="w-full h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full mb-6"></div>
                    <h2 className="text-5xl font-bold text-gray-800 mb-4">Tổng Quan Dự Án</h2>
                    <p className="text-lg text-gray-600">Research Project Overview</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                      {/* Abstract */}
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tóm tắt dự án</h3>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                          Dự án "Tư tưởng Hồ Chí Minh" là một nền tảng giáo dục tương tác được phát triển 
                          nhằm giúp người học hiểu sâu sắc về tư tưởng của Chủ tịch Hồ Chí Minh.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Thông qua giao diện hiện đại và trải nghiệm người dùng trực quan, 
                          dự án mang đến cách tiếp cận mới mẻ trong việc học tập và nghiên cứu.
                        </p>
                      </div>

                      {/* Research Methodology */}
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Phương pháp nghiên cứu</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">Nghiên cứu tài liệu lý thuyết về tư tưởng Hồ Chí Minh</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">Phân tích yêu cầu và thiết kế hệ thống</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">Phát triển ứng dụng web tương tác</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">Kiểm thử và đánh giá hiệu quả</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {/* Learning Outcomes */}
                      <div className="grid grid-cols-1 gap-4">
                        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500">
                          <h4 className="font-bold text-gray-800 mb-2">Learning Outcome 3</h4>
                          <p className="text-sm text-gray-600">Nắm được về hệ thống quan điểm tư tưởng Hồ Chí Minh về các vấn đề độc lập dân tộc và chủ nghĩa xã hội</p>
                        </div>
                        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-blue-500">
                          <h4 className="font-bold text-gray-800 mb-2">Learning Outcome 6</h4>
                          <p className="text-sm text-gray-600">Hình thành khả năng làm việc nhóm, tư duy độc lập, phân tích đánh giá</p>
                        </div>
                        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-green-500">
                          <h4 className="font-bold text-gray-800 mb-2">Learning Outcome 7</h4>
                          <p className="text-sm text-gray-600">Củng cố tinh thần yêu nước, có ý thức trách nhiệm công dân</p>
                        </div>
                        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-purple-500">
                          <h4 className="font-bold text-gray-800 mb-2">Learning Outcome 8</h4>
                          <p className="text-sm text-gray-600">Hình thành thái độ, tác phong làm việc chuyên nghiệp, phương pháp khoa học</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Trail>
            </div>
          </section>

          {/* Section 3: Technical Implementation */}
          <section className="w-screen h-full flex items-center justify-center px-8">
            <div className={`max-w-6xl w-full transition-all duration-1000 ease-out ${
              sectionsVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Trail open={sectionsVisible[2]}>
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/20">
                  <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold text-gray-800 mb-6">Công nghệ</h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                      Dự án áp dụng các công nghệ web hiện đại và tiêu chuẩn học thuật để xây dựng một nền tảng học tập về tư tưởng Hồ Chí Minh mang tính tương tác, dễ tiếp cận và học thuật
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12 mb-12">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-blue-500">
                        Development Framework
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                          <h4 className="font-bold text-gray-800 mb-2">Next.js 14 Framework</h4>
                          <p className="text-sm text-gray-600">Modern React framework with App Router for server-side rendering and optimized performance</p>
                        </div>
                        <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-500">
                          <h4 className="font-bold text-gray-800 mb-2">TypeScript Integration</h4>
                          <p className="text-sm text-gray-600">Type-safe development ensuring code reliability and maintainability</p>
                        </div>
                        <div className="bg-cyan-50 rounded-lg p-6 border-l-4 border-cyan-500">
                          <h4 className="font-bold text-gray-800 mb-2">Component Architecture</h4>
                          <p className="text-sm text-gray-600">Modular design with reusable components for scalable development</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-green-500">
                        User Experience Design
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                          <h4 className="font-bold text-gray-800 mb-2">Responsive Design System</h4>
                          <p className="text-sm text-gray-600">Cross-device compatibility ensuring accessibility across all platforms</p>
                        </div>
                        <div className="bg-emerald-50 rounded-lg p-6 border-l-4 border-emerald-500">
                          <h4 className="font-bold text-gray-800 mb-2">Animation Framework</h4>
                          <p className="text-sm text-gray-600">GSAP and React Spring for engaging educational interactions</p>
                        </div>
                        <div className="bg-teal-50 rounded-lg p-6 border-l-4 border-teal-500">
                          <h4 className="font-bold text-gray-800 mb-2">Performance Optimization</h4>
                          <p className="text-sm text-gray-600">Optimized loading and rendering for seamless user experience</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </Trail>
            </div>
          </section>

          {/* Section 4: Research Methodology & Ethics */}
          <section className="w-screen h-full flex items-center justify-center px-8">
            <div className={`max-w-6xl w-full transition-all duration-1000 ease-out ${
              sectionsVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Trail open={sectionsVisible[3]}>
                <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 backdrop-blur-md rounded-3xl p-12 shadow-2xl border-l-8 border-amber-500">
                  <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold text-gray-800 mb-6">AI Usage</h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                      Website này có sử dụng các công cụ và công nghệ Trí tuệ nhân tạo (OpenAI) nhằm nâng cao trải nghiệm người dùng, hỗ trợ thiết kế và cải thiện khả năng tiếp cận
                    </p>
                  </div>
                  <div className="bg-white/90 rounded-2xl p-8 border border-orange-200">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                      Research Documentation & Transparency
                    </h3>
                    Trí tuệ nhân tạo (AI) chỉ được sử dụng với vai trò hỗ trợ kỹ thuật, như gợi ý ngôn ngữ, tối ưu hóa trình bày và nâng cao khả năng tiếp cận nội dung. AI không thay thế tư duy phản biện, phân tích hay nghiên cứu độc lập của nhóm. Người dùng được khuyến khích tiếp cận nội dung với tinh thần học thuật, đồng thời kiểm chứng thông tin thông qua các nguồn tư liệu đáng tin cậy.
                    
                  </div>
                </div>
              </Trail>
            </div>
          </section>

          {/* Section 5: Team */}
          <section className="w-screen h-full flex items-center justify-center px-8 py-4">
            <div className={`max-w-7xl w-full h-full overflow-y-hidden overflow-x-hidden transition-all duration-1000 ease-out ${
              sectionsVisible[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Trail open={sectionsVisible[4]}>
                <div className="text-center mb-8">
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#f9f0e4] mb-4">Meet Our Team</h2>
                </div>
                
                {/* Compact Team Layout */}
                <div className="space-y-6">
                  {/* Leader Card - Compact */}
                  <div className="flex justify-center">
                    <div className="group relative">
                      <div className="relative bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20 text-center max-w-sm">
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold">
                            TEAM LEADER
                          </div>
                        </div>
                        <div className={`w-16 h-16 bg-gradient-to-r ${teamMembers[0].color} rounded-full flex items-center justify-center text-2xl text-white mb-4 mx-auto`}>
                          {teamMembers[0].avatar}
                        </div>
                        <h4 className="text-lg font-bold text-gray-800 mb-1">{teamMembers[0].name}</h4>
                        <p className="text-sm font-semibold text-red-600 mb-2">{teamMembers[0].role}</p>
                        <p className="text-xs italic text-gray-600">"{teamMembers[0].quote}"</p>
                      </div>
                    </div>
                  </div>

                  {/* Six Team Members in Compact Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {teamMembers.slice(1).map((member, index) => (
                      <div key={index + 1} className="group relative">
                        <div className="absolute -top-1 -right-1 z-10 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                          {index + 2}
                        </div>
                        
                        <div className="relative bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20 text-center h-full">
                          <div className={`w-12 h-12 bg-gradient-to-r ${member.color} rounded-xl flex items-center justify-center text-xl text-white mx-auto mb-3`}>
                            {member.avatar}
                          </div>
                          
                          <h4 className="text-sm font-bold text-gray-800 mb-1 leading-tight">{member.name}</h4>
                          <p className="text-xs font-semibold text-gray-600 mb-1">{member.role}</p>
                          <p className="text-xs text-gray-500 mb-2">{member.specialty}</p>
                          
                          <div className="bg-gray-50 rounded-lg p-2">
                            <p className="text-xs italic text-gray-700 leading-tight">"{member.quote}"</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Trail>
            </div>
          </section>

          {/* Section 6: Conclusion and Future Work */}
          <section className="w-screen h-full flex items-center justify-center px-8">
            <div className={`max-w-6xl w-full transition-all duration-1000 ease-out ${
              sectionsVisible[5] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Trail open={sectionsVisible[5]}>
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-3xl p-12 shadow-2xl">
                  <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold mb-6">Conclusion and Future Work</h2>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                      Synthesizing research outcomes and establishing pathways for continued advancement 
                      in digital education for Ho Chi Minh ideology
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
                      <h3 className="text-2xl font-bold mb-6 text-center">Research Contributions</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <span className="w-3 h-3 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                          <p className="text-gray-200">
                            <strong>Digital Pedagogy Innovation:</strong> Demonstrated effective integration of 
                            modern web technologies with traditional educational content
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="w-3 h-3 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                          <p className="text-gray-200">
                            <strong>Accessibility Framework:</strong> Established inclusive design principles 
                            for Vietnamese historical education platforms
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="w-3 h-3 bg-purple-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                          <p className="text-gray-200">
                            <strong>Interactive Learning Model:</strong> Validated multimedia approach to 
                            enhance student engagement with ideological concepts
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
                      <h3 className="text-2xl font-bold mb-6 text-center">Future Research Directions</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <span className="w-3 h-3 bg-orange-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                          <p className="text-gray-200">
                            <strong>AI-Enhanced Learning:</strong> Integration of adaptive learning algorithms 
                            for personalized educational pathways
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="w-3 h-3 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                          <p className="text-gray-200">
                            <strong>Virtual Reality Implementation:</strong> Immersive historical environments 
                            for experiential learning of independence movements
                          </p>
                        </div>
                        <div className="flex items-start">
                          <span className="w-3 h-3 bg-yellow-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                          <p className="text-gray-200">
                            <strong>Cross-Cultural Studies:</strong> Comparative analysis with other national 
                            liberation ideologies and educational approaches
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold mb-6 text-center">Academic Impact & Acknowledgments</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-400 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                          🎓
                        </div>
                        <h4 className="text-lg font-semibold mb-2">Academic Institution</h4>
                        <p className="text-gray-300">FPT University</p>
                        <p className="text-sm text-gray-400">Ho Chi Minh Thought Course</p>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                          📚
                        </div>
                        <h4 className="text-lg font-semibold mb-2">Research Classification</h4>
                        <p className="text-gray-300">Educational Technology</p>
                        <p className="text-sm text-gray-400">Digital Humanities Project</p>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-400 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                          🌟
                        </div>
                        <h4 className="text-lg font-semibold mb-2">Long-term Vision</h4>
                        <p className="text-gray-300">Educational Innovation</p>
                        <p className="text-sm text-gray-400">Bridging Heritage & Technology</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Trail>
            </div>
          </section>
        </div>
      </div>



      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-black/20 z-40">
        <div 
          className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
};

export default VeDuAn;