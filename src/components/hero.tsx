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
  const quochuyRef =  useRef<HTMLDivElement  | null>(null)

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
          quochuyRef.current,
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
        // 2. quoc huy ref
        .to(
          quochuyRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "back.out(1.7)",
          },
          "-=0.3",
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
        
        // Finally, the title appears
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
      gsap.set(quochuyRef.current, {scale:0.5, y:50})
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
    <div ref={backgroundTextureRef} className="absolute inset-0 z-0 scale-100">
    <Image src="/images/landingPage/mainbackground.png" 
    alt="Background Texture" 
    fill className="object-cover opacity-60" priority />
</div>
    {/* Quoc huy */}
    <div ref={quochuyRef} className="absolute bottom-[450px] left-[660px] w-50 h-50 z-[4]">
    <Image
    src="/images/landingPage/quochuy.png"
    alt="Vietnamese Leaders"
    fill
    className="object-contain"/>
</div>
      
      {/* Historical leaders */}
    <div ref={leadersRef} className="absolute bottom-[250px] right-[-10px] w-80 h-96 z-[4]">
    <Image
    src="/images/landingPage/bacho.png"
    alt="Vietnamese Leaders"
    fill
    className="object-contain"
  />
</div>

      {/* Ho Chi Minh Mausoleum */}
      <div ref={mausoleumRef} className="absolute bottom-[-10px] right-[-50px] w-72 h-48 z-5">
        <Image
          src="/images/landingPage/congdong.png"
          alt="Ho Chi Minh Mausoleum"
          fill
          className="object-contain"
        />
      </div>

      


      <div className="relative z-10 max-w-5xl px-4 mx-auto">
  <h1
    ref={titleRef}
    className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-red-800 drop-shadow-lg uppercase leading-tight text-center"
  >
    Xây dựng chủ nghĩa xã hội và bảo vệ Tổ quốc<br />
    1975-1981
  </h1>
</div>
    </section>
  )
}
