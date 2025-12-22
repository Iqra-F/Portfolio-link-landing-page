"use client"

import { Button } from "@/components/ui/button"

export default function PortfolioLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-teal-950 flex items-center justify-center px-6 relative overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large teal circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-700" />

        {/* Animated squares */}
        <div className="absolute top-10 right-20 w-32 h-32 border-2 border-teal-500/30 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-white/20 rotate-12 animate-spin-reverse" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#14b8a610_1px,transparent_1px),linear-gradient(to_bottom,#14b8a610_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Moving dots */}
        <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-teal-400 rounded-full animate-bounce" />
        <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-white rounded-full animate-ping" />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-teal-300 rounded-full animate-pulse" />
      </div>

      <div className="relative z-10">
        <Button
          asChild
          size="lg"
          className="bg-teal-500 hover:bg-teal-400 text-black px-12 py-6 text-xl font-bold rounded-lg transition-all duration-300 hover:scale-110 shadow-[0_0_30px_rgba(20,184,166,0.5)] hover:shadow-[0_0_50px_rgba(20,184,166,0.8)]"
        >
          <a href="https://iqra-portfolio.pages.dev/" target="_blank" rel="noopener noreferrer">
            Visit Portfolio
          </a>
        </Button>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(12deg); }
          to { transform: rotate(-348deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </div>
  )
}
