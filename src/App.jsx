import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    const revealCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // Stop observing once revealed
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
      root: null, // viewport
      threshold: 0.15, // trigger when 15% visible
      rootMargin: '0px 0px -50px 0px', // slightly offset for better feel
    });

    const elementsToReveal = document.querySelectorAll('.reveal');
    elementsToReveal.forEach((el) => revealObserver.observe(el));

    return () => {
      elementsToReveal.forEach((el) => revealObserver.unobserve(el));
    };
  }, []);

  return (
    <div className="app-container">
      {/* Soft pastel ambient background blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Merve Safa Güneş. Sevgiyle Tasarlandı.</p>
      </footer>
    </div>
  );
}

export default App;