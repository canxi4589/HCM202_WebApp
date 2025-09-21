"use client";

import { useLayoutEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

const issues = [
  {
    title: "Tư tưởng Hồ Chí Minh về chủ nghĩa xã hội",
    desc: "Chủ nghĩa xã hội là mục tiêu lịch sử, phát triển công bằng, dân chủ, văn minh, và toàn diện.",
    img: "/images/independence-1.jpg",
    href: "/tu-tuong-hcm-ve-chu-nghia-xa-hoi",
  },
  {
    title: "Tư tưởng HCM về xây dựng chủ nghĩa xã hội ở Việt Nam",
    desc: "Độc lập phải gắn với đời sống thiết thực của nhân dân.",
    img: "/images/independence-2.jpg",
    href: "/noi-dung/com-no-ao-am-hanh-phuc",
  },
  {
    title: "Tư tưởng Hồ Chí Minh về thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam",
    desc: "Không bị áp bức chính trị, bóc lột kinh tế, nô dịch văn hóa.",
    img: "/images/independence-3.jpg",
    href: "/noi-dung/doc-lap-that-su-triet-de",
  },
  {
    title: "Ôn tập kiến thức",
    desc: "Nước Việt Nam là một, dân tộc Việt Nam là một.",
    img: "/images/independence-4.jpg",
    href: "/noi-dung/thong-nhat-va-toan-ven-lanh-tho",
  },
];

export default function IndependenceIssues() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % issues.length);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + issues.length) % issues.length);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [currentIndex, isTransitioning]
  );

  // Auto-rotate carousel
  useLayoutEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide, isTransitioning]);

  // Touch/Swipe handling
  useLayoutEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let startX = 0;
    let startY = 0;
    let isDragging = false;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isDragging = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isDragging) return;
      isDragging = false;

      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const deltaX = endX - startX;
      const deltaY = endY - startY;

      // Only trigger if horizontal swipe is more significant than vertical
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
      }
    };

    carousel.addEventListener("touchstart", handleTouchStart, { passive: true });
    carousel.addEventListener("touchmove", handleTouchMove, { passive: false });
    carousel.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      carousel.removeEventListener("touchstart", handleTouchStart);
      carousel.removeEventListener("touchmove", handleTouchMove);
      carousel.removeEventListener("touchend", handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

  // GSAP animations
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate carousel items
      gsap.utils.toArray<HTMLElement>(".carousel-item").forEach((item, index) => {
        const angle = (index * 360) / issues.length - (currentIndex * 360) / issues.length;
        const isActive = index === currentIndex;

        gsap.to(item, {
          rotation: angle,
          scale: isActive ? 1.2 : 0.8,
          opacity: isActive ? 1 : 0.6,
          zIndex: isActive ? 10 : 1,
          duration: 0.6,
          ease: "power2.out",
        });

        // Rotate content in opposite direction to keep it upright
        const content = item.querySelector(".carousel-content");
        gsap.to(content, {
          rotation: -angle,
          duration: 0.6,
          ease: "power2.out",
        });
      });

      // Animate navigation buttons
      gsap.from(".nav-button", {
        scale: 0,
        rotation: 180,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1,
      });

      // Animate dots
      gsap.from(".carousel-dot", {
        scale: 0,
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.05,
        delay: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [currentIndex]);

  return (
    <section ref={sectionRef} className="relative h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/background.png"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-amber-900/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-grow flex items-center justify-center px-4">
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Circular Carousel */}
          <div
            ref={carouselRef}
            className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] mx-auto"
          >
            {issues.map((issue, index) => {
              const angle = (index * 360) / issues.length;
              const radius = 220; // Radius for positioning
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <div
                  key={index}
                  className="carousel-item absolute top-1/2 left-1/2 cursor-pointer group"
                  style={{
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  }}
                  onClick={() => goToSlide(index)}
                >
                  <div className="carousel-content relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 relative rounded-full overflow-hidden shadow-2xl border-4 border-white/20 group-hover:border-red-400/60 transition-all duration-300">
                      <Image
                        src={issue.img}
                        alt={issue.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Central Content Area - Moved here to be in center of carousel */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[200px] h-[200px]">
              <div className="bg-black/60 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-2xl box-border h-full flex flex-col justify-center">
                <h3 className="text-sm md:text-base font-bold text-white mb-2 drop-shadow-lg leading-tight">
                  {issues[currentIndex].title}
                </h3>
                <p className="text-xs text-white/90 leading-relaxed drop-shadow mb-3">
                  {issues[currentIndex].desc}
                </p>
                <Link
                  href={issues[currentIndex].href}
                  className="inline-block px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-full text-xs font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Tìm hiểu thêm
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="nav-button absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white hover:text-red-200 transition-all duration-300 backdrop-blur-sm border border-white/20 disabled:opacity-50"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="nav-button absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white hover:text-red-200 transition-all duration-300 backdrop-blur-sm border border-white/20 disabled:opacity-50"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="relative z-10 flex justify-center space-x-3 pb-8">
        {issues.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-dot w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-red-500 scale-125 shadow-lg"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}