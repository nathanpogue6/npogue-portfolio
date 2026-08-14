'use client'

import { useRef, useState, useLayoutEffect, useCallback } from 'react'

const CARD_STICKY_TOP = 120
const TITLE_STICKY_TOP = 32 // top-8
const TITLE_MARGIN_BOTTOM = 80 // mb-20

export default function Projects() {
  const titleTrackRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const [layout, setLayout] = useState<{ trackHeight: number; cardsMarginTop: number } | null>(null)

  const measureLayout = useCallback(() => {
    const titleEl = titleRef.current
    const cardsEl = cardsRef.current
    if (!titleEl || !cardsEl) return

    const cards = Array.from(cardsEl.children) as HTMLElement[]
    if (cards.length === 0) return

    const titleHeight = titleEl.offsetHeight
    const titleBlock = titleHeight + TITLE_MARGIN_BOTTOM
    const lastCard = cards[cards.length - 1]

    // Last card finishes stacking when its top reaches CARD_STICKY_TOP — measured
    // from the cards container via offsetTop, not when the whole list exits the viewport.
    const stackScrollDistance = Math.max(
      0,
      titleBlock + lastCard.offsetTop - CARD_STICKY_TOP
    )

    const trackHeight = stackScrollDistance + titleHeight + TITLE_STICKY_TOP
    const cardsMarginTop = -(trackHeight - titleBlock)

    setLayout({ trackHeight, cardsMarginTop })
  }, [])

  useLayoutEffect(() => {
    measureLayout()

    const resizeObserver = new ResizeObserver(measureLayout)
    if (cardsRef.current) resizeObserver.observe(cardsRef.current)
    if (titleRef.current) resizeObserver.observe(titleRef.current)

    window.addEventListener('resize', measureLayout)

    const mediaElements = cardsRef.current?.querySelectorAll('img, video') ?? []
    mediaElements.forEach((el) => {
      el.addEventListener('load', measureLayout)
      if (el instanceof HTMLVideoElement) {
        el.addEventListener('loadedmetadata', measureLayout)
      }
    })

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', measureLayout)
    }
  }, [measureLayout])

  const projects = [
    {
      title: "How to Build an Appointment Scheduling Voice Agent",
      description: "Technical blog post on how to build a healthcare appointment scheduling agent with ElevenAgents",
      image: "/projects/healthcare-scheduling-agent.png",
      previewUrl: "https://elevenlabs.io/blog/elevenagents-for-healthcare-build-an-inbound-appointment-scheduling-agent"
    },
    {
      title: "Zero Trust Generative AI with AWS Nitro Enclaves",
      description: "Machine learning solution to leverage AWS Nitro Enclaves for zero trust inference.",
      image: "/projects/zero-trust.png",
      sourceUrl: "https://github.com/aws-samples/sample-for-secure-medical-llm-inference-with-nitro-enclaves",
      previewUrl: "https://aws.amazon.com/blogs/compute/building-zero-trust-generative-ai-applications-in-healthcare-with-aws-nitro-enclaves/"
    },
    {
      title: "How to Build a Reverse Image Search Engine",
      description: "Machine learning solution to build a reverse image search engine using AWS native services.",
      image: "/projects/rise.png",
      sourceUrl: "https://github.com/aws-samples/reverse-image-search-engine",
      previewUrl: "https://aws.amazon.com/blogs/machine-learning/build-a-reverse-image-search-engine-with-amazon-titan-multimodal-embeddings-in-amazon-bedrock-and-aws-managed-services/"
    },
    {
      title: "Bedrock Speech-to-Text Chat",
      description: "Amazon Bedrock solution to convert speech to text for generative AI inference and chat applications.",
      image: "/projects/github.png",
      sourceUrl: "https://github.com/aws-samples/genai-quickstart-pocs/tree/main/genai-quickstart-pocs-python/amazon-bedrock-speech-to-text-chat-poc",
    },
    {
      title: "Intelligent Document Processing on AWS",
      description: "Amazon Bedrock and Amazon Textract solution to perform intelligent document processing.",
      image: "/projects/github.png",
      sourceUrl: "https://github.com/aws-samples/genai-quickstart-pocs/tree/main/genai-quickstart-pocs-python/amazon-bedrock-intelligent-document-processing-poc",
    },
    {
      title: "Clarifai Smart Brain",
      description: "React application that detects faces in user uploaded images using Clarifai API.",
      image: "/projects/clarifi.png",
      sourceUrl: "https://github.com/nathanpogue6/smart-brain",
      backendUrl: "https://github.com/nathanpogue6/smart-brain-api"
    },
    {
      title: "Math Garden",
      description: "Machine learning application that uses the MNIST Handwritten Digit dataset to verify user-written answers for a game of addition.",
      image: "/projects/math-garden.mp4",
      sourceUrl: "https://github.com/nathanpogue6/math-garden",
      previewUrl: "https://nathanpogue6.github.io/math-garden/index.html",
      isVideo: true
    },
    {
      title: "DermaGO",
      description: "Machine learning web application that uses a CNN to diagnose seven different types of skin cancers and lesions.",
      image: "/projects/dermago.png",
      sourceUrl: "https://github.com/nathanpogue6/dermago",
    },
    {
      title: "Sorting Algorithms Visualized",
      description: "Java application with interactive GUI to visualize different sorting algorithms.",
      image: "/projects/Sorting-Algorithms-Demo.mp4",
      sourceUrl: "https://github.com/nathanpogue6/sorting-algo-visualizer",
      isVideo: true
    }
  ]

  return (
    <section id="projects" className="relative pt-12 pb-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={titleTrackRef}
          style={layout ? { height: `${layout.trackHeight}px` } : undefined}
        >
          <div
            ref={titleRef}
            className="sticky top-8 z-40 mb-20 bg-black pb-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Featured Projects
            </h2>
          </div>
        </div>

        <div
          ref={cardsRef}
          className="relative space-y-8"
          style={layout ? { marginTop: `${layout.cardsMarginTop}px` } : undefined}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="sticky"
              style={{
                top: `${CARD_STICKY_TOP}px`,
                zIndex: index === projects.length - 1 ? 50 : 20 + index,
              }}
            >
              <div className="bg-slate-800 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl -mx-2">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

                  <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-300">
                      {project.title}
                    </h3>

                    <p className="text-lg text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex gap-6 pt-4">
                      {project.sourceUrl && (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 font-medium text-gray-300 hover:text-white transition-colors duration-200"
                        >
                          <span>Source</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}

                      {project.backendUrl && (
                        <a
                          href={project.backendUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 font-medium text-gray-300 hover:text-white transition-colors duration-200"
                        >
                          <span>Backend</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}

                      {project.previewUrl && (
                        <a
                          href={project.previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 font-medium text-gray-300 hover:text-white transition-colors duration-200"
                        >
                          <span>Preview</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <a
                      href={project.previewUrl ?? project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative rounded-2xl overflow-hidden bg-slate-700/50 border border-slate-600/50 shadow-xl hover:border-blue-500/50 transition-all duration-300 cursor-pointer group"
                    >
                      <div className={`aspect-video flex items-center justify-center ${index >= projects.length - 2 ? 'px-2 py-1' : ''}`}>
                        {project.isVideo ? (
                          <video
                            src={project.image}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={`w-full h-full ${index >= projects.length - 2 ? 'object-contain' : 'object-cover'} group-hover:scale-105 transition-transform duration-300`}
                          />
                        ) : (
                          <img
                            src={project.image}
                            alt={project.title}
                            className={`w-full h-full ${index >= projects.length - 2 ? 'object-contain' : 'object-cover'} group-hover:scale-105 transition-transform duration-300`}
                          />
                        )}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
