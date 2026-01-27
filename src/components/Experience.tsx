export default function Experience() {
  const experiences = [
    {
      title: "Solutions Architect",
      company: "Amazon Web Services (AWS)",
      period: "2023 - Present",
      description: "Led development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented best practices.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
      logo: "/aws.png"
    },
    {
      title: "Solutions Architect Intern",
      company: "Amazon Web Services (AWS)",
      period: "2020 - 2022",
      description: "Developed responsive web applications and collaborated with design teams to create engaging user experiences.",
      technologies: ["React", "JavaScript", "CSS", "Figma", "Git"],
      logo: "/aws.png"
    },
    {
      title: "Associate Consultant",
      company: "Slalom Consulting",
      period: "2019 - 2020",
      description: "Built and maintained web applications while learning modern development practices and agile methodologies.",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "Django"],
      logo: "/slalom.jpg"
    },
    {
      title: "Salesforce Support Specialist",
      company: "ATB Financial",
      period: "2019 - 2020",
      description: "Built and maintained web applications while learning modern development practices and agile methodologies.",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "Django"],
      logo: "/atb.png"
    }
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Work Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative rounded-xl p-8 overflow-hidden group transition-all duration-300"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-slate-300/10 group-hover:from-blue-400/20 group-hover:to-slate-300/20 transition-all duration-300"></div>
              {/* Border */}
              <div className="absolute inset-0 rounded-xl border border-blue-400/20"></div>
              
              {/* Content */}
              <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{exp.title}</h3>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-300 text-lg">{exp.company}</p>
                  </div>
                </div>
                <span className="text-gray-400 font-medium mt-2 md:mt-0">{exp.period}</span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}