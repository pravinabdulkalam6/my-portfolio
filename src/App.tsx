import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { useTilt } from './hooks/useTilt';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  // Wire scroll reveals and card tilt only once the main content is mounted
  // (i.e. after the loader has finished).
  useScrollAnimation(!showLoader);
  useTilt(!showLoader);

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
      <ScrollProgress />
      <div className={`app-shell min-h-screen text-white dark:text-black transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Header />
        <main className="relative">
          <Hero />
          <About />
          <Stats />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
