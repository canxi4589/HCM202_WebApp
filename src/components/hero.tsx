"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import Header from "./header";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <Header />

      <Image
        src="/images/hero.png"
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />

      <div className="relative z-10 max-w-5xl px-6">
        <h1
          ref={titleRef}
          className="text-3xl md:text-6xl font-extrabold text-red-800 drop-shadow-lg uppercase leading-relaxed"
        >
          Tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội
        </h1>
      </div>
    </section>
  );
}
