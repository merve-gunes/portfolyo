import './About.css';
import { FaCode, FaLightbulb, FaHeart } from 'react-icons/fa';

function About() {
  return (
    <section className="about" id="hakkimda">
      <h2 className="reveal">Hakkımda</h2>
      
      <div className="about-container reveal reveal-delay-1">
        <div className="about-glass-card glass-panel">
          <div className="about-intro">
            <h3>Öğrenme Yolculuğunda Bir Yazılım Mühendisi Adayı</h3>
            <p>
              Merhaba! Ben Merve Safa Güneş. OSTİM Teknik Üniversitesi Yazılım Mühendisliği 2. sınıf öğrencisiyim. Yolun başında olduğumun ve önümde öğrenecek koca bir dünya olduğunun farkındayım.
            </p>
            <p>
              Büyük iddialar yerine, her gün yeni bir şeyler keşfetmekten ve karşılaştığım hataları çözmekten keyif alan bir merakla hareket ediyorum. Akademik eğitimimi pratik web projeleriyle harmanlayarak kendimi geliştiriyorum.
            </p>
          </div>
          
          <div className="about-traits">
            <div className="trait-item">
              <span className="trait-icon"><FaLightbulb /></span>
              <div>
                <h4>Sürekli Merak & Keşif</h4>
                <p>React, JavaScript ve veritabanı dünyasını kurcalayarak temelimi her gün daha sağlam hale getiriyorum.</p>
              </div>
            </div>
            
            <div className="trait-item">
              <span className="trait-icon"><FaCode /></span>
              <div>
                <h4>Hata Çözme Azmi</h4>
                <p>Konsoldaki kırmızı hatalardan çekinmiyorum; araştırıp o problemi çözene kadar kodun başında durmayı seviyorum.</p>
              </div>
            </div>
            
            <div className="trait-item">
              <span className="trait-icon"><FaHeart /></span>
              <div>
                <h4>Estetik & Detaylar</h4>
                <p>Yazdığım kodun çıktısının göze hitap etmesi önemli. Minimalist ve soft tasarımlar geliştirmek en büyük motivasyonum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
