import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      {/* CSS-based floating particles */}
      <div className="hero-particles" aria-hidden="true">
        <div className="particle p-1"></div>
        <div className="particle p-2"></div>
        <div className="particle p-3"></div>
        <div className="particle p-4"></div>
        <div className="particle p-5"></div>
      </div>

      <div className="hero-content reveal">
        <div className="hero-text">
          {/* Subtle slow-pulsing glowing sun behind heading */}
          <div className="hero-sun-glow-background" aria-hidden="true"></div>
          
          <h1 className="hero-title">
            Merve Safa Güneş
          </h1>
          <p>
            React ile ölçeklenebilir web deneyimleri ve AI destekli modern mimariler üreten 2. sınıf tasarım odaklı geliştirici.
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
      </div>
    </section>
  );
}

export default Hero;