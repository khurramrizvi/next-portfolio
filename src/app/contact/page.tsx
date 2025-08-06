import ScrollAnimations from '@/components/ScrollAnimations';
import type { Metadata } from 'next';
import { FiMail } from 'react-icons/fi';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Khurram Rizvi for product management opportunities, technical leadership roles, and innovative project collaborations. Available for consulting and speaking engagements.",
  keywords: [
    "Contact Khurram Rizvi",
    "Product Manager Contact",
    "Technical Leadership",
    "Project Collaboration",
    "Consulting Services",
    "Speaking Engagements",
    "Mobile App Consulting",
    "Web Development Consulting",
    "Product Strategy",
    "Tech Leadership"
  ],
  openGraph: {
    title: "Contact | Khurram Rizvi Portfolio",
    description: "Get in touch with Khurram Rizvi for product management opportunities, technical leadership roles, and innovative project collaborations. Available for consulting and speaking engagements.",
    url: "https://khurramrizvipm.netlify.app/contact",
    images: [
      {
        url: "https://khurramrizvipm.netlify.app/og-contact.png",
        width: 1200,
        height: 630,
        alt: "Contact Khurram Rizvi - Product Manager & Technical Leader",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Khurram Rizvi Portfolio",
    description: "Get in touch for product management opportunities, technical leadership roles, and innovative project collaborations.",
    images: ["https://khurramrizvipm.netlify.app/og-contact.png"],
  },
  alternates: {
    canonical: "https://khurramrizvipm.netlify.app/contact",
  },
};

export default function Contact() {


const socialLinks = [
  {
    name: "Email",
    href: "mailto:khurram@example.com",
    icon: <FiMail className="w-8 h-8" />,
    description: "Drop me a line"
  },
  {
    name: "Twitter",
    href: "https://twitter.com/khurramrizvi",
    icon: <FaTwitter className="w-8 h-8" />,
    description: "Follow me on Twitter"
  },
  {
    name: "GitHub",
    href: "https://github.com/khurramrizvi",
    icon: <FaGithub className="w-8 h-8" />,
    description: "Check out my code"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/khurramrizvi",
    icon: <FaLinkedin className="w-8 h-8" />,
    description: "Connect professionally"
  }
];

  return (
    <div className="min-h-screen bg-background hero-grid">
      <ScrollAnimations />
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-normal text-primary mb-6">
            Contact
          </h1>
          <p className="text-xl text-secondary max-w-3xl">
            I'm always interested in discussing new opportunities, innovative projects, 
            and ways to create impactful products together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 grid-overlay">
          <div className="border border-geist-4 rounded p-8">
            <h2 className="text-2xl font-normal text-primary mb-6">Get In Touch</h2>
            <div className="space-y-4 text-secondary">
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

          <div className="border border-geist-4 rounded p-8">
            <h2 className="text-2xl font-normal text-primary mb-6">Current Status</h2>
            <div className="space-y-4 text-secondary">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-geist-6 rounded-full"></div>
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
        <div className="border border-geist-4 rounded p-8 mb-16 large-grid">
          <h2 className="text-2xl font-normal text-primary mb-8">Find Me Online</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-geist-4 rounded p-6 text-center hover:border-geist-5 transition-colors"
              >
                <div className="text-3xl mb-3 flex justify-center text-primary">{link.icon}</div>
                <h3 className="font-medium text-primary mb-2 group-hover:text-secondary transition-colors">
                  {link.name}
                </h3>
                <p className="text-sm text-secondary">{link.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="border border-geist-4 rounded p-8 grid-overlay">
          <h2 className="text-2xl font-normal text-primary mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-geist-4 rounded focus:ring-2 focus:ring-geist-6 focus:border-transparent bg-background text-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-geist-4 rounded focus:ring-2 focus:ring-geist-6 focus:border-transparent bg-background text-primary"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-geist-4 rounded focus:ring-2 focus:ring-geist-6 focus:border-transparent bg-background text-primary"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 border border-geist-4 rounded focus:ring-2 focus:ring-geist-6 focus:border-transparent bg-background text-primary"
                placeholder="Tell me about your project or opportunity..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-geist-10 text-background py-3 px-6 rounded font-medium hover:bg-geist-8 transition-colors"
            >
              Send Message
            </button>
          </form>
          <p className="text-sm text-geist-7 mt-4 text-center">
            Note: This is a demo form. Please use the email or social links above to contact me directly.
          </p>
        </div>
      </div>
    </div>
  );
}