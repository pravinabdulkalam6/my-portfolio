import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, MapPin, Mail, Phone, Sparkles, Code, Database } from 'lucide-react';
import ProfileImage from './ProfileImage';

const roles = [
  'Site Reliability Engineer',
  'Full-Stack & Data Engineer',
  'DevOps, GitOps & Observability',
  'Automation Test Engineer · Appium & Playwright',
  'Security & SOC Analyst',
];

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const topHighlights = [
    'End-to-end Wazuh SOC — YARA, FIM, auditd & Osquery',
    'GitOps delivery with Argo CD on Kubernetes',
    'Cross-platform automation: Appium & Playwright',
    'Predictive ETL for capacity planning (ARIMA/SARIMAX)'
  ];

  // Looping typewriter that cycles through the roles above.
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && typedText === current) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && typedText === '') {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setTypedText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      }, deleting ? 35 : 75);
    }

    return () => clearTimeout(timeout);
  }, [typedText, deleting, roleIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/70 dark:from-[#f7fbff] dark:via-[#eef7ff] dark:to-[#dcecff]">
      {/* Enhanced Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 dark:bg-blue-400/18 rounded-full blur-3xl animate-aurora"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/8 dark:bg-cyan-300/20 rounded-full blur-3xl animate-aurora" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/8 dark:bg-indigo-300/18 rounded-full blur-3xl animate-aurora" style={{ animationDelay: '8s' }}></div>
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

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in-up">
            <div className="mb-8">
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-cyan-400/10 dark:bg-white/70 border border-cyan-400/30 dark:border-blue-200 rounded-full text-cyan-300 dark:text-blue-700 text-xs sm:text-sm leading-tight font-medium mb-4 animate-scale-in shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Available for opportunities · Chennai, India
                </span>
              </div>
              
              <h1 className="mb-4 leading-tight">
                <span className="block text-3xl md:text-4xl font-semibold text-slate-200 dark:text-slate-700 tracking-tight">
                  Hi, I&apos;m
                </span>
                <span className="block text-4xl md:text-6xl font-extrabold tracking-tight gradient-text drop-shadow-[0_6px_24px_rgba(26,122,248,0.28)]">
                  Pravin Abdul Kalam M
                </span>
              </h1>
              
              <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 dark:text-slate-700 mb-6 min-h-[4rem] sm:min-h-[3rem] md:min-h-[2rem]">
                <span className="typing-animation break-words">{typedText}</span>
              </h2>
              
              <p className="text-lg text-gray-400 dark:text-slate-700 max-w-2xl leading-relaxed space-y-2">
                I build and operate <span className="text-blue-400 dark:text-blue-700 font-semibold">reliable, scalable platforms</span> — from{' '}
                <span className="text-teal-400 dark:text-cyan-700 font-semibold">GitOps delivery</span> and real-time observability to{' '}
                <span className="text-purple-400 dark:text-indigo-700 font-semibold">full-stack apps, data pipelines</span> and{' '}
                <span className="text-cyan-300 dark:text-blue-700 font-semibold">SOC security engineering</span>.
              </p>
            </div>

            {/* Enhanced Contact Info */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 text-sm w-full">
              <div className="flex items-center gap-3 px-4 py-3 bg-slate-900/55 dark:bg-white/85 rounded-xl border border-slate-700/60 dark:border-blue-200 hover:border-cyan-300/60 dark:hover:border-blue-400/60 transition-all duration-300 shadow-sm w-full sm:w-auto justify-center sm:justify-start">
                <MapPin size={16} className="text-blue-400 dark:text-blue-700 flex-shrink-0" />
                <span className="text-gray-300 dark:text-slate-700 whitespace-nowrap">Chennai, India</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-slate-900/55 dark:bg-white/85 rounded-xl border border-slate-700/60 dark:border-blue-200 hover:border-cyan-300/60 dark:hover:border-blue-400/60 transition-all duration-300 shadow-sm w-full sm:w-auto justify-center sm:justify-start">
                <Mail size={16} className="text-teal-400 dark:text-cyan-700 flex-shrink-0" />
                <span className="text-gray-300 dark:text-slate-700 text-xs sm:text-sm break-all">pravinabdulkalam6@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-slate-900/55 dark:bg-white/85 rounded-xl border border-slate-700/60 dark:border-blue-200 hover:border-cyan-300/60 dark:hover:border-blue-400/60 transition-all duration-300 shadow-sm w-full sm:w-auto justify-center sm:justify-start">
                <Phone size={16} className="text-purple-400 dark:text-indigo-700 flex-shrink-0" />
                <span className="text-gray-300 dark:text-slate-700 whitespace-nowrap">+91 7904493896</span>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6">
              <button 
                onClick={scrollToContact}
                className="magnetic-button px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg flex items-center gap-3 justify-center group"
              >
                <Sparkles size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                Get In Touch
              </button>
              <a
                href="/resume/Resume.pdf"
                download="Pravin_Abdul_Kalam_M_Resume.pdf"
                className="magnetic-button px-8 py-4 bg-slate-900/70 dark:bg-gray-200/80 border border-slate-600/70 dark:border-gray-500 text-gray-200 dark:text-gray-800 rounded-xl font-semibold hover:bg-slate-800/80 dark:hover:bg-gray-300 hover:border-cyan-300 dark:hover:border-gray-700 hover:text-cyan-300 dark:hover:text-gray-900 transition-all duration-300 flex items-center gap-3 justify-center group shadow-lg"
              >
                <Download size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
                Download CV
              </a>
            </div>

            {/* Top Highlights */}
            <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <p className="text-sm font-semibold tracking-wide uppercase text-cyan-300 dark:text-blue-700 mb-3">
                Top Highlights
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {topHighlights.map((item, index) => (
                  <div
                    key={index}
                    data-tilt
                    className="px-4 py-3 rounded-xl bg-slate-900/55 dark:bg-white/85 border border-slate-700/60 dark:border-blue-200 text-xs sm:text-sm text-slate-200 dark:text-slate-700 font-medium leading-relaxed hover:border-cyan-300/60 dark:hover:border-blue-400/60 transition-colors duration-300"
                  >
                    {item}
                  </div>
                ))}
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
                  alt="Pravin Abdul Kalam M - SRE, Full-Stack & Data Engineer, Security & SOC Analyst"
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
