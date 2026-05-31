'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const ACTIVITY_PHOTOS = ['/hiking.jpeg', '/summit.jpeg', '/skiing.jpeg']

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const hasAnimated = useRef(false)
  const [isFlipped, setIsFlipped] = useState(false)
  // backSrc is what sits on the back face — swapped while the card is face-down
  const [backSrc, setBackSrc] = useState('/hiking.jpeg')
  // tracks which photo to show next on hover (starts at 1 since hiking=0 is used on scroll)
  const nextIndexRef = useRef(1)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          // Always show hiking.jpeg (index 0) on first scroll
          setBackSrc(ACTIVITY_PHOTOS[0])
          setTimeout(() => {
            setIsFlipped(true)
            setTimeout(() => {
              setIsFlipped(false)
            }, 1500)
          }, 400)
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  function handleMouseEnter() {
    setBackSrc(ACTIVITY_PHOTOS[nextIndexRef.current])
    setIsFlipped(true)
  }

  function handleMouseLeave() {
    setIsFlipped(false)
    // Advance to next photo in sequence, wrapping around
    nextIndexRef.current = (nextIndexRef.current + 1) % ACTIVITY_PHOTOS.length
    // Pre-load it onto the back face after the flip-back animation completes
    setTimeout(() => {
      setBackSrc(ACTIVITY_PHOTOS[nextIndexRef.current])
    }, 700)
  }

  return (
    <section ref={sectionRef} id="about" className="py-20 px-4 sm:px-6 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
              About Me
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Hi, I'm Nathan Pogue, a Solutions Engineer at ElevenLabs. I hold a dual degree in Computer Science and Business Administration 
                from Western University and the Ivey Business School, where I developed a strong foundation in technical problem-solving, sales, 
                and business strategy.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Over the years, I've honed my skills working closely with customers to bring their ideas to life - from early concepts to 
                production-ready solutions. With a passion for cloud computing and machine learning, my customer work and projects range from transformative 
                agentic AI deployments to innovative web applications - all with a focus on performance, security, and long-term scalability.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Outside of work, I'm a big fan of skiing, hiking, weightlifting, Brazilian Jiu-Jitsu, and concerts!
              </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/10">
                <h3 className="text-blue-400 font-semibold mb-2 text-sm sm:text-base">Languages</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Python, JavaScript, SQL</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/10">
                <h3 className="text-blue-400 font-semibold mb-2 text-sm sm:text-base">Tools</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Git, Docker, AWS, Vercel</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/10">
                <h3 className="text-blue-400 font-semibold mb-2 text-sm sm:text-base">Frameworks</h3>
                <p className="text-gray-300 text-xs sm:text-sm">React.js, Node.js, PyTorch</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/10">
                <h3 className="text-blue-400 font-semibold mb-2 text-sm sm:text-base">Certifications</h3>
                <p className="text-gray-300 text-xs sm:text-sm">8x AWS Certified, HL7, FHIR</p>
              </div>
            </div>
          </div>
          
          <div className="relative mt-12 md:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
              <div className="absolute inset-0 -inset-y-8 sm:-inset-y-12 -inset-x-6 sm:-inset-x-8 bg-blue-500 rounded-full blur-[60px] sm:blur-[80px] opacity-30"></div>

              {/* Flip card container */}
              <div
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] mx-auto cursor-pointer"
                style={{ perspective: '1000px' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Inner card that flips */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.7s ease-in-out',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  {/* Front face — headshot */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      borderRadius: '9999px',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src="/headshot.jpg"
                      alt="Nathan Pogue"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 448px"
                    />
                  </div>

                  {/* Back face — activity photo */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      borderRadius: '9999px',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src={backSrc}
                      alt="Nathan Pogue outdoors"
                      fill
                      className="object-cover"
                      style={{ objectPosition: backSrc === '/skiing.jpeg' ? 'center 70%' : 'center center' }}
                      sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 448px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}