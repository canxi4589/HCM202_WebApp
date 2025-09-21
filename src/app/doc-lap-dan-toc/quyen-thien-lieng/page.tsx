"use client";

import { useLayoutEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

export default function QuyenThienLieng() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const el = contentRef.current;
    if (!section) return;

    gsap.set(
      section.querySelectorAll(
        ".image-container, .content-card, .title-content, .list-item"
      ),
      { opacity: 0, y: 30 }
    );

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(".image-container", {
        opacity: 1,
        x: 0,
        rotation: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      });

      tl.to(
        ".content-card",
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
        "-=0.8"
      );

      tl.to(
        ".title-content",
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );

      tl.to(
        ".list-item",
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      );
    }, section);

    const onMove = (e: MouseEvent) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const rx =
        ((rect.height / 2 - (e.clientY - rect.top)) / (rect.height / 2)) * 10;
      const ry =
        ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 10;
      gsap.to(el, {
        rotateX: rx,
        rotateY: ry,
        duration: 0.3,
        ease: "power2.out",
      });
    };
    const onLeave = () =>
      el &&
      gsap.to(el, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.4,
        ease: "power2.out",
      });

    el?.addEventListener("mousemove", onMove);
    el?.addEventListener("mouseleave", onLeave);

    return () => {
      el?.removeEventListener("mousemove", onMove);
      el?.removeEventListener("mouseleave", onLeave);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-8 overflow-hidden"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      <div className="absolute inset-0 z-0 bg-black/30 backdrop-blur-sm pointer-events-none" />

      <button
        onClick={() =>
          router.push("/doc-lap-dan-toc/thong-nhat-va-toan-ven-lanh-tho")
        }
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 
                   bg-white/70 hover:bg-white rounded-full p-3 shadow-lg 
                   transition-transform duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6 text-red-800" />
      </button>

      <button
        onClick={() => router.push("/doc-lap-dan-toc/com-no-ao-am-hanh-phuc")}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 
                   bg-white/70 hover:bg-white rounded-full p-3 shadow-lg 
                   transition-transform duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6 text-red-800" />
      </button>

      <button
        onClick={() => router.push("/doc-lap-dan-toc")}
        className="fixed left-6 top-6 z-50 
                   flex items-center gap-2 
                  text-black md:text-white font-semibold 
                   px-4 py-2 rounded-lg shadow-md 
                   transition-transform duration-300 hover:scale-105"
      >
        <ArrowLeft className="w-7 h-7" />
      </button>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="image-container flex justify-center">
          <div
            className="relative p-4 bg-white rounded-md shadow-2xl transform -rotate-3 
                       border-4 border-gray-300 hover:rotate-0 hover:scale-105 transition-all duration-500"
          >
            <div className="relative w-80 h-80 md:w-[500px] md:h-[550px]">
              <Image
                src="/images/independence-1.jpg"
                alt="Hồ Chí Minh"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center text-sm text-gray-600 mt-3 italic">
              Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập.
            </p>
          </div>
        </div>

        <div
          ref={contentRef}
          className="content-card bg-[#FBF5E8] p-8 md:p-12 rounded-lg shadow-2xl 
                     border border-amber-800/20 transform rotate-3"
        >
          <div className="title-content">
            <h2
              className="text-3xl md:text-5xl font-extrabold text-red-900 mb-8 leading-snug 
                           relative pl-5"
            >
              <span className="absolute left-0 top-0 w-1.5 h-full bg-red-800 rounded-full"></span>
              Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm của tất cả
              các dân tộc
            </h2>
          </div>
          <ul className="space-y-6 text-base md:text-lg leading-relaxed text-gray-800">
            <li className="list-item">
              Lịch sử dựng nước và giữ nước của dân tộc Việt Nam luôn gắn liền
              với truyền thống yêu nước, đấu tranh chống giặc ngoại xâm, thể
              hiện khát vọng lớn về một nền độc lập cho dân tộc và tự do cho
              nhân dân. Đây là giá trị tinh thần thiêng liêng, bất hủ.
            </li>
            <li className="list-item">
              Hồ Chí Minh khẳng định những giá trị bất biến về quyền dân tộc,
              viện dẫn từ
              <span className="font-semibold text-red-800">
                {" "}
                Tuyên ngôn Độc lập Mỹ năm 1776{" "}
              </span>
              và{" "}
              <span className="font-semibold text-red-800">
                {" "}
                Tuyên ngôn Nhân quyền và Dân quyền Pháp năm 1791
              </span>
              .
            </li>
            <li className="list-item italic text-red-900">
              “Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng, dân tộc
              nào cũng có quyền sống, quyền sung sướng và quyền tự do.”
            </li>
            <li className="list-item">
              Đây là tư tưởng xuyên suốt hành trình cứu nước của Người, từ bản
              Yêu sách năm 1919 đến lời khẳng định bất hủ:
              <span className="font-semibold text-red-800">
                {" "}
                “Không có gì quý hơn độc lập, tự do.”
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
