import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Education from './components/Education';
import Contact from './components/Contact';
import LiquidEther from './components/LiquidEther/LiquidEther';
import MinimalistMarquee from './components/MinimalistMarquee/MinimalistMarquee';
import './App.css';

function AppContent() {
  const location = useLocation();

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
  }, [location.pathname]); // Re-run when path changes

  return (
    <div className="app-container">
      {/* <LiquidEther colors={['#F5EEE6', '#FFF8E3', '#F3D7CA', '#E6A4B4']} /> */}

      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Gallery />
              <Education />
              <Contact />
            </>
          } />
          <Route path="/hakkinda" element={<About />} />
          <Route path="/yetenekler" element={<Skills />} />
          <Route path="/projeler" element={<Projects />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/egitim" element={<Education />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
      </main>

      <MinimalistMarquee />

      <footer className="footer">
        <p>&copy; 2026 Merve Safa Güneş.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;