import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 dark:bg-white/95 backdrop-blur-md border-b border-gray-800 dark:border-gray-200' 
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
                <img 
                  src="/images/logo.png" 
                  alt="Pravin Abdul Kalam M - Logo"
                  className="h-16 w-auto object-contain transition-all duration-300 group-hover:drop-shadow-2xl relative z-10"
                />
                <div className="absolute inset-0 bg-blue-500/20 dark:bg-gray-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
              <div className="hidden sm:block text-left">
                <h1 className="text-xl font-bold text-white dark:text-gray-900 leading-tight group-hover:text-blue-400 dark:group-hover:text-gray-700 transition-colors duration-300">
                  Pravin Abdul Kalam M
                </h1>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-gray-400 dark:text-gray-600 font-medium group-hover:text-gray-300 dark:group-hover:text-gray-500 transition-colors duration-300">
                    Site Reliability & Data Engineer
                  </p>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" title="Available for opportunities"></div>
                </div>
              </div>
            </button>
          </div>

          {/* Desktop Navigation with Theme Toggle */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 dark:text-gray-700 hover:text-blue-400 dark:hover:text-gray-800 transition-colors duration-300 relative group"
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
              className="text-white dark:text-gray-900 hover:text-blue-400 dark:hover:text-gray-700 transition-colors"
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
                  className="block text-gray-300 dark:text-gray-700 hover:text-blue-400 dark:hover:text-gray-800 transition-colors duration-300 w-full text-left"
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