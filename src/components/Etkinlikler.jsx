import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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
  },
  {
    id: 2,
    title: 'Teknoloji Zirvesi & Panel',
    date: '12 Şubat 2026',
    tag: 'Panel',
    description: 'Sektör profesyonellerinden modern web mimarileri, bulut teknolojileri ve yapay zeka entegrasyonları üzerine ilham verici sunumlar.',
    image: etkinlik2,
  },
  {
    id: 3,
    title: 'Global Game Jam',
    date: '25 Ocak 2026',
    tag: 'Hackathon',
    description: '48 saatlik kesintisiz oyun geliştirme maratonunda yer alarak takım halinde çalışma ve hızlı prototipleme deneyimi.',
    image: etkinlik3,
  },
  {
    id: 4,
    title: 'Yazılım Mühendisliği Buluşmaları',
    date: '18 Aralık 2025',
    tag: 'Meetup',
    description: 'Sektör liderleri ve öğrencilerle buluşarak teknolojik gelişmeler üzerine fikir alışverişinde bulunduğumuz interaktif etkinlik.',
    image: etkinlik4,
  },
];

function Etkinlikler() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startActiveIndex = useRef(0);

  // Responsive dimensions for 3D layout
  const [dimensions, setDimensions] = useState({
    radius: 280,
    cardWidth: 280,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setDimensions({ radius: 180, cardWidth: 200 });
      } else if (window.innerWidth < 768) {
        setDimensions({ radius: 220, cardWidth: 240 });
      } else {
        setDimensions({ radius: 280, cardWidth: 280 });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mouse Drag Events
  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startActiveIndex.current = activeIndex;
    document.body.style.userSelect = 'none'; // prevent text selection while dragging
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - startX.current;
    // 250px drag equals 1 full card shift
    const indexShift = deltaX / 250;
    setActiveIndex(startActiveIndex.current - indexShift);
  };

  const onMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    document.body.style.userSelect = '';
    // Snap to nearest card index
    setActiveIndex(Math.round(activeIndex));
  };

  // Touch Swipe Events (Mobile)
  const onTouchStart = (e) => {
    if (e.touches.length === 0) return;
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    startActiveIndex.current = activeIndex;
  };

  const onTouchMove = (e) => {
    if (!isDragging.current || e.touches.length === 0) return;
    const deltaX = e.touches[0].clientX - startX.current;
    const indexShift = deltaX / 200;
    setActiveIndex(startActiveIndex.current - indexShift);
  };

  const onTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setActiveIndex(Math.round(activeIndex));
  };

  // Clean mouse listeners on document level for safe mouse up outside canvas
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging.current) {
        onMouseUp();
      }
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => Math.round(prev) - 1);
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.round(prev) + 1);
  };

  const total = events.length;

  return (
    <section className="etkinlikler" id="etkinlikler">
      <h2 className="reveal">Etkinlikler</h2>
      <p className="etkinlikler-subtitle reveal reveal-delay-1">
        Fotoğraf kartlarını sağa sola sürükleyerek veya okları kullanarak dairesel galeride gezinebilirsin.
      </p>

      <div className="gallery-viewport reveal reveal-delay-2">
        <div 
          className="gallery-track-container"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {events.map((event, i) => {
            // Shortest circular difference mapping
            let diff = i - activeIndex;
            const half = total / 2;
            
            while (diff < -half) diff += total;
            while (diff > half) diff -= total;

            const theta = (diff * 2 * Math.PI) / total;
            
            // 3D positioning coordinates
            const x = Math.sin(theta) * dimensions.radius;
            const z = Math.cos(theta) * dimensions.radius - dimensions.radius;
            
            // 3D rotations & scaling
            const rotateY = diff * (360 / total);
            const isActive = Math.round(activeIndex) % total === i || (Math.round(activeIndex) % total + total) % total === i;
            
            const scale = isActive ? 1 : 0.85;
            const opacity = isActive ? 1 : 0.5;
            const zIndex = Math.round((Math.cos(theta) + 1) * 100);

            const cardStyle = {
              transform: `translateX(${x}px) translateZ(${z}px) rotateY(${rotateY}deg) scale(${scale})`,
              opacity,
              zIndex,
              width: `${dimensions.cardWidth}px`,
              pointerEvents: isDragging.current ? 'none' : 'auto',
            };

            return (
              <div 
                className={`gallery-card glass-panel ${isActive ? 'active' : ''}`}
                style={cardStyle}
                key={event.id}
              >
                <div className="gallery-card-image-wrapper">
                  <img src={event.image} alt={event.title} className="gallery-card-image" />
                  <span className="gallery-card-tag">{event.tag}</span>
                </div>
                <div className="gallery-card-details">
                  <span className="gallery-card-date">{event.date}</span>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Nav Actions */}
        <button className="gallery-nav-btn prev-btn" onClick={handlePrev} aria-label="Önceki Etkinlik">
          <FaChevronLeft />
        </button>
        <button className="gallery-nav-btn next-btn" onClick={handleNext} aria-label="Sonraki Etkinlik">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Etkinlikler;
