import { useState } from 'react';
import './Education.css';

const certificates = [
  {
    id: 1,
    title: 'Versiyon Kontrolleri: Git ve Github',
    org: 'BTK Akademi',
    date: 'Mart 2026',
    image: '/certificates/git.jpg',
  },
  {
    id: 2,
    title: 'CSS Essentials',
    org: 'Cisco Networking Academy',
    date: 'Ocak 2026',
    image: '/certificates/css.jpg',
  },
  {
    id: 3,
    title: 'Introduction to Cybersecurity',
    org: 'Cisco Networking Academy',
    date: 'Haziran 2025',
    image: '/certificates/cybersecurity.jpg',
  },
  {
    id: 4,
    title: 'Frontend Eğitimi',
    org: 'OSTIMTECH Business Administration',
    date: 'Kasım 2025',
    image: '/certificates/frontend.jpg',
  },
];

function Education() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="education" id="egitim">
      <div className="education-container reveal reveal-delay-1">
        <h2 className="section-title">Eğitim & Deneyim</h2>

        <div className="education-experience-grid">
          <div className="grid-column">
            <h3 className="column-title">Eğitim</h3>
            <div className="timeline-item">
              <span className="timeline-year">2024 — Devam Ediyor</span>
              <h4 className="timeline-school">OSTİM Teknik Üniversitesi</h4>
              <span className="timeline-dept">Yazılım Mühendisliği</span>
              <p className="timeline-desc">
                Yazılım mühendisliğinin temelleri, algoritma analizi, nesne yönelimli programlama, veritabanı yönetimi ve web teknolojileri üzerine akademik eğitim alıyorum. Teorik bilgiyi pratik projelerle pekiştiriyorum.
              </p>
            </div>
          </div>

          <div className="grid-column">
            <h3 className="column-title">Deneyim</h3>
            <div className="timeline-item">
              <span className="timeline-year">2026 — Devam Ediyor</span>
              <h4 className="timeline-school">Yazılım Mühendisi Stajyeri</h4>
              <span className="timeline-dept">Omedya A.Ş. | Dijital Ajans </span>
              <p className="timeline-desc">
                İş yeri stajı kapsamında firmanın aktif projelerinde modern web teknolojileri ve yazılım mühendisliği pratikleri üzerine deneyim kazanıyorum.
              </p>
            </div>
          </div>
        </div>

        <div className="education-divider"></div>

        <h3 className="certificates-heading">Kurslar & Sertifikalar</h3>

        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div className="certificate-item" key={cert.id}>
              <div className="certificate-info">
                <span className="certificate-title">{cert.title}</span>
                <div className="certificate-meta">
                  <span>{cert.org}</span>
                  <span>{cert.date}</span>
                </div>
              </div>
              <button 
                type="button" 
                className="certificate-trigger" 
                onClick={() => setSelectedCert(cert.image)}
                aria-label={`${cert.title} - Sertifikayı Görüntüle`}
              >
                <img src={cert.image} className="cert-thumbnail" alt={cert.title} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <button className="modal-close" onClick={(e) => { e.stopPropagation(); setSelectedCert(null); }}>X</button>
          <img 
            src={selectedCert} 
            className="modal-image" 
            alt="Sertifika Görünümü" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
}

export default Education;
