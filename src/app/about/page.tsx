export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-green-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate Product Manager and Software Engineer with 7+ years of experience 
            in building thoughtful, user-centered products.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">My Journey</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                I'm Khurram Rizvi, an Indian software engineer turned Product Manager with over 
                seven years of experience in the tech industry. My journey has been focused on 
                creating thoughtful, intuitive interfaces and delivering products that make a real impact.
              </p>
              <p>
                I specialize in software development for mobile and web-based applications with a 
                strong focus on reliability and simplicity. Recently promoted to Product Manager, 
                I now combine my technical expertise with product strategy and user-centered design.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Current Focus</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Currently working at <strong>Enso Group</strong> as a Product Manager, where I'm 
                developing some of the world's best software products such as InfoProfile - 
                a new generation social media platform.
              </p>
              <p>
                My role involves bridging the gap between technical implementation and business 
                strategy, ensuring that we build products that not only work well but also 
                solve real user problems effectively.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Professional Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-green-700 pl-6">
              <h3 className="text-xl font-semibold text-gray-900">Product Manager</h3>
              <p className="text-green-700 font-medium">Enso Group • Present</p>
              <p className="text-gray-600 mt-2">
                Leading product development for InfoProfile and other innovative software solutions. 
                Focus on product strategy, user experience, and cross-functional team coordination.
              </p>
            </div>
            
            <div className="border-l-4 border-gray-300 pl-6">
              <h3 className="text-xl font-semibold text-gray-900">Software Engineer</h3>
              <p className="text-gray-600 font-medium">Enso Group • Previous Role</p>
              <p className="text-gray-600 mt-2">
                Developed mobile and web applications using Flutter, React, and NextJS. 
                Contributed to building scalable, user-friendly software solutions.
              </p>
            </div>
            
            <div className="border-l-4 border-gray-300 pl-6">
              <h3 className="text-xl font-semibold text-gray-900">Lead Developer</h3>
              <p className="text-gray-600 font-medium">Jai Kisan • Previous</p>
              <p className="text-gray-600 mt-2">
                Led the development of mobile apps and various mobile solutions. 
                Managed technical teams and delivered multiple successful projects.
              </p>
            </div>
          </div>
        </div>

        {/* Skills & Technologies */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-lg">Flutter</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-lg">React</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-lg">NextJS</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-lg">Mobile Development</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-lg">Web Development</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-lg">Backend Development</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Skills</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-red-100 text-red-800 px-4 py-2 rounded-lg">Product Strategy</span>
                <span className="bg-red-100 text-red-800 px-4 py-2 rounded-lg">User Experience</span>
                <span className="bg-red-100 text-red-800 px-4 py-2 rounded-lg">Project Delivery</span>
                <span className="bg-red-100 text-red-800 px-4 py-2 rounded-lg">Team Leadership</span>
                <span className="bg-red-100 text-red-800 px-4 py-2 rounded-lg">Cross-functional Collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}