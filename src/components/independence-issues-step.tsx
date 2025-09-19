"use client";

import { useLayoutEffect, useRef, useState, useMemo, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IssueCard from "./issue-card";

gsap.registerPlugin(ScrollTrigger);

const issues = [
  {
    title: "Quyền thiêng liêng, bất khả xâm phạm",
    desc: "Không có gì quý hơn độc lập, tự do.",
    img: "/images/independence-1.jpg",
    href: "/doc-lap-dan-toc/quyen-thien-lieng",
  },
  {
    title: "Cơm no, áo ấm, hạnh phúc",
    desc: "Độc lập phải gắn với đời sống thiết thực của nhân dân.",
    img: "/images/independence-2.jpg",
    href: "/doc-lap-dan-toc/com-no-ao-am-hanh-phuc",
  },
  {
    title: "Độc lập thật sự, triệt để",
    desc: "Không bị áp bức chính trị, bóc lột kinh tế, nô dịch văn hóa.",
    img: "/images/independence-3.jpg",
    href: "/doc-lap-dan-toc/doc-lap-that-su-triet-de",
  },
  {
    title: "Thống nhất và toàn vẹn lãnh thổ",
    desc: "Nước Việt Nam là một, dân tộc Việt Nam là một.",
    img: "/images/independence-4.jpg",
    href: "/doc-lap-dan-toc/thong-nhat-va-toan-ven-lanh-tho",
  },
];

export default function IndependenceIssues() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const lineRef = useRef<SVGPolylineElement | null>(null);
  const motionDotRef = useRef<SVGCircleElement | null>(null);

  const [pointsPx, setPointsPx] = useState<{ x: number; y: number }[]>([]);
  const [paddingX, setPaddingX] = useState(16);

  useEffect(() => {
    const updatePadding = () => {
      if (window.innerWidth >= 1024) setPaddingX(80); // lg
      else if (window.innerWidth >= 768) setPaddingX(220); // md
      else setPaddingX(220);
    };
    updatePadding();
    window.addEventListener("resize", updatePadding);
    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  // generate polyline points theo paddingX
  const svgPoints = useMemo(() => {
    const numPoints = issues.length;
    if (numPoints === 0) return "";

    const viewBoxWidth = 1000;
    const viewBoxHeight = 300;

    const stepX = (viewBoxWidth - paddingX * 2) / (numPoints - 1);

    return issues
      .map((_, i) => {
        const x = paddingX + i * stepX;
        const y = i % 2 === 0 ? viewBoxHeight * 0.6 : viewBoxHeight * 0.4;
        return `${x},${y}`;
      })
      .join(" ");
  }, [paddingX]);

  useLayoutEffect(() => {
    if (!sectionRef.current || !lineRef.current || !svgRef.current) return;
    const svg = svgRef.current;
    const poly = lineRef.current;

    const computeVertexPositions = () => {
      const rect = svg.getBoundingClientRect();
      const vb = svg.viewBox.baseVal;
      const scaleX = rect.width / vb.width;
      const scaleY = rect.height / vb.height;
      const px: { x: number; y: number }[] = [];
      const n = poly.points.numberOfItems;
      for (let i = 0; i < n; i++) {
        const p = poly.points.getItem(i);
        px.push({ x: p.x * scaleX, y: p.y * scaleY });
      }
      setPointsPx(px);
    };

    computeVertexPositions();
    const ro = new ResizeObserver(() => computeVertexPositions());
    ro.observe(svg);

    const ctx = gsap.context(() => {
      const line = lineRef.current!;
      const length = line.getTotalLength();
      gsap.set(line, { strokeDashoffset: length });
      gsap.to(line, {
        strokeDashoffset: 0,
        duration: 4,
        ease: "linear",
        repeat: -1,
      });

      const dot = motionDotRef.current!;
      gsap.to(dot, {
        duration: 4,
        repeat: -1,
        ease: "linear",
        onUpdate: function () {
          const progress = this.progress();
          const point = line.getPointAtLength(progress * length);
          dot.setAttribute("cx", point.x.toString());
          dot.setAttribute("cy", point.y.toString());
        },
      });

      gsap.utils.toArray<HTMLElement>(".issue-card").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          scale: 0.9,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.from(".section-label", {
        opacity: 0,
        scale: 0.8,
        y: -20,
        duration: 1,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => {
      ro.disconnect();
      ctx.revert();
    };
  }, [svgPoints]);

  return (
    <section ref={sectionRef} className="relative h-screen flex flex-col">
      <Image
        src="/images/background.png"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10 lg:max-w-[900px] xl:max-w-[1200px] mx-auto w-full flex-grow flex items-center pt-10">
        <div className="w-full overflow-x-auto lg:overflow-x-visible h-full flex items-center scrollbar-hidden">
          {/* padding container match với paddingX */}
          <div className="relative w-full min-w-[1000px] md:min-w-0 h-[80%] px-4 md:px-6 lg:px-[80px]">
            <svg
              ref={svgRef}
              viewBox="0 0 1000 300"
              className="absolute inset-0 w-full h-full z-0 pointer-events-none"
            >
              <polyline
                ref={lineRef}
                points={svgPoints}
                fill="none"
                stroke="#7d0000"
                strokeWidth="3"
                strokeDasharray="1,12"
                strokeLinecap="round"
              />
              <circle
                ref={motionDotRef}
                r={8}
                fill="#d00000"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
            {pointsPx.map((p, i) => {
              const translateY = i % 2 === 0 ? "0px" : "-100%";
              return (
                <div
                  key={i}
                  className="absolute issue-card overflow-visible z-0"
                  style={{
                    left: `${p.x}px`,
                    top: `${p.y}px`,
                    transform: `translate(-50%, ${translateY})`,
                  }}
                >
                  <IssueCard
                    index={i}
                    title={issues[i].title}
                    desc={issues[i].desc}
                    img={issues[i].img}
                    href={issues[i].href}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
