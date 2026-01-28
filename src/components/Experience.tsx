export default function Experience() {
  const experiences = [
    {
      title: "Solutions Architect",
      company: "Amazon Web Services (AWS)",
      period: "2023 - Present",
      description: "Spearheading cloud adoption across Canadian healthcare organizations, driving >$45M in new ARR, with dedicated focus on EHR, AI/ML, and analytics workloads.",
      technologies: ["Amazon Bedrock", "Amazon SageMaker", "Epic", "Amazon QuickSight", "Amazon EC2"],
      logo: "/aws.png"
    },
    {
      title: "Solutions Architect Intern",
      company: "Amazon Web Services (AWS)",
      period: "2022 - 2022",
      description: "Product owner and software engineer for an internal web application used to automate dry-run presentations and enhance soft skills using AI services, used by 2,500+ Amazonians internally.",
      technologies: ["React", "JavaScript", "Git", "Amazon Bedrock", "AWS Amplify", "Amazon Transcribe"],
      logo: "/aws.png"
    },
    {
      title: "Summer Associate Consultant",
      company: "Slalom Consulting",
      period: "2021 - 2021",
      description: "Developed a business strategy between technical and marketing teams to design an enterprise CDP MarTech solution for a large Canadian telco.",
      technologies: ["Excel", "PowerPoint"],
      logo: "/slalom.jpg"
    },
    {
      title: "Salesforce Support Specialist",
      company: "ATB Financial",
      period: "2019 - 2019",
      description: "Trained 40+ financial advisors on Salesforce to visualize client financial data and help ATB Wealth executives identify 15+ new business trends.",
      technologies: ["Salesforce", "Excel", "Powerpoint"],
      logo: "/atb.png"
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 bg-black overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Work Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative rounded-xl p-4 sm:p-6 md:p-8 overflow-hidden group transition-all duration-300"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-slate-300/10 group-hover:from-blue-400/20 group-hover:to-slate-300/20 transition-all duration-300"></div>
              {/* Border */}
              <div className="absolute inset-0 rounded-xl border border-blue-400/20"></div>
              
              {/* Content */}
              <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1 sm:mb-2">{exp.title}</h3>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-300 text-base sm:text-lg font-medium">{exp.company}</p>
                  </div>
                </div>
                <span className="text-gray-400 font-medium mt-2 md:mt-0 text-sm sm:text-base">{exp.period}</span>
              </div>
              
              <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 sm:px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs sm:text-sm border border-blue-500/30"
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