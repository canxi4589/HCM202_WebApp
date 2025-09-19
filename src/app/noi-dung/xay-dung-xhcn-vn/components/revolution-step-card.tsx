"use client";

interface RevolutionStep {
  id: number;
  title: string;
  subtitle: string;
  color: string;
}

interface RevolutionStepCardProps {
  step: RevolutionStep;
  index: number;
  currentStep: number;
  onClick: (index: number) => void;
}

export default function RevolutionStepCard({ step, index, currentStep, onClick }: RevolutionStepCardProps) {
  return (
    <div
      className={`step-card cursor-pointer group relative overflow-hidden
                 bg-gradient-to-br ${step.color} text-white p-4 sm:p-6 rounded-xl
                 shadow-lg hover:shadow-xl transition-all duration-300
                 hover:-translate-y-1 min-h-[160px] sm:min-h-[200px] flex flex-col
                 ${currentStep === index ? 'ring-2 sm:ring-4 ring-white/50 scale-105' : ''}`}
      onClick={() => onClick(index)}
    >
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="text-2xl sm:text-3xl font-bold mb-2 transition-transform duration-200">
          {step.id}
        </div>
        <h3 className="text-base sm:text-lg font-semibold mb-2 leading-tight">
          {step.title}
        </h3>
        <p className="text-xs sm:text-sm opacity-90">{step.subtitle}</p>
      </div>
      
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 
                     transition-opacity duration-300" />
    </div>
  );
}