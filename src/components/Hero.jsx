import BlurText from './BlurText/BlurText';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content reveal">
        <div className="hero-text">
          <h1>
            Merhaba, ben <br />
            <BlurText
              text="Merve Safa Güneş"
              delay={50}
              animateBy="letters"
              direction="top"
              stepDuration={0.04}
              className="hero-name-animated"
            />
          </h1>
          <p>
            Ostim Teknik Üniversitesi 2. sınıf öğrencisiyim. Web geliştirme ve modern yazılım mühendisliği pratikleri üzerine kendimi geliştiriyorum.Özellikle React ekosistemiyle ölçeklenebilir web uygulamaları geliştirmeye ve AI destekli geliştirme araçlarıyla modern kod mimarileri inşa etmeye odaklanıyorum.
          </p>
          <div className="hero-actions">
            <a href="#projeler" className="btn-accent hero-btn">
              Projelerimi Gör
            </a>
            <a href="#iletisim" className="btn-secondary hero-btn">
              İletişime Geç
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-sun-container">
            <svg viewBox="0 0 400 400" className="abstract-sun-svg" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#E6A4B4" stopOpacity="0.25" />
                  <stop offset="60%" stopColor="#F3D7CA" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E6A4B4" />
                  <stop offset="50%" stopColor="#F3D7CA" />
                  <stop offset="100%" stopColor="#BA6B78" />
                </linearGradient>
              </defs>

              {/* Background soft glow */}
              <circle cx="200" cy="200" r="170" fill="url(#sunGlow)" />

              {/* Rotating outer rings & geometric markers */}
              <g className="sun-rotating-slow">
                {/* Thin dashed outer circles */}
                <circle cx="200" cy="200" r="145" fill="none" stroke="#BA6B78" strokeWidth="0.8" strokeDasharray="3, 10" opacity="0.35" />
                <circle cx="200" cy="200" r="130" fill="none" stroke="#BA6B78" strokeWidth="1.2" strokeDasharray="120, 15, 30, 15" opacity="0.5" />
                <circle cx="200" cy="200" r="95" fill="none" stroke="#BA6B78" strokeWidth="0.8" opacity="0.25" />

                {/* Minimalist axial crossing lines */}
                <line x1="200" y1="40" x2="200" y2="360" stroke="#8C8589" strokeWidth="0.5" opacity="0.25" />
                <line x1="40" y1="200" x2="360" y2="200" stroke="#8C8589" strokeWidth="0.5" opacity="0.25" />
                <line x1="85" y1="85" x2="315" y2="315" stroke="#8C8589" strokeWidth="0.5" opacity="0.15" strokeDasharray="2, 4" />
                <line x1="85" y1="315" x2="315" y2="85" stroke="#8C8589" strokeWidth="0.5" opacity="0.15" strokeDasharray="2, 4" />

                {/* Accent sun ray endpoints */}
                <circle cx="200" cy="80" r="2.5" fill="#BA6B78" />
                <circle cx="200" cy="320" r="2.5" fill="#BA6B78" />
                <circle cx="80" cy="200" r="2.5" fill="#BA6B78" />
                <circle cx="320" cy="200" r="2.5" fill="#BA6B78" />

                {/* Micro ticks around outer ring */}
                <path d="M 200,65 L 200,55 M 200,345 L 200,335 M 65,200 L 55,200 M 345,200 L 335,200" stroke="#BA6B78" strokeWidth="1" opacity="0.6" />
              </g>

              {/* Pulsing inner core */}
              <g className="sun-pulse">
                {/* Thin outline concentric ring */}
                <circle cx="200" cy="200" r="62" fill="none" stroke="#F3D7CA" strokeWidth="1.2" opacity="0.6" />

                {/* Main geometric sun disc */}
                <circle cx="200" cy="200" r="50" fill="url(#sunGrad)" opacity="0.85" />
                <circle cx="200" cy="200" r="50" fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.4" />
              </g>

              {/* Decorative orbit rings */}
              <circle cx="200" cy="200" r="160" fill="none" stroke="#8C8589" strokeWidth="0.5" opacity="0.15" />
              <circle cx="200" cy="200" r="175" fill="none" stroke="#BA6B78" strokeWidth="0.5" strokeDasharray="8, 20" opacity="0.25" />
            </svg>
            <div className="hero-glow-blob"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;