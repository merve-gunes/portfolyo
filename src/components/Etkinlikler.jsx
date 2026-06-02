import etkinlik1 from '../assets/etkinlik1.jpg';
import etkinlik2 from '../assets/etkinlik2.jpg';
import etkinlik3 from '../assets/etkinlik3.jpg';
import etkinlik4 from '../assets/etkinlik4.jpg';
import './Etkinlikler.css';

const events = [
  {
    id: 1,
    title: 'Ankara Build Club - Fikirden Validasyona Workshop',
    date: '8 Mart 2026',
    tag: 'Workshop',
    description: 'Yapay zeka araçlarını kullanarak fikir doğrulama ve hızlı prototipleme süreçlerini deneyimlediğim vizyoner bir atölye çalışması.',
    image: etkinlik1,
    gridClass: 'bento-large',
    delayClass: 'reveal-delay-1',
  },
  {
    id: 2,
    title: 'Teknoloji Zirvesi & Panel',
    date: '12 Şubat 2026',
    tag: 'Panel',
    description: 'Sektör profesyonellerinden modern web mimarileri, bulut teknolojileri ve yapay zeka entegrasyonları üzerine dinlediğim ilham verici sunumlar serisi.',
    image: etkinlik2,
    gridClass: 'bento-tall',
    delayClass: 'reveal-delay-2',
  },
  {
    id: 3,
    title: 'Global Game Jam',
    date: '25 Ocak 2026',
    tag: 'Hackathon',
    description: '48 saatlik kesintisiz oyun geliştirme maratonunda yer alarak takım halinde çalışma ve hızlı prototipleme deneyimi kazandım.',
    image: etkinlik3,
    gridClass: 'bento-small-1',
    delayClass: 'reveal-delay-3',
  },
  {
    id: 4,
    title: 'Yazılım Mühendisliği Buluşmaları',
    date: '18 Aralık 2025',
    tag: 'Meetup',
    description: 'Sektör liderleri ve öğrencilerle buluşarak teknolojik gelişmeler üzerine fikir alışverişinde bulunduğumuz interaktif etkinlik.',
    image: etkinlik4,
    gridClass: 'bento-small-2',
    delayClass: 'reveal-delay-4',
  },
];

function Etkinlikler() {
  return (
    <section className="etkinlikler" id="etkinlikler">
      <h2 className="reveal">Etkinlikler</h2>
      <div className="bento-grid">
        {events.map((event) => (
          <div className={`bento-card glass-panel reveal ${event.gridClass} ${event.delayClass}`} key={event.id}>
            <div className="bento-image-container">
              <img src={event.image} alt={event.title} className="bento-image" />
              <div className="bento-image-overlay"></div>
              <span className="bento-tag-badge">{event.tag}</span>
            </div>
            <div className="bento-content">
              <span className="bento-date">{event.date}</span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Etkinlikler;
