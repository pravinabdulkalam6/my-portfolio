import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  const brandTitleClass = isScrolled
    ? 'text-white dark:text-black'
    : 'text-white dark:text-black';

  const brandSubtitleClass = isScrolled
    ? 'text-slate-200 dark:text-slate-700'
    : 'text-slate-300 dark:text-slate-700';

  const navTextClass = isScrolled
    ? 'text-white dark:text-black'
    : 'text-slate-200 dark:text-black';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-950/78 dark:bg-white/97 backdrop-blur-2xl border-b border-cyan-300/20 dark:border-blue-300/55 shadow-[0_10px_30px_rgba(5,12,28,0.35)] dark:shadow-[0_10px_30px_rgba(40,96,170,0.16)]' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo Section */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-3 group transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <Logo className="h-11 sm:h-12 md:h-14 w-auto transition-all duration-300 group-hover:drop-shadow-2xl group-hover:scale-105 relative z-10" />
                <div className="absolute inset-0 bg-blue-500/25 dark:bg-blue-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
              <div className="hidden sm:block text-left">
                <h1 className={`text-lg md:text-xl font-bold leading-tight group-hover:text-cyan-300 dark:group-hover:text-gray-700 transition-colors duration-300 ${brandTitleClass}`}>
                  Pravin Abdul Kalam M
                </h1>
                <div className="flex items-center gap-2">
                  <p className={`text-[10px] md:text-xs leading-tight max-w-[15rem] md:max-w-none font-semibold group-hover:text-cyan-200 dark:group-hover:text-slate-600 transition-colors duration-300 ${brandSubtitleClass}`}>
                    SRE · DevOps &amp; GitOps · Full-Stack · Security &amp; SOC
                  </p>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" title="Available for opportunities"></div>
                </div>
              </div>
            </button>
          </div>

          {/* Desktop Navigation with Theme Toggle */}
          <div className="hidden md:flex items-center gap-6">
            <ul className={`flex space-x-2 p-2 rounded-full border shadow-inner ${
              isScrolled
                ? 'bg-slate-900/60 dark:bg-white/95 border-slate-700/45 dark:border-blue-200'
                : 'bg-slate-900/55 dark:bg-white/85 border-slate-700/45 dark:border-blue-200'
            }`}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-1.5 rounded-full hover:text-cyan-300 dark:hover:text-black hover:bg-cyan-400/10 dark:hover:bg-blue-100 transition-colors duration-300 relative group text-sm font-semibold ${navTextClass}`}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 dark:bg-gray-600 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-white dark:text-black' : 'text-white dark:text-black'} hover:text-cyan-300 dark:hover:text-slate-700 transition-colors`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <ul className="pt-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`block hover:text-cyan-300 dark:hover:text-slate-800 transition-colors duration-300 w-full text-left py-1 font-semibold ${navTextClass}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
