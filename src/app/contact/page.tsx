import ScrollAnimations from '@/components/ScrollAnimations';

export default function Contact() {
  const socialLinks = [
    {
      name: "Email",
      href: "mailto:khurram@example.com",
      icon: "📧",
      description: "Drop me a line"
    },
    {
      name: "Twitter",
      href: "https://twitter.com/khurramrizvi",
      icon: "🐦",
      description: "Follow me on Twitter"
    },
    {
      name: "GitHub",
      href: "https://github.com/khurramrizvi",
      icon: "💻",
      description: "Check out my code"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/khurramrizvi",
      icon: "💼",
      description: "Connect professionally"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-green-50">
      <ScrollAnimations />
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animate-delay-200">
            I'm always interested in discussing new opportunities, innovative projects, 
            and ways to create impactful products together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg animate-on-scroll hover-lift">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Whether you're looking for a Product Manager who can bridge the gap between 
                technical implementation and business strategy, or a technical leader who 
                can deliver complex projects, I'd love to hear from you.
              </p>
              <p>
                I'm particularly interested in:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Product management opportunities</li>
                <li>Technical leadership roles</li>
                <li>Innovative product development projects</li>
                <li>Consulting on mobile and web applications</li>
                <li>Speaking at tech events and conferences</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg animate-on-scroll hover-lift animate-delay-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Status</h2>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Available for new opportunities</span>
              </div>
              <p>
                I'm currently working as a Product Manager at Enso Group, but I'm always 
                open to discussing exciting new challenges and opportunities that align 
                with my passion for building impactful products.
              </p>
              <p>
                <strong>Location:</strong> India (Open to remote work)
              </p>
              <p>
                <strong>Response Time:</strong> Usually within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16 animate-on-scroll hover-lift">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Find Me Online</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-50 rounded-xl p-6 text-center hover:bg-green-50 transition-colors hover-scale"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-3xl mb-3">{link.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                  {link.name}
                </h3>
                <p className="text-sm text-gray-600">{link.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 shadow-lg animate-on-scroll hover-lift">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Tell me about your project or opportunity..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-800 transition-colors hover-lift hover-glow"
            >
              Send Message
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Note: This is a demo form. Please use the email or social links above to contact me directly.
          </p>
        </div>
      </div>
    </div>
  );
}