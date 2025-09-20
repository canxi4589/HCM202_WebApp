"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, ArrowRight, Star } from "lucide-react"

interface RevolutionStep {
  id: number
  title: string
  subtitle: string
  content: string[]
  quote: string
  author: string
  image: string
  altText: string
  color: string
  year?: string
}

interface RevolutionContentProps {
  step: RevolutionStep
  index: number
}

export default function RevolutionContent({ step, index }: RevolutionContentProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".scroll-reveal")
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`content-section-${index} py-24 px-4 sm:px-6 ${
        index % 2 === 0
          ? "bg-gradient-to-br from-slate-900 to-slate-800"
          : "bg-gradient-to-br from-slate-800 to-red-900/20"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
            index % 2 === 0 ? "" : "lg:grid-flow-col-dense"
          }`}
        >
          <div className={`${index % 2 === 0 ? "lg:order-1" : "lg:order-2"} scroll-reveal`}>
            <div className="space-y-8">
              <div className="flex items-start gap-6 mb-12 scroll-reveal">
                <div
                  className={`relative w-16 h-16 bg-gradient-to-br ${step.color} text-white rounded-2xl flex items-center justify-center text-2xl font-black flex-shrink-0 animate-neon-glow`}
                >
                  {step.id}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-black" />
                  </div>
                </div>
                <div>
                  <Badge className="mb-3 bg-gradient-to-r from-red-500/20 to-yellow-500/20 text-yellow-300 border-yellow-500/30 text-sm px-4 py-1">
                    {step.year || `Giai đoạn ${step.id}`}
                  </Badge>
                  <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-3">
                    <span className="text-transparent bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text">
                      {step.title}
                    </span>
                  </h2>
                  <p className="text-xl text-white/70">{step.subtitle}</p>
                </div>
              </div>

              <Card className="glass-morphism neon-border hover-epic scroll-reveal">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <blockquote className="text-xl sm:text-2xl font-medium text-white italic leading-relaxed mb-4">
                        "{step.quote}"
                      </blockquote>
                      <cite className="text-yellow-400 font-bold text-lg">— {step.author}</cite>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                {step.content.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-4 group scroll-reveal hover-epic`}
                    style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
                  >
                    <div
                      className={`w-6 h-6 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-125 transition-transform duration-300`}
                    >
                      <ArrowRight className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-lg text-white/90 leading-relaxed group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`${index % 2 === 0 ? "lg:order-2" : "lg:order-1"} mt-8 lg:mt-0 scroll-reveal`}>
            <div className="relative group">
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className={`absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br ${step.color} rounded-full opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500 animate-particle-float`}
                />
                <div
                  className={`absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full opacity-15 blur-2xl group-hover:opacity-25 transition-opacity duration-500 animate-particle-float`}
                  style={{ animationDelay: "2s" }}
                />
              </div>

              <Card className="relative z-10 overflow-hidden glass-morphism hover-epic group-hover:neon-border">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.altText}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 animate-cinematic-zoom"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-8">
                    <div className="text-center text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <h4 className="font-bold text-2xl mb-2 text-transparent bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text">
                        {step.title}
                      </h4>
                      <p className="text-white/90">{step.altText}</p>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>

                <CardContent className="p-6 bg-gradient-to-r from-black/40 to-black/60">
                  <p className="text-white/80 text-center italic group-hover:text-yellow-300 transition-colors duration-300">
                    {step.altText}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
