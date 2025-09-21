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
        src="/images/thoi-ky-qua-do/cuuquoc3.png"
        alt="Hero Background"
        fill
        className="object-contain scale-120"
        priority
      />

<div className="relative z-10 max-w-2xl px-4 -ml-60">
  <h1
    ref={titleRef}
    className="text-xl md:text-3xl font-extrabold text-red-800 drop-shadow-lg uppercase leading-relaxed text-left ml-1"
  >
    Tư tưởng Hồ Chí Minh về thời kỳ quá độ lên Chủ Nghĩa Xã Hội
  </h1>
</div>
    </section>
  );
}
