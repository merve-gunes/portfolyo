import heroArt from '../assets/hero_workspace.png';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content reveal">
        <div className="hero-text">
          <span className="hero-badge">Yazılım Mühendisliği Öğrencisi</span>
          <h1>
            Merhaba, ben <br />
            <span className="gradient-text">Merve Safa Güneş</span>
          </h1>
          <p>
            Ostim Teknik Üniversitesi 2. sınıf öğrencisiyim. Web geliştirme ve modern yazılım mühendisliği pratikleri üzerine kendimi geliştiriyorum. Soft ve premium tasarımlarla, işlevsel ve estetik kullanıcı deneyimleri inşa etmeye odaklanıyorum.
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
          <div className="hero-image-wrapper">
            <img src={heroArt} alt="Cozy Workspace Illustration" className="hero-art-img" />
            <div className="hero-glow-blob"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;