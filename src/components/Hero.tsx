'use client'

import { useState, useEffect } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  
  const fullText = 'Solutions Architect @ Amazon Web Services '

  useEffect(() => {
    setIsLoaded(true)
    
    // Character-by-character fade-in animation
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 50) // 50ms per character

    return () => clearInterval(interval)
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
        {/* Dark overlay to dim the video */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Gradient fade to blend with next section */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-black"></div>
      </div>

      <div className={`relative z-10 text-center px-4 sm:px-6 transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          Nathan
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-300">
            {' '}Pogue
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-2xl mx-auto leading-relaxed min-h-[2rem] flex flex-wrap items-center justify-center">
          <span className="whitespace-normal break-words">{displayedText}</span>
          {displayedText.length >= fullText.length && (
            <img 
              src="/aws.png"
              alt="AWS" 
              className="inline-block h-6 sm:h-8 md:h-10 ml-2 align-middle"
            />
          )}
          <span className="inline-block w-0.5 h-6 bg-white ml-1 animate-pulse align-middle" 
                style={{ opacity: displayedText.length < fullText.length ? 1 : 0 }} />
        </p>
        
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-12 max-w-xl mx-auto px-4">
          Currently bridging the gap between sales and engineering, tinkering with AI/ML, or skiing on a mountain somewhere...
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
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