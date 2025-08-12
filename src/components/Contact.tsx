import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { submitContactForm, ContactFormData } from '../services/firebaseService';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const formData = new FormData(e.currentTarget);
      const data: ContactFormData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string
      };

      await submitContactForm(data);
      setSubmitStatus('success');
      // Reset form data state instead of using form.reset()
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
                    <AlertCircle className="w-5 h-5" />
                    <span>{errorMessage}</span>
                  </div>
                )}



                <div>
                  <label htmlFor="name" className="block text-gray-300 dark:text-gray-700 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
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
                    value={formData.email}
                    onChange={handleInputChange}
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
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 dark:bg-gray-200/50 border border-gray-600 dark:border-gray-400 rounded-lg text-white dark:text-black placeholder-gray-400 dark:placeholder-gray-600 focus:border-blue-400 dark:focus:border-gray-600 focus:ring-1 focus:ring-blue-400 dark:focus:ring-gray-600 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, collaboration ideas, or any questions you have..."
                    required
                    aria-describedby="message-error"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full magnetic-button px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-glow flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
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