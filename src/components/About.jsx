import merveProfil from '../assets/merve-profil.jpg';
import './About.css';

function About() {
  return (
    <section className="about" id="hakkimda">
      <div className="about-container reveal reveal-delay-1">
        <div className="about-content-wrapper">
          <div className="about-intro">
            <h3>Öğrenme Yolculuğunda Bir Yazılım Mühendisi Adayı</h3>
            <p>
              Merhaba! Ben Merve Safa Güneş. OSTİM Teknik Üniversitesi Yazılım Mühendisliği 2. sınıf öğrencisiyim. Yolun başında olduğumun ve önümde öğrenecek koca bir dünya olduğunun farkındayım.
            </p>
            <p>
              Büyük iddialar yerine, her gün yeni bir şeyler keşfetmekten ve karşılaştığım hataları çözmekten keyif alan bir merakla hareket ediyorum. Akademik eğitimimi pratik web projeleriyle harmanlayarak kendimi geliştiriyorum.
            </p>
          </div>
          
          <div className="about-profile-wrapper">
            <img src={merveProfil} alt="Merve Safa Güneş" className="about-profile-photo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
