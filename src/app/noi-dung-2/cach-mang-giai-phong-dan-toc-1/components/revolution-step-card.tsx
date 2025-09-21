"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"

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

interface RevolutionStepCardProps {
  step: RevolutionStep
  index: number
  currentStep: number
  onClick: (index: number) => void
}

export default function RevolutionStepCard({ step, index, currentStep, onClick }: RevolutionStepCardProps) {
  return (
    <Card
      className={`cursor-pointer group relative overflow-hidden transition-all duration-700 hover-epic glass-morphism
                 ${currentStep === index ? "neon-border animate-neon-glow scale-105" : "hover:scale-105"}`}
      onClick={() => onClick(index)}
    >
      <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} animate-holographic`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-particle-float opacity-60" />
        <div
          className="absolute top-8 left-6 w-1 h-1 bg-red-400 rounded-full animate-particle-float opacity-40"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-6 right-8 w-1.5 h-1.5 bg-white rounded-full animate-particle-float opacity-50"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <CardContent className="relative z-10 p-8 text-white min-h-[280px] flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <Badge className="bg-gradient-to-r from-red-500/20 to-yellow-500/20 text-yellow-300 border-yellow-500/30 text-sm px-3 py-1 animate-epic-entrance">
              {step.year || `Giai đoạn ${step.id}`}
            </Badge>
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
          </div>

          <div className="text-6xl font-black mb-4 text-transparent bg-gradient-to-br from-red-400 to-yellow-400 bg-clip-text group-hover:scale-110 transition-transform duration-500 animate-holographic">
            {step.id}
          </div>

          <h3 className="text-2xl font-bold mb-3 leading-tight group-hover:text-yellow-300 transition-colors duration-300">
            {step.title}
          </h3>

          <p className="text-white/80 mb-4 group-hover:text-white transition-colors duration-300">{step.subtitle}</p>

          <div className="space-y-2">
            {step.content.slice(0, 2).map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300"
              >
                <ArrowRight className="w-3 h-3 mt-1 text-yellow-400 flex-shrink-0" />
                <span className="line-clamp-1">{item}</span>
              </div>
            ))}
            {step.content.length > 2 && (
              <div className="text-xs text-yellow-400 font-medium">+{step.content.length - 2} nội dung khác...</div>
            )}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
            Nhấn để khám phá
          </div>
          <div className="relative">
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
            <div className="absolute inset-0 w-8 h-8 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full animate-ping opacity-30 group-hover:opacity-60" />
          </div>
        </div>
      </CardContent>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
    </Card>
  )
}
