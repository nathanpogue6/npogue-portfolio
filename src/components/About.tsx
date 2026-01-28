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
                Hi, I'm Nathan Pogue, a Solutions Architect at AWS. I hold a dual degree in Computer Science and Business Administration 
                from Western University and the Ivey Business School, where I developed a strong foundation in technical problem-solving, sales, 
                and business strategy.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Over the years, I've honed my skills working closely with customers to bring their ideas to life - from early concepts to 
                production-ready solutions. With a passion for cloud computing and machine learning, my projects range from creative 
                generative AI experiments to innovative web applications, all with a focus on performance, security, and long-term scalability.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Outside of work, I'm a big fan of skiing, hiking, weightlifting, Brazilian Jiu-Jitsu, and concerts!
              </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <h3 className="text-blue-400 font-semibold mb-2">Languages</h3>
                <p className="text-gray-300 text-sm">Python, JavaScript, SQL</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <h3 className="text-blue-400 font-semibold mb-2">Tools</h3>
                <p className="text-gray-300 text-sm">Git, Docker, AWS</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <h3 className="text-blue-400 font-semibold mb-2">Frameworks</h3>
                <p className="text-gray-300 text-sm">React.js, Node.js, PyTorch</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <h3 className="text-blue-400 font-semibold mb-2">Certifications</h3>
                <p className="text-gray-300 text-sm">8x AWS Certified, HL7, FHIR</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 -inset-y-12 -inset-x-8 bg-blue-500 rounded-full blur-[80px] opacity-30"></div>
              <div className="relative w-[28rem] h-[28rem] mx-auto rounded-full overflow-hidden">
                <Image
                  src="/headshot.jpg"
                  alt="Nathan Pogue"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 448px, 448px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}