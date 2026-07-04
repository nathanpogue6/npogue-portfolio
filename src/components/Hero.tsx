'use client'

import { useState, useEffect } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background video with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-black"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6">
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6 tracking-tight transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Nathan
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-300">
            {' '}Pogue
          </span>
        </h1>
        
        <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-2xl mx-auto leading-relaxed flex flex-wrap items-center justify-center transition-all duration-1000 delay-500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span>Forward DeployedEngineering @</span>
          <img 
            src="/elevenlabs-hero.png"
            alt="ElevenLabs" 
            className="inline-block h-3 sm:h-4 md:h-5 ml-2 align-middle"
          />
        </p>
        
        <p className={`text-sm sm:text-base md:text-lg text-gray-300 mb-12 max-w-xl mx-auto px-4 transition-all duration-1000 delay-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Currently bridging the gap between sales and engineering, tinkering with AI/ML, or skiing on a mountain somewhere...
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center px-4 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '1500ms' }}>
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 border-2 border-blue-500/50 text-blue-400 rounded-full font-semibold hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 border-2 border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:opacity-80 transition-opacity"
        aria-label="Scroll to About section"
      >
        <ChevronDownIcon className="w-6 h-6 text-white/60" />
      </a>
    </section>
  )
}
