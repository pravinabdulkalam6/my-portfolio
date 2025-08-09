import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, MapPin, Mail, Phone, Sparkles, Code, Database } from 'lucide-react';
import ProfileImage from './ProfileImage';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Site Reliability and Data Engineering Professional';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-blue-900/20 to-purple-900/20 dark:from-white dark:via-blue-50/50 dark:to-purple-50/50">
      {/* Enhanced Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-blue-400/20 parallax-element">
          <Code size={32} />
        </div>
        <div className="absolute top-40 right-20 text-teal-400/20 parallax-element" style={{ animationDelay: '2s' }}>
          <Database size={28} />
        </div>
        <div className="absolute bottom-40 left-20 text-purple-400/20 parallax-element" style={{ animationDelay: '4s' }}>
          <Sparkles size={24} />
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in-up">
            <div className="mb-8">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-blue-500/10 dark:bg-gray-800/50 border border-blue-500/20 dark:border-gray-600 rounded-full text-blue-400 dark:text-gray-800 text-sm font-medium mb-4 animate-scale-in">
                  Welcome to my portfolio
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-shadow-lg text-white dark:text-black">
                Hi, I'm{' '}
                <span className="text-sky-500 dark:text-gray-900 font-extrabold tracking-tight drop-shadow-lg">
                  Pravin Abdul Kalam M
                </span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-gray-300 dark:text-gray-600 mb-6 min-h-[2rem]">
                <span className="typing-animation">{typedText}</span>
              </h2>
              
              <p className="text-lg text-gray-400 dark:text-gray-600 max-w-2xl leading-relaxed space-y-2">
                Passionate about designing <span className="text-blue-400 dark:text-gray-700 font-semibold">scalable infrastructure</span>, 
                automating deployment workflows, and implementing <span className="text-teal-400 dark:text-gray-700 font-semibold">real-time monitoring systems</span>{' '}using cutting-edge technologies.
              </p>
            </div>

            {/* Enhanced Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 text-sm">
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 dark:bg-white/70 rounded-lg border border-gray-700/50 dark:border-gray-300/50 hover:border-blue-500/50 dark:hover:border-gray-600/50 transition-all duration-300">
                <MapPin size={16} className="text-blue-400 dark:text-gray-700 flex-shrink-0" />
                <span className="text-gray-300 dark:text-gray-700 whitespace-nowrap">Chennai, India</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 dark:bg-white/70 rounded-lg border border-gray-700/50 dark:border-gray-300/50 hover:border-blue-500/50 dark:hover:border-gray-600/50 transition-all duration-300">
                <Mail size={16} className="text-teal-400 dark:text-gray-700 flex-shrink-0" />
                <span className="text-gray-300 dark:text-gray-700 text-xs sm:text-sm">pravinabdulkalam6@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 dark:bg-white/70 rounded-lg border border-gray-700/50 dark:border-gray-300/50 hover:border-blue-500/50 dark:hover:border-gray-600/50 transition-all duration-300">
                <Phone size={16} className="text-purple-400 dark:text-gray-700 flex-shrink-0" />
                <span className="text-gray-300 dark:text-gray-700 whitespace-nowrap">+91 7904493896</span>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6">
              <button 
                onClick={scrollToContact}
                className="magnetic-button px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-glow flex items-center gap-3 justify-center group"
              >
                <Sparkles size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                Get In Touch
              </button>
              <a
                href="/resume/Resume.pdf"
                download="Pravin_Abdul_Kalam_M_Resume.pdf"
                className="magnetic-button px-8 py-4 bg-gray-800/80 dark:bg-gray-200/80 border border-gray-600 dark:border-gray-500 text-gray-200 dark:text-gray-800 rounded-lg font-medium hover:bg-gray-700 dark:hover:bg-gray-300 hover:border-blue-400 dark:hover:border-gray-700 hover:text-blue-400 dark:hover:text-gray-900 transition-all duration-300 flex items-center gap-3 justify-center group shadow-lg"
              >
                <Download size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
                Download CV
              </a>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8 mt-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 dark:text-gray-800">2+</div>
                <div className="text-xs text-gray-500 dark:text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-400 dark:text-gray-800">50+</div>
                <div className="text-xs text-gray-500 dark:text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 dark:text-gray-800">10+</div>
                <div className="text-xs text-gray-500 dark:text-gray-600">Technologies</div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Profile Image */}
          <div className="lg:w-1/2 flex justify-center animate-fade-in-up delay-300">
            <div className="relative group">
              {/* Main Profile Container */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/10 to-teal-500/10 flex items-center justify-center backdrop-blur-sm border border-blue-500/20 shadow-glow group-hover:shadow-glow-teal transition-all duration-500">
                {/* Profile Image */}
                <ProfileImage 
                  src="/images/profile.jpeg"
                  alt="Pravin Abdul Kalam M - Site Reliability and Data Engineering Professional"
                  fallbackText="PAK"
                />
              </div>

              {/* Enhanced Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-full animate-bounce delay-500 shadow-glow"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-teal-500/20 rounded-full animate-bounce delay-700 shadow-glow-teal"></div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-purple-500/20 rounded-full animate-bounce delay-1000 shadow-glow-purple"></div>

              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute -top-4 left-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-glow"></div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
                <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-teal-400 rounded-full shadow-glow-teal"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-full hover:bg-blue-500/10 group"
          >
            <ChevronDown size={32} className="group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;