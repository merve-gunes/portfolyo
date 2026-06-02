import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Etkinlikler from './components/Etkinlikler';
import Education from './components/Education';
import Contact from './components/Contact';
import LiquidEther from './components/LiquidEther/LiquidEther';
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
      <LiquidEther colors={['#FFDCDC', '#BDE0FE', '#FFC6FF', '#A0C4FF']} />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Etkinlikler />
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