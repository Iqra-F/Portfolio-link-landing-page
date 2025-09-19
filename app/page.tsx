"use client"

import { Button } from "@/components/ui/button"

export default function PortfolioLanding() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating circles */}
        <div
          className="absolute top-10 left-10 w-32 h-32 bg-teal-500/20 rounded-full animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-20 right-20 w-24 h-24 bg-black/10 rounded-full animate-pulse"
          style={{ animationDuration: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-40 h-40 bg-teal-400/15 rounded-full animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        ></div>

        {/* Floating squares */}
        <div
          className="absolute top-1/3 left-1/4 w-16 h-16 bg-teal-600/25 rotate-45 animate-spin"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-black/15 rotate-12 animate-spin"
          style={{ animationDuration: "6s", animationDirection: "reverse" }}
        ></div>

        {/* Moving lines */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-teal-500/30 to-transparent animate-pulse"></div>
        <div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/20 to-transparent animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Small floating dots */}
        <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-teal-500 rounded-full animate-ping"></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-black rounded-full animate-ping"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/2 w-4 h-4 bg-teal-400 rounded-full animate-ping"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Diagonal moving elements */}
        <div
          className="absolute top-0 right-0 w-20 h-20 bg-teal-500/10 transform rotate-45 animate-bounce"
          style={{ animationDuration: "5s" }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-16 h-16 bg-black/10 transform -rotate-45 animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "2s" }}
        ></div>

        {/* Pulsing rings */}
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-teal-500/30 rounded-full animate-ping"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-32 h-32 border border-black/20 rounded-full animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6">
        <div className="text-2xl font-bold text-black">IF</div>
        <button className="text-black hover:text-teal-600 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Small intro text */}
          <p className="text-teal-600 font-medium mb-4 tracking-wider uppercase text-sm">Welcome to my portfolio</p>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 leading-tight">
            Hi, I'm <span className="text-teal-600">Iqra Fatima</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-4xl font-light text-black/80 mb-8">
            Full Stack Developer
            <span className="text-teal-600 font-medium"> + </span>
            MERN Stack Specialist
          </h2>

          {/* Description */}
          <p className="text-lg text-black/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with modern web technologies. Passionate about creating scalable applications
            and beautiful user interfaces.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Visit Portfolio
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-black/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-teal-600 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </main>
    </div>
  )
}
