"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SocialismHeroProps {
  title: string;
  subtitle: string;
}

export default function SocialismHero({ title, subtitle }: SocialismHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Hero content animation
      gsap.fromTo(
        ".hero-content",
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3,
        }
      );

      // Background parallax effect
      gsap.to(".hero-bg", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Floating animation for decorative elements
      gsap.to(".floating-1", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });

      gsap.to(".floating-2", {
        y: -15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: 1,
      });

      gsap.to(".floating-3", {
        y: -25,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/giai-phong-dan-toc/cach-mang-giai-phong-dan-toc.jpg"
          alt="Background"
          fill
          className="hero-bg object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-1 absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-xl" />
        <div className="floating-2 absolute top-3/4 right-1/4 w-48 h-48 bg-yellow-500/10 rounded-full blur-2xl" />
        <div className="floating-3 absolute bottom-1/4 left-1/3 w-24 h-24 bg-blue-500/10 rounded-full blur-lg" />
      </div>

      {/* Content */}
      <div className="hero-content relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 
                         bg-gradient-to-br from-red-600 to-red-800 text-white rounded-full 
                         text-3xl sm:text-4xl mb-6 shadow-2xl">
            🌟
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                       font-extrabold text-white mb-6 sm:mb-8 leading-tight">
          <span className="block">Tư tưởng</span>
          <span className="block bg-gradient-to-r from-red-400 to-yellow-400 
                          bg-clip-text text-transparent">
            Hồ Chí Minh
          </span>
          <span className="block">về chủ nghĩa xã hội</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 
                     leading-relaxed max-w-4xl mx-auto">
          {subtitle}
        </p>

        {/* Key Points Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 
                         border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-2xl mb-3">🎯</div>
            <h3 className="font-bold text-white mb-2">Quan niệm</h3>
            <p className="text-sm text-white/80">Kết hợp Mác-Lênin với điều kiện Việt Nam</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 
                         border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-2xl mb-3">📈</div>
            <h3 className="font-bold text-white mb-2">Tất yếu</h3>
            <p className="text-sm text-white/80">Quy luật lịch sử và con đường phù hợp</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 
                         border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-2xl mb-3">🏛️</div>
            <h3 className="font-bold text-white mb-2">Đặc trưng</h3>
            <p className="text-sm text-white/80">Bảy đặc trưng cơ bản của XHCN</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-white/60 hover:text-white/80 
                         transition-colors duration-300 cursor-pointer">
            <span className="text-sm mb-2">Khám phá</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
