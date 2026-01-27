import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              About Me
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi, I'm Nathan Pogue, a passionate Solutions Architect with a knack for crafting 
              seamless digital experiences. With a strong background in both front-end and back-end 
              technologies, I thrive at the intersection where creativity meets technology.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Over the years, I've honed my skills in building robust, user-friendly applications 
              that not only meet the needs of users but also push the boundaries of what's possible. 
              My projects range from innovative web applications to responsive designs, all with a 
              focus on performance, security, and scalability.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <h3 className="text-blue-400 font-semibold mb-2">Frontend</h3>
                <p className="text-gray-300 text-sm">React, Next.js, TypeScript, Tailwind CSS</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <h3 className="text-blue-400 font-semibold mb-2">Backend</h3>
                <p className="text-gray-300 text-sm">Node.js, Python, PostgreSQL, MongoDB</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <h3 className="text-blue-400 font-semibold mb-2">Tools</h3>
                <p className="text-gray-300 text-sm">Git, Docker, AWS, Vercel</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <h3 className="text-blue-400 font-semibold mb-2">Design</h3>
                <p className="text-gray-300 text-sm">Figma, Adobe Creative Suite</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-slate-600">
                  <Image
                    src="/headshot.jpg"
                    alt="Nathan Pogue"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 320px, 320px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}