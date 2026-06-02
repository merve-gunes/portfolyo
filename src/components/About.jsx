import './About.css';
import { FaCode, FaLightbulb, FaHeart } from 'react-icons/fa';

function About() {
  return (
    <section className="about" id="hakkimda">
      <h2 className="reveal">Hakkımda</h2>
      
      <div className="about-container reveal reveal-delay-1">
        <div className="about-glass-card glass-panel">
          <div className="about-intro">
            <h3>Kullanıcı Odaklı Çözümler Üreten Bir Yazılım Geliştirici</h3>
            <p>
              Merhaba! Ben Merve Safa Güneş. Ostim Teknik Üniversitesi Yazılım Mühendisliği bölümü 2. sınıf öğrencisiyim. Teknolojinin, karmaşık problemleri zarif ve basit yollarla çözme gücüne inanıyorum.
            </p>
            <p>
              Web geliştirme dünyasına adım attığımdan beri modern arayüz tasarımları ve verimli arka uç mantıkları kurma konusunda kendimi sürekli geliştiriyorum. Şu an React.js, modern CSS/Vanilla JS ve veritabanı yönetim sistemleri üzerine yoğunlaşıyorum.
            </p>
          </div>
          
          <div className="about-traits">
            <div className="trait-item">
              <span className="trait-icon"><FaCode /></span>
              <div>
                <h4>Temiz Kod (Clean Code)</h4>
                <p>Okunabilir, sürdürülebilir ve modüler kod yazmaya özen gösteriyorum.</p>
              </div>
            </div>
            
            <div className="trait-item">
              <span className="trait-icon"><FaLightbulb /></span>
              <div>
                <h4>Problem Çözme</h4>
                <p>Analitik düşünme becerimle karşılaştığım zorlukları adımsal çözerim.</p>
              </div>
            </div>
            
            <div className="trait-item">
              <span className="trait-icon"><FaHeart /></span>
              <div>
                <h4>Aesthetik ve Detaylar</h4>
                <p>Kullanıcının gözünü yormayan, premium ve akıcı arayüzleri severim.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
