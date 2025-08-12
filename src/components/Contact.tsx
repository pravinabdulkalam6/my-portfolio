import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "pravinabdulkalam6@gmail.com",
      href: "mailto:pravinabdulkalam6@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 7904493896",
      href: "tel:+917904493896"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Chennai, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pravin-abdul-kalam-m",
      color: "hover:text-blue-500"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub", 
      href: "https://github.com/pravinabdulkalam6",
      color: "hover:text-gray-400"
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Message from ${data.name} - Portfolio Contact`);
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
    const mailtoLink = `mailto:pravinabdulkalam6@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 bg-gray-900/70 dark:bg-gray-100/80">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white dark:text-black">
            Get In <span className="text-blue-400 dark:text-gray-800">Touch</span>
          </h2>
          <p className="text-gray-300 dark:text-gray-700 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-2xl font-bold text-white dark:text-black mb-6">Let's Connect</h3>
              <p className="text-gray-200 dark:text-gray-800 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, and ways to leverage technology for impactful solutions.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 glow-card rounded-lg transition-all duration-300 group"
                >
                  <div className="p-3 bg-gray-700/50 dark:bg-gray-300/50 rounded-lg text-blue-400 dark:text-gray-700 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-300 dark:text-gray-700 text-sm">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white dark:text-black hover:text-blue-400 dark:hover:text-gray-800 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white dark:text-black">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white dark:text-black mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 glow-card rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:transform hover:scale-110 magnetic-button`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <div className="glow-card rounded-lg p-8 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white dark:text-black mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-gray-300 dark:text-gray-700 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-700/50 dark:bg-gray-200/50 border border-gray-600 dark:border-gray-400 rounded-lg text-white dark:text-black placeholder-gray-400 dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-gray-600 focus:ring-1 focus:ring-blue-400 dark:focus:ring-gray-600 transition-all duration-300"
                    placeholder="Enter your full name"
                    required
                    aria-describedby="name-error"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 dark:text-gray-700 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-700/50 dark:bg-gray-200/50 border border-gray-600 dark:border-gray-400 rounded-lg text-white dark:text-black placeholder-gray-400 dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-gray-600 focus:ring-1 focus:ring-blue-400 dark:focus:ring-gray-600 transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                    aria-describedby="email-error"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 dark:text-gray-700 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700/50 dark:bg-gray-200/50 border border-gray-600 dark:border-gray-400 rounded-lg text-white dark:text-black placeholder-gray-400 dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-gray-600 focus:ring-1 focus:ring-blue-400 dark:focus:ring-gray-600 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, collaboration ideas, or any questions you have..."
                    required
                    aria-describedby="message-error"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full magnetic-button px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-glow flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;