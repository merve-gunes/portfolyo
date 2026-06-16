import AnkaraBuildClubImg from '../assets/etkinlik1.jpg';
import FloraBoutiqueImg from '../assets/flora.png';
import SunLogoImg from '../assets/logo.png';
import WeatherAppImg from '../assets/weather.png';
import HsdBannerImg from '../assets/gallery_hsd_banner.jpg';
import HsdHackathonImg from '../assets/gallery_hsd_hackathon.jpg';
import GdgSummitImg from '../assets/gallery_gdg_summit.jpg';
import CursorHackathonImg from '../assets/gallery_cursor_hackathon.jpg';
import SheBuildsImg from '../assets/gallery_shebuilds_event.jpg';
import './Gallery.css';

const galleryItems = [

  {
    id: 2,
    title: 'Huawei Student Developers - OSTİMTECH',
    category: 'Topluluk • Temsilcilik',
    subtitle: 'OSTİM Teknik Üniversitesi HSD tanıtım ve üyelik çalışmaları.',
    image: HsdBannerImg,
  },
  {
    id: 3,
    title: 'OSTİMTECH HSD Hackathon 2025',
    category: 'Hackathon • Geliştirme',
    subtitle: 'HSD Hackathon maratonunda ekip çalışmaları.',
    image: HsdHackathonImg,
  },
  {
    id: 4,
    title: "GDG Core 25' Teknoloji ve Girişimcilik Zirvesi",
    category: 'Etkinlik • Zirve',
    subtitle: 'Google Developer Groups zirvesinde ekip arkadaşlarımızla.',
    image: GdgSummitImg,
  },
  {
    id: 5,
    title: 'Cursor & Buildermare Hackathon',
    category: 'Hackathon • Ekip',
    subtitle: 'Yazılım geliştirme maratonunda selfie.',
    image: CursorHackathonImg,
  },
  {
    id: 6,
    title: "SheBuilds Ankara - International Women's Day",
    category: 'Etkinlik • Topluluk',
    subtitle: 'Dünya Kadınlar Günü Ankara buluşması ve yapay zeka workshop.',
    image: SheBuildsImg,
  },

];

function Gallery() {
  return (
    <section className="gallery" id="galeri">
      <div className="gallery-container reveal reveal-delay-1">
        <h2 className="section-title">Galeri</h2>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div className="gallery-item-card" key={item.id}>
              <div className="gallery-image-wrapper">
                <img src={item.image} alt={item.title} className="gallery-image" />
                <div className="gallery-overlay">
                  <span className="gallery-category-badge">{item.category}</span>
                  <h3>{item.title}</h3>
                  <span className="gallery-subtitle">{item.subtitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
