'use client'

export default function Projects() {
  const projects = [
    {
      title: "Spotifu Music",
      description: "A music streaming app that emulates Spotify's core features.",
      image: "/spotifu.png",
      sourceUrl: "https://github.com/nathanpogue/spotifu",
      previewUrl: "https://spotifu-demo.vercel.app"
    },
    {
      title: "Shopp App",
      description: "An e-commerce platform that replicates Shopify's key features.",
      image: "/shopify-clon.png",
      sourceUrl: "https://github.com/nathanpogue/shopp",
      previewUrl: "https://shopp-demo.vercel.app"
    },
    {
      title: "ClonTagram",
      description: "A social network that replicates the features of Instagram",
      image: "/clone-ig.png",
      sourceUrl: "https://github.com/nathanpogue/clontagram",
      previewUrl: "https://clontagram-demo.vercel.app"
    }
  ]

  return (
    <section id="projects" className="relative py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Sticky title container with height to allow unsticking */}
        <div style={{ height: `${(projects.length - 1) * 100}vh` }}>
          <div className="sticky top-8 z-10 mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Featured Projects
            </h2>
          </div>
        </div>

        {/* Projects that stack */}
        <div className="relative space-y-8" style={{ marginTop: `calc(-${(projects.length - 1) * 100}vh + 80px)` }}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="sticky"
              style={{
                top: '120px',
                zIndex: 20 + index,
              }}
            >
              <div className="bg-slate-800 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl -mx-2">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  
                  {/* Left side - Project Info */}
                  <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-blue-400">
                      {project.title}
                    </h3>
                    
                    <p className="text-lg text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex gap-6 pt-4">
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        <span className="font-medium">Source</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      
                      <a
                        href={project.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        <span className="font-medium">Preview</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Right side - Project Image */}
                  <div className="relative">
                    <div className="relative rounded-2xl overflow-hidden bg-slate-700/50 border border-slate-600/50 shadow-xl">
                      <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                        <div className="text-6xl font-bold text-slate-600">
                          {project.title.split(' ').map(word => word[0]).join('')}
                        </div>
                      </div>
                    </div>
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
