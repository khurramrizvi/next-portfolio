import ScrollAnimations from '@/components/ScrollAnimations';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Khurram Rizvi's portfolio of mobile and web development projects. From InfoProfile social media platform to Bharat Khata lending solution - showcasing Flutter, React, and NextJS expertise.",
  keywords: [
    "Khurram Rizvi Projects",
    "InfoProfile Social Media",
    "Bharat Khata",
    "Flutter Projects",
    "React Projects",
    "NextJS Portfolio",
    "Mobile App Development",
    "Product Manager Portfolio",
    "Enso Group Projects",
    "Jai Kisan Apps"
  ],
  openGraph: {
    title: "Projects | Khurram Rizvi Portfolio",
    description: "Explore my portfolio of mobile and web development projects. From InfoProfile social media platform to Bharat Khata lending solution - showcasing Flutter, React, and NextJS expertise.",
    url: "https://krizvi.netlify.app/projects",
    images: [
      {
        url: "/og-projects.svg",
        width: 1200,
        height: 630,
        alt: "Khurram Rizvi Projects Portfolio - Mobile & Web Development",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Khurram Rizvi Portfolio",
    description: "Explore my portfolio of mobile and web development projects showcasing Flutter, React, and NextJS expertise.",
    images: ["/og-projects.svg"],
  },
  alternates: {
    canonical: "https://krizvi.netlify.app/projects",
  },
};

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
    <div className="min-h-screen">
      <ScrollAnimations />
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-normal text-black mb-6">
            Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            A showcase of products I've built and delivered, demonstrating my ability to 
            lead technical teams and create impactful solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={project.id} className="border-t border-gray-200 pt-12 first:border-t-0 first:pt-0">
              <div>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="mb-4">
                      <h2 className="text-2xl font-normal text-black mb-2">{project.title}</h2>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="font-medium text-black">Role: </span>
                        <span className="text-gray-600">{project.role}</span>
                      </div>
                      <div>
                        <span className="font-medium text-black">Company: </span>
                        <span className="text-gray-600">{project.company}</span>
                      </div>
                      <div>
                        <span className="font-medium text-black">Status: </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          project.status === 'Completed' 
                            ? 'bg-gray-100 text-gray-700' 
                            : 'bg-gray-100 text-gray-600'
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
                    <h3 className="font-medium text-black mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-black mb-3">Key Achievements</h3>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
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
        <div className="mt-16 border-t border-gray-200 pt-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-normal text-black mb-4">Interested in Working Together?</h2>
            <p className="text-gray-600 mb-6">
              I'm always excited to take on new challenges and build products that make a difference. 
              Let's discuss how we can create something amazing together.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-800 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}