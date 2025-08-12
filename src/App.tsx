import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  
  useScrollAnimation();

  useEffect(() => {
    // Pre-load critical resources
    const preloadImages = [
      '/images/logo.png',
      '/images/profile.jpeg'
    ];

    const imagePromises = preloadImages.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = resolve; // Still resolve even if image fails to load
        img.src = src;
      });
    });

    Promise.all(imagePromises).then(() => {
      setIsLoaded(true);
    });
  }, []);

  const handleLoadingComplete = () => {
    setShowLoader(false);
  };

  if (showLoader) {
    return <Loader onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <ThemeProvider>
      <div className={`min-h-screen bg-black dark:bg-white text-white dark:text-black transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Header />
        <main className="relative">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;