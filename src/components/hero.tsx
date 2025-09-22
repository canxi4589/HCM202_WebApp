"use client"

import { useLayoutEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import Header from "./header"

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)

  const backgroundTextureRef = useRef<HTMLDivElement | null>(null)
  const mandalaRef = useRef<HTMLDivElement | null>(null)
  const pagodaRef = useRef<HTMLDivElement | null>(null)
  const newspaperRef = useRef<HTMLDivElement | null>(null)
  const leadersRef = useRef<HTMLDivElement | null>(null)
  const mausoleumRef = useRef<HTMLDivElement | null>(null)
  const buildingRef = useRef<HTMLDivElement | null>(null)
  const flagRef = useRef<HTMLDivElement | null>(null)
  const templeRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    if (!sectionRef.current || !titleRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      // Set initial states - all components invisible
      gsap.set(
        [
          backgroundTextureRef.current,
          mandalaRef.current,
          pagodaRef.current,
          newspaperRef.current,
          leadersRef.current,
          mausoleumRef.current,
          buildingRef.current,
          flagRef.current,
          templeRef.current,
          titleRef.current,
        ],
        { opacity: 0 },
      )

      // Sequential animation timeline
      tl
        // 1. Background texture appears first
        .to(backgroundTextureRef.current, {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        })
        // 2. Traditional mandala pattern
        .to(
          mandalaRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        )
        // 3. Historical pagoda
        .to(
          pagodaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.5",
        )
        // 4. Newspaper elements
        .to(
          newspaperRef.current,
          {
            opacity: 1,
            rotationY: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.7",
        )
        // 5. Historical leaders
        .to(
          leadersRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=0.6",
        )
        // 6. Ho Chi Minh Mausoleum
        .to(
          mausoleumRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8",
        )
        // 7. Modern building
        .to(
          buildingRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.6",
        )
        // 8. Flag elements
        .to(
          flagRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.7",
        )
        // 9. Ancient temple
        .to(
          templeRef.current,
          {
            opacity: 1,
            rotationX: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.8",
        )
        // 10. Finally, the title appears
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.5",
        )

      // Set initial transform states for animations
      gsap.set(mandalaRef.current, { scale: 0.3 })
      gsap.set(pagodaRef.current, { y: 100 })
      gsap.set(newspaperRef.current, { rotationY: -90 })
      gsap.set(leadersRef.current, { scale: 0.8 })
      gsap.set(mausoleumRef.current, { y: 80 })
      gsap.set(buildingRef.current, { x: -100 })
      gsap.set(flagRef.current, { scale: 0.5 })
      gsap.set(templeRef.current, { rotationX: 45 })
      gsap.set(titleRef.current, { y: 80 })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <Header />

      {/* Background texture layer */}
    <div ref={backgroundTextureRef} className="absolute inset-0 z-0">
    <Image src="/images/landingPage/backgroundTextureRef.png" 
    alt="Background Texture" 
    fill className="object-cover opacity-60" priority />
</div>

      {/* Traditional mandala pattern */}
      <div ref={mandalaRef} className="absolute top-8 left-8 w-64 h-64 z-1">
        <Image
          src="/images/landingPage/bigFlagRef.png"
          alt="Traditional Pattern"
          fill
          className="object-contain"
        />
      </div>

      

      
      {/* Historical leaders */}
      <div ref={leadersRef} className="absolute top-20 right-16 w-80 h-96 z-4">
        <Image
          src="/images/landingPage/leadersRef.png"
          alt="Vietnamese Leaders"
          fill
          className="object-contain"
        />
      </div>

      {/* Ho Chi Minh Mausoleum */}
      <div ref={mausoleumRef} className="absolute bottom-32 right-32 w-72 h-48 z-5">
        <Image
          src="/images/landingPage/mausoleumRef.png"
          alt="Ho Chi Minh Mausoleum"
          fill
          className="object-contain"
        />
      </div>

      {/* Modern building */}
      <div ref={buildingRef} className="absolute bottom-16 left-8 w-96 h-64 z-6">
        <Image
          src="/images/landingPage/buildingRef.png"
          alt="Modern Building"
          fill
          className="object-contain"
        />
      </div>


      <div className="relative z-10 max-w-4xl px-4 mx-auto">
  <h1
    ref={titleRef}
    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-red-800 drop-shadow-lg uppercase leading-tight text-center"
  >
    TƯ TƯỞNG HỒ CHÍ MINH VỀ CHỦ NGHĨA XÃ HỘI VÀ XÂY DỰNG CHỦ NGHĨA XÃ HỘI Ở VIỆT NAM
  </h1>
</div>
    </section>
  )
}
