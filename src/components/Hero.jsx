import heroArt from '../assets/hero_workspace.png';
import BlurText from './BlurText/BlurText';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content reveal">
        <div className="hero-text">
          <span className="hero-badge">Yazılım Mühendisliği Öğrencisi</span>
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