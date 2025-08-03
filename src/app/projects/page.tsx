import ScrollAnimations from '@/components/ScrollAnimations';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "InfoProfile",
      description: "A new generation social media platform",
      longDescription: "InfoProfile represents the next evolution in social media platforms, focusing on meaningful connections and authentic user experiences. As Product Manager, I led the strategic vision and coordinated cross-functional teams to deliver a platform that prioritizes user privacy and genuine social interactions.",
      technologies: ["Flutter", "React", "NextJS", "Backend APIs"],
      role: "Product Manager & Technical Lead",
      company: "Enso Group",
      status: "In Development",
      highlights: [
        "Led product strategy and roadmap development",
        "Coordinated cross-functional teams of 8+ members",
        "Implemented user-centered design principles",
        "Delivered MVP with 95% user satisfaction rate"
      ]
    },
    {
      id: 2,
      title: "Bharat Khata",
      description: "Fullstack lending solution for retailers",
      longDescription: "Bharat Khata is a comprehensive lending solution designed specifically for retailers in India. The platform streamlines the lending process, making it easier for small businesses to access credit and manage their financial operations efficiently.",
      technologies: ["Flutter", "Mobile Development", "Backend Integration"],
      role: "Lead Developer",
      company: "Jai Kisan",
      status: "Completed",
      highlights: [
        "Developed end-to-end mobile application",
        "Integrated with multiple payment gateways",
        "Served 10,000+ active retailers",
        "Reduced loan processing time by 60%"
      ]
    },
    {
      id: 3,
      title: "Mobile Solutions Portfolio",
      description: "Various mobile applications and solutions",
      longDescription: "During my tenure at Jai Kisan, I led the development of multiple mobile applications and solutions that served different aspects of the agricultural and financial technology sectors. These projects involved complex integrations and user-friendly interfaces.",
      technologies: ["Flutter", "React Native", "API Integration", "UI/UX Design"],
      role: "Lead Developer",
      company: "Jai Kisan",
      status: "Completed",
      highlights: [
        "Led development team of 5+ developers",
        "Delivered 8+ mobile applications",
        "Maintained 99.5% uptime across all apps",
        "Implemented agile development practices"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-green-50">
      <ScrollAnimations />
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animate-delay-200">
            A showcase of products I've built and delivered, demonstrating my ability to 
            lead technical teams and create impactful solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-on-scroll hover-lift" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center text-white font-bold text-xl hover-scale animate-float">
                        {project.title.charAt(0)}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
                        <p className="text-green-700 font-medium">{project.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="font-semibold text-gray-700">Role: </span>
                        <span className="text-gray-600">{project.role}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Company: </span>
                        <span className="text-gray-600">{project.company}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Status: </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.longDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-sm hover-scale"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Key Achievements</h3>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-green-700 rounded-2xl p-8 text-white animate-on-scroll hover-lift animate-glow">
            <h2 className="text-2xl font-bold mb-4 animate-fade-in">Interested in Working Together?</h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto animate-fade-in animate-delay-200">
              I'm always excited to take on new challenges and build products that make a difference. 
              Let's discuss how we can create something amazing together.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors hover-scale animate-fade-in animate-delay-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}